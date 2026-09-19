import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        shop: resolve(process.cwd(), 'shop.html'),
        story: resolve(process.cwd(), 'story.html'),
        journal: resolve(process.cwd(), 'journal.html'),
        login: resolve(process.cwd(), 'login.html'),
        register: resolve(process.cwd(), 'register.html'),
        product: resolve(process.cwd(), 'product.html'),
        cart: resolve(process.cwd(), 'cart.html'),
        checkout: resolve(process.cwd(), 'checkout.html'),
        profile: resolve(process.cwd(), 'profile.html'),
        wishlist: resolve(process.cwd(), 'wishlist.html'),
      },
    },
  },
})
