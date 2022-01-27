<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div id="availability">
          <form action="#">
            <div class="a-col">
              <section>
                <select class="cs-select cs-skin-border">
                  <option value="" disabled selected>Période</option>
                </select>
              </section>
            </div>
            <div class="a-col alternate">
              <div class="input-field">
                <label for="date-start">Date d'Arrivée</label>
                <input
                  id="date-start"
                  v-model="entree"
                  type="text"
                  class="form-control"
                />
              </div>
            </div>
            <div class="a-col alternate">
              <div class="input-field">
                <label for="date-end">Date de Sortie</label>
                <input
                  id="date-end"
                  v-model="sortie"
                  type="text"
                  class="form-control"
                />
              </div>
            </div>
            <div class="a-col action">
              <a href="#" @click="verifier">
                <span>Vérifier</span>
                La Disponibilité
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    entree: null,
    sortie: null,
  }),
  methods: {
    verifier() {
      if (this.entree && this.sortie) {
        // code
      } else {
        this.$notifier.show({
          text: "Les dates de sortie et d'entrée doivent être sélectionnés.",
          variant: 'error',
        })
      }
    },
  },
}
</script>
