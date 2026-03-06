import { useNavigate } from "react-router-dom"

function Hero() {
    const navigate = useNavigate()

    return (
        <section className="w-full py-20 px-6 text-center bg-gradient-to-b from-white to-[#f7f7f7]">
            <div className="max-w-3x1 mx-auto space-y-8">

                {/* Title */}
                <h1 className="text-4x1 md:text-5x1 font-semibold tracking-tight text-gray-900">
                    AJ Bartending
                </h1>

                {/* Subtitle */} 
                <p className="text-lg md:text-x1 text-gray-600 leading-relaxed">
                    Mobile bartending service for weddings, XV parties, corporate events, graduations and private celebrations.
                </p>

                {/* Event Tags */}
                <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500">

                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">
                        Weddings 
                    </span>

                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">
                        XV Parties 
                    </span>

                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">
                         Corporate Events
                    </span>

                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">
                        Graduations 
                    </span>
                    
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 pt-4">

                    <button
                      onClick={() => navigate("/menu")}
                      className="px-6 py-3 bg-brand-coral text-black rounded-lg hover:opacity-90 transition"
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