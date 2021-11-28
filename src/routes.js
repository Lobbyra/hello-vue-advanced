import chantierTable from "./components/chantierTable.vue";
import smallTests from "./components/smallTests.vue"
import smallTestsTwo from "./components/smallTestsTwo.vue"
import calendarDemo from "./components/calendarDemo.vue"

export default [
    {path: '/', component: chantierTable},
    {path: '/small', component: smallTests},
    {path: '/calendar', component: calendarDemo},
    {path: '/smallTwo', component: smallTestsTwo},
]
