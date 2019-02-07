<template>
  <div>
      <div class="item">
        <div class="tabs">
          <router-link to="/home/add" class="link">添加数据</router-link>
          <router-link to="/home/showAll" class="link">查看所有的数据(表格)</router-link>
          <router-link to="/home/showAll2" class="link">查看所有的数据(展现形式2)</router-link>
          <router-link to="/home/showAll3" class="link">查看所有的数据(展现形式3)</router-link>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name:'home',
  data(){
    return{

    }
  }
}

</script>
<style scoped>
  a{
    text-decoration: none;
  }
  .link{
    margin-right: 20px;
  }
  .tabs{
    margin-bottom: 30px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
</style>
