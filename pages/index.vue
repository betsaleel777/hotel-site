<template>
  <div id="fh5co-page">
    <HeaderPart />
    <AsidePart />
    <ReservationFormPart />
    <FeaturedHotelPart />
    <HotelFacilitiesPart />
    <FooterPart />
  </div>
</template>

<script>
import HeaderPart from '~/components/partials/headerPart.vue'
import AsidePart from '~/components/partials/AsidePart.vue'
import ReservationFormPart from '~/components/partials/ReservationFormPart.vue'
import FeaturedHotelPart from '~/components/partials/FeaturedHotelPart.vue'
import HotelFacilitiesPart from '~/components/partials/HotelFacilitiesPart.vue'
import FooterPart from '~/components/partials/FooterPart.vue'
export default {
  components: {
    HeaderPart,
    AsidePart,
    ReservationFormPart,
    FeaturedHotelPart,
    HotelFacilitiesPart,
    FooterPart,
  },
}
</script>
