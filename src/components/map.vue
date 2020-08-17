<template>
    <div id="mapBox">
        <div class="main">
            <div class="header">
                <div class="back" @click="backHome()">返回首页</div>
            </div>
            <div class="mainBox">
                <div class="boxLeft">
                    <ul>
                        <li>
                            <div>政府投资项目</div>
                            <div class="echartBox">
                                <echartList v-bind:parentTo="data1" key="1-1"></echartList>
                            </div>
                        </li>
                        <li>
                            <div>社会投资项目</div>
                            <div class="echartBox">
                                <echartList v-bind:parentTo="data2" key="1-2"></echartList>
                            </div>
                        </li>
                        <li>
                            <div>乡镇项目投资排名</div>
                            <div class="echartBox">
                                <echartList v-bind:parentTo="data3" key="1-3"></echartList>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="boxRight">
                    <div class="allshow">
                        <ul>
                            <li>
                                <span>356</span>
                                <span>政府项目总个数（个）</span>
                            </li>
                            <li>
                                <span>356</span>
                                <span>政府项目总投资额（亿元）</span>
                            </li>
                            <li>
                                <span>356</span>
                                <span>政府项目总个数</span>
                            </li>
                            <li>
                                <span>356</span>
                                <span>政府项目总个数</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import echartList from '../subgroup/echartList'
export default {
    name: 'mapBox',
    data(){
        return{
            data1:{
                type:"barLine",
                time:["2016","2017","2018","2019","2020"],
                color:["#d66739","#00fffb"],
                name:["项目个数","金额"],
                data:[[2,4,3,1,5],[200, 300,250,350,400]],
                valueList:["line","bar"],
                height:"220px",
            },
            data2:{
                type:"barLine",
                time:["2016","2017","2018","2019","2020"],
                color:["#eb22fd","#ffdd00"],
                name:["项目个数","金额"],
                data:[[2,4,3,1,5],[200, 300,250,350,400]],
                valueList:["line","bar"],
                height:"220px",
            },
            data3:{
                type:"barLine",
                time:["秋滨街道","三江街道","西关街道","江南街道","苏孟乡","汤溪镇","罗埠镇","洋埠镇"],
                color:["#00ffea"],
                name:["金额"],
                data:[[200,250,300,400,300,250,350,400]],
                valueList:["bar"],
                height:"220px",
            },
        }
    },
    mounted(){
    },
    components: {
        echartList: echartList,
    },
    methods: {
        backHome:function(){
            this.$router.push({path:'/navigation'})
        },
    }
}  
</script>

<style lang="scss" scoped>
#mapBox{
    width: 100%;
    height: 100vh;
    // background: url("../images/map.png");
    background: #777;
    background-size: 100% 100%;
    color: #fff;
    .main{
        .mainBox{
            overflow: hidden;
            margin-top: 20px;
            &>div{
                float: left;
                &.boxLeft{
                    width: 35%;
                    ul{
                        padding: 18px 25px 0px 25px;
                        li{
                            margin-top: 19px;
                            border: 1px solid #09445a;
                            div:nth-child(1){
                                text-align: left;
                                padding: 6px 0px 6px 30px;
                            }
                            div.echartBox{
                                height: 220px;
                            }
                        }
                    }
                }
            }
        }
    }
}
.header{
    height: 60px;
}
.back{
    float: right;
    height: 30px;
    width: 70px;
    margin-right: 15px;
    margin-top: 5px;
    cursor: pointer;
}
</style>