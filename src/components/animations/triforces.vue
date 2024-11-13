<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <svg
      width="87"
      height="76"
      viewBox="0 0 87 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-[87px] h-[76px] relative triforce"
      preserveAspectRatio="none"
    >
      <g clip-path="url(#clip0_47_86)">
        <path class="triforce-path" d="M22.2869 37.3636L43.421 0.264648L64.5511 37.3636H22.2869Z" fill="#F9B233"></path>
        <path class="triforce-path" d="M0.694031 75.8521L21.8281 38.7531L42.9582 75.8521H0.694031Z" fill="#F9B233"></path>
        <path class="triforce-path" d="M44.0109 75.8521L65.1449 38.7531L86.2789 75.8521H44.0109Z" fill="#F9B233"></path>
        <path class="triforce-path" d="M65.2104 41.4697L46.4401 74.0656L83.5875 74.1979L65.2104 41.4697Z" fill="#FFED00"></path>
        <path class="triforce-path" d="M21.8936 41.2051L3.12323 73.801L40.2707 73.9333L21.8936 41.2051Z" fill="#FFED00"></path>
        <path class="triforce-path" d="M43.5521 3.57678L24.7817 36.1727L61.9291 36.305L43.5521 3.57678Z" fill="#FFED00"></path>
      </g>
      <defs>
        <clipPath id="clip0_47_86">
          <rect width="87" height="76" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  </template>
  
  <script lang="ts">
  export default {
    mounted() {
      if (window.innerWidth <= 768) {
        const triforceElement = document.querySelector('.triforce');
        if (triforceElement) {
          triforceElement.classList.add('animate');
        }
      }
    }
  }
  </script>
  <style scoped>
  .triforce {
    transition: transform 0.3s ease, fill 0.3s ease;
    transform-origin: center;
  }
  
  .triforce:hover {
    transform: rotate(180deg);
  }
  
  /* Couleurs par défaut et survol du triforce */
  .triforce .triforce-path {
    fill: #ffd700;
    stroke: #F9B233;
    transition: fill 0.3s ease;
  }
  
  .triforce:hover .triforce-path {
    fill: #da2121;
    stroke: #7C1313;
  }
  @media (max-width: 768px) {
  .triforce {
    animation: rotateTriforce 5s infinite;
    
  }
  .triforce .triforce-path {
    animation: colorChange 5s infinite;
  }
}

@keyframes rotateTriforce {
  0% {
    transform: rotate(0deg);
  }
  35% {
    transform: rotate(180deg);
  }
  45% {
    transform: rotate(180deg);
  }
  55% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes colorChange {
  0% {
    fill: #ffd700;
    stroke: #F9B233;
  }
  35% {
    fill: #da2121;
    stroke: #7C1313;
  }
  45% {
    fill: #da2121;
    stroke: #7C1313;
  }
  55% {
    fill: #da2121;
    stroke: #7C1313;
  }
  100% {
    fill: #ffd700;
    stroke: #F9B233;
  }
}
</style>