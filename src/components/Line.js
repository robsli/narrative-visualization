import React, { useEffect, useState } from 'react';

const Line = (props) => {
    const {
        pathData,
        selectedTeam,
        team,
        updateSelectedTeam,
    } = props;

    const isSelected = team === selectedTeam;

    const [isHovering, setIsHovering] = useState(false);

    const [labelX, setLabelX] = useState();
    const [labelY, setLabelY] = useState();

    useEffect(() => {
        if ((isSelected || isHovering)) {
            const pathDataPoints = pathData.split('L');
            const [x, y] = pathDataPoints[pathDataPoints.length - 1].split(',');

            setLabelX(Number(x) + 12);
            setLabelY(Number(y) + 6);
        }
    }, [isHovering, isSelected, pathData]);

    return (
        <>
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
                `.trim()}
                d={pathData}
                strokeWidth={isSelected || isHovering ? 6 : 2}
                onClick={() => updateSelectedTeam(team)}
                onMouseOver={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            ></path>

            {(isSelected || isHovering)
                && labelX && labelY && (
                    <text
                        className={`
                            text-base
                            ${isSelected ? 'text-black' : 'text-purple-800'}
                        `.trim()}
                        transform={`translate(${labelX}, ${labelY})`}
                    >{team}</text>
                )
            }
        </>
    )
}

export default Line;
