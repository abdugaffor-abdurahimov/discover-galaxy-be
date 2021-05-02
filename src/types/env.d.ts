declare global {
  namespace NodeJs {
    interface ProcessEnv {
      UV_THREADPOOL_SIZE: number;
    }
  }
}

export {};
