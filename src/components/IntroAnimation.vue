<template>
  <div v-if="showIntro" class="intro-overlay bg-fade-out" :class="{ 'fade-out': fadingOut }">
    <div class="intro-content" :class="{ 'scale-up': scalingUp }">
      <h1 class="typewriter-text">{{ displayedText }}<span class="cursor" :class="{ 'hide-cursor': cursorHidden }"></span></h1>
      <div class="progress-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showIntro = ref(false);
const fadingOut = ref(false);
const scalingUp = ref(false);

const fullText = "Vota por Felipe Quaquira 👍🏻";
const displayedText = ref("");
const cursorHidden = ref(false);
const progress = ref(0);

onMounted(() => {
  showIntro.value = true;
  
  // Typing effect
  let currentIndex = 0;
  const totalLength = fullText.length;
  
  const typingInterval = setInterval(() => {
    if (currentIndex < totalLength) {
      // Handle surrogate pairs roughly (the emoji is 2 characters)
      const char = fullText.codePointAt(currentIndex);
      const charStr = String.fromCodePoint(char);
      displayedText.value += charStr;
      currentIndex += charStr.length;
      
      progress.value = Math.min((currentIndex / totalLength) * 100, 100);
    } else {
      clearInterval(typingInterval);
      
      // Wait before scaling out
      setTimeout(() => {
        scalingUp.value = true;
        cursorHidden.value = true;
        
        // Start fade out shortly after starting to scale up
        setTimeout(() => {
          fadingOut.value = true;
          
          // Remove from DOM when fade out is done
          setTimeout(() => {
            showIntro.value = false;
          }, 600);
        }, 400); // Wait 400ms into the scale animation to start fading out
      }, 1000);
    }
  }, 70); // 70ms per character
});
</script>

<style scoped>
.intro-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* Dark high-contrast background with initial opacity */
  background-color: rgba(26, 26, 26, 0); 
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.8s ease-out;
}

.intro-overlay.bg-fade-out {
  animation: fadeOutBg 4s ease-out forwards;
}

@keyframes fadeOutBg {
  0% {
    background-color: rgba(26, 26, 26, 1);
  }
  40% {
    background-color: rgba(26, 26, 26, 0.8);
  }
  60% {
    background-color: rgba(26, 26, 26, 0.6);
  }
  80% {
    background-color: rgba(26, 26, 26, 0.4);
  }
  100% {
    background-color: rgba(26, 26, 26, 0);
  }
}

.intro-overlay.fade-out {
  opacity: 0;
  pointer-events: none;
}

.intro-content {
  text-align: center;
  padding: 0 2rem;
  transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.intro-content.scale-up {
  transform: scale(3); /* Grow larger smoothly */
}

.progress-container {
  width: 100%;
  max-width: 400px;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 1.5rem auto 0;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: #34c408;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(52, 196, 8, 0.6);
  transition: width 0.1s linear;
}

.typewriter-text {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  text-shadow: 0 0 15px rgba(52, 196, 8, 0.6), 0 0 30px rgba(52, 196, 8, 0.4);
}

.cursor {
  display: inline-block;
  width: 0.1em;
  height: 1em;
  background-color: #34c408;
  margin-left: 5px;
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;
}

.cursor.hide-cursor {
  display: none;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
