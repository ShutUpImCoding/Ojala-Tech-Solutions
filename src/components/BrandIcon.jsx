export default function BrandIcon({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <rect width="32" height="32" rx="7" fill="#0D1B0C"/>
      <circle cx="16" cy="16" r="11" fill="#4A9E3F"/>
      <circle cx="16" cy="16" r="6.5" fill="#0D1B0C"/>
      <polyline points="13.5,13 17.5,16 13.5,19" fill="none" stroke="#7BC870" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
