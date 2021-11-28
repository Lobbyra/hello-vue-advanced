<template src="./smallTests.html"></template>

<script>
export default {
  name: "smallTests",

   data: () => ({
       items: [
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
        clientList: [
            "LE MAUFF-LANESTER",
            "ZOBRIST-MEUCON",
            "LOFFICIAL - BELZ",
            "SCI TREMELIERE - PLOUHINEC",
            "PERRIER – ETEL",
            "JAN - BELZ",
            "NICOD - ERDEVEN",
            "MONNIER - PLUVIGNER",
            "DEBOIS - BELZ",
            "CHATARD - PLOUHINEC",
            "CHARLOTIN – ETEL",
            "POEDRAS-BELZ",
            "CINEAUX-BELZ",
            "PERRAULT-PONT SCORFF",
            "LE DU-ERDEVEN",
            "GENDREAU-TREFFLEAN",
            "BENBOUZID-ERDEVEN",
            "BODART-ST HELENE",
            "PERRIGAUD-BELZ",
            "BIGOT-PLOUHINEC",
            "AMBROSIO",
            "GUEZENNEC-PLOUHINEC",
            "GERARD-PONT SCORFF",
            "CONSTRUCTION ANTOINE",
            "riweron gaures",
            "GOUSEON-PLOUHINEC",
        ],
        missList: ["Congé payé", "Maladie", "RTT", "Sans solde", "Jour férié"],
        missSelect: "",
        hourList: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        hourSelected: 0,
        minuteSelected: 0,
        hour2Selected: 0,
        minute2Selected: 0,
        hour3Selected: 0,
        minute3Selected: 0,
        minuteList: [ 0, 10, 20, 30, 40, 50],
        yearSelect: 2021,
        personSelect: 0,
        clientSelect: 0,
    }),

};
</script>

<style scoped>
.elem {
    padding: 20px 20px 20px 20px;
    background-color: #1e1e1e;
}

.side {
    display: flex,
}

.float-child {
    float: left;
    padding: 10px;
    width: 50%;
}
</style>
