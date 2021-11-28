<template src="./calendarDemo.html"></template>

<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'; // needs additional webpack config!
import bootstrapPlugin from '@fullcalendar/bootstrap';

export default {
    aname: "calendarDemo",

    components: {
        FullCalendar // make the <FullCalendar> tag available
    },

    data: () => ({
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin, bootstrapPlugin ],
        initialView: 'dayGridMonth',
        locale: 'fr',
        themeSystem: 'bootstrap',
        aspectRation: 0.5,
      }
    }),

};
</script>

<style scoped>

#inspire {
    background-color: #1e1e1e;
}

</style>
