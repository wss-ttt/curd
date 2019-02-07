<template>
	<div class="showAll2">
		<h1>不能编辑可以删除</h1>
		<div class="list">
			<div class="item" v-for="user in user.users">
				<div class="info">
					编号:{{user.id}}	
					<br>
					姓名:{{user.name}}
					<br>
					tel:{{user.tel}}
				</div>
				<span class="edit">
					<i class="el-icon-edit"></i>
				</span>
				<span class="delete" @click="remove(user)">
					<i class="el-icon-delete"></i>
				</span>
			</div>
		</div>		
	</div>
</template>
<script>
	import {mapActions,mapState} from 'vuex'
	export default{
		name:'showAll2',
		data(){
			return{
			}	
		},
		computed:{
			...mapState(['user'])
		},
		methods:{
			...mapActions(['removeUser']),
			// 删除
			remove(user){
				console.log(user);
				this.removeUser(user);
			}
		}
	}
</script>
<style scoped>
	.showAll2{
		/*width: 500px;*/
		/*border:1px solid red;*/
	}
	.list .item{
		display: inline-block;
		width: 140px;
		height: 60px;
		border:1px solid #ccc;
		border-radius: 4px;
		padding:10px;
		margin: 5px;
		position: relative;
	}
	.list .item:hover{
		border-color: #0f88eb;
	}
	.list .item:hover span{
		display: block;
	}
	.list .item span{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		position: absolute;
		
		border: 1px solid #ccc;
		text-align: center;
		line-height: 20px;
		cursor: pointer;
		display: none;
	}
	.list .item span.edit{
		color:#0f88eb;
		right: 35px;
		top: 10px;
	}
	.list .item span.delete{
		color: rgb(216, 17, 17);
		right: 10px;
		top: 10px;
	}
</style>