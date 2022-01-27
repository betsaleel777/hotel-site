<template>
  <aside id="fh5co-hero" class="js-fullheight">
    <div class="flexslider js-fullheight">
      <ul class="slides">
        <li style="background-image: url(/images/slider1.jpg)">
          <div class="overlay-gradient"></div>
          <div class="container">
            <div class="col-md-12 col-md-offset-0 text-center slider-text">
              <div class="slider-text-inner js-fullheight">
                <div class="desc">
                  <p>
                    <span class="mini-title">Convivialité</span>
                  </p>
                  <h2>Reserver pour les vacances en famille</h2>
                  <p>
                    <a class="btn btn-primary btn-lg" @click="open"
                      >Réservation</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li style="background-image: url(/images/slider2.jpg)">
          <div class="overlay-gradient"></div>
          <div class="container">
            <div class="col-md-12 col-md-offset-0 text-center slider-text">
              <div class="slider-text-inner js-fullheight">
                <div class="desc">
                  <p><span class="mini-title">Confort</span></p>
                  <h2>Confortablement à son aise</h2>
                  <p>
                    <a href="#" class="btn btn-primary btn-lg" @click="open"
                      >Réservation</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li style="background-image: url(/images/slider3.jpg)">
          <div class="overlay-gradient"></div>
          <div class="container">
            <div class="col-md-12 col-md-offset-0 text-center slider-text">
              <div class="slider-text-inner js-fullheight">
                <div class="desc">
                  <p><span class="mini-title">Luxe</span></p>
                  <h2>La résidence des moments inoubliables</h2>
                  <p>
                    <a href="#" class="btn btn-primary btn-lg" @click="open"
                      >Réservation</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
export default {
  methods: {
    open() {
      this.$store.commit('openDialog')
    },
  },
}
</script>
<style scoped>
.mini-title {
  color: white;
}
</style>
