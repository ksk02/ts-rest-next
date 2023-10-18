// vite.config.js
export default {
    build: {
        rollupOptions: {
            input: {
              main: './src/app/page.tsx', // ここにアプリケーションのエントリーポイントを指定します
            },
        },
    },
}
