import { useEffect } from 'react'

export default function VideoModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <button className="video-close" onClick={onClose} aria-label="Close">&times;</button>
        <video className="video-player" src="/demo-video.mp4" controls autoPlay />
      </div>
    </div>
  )
}
