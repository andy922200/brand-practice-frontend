<template>
  <div class="tic-tac-toe__container">
    <div class="tic-tac-toe__box" />
    <div class="tic-tac-toe__box" />
    <div class="tic-tac-toe__box" />
    <div class="tic-tac-toe__box" />
    <div class="tic-tac-toe__box" />
    <div class="tic-tac-toe__box" />
    <div class="tic-tac-toe__box" />
    <div class="tic-tac-toe__box" />
    <div class="tic-tac-toe__box" />
  </div>
</template>

<style>
.tic-tac-toe__container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 0.25rem;
  padding: 0.5rem;
}

.tic-tac-toe__box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw / 3 - 0.5rem);
  height: 100px;
  border: 2px solid black;
  background: radial-gradient(circle, rgba(113, 81, 95, 1) 81%, rgba(0, 0, 0, 1) 100%);
}

.tic-tac-toe__box:nth-child(3),
.tic-tac-toe__box:nth-child(5),
.tic-tac-toe__box:nth-child(9) {
  animation: flick 0.3s infinite;
}

@keyframes flick {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.6;
  }
}
</style>
