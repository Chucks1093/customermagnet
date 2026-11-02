import ernestAbout from '../assets/ernest-1.jpg'

interface Props {
  onOpenForm: () => void
}

export default function About({ onOpenForm }: Props) {
  return (
    <section className="bg-[#F8F9FB] pb-[88px]" id="about">
      <div className="max-w-[1120px] mx-auto px-[22px]">
        <div className="about-inner">
          <div>
            <h2
              className="font-black uppercase text-navy text-center mb-[6px]"
              style={{ fontSize: 'clamp(2rem, 7vw, 3.2rem)' }}
            >
              About the founder
            </h2>
            <div
              className="max-w-[560px] mx-auto bg-white"
              style={{ border: '14px solid var(--navy)' }}
            >
              <img
                src={ernestAbout}
                alt="Ernest Nkagbu, founder of Customer Magnet"
                className="w-full object-cover"
                style={{ aspectRatio: '4/5', objectPosition: '50% 25%' }}
              />
            </div>
          </div>

          <div
            className="bio max-w-[640px] mx-auto mt-8 text-[1.15rem] leading-[1.7] text-ink"
          >
            <p className="mb-[26px]">
              Ernest is the founder of customermagnet.net. Over the last three years, he has helped entrepreneurs, coaches, real estate agents and small businesses grow by building the systems behind their business.
            </p>
            <p className="mb-[26px]">
              Today, he works with business owners who are tired of chasing leads, helping them get seen, stay top of mind and turn interest into booked calls without adding more work to their day.
            </p>
            <p className="mb-[26px]">
              His mission at customermagnet.net is to help businesses turn their potential into progress by building the systems they need to operate better, serve customers well and grow with confidence. The only way Customer Magnet prospers is by helping its clients succeed, so the focus always stays on what matters most: results. Every business owner wants growth, clarity and peace of mind, and everything Ernest builds is designed to give them all three.
            </p>
            <button
              onClick={onOpenForm}
              className="block w-full max-w-[520px] border-0 cursor-pointer text-center bg-blue text-white font-bold text-[1.05rem] tracking-[.02em] uppercase py-5 px-7 rounded-full hover:bg-blue-dark active:translate-y-px transition-colors"
              style={{ margin: '28px 0 0' }}
            >
              Get my free business blueprint
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-inner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 56px;
            align-items: center;
          }
          .bio { margin: 0 !important; }
        }
      `}</style>
    </section>
  )
}
