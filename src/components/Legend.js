import React from 'react';

const Legend = ({ narrativeMode, stat }) => (
    <div className="flex w-full py-3 space-x-8">
        <div className="capitalize">
            Statistic: {stat === 'elo' ? 'Elo' : 'RAPTOR'}
        </div>
        <div className="flex-nowrap flex space-x-6">
            <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-3.5 h-3.5 border-2 border-green-500 rounded-full animate-pulse">
                    <div className="animate-pulse w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                </div>
                <span>Win</span>
            </div>

            <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-3.5 h-3.5 border-2 border-red-500 rounded-full">
                </div>
                <span>Loss</span>
            </div>

            <div className="flex items-center space-x-2">
                <div className="w-10 h-1.5 bg-gray-700">
                </div>
                <span>{ narrativeMode
                    ? `Team with highest ${stat === 'elo' ? 'Elo' : 'RAPTOR score'} as of selected timeframe`
                    : 'Selected team'
                }</span>
            </div>

            <div className="flex items-center space-x-2">
                <div className="w-10 h-0.5 bg-gray-300">
                </div>
                <span>Other teams</span>
            </div>
        </div>
    </div>
)

export default Legend;
