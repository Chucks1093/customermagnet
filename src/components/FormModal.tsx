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
      <div className="relative bg-white rounded-2xl w-full max-w-[560px] overflow-hidden pt-12 px-2.5 pb-2.5">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-sky text-navy text-base border-0 cursor-pointer flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          ×
        </button>

        <iframe
          src="https://api.leadconnectorhq.com/widget/form/ow57hZFfRizVdIKUUQfZ"
          title="Free Business Blueprint"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-activation-type="alwaysActivated"
          data-deactivation-type="neverDeactivate"
          data-form-name="Free Business Blueprint"
          data-height="700"
          data-layout-iframe-id="inline-ow57hZFfRizVdIKUUQfZ"
          data-form-id="ow57hZFfRizVdIKUUQfZ"
          className="block w-full border-0 rounded-lg"
          style={{ height: 'min(700px, 72vh)' }}
        />
      </div>
    </div>
  )
}
