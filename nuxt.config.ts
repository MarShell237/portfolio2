// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      charset:'utf-8',
      viewport:'width=device-width, initial-scale=1',
      title: 'Marcel J. DJIOFACK portfolio',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { name: 'description', content: 'Portfolio de Marcel J. DJIOFACK' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Mon site' },
        { property: 'og:description', content: 'Portfolio de Marcel J. DJIOFACK' },
        { property: 'og:image', content: '/assets/images/logo.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://portfolio-marshells-projects.vercel.app/' },
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
