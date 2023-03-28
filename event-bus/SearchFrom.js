import { EventBus } from "./event-bus.js"

export default {
    data() {
        return {
            value: "",
            filterType: "DES"
        }
    },
    methods: {
        emitSearchValue() {
            EventBus.$emit("emit-search-event", this.value)
        },
        emitSortEvent() {
            EventBus.$emit("emit-sort-event", this.filterType);
            this.filterType = this.filterType === "ASC" ? "DES" : "ASC";
        }
    },
    template: `
    <div>
        <input type="text" v-model="value" />
        <input type="submit" @click="emitSearchValue" />
        <button @click="emitSortEvent">{{filterType}}</button>
    </div>
    `
}