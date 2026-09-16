import { publicUrl } from '../publicUrl'

type LogoProps = {
  className?: string
}

export function Logo({ className = 'h-12 w-12' }: LogoProps) {
  return (
    <img
      src={publicUrl('logo.png')}
      alt="AI & Cybersecurity Research Society"
      className={`rounded-[1.05rem] object-cover shadow-[0_0_24px_rgba(62,224,208,0.18)] ${className}`}
    />
  )
}

export function LogoMark({ className = 'h-12 w-12' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="acrs-board" x1="12" y1="8" x2="70" y2="74">
          <stop offset="0%" stopColor="#10263d" />
          <stop offset="100%" stopColor="#071422" />
        </linearGradient>
        <linearGradient id="acrs-shield" x1="24" y1="10" x2="56" y2="72">
          <stop offset="0%" stopColor="#7af0e3" />
          <stop offset="55%" stopColor="#3ee0d0" />
          <stop offset="100%" stopColor="#6ea8ff" />
        </linearGradient>
        <linearGradient id="acrs-fill" x1="28" y1="16" x2="52" y2="66">
          <stop offset="0%" stopColor="#12324a" />
          <stop offset="100%" stopColor="#0a1c2e" />
        </linearGradient>
        <filter id="acrs-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="4" y="4" width="72" height="72" rx="20" fill="url(#acrs-board)" />
      <rect
        x="4.8"
        y="4.8"
        width="70.4"
        height="70.4"
        rx="19.2"
        stroke="#3ee0d0"
        strokeOpacity="0.28"
      />

      <path
        d="M40 13.5 L61 21.4 V41.8 C61 55.6 51.2 66.6 40 70.6 C28.8 66.6 19 55.6 19 41.8 V21.4 Z"
        fill="url(#acrs-fill)"
        stroke="url(#acrs-shield)"
        strokeWidth="2.3"
        filter="url(#acrs-glow)"
      />

      <g stroke="#7aa8ff" strokeWidth="1.15" strokeLinecap="round">
        <path d="M28 27.5 L40 33.5 L52 27.5" />
        <path d="M24.5 38 L28 27.5 L33 22.5 L40 20.8 L47 22.5 L52 27.5 L55.5 38" />
        <path d="M28 27.5 L40 38.5 L52 27.5" />
        <path d="M24.5 38 L40 33.5 L55.5 38" />
        <path d="M40 20.8 V33.5" />
        <path d="M40 38.5 V47.2" />
        <path d="M33 22.5 L40 33.5 L47 22.5" />
      </g>

      <circle cx="40" cy="20.8" r="2.15" fill="#e8c872" />
      <circle cx="33" cy="22.5" r="1.7" fill="#3ee0d0" />
      <circle cx="47" cy="22.5" r="1.7" fill="#3ee0d0" />
      <circle cx="28" cy="27.5" r="2" fill="#7aa8ff" />
      <circle cx="52" cy="27.5" r="2" fill="#7aa8ff" />
      <circle cx="24.5" cy="38" r="1.7" fill="#3ee0d0" />
      <circle cx="55.5" cy="38" r="1.7" fill="#3ee0d0" />
      <circle cx="40" cy="33.5" r="3.1" fill="#102235" stroke="#3ee0d0" strokeWidth="1.6" />
      <circle cx="40" cy="38.5" r="1.7" fill="#e8c872" />

      <circle cx="40" cy="53.4" r="3.15" stroke="#e8c872" strokeWidth="1.6" />
      <path
        d="M40 56.4 V61.2"
        stroke="#e8c872"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}
