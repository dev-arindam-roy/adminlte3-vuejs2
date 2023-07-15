<template>
  <div id="app" ref="appRoot" v-cloak>
    <loading 
      :active.sync="isDisplayLoading" 
      :color="'#007bff'"
      :is-full-page="true"
      :loader="'spinner'"
      :background-color="'#fbfbfb'"></loading>
    <router-view/>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: "AppView.vue",
  props: {
    isPageLoading: {
      type: Boolean,
      default: true,
      required: true
    }
  },
  data() {
    return {
      
    }
  },
  components: {
    Loading
  },
  watch: {

  },
  computed: {
    isDisplayLoading() {
      return this.isPageLoading
    }
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
