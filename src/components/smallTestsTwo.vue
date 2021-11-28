<template src="./smallTestsTwo.html"></template>

<script>
export default {
  name: "smallTestsTwo",

   data: () => ({
       yearList: [
           2018, 2019, 2020, 2021, 2022, 2023
       ],
       personList: [
             "DEMENAT Stefan",
             "GUEGANO Yann",
             "GUEHENNEC Arnaud",
             "GUYONVARCH Lucas",
             "LE GUILLANT Jonathan",
             "LE MEUR Philippe",
             "LE PRINCE Anthony",
             "LE ROCH Sébastien",
             "LE SCAVAREC Vincent",
             "LUCAS Maxime"
        ],
        monthList: [
            "Janvier",
            "Fevrier",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Aout",
            "Septembre",
            "Octobre",
            "Novembre",
            "Decembre",
        ],
        personSelect: "",
        yearSelect: 2021,
        monthSelect: "Novembre",
        headers: [
        { text: 'Jour', value: 'dayName' },
        { text: 'Chantier Matin', value: 'chantierMorning' },
        { text: 'Heures Matin', value: 'hoursMorning' },
        { text: 'Heures Intercalaires', value: 'hoursInter' },
        { text: 'Chantier Après-midi', value: 'chantierAfternoon' },
        { text: 'Total', value: 'totalDay' },
        ],
        data: [
            {
                dayName: "Lundi 1",
                chantierMorning: "",
                hoursMorning: "",
                hoursInter: "",
                chantierAfternoon: "",
                totalDay: "",
            },
        ],
    }),

    created () {
        this.initialize();
    },

    methods: {
        initialize () {
            this.data = [
                {
                    dayName: "Lundi 1",
                    chantierMorning: "LE MAUFF-LANESTER",
                    hoursMorning: "4",
                    hoursInter: "0.5",
                    chantierAfternoon: "4",
                    totalDay: "8",
                },
                {
                    dayName: "Mardi 2",
                    chantierMorning: "LE MAUFF-LANESTER",
                    hoursMorning: "4",
                    hoursInter: "0.5",
                    chantierAfternoon: "4",
                    totalDay: "8",
                },
                {
                    dayName: "Mercredi 3",
                    chantierMorning: "LE MAUFF-LANESTER",
                    hoursMorning: "4",
                    hoursInter: "0.5",
                    chantierAfternoon: "4",
                    totalDay: "8",
                },
                {
                    dayName: "Jeudi 4",
                    chantierMorning: "LE MAUFF-LANESTER",
                    hoursMorning: "4",
                    hoursInter: "0.5",
                    chantierAfternoon: "4",
                    totalDay: "8",
                },
                {
                    dayName: "Vendredi 5",
                    chantierMorning: "LE MAUFF-LANESTER",
                    hoursMorning: "4",
                    hoursInter: "0.5",
                    chantierAfternoon: "4",
                    totalDay: "8",
                },
                {
                    dayName: "Lundi 6",
                    chantierMorning: "LE MAUFF-LANESTER",
                    hoursMorning: "4",
                    hoursInter: "0.5",
                    chantierAfternoon: "4",
                    totalDay: "8",
                },
                {
                    dayName: "Mardi 7",
                    chantierMorning: "LE MAUFF-LANESTER",
                    hoursMorning: "4",
                    hoursInter: "0.5",
                    chantierAfternoon: "4",
                    totalDay: "8",
                },
                {
                    dayName: "Mercredi 8",
                    chantierMorning: "LE MAUFF-LANESTER",
                    hoursMorning: "4",
                    hoursInter: "0.5",
                    chantierAfternoon: "4",
                    totalDay: "8",
                },
                {
                    dayName: "Jeudi 9",
                    chantierMorning: "LE MAUFF-LANESTER",
                    hoursMorning: "4",
                    hoursInter: "0.5",
                    chantierAfternoon: "4",
                    totalDay: "8",
                },
                {
                    dayName: "Vendredi 10",
                    chantierMorning: "LE MAUFF-LANESTER",
                    hoursMorning: "4",
                    hoursInter: "0.5",
                    chantierAfternoon: "4",
                    totalDay: "8",
                },
            ]
        }
    }

};
</script>

<style scoped>
.elem {
  padding: 20px 20px 20px 20px;
  background-color: #232323;
}

.side {
  display: flex;
}

.float-child {
  float: left;
  padding: 10px;
  width: 50%;
}
</style>
