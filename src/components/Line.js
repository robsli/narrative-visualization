import React, { useState } from 'react';

const Line = (props) => {
    const {
        isSelected,
        pathData,
        selectedTeam,
        updateSelectedTeam,
    } = props;

    const [isHovering, setIsHovering] = useState(false);

    return (
        <path
            fill="none"
            className={`
                stroke-current cursor-pointer
                ${isSelected
                    ? 'text-gray-700'
                    : isHovering
                        ? 'text-blue-600'
                        : 'text-gray-300'}
            `}
            d={pathData}
            strokeWidth={isSelected ? 8 : 3}
            onClick={() => updateSelectedTeam(selectedTeam)}
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        ></path>
    )
}

export default Line;
