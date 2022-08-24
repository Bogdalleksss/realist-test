<template>
  <a
    :class="$style.card"
    :href="data.link"
  >
    <div :class="$style.icon">
      <img
        :src="data.icon.url"
        alt=""
      >
      <img
        :src="data.icon.shadow"
        alt=""
      >
    </div>
    <h2>{{ data.title[$i18n.locale] }}</h2>
    <p>{{ data.description[$i18n.locale] }}</p>
  </a>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" module>
.card {
  position: relative;
  min-width: 23rem;
  min-height: 31.3rem;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, .4);
  box-shadow: 2px 6px 20px 4px rgb(0 0 0 / 20%);
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  cursor: pointer;

  @media (max-width: 425px) {
    min-width: 90vw;
  }

  @media (max-height: 667px) {
    min-height: 28rem;
  }

  .icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    img {

      &:first-child {
        width: 80px;
        z-index: 2;
      }
      &:last-child {
        width: 250px;
        position: absolute;
        z-index: 1;
      }
    }
  }

  h2 {
    color: #202124;
    font-size: 32px;
    font-family: Arial, sans-serif;
    line-height: 1.12;
    font-weight: 800;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  p {
    width: 68%;
    color: #202124;
    font-size: 21px;
    font-family: sans-serif;
    line-height: 1.2;
    font-weight: 300;
    margin: 0;
  }
}
</style>
