import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import ParentComponent from "./ParentComponent.js"

const app = createApp({});

app.component("ParentComponent", ParentComponent)

app.mount("#app")