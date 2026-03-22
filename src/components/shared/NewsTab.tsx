'use client';

import { useState } from 'react';

const tabs = [
  { id: 'closed', label: '休診のお知らせ' },
  { id: 'hospital', label: '病院からのお知らせ' },
  { id: 'important', label: '重要なお知らせ' },
];

export default function NewsTab() {
  const [activeTab, setActiveTab] = useState('closed');

  return (
    <div>
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'border-b-2 border-primary text-primary'
                : 'text-text-light hover:text-text'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex min-h-[200px] items-center justify-center rounded-b-lg bg-bg-off p-8">
        <p className="text-sm text-text-muted">お知らせが入ります</p>
      </div>
    </div>
  );
}
