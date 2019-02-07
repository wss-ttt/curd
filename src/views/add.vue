<template>
  <div class="add">
    <el-form :data="formData">
      <el-form-item label="用户名">
        <el-input v-model="formData.name" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="formData.tel" placeholder="电话号码"></el-input>
      </el-form-item>
      <el-form-item>
      	<el-button @click="add" type="primary">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'add',
  data() {
    return {
      formData: {
      	name:'',
      	tel:''
      }
    }
  },
  methods:{
  	...mapActions(['addUser']),
  	add(){
  		this.addUser(this.formData);
  		this.formData.name='';
  		this.formData.tel='';
  		// console.log('aa');
  	}
  }
}

</script>
<style scoped>
	.add{
		width: 500px;
	}
</style>