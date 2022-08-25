<template>
  <MainLayout :class="$style.container">
    <div
      :class="$style.cards"
    >
      <component
        :is="`${card.type}Card`"
        v-for="card in cards"
        :key="card.id"
        :data="card"
        :class="$style.card"
      />
      <div
        v-if="isMobile"
        :class="$style.mobileSpace"
      />
      <div
        v-if="isMobile"
        :class="$style.animation"
      >
        <lottie-animation
          ref="anim"
          :animationData="require('@/assets/animations/swipe.json')"
          :autoPlay="false"
          :loop="false"
        />
      </div>
    </div>
  </MainLayout>
</template>

<script>
import LottieAnimation from 'lottie-web-vue';
import MainLayout from '../layouts/MainLayout';
import TOPCard from '../components/Сards/TopCard';
import INFOCard from '../components/Сards/InfoCard';
import pageMixin from '../mixins/page-mixin';

export default {
  name: 'DubaiPage',
  inject: ['loading'],
  components: {
    TOPCard,
    INFOCard,
    MainLayout,
    LottieAnimation,
  },
  mixins: [pageMixin],
  data() {
    return {
      cards: [
        {
          id: 1,
          type: 'TOP',
          label: {
            ru: 'ТОП 100',
            en: 'TOP 100',
          },
          title: {
            ru: '100 квартир для инвестиции',
            en: '100 apartments for investment',
          },
          description: {
            ru: 'Рейтинг квартир для инвестиции в дубаи',
            en: 'Rating of apartments for investment in Dubai',
          },
          link: 'https://realiste.io/search?utm_anim=1',
          images: [
            {
              id: 0,
              url: 'https://thumb.tildacdn.com/tild6632-3333-4232-a662-383164323032/-/cover/568x320/center/center/-/format/webp/minimap-min.png',
              type: 'MAP',
            },
          ],
          points: [
            {
              id: 0,
              type: 'PREMIUM',
              coords: {
                x: 71,
                y: 39,
              },
            },
            {
              id: 1,
              type: 'START',
              coords: {
                x: 24,
                y: 59,
              },
            },
            {
              id: 2,
              type: 'START',
              coords: {
                x: 46.3,
                y: 59,
              },
            },
            {
              id: 3,
              type: 'START',
              coords: {
                x: 72,
                y: 59,
              },
            },
            {
              id: 4,
              type: 'START',
              coords: {
                x: 45,
                y: 73,
              },
            },
          ],
        },
        {
          id: 2,
          type: 'TOP',
          label: {
            ru: 'ТОП 50',
            en: 'TOP 50',
          },
          title: {
            ru: 'Квартиры под аренду',
            en: 'Apartments for rent',
          },
          description: {
            ru: 'Квартиры с доходностью 12% годовых в Дубаи',
            en: 'Apartments with a yield of 12% per annum in Dubai',
          },
          link: 'https://realiste.io/search?utm_anim=1',
          images: [
            {
              id: 0,
              url: 'https://thumb.tildacdn.com/tild6632-3333-4232-a662-383164323032/-/cover/568x320/center/center/-/format/webp/minimap-min.png',
              type: 'MAP',
            },
          ],
          points: [
            {
              id: 0,
              type: 'PREMIUM',
              coords: {
                x: 78,
                y: 72.7,
              },
            },
            {
              id: 1,
              type: 'PREMIUM',
              coords: {
                x: 71,
                y: 39,
              },
            },
            {
              id: 2,
              type: 'PREMIUM',
              coords: {
                x: 31,
                y: 62,
              },
            },
            {
              id: 3,
              type: 'START',
              coords: {
                x: 25.7,
                y: 77.9,
              },
            },
            {
              id: 4,
              type: 'START',
              coords: {
                x: 54,
                y: 63.6,
              },
            },
            {
              id: 5,
              type: 'START',
              coords: {
                x: 69.7,
                y: 51.5,
              },
            },
          ],
        },
        {
          id: 3,
          type: 'TOP',
          label: {
            ru: 'ТОП 30',
            en: 'TOP 30',
          },
          title: {
            ru: 'Самые престижные проекты',
            en: 'The most prestigious projects',
          },
          description: {
            ru: 'Квартиры где в домах живут миллионы',
            en: 'Apartments where millions live in houses',
          },
          link: 'https://realiste.io/search?utm_anim=1',
          images: [
            {
              id: 0,
              url: 'https://thumb.tildacdn.com/tild3037-6535-4333-a232-653561346165/-/cover/276x152/center/center/-/format/webp/__2022-07-11__40828_.png',
              type: 'PREVIEW',
            },
            {
              id: 1,
              url: 'https://thumb.tildacdn.com/tild3139-6431-4263-b935-633337393337/-/cover/276x152/center/center/-/format/webp/__2022-07-11__41822_.png',
              type: 'PREVIEW',
            },
            {
              id: 2,
              url: 'https://thumb.tildacdn.com/tild3731-3535-4038-b765-333430383864/-/cover/276x152/center/center/-/format/webp/__2022-07-11__41018_.png',
              type: 'PREVIEW',
            },
            {
              id: 3,
              url: 'https://thumb.tildacdn.com/tild6635-3363-4530-b535-633136633564/-/cover/276x152/center/center/-/format/webp/__2022-07-11__40855_.png',
              type: 'PREVIEW',
            },
          ],
        },
        {
          id: 4,
          type: 'INFO',
          title: {
            ru: 'Квартиры',
            en: 'Apartments',
          },
          description: {
            ru: 'Квартиры по ценам ниже рыночных',
            en: 'Apartments at below-market prices',
          },
          link: 'https://realiste.io/search?utm_anim=1',
          icon: {
            url: 'https://thumb.tildacdn.com/tild3231-6663-4330-b431-316232336639/-/cover/130x130/center/center/-/format/webp/appartmentsInCircle.png',
            shadow: 'https://thumb.tildacdn.com/tild6438-3863-4434-a466-633965376665/-/cover/488x484/center/center/-/format/webp/appartmentsBG-min.png',
          },
        },
        {
          id: 5,
          type: 'INFO',
          title: {
            ru: 'Сделки',
            en: 'Transactions',
          },
          description: {
            ru: 'История сделок с недвижимостью',
            en: 'History of real estate transactions',
          },
          link: 'https://realiste.io/search?utm_anim=1',
          icon: {
            url: 'https://thumb.tildacdn.com/tild3763-3733-4834-a264-356331613135/-/cover/130x130/center/center/-/format/webp/FundsInCircle.png',
            shadow: 'https://thumb.tildacdn.com/tild6466-3437-4165-a237-376239356166/-/cover/488x484/center/center/-/format/webp/FundsBG-min.png',
          },
        },
        {
          id: 6,
          type: 'INFO',
          title: {
            ru: 'Обмен',
            en: 'Trade up',
          },
          description: {
            ru: 'Обмен вашей квартиры на новую',
            en: 'Exchange of your apartment for a new one',
          },
          link: 'https://realiste.io/search?utm_anim=1',
          icon: {
            url: 'https://thumb.tildacdn.com/tild3730-6466-4466-b036-613365336136/-/cover/130x130/center/center/-/format/webp/TradeUpInCircle.png',
            shadow: 'https://thumb.tildacdn.com/tild3962-3137-4237-a236-333235373436/-/cover/488x484/center/center/-/format/webp/TradeUpBG-min.png',
          },
        },
        {
          id: 7,
          type: 'INFO',
          title: {
            ru: 'Оценка',
            en: 'Estimation',
          },
          description: {
            ru: 'Оцените квартиру за 10 секунд',
            en: 'Rate the apartment in 10 seconds',
          },
          link: 'https://realiste.io/search?utm_anim=1',
          icon: {
            url: 'https://thumb.tildacdn.com/tild3961-3934-4230-b231-333733363238/-/cover/130x130/center/center/-/format/webp/EstimationInCircle.png',
            shadow: 'https://thumb.tildacdn.com/tild3938-3763-4663-b736-633866323932/-/cover/488x484/center/center/-/format/webp/EstimationBG-min.png',
          },
        },
        {
          id: 8,
          type: 'INFO',
          title: {
            ru: 'Индексы',
            en: ' Price index',
          },
          description: {
            ru: 'Индекс цен и ликвидности районов',
            en: 'Price and liquidity index of districts',
          },
          link: 'https://realiste.io/search?utm_anim=1',
          icon: {
            url: 'https://thumb.tildacdn.com/tild6533-3937-4433-b761-613066363331/-/cover/130x130/center/center/-/format/webp/IndexInCircle.png',
            shadow: 'https://thumb.tildacdn.com/tild3336-3865-4631-a465-653434316366/-/cover/488x484/center/center/-/format/webp/IndexBG-min.png',
          },
        },
      ],
    };
  },
  watch: {
    loading(val) {
      if (val && this.isMobile) {
        setTimeout(() => {
          this.$refs.anim.play();
        }, 200);
      }
    },
  },
};
</script>

<style lang="scss" module>
.container {
  background: rgb(157,193,248);
  background: linear-gradient(135deg, rgba(157,193,248,1) 34%, rgba(242,233,216,1) 54%);
}

.mobileSpace {
  min-width: 1px;
  height: 100%;
}

.cards {
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  padding-left: calc(50vw - 11.5rem);
  padding-right: 60px;

  @media (max-width: 576px) {
    padding-right: 0;
  }

  @media (max-width: 425px) {
    padding-left: calc(50vw - 45vw);
  }
}

.animation {
  position: absolute;
  width: 100px;
  right: 0;
  pointer-events: none;
}
</style>
