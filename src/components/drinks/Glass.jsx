import Liquid from "./Liquid"

function Glass({ color }) {
    return (
        <div className="relative w-40 h-60 border border-[#333] rounded-b-3x1 overflow-hidden">

            {/* Liquid */}
            <Liquid color = {color} />

            {/* Glass highlight */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent to-white/5" />

        </div>
    )
}

export default Glass