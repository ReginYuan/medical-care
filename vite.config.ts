import { defineConfig } from "vite";
import * as path from 'path'
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`,
    },
    extensions: ['.mjs', '.js', '.jsx', '.json', '.vue'],
  },
  plugins: [uni()],
});
