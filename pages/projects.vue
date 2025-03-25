<template>
  <body class="d-flex flex-column h-100 bg-light">
    <main class="flex-shrink-0">
        <!-- Navigation-->
        <NavBar/>
        <!-- Projects Section-->
        <section class="py-5">
            <div class="container px-5 mb-5">
                <div class="text-center mb-5">
                    <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Projects</span></h1>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-11 col-xl-9 col-xxl-8">
                        <!-- Project Card 1-->
                        <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center">
                                    <div class="p-5 pe-0">
                                        <h2 class="fw-bolder text-primary">Shingeki Shop</h2>
                                        <p>Le projet « Shingeki Shop
                                          », une plateforme de commerce électronique complète
                                          utilisant Laravel et Vue.js pour répondre aux besoins des
                                          clients.
                                          aux besoins des passionnés de l'Attaque des Titans (otakus)
                                          au Cameroun.</p>
                                    </div>
                                    <div class="shingeki-shop"></div>
                                </div>
                            </div>
                        </div>
                        <!-- Project Card 2-->
                        <div class="card overflow-hidden shadow rounded-4 border-0">
                            <div class="card-body p-0">
                                <div class="d-flex align-items-center">
                                    <div class="p-5">
                                        <h2 class="fw-bolder">Ngaan le calendrier yemba</h2>
                                        <p>
                                          Ngaan le calendrier yemba est une application mobile qui permet aux utilisateurs de visualiser les jours de marchees de la ville de Dschang.
                                          <a href="https://github.com/Capital-M-Industries/ngaan/releases/download/new/app-universal-release.apk">telecharger</a>
                                        </p>
                                    </div>
                                    <img class="img-fluid" src="./../public/assets/images/ngaan.png" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Call to action section-->
        <section class="py-5 bg-gradient-primary-to-secondary text-white">
            <div class="container px-5 my-5">
                <div class="text-center">
                    <h2 class="display-4 fw-bolder mb-4">Construisons quelque chose ensemble</h2>
                    <NuxtLink class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/contact">Contactez moi</NuxtLink>
                </div>
            </div>
        </section>
    </main>
    <!-- Footer-->
    <FOtterBar/>
    <!-- Bootstrap core JS-->
    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script> -->
    <!-- Core theme JS-->
    <!-- <script src="js/scripts.js"></script> -->
</body>
</template>
  
<script setup>

</script>

<style scoped>
  .shingeki-shop{
    width: 400px;
    height:230px;
    background-image: url('./../assets/images/shingeki-shop.png');
    background-size: contain;
  }
</style>