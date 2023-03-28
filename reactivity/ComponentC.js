import { store } from "./store.js";

export default {
    data() {
        return {
            store
        }
    },
    template: `
    <button @click="store.decrement()">Decrement</button>`
}