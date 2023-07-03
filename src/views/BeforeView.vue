<template>
    <div class="before">

        <div class="div-main __flex __ccc">
            <div class="div-info __flex __ccc">
                <h1>新生能力综合测试</h1>

                <p>考试时长：120分钟</p>

                <p>考试时间：2023-07-01 至 2023-07-03</p>
            </div>
            <div class="div-text __flex __ccc">
                <h2>考试说明</h2>
                <p>1、离开或退出考试界面答题计时不停止，请不要中途离开考试界面。</p>
                <p>2、保持座位前的桌面干净，不要有与考试无关的内容。</p>
                <p>3、考试时间截止或答题时间结束，如果处于答题页面，将自动提交试卷。</p>

            </div>
            <button class="button-next" @click="handleNext">进入考试</button>

        </div>



    </div>
</template>
  
<script>

import { mapState } from 'vuex'


export default {
    name: 'BeforeView',
    props: {
        msg: String
    },
    computed: {
        ...mapState(['status'])
    },
    created() {

    },
    methods: {
        handleNext() {
            this.$router.push('/index');
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.before {
    height: 100%;
    width: 100%;

    button {
        cursor: pointer;
        margin: 30px 17px;
        border: #607AF8 solid 1px;
        width: 88px;
        height: 35px;
        border-radius: 50px;
        font-size: 15px;
        background-image: linear-gradient(to right, #67A3FC, #5F67FB);
        box-shadow: 0 0 8px 1px #EAF0FF;
        color: white;

        &:hover {
            background-image: linear-gradient(to right, #67a3fce1, #5f67fbe4);

        }
    }

    .div-main {
        height: 100%;
        border-radius: 5px;
        color: gray;

        .div-info {
            color: black;
        }

        .div-text {
            p {
                margin: 3px;
            }
        }

        h2 {
            color: #4D88F3;
        }

    }
}
</style>
  