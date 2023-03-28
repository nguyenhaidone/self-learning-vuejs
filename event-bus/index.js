import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import ListCar from "./ListCar.js";
import SearchFrom from "./SearchFrom.js";

const app = createApp({});

app.component("SearchFrom", SearchFrom);
app.component("ListCar", ListCar);

app.mount("#app")