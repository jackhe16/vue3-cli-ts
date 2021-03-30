import { defineComponent } from "vue";

export const PropsDef = {};

export default defineComponent({
  props: PropsDef,
  emits: [],
  setup() {
    return () => {
      return (
        <div>
          <span>Demo</span>
        </div>
      );
    };
  },
});
