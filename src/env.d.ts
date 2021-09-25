interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
