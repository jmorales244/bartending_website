function Layout({ children }) {
  return (
    <div className="min-h-[100svh] bg-[#0f0f0f] text-[var(--color-text-primary)] overflow-x-hidden">
      <div className="max-w-md mx-auto px-6 pt-[calc(env(safe-area-inset-top)+4rem)] pb-8 relative">
        {children}
      </div>
    </div>
  )
}

export default Layout