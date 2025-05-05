<template>
  <div class="chat__card__wrapper">
    <!--<swiper class="chat__carousel swiper-container" ref="mySwiper" :options="swiperOptionCarousel">
      <swiper-slide v-for="(el,i) in array" :key="el.src">
        <img :src="el.src" :alt="el.caption" @click="index = i" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>-->
    <div
      class="chat__carousel swiper-container swiper-container--gallery"
      ref="mySwiper"
      v-swiper:swiperCarousel="swiperOptionCarousel"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(el,i) in array" :key="el.src">
          <img :src="el.src" :alt="el.caption" @click="index = i" />
        </div>
      </div>
      <div class="swiper-button-prev" slot="button-prev">
      <svg class="icon icon-arrow-left2">
        <use xlink:href="#icon-arrow-left2" />
      </svg>
    </div>
    <div class="swiper-button-next" slot="button-next">
      <svg class="icon icon-arrow-right2">
        <use xlink:href="#icon-arrow-right2" />
      </svg>
    </div>
    </div>
    <Tinybox v-model="index" :images="array" />
  </div>
</template>
<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
  cursor: pointer;
}
.swiper-container--gallery {
  width: 100%;
  height: 100%;
  padding-bottom: 10px !important;
  //padding-bottom: 35px !important;
}
.swiper-button-prev {
  left: 0;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
.swiper-button-next {
  right: 0px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}
.swiper-button-next {
  right: 0 !important;
}
.swiper-button-next:focus,
.swiper-button-prev:focus {
  outline: 0 !important;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 35px !important;
}
.swiper-button-prev {
  left: 0 !important;
}
.swiper-button-next,
.swiper-button-prev {
  color: #ffffff;
  font-size: 20px;
  top: 40% !important;
  background: rgba(0, 84, 148, 0.75);
  padding: 15px 12px;

   position: absolute;
    width: 42px;
    height: 50px;
    margin-top: -34px;
    z-index: 10;
    cursor: pointer;
    background-size: 27px 44px;
    background-position: 50%;
    background-repeat: no-repeat;
}
.tinybox__thumbs{
  overflow-x: hidden;
}
</style>
<script>
import Tinybox from "vue-tinybox";
export default {
  props: {
    array: Array
  },
  components: {
    Tinybox
  },
  data() {
    return {
      index: null,
      swiperOptionCarousel: {
        //loop: true,
        spaceBetween: 20,
        centeredSlides: true,
        //spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        /*pagination: {
            el: '.swiper-pagination'
          },*/
        slidesPerView: 1.5,
      }
    };
  }
};
</script>