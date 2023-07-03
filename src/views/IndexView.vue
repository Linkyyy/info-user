<template>
  <div class="index-view __flex __r">
    <div class="div-left __flex __c">
      <h3>{{ tInfo.testName }}</h3>
      <div class="div-clock __flex __rcc">
        <svg t="1688352744850" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2814" id="mx_n_1688352744851" width="23" height="23">
          <path
            d="M512 64C264.57 64 64 264.58 64 512s200.57 448 448 448c247.42 0 448-200.58 448-448-0.34-247.28-200.72-447.66-448-448z m0 803.31c-196.24 0-355.31-159.08-355.31-355.31S315.76 156.69 512 156.69c196.23 0 355.31 159.08 355.31 355.31-0.34 196.09-159.22 354.97-355.31 355.31z"
            p-id="2815" fill="#F2902B"></path>
          <path d="M512 295.72h-92.69v308.97h308.97V512H512z" p-id="2816" fill="#F2902B"></path>
        </svg>
        <p>{{ timeStr }}</p>


      </div>
      <div class="div-info __flex __c">
        <div>
          <p>姓名：{{ tInfo.name }}</p>
          <p>学号：{{ tInfo.username }}</p>
        </div>

        <p>题量：{{ qList.length }}</p>
        <p>满分：100</p>
        <p>考试时间：{{ tInfo.st }} 至 {{ tInfo.et }}</p>
      </div>
    </div>
    <div class=" div-mid __flex __c">
      <p class="p-index">{{ currentIndex + 1 }}.({{ qList[currentIndex].category }}题，2分)</p>
      <p>{{ qList[currentIndex].content }}</p>
      <div class="div-option __flex __c">
        <div class="option" v-for="item, index in ['A', 'B', 'C', 'D']" :key="index" @click="handleChoose(item)">
          <button
            :class="[qList[currentIndex].category == '单选' ? qList[currentIndex].answer == item ? 'button-selected' : '' : qList[currentIndex].answer.indexOf(item) != -1 ? 'button-selected' : '', qList[currentIndex].category == '多选' ? 'button-angle' : '']">
            {{ item }}
          </button>
          <span>{{ qList[currentIndex]['option' + item] }}</span>
        </div>
      </div>
      <div class="div-button __flex __rcc">
        <button class="button-pre" @click="currentIndex -= 1" v-if="currentIndex != 0">上一题</button>
        <button class="button-next" @click="currentIndex += 1" v-if="currentIndex != qList.length - 1">下一题</button>
        <button class="button-next" v-else @click="open()">提交</button>
      </div>
    </div>
    <div class=" div-right ">
      <h3>题目</h3>
      <div class="__flex __r"></div>
      <button v-for="item, index in qList" :key="index"
        :class="[qList[index].answer != '' ? 'button-has' : '', currentIndex == index ? 'button-selected' : 0]"
        @click="currentIndex = index">{{ index + 1 }}</button>
    </div>
  </div>
</template>

<script>
import { getTimeStr } from "@/utils/clock"

export default {
  name: 'IndexView',
  props: {
    msg: String
  },
  created() {
    let id=setInterval(() => {
      this.timeStr = getTimeStr(this.tInfo.et)
      if (this.timeStr == "0'0''") {
        clearInterval(id)
        this.$alert('作答时间耗尽，试卷已自动提交！', '提示', {
          confirmButtonText: '确定',
          showClose:false,
          callback: () => {

          }
        });
      }
    }, 1000);

  },
  data() {
    return {
      currentIndex: 0,
      timeStr: '',
      tInfo: {
        testName: "新生能力综合测试（A）",
        name: '黄文旺',
        username: '201921098191',
        st: '2023-07-03 16:00',
        et: '2023-07-04 19:00'

      },

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
          answer: [],
        },
      ]
    }
  },
  methods: {
    open() {
      this.$confirm('提交后不可撤销，确定提交?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push('/after')
        this.$message({
          type: 'success',
          message: '提交成功！'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消提交！'
        });
      });
    },
    handleChoose(item) {
      let currentQ = this.qList[this.currentIndex]
      if (currentQ.category == '单选') {
        currentQ.answer = item
      }
      else {

        let index = currentQ.answer.indexOf(item)
        if (index == -1) {
          currentQ.answer.push(item)
        }
        else {
          currentQ.answer.splice(index, 1)
        }
      }
      console.log(currentQ.answer)
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

    .div-clock {
      margin: 8px;
      background-color: #FFFFFF;
      padding: 10px;
      border-radius: 3px;
      box-shadow: 0 0 5px 1px rgba(144, 144, 144, 0.147);

      p {
        color: #F2902B;
        font-size: 24px;
        margin: 0 10px;
      }

    }

    .div-info {
      color: gray;
      font-size: 15px;

      p {
        margin: 10px;
      }
    }
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

    .button-has {
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

    .div-button {
      button {
        cursor: pointer;
        margin: 30px 17px;
        border: #607AF8 solid 1px;
        width: 88px;
        height: 35px;
        border-radius: 50px;
        font-size: 15px;


      }

      .button-pre {
        background-color: transparent;
        color: #607AF8;

        &:hover {
          background-color: #dae0f0;
        }
      }

      .button-next {
        background-image: linear-gradient(to right, #67A3FC, #5F67FB);
        box-shadow: 0 0 8px 1px #EAF0FF;
        color: white;

        &:hover {
          background-image: linear-gradient(to right, #67a3fce1, #5f67fbe4);

        }
      }
    }

    .p-index {
      color: gray;
    }

    .div-option {

      div {
        cursor: pointer;
      }

      button {
        font-size: 14px;
        cursor: pointer;
        margin: 10px 15px 10px 0px;
        width: 30px;
        height: 30px;
        background-color: white;
        border: #EDF3F9 solid 1px;
        border-radius: 100%;

        &:hover {
          background-color: #E6F0FF;
          border: #93CEFF solid 1px;
          color: #93CEFF;
          transition: ease-in-out;
          transition-duration: 200ms;
        }
      }

      .button-selected {
        border-color: #627BFF;
        background-color: #627BFF;
        color: white;

        &:hover {
          border-color: #627BFF;
          background-color: #627BFF;
          color: white;
        }
      }

      .button-angle {
        border-radius: 6px;
      }

    }

  }
}
</style>
