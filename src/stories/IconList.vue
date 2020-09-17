<template>
  <section>
    <h2>Icon List 圖示列表</h2>
    <section>
      <icon-base icon-name="worker" :class="classes">
        <icon-worker />
      </icon-base>
      <icon-base icon-name="fence" :class="classes">
        <icon-fence />
      </icon-base>
    </section>
  </section>
</template>

<script>
import IconBase from "./IconBase.vue";
import IconWorker from "../components/icons/IconWorker.vue";
import IconFence from "../components/icons/IconFence.vue";

export default {
  name: "icon-list",
  components: {
    IconBase,
    IconWorker,
    IconFence,
  },
  computed: {
    classes() {
      return {
        "text-primary": true,
      };
    },
  },
};
</script>
