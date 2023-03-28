import { EventBus } from "./event-bus.js";

export default {
    data() {
        return {
            beforeCreateData: "This data will be undefine if you log at beforeCreate() func",
            listData: [],
            searchValue: '',
            filterType: "DES"
        }
    },
    methods: {
        fetchApi() {
            try {
                fetch("https://mocki.io/v1/434c454f-296d-4c39-909c-58aa8423e50a").then(res => res.json()).then(data => this.listData = data);
            } catch (error) {
                console.log(error);
            }
        }
    },
    computed: {
        filterCar() {
            console.log(this.searchValue);
            return this.listData.length > 0 && this.listData.filter(item => item.carName.toLowerCase().includes(this.searchValue.toLowerCase()))
        },
        sortCar() {
            return this.listData.length > 0 && this.listData.sort((a, b) => {
                if (this.filterType === "DES") {
                    return a.price - b.price
                }
                return - a.price + b.price
            })
        }
    },
    beforeCreate() {
        console.log("beforeCreate: " + this.beforeCreateData);
    },
    created() {
        console.log("created: " + this.beforeCreateData);
        this.fetchApi();
        EventBus.$on('emit-search-event', (value) => {
            this.searchValue = value
        });
        EventBus.$on("emit-sort-event", (value) => {
            this.filterType = value
        })
    },
    beforeMount() {
        console.log("beforeMount: ");
    },
    mounted() {
        console.log("Mount: At this step, we can access DOM tree");
    },
    template: `
    <ol v-if="listData.length>0" >
        <li v-for="(item,index) in sortCar">
            {{item.carName}} - {{item.price}}
        </li>
    </ol>
    `
}