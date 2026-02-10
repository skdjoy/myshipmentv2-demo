import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import clsx from 'clsx';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const AIChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi! I'm your MGH Logistics AI. Ask me about shipment status, delays, or KPIs.",
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
    }, [messages, isTyping, isOpen]);

    const generateResponse = (query: string) => {
        const lowerQuery = query.toLowerCase();

        // 1. Shipment/PO Status
        if (lowerQuery.includes('status') || lowerQuery.includes('po-')) {
            if (lowerQuery.includes('12345')) {
                return "PO-12345 is currently in **Production**. The estimated shipping date (ESD) is Nov 15, 2026. Everything is on schedule.";
            }
            return "I can check that. Most active POs are in production. For specific status, please provide a PO number like PO-12345.";
        }

        // 2. TAT (Turn Around Time)
        if (lowerQuery.includes('tat') || lowerQuery.includes('turn around')) {
            return "Current end-to-end TAT is **24 days**, which is **2 days faster** than last month. The improvement is driven by faster customs clearance in Rotterdam.";
        }

        // 3. Delays
        if (lowerQuery.includes('delay') || lowerQuery.includes('late')) {
            if (lowerQuery.includes('po-12345')) {
                return "Yes, **PO-12345** is flagged for a potential **3-day delay** due to a raw material shortage reported by the supplier.";
            }
            return "I've detected potential delays on **3 US-bound shipments** due to congestion at LAX. Would you like to see options to reroute?";
        }

        // 4. Exceptions / Risk
        if (lowerQuery.includes('risk') || lowerQuery.includes('exception') || lowerQuery.includes('chittagong')) {
            return "There are **3 shipments** from POL Chittagong at risk due to unexpected port congestion: **S-9012**, **S-9013**, and **S-9014**. We recommend reviewing air freight options for urgent goods.";
        }

        // 5. KPI / Optimization
        if (lowerQuery.includes('kpi') || lowerQuery.includes('optimization') || lowerQuery.includes('utilization')) {
            return "Current container utilization is at **88%**. We've identified an opportunity to consolidate 4 pending LCL bookings from Shanghai, which could improve utilization to **92%** and save approx. **$1,200**.";
        }

        // Default
        return "I can help with shipment tracking, PO status, risk analysis, and KPIs. Try asking: 'Any delays in PO-12345?' or 'What is our current TAT?'";
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
        }, 1000);
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
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fade-in-up">
                    {/* Header */}
                    <div className="bg-navy-900 p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-white/10 rounded-lg">
                                <Sparkles size={18} className="text-air" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">MGH AI Assistant</h3>
                                <p className="text-[10px] text-slate-300">Online • Powered by Control Tower™</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 custom-scrollbar">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={clsx(
                                    "flex gap-3",
                                    msg.sender === 'user' ? "flex-row-reverse" : "flex-row"
                                )}
                            >
                                <div className={clsx(
                                    "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                                    msg.sender === 'user' ? "bg-ocean text-white" : "bg-white border border-slate-200 text-ocean"
                                )}>
                                    {msg.sender === 'user' ? <User size={14} /> : <Bot size={16} />}
                                </div>
                                <div className={clsx(
                                    "max-w-[80%] p-3 rounded-2xl text-sm shadow-sm",
                                    msg.sender === 'user'
                                        ? "bg-ocean text-white rounded-tr-none"
                                        : "bg-white text-slate-600 border border-slate-100 rounded-tl-none"
                                )}>
                                    {renderMessageText(msg.text)}
                                    <div className={clsx(
                                        "text-[10px] mt-1 opacity-70",
                                        msg.sender === 'user' ? "text-blue-100" : "text-slate-400"
                                    )}>
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-ocean">
                                    <Bot size={16} />
                                </div>
                                <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Ask about shipments..."
                                className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-ocean transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={!inputText.trim()}
                                className="p-2 bg-ocean text-white rounded-full hover:bg-ocean/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 bg-ocean hover:bg-ocean/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
                >
                    <MessageSquare size={24} />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>

                    {/* Tooltip */}
                    <div className="absolute right-full mr-4 bg-navy-900 text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Ask AI Assistant
                        <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-navy-900"></div>
                    </div>
                </button>
            )}
        </div>
    );
};

export default AIChatWidget;
