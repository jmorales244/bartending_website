function Card({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        bg-[var(--color-surface)]
        hover:bg-[var(--color-surface-hover)]
        transition
        duration-300
        rounded-xl
        p-6
        cursor-pointer
        border border-[#222]
        hover:border-[var(--color-accent)]
      "
    >
      <span className="tracking-wide text-lg">
        {children}
      </span>
    </div>
  )
}

export default Card