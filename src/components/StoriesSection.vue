<template>
  <section class="stories-section" id="stories">
    <div style="text-align: center">
      <h2 class="section-title" v-scroll-reveal>Recorridos y Visitas</h2>
    </div>
    <div class="stories-wrapper" v-scroll-reveal="'fade-up'">
      <button class="carousel-control prev" @click="scrollLeft" aria-label="Anterior">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      
      <div class="stories-container" ref="carouselContainer">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="story-card"
          :class="{ 'is-visible': activeIndex === index }"
          :data-index="index"
        >
          <div class="card-image-wrapper">
            <img :src="image.src" :alt="image.alt" loading="lazy" />
            <div class="overlay"></div>
          </div>
          <div class="story-info">
            <p>{{ image.description }}</p>
          </div>
        </div>
      </div>
      
      <button class="carousel-control next" @click="scrollRight" aria-label="Siguiente">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
    <div class="scroll-indicator" aria-hidden="true">
      <span>Desliza para ver más</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// Importing images from assets if possible, or using direct paths if in public.
// Since we are in Vite, we can import them.
// Note: file names have spaces, renaming might be safer but import handles it usually.
import img1 from "../assets/story1.jpg";
import img2 from "../assets/story2.jpg";
import img3 from "../assets/story3.jpg";
import img4 from "../assets/story4.jpg";
import img5 from "../assets/vibanderas.jpg";
import img6 from "../assets/Villistoca.jpg";
import img7 from "../assets/moto_taxi_carrillo.jpg";
import img8 from "../assets/san_antonio.jpg";
import img9 from "../assets/tipa_villque.jpg";
import img10 from "../assets/ferroviario.jpg";
import img11 from "../assets/miskha_mayu.jpg";
import img12 from "../assets/angola.jpg";
import img13 from "../assets/san_pedro.jpg";

const images = [
  {
    src: img1,
    alt: "Visita a comunidad",
    description: "cayamboco",
  },
  {
    src: img2,
    alt: "Reunión vecinal",
    description: "Sindicato de comerciantes",
  },
  {
    src: img3,
    alt: "Visita a comunidad",
    description: "Surima Chica",
  },
  {
    src: img4,
    alt: "Reunión vecinal",
    description: "Sindicato de Mototaxistas",
  },
  {
    src: img5,
    alt: "Sindicato Vivanderas",
    description: "Sindicato Vivanderas",
  },
  {
    src: img6,
    alt: "Villistoca",
    description: "Villistoca",
  },
  {
    src: img7,
    alt: "Sindicato de Moto Taxis Carrillo Calizaya",
    description: "Sindicato de Moto Taxis Carrillo Calizaya",
  },
  {
    src: img8,
    alt: "Barrio San Antonio",
    description: "Barrio San Antonio",
  },
  {
    src: img9,
    alt: "Tipa Villque",
    description: "Tipa Villque",
  },
  {
    src: img10,
    alt: "Barrio Ferroviario",
    description: "Barrio Ferroviario",
  },
  {
    src: img11,
    alt: "Miskha Mayu",
    description: "Miskha Mayu",
  },
  {
    src: img12,
    alt: "Pueblo Indigena Angola",
    description: "Pueblo Indigena Angola",
  },
  {
    src: img13,
    alt: "Barrio San Pedro",
    description: "Barrio San Pedro",
  },
];

const carouselContainer = ref(null);
const activeIndex = ref(0);

onMounted(() => {
  const options = {
    root: carouselContainer.value,
    rootMargin: '0px',
    threshold: 0.6 // Trigger when 60% of the card is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = entry.target.dataset.index;
        if (index !== undefined) {
          activeIndex.value = parseInt(index);
        }
      }
    });
  }, options);

  // Use a small timeout to let the DOM fully mount the v-for elements before observing
  setTimeout(() => {
    const cards = document.querySelectorAll('.story-card');
    cards.forEach((card) => {
      observer.observe(card);
    });
  }, 300);
});

const scrollLeft = () => {
  if (carouselContainer.value) {
    // Scroll left by approx one card width + gap
    carouselContainer.value.scrollBy({ left: -350, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (carouselContainer.value) {
    // Scroll right by approx one card width + gap
    carouselContainer.value.scrollBy({ left: 350, behavior: 'smooth' });
  }
};
</script>

<style scoped>
.stories-section {
  padding: 4rem 2rem;
  background-color: #ffffff;
  color: #333;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1a1a1a;
  border-bottom: 3px solid #76ff03;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.stories-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.carousel-control {
  background: white;
  border: 2px solid #76ff03;
  color: #333;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  flex-shrink: 0;
  margin: 0 0.5rem;
}

.carousel-control:hover {
  background: #76ff03;
  color: white;
  transform: scale(1.1);
}

.scroll-indicator {
  display: none;
}

.stories-container {
  display: flex;
  flex-wrap: nowrap;
  gap: 2rem;
  overflow-x: auto;
  padding: 1rem 0.5rem 2rem 0.5rem;
  scroll-padding: 0 0.5rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #34c408 #f1f1f1;
}

.stories-container::-webkit-scrollbar {
  height: 8px;
}

.stories-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.stories-container::-webkit-scrollbar-thumb {
  background: #34c408;
  border-radius: 10px;
}

.stories-container::-webkit-scrollbar-thumb:hover {
  background: #2da807;
}

.story-card {
  flex: 0 0 auto;
  width: 320px;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  scroll-snap-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
}

.story-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(52, 196, 8, 0.15);
  border-color: rgba(52, 196, 8, 0.3);
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.story-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6));
  opacity: 0.5;
  transition: opacity 0.3s;
}

.story-card:hover img {
  transform: scale(1.1);
}

.story-card:hover .overlay {
  opacity: 0.8;
}

.story-info {
  padding: 1.5rem 1rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 1;
}

.story-info p {
  color: #333;
  text-align: center;
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.4;
  transition: color 0.3s;
}

.story-card:hover .story-info p {
  color: #34c408;
}

@media (max-width: 768px) {
  .story-card {
    width: 280px;
    transform: scale(0.95);
    transition: transform 0.4s ease;
  }
  
  .story-card.is-visible {
    transform: scale(1.05); /* Scales up the visible card */
    box-shadow: 0 15px 30px rgba(52, 196, 8, 0.2);
    border-color: rgba(52, 196, 8, 0.4);
  }
  
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    margin: 0;
    /* Transparent and no border for small screens */
    background: transparent;
    border: none;
    box-shadow: none;
    color: #34c408; 
  }

  .carousel-control:hover {
    background: transparent;
    color: #2da807;
  }
  
  .carousel-control.prev {
    left: 0;
    animation: bounceLeft 1.5s infinite;
  }
  
  .carousel-control.next {
    right: 0;
    animation: bounceRight 1.5s infinite;
  }

  @keyframes bounceLeft {
    0%, 100% {
      transform: translateY(-50%) translateX(0);
    }
    50% {
      transform: translateY(-50%) translateX(-5px);
    }
  }

  @keyframes bounceRight {
    0%, 100% {
      transform: translateY(-50%) translateX(0);
    }
    50% {
      transform: translateY(-50%) translateX(5px);
    }
  }
  
  .scroll-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    color: #666;
    font-size: 0.9rem;
    font-weight: 600;
  }
  
  .scroll-indicator svg {
    animation: bounceHorizontal 1.5s infinite;
  }
  
  @keyframes bounceHorizontal {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(5px);
    }
  }
  
  .stories-container {
    padding-left: 2rem; /* Add padding to prevent icon overlap */
    padding-right: 2rem;
    width: 100%;
  }
}
</style>
