import { store } from "./store.js";

export default {
    data() {
        return {
            store
        }
    },
    template:
        `<div>{{store.count}}<div>`
}