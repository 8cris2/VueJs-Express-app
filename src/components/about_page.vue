<template>

	<div>
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
	
				<h1> About </h1>
		
				<p> {{ jsonData }} </p>
			
			</div>
		</div>
	</div>

</template>

<script type="text/javascript">
  import axios from 'axios'

  export default {
    name: 'aboutpage',
    data() {
      return {
        jsonData: {}
      }
    },
    created() {
      this.fetchAboutUs();
    },
    methods: {
      fetchAboutUs() {
        this.axios.get('http://localhost:3000/').then((response) => {

            console.log('response.data: ', response.data);
            this.jsonData = response.data.AboutUs;

          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }

</script>
