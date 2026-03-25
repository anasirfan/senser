import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error) setContacts(data || [])
    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.reload()
  }

  const exportCSV = () => {
    if (!contacts.length) return
    const headers = ['Full Name', 'Company', 'Work Email', 'Date']
    const rows = contacts.map((c) => [
      c.full_name,
      c.company,
      c.work_email,
      new Date(c.created_at).toLocaleString(),
    ])
    const csv = [headers, ...rows].map((r) => r.map((v) => `"${v}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `contacts_${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1 className="admin-title">Contact Submissions</h1>
        <div className="admin-actions">
          <button className="admin-btn" onClick={fetchContacts}>Refresh</button>
          <button className="admin-btn" onClick={exportCSV}>Export CSV</button>
          <button className="admin-btn admin-btn-outline" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {loading ? (
        <div className="admin-loading">
          <span className="spinner admin-spinner" />
          <span>Loading submissions...</span>
        </div>
      ) : contacts.length === 0 ? (
        <div className="admin-empty">No submissions yet.</div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Company</th>
                <th>Work Email</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c, i) => (
                <tr key={c.id}>
                  <td>{i + 1}</td>
                  <td>{c.full_name}</td>
                  <td>{c.company}</td>
                  <td>{c.work_email}</td>
                  <td>{new Date(c.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="admin-footer">
        Total: {contacts.length} submission{contacts.length !== 1 ? 's' : ''}
      </div>
    </div>
  )
}
