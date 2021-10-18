import App from "./App.svelte";

let inriverWindow = window as any;

let entityId = -1;
if (inriverWindow.hasOwnProperty("data") && Array.isArray(inriverWindow.data)) {
  entityId = inriverWindow.data[0]?.id;
}
if (entityId === -1) {
  // EntityID for local development testing
  entityId = 123;
}

const app = new App({
  target: document.getElementById("app"),
  props: {
    entityId: entityId.toString(),
  },
});

export default app;
