import { useState } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const inputCls = 'w-full bg-sky border border-blue/20 rounded-xl px-4 py-3 text-ink text-[0.95rem] outline-none placeholder:text-muted focus:border-blue focus:bg-white transition-colors'

export default function FormModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', challenge: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  function set(key: keyof typeof form, val: string) {
    setForm(f => ({ ...f, [key]: val }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch('https://backend.leadconnectorhq.com/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formId: 'ow57hZFfRizVdIKUUQfZ',
          location_id: 'rtz5d7uYQCoZTssQS1cF',
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          message: form.challenge,
        }),
      })
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
              className="mt-6 bg-blue text-white font-bold px-8 py-3 rounded-full border-0 cursor-pointer hover:bg-blue-dark transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 className="font-black text-ink text-[1.5rem] leading-tight mb-1">Your Free Business Blueprint</h3>
            <p className="text-muted text-[0.9rem] mb-6">Fill in your details below and we'll send your free blueprint straight to your inbox.</p>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-[0.72rem] font-semibold uppercase tracking-wider text-muted mb-1">First Name</label>
                <input required type="text" placeholder="Ernest" className={inputCls}
                  value={form.firstName} onChange={e => set('firstName', e.target.value)} />
              </div>
              <div>
                <label className="block text-[0.72rem] font-semibold uppercase tracking-wider text-muted mb-1">Last Name</label>
                <input required type="text" placeholder="Nkagbu" className={inputCls}
                  value={form.lastName} onChange={e => set('lastName', e.target.value)} />
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-[0.72rem] font-semibold uppercase tracking-wider text-muted mb-1">Email</label>
              <input required type="email" placeholder="you@example.com" className={inputCls}
                value={form.email} onChange={e => set('email', e.target.value)} />
            </div>

            <div className="mb-6">
              <label className="block text-[0.72rem] font-semibold uppercase tracking-wider text-muted mb-1">Biggest Business Challenge</label>
              <textarea required placeholder="Tell us your biggest business challenge..." rows={3}
                className={`${inputCls} resize-none`}
                value={form.challenge} onChange={e => set('challenge', e.target.value)} />
            </div>

            {status === 'error' && (
              <p className="text-badge text-sm mb-4">Something went wrong — please try again.</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-blue text-white font-bold text-[1rem] uppercase tracking-wide py-4 rounded-full border-0 cursor-pointer hover:bg-blue-dark active:translate-y-px transition-colors disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : 'Send me the free blueprint'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
