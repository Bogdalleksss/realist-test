<template>
  <div :class="$style.mainLayout">
    <Transition name="slide-down-fade">
      <Header v-show="loading" />
    </Transition>
    <div :class="$style.content">
      <slot />
    </div>
    <Transition name="slide-up-fade">
      <Menu v-show="loading" />
    </Transition>
  </div>
</template>

<script>
import Header from '../components/Header';
import Menu from '../components/Menu';

export default {
  name: 'MainLayout',
  components: { Menu, Header },
  inject: ['loading'],
};
</script>

<style lang="scss" module>
.mainLayout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  width: 100%;
}
</style>

<style lang="scss" scoped>
.slide-up-fade-enter-active,
.slide-down-fade-enter-active {
  transition: all .8s ease;
}
.slide-up-fade-enter,
.slide-up-fade-leave-to,
.slide-down-fade-enter,
.slide-down-fade-leave-to {
  opacity: 0;
}

.slide-up-fade-enter,
.slide-up-fade-leave-to {
  transform: translateY(40px);
}

.slide-down-fade-enter,
.slide-down-fade-leave-to {
  transform: translateY(-20px);
}
</style>
