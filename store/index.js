import Moment from 'moment'
import { extendMoment } from 'moment-range'
const moment = extendMoment(Moment)
export const state = () => ({
  dialog: false,
  categories: [],
})
export const getters = {
  categories() {
    return state.categories
  },
}
export const mutations = {
  openDialog(state) {
    state.dialog = true
  },
  closeDialog(state) {
    state.dialog = false
  },
  set_categories(state, categories) {
    state.categories = categories
  },
}
export const actions = {
  async checkDisponible({ commit }, payload) {
    // récupération des chambres de l'hotel selon la categorie soumise
    let requete = await this.$axios.get(
      'public/chambres/categorie/' + payload.categorie
    )
    const chambres = requete.data.chambres.map((chambre) => chambre.id)
    // récupération des hébergements à partir de la date d'aujourd'hui et triage pour trouver les chambres disponibles
    requete = await this.$axios.get('public/hebergements/' + payload.categorie)
    const hebergements = requete.data.hebergements
    const intervalReservation = moment.range(payload.dates)
    // récupération des chambres occupées qui coincident avec la date de réservation
    const occupees = hebergements
      .filter((hebergement) => {
        const intervalHebergement = moment.range(
          hebergement.entree,
          hebergement.sortie
        )
        return intervalHebergement.overlaps(intervalReservation)
      })
      .map((hebergement) => hebergement.chambre)
    // filtre pour obtenir les chambres disponibles
    const disponibles = chambres.filter(
      (chambre) => !occupees.includes(chambre)
    )
    let resultat = {}
    if (disponibles.length > 0 && occupees.length > 0) {
      resultat = {
        message:
          'Nous avons des chambres disponibles pour ce délais de réservation.',
        disponible: true,
      }
    } else if (occupees.length === 0) {
      resultat = {
        message:
          'Nous avons des chambres disponibles pour ce délais de réservation.',
        disponible: true,
      }
    } else {
      resultat = {
        message:
          "Nous n'avons pas de chambres disponibles pour ce délais de réservation.",
        disponible: false,
      }
    }
    return resultat
  },
  async getClient({ commit }, code) {
    const requete = await this.$axios.get('public/client/' + code)
    const { email, nom, prenom } = requete.data.client
    if (nom) return { client: { email, nom, prenom } }
    else return { client: null }
  },
  async getCategories({ commit }) {
    const requete = await this.$axios.get('public/categories')
    const categories = requete.data.categories.map((chambre) => {
      const { min, max, nom, id } = chambre
      return { id, nom, fourchette: `de ${min}F à ${max}F la nuitée` }
    })
    commit('set_categories', categories)
  },
}
