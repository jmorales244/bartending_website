import { useState, useEffect, useRef } from "react"

const portfolioItems = [
        {
            src: "/gallery/Drink_Line.PNG",
            label: "Line of cocktail drinks",
            headline: "Cocktails for any event.",
            description: 
                "Professional bartending service designed to keep your celebration flowing all night.",
        },
        {
            src: "/gallery/Red_Drink.PNG",
            label: "Red Drink Showcase",
            headline: "Handcrafted cocktails for every guest.",
            description: 
                "Fresh ingredients, professional mixing, and beautiful presentation.",
        },
        {/* ADD MORE IMAGES HERE WHEN AVAILABLE FOR PORTFOLIO */}
    ]

function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [overlayOpen, setOverlayOpen] = useState(false)

  const currentItem = portfolioItems[currentIndex]

  // Auto slide
  useEffect(() => {
    if (overlayOpen) return

    const id = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === portfolioItems.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(id)
  }, [overlayOpen])

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? portfolioItems.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === portfolioItems.length - 1 ? 0 : prev + 1
    )
  }

  const handleThumbClick = (index) => {
    setCurrentIndex(index)
  }

  const openOverlay = () => setOverlayOpen(true)

  const closeOverlay = (e) => {
    if (!e || e.target === e.currentTarget) {
      setOverlayOpen(false)
    }
  }

  // Swipe support
  const startX = useRef(0)

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX

    if (startX - endX > 50) handleNext()
    if (endX - startX > 50) handlePrev()
  }

  return (
    <section className="w-full py-20 px-6 bg-[#f7f7f7]">

      <div className="max-w-6xl mx-auto space-y-10">

        <div className="text-center space-y-3">
          <h2 className="text-3xl font-semibold text-gray-900">
            Event Highlights
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            A glimpse into the celebrations we help bring to life.
          </p>
        </div>

        {/* MAIN SLIDER */}
        <div
          className="relative flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* LEFT ARROW */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 text-3xl text-gray-700 hover:text-black px-4"
          >
            ‹
          </button>

          {/* MAIN IMAGE */}
          <div className="overflow-hidden rounded-xl shadow-md max-w-4xl">

            <img
              src={currentItem.src}
              alt={currentItem.label}
              className="w-full h-[420px] object-cover cursor-pointer"
              onClick={openOverlay}
            />

            <div className="text-center py-3 text-sm text-gray-600">
              {currentItem.label} · Tap to view
            </div>

          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 text-3xl text-gray-700 hover:text-black px-4"
          >
            ›
          </button>

        </div>

        {/* THUMBNAILS */}
        <div className="flex justify-center gap-4">

          {portfolioItems.map((item, index) => (
            <button
              key={item.src}
              onClick={() => handleThumbClick(index)}
              className={`w-20 h-14 overflow-hidden rounded-md border ${
                index === currentIndex
                  ? "border-brand-coral"
                  : "border-gray-200"
              }`}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
              />
            </button>
          ))}

        </div>

      </div>

      {/* FULLSCREEN OVERLAY */}
      {overlayOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeOverlay}
        >

          <div className="relative max-w-4xl w-full px-6">

            <button
              onClick={closeOverlay}
              className="absolute right-6 top-6 text-white text-2xl"
            >
              ✕
            </button>

            <img
              src={currentItem.src}
              alt={currentItem.label}
              className="w-full max-h-[70vh] object-cover rounded-lg"
            />

            <div className="text-center mt-6 text-white">

              <h3 className="text-2xl font-semibold mb-2">
                {currentItem.headline}
              </h3>

              <p className="text-gray-300 max-w-xl mx-auto">
                {currentItem.description}
              </p>

            </div>

          </div>

        </div>
      )}

    </section>
  )
}

export default GalleryCarousel