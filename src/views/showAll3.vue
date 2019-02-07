<template>
	<div class="showAll3">
		<h1>能编辑能删除</h1>
		<userItem v-for="user in user.users" :key="user.id" :user="user"></userItem>
	</div>
</template>
<script>
	import {mapActions,mapState} from 'vuex'
	import userItem from './userItem.vue'
	export default{
		name:'showAll3',
		data(){
			return{

			}
		},
		computed:{
			...mapState(['user'])
		},
		components:{
			userItem
		}
	}
</script>
<style scoped>
	.showAll3{
		/*width: 500px;*/
		/*border:1px solid red;*/
	}
</style>