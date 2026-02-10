import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Clock, Plus } from 'lucide-react';
import clsx from 'clsx';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

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

    const generateResponse = (query: string) => {
        const lowerQuery = query.toLowerCase();

        // 1. Shipment/PO Status
        if (lowerQuery.includes('status') || lowerQuery.includes('po-')) {
            if (lowerQuery.includes('12345')) {
                return "PO-12345 is currently in **Production**. The estimated shipping date (ESD) is Nov 15, 2026. Everything is on schedule.";
            }
            return "I can check that for you. Most active POs are currently in production. To get a specific status, please provide a PO number like PO-12345.";
        }

        // 2. TAT (Turn Around Time)
        if (lowerQuery.includes('tat') || lowerQuery.includes('turn around')) {
            return "Our current end-to-end TAT is **24 days**, which is **2 days faster** than last month. This improvement is largely driven by faster customs clearance processing in Rotterdam.";
        }

        // 3. Delays
        if (lowerQuery.includes('delay') || lowerQuery.includes('late')) {
            if (lowerQuery.includes('po-12345')) {
                return "Yes, unfortunately **PO-12345** is flagged for a potential **3-day delay** due to a raw material shortage reported by the supplier.";
            }
            return "I've detected potential delays on **3 US-bound shipments** due to severe congestion at LAX. Would you like me to show you rerouting options?";
        }

        // 4. Exceptions / Risk
        if (lowerQuery.includes('risk') || lowerQuery.includes('exception') || lowerQuery.includes('chittagong')) {
            return "There are currently **3 shipments** from POL Chittagong at risk due to unexpected port congestion: **S-9012**, **S-9013**, and **S-9014**. We recommend reviewing air freight options for any urgent goods in these lots.";
        }

        // 5. KPI / Optimization
        if (lowerQuery.includes('kpi') || lowerQuery.includes('optimization') || lowerQuery.includes('utilization')) {
            return "Current container utilization is sitting at **88%**. We've identified an opportunity to consolidate 4 pending LCL bookings from Shanghai, which could push utilization to **92%** and save approximately **$1,200**.";
        }

        // Default
        return "I can assist with shipment tracking, PO status, risk analysis, and KPIs. Try asking something like: 'Any delays in PO-12345?' or 'What is our current TAT?'";
    };

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputText.trim()) return;

        const userMsg: Message = {
            id: Date.now(),
            text: inputText,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputText('');
        setIsTyping(true);

        // Simulate AI thinking delay
        setTimeout(() => {
            const responseText = generateResponse(userMsg.text);
            const botMsg: Message = {
                id: Date.now() + 1,
                text: responseText,
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
                    <div>
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">Yesterday</h4>
                        <div className="space-y-1">
                            <button className="w-full text-left p-2 rounded-lg hover:bg-slate-200/50 text-sm text-slate-600 truncate transition-colors flex items-center gap-2">
                                <Clock size={14} className="text-slate-400" />
                                Chittagong Delays
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
                    {messages.length === 0 && (
                        <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                                <Sparkles size={32} className="text-slate-400" />
                            </div>
                            <h2 className="text-xl font-bold text-slate-700">How can I help you today?</h2>
                        </div>
                    )}

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
                    <div className="max-w-3xl mx-auto">
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
