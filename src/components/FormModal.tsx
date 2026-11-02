import { useState } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const inputCls = 'w-full bg-sky border border-blue/20 rounded-lg px-4 py-3 text-ink text-[0.95rem] outline-none placeholder:text-muted focus:border-blue focus:bg-white transition-colors'

export default function FormModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', challenge: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  function set(key: keyof typeof form, val: string) {
    setForm(f => ({ ...f, [key]: val }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          challenge: form.challenge,
        }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center p-4 bg-[rgba(6,14,36,0.75)] transition-[opacity,visibility] duration-200 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="relative bg-white rounded-2xl w-full max-w-[520px] p-8 pt-10">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-sky text-navy text-lg border-0 cursor-pointer flex items-center justify-center hover:opacity-70 transition-opacity"
        >
          ×
        </button>

        {status === 'done' ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="font-black text-ink text-2xl mb-2">You're in!</h3>
            <p className="text-muted">We'll be in touch with your free business blueprint soon.</p>
            <button
              onClick={onClose}
              className="mt-6 bg-blue text-white font-bold px-8 py-3 rounded-lg border-0 cursor-pointer hover:bg-blue-dark transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 className="font-black text-ink text-[1.5rem] leading-tight mb-2">Your Free Business Blueprint</h3>
            <p className="text-muted text-[0.9rem] mb-6">Discover Opportunities to improve your business, strengthen your systems, and prepare for growth.</p>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <input required type="text" placeholder="Enter your first name" className={inputCls}
                value={form.firstName} onChange={e => set('firstName', e.target.value)} />
              <input required type="text" placeholder="Enter your last name" className={inputCls}
                value={form.lastName} onChange={e => set('lastName', e.target.value)} />
            </div>

            {/* Email with icon */}
            <div className="relative mb-3">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                  <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>
                </svg>
              </span>
              <input required type="email" placeholder="Email" className={`${inputCls} pl-10`}
                value={form.email} onChange={e => set('email', e.target.value)} />
            </div>

            <input required type="tel" placeholder="Phone" className={`${inputCls} mb-3`}
              value={form.phone} onChange={e => set('phone', e.target.value)} />

            <textarea required placeholder="Tell us your biggest business challenge" rows={3}
              className={`${inputCls} resize-none mb-5`}
              value={form.challenge} onChange={e => set('challenge', e.target.value)} />

            {status === 'error' && (
              <p className="text-badge text-sm mb-4">Something went wrong — please try again.</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-blue text-white font-bold text-[1rem] uppercase tracking-wide py-4 rounded-xl border-0 cursor-pointer hover:bg-blue-dark active:translate-y-px transition-colors disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : 'Send me the free blueprint'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
