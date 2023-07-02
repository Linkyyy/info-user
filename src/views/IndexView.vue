<template>
  <div class="index-view __flex __r">
    <div class="div-left __flex __c">
      <h3>考试名称</h3>
      <div>剩余时间</div>
      <div class=" div-info __flex __c">
        <span>姓名：黄文旺</span>
        <span>学号：201921098191</span>
        <span>题量：20</span>
        <span>满分：100</span>
        <span>考试时间：2023-07-01 20：00-2023-07-01 22：00</span>
      </div>
    </div>
    <div class=" div-mid __flex __c">
      <p class="p-index">{{ currentIndex + 1 }}.({{ qList[currentIndex].category }}题，2分)</p>
      <p>{{ qList[currentIndex].content }}</p>
      <div class="div-option __flex __c">
        <div class="option" v-for="item,index in ['A','B','C','D']" :key="index" @click="qList[currentIndex].answer=item">
          <button :class="[qList[currentIndex].answer==item?'button-selected':'']">
            {{item}}
          </button>
          <span>{{ qList[currentIndex]['option'+ item ] }}</span>
        </div>

      </div>
    </div>
    <div class=" div-right ">
      <h3>题目</h3>
      <div class="__flex __r"></div>
      <button v-for="item, index in qList" :key="index" :class="[qList[index].answer!=''?'button-has':'', currentIndex == index ? 'button-selected' : 0]"
        @click="currentIndex = index">{{ index + 1 }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexView',
  props: {
    msg: String
  },
  computed: {

  },
  data() {
    return {
      currentIndex: 0,
      qList: [
        {
          id: '1',
          content: '利用直方图取单阈值方法进行图像分割时',
          optionA: '图像中应仅有一个目标',
          optionB: '图像直方图应有两个峰',
          optionC: '图像中目标和背景应一样大',
          optionD: '图像中目标灰度应比背景大',
          category: '单选',
          answer: '',
        },
        {
          id: '2',
          content: '下列说法正确的时是（）',
          optionA: '某点处的一阶导数为零，则该点在边缘上',
          optionB: '某点处的二阶导数为正，则在边缘暗的一边',
          optionC: '某点处的一阶导数为正，则在边缘亮的一边',
          optionD: '某点处的一阶导数为负，则在边缘亮的一边',
          category: '单选',
          answer: '',
        },
        {
          id: '2',
          content: '下列说法正确的时是（）',
          optionA: '某点处的一阶导数为零，则该点在边缘上',
          optionB: '某点处的二阶导数为正，则在边缘暗的一边',
          optionC: '某点处的一阶导数为正，则在边缘亮的一边',
          optionD: '某点处的一阶导数为负，则在边缘亮的一边',
          category: '单选',
          answer: '',
        },
        {
          id: '2',
          content: '下列说法正确的时是（）',
          optionA: '某点处的一阶导数为零，则该点在边缘上',
          optionB: '某点处的二阶导数为正，则在边缘暗的一边',
          optionC: '某点处的一阶导数为正，则在边缘亮的一边',
          optionD: '某点处的一阶导数为负，则在边缘亮的一边',
          category: '单选',
          answer: '',
        },
        {
          id: '3',
          content: '一个图像采集系统包括（）',
          optionA: '成像系统',
          optionB: '存储系统',
          optionC: '采样子系统',
          optionD: '量化器',
          category: '多选',
          answer: '',
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.index-view {
  height: 100%;

  .div-left {
    background-color: #F7F8FA;
    padding: 20px;
    height: 100%;
    width: 250px;
  }

  .div-right {

    background-color: #F7F8FA;
    padding: 20px;
    height: 100%;
    width: 250px;

    button {
      margin: 5px;
      cursor: pointer;
      width: 35px;
      height: 35px;
      border: #3A8BFF solid 1px;
      border-radius: 5px;
      background-color: white;
      color: #3A8BFF;
    }

    .button-has{
      background-color: #BFDAFF;
    }
    .button-selected {
      background-color: #3A8BFF;
      color: white;
      
    }
  }

  .div-mid {
    padding: 20px;
    width: calc(100% - 500px);

    .p-index{
      color: gray;
    }
    .div-option {

      div{
        cursor: pointer;
      }
      button {
        margin: 5px 10px;
        width: 35px;
        height: 35px;
        background-color: white;
        border: #EDF3F9 solid 1px;
        border-radius: 100%;
      }
      .button-selected{
        border-color: #3A8BFF;
        background-color: #3A8BFF;
        color: white;
      }

    }

  }
}</style>
