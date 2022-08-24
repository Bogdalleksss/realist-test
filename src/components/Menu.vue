<template>
  <div :class="$style.menu">
    <div
      :class="$style.wrapper"
    >
      <a
        v-for="item in menu"
        :key="item.id"
        :class="$style.menuItem"
        :href="item.link"
      >
        <img
          :src="getIcon(item.slug)"
          alt=""
        >
        <h4>{{ $t(`menu.${item.slug}`) }}</h4>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menu: [
        {
          id: 0,
          slug: 'apartments',
          link: 'https://ae.realiste.io/?selectedCity=Dubai&cenLat=25.07704324&cenLng=55.133523&zoom=12&discountFromPriceMarketMin=0.03&discountFromPriceMarketMax=0.4&priceMax=1000000',
        },
        {
          id: 1,
          slug: 'funds',
          link: 'https://ae.realiste.io/?selectedCity=Dubai&cenLat=25.047498410668588&cenLng=55.17254886368043&zoom=12&discountFromPriceMarketMin=0.03&discountFromPriceMarketMax=0.4&priceMax=1000000',
        },
        {
          id: 2,
          slug: 'estimation',
          link: 'https://ru-ae.realiste.io/object-evaluation',
        },
        {
          id: 3,
          slug: 'trade-up',
          link: 'https://ae.realiste.io/trade-up',
        },
        {
          id: 4,
          slug: 'index',
          link: 'https://ae.realiste.io/map-analytics?activeLayer=color_index_median_price-1',
        },
      ],
    };
  },
  methods: {
    getIcon(icon) {
      return require(`@/assets/icons/${icon}.svg`);
    },
  },
};
</script>

<style lang="scss" module>
.menu {
  text-align: center;
  height: 100px;
  width: 100%;

  &Item {
    width: 90px;
    cursor: pointer;
    transition: .4s;
    text-decoration: none;

    @media (max-width: 425px) {
      position: relative;
      width: auto;

      h4 {
        font-size: 14px;
      }
    }

    @media (max-width: 400px) {
      h4 {
        font-size: 12px;
      }
    }

    h4 {
      margin-top: 0.2rem;
      margin-bottom: 0;

      color: #4A4949;
      white-space: nowrap
    }

    img {
      width: 2.8rem;
    }

    &:hover {
      opacity: .6;
    }
  }
}
.wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 10px;

  @media (max-width: 425px) {
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
