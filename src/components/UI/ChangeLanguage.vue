<template>
  <div
    :class="$style.language"
    @mouseleave="isHover = false"
  >
    <img
      :class="$style.globe"
      src="@/assets/icons/globe.svg"
      alt="globe"
      @mouseover="isHover = true"
    >
    <Transition>
      <div
        v-show="isHover"
        :class="$style.select"
      >
        <p
          v-for="lang in langs"
          :key="lang.id"
          :class="{
            [$style.active]: lang.slug === $i18n.locale,
          }"
          @click="$i18n.locale = lang.slug"
        >
          {{ lang.name }}
        </p>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'ChangeLanguage',
  data() {
    return {
      isHover: false,
      curLang: 'ru',
      langs: [
        {
          id: 0,
          slug: 'ru',
          name: 'Русский',
        },
        {
          id: 1,
          slug: 'en',
          name: 'English',
        },
      ],
    };
  },
};
</script>

<style lang="scss" module>
.language {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: end;
  padding-bottom: 10px;
  margin-bottom: -10px;
  margin-right: 50px;

  .globe {
    width: 1.8rem;
    cursor: pointer;
    transition: .4s;

    &:hover {
      opacity: 0.7;
    }
  }

  .select {
    position: absolute;
    display: flex;
    background: #ffffff;
    border-radius: 8px;
    padding: 15px;
    top: 130%;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0px 2px 4px 2px rgb(0 0 0 / 10%);
    align-items: center;
    z-index: 3;

    p {
      margin: 0;
      text-transform: uppercase;
      font-family: Arial, sans-serif;
      font-size: 14px !important;
      cursor: pointer;
      font-weight: 600;
      transition: .2s;
      opacity: .6;

      &:hover {
        opacity: .8;
      }

      &.active {
        opacity: 1;
      }
    }

    &::after {
      content: '';
      position: absolute;
      transform: rotateZ(180deg);
      top: -19px;
      border: 9.5px solid transparent;
      border-top: 9.5px solid #ffffff;
    }
  }
}
</style>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
