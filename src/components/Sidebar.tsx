import React, { useState } from 'react';
import { Home, BarChart2, Users, ShoppingBag, Settings, LogOut, Menu } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard', active: true },
    { icon: <BarChart2 size={20} />, label: 'Analytics' },
    { icon: <Users size={20} />, label: 'Customers' },
    { icon: <ShoppingBag size={20} />, label: 'Products' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <>
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-20"
          onClick={() => setIsExpanded(false)}
        />
      )}

      <div className={`
        fixed left-0 top-0 h-full bg-gray-800 text-white z-30
        transition-all duration-300
        ${isExpanded ? 'w-64' : 'w-16'}
        ${isExpanded ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full p-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden absolute right-2 top-2 p-2 hover:bg-gray-700 rounded-lg"
          >
            <Menu size={20} />
          </button>

          <div className={`flex items-center gap-2 mb-8 mt-2 ${!isExpanded && 'justify-center'}`}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg shrink-0" />
            <span className={`text-xl font-bold transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 lg:hidden'
              }`}>
              Dashboard
            </span>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href="/"
                className={`
                  flex items-center gap-3 rounded-lg hover:bg-gray-700 transition-colors
                  ${item.active ? 'bg-gray-700' : ''}
                  ${isExpanded ? 'px-4 py-2' : 'p-2 justify-center'}
                  group relative
                `}
              >
                <div className="shrink-0">{item.icon}</div>
                <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 lg:hidden'
                  }`}>
                  {item.label}
                </span>

                <div className={`
                  absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm
                  rounded whitespace-nowrap opacity-0 group-hover:opacity-100
                  pointer-events-none transition-opacity duration-200
                  ${isExpanded ? 'hidden' : 'lg:block'}
                `}>
                  {item.label}
                </div>
              </a>
            ))}
          </nav>

          <div className="mt-auto">
            <a
              href="/"
              className={`
                flex items-center gap-3 rounded-lg hover:bg-gray-700 text-red-400 transition-colors
                ${isExpanded ? 'px-4 py-2' : 'p-2 justify-center'}
                group relative
              `}
            >
              <div className="shrink-0"><LogOut size={20} /></div>
              <span className={`transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 lg:hidden'
                }`}>
                Logout
              </span>

              <div className={`
                absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm
                rounded whitespace-nowrap opacity-0 group-hover:opacity-100
                pointer-events-none transition-opacity duration-200
                ${isExpanded ? 'hidden' : 'lg:block'}
              `}>
                Logout
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};