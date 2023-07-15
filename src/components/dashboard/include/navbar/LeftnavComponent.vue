<template>
    <div id="leftNavComponentBox">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <router-link :to="{ name: 'home-view'}" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <router-link :to="{ name: 'contact-view'}" class="nav-link">Contact</router-link>
            </li>
            <li class="nav-item d-none d-sm-inline-block dropdown">
                <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">Dropdown</a>
                <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow">
                    <li><a href="#" class="dropdown-item">Some action </a></li>
                    <li><a href="#" class="dropdown-item">Some other action</a></li>
                    <li class="dropdown-divider"></li>
                    <li><a href="#" class="dropdown-item">Some action </a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "LeftnavComponent",
    props: {
    },
    data() {
        return {

        }
    },
    components: {
    
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
