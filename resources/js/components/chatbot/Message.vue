<template>
  <div class="chat__message__text shadow" v-html="text"></div>
</template>
<script>
export default {
  props: {
    text: String
  }
};
</script>