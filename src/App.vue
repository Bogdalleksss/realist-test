<template>
  <div
    id="app"
    :style="{
      height: windowHeight,
    }"
  >
    <DubaiPage />
    <div
      v-show="!loading"
      :class="$style.loading"
    >
      Dubai
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import DubaiPage from './pages/DubaiPage';

export default {
  name: 'App',
  components: { DubaiPage },
  provide() {
    return {
      loading: computed(() => this.loading),
    };
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    windowHeight() {
      return `${window.innerHeight }px`;
    },
  },
  mounted() {
    const interval = setInterval(() => {
      this.loading = this.checkImages();
      if (this.loading) clearInterval(interval);
    }, 50);
  },
  methods: {
    checkImages() {
      const images = document.querySelectorAll('img');
      let isLoading = true;
      images.forEach(image => {
        if (!image.complete && isLoading) {
          isLoading = false;
        }
      });
      return isLoading;
    },
  },
};
</script>

<style>
#app {
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<style lang="scss" module>
.loading {
  position: absolute;
  text-transform: uppercase;
  font-size: 4em;
  font-weight: 500;
}
</style>
