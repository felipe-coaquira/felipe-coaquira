<template>
  <section class="stories-section" id="stories">
    <div style="text-align: center;">
      <h2 class="section-title" v-scroll-reveal>Recorridos y Visitas</h2>
    </div>
    <div class="stories-container">
      <div v-for="(image, index) in images" :key="index" class="story-card" v-scroll-reveal="'fade-up'">
        <img :src="image.src" :alt="image.alt" />
        <div class="story-info">
          <p>{{ image.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Importing images from assets if possible, or using direct paths if in public.
// Since we are in Vite, we can import them.
// Note: file names have spaces, renaming might be safer but import handles it usually.
import img1 from "../assets/story1.jpg";
import img2 from "../assets/story2.jpg";
import img3 from "../assets/story3.jpg";
import img4 from "../assets/story4.jpg";

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
];
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

.stories-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.story-card {
  width: 300px;
  background: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
}

.story-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.story-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.story-info {
  padding: 0rem 0.3rem;
}

.story-info p {
  color: #555;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
