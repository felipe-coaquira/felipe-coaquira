<template>
  <div v-if="showIntro" class="intro-overlay" :class="{ 'fade-out': fadingOut }">
    <div class="intro-content">
      <svg
        class="checkmark-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
        <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
      </svg>
      <h1 class="intro-text" :class="{ 'show-text': showText }">Vota por Felipe</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showIntro = ref(false);
const showText = ref(false);
const fadingOut = ref(false);

onMounted(() => {
  const introShown = localStorage.getItem('introShown');
  if (!introShown) {
    showIntro.value = true;
    
    // Show text after the checkmark finishes drawing
    setTimeout(() => {
      showText.value = true;
    }, 1000); // Checkmark takes about 1s

    // Start fade out after text has been visible
    setTimeout(() => {
      fadingOut.value = true;
      localStorage.setItem('introShown', 'true');
    }, 2500); // 1s check + 1.5s reading time

    // Remove from DOM
    setTimeout(() => {
      showIntro.value = false;
    }, 3300); // 2500 timeout + 800ms fadeOut CSS
  }
});
</script>

<style scoped>
.intro-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5; /* matches app background */
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.8s ease-out;
}

.intro-overlay.fade-out {
  opacity: 0;
  pointer-events: none;
}

.intro-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.checkmark-svg {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  stroke-width: 4;
  stroke: #34c408; /* User's theme green */
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #34c408;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark-circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 4;
  stroke-miterlimit: 10;
  stroke: #34c408;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark-check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards;
}

.intro-text {
  margin-top: 2rem;
  font-family: "Rancho", serif;
  font-size: 3rem;
  color: #1a1a1a;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.intro-text.show-text {
  opacity: 1;
  transform: translateY(0);
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px rgba(52, 196, 8, 0.1);
  }
}
</style>
