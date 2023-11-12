<template>
  <div class="video-section" id="hero">
    <div class="content">
      <!-- Conteúdo da seção -->
      <nav class="navbar navbar-expand-lg transparent" id="navbar">
        <div class="container">
          <div class="d-flex justify-content-between w-100">
            <a class="navbar-brand text-gray" href="#">Collab</a>
            <div id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link active text-gray"
                    aria-current="page"
                    href="/#section-1"
                  >
                    Studio
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active text-gray"
                    aria-current="page"
                    href="/#section-1"
                  >
                    Artistas
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active text-gray"
                    aria-current="page"
                    href="/#section-3"
                  >
                    Galeria
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active text-gray"
                    aria-current="page"
                    href="/#section-2"
                  >
                    Flashes
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active text-gray"
                    aria-current="page"
                    href="/#section-4"
                  >
                    Contato
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item text-gray" href="#">Artistas</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <section id="section-2">
    <div class="section-container container py-5">
      <h1 class="text-center" style="margin-bottom: 49px; margin-top: 30px">
        Destaques
      </h1>
      <carousel :items-to-show="3" class="mt-5">
        <slide v-for="slide in 10" :key="slide">
          <img
            src="@/assets/images/img-carousel.png"
            alt="card"
            class="img-fluid"
          />
        </slide>

        <template #addons>
          <pagination class="mt-5" />
        </template>
      </carousel>
    </div>
  </section>
  <div class="section-divider"></div>
  <section id="section-1">
    <div class="section-container container py-5">
      <h1 class="text-center" style="margin-bottom: 49px; margin-top: 30px">
        Flashes Disponíveis
      </h1>
      <div class="gallery">
        <div class="card-gallery fade-in">
          <img
            src="@/assets/images/img-carousel.png"
            alt="card-gallery"
            class="card-img"
          />
        </div>
        <div class="card-gallery fade-in">
          <img
            src="@/assets/images/img-carousel.png"
            alt="card-gallery"
            class="card-img"
          />
        </div>
        <div class="card-gallery fade-in">
          <img
            src="@/assets/images/img-carousel.png"
            alt="card-gallery"
            class="card-img"
          />
        </div>
        <div class="card-gallery fade-in">
          <img
            src="@/assets/images/img-carousel.png"
            alt="card-gallery"
            class="card-img"
          />
        </div>
        <div class="card-gallery fade-in">
          <img
            src="@/assets/images/img-carousel.png"
            alt="card-gallery"
            class="card-img"
          />
        </div>
        <div class="card-gallery fade-in">
          <img
            src="@/assets/images/img-carousel.png"
            alt="card-gallery"
            class="card-img"
          />
        </div>
        <div class="card-gallery fade-in">
          <img
            src="@/assets/images/img-carousel.png"
            alt="card-gallery"
            class="card-img"
          />
        </div>
        <div class="card-gallery fade-in">
          <img
            src="@/assets/images/img-carousel.png"
            alt="card-gallery"
            class="card-img"
          />
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <section id="section-3">
    <div class="py-5">
      <h1 class="text-center" style="margin-bottom: 49px">Portfólio</h1>
      <div class="image-mosaic">
        <div
          class="card card-tall card-wide fade-in"
          style="
            background-image: url('https://files.fm/thumb_show.php?i=72j7sbtc9');
          "
        ></div>

        <div
          class="card card-tall fade-in"
          style="
            background-image: url('https://files.fm/thumb_show.php?i=jc2u2nfbk');
          "
        ></div>
        <div
          class="card fade-in"
          style="
            background-image: url('https://files.fm/thumb_show.php?i=kc87eafgy');
          "
        ></div>
        <div
          class="card fade-in"
          style="
            background-image: url('https://files.fm/thumb_show.php?i=g7hb6fx56');
          "
        ></div>
        <div
          class="card fade-in"
          style="
            background-image: url('https://files.fm/thumb_show.php?i=cj2nk9vsx');
          "
        ></div>
        <div
          class="card fade-in"
          style="
            background-image: url('https://files.fm/thumb_show.php?i=m9tg6vqcr');
          "
        ></div>
        <div
          class="card card-wide fade-in"
          style="
            background-image: url('https://files.fm/thumb_show.php?i=6k8jtuyba');
          "
        ></div>
        <div
          class="card fade-in"
          style="
            background-image: url('https://files.fm/thumb_show.php?i=y367wq28x');
          "
        ></div>
        <div
          class="card fade-in"
          style="
            background-image: url('https://files.fm/thumb_show.php?i=9eqzqj5g7');
          "
        ></div>
        <div
          class="card fade-in"
          style="
            background-image: url('https://files.fm/thumb_show.php?i=2bxh48was');
          "
        ></div>
      </div>
    </div>
    <div class="section-divider-full"></div>
    <footer class="py-5" id="section-4">
      <div class="container footer-content">
        <div class="logo">
          <a class="navbar-brand text-gray" href="#">Collab</a>
        </div>

        <div class="onde-estamos">
          <h4>Onde Estamos</h4>
          <ul class="icon-container">
            <li>
              <i class="fas fa-home"></i> Empresarial Mundo Plaza, Sala 308
            </li>
            <li><i class="fas fa-search"></i> Campina Grande - PB</li>
            <li><i class="fas fa-map-marker"></i> CEP 00000-000</li>
          </ul>
        </div>

        <div class="contato">
          <h4>Contato</h4>
          <ul class="icon-container">
            <li><i class="fab fa-whatsapp"></i> (83)99999-9999</li>
            <li><i class="fas fa-envelope"></i> collab@collab.com.br</li>
            <li><i class="fab fa-instagram"></i> collabtattoo_</li>
          </ul>
        </div>
      </div>
    </footer>
  </section>

  <!-- <footer>
      <div class="container py-5">
        <h1 class="text-center">Footer</h1>
      </div>
    </footer> -->
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  name: "artistaPage",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
};

