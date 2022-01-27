<template>
  <footer id="footer" class="fh5co-bg-color">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>Contactez nous</h3>
          <span>
            Nous somme à votre disposition pour toutes informations
            complémentaires,
          </span>
          <ul class="contact-info">
            <li>
              <i class="contact-icon ti-map"></i
              ><small>Yamoussoukro quartier millionnaire</small>
            </li>
            <li>
              <i class="contact-icon ti-mobile"></i
              ><small>+ 1235 2355 98</small>
            </li>
            <li>
              <i class="contact-icon ti-envelope"></i
              ><a href="#"><small>info@krinjabo.com</small></a>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-3">
              <h3>Menu Krinjabo</h3>
              <ul class="link">
                <li>
                  <a href="#fh5co-header">Acceuil</a>
                </li>
                <li><a href="#featured-hotel">Nos suites</a></li>
                <li><a href="#hotel-facilities">Services d'hôtel</a></li>
                <li><a href="#footer">Contacts</a></li>
              </ul>
            </div>
            <div class="col-md-3">
              <h3>Détails services</h3>
              <ul class="link">
                <li><a href="#">Restaurant</a></li>
                <li><a href="#">Club Cigare</a></li>
                <li><a href="#">Piscine</a></li>
                <li><a href="#">Spacieux</a></li>
                <li><a href="#">Location</a></li>
              </ul>
            </div>
            <div class="col-md-6">
              <h3>S'abonner</h3>
              <p>
                Restez informer sur l'actualité concernant la Résidence Krinjabo
                Hôtel.
              </p>
              <v-form id="form-subscribe">
                <v-text-field
                  v-model="message"
                  append-outer-icon="mdi-send"
                  clearable
                  label="Email"
                  type="email"
                  @click:append-outer="sendMessage"
                ></v-text-field>
              </v-form>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <ul class="social-icons">
            <li>
              <!-- <a href="#"><i class="icon-twitter-with-circle"></i></a> -->
              <a href="#"><i class="icon-facebook-with-circle"></i></a>
              <a href="#"><i class="icon-instagram-with-circle"></i></a>
              <a href="#"><i class="icon-linkedin-with-circle"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <center>
        <div class="copyright">
          <small
            >&copy; {{ new Date().getFullYear() }} lovely powered by
            <v-img height="16px" width="20px" src="/segoor-favi.png"></v-img>
            <!-- mettre icon de segoor ici -->
            <a href="https://segoor.net" target="_blank"> Segoor</a>.
          </small>
        </div>
      </center>
    </div>
  </footer>
</template>
<script>
export default {
  data: () => ({
    show: false,
    message: '',
    marker: true,
    iconIndex: 0,
  }),
  methods: {
    sendMessage() {
      // console.log('email envoyé')
      this.message = ''
    },
  },
}
</script>
<style scoped>
h3 {
  color: white;
}
.contact-icon {
  color: white;
}
</style>
