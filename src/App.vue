<template>
  <div id="app">
	  
	<navigationmenu></navigationmenu>
	<div class="container">
		<div class="router-view-wrap">
			<router-view></router-view>
		</div>
	</div>
   
  </div>
</template>

<script type="text/javascript">
	import navigationmenu from './components/navigation.vue';

	export default {
		name: 'app',
		data() {
			return {

			}
		},
		methods: {

		},
		components: {
			navigationmenu
		}
	}

</script>

<style lang="scss">
	
	@import '../node_modules/bootstrap/scss/bootstrap.scss';
	
	body {
		padding: 0;
		margin: 0;
	}

	.router-view-wrap {
		padding: 0 30px;
		margin-top: 15px;
	}

</style>
