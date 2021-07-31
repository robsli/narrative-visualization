import React from 'react';

const Legend = ({ narrativeMode }) => (
    <div className="flex justify-center w-full py-3">
        <div className="flex-nowrap flex space-x-4">
            <div className="flex items-center space-x-1">
                <div className="flex items-center justify-center w-3.5 h-3.5 border-2 border-green-500 rounded-full animate-pulse">
                    <div className="animate-pulse w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                </div>
                <span>Win</span>
            </div>

            <div className="flex items-center space-x-1">
                <div className="flex items-center justify-center w-3.5 h-3.5 border-2 border-red-500 rounded-full">
                </div>
                <span>Loss</span>
            </div>

            <div className="flex items-center space-x-1">
                <div className="w-10 h-1.5 bg-gray-700">
                </div>
                <span>{ narrativeMode
                    ? 'Team with highest statistic value as of selected timeframe'
                    : 'Selected team'
                }</span>
            </div>
        </div>
    </div>
)

export default Legend;
