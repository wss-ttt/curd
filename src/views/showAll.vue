<template>
  <div class="showAll">
    <el-table :data="user.users">
      <el-table-column prop="id" label="编号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="tel" label="联系方式"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'showAll',
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted() {
  }
}

</script>
<style scoped>
	.showAll{
		/*width: 500px;*/
	}
</style>