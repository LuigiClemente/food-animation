'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useWindowSize } from './utility'
import PlaceholderImage from './PlaceholderImage'

const FoodAnimation = () => {
  const [isClient, setIsClient] = useState(false)
  const pageRef = useRef(null)
  const size = useWindowSize()
  const [load, setLoad] = useState(false)
  const [assetError, setAssetError] = useState(false)

  // Only run on client-side to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Safely handle window reference for static export compatibility
  const iframeSrc = 
    typeof window !== 'undefined' ? `${window.origin}/foodGallery/FoodGallery.htm` : '/foodGallery/FoodGallery.htm'
    
  // Handle iframe load errors
  useEffect(() => {
    const handleIframeError = () => {
      console.error('Food gallery iframe failed to load properly')
      setAssetError(true)
    }
    
    // Listen for error events from the iframe
    const iframe = pageRef.current
    if (iframe) {
      iframe.addEventListener('error', handleIframeError)
    }
    
    return () => {
      if (iframe) {
        iframe.removeEventListener('error', handleIframeError)
      }
    }
  }, [isClient])

  return (
    <div className="min-h-screen bg-black">
      {isClient ? (
        assetError ? (
          // Display fallback content if we detect asset loading errors
          <div className="flex h-screen w-full items-center justify-center flex-col">
            <div className="mb-4 text-white text-xl">Food Animation</div>
            <PlaceholderImage width={400} height={300} text="Food Animation Preview" />
            <div className="mt-4 text-white text-sm opacity-70">Some food gallery assets could not be loaded</div>
          </div>
        ) : (
          <div className="h-full w-full">
            <iframe
              id="food-iframe"
              src={iframeSrc}
              scrolling="yes"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; fullscreen"
              style={{}}
              width="100%"
              ref={pageRef}
              height={size.height}
              onLoad={() => setLoad(true)}
              onError={() => setAssetError(true)}
              loading="lazy"
              title="Food Gallery"
              className="w-full"
            />
          </div>
        )
      ) : (
        // Display a simple placeholder during server-side rendering to avoid hydration mismatch
        <div className="flex h-screen w-full items-center justify-center">
          <div className="p-4 text-white">Loading...</div>
        </div>
      )}
    </div>
  )
}

export default FoodAnimation
