<template>

	<div>
	
		<div class="u-header">
			<div class="container">
				<ul class="u-nav hide-sm hide-xs">

					<router-link to="/">
						<li class="u-nav__item"> Home </li>
					</router-link>

					<router-link to="/about">
						<li class="u-nav__item"> About </li>
					</router-link>

				</ul>
              
              <div class="u-mobile">
                <span class="glyphicon glyphicon-menu-hamburger"></span>
              </div>
              
			</div>
		</div>
		
	</div>

</template>

<script type="text/javascript">
	export default {
		name: 'navigationmenu',
		data() {
			return {

			}
		}
	}

</script>

<style lang="scss" scoped>

	.u-header {
		height: auto;
		background-color: aqua;
	}
	
	.u-nav {
		display: flex;
		margin: 0;
		padding: 15px;
		&__item {
			list-style-type: none;
			padding-right: 15px;
			padding-left: 15px;
		}
	}
	@media only screen and (max-width: 320px) {
		
	}
	
</style>
