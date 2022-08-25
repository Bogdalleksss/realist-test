<template>
  <CardWrapper
    :class="$style.card"
  >
    <a
      :class="$style.link"
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
  </CardWrapper>
</template>

<script>
import CardWrapper from './CardWrapper';

export default {
  name: 'InfoCard',
  components: { CardWrapper },
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
  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    text-decoration: none;
    text-align: center;
    cursor: pointer;

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
      margin-top: 15px;
      margin-bottom: 10px;
    }

    p {
      width: 68%;
      font-size: 21px;
      margin: 0;
    }
  }
}
</style>
