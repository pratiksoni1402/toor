'use client'

import { useEffect, useState } from "react"

export default function Timer() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const storeInterval = setInterval(() => {
      setTime(new Date());

    }, 1_000);
    return () => clearInterval(storeInterval)
  }, []);
  return (
    <>
      Time: {time.toLocaleTimeString()}
    </>
  )
}