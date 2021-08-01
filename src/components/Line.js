import React, { useEffect, useState } from 'react';

const Line = (props) => {
    const {
        pathData,
        narrativeMode,
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

    const handleUpdateSelectedTeam = () => {
        if (!narrativeMode) {
            updateSelectedTeam(team);
        }
    }

    return (
        <>
            <path
                fill="none"
                className={`
                    stroke-current transition-all ease-in-out
                    ${narrativeMode ? 'cursor-not-allowed' : 'cursor-pointer'}
                    ${isSelected
                        ? 'text-gray-600'
                        : isHovering
                            ? 'text-purple-500'
                            : 'text-gray-300'}
                `.trim()}
                d={pathData}
                strokeWidth={isSelected || isHovering ? 6 : 2}
                onClick={handleUpdateSelectedTeam}
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
