<template>
  <div>
    <button
      class="chat__link"
      v-for="(el, i) in array"
      :key="'button'+i"
      @click.prevent="click(el.text)"
    ><span class="chat__link__text">{{ el.text }}</span></button>
  </div>
</template>
<script>
export default {
  props: {
    array: Array
  },
  methods: {
    click(text) {
      this.$emit("click", text);
    }
  }
};
</script>
<style>
.chat__link {
  margin-bottom: 10px;
}
</style>