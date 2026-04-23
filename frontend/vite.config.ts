import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react',
              test: /node_modules[\\/]react/,
              minSize: 100000,
              maxSize: 250000,
              priority: 20,
            },
            {
              name: 'antd',
              test: /node_modules[\\/]antd/,
              minSize: 100000,
              maxSize: 250000,
              priority: 15,
            },
            {
              name: 'vendor',
              test: /node_modules/,
              minSize: 100000,
              maxSize: 250000,
              priority: 10,
            },
            {
              name: 'common',
              minShareCount: 2,
              minSize: 100000,
              maxSize: 250000,
              priority: 5,
            },
          ],
        },
      },
    },
  },
});
