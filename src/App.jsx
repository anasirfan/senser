import { useState } from 'react'
import en from './content/en.json'
import ur from './content/ur.json'
import LeftContent from './components/LeftContent'
import RightSide from './components/RightSide'
import ContactModal from './components/ContactModal'
import VideoModal from './components/VideoModal'

const languages = { en, ur }

function getInitialLang() {
  const path = window.location.pathname.replace(/^\//, '')
  return languages[path] ? path : 'en'
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang)
  const [modalOpen, setModalOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)

  const content = languages[lang]

  const toggleLang = () => {
    const next = lang === 'en' ? 'ur' : 'en'
    setLang(next)
    window.history.replaceState(null, '', next === 'en' ? '/' : `/${next}`)
  }

  return (
    <div className="page">
      <div className="bg-circle" />
      <button className="lang-toggle" onClick={toggleLang}>
        {lang === 'en' ? 'اردو' : 'English'}
      </button>
      <LeftContent
        content={content}
        onCtaClick={() => setModalOpen(true)}
        onVideoClick={() => setVideoOpen(true)}
      />
      <RightSide />
      {modalOpen && (
        <ContactModal content={content} onClose={() => setModalOpen(false)} />
      )}
      {videoOpen && (
        <VideoModal onClose={() => setVideoOpen(false)} />
      )}
    </div>
  )
}
