<template>
  <div id="fh5co-wrapper">
    <nuxt />
    <snackbar-component />
    <reservation-dialog />
  </div>
</template>
<script>
import SnackbarComponent from '~/components/SnackbarComponent.vue'
import ReservationDialog from '~/components/ReservationDialog.vue'
export default {
  components: { SnackbarComponent, ReservationDialog },
}
</script>
