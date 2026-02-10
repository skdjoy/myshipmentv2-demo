import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Clock, Plus, BarChart2, PieChart as PieChartIcon, AlertTriangle, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, CartesianGrid } from 'recharts';
import clsx from 'clsx';

interface ChartData {
    type: 'bar' | 'pie' | 'area';
    data: any[];
    keys: string[]; // For bar/area charts
    colors: string[];
    title: string;
}

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
    chart?: ChartData;
}

const RecommendedQuestions = [
    { label: "Status of PO-12345?", icon: Clock, query: "What is the status of PO-12345?" },
    { label: "Current TAT Performance?", icon: TrendingUp, query: "Show me current TAT performance." },
    { label: "Any delays in PO-12345?", icon: AlertTriangle, query: "Are there any delays for PO-12345?" },
    { label: "Risk at POL Chittagong?", icon: AlertTriangle, query: "Which shipments from POS Chittagong are at risk?" },
    { label: "Container Optimization KPI?", icon: BarChart2, query: "Show me container optimization KPIs." },
];

const MGHAsk = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi! I'm your MGH Logistics AI. I can help you with real-time shipment tracking, PO status, risk analysis, and KPI optimization. How can I assist you today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const generateResponse = (query: string): { text: string, chart?: ChartData } => {
        const lowerQuery = query.toLowerCase();

        // 1. Shipment/PO Status
        if (lowerQuery.includes('status') && lowerQuery.includes('po-12345')) {
            return {
                text: "PO-12345 is currently in **Production**. The estimated shipping date (ESD) is Nov 15, 2026. Everything is on schedule. Here is the progress:",
                chart: {
                    type: 'bar',
                    title: "PO-12345 Progress",
                    data: [{ name: 'Completion', value: 65 }],
                    keys: ['value'],
                    colors: ['#00D4AA']
                }
            };
        }

        // 2. TAT (Turn Around Time)
        if (lowerQuery.includes('tat') || lowerQuery.includes('turn around')) {
            return {
                text: "Current end-to-end TAT is **24 days**, which is **2 days faster** than last month. Here is the trend over the last 6 months:",
                chart: {
                    type: 'area',
                    title: "End-to-End TAT Trend (Days)",
                    data: [
                        { name: 'Aug', value: 28 }, { name: 'Sep', value: 27 },
                        { name: 'Oct', value: 26 }, { name: 'Nov', value: 25 },
                        { name: 'Dec', value: 25 }, { name: 'Jan', value: 24 }
                    ],
                    keys: ['value'],
                    colors: ['#1E6091']
                }
            };
        }

        // 3. Delays
        if (lowerQuery.includes('delay') && lowerQuery.includes('po-12345')) {
            return {
                text: "Yes, **PO-12345** is flagged for a potential **3-day delay** due to a raw material shortage reported by the supplier. We are monitoring the situation.",
                chart: {
                    type: 'bar', // Using a simple bar to visualize delay impact? Or maybe no chart is better. Let's do a comparison.
                    title: "Delay Impact (Days)",
                    data: [{ name: 'Planned', value: 0 }, { name: 'Projected Delay', value: 3 }],
                    keys: ['value'],
                    colors: ['#94A3B8', '#EF4444']
                }
            };
        }

        // 4. Exceptions / Risk (Chittagong)
        if (lowerQuery.includes('risk') || (lowerQuery.includes('chittagong') && lowerQuery.includes('shipment'))) {
            return {
                text: "There are **3 shipments** from POL Chittagong at risk due to unexpected port congestion: **S-9012**, **S-9013**, and **S-9014**.",
                chart: {
                    type: 'pie',
                    title: "Risk Distribution by Carrier",
                    data: [
                        { name: 'MSC (At Risk)', value: 2, color: '#EF4444' },
                        { name: 'Maersk (On Time)', value: 5, color: '#00D4AA' },
                        { name: 'Hapag (Delayed)', value: 1, color: '#F59E0B' }
                    ],
                    keys: ['value'],
                    colors: ['#EF4444', '#00D4AA', '#F59E0B']
                }
            };
        }

        // 5. KPI / Optimization
        if (lowerQuery.includes('kpi') || lowerQuery.includes('optimization')) {
            return {
                text: "Current container utilization is at **88%**. Consolidating 4 pending LCL bookings from Shanghai could improve this to **92%**.",
                chart: {
                    type: 'pie',
                    title: "Container Utilization",
                    data: [
                        { name: 'Utilized Space', value: 88, color: '#1E6091' },
                        { name: 'Empty Space', value: 12, color: '#E2E8F0' }
                    ],
                    keys: ['value'],
                    colors: ['#1E6091', '#E2E8F0']
                }
            };
        }

        // Generic delays query
        if (lowerQuery.includes('delay')) {
            return {
                text: "I've detected potential delays on **3 US-bound shipments** due to congestion at LAX.",
                chart: {
                    type: 'bar',
                    title: "Shipments at Risk by Lane",
                    data: [
                        { name: 'SHA-LAX', value: 3 },
                        { name: 'SZN-LGB', value: 1 },
                        { name: 'NGB-NYC', value: 0 }
                    ],
                    keys: ['value'],
                    colors: ['#EF4444']
                }
            };
        }

        // Default
        return {
            text: "I can assist with shipment tracking, PO status, risk analysis, and KPIs. Try tapping one of the suggested questions below."
        };
    };

    const handleSendMessage = (e?: React.FormEvent, overrideText?: string) => {
        e?.preventDefault();
        const textToSend = overrideText || inputText;
        if (!textToSend.trim()) return;

        const userMsg: Message = {
            id: Date.now(),
            text: textToSend,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsTyping(true);

        // Simulate AI thinking delay
        setTimeout(() => {
            const response = generateResponse(textToSend);
            const botMsg: Message = {
                id: Date.now() + 1,
                text: response.text,
                chart: response.chart,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200);
    };

    // Helper to render bold text
    const renderMessageText = (text: string) => {
        return text.split(/(\*\*.*?\*\*)/).map((part, i) =>
            part.startsWith('**') && part.endsWith('**') ?
                <strong key={i} className="font-bold text-navy-900">{part.slice(2, -2)}</strong> :
                part
        );
    };

    const renderChart = (chart: ChartData) => {
        if (chart.type === 'bar') {
            return (
                <div className="mt-4 h-64 w-full bg-white rounded-xl border border-slate-100 p-4">
                    <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">{chart.title}</p>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chart.data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 11 }} />
                            <Tooltip cursor={{ fill: '#F1F5F9' }} />
                            <Bar dataKey="value" fill={chart.colors[0]} radius={[0, 4, 4, 0]} barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            );
        }
        if (chart.type === 'area') {
            return (
                <div className="mt-4 h-64 w-full bg-white rounded-xl border border-slate-100 p-4">
                    <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">{chart.title}</p>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chart.data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={chart.colors[0]} stopOpacity={0.8} />
                                    <stop offset="95%" stopColor={chart.colors[0]} stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                            <Tooltip />
                            <Area type="monotone" dataKey="value" stroke={chart.colors[0]} fillOpacity={1} fill="url(#colorValue)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            );
        }
        if (chart.type === 'pie') {
            return (
                <div className="mt-4 h-64 w-full bg-white rounded-xl border border-slate-100 p-4 flex flex-col items-center">
                    <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide w-full text-left">{chart.title}</p>
                    <div className="w-full flex-1 flex items-center justify-center">
                        <div className="w-48 h-48">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={chart.data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={40}
                                        outerRadius={60}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {chart.data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color || chart.colors[index % chart.colors.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        {/* Legend */}
                        <div className="ml-4 space-y-2">
                            {chart.data.map((entry, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color || chart.colors[index % chart.colors.length] }}></div>
                                    <span className="text-xs text-slate-600">{entry.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="flex h-full bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden animate-fade-in">
            {/* Sidebar History */}
            <div className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col hidden md:flex">
                <div className="p-4">
                    <button
                        onClick={() => setMessages([messages[0]])}
                        className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 p-3 rounded-lg text-sm font-medium text-navy-900 hover:bg-slate-50 hover:border-ocean/50 transition-colors shadow-sm"
                    >
                        <Plus size={16} />
                        New Chat
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6">
                    <div>
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">Today</h4>
                        <div className="space-y-1">
                            <button className="w-full text-left p-2 rounded-lg hover:bg-slate-200/50 text-sm text-slate-700 truncate transition-colors flex items-center gap-2">
                                <Clock size={14} className="text-slate-400" />
                                PO-12345 Status
                            </button>
                            <button className="w-full text-left p-2 rounded-lg hover:bg-slate-200/50 text-sm text-slate-700 truncate transition-colors flex items-center gap-2">
                                <Clock size={14} className="text-slate-400" />
                                Container Optimization
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-slate-200">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-ocean text-white flex items-center justify-center">
                            <User size={16} />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-medium text-navy-900 truncate">Inditex Admin</p>
                            <p className="text-xs text-slate-500 truncate">Premium Plan</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col relative bg-white">
                {/* Header (Mobile Only) */}
                <div className="md:hidden p-4 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-bold text-navy-900">MGH Ask</span>
                    <button className="p-2 bg-slate-100 rounded-lg"><Plus size={18} /></button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scroll-smooth">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={clsx(
                                "flex gap-4 md:gap-6 max-w-3xl mx-auto",
                                msg.sender === 'user' ? "flex-row-reverse" : "flex-row"
                            )}
                        >
                            <div className={clsx(
                                "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm",
                                msg.sender === 'user' ? "bg-ocean text-white" : "bg-white border border-slate-200 text-ocean"
                            )}>
                                {msg.sender === 'user' ? <User size={18} /> : <Bot size={20} />}
                            </div>
                            <div className={clsx(
                                "flex-1 p-4 md:p-6 rounded-2xl text-sm md:text-base shadow-sm leading-relaxed",
                                msg.sender === 'user'
                                    ? "bg-ocean text-white rounded-tr-none"
                                    : "bg-slate-50 text-slate-700 border border-slate-100 rounded-tl-none"
                            )}>
                                {renderMessageText(msg.text)}
                                {msg.chart && renderChart(msg.chart)}
                                <div className={clsx(
                                    "text-[10px] mt-2 opacity-70",
                                    msg.sender === 'user' ? "text-blue-100" : "text-slate-400"
                                )}>
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex gap-4 md:gap-6 max-w-3xl mx-auto">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-ocean flex-shrink-0">
                                <Bot size={20} />
                            </div>
                            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 md:p-6 border-t border-slate-100 bg-white">
                    <div className="max-w-3xl mx-auto space-y-4">
                        {/* Recommended Questions Grid (Show only when there are few messages) */}
                        {messages.length < 2 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                                {RecommendedQuestions.map((q, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSendMessage(undefined, q.query)}
                                        className="text-left p-3 rounded-xl border border-slate-200 hover:border-ocean/50 hover:bg-ocean/5 transition-all group"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-white group-hover:text-ocean transition-colors">
                                                <q.icon size={16} className="text-slate-500 group-hover:text-ocean" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-navy-900 group-hover:text-ocean">{q.label}</p>
                                                <p className="text-xs text-slate-500 mt-1 line-clamp-1 group-hover:text-slate-600">{q.query}</p>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}

                        <form onSubmit={handleSendMessage} className="relative">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Message MGH Ask..."
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-5 pr-14 py-4 focus:outline-none focus:border-ocean/50 focus:ring-4 focus:ring-ocean/10 transition-all shadow-sm"
                            />
                            <button
                                type="submit"
                                disabled={!inputText.trim()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-ocean text-white rounded-xl hover:bg-ocean/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                <Send size={20} />
                            </button>
                        </form>
                        <p className="text-center text-[10px] text-slate-400 mt-3">
                            MGH Ask can make mistakes. Consider checking important information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MGHAsk;
