<template>
  <section class="proposals-section" id="proposals">
    <div style="text-align: center;">
      <h2 class="section-title" v-scroll-reveal>Nuestras Propuestas</h2>
    </div>
    <div class="proposals-grid">
      <div
        v-for="(category, index) in proposals"
        :key="index"
        class="proposal-card"
        v-scroll-reveal="'fade-up'"
      >
        <h3>{{ category.title }}</h3>
        <ul>
          <li v-for="(item, itemIndex) in category.items" :key="itemIndex">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { proposals } from "../data/proposals.js";
</script>

<style scoped>
.proposals-section {
  padding: 4rem 2rem;
  background-color: #f5f5f5;
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

.proposals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.proposal-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border-top: 5px solid #76ff03;
}

.proposal-card:hover {
  transform: translateY(-5px);
}

.proposal-card h3 {
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  min-height: 3rem;
}

.proposal-card ul {
  list-style-type: none;
  padding: 0;
}

.proposal-card li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.proposal-card li::before {
  content: "➤";
  color: #76ff03;
  position: absolute;
  left: 0;
}
</style>
