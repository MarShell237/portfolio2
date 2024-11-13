/*************  ✨ Codeium Command 🌟  *************/
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      charset:'utf-8',
      viewport:'width=device-width, initial-scale=1',
      title: 'Marcel J. DJIOFACK portfolio',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { name: 'description', content: 'Salut! Je suis Marcel, un développeur web polyvalent capable de transformer vos idées en sites web fonctionnels et esthétiques. Découvrez mes projets et contacter sur mon portfolio.' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Marcel J. DJIOFACK portfolio' },
        { property: 'og:description', content: 'Salut! Je suis Marcel, un développeur web polyvalent capable de transformer vos idées en sites web fonctionnels et esthétiques. Découvrez mes projets et contacter sur mon portfolio.' },
        { property: 'og:image', content: 'https://marcel-j-djiofack-portfolio.vercel.app/assets/images/logo.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://marcel-j-djiofack-portfolio.vercel.app/' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: 'https://marcel-j-djiofack-portfolio.vercel.app/assets/images/logo.png' }
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
