<template>
    <li id="navUserProfileComponentBox" class="nav-item dropdown user-menu">
        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
            <img src="../../../../assets/images/user2-160x160.jpg" class="user-image img-circle elevation-2 nav-user-profile-img" alt="User Image">
            <span class="d-none d-md-inline">Arindam Roy</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <!-- User image -->
            <li class="user-header bg-primary">
                <img src="../../../../assets/images/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">

                <p>
                Arindam Roy - Full Stack Developer
                <small>arindam.roy.developer@gmail.com</small>
                </p>
            </li>
            <!-- Menu Body -->
            <li class="user-body" style="border-bottom: 1px solid #dee2e6;">
                <div class="row">
                <div class="col-4 text-center">
                    <a href="#">Followers</a>
                </div>
                <div class="col-4 text-center">
                    <a href="#">Sales</a>
                </div>
                <div class="col-4 text-center">
                    <a href="#">Friends</a>
                </div>
                </div>
                <!-- /.row -->
            </li>
            <!-- Menu Footer-->
            <li class="user-footer">
                <a href="#" class="btn btn-default btn-flat">Profile</a>
                <a href="javascript:void(0);" class="btn btn-default btn-flat float-right" @click="logout();">Sign out</a>
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    name: "NavUserProfileComponent",
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
        logout() {
            this.$router.push({name: 'signin-view',  query: { secure: 'logout' }});
        }
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
