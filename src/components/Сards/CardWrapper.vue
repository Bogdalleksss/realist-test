<template>
  <Transition name="slide-fade">
    <div
      v-show="loading"
      :class="$style.card"
    >
      <slot />
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'CardWrapper',
  inject: ['loading'],
};
</script>

<style lang="scss" module>
.card {
  min-width: 23rem;
  min-height: 31.3rem;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, .4);
  box-shadow: 2px 6px 20px 4px rgb(0 0 0 / 20%);
  padding: 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    min-width: 90vw;
  }

  @media (max-height: 667px) {
    min-height: 28rem;
  }

  h2 {
    color: #202124;
    font-size: 32px;
    font-family: Arial, sans-serif;
    line-height: 1.12;
    font-weight: 800;
    margin: 0;

    @media (max-width: 375px) {
      font-size: 28px;
    }
  }

  p {
    color: #202124;
    font-size: 22px;
    font-family: sans-serif;
    line-height: 1.2;
    font-weight: 300;
    margin: 0;
  }
}
</style>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
