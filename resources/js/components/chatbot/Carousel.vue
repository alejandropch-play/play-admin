<template>
  <!--<div
    class="chat__carousel swiper-container"
    ref="mySwiper"
    v-swiper:swiperCarousel="swiperOptionCarousel"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(el,i) in array" :key="el.image+i">
        <div class="chat__carousel__image" :style="{ backgroundImage: `url(${el.image})` }"></div>
        <div class="chat__carousel__footer shadow">
          <div class="chat__carousel__desc color-secondary" v-if="el.desc">{{ el.desc }}</div>
          <template v-if="!triggered && !hide">
            <div class="chat__carousel__button" v-if="el.button">
              <button class="chat__link" @click.prevent="click(el.button)">
                <span class="chat__link__text">{{ el.button }}</span>
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
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
  </div>-->
  <carousel
  :scrollPerPage="true" :perPage="1.5" minSwipeDistance="20" :paginationEnabled="false"
    >
     <slide
        v-for="(el,i) in array"
        :key="el.image+i"
        class="swiper-slide"
      >
      <div class="chat__carousel__image" style="width: 100%; " :style="{ backgroundImage: `url(${el.image})` }"></div>
        <div class="chat__carousel__footer shadow">
          <div class="chat__carousel__desc color-secondary" v-if="el.desc">{{ el.desc }}</div>
          <template v-if="!triggered && !hide">
            <div class="chat__carousel__button" v-if="el.button">
              <!--<button class="chat__link" @click.prevent="click(el.button)">
                <span class="chat__link__text">{{ el.button }}</span>
              </button>-->
            </div>
          </template>
        </div>
     </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
      Slide
  },
  props: {
    array: Array,
    triggered: {
      default: false,
    },
  },
  methods: {
    click(text) {
      this.hide = true;
      this.$emit("click", text, true);
    },
  },
  data() {
    return {
      hide: false,
      /*swiperOptionCarousel: {
        //loop: true,
        slidesPerView: 1.5,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        //autoWidth: true,
      },*/
    };
  },
};
</script>
<style lang="scss">
.swiper-slide{
  height: 150px;
  width: 150px;
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
  top: 23% !important;
  background: rgba(0, 84, 148, 0.75);
  padding: 15px 12px;

   position: absolute;
    top: 49%;
    width: 42px;
    height: 50px;
    margin-top: 0;
    z-index: 10;
    cursor: pointer;
    background-size: 27px 44px;
    background-position: 50%;
    background-repeat: no-repeat;
}
.swiper-container {
  width: 100%;
  height: 100%;
  padding-bottom: 30px !important;
}
.chat__carousel {
  .chat__carousel__footer {
    padding: 15px 15px 15px 15px;
    text-align: center;
    background: white;
    border-radius: 0 0 10px 10px ;
  }
  .chat__carousel__title {
    margin-bottom: 5px;
  }
  .chat__carousel__button {
    .chat__link {
      margin-bottom: 0;
    }
  }
  .chat__carousel__desc {
    font-size: 13px;
    margin-bottom: 8px;
  }
  
}
.chat__carousel__image {
    border-radius: 10px 10px 0 0;
    height: 125px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>