// Seleciona todos os elementos com a classe "fade-in"
</script>

<style scoped lang="scss">
#section-1,
#section-2,
#section-3,
#hero,
footer {
  background-image: url(@/assets/images/bg-section-1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  color: #e2e2e2;
  margin-top: -1px; /* Remove a margem superior */
  margin-bottom: -1px; /* Remove a margem inferior */
  background-attachment: fixed;
}
.navbar {
  position: fixed;
  width: 100%;
  background-image: url(@/assets/images/bg-section-1.jpg);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.artist-image {
  transition: transform 0.4s;
}

.artist-image:hover {
  transform: scale(1.1);
}
.fade-in {
  opacity: 0;
  transition: opacity 0.5s ease-in;
}

/* Classe para aplicar o fade-in quando o elemento estiver visível */
.fade-in.show {
  opacity: 1;
}

/* Classe para aplicar o fade-in */

.disponiveis-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  /* Estilos adicionais do botão */
}

.navbar a:hover {
  text-decoration: line-through;
}

.button {
  background-color: transparent;
  border: 2px solid #e2e2e2;
  border-radius: 50px;
  padding: 10px 20px;
  color: #e2e2e2;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.button:hover {
  background-color: #e2e2e2;
  color: black;
}
.section-container {
  padding-top: 143.5px;
  padding-bottom: 143.5px;
}
.section-divider {
  height: 2px;
  background-color: gray;
  filter: blur(3px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 10%; /* Ajuste o tamanho da linha de acordo com suas necessidades */
  margin: auto;
}

.section-divider::before {
  content: "";
  display: block;
  height: 100%;
  background-color: gray;
  filter: blur(3px);
  margin-top: -1px;
}

.section-divider-full {
  height: 2px;
  background-color: gray;
  filter: blur(3px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 85%; /* Ajuste o tamanho da linha de acordo com suas necessidades */
  margin: auto;
}

.section-divider-full::before {
  content: "";
  display: block;
  height: 100%;
  background-color: gray;
  filter: blur(3px);
  margin-top: -1px;
}

.carousel__slide {
  transform: scale(0.8);
  filter: blur(2px);
}

.carousel__slide--active {
  transform: scale(1);
  filter: blur(0);
}

::v-deep .carousel__pagination-button {
  background: #e2e2e266;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 3px;
}

::v-deep .carousel__pagination-button--active {
  background: #fff;
  border-radius: 50px;
  width: 40px;
  background-color: none;
}

.carousel__pagination-item::after {
  background-color: none;
}

::v-deep .carousel__pagination-button--active::after {
  background-color: transparent;
}

.video-section {
  position: relative;
  width: 100%;
  height: 100vh;
}

.video-section video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
}

.text-gray {
  color: #e2e2e2 !important;
}

a.navbar-brand {
  font-size: 31.25px;
}
a.nav-link {
  font-size: 20px;
}

section {
  height: 1000px;
}
.image-mosaic {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 240px;
}

.gallery {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 240px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #353535;
  font-size: 3rem;
  color: #fff;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
    rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  transition: all 500ms;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
}

.card-gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;

  font-size: 3rem;
  color: #fff;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
    rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;

  border-radius: 4px;
  transition: all 500ms;
  overflow: hidden;

  padding: 0;
  margin: 0;
}

.card-img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}

.card-gallery::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 500ms;
}
.card-gallery:hover {
  transform: scale(0.95);
}
.card-gallery:hover::before {
  opacity: 1;
}
@media screen and (min-width: 600px) {
  .card-tall {
    grid-row: span 2 / auto;
  }

  .card-wide {
    grid-column: span 2 / auto;
  }
}
.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 500ms;
}
.card:hover {
  transform: scale(0.95);
}
.card:hover::before {
  opacity: 1;
}

.logo img {
  height: 50px;
}

.onde-estamos {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.contato {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.onde-estamos h4 .contato h4 {
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 5px;
}

i {
  margin-right: 5px;
}
html {
  scroll-behavior: smooth;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
}

.icon-container {
  font-family: "Avenir Roman", sans-serif;
  font-size: 15px;
}
</style>
