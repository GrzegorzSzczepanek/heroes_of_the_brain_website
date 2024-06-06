import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

export default {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $components: path.resolve('src/lib/components'),
        }
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import 'leaflet/dist/leaflet.css';`
          }
        }
      },
      build: {
        rollupOptions: {
          external: ['leaflet']
        }
      }
    }
  }
};
