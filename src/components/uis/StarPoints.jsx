import React, { useState } from "react"
import { FaStar  } from "react-icons/fa";
import { motion } from "framer-motion"

const StarPoints = () => {
    const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const handleClick = (index) => {
    setRating(index)
  }

  const handleMouseEnter = (index) => {
    setHoverRating(index)
  }

  const handleMouseLeave = () => {
    setHoverRating(0)
  }
  return (
     <div className="flex items-center space-x-2 text-sm text-gray-700">
      <span className="text-lg font-semibold">{rating || ""}</span>

      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((index) => {
          const isActive = (hoverRating || rating) >= index

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer"
            >
              <FaStar  
                className={`w-6 h-6 transition-colors duration-200 ${
                  isActive ? "fill-yellow-500 stroke-yellow-500" : "fill-gray-300 stroke-gray-300"
                }`}
              />
            </motion.div>
          )
        })}
      </div>

      <span className="text-gray-500">{rating > 0 ? `${rating} stars` : ""}</span>
    </div>
  )
}

export default StarPoints
