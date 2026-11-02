interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function FormModal({ isOpen, onClose }: Props) {
  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center p-4 bg-[rgba(6,14,36,0.75)] transition-[opacity,visibility] duration-200 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative rounded-2xl w-full max-w-[520px] overflow-hidden" style={{ background: '#F7FAFC' }}
        style={{ maxHeight: 'calc(100dvh - 32px)' }}
      >
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/ow57hZFfRizVdIKUUQfZ"
          title="Free Business Blueprint"
          className="block w-full border-0"
          style={{ height: 'min(690px, calc(100dvh - 32px))', display: 'block', width: 'calc(100% + 17px)' }}
          loading="lazy"
        />
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white text-navy text-lg border-0 cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity shadow-md"
        >
          ×
        </button>
      </div>
    </div>
  )
}
