<template>
    <div id="sidebarComponentBox">
        <aside class="main-sidebar main-sidebar-custom sidebar-light-primary elevation-4">
            <!-- Brand Logo -->
            <BrandNameComponent></BrandNameComponent>

            <!-- Sidebar -->
            <div class="sidebar" style="margin-bottom: 16px;">
                <!-- Vendor Logo -->
                <BrandLogoComponent></BrandLogoComponent>

                <!-- Sidebar Menu -->
                <SidebarMenuComponent></SidebarMenuComponent>
            </div>
            
            <ConfigHelpComponent></ConfigHelpComponent>
            <!-- /.sidebar-custom -->
        </aside>
    </div>
</template>


<script>
import BrandNameComponent from './include/sidebar/BrandNameComponent.vue'
import BrandLogoComponent from './include/sidebar/BrandLogoComponent.vue'
import ConfigHelpComponent from './include/sidebar/ConfigHelpComponent.vue'
import SidebarMenuComponent from './include/sidebar/SidebarMenuComponent.vue'

export default {
    name: "SidebarComponent",
    props: {
    },
    data() {
        return {
            
        }
    },
    components: {
        BrandNameComponent,
        BrandLogoComponent,
        ConfigHelpComponent,
        SidebarMenuComponent
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
