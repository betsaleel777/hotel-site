<template>
  <v-app>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Réservation de chambre RHK</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form">
              <v-text-field
                v-model="reservation.client"
                :disabled="newclient"
                label="Code client"
                append-outer-icon="mdi-send"
                @click:append-outer="getOne"
              ></v-text-field>
              <v-text-field v-model="reservation.nom" color="amber">
                <template #label>
                  Nom<span class="red--text"><strong> *</strong></span>
                </template>
              </v-text-field>
              <v-text-field v-model="reservation.prenom" color="amber">
                <template #label>
                  Prénoms<span class="red--text"><strong> *</strong></span>
                </template>
              </v-text-field>
              <v-text-field
                v-model="reservation.email"
                color="amber"
                label="Email"
                type="email"
              >
                <template #label>
                  Email<span class="red--text"><strong> *</strong></span>
                </template>
              </v-text-field>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="reservation.dates"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template #activator="{ on, attrs }">
                  <v-text-field
                    v-model="reservation.dates"
                    clearable
                    prepend-icon="mdi-calendar"
                    color="amber"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  >
                    <template #label>
                      Délais d'occupation<span class="red--text"
                        ><strong> *</strong></span
                      >
                    </template>
                  </v-text-field>
                </template>
                <v-date-picker
                  v-model="reservation.dates"
                  :allowed-dates="allowedDates"
                  color="amber darken-3"
                  locale="fr"
                  range
                  no-title
                  scrollable
                  first-day-of-week="1"
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="error" @click="menu = false">
                    fermer
                  </v-btn>
                  <v-btn
                    text
                    color="primary darken-3"
                    @click="$refs.menu.save(reservation.dates)"
                  >
                    valider
                  </v-btn>
                </v-date-picker>
              </v-menu>
              <v-select
                v-model="reservation.categorie"
                :items="categories"
                item-value="id"
                color="amber"
              >
                <template slot="item" slot-scope="data">
                  <b class="subtitle-1 text-uppercase mr-2">
                    {{ data.item.nom }}</b
                  >({{ data.item.fourchette }})
                </template>
                <template slot="selection" slot-scope="data">
                  {{ data.item.nom }}
                </template>
                <template #label>
                  Types de Chambre<span class="red--text"
                    ><strong> *</strong></span
                  >
                </template>
              </v-select>
              <v-btn
                class="mt-5"
                outlined
                color="blue darken-3"
                block
                @click="verifier"
                ><v-icon lef>mdi-shield-home</v-icon>Réserver</v-btn
              >
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" text @click="fermer"> Fermer </v-btn>
          <v-btn
            :disabled="!disponible"
            color="primary darken-1"
            text
            @click="save"
          >
            confirmer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script>
import moment from 'moment'
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    menu: false,
    reservation: {
      nom: '',
      prenom: '',
      categorie: null,
      email: '',
      dates: [],
      client: null,
    },
    disponible: false,
    loading: false,
    newclient: false,
  }),
  computed: {
    ...mapState(['dialog', 'categories']),
    validations() {
      return (
        this.reservation.nom &&
        this.reservation.prenom &&
        this.reservation.email &&
        this.reservation.categorie &&
        this.reservation.dates.length > 0
      )
    },
  },
  created() {
    this.getCategories()
  },
  methods: {
    ...mapActions(['checkDisponible', 'getClient', 'getCategories']),
    allowedDates: (val) => moment().isSameOrBefore(val, 'day'),
    save() {
      if (this.validations) {
        this.$axios
          .post('public/reservations/new', this.reservation)
          .then((result) => {
            this.$notifier.show({
              text: result.data.message,
              variant: 'success',
              timeout: 6500,
            })
          })
        this.fermer()
      } else {
        this.$notifier.show({
          text: 'Aucune chambre séléctionée',
          variant: 'error',
        })
      }
    },
    fermer() {
      this.$refs.form.reset()
      this.reservation.dates = []
      this.$store.commit('closeDialog')
      this.disponible = false
      this.newclient = false
    },
    verifier() {
      this.loading = true
      if (this.validations) {
        this.checkDisponible({
          dates: this.reservation.dates,
          categorie: this.reservation.categorie,
        }).then(({ message, disponible }) => {
          this.disponible = disponible
          this.$notifier.show({
            text: message,
            variant: 'info',
            timeout: 7000,
          })
        })
      } else {
        this.$notifier.show({
          text: 'Les données de la réservation sont incorrectes.',
          variant: 'error',
        })
      }
      this.loading = false
    },
    getOne() {
      if (this.reservation.client) {
        this.getClient(this.reservation.client).then(({ client }) => {
          if (client) {
            this.reservation.nom = client.nom
            this.reservation.prenom = client.prenom
            this.reservation.email = client.email
            this.newclient = true
          } else {
            this.$notifier.show({
              text: 'Ce code ne correspond à aucun client',
              variant: 'info',
            })
          }
        })
      } else {
        this.$notifier.show({
          text: "Aucun code de client n'a été spécifié",
          variant: 'error',
        })
      }
    },
  },
}
</script>
<style></style>
