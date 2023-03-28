import { reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export const store = reactive({
    count: 0,
    increment() {
        this.count++
    },
    decrement() {
        this.count--
    }
});
