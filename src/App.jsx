import { useState, useEffect } from 'react'
import en from './content/en.json'
import ur from './content/ur.json'
import LeftContent from './components/LeftContent'
import RightSide from './components/RightSide'
import ContactModal from './components/ContactModal'
import VideoModal from './components/VideoModal'
import LoginPage from './components/LoginPage'
import AdminDashboard from './components/AdminDashboard'
import { supabase } from './lib/supabase'

const languages = { en, ur }

function getInitialLang() {
  const path = window.location.pathname.replace(/^\//, '')
  return languages[path] ? path : 'en'
}

function AdminRoute() {
  const [session, setSession] = useState(null)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s)
      setChecking(false)
    })
  }, [])

  if (checking) return null
  if (!session) return <LoginPage onLogin={() => window.location.reload()} />
  return <AdminDashboard />
}

function LandingPage() {
  const [lang] = useState(getInitialLang)
  const [modalOpen, setModalOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)

  const content = languages[lang]

  return (
    <div className="page">
      <div className="bg-circle" />
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

export default function App() {
  const isAdmin = window.location.pathname.startsWith('/admin')
  return isAdmin ? <AdminRoute /> : <LandingPage />
}
