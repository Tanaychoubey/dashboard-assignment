import React, { useState } from 'react';
import { Search, Bell, Settings, User, Menu } from 'lucide-react';

export const Header: React.FC = () => {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="sticky top-0 z-10 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                    <button className="lg:hidden p-2 hover:bg-gray-700 rounded-lg text-gray-400">
                        <Menu size={20} />
                    </button>
                    <h1 className="text-xl font-semibold text-white">Dashboard</h1>
                </div>

                <div className="hidden md:block flex-1 max-w-xl mx-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-gray-900 text-gray-300 pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <button
                        className="md:hidden p-2 hover:bg-gray-700 rounded-lg text-gray-400"
                        onClick={() => setShowSearch(!showSearch)}
                    >
                        <Search size={20} />
                    </button>
                    <button className="p-2 hover:bg-gray-700 rounded-lg text-gray-400">
                        <Bell size={20} />
                    </button>
                    <button className="hidden sm:block p-2 hover:bg-gray-700 rounded-lg text-gray-400">
                        <Settings size={20} />
                    </button>
                    <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                        <User size={20} className="text-gray-300" />
                    </div>
                </div>
            </div>

            {showSearch && (
                <div className="p-4 md:hidden border-t border-gray-700">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-gray-900 text-gray-300 pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};