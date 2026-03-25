import { useState } from 'react'
import { SenserLogo, CheckCircleIcon } from '../assets/icons'
import { supabase } from '../lib/supabase'

export default function ContactForm({ content }) {
  const { form } = content

  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error: insertError } = await supabase
      .from('contacts')
      .insert({
        full_name: values.fullName || '',
        company: values.company || '',
        work_email: values.workEmail || '',
      })

    setLoading(false)

    if (insertError) {
      setError(insertError.message)
    } else {
      setSuccess(true)
    }
  }

  if (success) {
    return (
      <div className="form-card">
        <div className="form-header">
          <SenserLogo className="form-logo" />
        </div>
        <div className="form-success">
          <CheckCircleIcon size={48} stroke="#00C48C" />
          <p className="form-success-title">Thank you!</p>
          <p className="form-success-text">We'll be in touch shortly.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="form-card">
      <div className="form-header">
        <SenserLogo className="form-logo" />
      </div>
      <p className="form-subtitle">{form.subtitle}</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        {form.fields.map((field) => (
          <div key={field.name} className="form-group">
            <label className="form-label">
              {field.label} {field.required && <span className="req">*</span>}
            </label>
            <input
              type={field.type}
              className="form-input"
              placeholder={field.placeholder}
              required={field.required}
              value={values[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
              disabled={loading}
            />
          </div>
        ))}
        {error && <p className="form-error">{error}</p>}
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? (
            <span className="spinner" />
          ) : (
            <CheckCircleIcon size={16} stroke="#fff" />
          )}
          <span>{loading ? 'Sending...' : form.submitText}</span>
        </button>
      </form>
    </div>
  )
}
