<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    preserveAspectRatio="YMid meet"
    viewBox="0 0 50 50"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title lang="zh-tw">{{ iconName }} 圖示</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
import IconWorker from "../components/icons/IconWorker.vue";
export default {
  name: "icon-base",

  // props todo: icon size
  props: {
    iconName: {
      type: String,
      defautl: "worker",
    },
    width: {
      type: [Number, String],
      default: 48,
    },
    height: {
      type: [Number, String],
      default: 48,
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
    class: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>

