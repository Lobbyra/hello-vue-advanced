<template src="./chantierTable.html"></template>

<script>
export default {
  name: "chantierTable",

   data: () => ({
    search: '',
    yearsItems: [
           2018, 2019, 2020, 2021, 2022, 2023
       ],
    yearSelect: 2021,
    dialog: false,
    dialogDelete: false,
    items: ['Terminé', 'En cours'],
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
      state: "En cours",
    },
    defaultItem: {
      name: '',
      calories: 0,
      estimation: 0,
      real: 0,
      state: "En cours",
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
          state: "En cours",
        },
        {
          name: 'ZOBRIST-MEUCON',
          calories: 237,
          estimation: 9.0,
          real: 37,
          state: "En cours",
        },
        {
          name: 'LOFFICAL - BELZ',
          calories: 262,
          estimation: 16.0,
          real: 23,
          state: "En cours",
        },
        {
          name: 'SCI TREMELIERE - PLOUHINEC',
          calories: 305,
          estimation: 3.7,
          real: 67,
          state: "Terminé",
        },
        {
          name: 'PERRIER - ETEL',
          calories: 356,
          estimation: 16.0,
          real: 49,
          state: "Terminé",
        },
        {
          name: 'JAN - BELZ',
          calories: 375,
          estimation: 0.0,
          real: 94,
          state: "En cours",
        },
        {
          name: 'NICOD - ERDEVEN',
          calories: 392,
          estimation: 0.2,
          real: 98,
          state: "En cours",
        },
        {
          name: 'MONNIER - PLUVIGNER',
          calories: 408,
          estimation: 3.2,
          real: 87,
          state: "Terminé",
        },
        {
          name: 'DEBOIS - BELZ',
          calories: 452,
          estimation: 25.0,
          real: 51,
          state: "En cours",
        },
        {
          name: 'CHATARD - PLOUHINEC',
          calories: 518,
          estimation: 26.0,
          real: 65,
          state: "En cours",
        },
      ]
    },
    filterContent (value, search) {
        console.log("Value " + value);
        console.log("search" + search);
      return value != null &&
        search != null &&
        typeof value === 'string' &&
        value.toString().indexOf(search) !== -1
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

#inspire {
    padding: 50px;
}

.v-data-table {
}

</style>
