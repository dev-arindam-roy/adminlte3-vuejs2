<template>
    <div id="notFoundViewBox">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center mt-5">
                    <h1><strong><span class="text-danger">404</span><br/>I'm very Sorry!! <br/> Oops! Page Not Found!</strong></h1>
                    <button class="btn btn-primary mt-5" v-on:click="resolveNotFound()">Lets Move From Here</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFound",
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
        resolveNotFound() {
            this.$router.push({name: 'signin-view', query: { onextempcnf: new Date().getTime() }});
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
