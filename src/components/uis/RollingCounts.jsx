"use client"
import React, {useEffect, useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const RollingCounts = ({number}) => {
    const [prev, setPrev] = useState(number);

    useEffect(() => {
        setPrev(number)
    }, [number])
  return (
    <div className="text-4xl font-bold h-10 overflow-hidden w-10">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={number}
          initial={{ y: number > prev ? 20 : -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: number > prev ? -20 : 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {number}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default RollingCounts
