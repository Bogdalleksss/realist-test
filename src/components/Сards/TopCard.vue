<template>
  <CardWrapper
    :class="$style.card"
  >
    <span
      :class="$style.cardLabel"
      :style="{
        backgroundImage: 'url(https://static.tildacdn.com/tild3962-6330-4034-b264-383438626139/ezgif-2-af3868226f.gif)',
      }"
    >
      <img
        src="@/assets/icons/bolt.svg"
        alt=""
      >
      <span>{{ data.label[$i18n.locale] }}</span>
    </span>

    <div :class="$style.info">
      <h2>{{ data.title[$i18n.locale] }}</h2>
      <p>{{ data.description[$i18n.locale] }}</p>

      <a :href="data.link">{{ $t('button.look') }}</a>
    </div>

    <div :class="$style.images">
      <img
        v-for="image in data.images"
        :key="image.id"
        :src="image.url"
        :class="{
          [$style.map]: isMap
        }"
        alt=""
      >
      <div
        v-if="isMap"
        :class="$style.points"
      >
        <img
          v-for="point in data.points"
          :key="point.id"
          :src="getPoint(point.type)"
          :style="{
            top: `${point.coords.x}%`,
            left: `${point.coords.y}%`
          }"
          alt=""
        >
      </div>
    </div>
  </CardWrapper>
</template>

<script>
import CardWrapper from './CardWrapper';

export default {
  name: 'TopCard',
  components: { CardWrapper },
  inject: ['loading'],
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isMap () {
      return this.data.images.some(image => image.type === 'MAP');
    },
  },
  methods: {
    getPoint (type) {
      return require(`@/assets/img/${type.toLowerCase()}-point.png`);
    },
  },
};
</script>

<style lang="scss" module>
.card {
  &Label {
    width: 100px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 10px;
    background-size: 110%;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 15px;
    margin-left: 10px;

    img {
      margin-right: 5px;
    }

    span {
      color: #ffffff;
      font-size: 14px;
      font-family: Arial, sans-serif;
      line-height: 11px;
      font-weight: 500;
      text-transform: uppercase;
    }
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 25px 10px;

    @media (max-height: 667px) {
      padding: 15px 10px;
    }

    a {
      display: flex;
      text-decoration: none;
      color: #202124;
      font-size: 18px;
      font-family: Arial, sans-serif;
      font-weight: 600;
      border-radius: 30px;
      background-color: #ffffff;
      padding: 8px 15px;
      border: none;
      transition: .4s;
      cursor: pointer;

      &:hover {
        opacity: .6;
      }
    }

  }
  .images {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    img {
      width: 100%;
      border-radius: 15px;
      box-shadow: 0px 2px 4px 2px rgb(0 0 0 / 10%);
    }

    .map {
      grid-column: span 2;
    }

    .points {
      position: absolute;
      width: 100%;
      height: 100%;

      img {
        width: 38px;
        position: absolute;
        box-shadow: none;
      }
    }
  }
}
</style>
