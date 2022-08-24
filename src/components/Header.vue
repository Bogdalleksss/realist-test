<template>
  <div :class="$style.header">
    <span />
    <img
      :class="$style.logo"
      :src="getLogo()"
      alt="logo"
    >
    <ChangeLanguage />
  </div>
</template>

<script>
import ChangeLanguage from './UI/ChangeLanguage';

export default {
  name: 'Header',
  components: { ChangeLanguage },
  methods: {
    getLogo () {
      return require(`@/assets/img/logo-${this.$i18n.locale}.png`);
    },
  },
};
</script>

<style lang="scss" module>
.header {
  height: 65px;
  text-align: center;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
}
.logo {
  width: 8.5rem;
}
</style>
