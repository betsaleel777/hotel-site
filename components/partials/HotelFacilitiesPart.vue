<template>
  <div id="hotel-facilities">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title text-center">
            <h2>Services d'Hôtel</h2>
          </div>
        </div>
      </div>

      <div id="tabs">
        <nav class="tabs-nav">
          <a
            v-for="(tab, index) in tabs"
            :key="index"
            href="#"
            :class="tab.active ? 'active' : ''"
            :data-tab="tab.id"
            @click="selectedService(tab.id, index)"
          >
            <v-icon class="icon">{{ tab.icon }}</v-icon>
            <span>{{ tab.titre }}</span>
          </a>
        </nav>
        <div class="tab-content-container">
          <div class="tab-content active show" data-tab-content="tab1">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <img
                    src="images/tab_img_1.jpg"
                    class="img-responsive"
                    alt="Image"
                  />
                </div>
                <div class="col-md-6">
                  <span class="super-heading-sm">Restaurant</span>
                  <h3 class="heading">Savourez nos spécialités</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias officia perferendis modi impedit, rem quasi
                    veritatis. Consectetur obcaecati incidunt, quae rerum,
                    accusamus sapiente fuga vero at. Quia, labore, reprehenderit
                    illum dolorem quae facilis reiciendis quas similique totam
                    sequi ducimus temporibus ex nemo, omnis perferendis earum
                    fugit impedit molestias animi vitae.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam neque blanditiis eveniet nesciunt, beatae
                    similique doloribus, ex impedit rem officiis placeat
                    dignissimos molestias temporibus, in! Minima quod,
                    consequatur neque aliquam.
                  </p>
                  <p class="service-hour">
                    <span>Heures de Service</span>
                    <strong>6:30 - 21:30 </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" data-tab-content="tab2">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <img
                    src="images/tab_img_2.jpg"
                    class="img-responsive"
                    alt="Image"
                  />
                </div>
                <div class="col-md-6">
                  <span class="super-heading-sm">Bar</span>
                  <h3 class="heading">Des boissons exotiques</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias officia perferendis modi impedit, rem quasi
                    veritatis. Consectetur obcaecati incidunt, quae rerum,
                    accusamus sapiente fuga vero at. Quia, labore, reprehenderit
                    illum dolorem quae facilis reiciendis quas similique totam
                    sequi ducimus temporibus ex nemo, omnis perferendis earum
                    fugit impedit molestias animi vitae.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam neque blanditiis eveniet nesciunt, beatae
                    similique doloribus, ex impedit rem officiis placeat
                    dignissimos molestias temporibus, in! Minima quod,
                    consequatur neque aliquam.
                  </p>
                  <p class="service-hour">
                    <span>Heures de Service</span>
                    <strong>16:00 AM - 00:00 PM</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" data-tab-content="tab3">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <img
                    src="images/tab_img_3.jpg"
                    class="img-responsive"
                    alt="Image"
                  />
                </div>
                <div class="col-md-6">
                  <span class="super-heading-sm">Club cigare</span>
                  <h3 class="heading">Détente entre amis</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias officia perferendis modi impedit, rem quasi
                    veritatis. Consectetur obcaecati incidunt, quae rerum,
                    accusamus sapiente fuga vero at. Quia, labore, reprehenderit
                    illum dolorem quae facilis reiciendis quas similique totam
                    sequi ducimus temporibus ex nemo, omnis perferendis earum
                    fugit impedit molestias animi vitae.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam neque blanditiis eveniet nesciunt, beatae
                    similique doloribus, ex impedit rem officiis placeat
                    dignissimos molestias temporibus, in! Minima quod,
                    consequatur neque aliquam.
                  </p>
                  <p class="service-hour">
                    <span>Heures de Service</span>
                    <strong>24/24</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" data-tab-content="tab4">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <img
                    src="images/tab_img_4.jpg"
                    class="img-responsive"
                    alt="Image"
                  />
                </div>
                <div class="col-md-6">
                  <span class="super-heading-sm">Espace</span>
                  <h3 class="heading">Profitez de la verdure</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias officia perferendis modi impedit, rem quasi
                    veritatis. Consectetur obcaecati incidunt, quae rerum,
                    accusamus sapiente fuga vero at. Quia, labore, reprehenderit
                    illum dolorem quae facilis reiciendis quas similique totam
                    sequi ducimus temporibus ex nemo, omnis perferendis earum
                    fugit impedit molestias animi vitae.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam neque blanditiis eveniet nesciunt, beatae
                    similique doloribus, ex impedit rem officiis placeat
                    dignissimos molestias temporibus, in! Minima quod,
                    consequatur neque aliquam.
                  </p>
                  <!-- <p class="service-hour">
                    <span>Heures de Service</span>
                    <strong>8h00 - 21:00 </strong>
                  </p> -->
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" data-tab-content="tab5">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <img
                    src="images/tab_img_5.jpg"
                    class="img-responsive"
                    alt="Image"
                  />
                </div>
                <div class="col-md-6">
                  <span class="super-heading-sm">Piscine</span>
                  <h3 class="heading">Une piscine raffraichissante</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias officia perferendis modi impedit, rem quasi
                    veritatis. Consectetur obcaecati incidunt, quae rerum,
                    accusamus sapiente fuga vero at. Quia, labore, reprehenderit
                    illum dolorem quae facilis reiciendis quas similique totam
                    sequi ducimus temporibus ex nemo, omnis perferendis earum
                    fugit impedit molestias animi vitae.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam neque blanditiis eveniet nesciunt, beatae
                    similique doloribus, ex impedit rem officiis placeat
                    dignissimos molestias temporibus, in! Minima quod,
                    consequatur neque aliquam.
                  </p>
                  <!-- <p class="service-hour">
                    <span>Heures de Service</span>
                    <strong>7:30 AM - 8:00 PM</strong>
                  </p> -->
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" data-tab-content="tab6">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <img
                    src="images/tab_img_6.jpg"
                    class="img-responsive"
                    alt="Image"
                  />
                </div>
                <div class="col-md-6">
                  <span class="super-heading-sm">Location d'espace</span>
                  <h3 class="heading">La Résidence vous Appartient</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias officia perferendis modi impedit, rem quasi
                    veritatis. Consectetur obcaecati incidunt, quae rerum,
                    accusamus sapiente fuga vero at. Quia, labore, reprehenderit
                    illum dolorem quae facilis reiciendis quas similique totam
                    sequi ducimus temporibus ex nemo, omnis perferendis earum
                    fugit impedit molestias animi vitae.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam neque blanditiis eveniet nesciunt, beatae
                    similique doloribus, ex impedit rem officiis placeat
                    dignissimos molestias temporibus, in! Minima quod,
                    consequatur neque aliquam.
                  </p>
                  <!-- <p class="service-hour">
                    <span>Heures de Service</span>
                    <strong>7:30 AM - 8:00 PM</strong>
                  </p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    tabs: [
      {
        id: 'tab1',
        titre: 'Restaurant',
        icon: 'mdi-food-fork-drink',
        active: true,
      },
      {
        id: 'tab2',
        titre: 'Bar',
        icon: 'mdi-glass-wine',
        active: false,
      },
      {
        id: 'tab3',
        titre: 'Club Cigare',
        icon: 'mdi-smoking',
        active: false,
      },
      {
        id: 'tab4',
        titre: 'Piscine',
        icon: 'mdi-swim',
        active: false,
      },
      {
        id: 'tab5',
        titre: 'Spacieux',
        icon: 'mdi-nature-people',
        active: false,
      },
      {
        id: 'tab6',
        titre: 'Location Espace',
        icon: 'mdi-home',
        active: false,
      },
    ],
  }),
  methods: {
    selectedService(id, index) {
      this.tabs[index].active = true
      this.tabs.forEach((tab) => {
        if (tab.id !== id) tab.active = false
      })
    },
  },
}
</script>
<style lang=""></style>
