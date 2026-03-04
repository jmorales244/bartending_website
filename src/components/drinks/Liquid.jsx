import { motion } from "framer-motion"

function Liquid({ color }) {
    return (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "65%" }}
          transtion={{ duration: 2 }}
          className="absolute bottom-0 w-full"
          style={{
              background:color
          }}
        />
    )
}

export default Liquid