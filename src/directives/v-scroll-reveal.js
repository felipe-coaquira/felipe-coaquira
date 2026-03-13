export const vScrollReveal = {
  mounted(el, binding) {
    el.classList.add('scroll-reveal');
    const animationClass = binding.value || 'fade-up';
    el.classList.add(`sr-${animationClass}`);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('sr-visible');
          // Optional: stop observing once it's visible if we only want it to animate once
          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    observer.observe(el);
  }
};
