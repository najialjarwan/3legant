import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import svgr from '@svgr/rollup'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),

      '@app': path.resolve(__dirname, './src/app'),

      '@assets': path.resolve(__dirname, './src/assets'),
        '@icons': path.resolve(__dirname, './src/assets/icons'),
        '@images': path.resolve(__dirname, './src/assets/images/'),

      '@components': path.resolve(__dirname, './src/components'),
        '@footer': path.resolve(__dirname, './src/components/footer'),
        '@layout': path.resolve(__dirname, './src/components/layout'),
        '@navigation': path.resolve(__dirname, './src/components/navigation'),
        '@sections': path.resolve(__dirname, './src/components/sections'),
          '@cart': path.resolve(__dirname, './src/components/sections/cart'),
          '@auth': path.resolve(__dirname, './src/components/sections/auth'),
          '@home': path.resolve(__dirname, './src/components/sections/home'),
          '@newsletter': path.resolve(__dirname, './src/components/sections/newsletter'),
          '@product': path.resolve(__dirname, './src/components/sections/product'),
          '@shop': path.resolve(__dirname, './src/components/sections/shop'),
        '@ui': path.resolve(__dirname, './src/components/ui'),

      '@config': path.resolve(__dirname, './src/config'),

      '@data': path.resolve(__dirname, './src/data'),

      '@hooks': path.resolve(__dirname, './src/hooks'),

      '@pages': path.resolve(__dirname, './src/pages'),
      
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
})

