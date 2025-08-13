'use client'

import { useState, useEffect } from 'react'

// Simple hook to get window dimensions
export function useWindowSize() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      
      // Set size initially
      handleResize()
      
      // Add event listener
      window.addEventListener('resize', handleResize)
      
      // Clean up
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return size
}
