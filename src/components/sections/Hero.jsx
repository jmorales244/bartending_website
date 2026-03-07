import { useNavigate } from "react-router-dom"

function Hero() {
    const navigate = useNavigate()

    return (
        <section className="relative w-full py-20 px-6 text-center bg-brand-blue rounded-3xl overflow-hidden">

            {/* Hero Video */}
            <div className="w-full h-[420px] overflow-hidden rounded-3xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                    <source src="public/hero/Drinks_Paranoma.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Border Trim */}
            <div className="absolute inset-3 border-2 border-brand-yellow rounded-2xl pointer-events-none opacity-60"></div>

            { /* Corner Stars */}
            <span className="absolute top-5 left-5 text-brand-yellow text-lg">✦</span>
            <span className="absolute top-5 right-5 text-brand-yellow text-lg">✦</span>
            <span className="absolute bottom-5 left-5 text-brand-yellow text-lg">✦</span>
            <span className="absolute bottom-5 right-5 text-brand-yellow text-lg">✦</span>

            <div className="max-w-3x1 mx-auto space-y-8">

                {/* Title */}
                <h1 className="text-4x1 md:text-5x1 font-semibold tracking-tight text-gray-900">
                    AJ Bartending
                </h1>

                {/* Subtitle */} 
                <p className="text-lg md:text-x1 text-white leading-relaxed">
                    Mobile bartending service for weddings, XV parties, corporate events, graduations and private celebrations.
                </p>

                {/* Event Tags */}
                <div className="flex flex-wrap justify-center gap-3 text-sm text-black">

                    <span className="px-3 py-1 bg-brand-off-white border-3 border-brand-yellow rounded-full">
                        Weddings 
                    </span>

                    <span className="px-3 py-1 bg-brand-off-white border-3 border-brand-yellow rounded-full">
                        XV Parties 
                    </span>

                    <span className="px-3 py-1 bg-brand-off-white border-3 border-brand-yellow rounded-full">
                         Corporate Events
                    </span>

                    <span className="px-3 py-1 bg-brand-off-white border-3 border-brand-yellow rounded-full">
                        Graduations 
                    </span>
                    
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 pt-4">

                    <button
                      onClick={() => navigate("/menu")}
                      className="px-6 py-3 bg-brand-gold text-black rounded-lg hover:opacity-90 transition"
                    >
                      View Drink Menu
                    </button>

                    <button 
                      onClick={() => navigate("/book")}
                      className="px-6 py-3 bg-brand-gold border border-gray-300 text-black rounded-lg hover:bg-gray-100 transition"
                      >
                        Book Your Event
                      </button>

                </div>

            </div>

        </section>
    )
}

export default Hero