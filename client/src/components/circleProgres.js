
function cleanPercentage (percentage) {
    const isNegOrNaN = !Number.isFinite(+percentage) || percentage < 0;
    const isTooHigh = percentage > 100;
    return isNegOrNaN ? 0 : isTooHigh ? 100 : +percentage;
}

function Circle ({ color, percentage }) {
    const r = 70;
    const circ = 2 * Math.PI * r
    const strokePct = ((100 - percentage) * circ) / 100; 
    return (
        <circle 
            r={r}
            cx={100}
            cy={100}
            fill={'transparent'}
            stroke={strokePct !== circ ? color : ''}
            strokeWidth={'2rem'}
            strokeDasharray={circ}
            strokeDashoffset={percentage ? strokePct : 0}
        />
    )

    // return (
    //     <div>
    //         <svg width='200' height= '200'>
    //             <g transform='rotate(-90 100 100)'>
    //                 <circle r='70' cx='100' cy='100' fill='transparent' stroke='lightgrey' stroke-width='.75rem' stroke-dasharray='439.8' stroke-dashoffset='0' />
    //                 <circle r="70" cx="100" cy="100" fill="transparent" stroke="limegreen" stroke-width=".8rem" stroke-dasharray="439.8" stroke-dashoffset="66"/>
    //             </g>
    //             <text x='50%' y='50%' dominantBaseline='central' text-anchor='middle' fill='white'>85%</text>
    //         </svg>
    //     </div>
    // )
}

function Text ({ percentage }) {
    return (
        <text
            x='50%'
            y='50%'
            dominantBaseline='central'
            textAnchor="middle"
            fontSize={'1.5rem'}
            fill='white'
        >
            {percentage.toFixed(0)}%
        </text>
    )
}

function Graph ({ color, percentage }) {
    const pct = cleanPercentage(percentage)
    return (
        <svg width={200} height={200}>
            <g transform={`rotate(-90 ${'100 100'})`}>
                <Circle color='lightgrey'/>
                <Circle color={color} percentage={pct}/>
            </g>
            <Text percentage={pct}/>
        </svg>
    )
}

export default Graph
