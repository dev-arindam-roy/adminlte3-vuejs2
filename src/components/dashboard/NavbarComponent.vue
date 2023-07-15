<template>
    <div id="navbarComponentBox">
        <nav class="main-header navbar navbar-expand navbar-white navbar-light dropdown-legacy">
            <!-- Left navbar links -->
            <LeftnavComponent></LeftnavComponent>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                <!-- Navbar Search -->
                <NavsearchComponent></NavsearchComponent>

                <!-- Messages Dropdown Menu -->
                <MessageNotificationComponent></MessageNotificationComponent>

                <!-- Notifications Dropdown Menu -->
                <AnyNotificationComponent></AnyNotificationComponent>

                <!-- User Profile Dropdown Menu -->
                <NavUserProfileComponent></NavUserProfileComponent>

                <!-- Language Dropdown Menu -->
                <NavLanguageComponent></NavLanguageComponent>

                <!-- Full Screen Action Button Menu -->
                <NavFullScreenComponent></NavFullScreenComponent>
                
                <!-- Rigth side Action Menu Control Button -->
                <ActionBtnComponent></ActionBtnComponent>
            </ul>
        </nav>
    </div>
</template>

<script>
import LeftnavComponent from './include/navbar/LeftnavComponent.vue'
import NavsearchComponent from './include/navbar/NavsearchComponent.vue'
import MessageNotificationComponent from './include/navbar/MessageNotificationComponent.vue'
import AnyNotificationComponent from './include/navbar/AnyNotificationComponent.vue'
import NavUserProfileComponent from './include/navbar/NavUserProfileComponent.vue'
import NavLanguageComponent from './include/navbar/NavLanguageComponent.vue'
import NavFullScreenComponent from './include/navbar/NavFullScreenComponent.vue'
import ActionBtnComponent from './include/navbar/ActionBtnComponent.vue'

export default {
    name: "NavbarComponent",
    props: {
    },
    data() {
        return {

        }
    },
    components: {
        LeftnavComponent,
        NavsearchComponent,
        MessageNotificationComponent,
        AnyNotificationComponent,
        NavUserProfileComponent,
        NavLanguageComponent,
        NavFullScreenComponent,
        ActionBtnComponent
    },
    watch: {
        
    },
    computed: {
        
    },
    methods: {
    
    },
    beforeCreate()  {
        
    },
    created() {
        
    },
    beforeMount() {
        
    },
    mounted() {
        
    },
    beforeUpdate() {
        
    },
    updated() {
        
    },
    beforeDestroy() {
        
    },
    destroyed() {
        
    }    
}
</script>

<style scoped>

</style>
