// Intersection Observer for scroll animations
export const observeElements = (elements, callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);

  elements.forEach((element) => {
    if (element) observer.observe(element);
  });

  return observer;
};

// Staggered animation helper
export const staggerAnimation = (elements, className, delay = 100) => {
  elements.forEach((element, index) => {
    if (element) {
      setTimeout(() => {
        element.classList.add(className);
      }, index * delay);
    }
  });
};

// Smooth scroll to element
export const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

// Parallax effect
export const parallaxEffect = (element, speed = 0.5) => {
  const scrolled = window.pageYOffset;
  const coords = scrolled * speed;
  element.style.transform = `translateY(${coords}px)`;
};

// Fade in on scroll
export const fadeInOnScroll = () => {
  const elements = document.querySelectorAll('.scroll-reveal');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  elements.forEach((element) => observer.observe(element));
  
  return observer;
};

// Counter animation
export const animateCounter = (element, target, duration = 2000) => {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);

  return timer;
};

// Debounce function for scroll events
export const debounce = (func, wait = 20) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
