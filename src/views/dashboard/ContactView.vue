<template>
    <div id="contactViewBox">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Home</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">My Account</a></li>
                            <li class="breadcrumb-item active">Contact</li>
                        </ol>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <!-- Main content -->
        <section class="content temp-content">
            <!-- Default box -->
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Title</h3>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body" style="height: 900px;">
                    <h1>Contact Page</h1>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                    Footer
                </div>
                <!-- /.card-footer-->
            </div>
            <!-- /.card -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
export default {
    name: "ContactView",
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
        console.log('before create');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('before mount');
    },
    mounted() {
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
