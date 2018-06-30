<template id="home_page">

	<div>
	
		<h1> Home </h1>
		
        <carouselSlide></carouselSlide>
      
	</div>

</template>

<script type="text/javascript">
  import carouselSlide from '../components/carousel/carousel-slide.vue'
  export default {
    name: 'home_page',
    data() {
      return {

      }
    },
    methods: {

    },
    components: {
      carouselSlide
    }
  }

</script>
