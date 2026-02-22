import React from 'react';
import { type EdgeProps } from '@xyflow/react';

/**
 * Custom edge for co-reference arcs.
 *
 * Instead of connecting via the default top/bottom handles (which forces the
 * curve to route through intermediate nodes), we manually compute a cubic
 * Bézier that exits the source from the TOP and bows upward by a fixed amount
 * before descending into the target's top.  This keeps the arc entirely above
 * the tree nodes.
 */
export const CoRefEdge: React.FC<EdgeProps> = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    markerEnd,
    style,
    label,
    labelStyle,
    labelBgStyle,
    data,
}) => {
    // sourceNodeTopY is injected by SyntaxTree after layout: it's position.y of
    // the antecedent node, which is the exact top of that node in flow space.
    // Using it avoids relying on sourceHandleId / handle registration.
    const topY: number = (data as Record<string, number> | undefined)?.sourceNodeTopY
        ?? (sourceY - 120); // fallback: estimate top from bottom handle

    // start = top-center of Topic; end = top-center of ghost
    const startX = sourceX;
    const startY = topY;
    const endX = targetX;
    const endY = targetY;

    const verticalDrop = Math.abs(endY - startY);
    const swing = Math.max(160, verticalDrop * 0.55);

    // CP1: sweep right from Topic's top, arcing up halfway to the SENTENCE connector
    // RANK_SEP=160, so the gap above Topic is ~80px; we peak ~60px above Topic's top
    const c1x = startX + swing;
    const c1y = startY - 60;

    // CP2: approach [他] from the right, above it
    const c2x = endX + swing * 0.25;
    const c2y = endY - 50;

    const d = `M ${startX},${startY} C ${c1x},${c1y} ${c2x},${c2y} ${endX},${endY}`;

    // Label on the right side of the sweep
    const labelX = c1x + 10;
    const labelY = (startY + endY) / 2;

    const labelText = typeof label === 'string' ? label : '';
    const LABEL_PAD_X = 6;
    const LABEL_PAD_Y = 3;
    const approxWidth = labelText.length * 5.5 + LABEL_PAD_X * 2;
    const approxHeight = 14 + LABEL_PAD_Y * 2;

    return (
        <g>
            <path
                id={id}
                d={d}
                fill="none"
                style={style}
                markerEnd={markerEnd}
            />
            {labelText && (
                <g transform={`translate(${labelX}, ${labelY})`}>
                    <rect
                        x={-approxWidth / 2}
                        y={-approxHeight / 2}
                        width={approxWidth}
                        height={approxHeight}
                        rx={3}
                        ry={3}
                        style={labelBgStyle as React.CSSProperties}
                    />
                    <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={labelStyle as React.CSSProperties}
                    >
                        {labelText}
                    </text>
                </g>
            )}
        </g>
    );
};
