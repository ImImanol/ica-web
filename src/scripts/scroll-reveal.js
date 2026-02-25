if (window.innerWidth >= 768) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.01 }
  )

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    observer.observe(el)
  })
}
