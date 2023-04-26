/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_TASK_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
