<template>
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column nav-flat nav-compact text-sm" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item" v-bind:class="[dashBoardRouteNames.includes($route.name) ? 'menu-open' : '']">
                <!-- can use 'active-class' with <router-link> -->
                <a href="javascript:void(0);" class="nav-link" v-bind:class="[dashBoardRouteNames.includes($route.name) ? 'active' : '']">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>Dashboard<i class="right fas fa-angle-left"></i></p>
                </a>
                <ul class="nav nav-treeview" v-bind:style="{display: dashBoardRouteNames.includes($route.name) ? 'block' : 'none'}">
                    <li class="nav-item">
                        <router-link :to="{name: 'sales-dashboard-view'}" exact-active-class="active" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Sales Dashboard</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'tasks-dashboard-view'}" exact-active-class="active" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Tasks Dashboard</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'users-dashboard-view'}" exact-active-class="active" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Users Dashboard</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'system-users-view'}" exact-active-class="active" class="nav-link">
                    <i class="nav-icon fas fa-th"></i>
                    <p>System Users<span class="right badge badge-danger">New</span></p>
                </router-link>
            </li>
            <li class="nav-item" v-bind:class="[cmsRouteNames.includes($route.name) ? 'menu-open' : '']">
                <a href="#" class="nav-link" v-bind:class="[cmsRouteNames.includes($route.name) ? 'active' : '']">
                    <i class="nav-icon fas fa-copy"></i>
                    <p>Content Management<i class="fas fa-angle-left right"></i><span class="badge badge-info right">6</span></p>
                </a>
                <ul class="nav nav-treeview" v-bind:style="{display: cmsRouteNames.includes($route.name) ? 'block' : 'none'}">
                    <li class="nav-item">
                        <router-link :to="{name: 'cms-pages-view'}" exact-active-class="active" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Pages</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'cms-categories-view'}" exact-active-class="active" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Categories</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-header">INVENTORY</li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon far fa-plus-square"></i>
                    <p>Product Management<i class="fas fa-angle-left right"></i></p>
                </a>
                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>SKUS<i class="fas fa-angle-left right"></i></p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>All SKUs</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>Create SKUs</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>SKU Categories</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>All Products</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Create Product</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Product Categories</p>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-header">LOGS</li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon far fa-circle text-danger"></i>
                    <p class="text">Server Logs</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon far fa-circle text-warning"></i>
                    <p>System Logs</p>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon far fa-circle text-info"></i>
                    <p>User Logs</p>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "SidebarMenuComponent",
    props: {
    },
    data() {
        return {
            dashBoardRouteNames: ['sales-dashboard-view', 'tasks-dashboard-view', 'users-dashboard-view'],
            cmsRouteNames: ['cms-pages-view', 'cms-categories-view']
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
