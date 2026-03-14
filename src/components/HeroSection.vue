<template>
  <section class="hero-section" id="inicio">
    <div class="hero-content">
      <img
        src="../assets/home.png"
        alt="Candidato Felipe Coaquira Choque"
        class="hero-image"
        v-scroll-reveal="'fade-right'"
      />
      <div class="hero-text" v-scroll-reveal="'fade-left'">
        <h1 class="highlight-text font-effect-shadow-multiple">
          POR UN MUNICIPIO CON DESARROLLO, IDENTIDAD Y CULTURA
        </h1>
        <h2>FELIPE COAQUIRA CHOQUE</h2>
        <h3>ALCALDE DE TARABUCO</h3>
        <p>Con unidad y trabajo construiremos el municipio que soñamos</p>
        <a href="#proposals" class="cta-button">Conoce Nuestras Propuestas</a>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic needed for this static section
</script>

<style scoped>
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0; /* Fallback */
  color: #333;
  padding: 2rem;
  text-align: center;
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

/* Overlay for better text readability on background */
.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3); /* Adjust opacity as needed */
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  background: transparent;
}

.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.hero-text {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 1rem;
}

.typewriter-container {
  display: flex;
}

.hero-text h1 {
  font-size: clamp(1.8rem, 5vw, 3rem); /* Larger, fluid font size */
  font-family: "Tangerine", serif;
  margin-bottom: 0.5rem;
  color: white;
  text-transform: uppercase;
  font-weight: 800;
  line-height: 1.2;
  word-wrap: break-word; /* Ensure wrapping */
}

/* Removed typewriter specific styles to allow multi-line text */

.hero-text h2 {
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  margin-bottom: 0.2rem;
  color: #64dd17;
  margin-top: 1rem;
}

.hero-text h3 {
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: #64dd17; /* Darker green for text readability on light bg */
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.hero-text p {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  font-style: italic;
  color: #f3e9e9;
}

.cta-button {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  background-color: #34c408;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(52, 196, 8, 0.4);
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #2da807;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .hero-section {
    padding: 0 !important;
  }
  .hero-content {
    flex-direction: row;
    text-align: left;
    padding: 1px !important;
  }

  .hero-image {
    max-width: 45%;
  }

  .hero-text {
    align-items: flex-start;
  }

  .hero-text h1 {
    font-size: 2.2rem;
  }
}
@media (max-width: 768px) {
  .cta-button {
    font-size: small;
    margin-top: 0.5rem !important;
    padding: 0.5rem 1rem !important;
  }
}
</style>
