import React from 'react';
import AIBanner from './documents/AIBanner';
import DocumentList from './documents/DocumentList';

const Documents: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-navy-900">Documents</h1>
                <p className="text-slate-500">Centralized hub for all logistics and trade documentation.</p>
            </div>

            <AIBanner />
            <DocumentList />
        </div>
    );
};

export default Documents;
