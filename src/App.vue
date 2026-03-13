<template>
  <div class="app-container">
    <IntroAnimation />
    <header class="main-header">
      <nav>
        <!-- Hamburger Menu Button -->
        <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
          <svg
            v-if="!isMenuOpen"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg
            v-else
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- Navigation Menu -->
        <ul :class="{ active: isMenuOpen }">
          <li>
            <a
              href="#"
              @click="closeMenu(0, $event)"
              :class="{ 'active-link': isActive === 0 }"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span>Inicio</span>
            </a>
          </li>
          <li>
            <a
              href="#proposals"
              @click="closeMenu(1, $event)"
              :class="{ 'active-link': isActive === 1 }"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                ></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span>Propuestas</span>
            </a>
          </li>
          <li>
            <a
              href="#stories"
              @click="closeMenu(2, $event)"
              :class="{ 'active-link': isActive === 2 }"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>VISITAS</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              @click="closeMenu(3, $event)"
              :class="{ 'active-link': isActive === 3 }"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                ></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>SIGUENOS</span>
            </a>
          </li>
          <li>
            <a
              href="#location"
              @click="closeMenu(4, $event)"
              :class="{ 'active-link': isActive === 4 }"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>ENCUENTRANOS</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <HeroSection />
      <ProposalsSection />
      <StoriesSection />
      <ContactSection />
      <LocationSection />
    </main>

    <footer class="main-footer">
      <p>
        &copy; 2026 Felipe Coaquira Choque - Por un municipio con desarrollo,
        identidad y cultura.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import IntroAnimation from "./components/IntroAnimation.vue";
import HeroSection from "./components/HeroSection.vue";
import ProposalsSection from "./components/ProposalsSection.vue";
import StoriesSection from "./components/StoriesSection.vue";
import ContactSection from "./components/ContactSection.vue";
import LocationSection from "./components/LocationSection.vue";
const isActive = ref(0);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = (value, event) => {
  isMenuOpen.value = false;
  isActive.value = value;

  // Smooth scroll with offset for sticky header
  if (event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80; // Height of sticky header
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }
};
</script>

<style scoped>
.app-container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

/* Global smooth scroll */
:global(html) {
  scroll-behavior: smooth;
}

.main-header {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid rgba(118, 255, 3, 0.3);
}

.main-header nav {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* Hamburger Menu Button */
.hamburger {
  display: none;
  background: none;
  border: none;
  color: #34c408;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  transition: transform 0.3s ease;
}

.hamburger:hover {
  transform: scale(1.1);
}

/* Navigation List */
.main-header nav ul {
  display: flex;
  justify-content: center;
  gap: clamp(1rem, 3vw, 2.5rem);
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;
}

.main-header nav ul li {
  display: flex;
  align-items: center;
}

.main-header a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: black;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  font-size: clamp(0.8rem, 2vw, 0.95rem);
  transition: all 0.3s ease;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.main-header a svg {
  flex-shrink: 0;
}

.main-header a:hover {
  color: #76ff03;
  background-color: rgba(118, 255, 3, 0.1);
  transform: translateY(-2px);
}
.main-header a.active-link {
  color: #76ff03;
  background-color: rgba(118, 255, 3, 0.1);
  transform: translateY(-2px);
}

.main-header a:active {
  transform: translateY(0);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .main-header {
    padding: 1rem;
  }

  .hamburger {
    display: block;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .main-header a {
    color: white;
  }
  .main-header nav ul {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-100%);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .main-header nav ul.active {
    opacity: 1;
    pointer-events: all;
    transform: translateX(0);
  }

  .main-header nav ul li {
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.3s ease;
  }

  .main-header nav ul.active li {
    transform: translateY(0);
    opacity: 1;
  }

  /* Stagger animation for menu items */
  .main-header nav ul.active li:nth-child(1) {
    transition-delay: 0.1s;
  }
  .main-header nav ul.active li:nth-child(2) {
    transition-delay: 0.2s;
  }
  .main-header nav ul.active li:nth-child(3) {
    transition-delay: 0.3s;
  }
  .main-header nav ul.active li:nth-child(4) {
    transition-delay: 0.4s;
  }
  .main-header nav ul.active li:nth-child(5) {
    transition-delay: 0.5s;
  }

  .main-header a {
    font-size: 1.2rem;
    padding: 1rem 2rem;
  }

  .main-header a svg {
    width: 24px;
    height: 24px;
  }
}

/* Small mobile adjustments */
@media (max-width: 480px) {
  .main-header a span {
    font-size: 1rem;
  }
}

.main-footer {
  background-color: #1a1a1a;
  color: #ccc;
  text-align: center;
  padding: 2rem;
  border-top: 5px solid #76ff03;
}
</style>
