import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import ComponentA from "./ComponentA.js"
import ComponentB from "./ComponentB.js"
import ComponentC from "./ComponentC.js"

const app = createApp({});

app.component("ComponentA", ComponentA)
app.component("ComponentB", ComponentB)
app.component("ComponentC", ComponentC)

app.mount("#app")