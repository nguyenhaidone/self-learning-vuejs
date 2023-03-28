export default {
    data() {
        return {
        }
    },
    methods: {
        sendEvent() {
            this.$emit('DayLaTenEvent', 'Data sent from child component');
        }
    },
    template: `
    <button @click="sendEvent">Send event to parent</button>
    `
}