import ChildComponent from "./ChildComponent.js";

export default {
    data() {
        return {
            message: ""
        }
    },
    components: {
        ChildComponent
    },
    methods: {
        handleEvent(eventData) {
            this.message = 'Event data received: ' + eventData;
        }
    },
    template: `
    <div>
        <child-component @DayLaTenEvent="handleEvent"></child-component>
        <p>{{ message }}</p>
    </div>
    `
}