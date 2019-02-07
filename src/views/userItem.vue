<template>
	<div class="userItem">
		<div v-if="isShow" class="item">
			<div class="info">
				编号:{{user.id}}	
				<br>
				姓名:{{user.name}}
				<br>
				tel:{{user.tel}}
			</div>
			<span class="edit" @click="isShow=false">
				<i class="el-icon-edit"></i>
			</span>
			<span class="delete" @click="remove(user)">
				<i class="el-icon-delete"></i>
			</span>
		</div>	
		<div v-else class="item">
			<div class="info">
				编号:{{user.id}}	
				<!-- 姓名:{{user.name}} -->
				<input type="text" name="" class="txt" v-model="name">
				<!-- tel:{{user.tel}} -->
				<input type="text" name="" class="txt" v-model="tel">
			</div>
			<span class="update" @click="update(user)">
				<i class="el-icon-check"></i>
			</span>
			<span class="cancel" @click="isShow=true">
				<i class="el-icon-close"></i>
			</span>
		</div>
	</div>
</template>
<script>
	import {mapActions,mapState} from 'vuex'
	export default{
		name:'userItem',
		data(){
			return{
				isShow:true,
				name:this.user.name,
				tel:this.user.tel

			}
		},
		props:['user'],   // 接受父组件传递过来的数据
		methods:{
			...mapActions(['removeUser','updateUser']),
			// 删除操作
			remove(user){
				this.removeUser(this.user);
			},
			// 修改操作
			update(user){
				this.updateUser({
					id:this.user.id,
					name:this.name,
					tel:this.tel
				});
				this.isShow=true;
			}
		}
	}
</script>
<style scoped>
	.userItem{
		display: inline-block;
	}
	.userItem .item{
		/*display: inline-block;*/
		width: 140px;
		height: 60px;
		border:1px solid #ccc;
		border-radius: 4px;
		padding:10px;
		margin: 5px;
		position: relative;
	}
	.userItem .item:hover{
		border-color: #0f88eb;
	}
	.userItem .item:hover span{
		display: block;
	}
	.userItem .item span{
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
	.userItem .item .txt{
		display: block;
		border: none;
		width: 100px;
		outline: none;
		border-bottom: 1px solid #ccc;
		margin-bottom: 2px;
		padding: 2px;
	}
	.userItem .item span.edit,.userItem .item span.update{
		color:#0f88eb;
		right: 35px;
		top: 10px;
	}
	.userItem .item span.delete,.userItem .item span.cancel{
		color: rgb(216, 17, 17);
		right: 10px;
		top: 10px;
	}
</style>