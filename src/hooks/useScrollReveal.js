import { useEffect, useRef, useState } from 'react'

export default function useScrollReveal(threshold = 0.05) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(node)
    return () => observer.unobserve(node)
  }, [threshold])

  return [ref, isVisible]
}
