// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      charset:'utf-8',
      viewport:'width=device-width, initial-scale=1',
      title: 'Marcel J. DJIOFACK portfolio',
      meta: [
        { name: 'description', content: 'Portfolio de Marcel J. DJIOFACK' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' }
      ]
    },
  },
  // css:['~/public/assets/css/styles.css','~/public/assets/css/all.min.css','~/public/assets/css/fontawesome.min.css'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
