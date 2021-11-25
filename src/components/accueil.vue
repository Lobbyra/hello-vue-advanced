<template src="./acceuil.html"></template>

<script>
export default {
  name: "accueil",

   data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Nom du chantier',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      { text: 'Temps estimé', value: 'estimation' },
      { text: 'Temps réel', value: 'real' },
      { text: 'En cours / Terminé', value: 'state' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      estimation: 0,
      real: 0,
      state: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      estimation: 0,
      real: 0,
      state: 0,
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nouveau chantier' : 'Edition d\'un chantier'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          name: 'LE MAUFF-LANESTER',
          calories: 159,
          estimation: 6.0,
          real: 24,
          state: true,
        },
        {
          name: 'ZOBRIST-MEUCON',
          calories: 237,
          estimation: 9.0,
          real: 37,
          state: false,
        },
        {
          name: 'LOFFICAL - BELZ',
          calories: 262,
          estimation: 16.0,
          real: 23,
          state: false,
        },
        {
          name: 'SCI TREMELIERE - PLOUHINEC',
          calories: 305,
          estimation: 3.7,
          real: 67,
          state: false,
        },
        {
          name: 'PERRIER - ETEL',
          calories: 356,
          estimation: 16.0,
          real: 49,
          state: true,
        },
        {
          name: 'JAN - BELZ',
          calories: 375,
          estimation: 0.0,
          real: 94,
          state: false,
        },
        {
          name: 'NICOD - ERDEVEN',
          calories: 392,
          estimation: 0.2,
          real: 98,
          state: false,
        },
        {
          name: 'MONNIER - PLUVIGNER',
          calories: 408,
          estimation: 3.2,
          real: 87,
          state: true,
        },
        {
          name: 'DEBOIS - BELZ',
          calories: 452,
          estimation: 25.0,
          real: 51,
          state: false,
        },
        {
          name: 'CHATARD - PLOUHINEC',
          calories: 518,
          estimation: 26.0,
          real: 65,
          state: true,
        },
      ]
    },
    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
  },

};
</script>

<style scoped>
</style>
