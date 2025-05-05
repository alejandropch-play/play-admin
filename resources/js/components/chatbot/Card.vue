<template>
  <div class="chat__card__wrapper">
    <div class="chat__card" v-for="(el, i) in array" :key="'card'+i">
      <div class="chat__card__header">{{ el.title }}</div>
      <div class="chat__card__image">
        <img :src="el.image" :alt="el.button" />
      </div>
      <div class="chat__card__footer">
        <!--<nuxt-link
          class="chat__card__button"
          v-if="el.slug"
          :to="{name: el.route , params: { department: el.slug }}"
        >{{ el.button }}</nuxt-link>
        <nuxt-link class="chat__card__button"  :to="{name: el.route}" v-else>{{ el.button }}</nuxt-link>-->

        
        <button class="chat__button" @click.prevent="click(el.slug)">
          {{ el.button }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    array: Array,
    /*title: String,
    image: String,
    button: String,
    route: String,
    slug: String*/
  },
  methods:{
    click(text) {
      this.$emit("click",text);
    }
  }
};
</script>
<style lang="scss">
.chat__card {
    border: 1px solid gray;
    .chat__card__header {
      text-align: left;
      padding: 5px;
    }
  }
</style>