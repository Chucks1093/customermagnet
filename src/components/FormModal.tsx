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
        className="relative bg-white rounded-2xl w-full max-w-[520px] overflow-hidden"
        style={{ maxHeight: 'calc(100dvh - 32px)' }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-sky text-navy text-lg border-0 cursor-pointer flex items-center justify-center hover:opacity-70 transition-opacity"
        >
          ×
        </button>
        <div className="pt-10 px-3 pb-3" style={{ height: 'min(690px, calc(100dvh - 56px))', display: 'flex', flexDirection: 'column' }}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/ow57hZFfRizVdIKUUQfZ"
            title="Free Business Blueprint"
            className="block w-full border-0 rounded-xl flex-1"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
