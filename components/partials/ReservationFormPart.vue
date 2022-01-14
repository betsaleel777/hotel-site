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
                <input id="date-start" type="text" class="form-control" />
              </div>
            </div>
            <div class="a-col alternate">
              <div class="input-field">
                <label for="date-end">Date de Départ</label>
                <input id="date-end" type="text" class="form-control" />
              </div>
            </div>
            <div class="a-col action">
              <a href="#">
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
export default {}
</script>
