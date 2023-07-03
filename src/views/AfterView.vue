<template>
  <div class="after">
    <div class="div-main __flex __ccc">
      <h1>已交卷</h1>
      <div class="div-score __flex __rc">
        <p>你的成绩：</p> 
        <p>50</p>
        <p>分</p>
      </div>
      <div class="div-info __flex __ccc">
        <p>
          姓名：黄文旺
        </p>
        <p>
          领取时间：2023-07-01
        </p>
        <p>
          提交时间：2023-07-05
        </p>
        <p>
          考试用时：60 分钟
        </p>

      </div>

    </div>
  </div>
</template>

<script>



export default {
  name: 'AfterView',
  props: {
    msg: String
  },
  created(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.after {
  height: 100%;
  width: 100%;
  .div-main {
    height: 100%;
    border-radius: 5px;
    color: gray;
    .div-score{
      p{
        margin: 0 5px;
        &:nth-child(2){
          color: #FE7921;
          font-size: 30px;
        }
      }
    }
    h1{
      color: #4D88F3;
    }
    
  }
}
</style>
