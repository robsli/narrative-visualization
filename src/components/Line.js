import React, { useState } from 'react';

const Line = (props) => {
    const {
        pathData,
        selectedTeam,
        team,
        updateSelectedTeam,
    } = props;

    const [isHovering, setIsHovering] = useState(false);

    const isSelected = team === selectedTeam;

    return (
        <path
            fill="none"
            className={`
                stroke-current cursor-pointer
                transition-all ease-in-out
                ${isSelected
                    ? 'text-gray-600'
                    : isHovering
                        ? 'text-purple-500'
                        : 'text-gray-200'}
            `}
            d={pathData}
            strokeWidth={isSelected || isHovering ? 6 : 2}
            onClick={() => updateSelectedTeam(team)}
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        ></path>
    )
}

export default Line;
