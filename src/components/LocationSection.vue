<template>
  <section class="location-section" id="location">
    <div style="text-align: center;">
      <h2 class="section-title" v-scroll-reveal>Nuestra Ubicación</h2>
    </div>
    <p v-scroll-reveal="'fade-up'">Visita nuestra Casa de Campaña</p>
    <div class="map-container" v-scroll-reveal="'fade-up'">
      <iframe
        src="https://www.google.com/maps?q=-19.18328099,-64.91482187&t=k&z=17&output=embed"
        width="100%"
        height="450"
        style="border: 0"
        loading="lazy"
      >
      </iframe>
    </div>
  </section>
</template>

<style scoped>
.location-section {
  padding: 4rem 2rem;
  background-color: #ffffff;
  color: #333;
  text-align: center;
}

.section-title {
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  border-bottom: 3px solid #76ff03;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.location-section p {
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.map-container {
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 4px solid #76ff03;
}
</style>
