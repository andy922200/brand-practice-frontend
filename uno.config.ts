import { defineConfig, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetTypography()],
  theme: {
    breakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
  },
})
