<script setup lang="ts">
import { ref } from "vue";
const isLoading = ref<boolean>(false);
</script>

<template>
  <div
    v-if="isLoading"
    class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen !overflow-y-hidden bg-black dark:bg-white opacity-95 flex flex-col items-center justify-center"
    style="z-index: 999 !important"
  >
    <!-- Edge Y Ring Spinner s8 -->
    <!-- <div
      class="w-24 h-24 rounded-full animate-spin border-y-8 border-solid border-[#ff0000] border-t-transparent shadow-md"
    >
    </div> -->

    <div class="heart">
      <!-- <div class="heartbeat" style="color: #ff0000;">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137Z"/></svg>
        </div>
        <div class="heartecho" style="color: #ff0000;">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137Z"/></svg>
        </div> -->
      <!-- <div class="heartbeat" style="color: #ff0000;">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg>
        </div>
        <div class="heartecho" style="color: #ff0000;">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg>
        </div> -->

      <!-- <div class="heartbeat" style="color: #ff0000;">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 256 256"><path fill="currentColor" d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62Z"/></svg>
        </div>
        <div class="heartecho" style="color: #ff0000;">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 256 256"><path fill="currentColor" d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62Z"/></svg>
        </div> -->

      <div class="heartbeat" style="color: #ff0000">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 16 16"><path fill="currentColor" d="M7.655 14.916v-.001h-.002l-.006-.003l-.018-.01a22.066 22.066 0 0 1-3.744-2.584C2.045 10.731 0 8.35 0 5.5C0 2.836 2.086 1 4.25 1C5.797 1 7.153 1.802 8 3.02C8.847 1.802 10.203 1 11.75 1C13.914 1 16 2.836 16 5.5c0 2.85-2.044 5.231-3.886 6.818a22.094 22.094 0 0 1-3.433 2.414a7.152 7.152 0 0 1-.31.17l-.018.01l-.008.004a.75.75 0 0 1-.69 0Z"/>
            </svg> -->
        <img
          src="https://shuvobibaho.netlify.app/images/shuvo_bibaho_icon.svg"
          width="100"
          height="100"
          alt=""
        />
      </div>
      <div class="heartecho" style="color: #ff0000">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M7.655 14.916v-.001h-.002l-.006-.003l-.018-.01a22.066 22.066 0 0 1-3.744-2.584C2.045 10.731 0 8.35 0 5.5C0 2.836 2.086 1 4.25 1C5.797 1 7.153 1.802 8 3.02C8.847 1.802 10.203 1 11.75 1C13.914 1 16 2.836 16 5.5c0 2.85-2.044 5.231-3.886 6.818a22.094 22.094 0 0 1-3.433 2.414a7.152 7.152 0 0 1-.31.17l-.018.01l-.008.004a.75.75 0 0 1-.69 0Z"
          />
        </svg>
      </div>
    </div>

    <div class="loading loading01 mt-24 text-black dark:text-white">
      <span>L</span>
      <span>o</span>
      <span>a</span>
      <span>d</span>
      <span>i</span>
      <span>n</span>
      <span>g</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
    <!-- <h2 class="loading mt-24 text-center text-white dark:text-black text-xl font-semibold">Loading...</h2> -->
  </div>
</template>

<style scoped>
/**
* heartbeat heartecho double pop-up
*/

/* body {
  background: #111115;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
} */

.heart {
  font-size: 6em;
  position: relative;
}

.heartbeat {
  position: relative;
  z-index: 1;
  -webkit-animation: beat 2s linear infinite;
  animation: beat 2s linear infinite;
}

.heartecho {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-animation: echo 2s linear infinite;
  animation: echo 2s linear infinite;
}

@-webkit-keyframes beat {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(0.9);
  }
  21% {
    transform: scale(1.1) skew(0.004turn);
  }
  28% {
    transform: scale(1) skew(0.008turn);
  }
  35% {
    transform: scale(1) skew(0);
  }
}

@keyframes beat {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(0.9);
  }
  21% {
    transform: scale(1.1) skew(0.004turn);
  }
  28% {
    transform: scale(1) skew(0.008turn);
  }
  35% {
    transform: scale(1) skew(0);
  }
}

@-webkit-keyframes echo {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  14% {
    opacity: 0.4;
    transform: scale(0.8);
  }
  21% {
    opacity: 0.4;
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
    transform: scale(3);
  }
}

@keyframes echo {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  14% {
    opacity: 0.4;
    transform: scale(0.8);
  }
  21% {
    opacity: 0.4;
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
    transform: scale(3);
  }
}

/*
* Text loading...
*/
/* common */
.loading {
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: 10px;
}
.loading span {
  display: inline-block;
  margin: 0 -0.05em;
}

/* code #1 */
.loading01 span {
  color: #ffffff;
  animation: loading01 1.4s infinite alternate;
}
.loading01 span:nth-child(1) {
  animation-delay: 0s;
}
.loading01 span:nth-child(2) {
  animation-delay: 0.1s;
}
.loading01 span:nth-child(3) {
  animation-delay: 0.2s;
}
.loading01 span:nth-child(4) {
  animation-delay: 0.3s;
}
.loading01 span:nth-child(5) {
  animation-delay: 0.4s;
}
.loading01 span:nth-child(6) {
  animation-delay: 0.5s;
}
.loading01 span:nth-child(7) {
  animation-delay: 0.6s;
}
.loading01 span:nth-child(8) {
  animation-delay: 0.7s;
}
.loading01 span:nth-child(9) {
  animation-delay: 0.8s;
}
.loading01 span:nth-child(10) {
  animation-delay: 0.9s;
}

@keyframes loading01 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
