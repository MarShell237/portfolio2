<template>
  <body class="d-flex flex-column h-100 bg-light">
    <main class="flex-shrink-0">
        <!-- Navigation-->
        <NavBar/>
        <!-- Page Content-->
        <div class="container px-5 my-5">
            <div class="text-center mb-5">
                <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">CV</span></h1>
            </div>
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-11 col-xl-9 col-xxl-8">
                    <!-- Experience Section-->
                    <section>
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <h2 class="text-primary fw-bolder mb-0">Experience</h2>
                            <!-- Download resume button-->
                            <!-- Note: Set the link href target to a PDF file within your project-->
                            <a class="btn btn-primary px-4 py-3" href="./../assets/cv/Marcel.pdf">
                                <div class="d-inline-block fa fa-download me-2"></div>
                                Télécharger le CV
                            </a>
                        </div>
                        <!-- Experience Card 1-->
                        <div class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div class="bg-light p-4 rounded-4">
                                            <div class="text-primary fw-bolder mb-2">Cameroun 2024</div>
                                            <div class="small fw-bolder">Developpeur Full-stack</div>
                                            <div class="small text-muted">Amazing Agency</div>
                                            <div class="small text-muted">Dschang, Cameroun</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8"><div>Collaboration avec une équipe de développeurs pour
                                      concevoir, développer et
                                      maintenir des applications Web full-stack conviviales et
                                      réactives
                                      en utilisant vue.js et laravel.</div></div>
                                </div>
                            </div>
                        </div>
                        <!-- Experience Card 2-->
                        <div class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div class="bg-light p-4 rounded-4">
                                            <div class="text-primary fw-bolder mb-2">Cameroun 2024</div>
                                            <div class="small fw-bolder">Developpeur Full-stack</div>
                                            <div class="small text-muted">Shingeki Shop</div>
                                            <div class="small text-muted">Dschang, Cameroun</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8"><div>Dirigé la conception et le développement de « Shingeki Shop
                                      », une plateforme de commerce électronique complète
                                      utilisant Laravel et Vue.js pour répondre aux besoins des
                                      clients.
                                      aux besoins des passionnés de l'Attaque des Titans (otakus)
                                      au Cameroun.</div></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Education Section-->
                    <section>
                        <h2 class="text-secondary fw-bolder mb-4">Education</h2>
                        <!-- Education Card 1-->
                        <div class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div class="bg-light p-4 rounded-4">
                                            <div class="text-secondary fw-bolder mb-2">2022 - Aujourd'hui</div>
                                            <div class="mb-2">
                                                <div class="small fw-bolder">Université de Dschang</div>
                                                <div class="small text-muted">Dschang,Cameroun</div>
                                            </div>
                                            <div class="fst-italic">
                                                <div class="small text-muted">Licence</div>
                                                <div class="small text-muted">Informatique Fondamentale</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8"><div>Diplome obtenu au terme ce trois longues années d'études dans lesquels j'ai appris les base de l'informatique avant de me spécialiser dans le devellopement d'appication.</div></div>
                                </div>
                            </div>
                        </div>
                        <!-- Education Card 2-->
                        <!-- <div class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <div class="row align-items-center gx-5">
                                    <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                        <div class="bg-light p-4 rounded-4">
                                            <div class="text-secondary fw-bolder mb-2">2011 - 2015</div>
                                            <div class="mb-2">
                                                <div class="small fw-bolder">ULA</div>
                                                <div class="small text-muted">Los Angeles, CA</div>
                                            </div>
                                            <div class="fst-italic">
                                                <div class="small text-muted">Undergraduate</div>
                                                <div class="small text-muted">Computer Science</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                                </div>
                            </div>
                        </div> -->
                    </section>
                    <!-- Divider-->
                    <div class="pb-5"></div>
                    <!-- Skills Section-->
                    <section>
                        <!-- Skillset Card-->
                        <div class="card shadow border-0 rounded-4 mb-5">
                            <div class="card-body p-5">
                                <!-- Professional skills list-->
                                <div class="mb-5">
                                    <div class="d-flex align-items-center mb-4">
                                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="fa-solid fa-dumbbell"></i></div>
                                        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">QUALITÉS</span></h3>
                                    </div>
                                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Créativité</div></div>
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Esprit critique</div></div>
                                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Esprit d'équipe</div></div>
                                    </div>
                                    <div class="row row-cols-1 row-cols-md-3">
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Aime apprendre</div></div>
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Travaille dure</div></div>
                                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Observateur</div></div>
                                    </div>
                                </div>
                                <!-- Languages list-->
                                <div class="mb-0">
                                    <div class="d-flex align-items-center mb-4">
                                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="fa-solid fa-code"></i></div>
                                        <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Languages</span></h3>
                                    </div>
                                    <div class="row row-cols-1 row-cols-md-3 mb-4">
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div></div>
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div></div>
                                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                                    </div>
                                    <div class="row row-cols-1 row-cols-md-3">
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">SCSS</div></div>
                                        <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">LARAVEL</div></div>
                                        <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Vue.js</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>
    <!-- Footer-->
    <FooterBar/>
    <!-- Bootstrap core JS-->
    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script> -->
    <!-- Core theme JS-->
    <!-- <script src="js/scripts.js"></script> -->
</body>
</template>
  
<script setup>

</script>

<style scoped>
  
</style>