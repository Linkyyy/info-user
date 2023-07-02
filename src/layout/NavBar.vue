<template>
  <div class="navbar">
    <div class="__flex __rcc div-top">
      <button>
        提交
    </button>
      考试
    </div>
    <div class="div-main">
      <router-view/>
    </div>
    
    <div class="__flex __rcc div-bottom">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.navbar{

  button{
    position: absolute;
    top: 0;
    right: 0;
    height: 40px;
    border: none;
    width: 80px;
    font-size: 15px;
    background-color: #3A8BFF;
    color: white;
    outline: none;
  }
  .div-top{
    position: relative;
    top: 0px;
    width: 100%;
    background-color: #3A4357;
    height: 40px;
    color: #7F8290;
  }
  .div-bottom{
    width: 100%;
    background-color: #3A4357;
    height: 20px;
    color: #7F8290;
  }
  .div-main{
    height: calc(100vh - 60px);
  }
}

</style>
