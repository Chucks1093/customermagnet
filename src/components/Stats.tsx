const stats = [
  { value: '4', label: 'Core services' },
  { value: '90', label: 'Day growth plan' },
  { value: '1', label: 'Connected system' },
  { value: '$0', label: 'For your blueprint' },
]

export default function Stats() {
  return (
    <section className="py-[72px]">
      <div className="max-w-[1120px] mx-auto px-[22px]">
        <div
          className="grid max-w-[900px] mx-auto"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '44px 28px' }}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="border-l-[5px] border-blue pl-5">
              <strong
                className="block font-black leading-none text-ink"
                style={{ fontSize: 'clamp(2.6rem, 9vw, 4rem)' }}
              >
                {value}
              </strong>
              <span
                className="block mt-[10px] font-semibold uppercase text-muted tracking-[.12em]"
                style={{ fontSize: '.95rem' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
