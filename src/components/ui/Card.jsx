function Card({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        relative
        bg-gradient-to-br from-[#141414] to-[#0f0f0f]
        rounded-2xl
        px-6 py-7
        border border-[#1f1f1f]
        active:scale-[0.97]
        active:bg-[#1a1a1a]
        transition-all duration-150
      "
    >
      <span className="text-xl tracking-wide text-white">
        {children}
      </span>

      {/* subtle highlight line */}
      <div className="absolute inset-0 rounded-2xl border border-transparent active:border-[#d4af37]"></div>
    </div>
  )
}

export default Card