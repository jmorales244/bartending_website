function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#141414] text-[var(--color-text-primary)] overflow-x-hidden">
      <div className="max-w-md mx-auto px-6 py-10 relative">
        {children}
      </div>
    </div>
  )
}

export default Layout