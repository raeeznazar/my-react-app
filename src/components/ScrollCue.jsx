// Small bouncing chevron hinting that there's more to scroll to.
export default function ScrollCue() {
  return (
    <div
      aria-hidden="true"
      className="mt-10 flex justify-center text-rose-300 animate-bounce"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
