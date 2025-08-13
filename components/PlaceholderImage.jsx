'use client'

import React from 'react'

/**
 * A component that creates a placeholder SVG image to replace missing assets
 */
export const PlaceholderImage = ({ width = 184, height = 158, text = "Food Image" }) => {
  return (
    <svg 
      width={width} 
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        background: '#f0f0f0',
        border: '1px dashed #999' 
      }}
    >
      <rect width={width} height={height} fill="#f0f0f0" />
      <text
        x="50%"
        y="50%"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#999"
      >
        {text}
      </text>
    </svg>
  )
}

export default PlaceholderImage
