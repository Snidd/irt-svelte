import App from "./App.svelte";
import "./index.css";

declare global {
  interface Window {
    data: InRiverEntity[] | null;
  }
}

interface InRiverEntity {
  id: number;
  displayName: string;
  displayDescription: string;
  displayPicture: string;
}

let entityId = -1;

if (window.data && Array.isArray(window.data)) {
  entityId = window.data[0]?.id;
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
