import { defineStore } from "pinia";

const useDrawerStore = defineStore("drawer", {
  state() {
    return {
      isOpen: false,
      isClientReady: false,
    };
  },
  actions: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },

    setClientReady() {
      this.isClientReady = true;
    },
  },
});
export { useDrawerStore };
