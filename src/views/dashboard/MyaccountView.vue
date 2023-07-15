<template>
    <div id="myAccountViewBox">
        <div class="wrapper">
            <!-- Navbar -->
                <NavbarComponent></NavbarComponent>
            <!-- End Navbar -->

            <!-- Main Sidebar -->
            <SidebarComponent></SidebarComponent>
            <!-- End Main Sidebar -->

            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper text-sm">
                <router-view></router-view>
                <BacktotopComponent></BacktotopComponent>
            </div>
            <!-- /.content-wrapper -->

            <!-- Footer Bar -->
            <FooterbarComponent></FooterbarComponent>
            <!-- End Footer Bar -->

            <!-- Action Sidebar -->
            <ActionbarComponent></ActionbarComponent>
            <!-- End Action sidebar -->
        </div>
    </div>
</template>


<script>
import NavbarComponent from '../../components/dashboard/NavbarComponent.vue'
import SidebarComponent from '../../components/dashboard/SidebarComponent.vue'
import ActionbarComponent from '../../components/dashboard/ActionbarComponent.vue'
import FooterbarComponent from '../../components/dashboard/FooterbarComponent.vue'
import BacktotopComponent from '../../components/dashboard/BacktotopComponent.vue'

export default {
    name: "MyaccountView",
    data() {
        return {

        }
    },
    components: {
        NavbarComponent,
        SidebarComponent,
        ActionbarComponent,
        FooterbarComponent,
        BacktotopComponent
    },
    watch: {
        
    },
    computed: {
        
    },
    methods: {
    
    },
    beforeCreate()  {
        console.log('before create');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('before mount');
    },
    mounted() {
        //document.body.classList.add('main-header', 'navbar', 'navbar-expand', 'navbar-white', 'navbar-light', 'dropdown-legacy');
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('before update');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('before destroy');
    },
    destroyed() {
        console.log('destroyed');
    }    
}
</script>

<style scoped>

</style>
