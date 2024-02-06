import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@chakra-ui/react', 'formik']
    },
  },
};