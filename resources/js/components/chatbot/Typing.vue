<template>
 <div class="typing-indicator">
  <span></span>
  <span></span>
  <span></span>
</div>
</template>
<style lang="scss" scoped>
 .typing-indicator {
  width: auto;
   padding: 10px 0 15px 0;

  span {
    height: 6px;
    width: 6px;
    float: left;
    margin: 0 3px;
    background-color: #9E9EA1;
    display: block;
    border-radius: 50%;
    opacity: 0.4;
    @for $i from 1 through 3 {
      &:nth-of-type(#{$i}) {
        animation: 1s blink infinite ($i * .3333s);
      }
    }
  }
}

@keyframes blink {
  50% {
    opacity: 1;
  }
}

@keyframes bulge {
  50% {
    transform: scale(1.05);
  }
}
</style>