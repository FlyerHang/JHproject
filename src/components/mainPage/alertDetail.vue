<template>
    <div id="alertDetail">
        <div class="wayName">
            <span class="outRouter">项目预警</span>/<span v-if="selShow==0">新建项目</span><span v-if="selShow==1">续建项目</span>
        </div>
        <div class="navD">
            <ul>
                <li :class="selShow==0?'select':''" @click="selShow=0">新建项目</li>
                <li :class="selShow==1?'select':''" @click="selShow=1">续建项目</li>
            </ul>
        </div>
        <div class="dataList" v-if="selShow==0">
            <div class="searchBox">
                <input type="text" placeholder="请输入项目名称"><span><img src="../../images/searchH.png" alt=""></span>
                超时原因：
                <select name="because" id="">
                    <option value="0">选择超时原因</option>
                </select>
            </div>
            <div class="list">
                <ul class="listBox">
                    <li v-for="(list,index) in 5" :key="index">
                        <!-- <div v-if="index==0" class="float one">
                            <span>指标处理超时</span>
                        </div>
                        <div v-if="index==1" class="float two">
                            <span>立项超时</span>
                        </div>
                        <div v-if="index==2" class="float three">
                            <span>审价招投标超时</span>
                        </div>
                        <div v-if="index==3" class="float four">
                            <span>统计入库超时</span>
                        </div>
                        <div v-if="index==4" class="float one">
                            <span>指标处理超时</span>
                        </div> -->
                        <div class="head">
                            <span class="bold">金华区块土石整理工程</span>
                            <span v-if="index==0" class="red"><span class="point"></span>指标处理超时</span>
                            <span v-if="index==1" class="red"><span class="point"></span>立项超时</span>
                            <span v-if="index==2" class="red"><span class="point"></span>审价招标超时</span>
                            <span v-if="index==3" class="red"><span class="point"></span>统计入库超时</span>
                            <span v-if="index==4" class="red"><span class="point"></span>指标处理超时</span>
                        </div>
                        <div class="listMain">
                            <div class="left">
                                <ul>
                                    <li>项目业主：融盛集团</li>
                                    <li>投资主管部门：建设局</li>
                                    <li>建设性质：新建类</li>
                                    <li>项目总用地：100亩</li>
                                    <li>项目类别：其他</li>
                                </ul>
                            </div>
                            <div class="center">
                                <ul>
                                    <li>总历时<br><span class="big">40</span>天</li>
                                    <li class="green">超时<br><span><span class="bold">3</span>天</span></li>
                                    <li>当前责任部门<br>建设局</li>
                                </ul>
                            </div>
                            <div class="right">
                                <button class="btn" @click="detailShow()">催报</button>
                                <!-- <span>1</span> -->
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="pageBox">
                <el-pagination
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </div>
        </div>
        <div class="dataList" v-else>
            <div class="searchBox">
                <input type="text" placeholder="请输入项目名称"><span><img src="../../images/searchH.png" alt=""></span>
                超时原因：
                <select name="because" id="">
                    <option value="0">选择超时原因</option>
                </select>
            </div>
            <div class="list">
                <ul class="listBox">
                    <li v-for="(list,index) in 5" :key="index">
                        <!-- <div v-if="index==0" class="float one">
                            <span>投资金额不足</span>
                        </div>
                        <div v-if="index==1" class="float two">
                            <span>支付金额不足</span>
                        </div>
                        <div v-if="index==2" class="float three">
                            <span>投资金额不足</span>
                        </div>
                        <div v-if="index==3" class="float four">
                            <span>投资金额不足</span>
                        </div>
                        <div v-if="index==4" class="float one">
                            <span>投资金额不足</span>
                        </div> -->
                        <div class="head">
                            <span class="bold">金华区块土石整理工程</span>
                            <span v-if="index==0" class="red"><span class="point"></span>投资金额不足</span>
                            <span v-if="index==1" class="red"><span class="point"></span>支付金额不足</span>
                            <span v-if="index==2" class="red"><span class="point"></span>投资金额不足</span>
                            <span v-if="index==3" class="red"><span class="point"></span>支付金额不足</span>
                            <span v-if="index==4" class="red"><span class="point"></span>投资金额不足</span>
                        </div>
                        <div class="listMain">
                            <div class="left">
                                <ul>
                                    <li>项目业主：融盛集团</li>
                                    <li>投资主管部门：建设局</li>
                                    <li>建设性质：续建类</li>
                                    <li>项目总用地：100亩</li>
                                    <li>项目类别：其他</li>
                                </ul>
                            </div>
                            <div class="center">
                                <ul>
                                    <li>总历时<br><span class="big">40</span>天</li>
                                    <li class="green">超时<br><span><span class="bold">3</span>天</span></li>
                                    <li>当前责任部门<br>建设局</li>
                                </ul>
                            </div>
                            <div class="right">
                                <button class="btn" @click="detailShow()">催报</button>
                                <!-- <span>{{index+1}}</span> -->
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="pageBox">
                <el-pagination
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </div>
        </div>
        <div class="pop" v-if="popShow">
            <div class="popBox">
                <div class="popHead">
                    催报详情<span @click="popShow=false">x</span>
                </div>
                <div class="popMain">
                    此项目立项环节未按照规定时间完成，已超过三天，点击“确定”，将给相关负责部门发送短信催报
                </div>
                <div class="popBtn">
                    <button class="define" @click="popShow=fasle">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"alertDetail",
    data(){
        return {
            selShow:0,
            popShow:false,
        }
    },
    created(){

    },
    methods:{
        /**
         * @分页
         */
        handleCurrentChange(){

        },
        handleSizeChange(){

        },
        currentPage4(){

        },
        /**
         *@返回上一页
         */
        backPrev(){
            this.$router.go(-1);
        },
        /**
         * @催报
         */
        detailShow(){
            this.popShow=true
        },
    }
}
</script>
<style lang="scss" scoped>
#alertDetail{
    text-align: left;
    background: #fff;
    font-size: 14px;
    .wayName{
        line-height: 40px;
        border-bottom: 1px solid #d7d7d7;
        padding-left: 15px;
        .outRouter{
            color: #aaa;
        }
        span{
            display: inline-block;
            padding: 5px;
            // &:first-child{
            //     cursor: pointer;
            // }
        }
    }
    .red{
        color: red;
        margin-left: 10px;
        span.point{
            position: relative;
            display: inline-block;
            width: 4px;
            height: 4px;
            top: -3px;
            margin-right: 5px;
            background: red;
            border-radius: 50%;
        }
    }
    .pop{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .popBox{
            width: 300px;
            height: 230px;
            background: #fff;
            margin-left: calc(50% - 200px);
            margin-top: 15%;
            margin-left: 45%;
            box-shadow: 0 0 5px 0 #000;
            .popBtn{
                line-height: 50px;
                text-align: center;
                .define{
                    padding: 7px 20px;
                    background: #1890ff;
                    border-radius: 5px;
                    outline: none;
                    border:#283949;
                    color: #fff;
                    cursor: pointer;
                    // &:hover{
                    //     background: #626365;
                    //     border: #626365;
                    // }
                }
            }
            .popMain{
                display: flex;
                padding: 40px 40px 20px 40px;
                align-items: center;
                justify-items: center;
            }
            .popHead{
                // background: #283949;
                line-height: 40px;
                padding-left: 10px;
                text-align: center;
                border-bottom: 1px solid #e7e7e7;
                span{
                    float: right;
                    width: 40px;
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                    font-size: 12px;
                    cursor: pointer;
                }
            }
        }
    }
    .dataList{
        .pageBox{
            padding: 15px 40px 15px 0;
            text-align: right;
        }
        .list{
            padding: 20px 30px;
            height: 56vh;
            overflow: auto;
            ul.listBox{
                &>li{
                    position: relative;
                    border: 1px solid #e4e4e4;
                    border-radius: 5px;
                    padding-bottom: 15px;
                    div{
                        &.listMain{
                            overflow: hidden;
                            margin-top: 10px;
                            div{
                                float: left;
                                &.right{
                                    display: flex;
                                    height: 80px;
                                    justify-items: center;
                                    align-items: center;
                                    width: 10%;
                                    button{
                                        padding: 5px 25px;
                                        color: #2b68dc;
                                        background: #e5edfa;
                                        border: 1px solid #0049d4;
                                        border-radius: 3px;
                                        cursor: pointer;
                                        outline: none;
                                    }
                                    span{
                                        position: relative;
                                        top: -10px;
                                        left: -1px;
                                        width: 20px;
                                        height: 20px;
                                        text-align: center;
                                        line-height: 20px;
                                        background: #199ed8;
                                        color: #fff;
                                        border: 1px solid #a6ddf2;
                                    }
                                }
                                &.center{
                                    width: 29%;
                                    height: 100%;
                                    ul{
                                        overflow: hidden;
                                        li{
                                            float: left;
                                            padding: 10px 30px 0 30px;
                                            line-height: 24px;
                                            text-align: center;
                                            &>span{
                                                color: #ff6600;
                                            }
                                            .bold{
                                                font-size: 26px;
                                                font-weight: bold;
                                            }
                                        }
                                    }
                                }
                                &.left{
                                    width: 60%;
                                    border-right: 1px solid #e4e4e4;
                                    ul{
                                        overflow: hidden;
                                        li{
                                            float: left;
                                            width: 30%;
                                            padding-left: 3%;
                                            line-height: 40px;
                                        }
                                    }
                                }
                            }
                        }
                        &.head{
                            line-height: 40px;
                            margin-top: 10px;
                            font-weight: bold;
                            padding-left: 30px;
                        }
                        &.float{
                            position: absolute;
                            padding: 5px 15px 5px 40px;
                            width: 120px;
                            right: 0;
                            top: 0;
                            color: #333;
                            border-radius: 0 5px 0 40px;
                            &.one{
                                background: linear-gradient(to right, #fd8934,#f4531a);
                                span{
                                    background: #ff8532;
                                }
                            }
                            &.two{
                                background: linear-gradient(to right, #ffb236,#fe9919);
                                span{
                                    background: #fe9919;
                                }
                            }
                            &.three{
                                background: linear-gradient(to right, #fe8834,#f6561a);
                                span{
                                    background: #ff5319;
                                }
                            }
                            &.four{
                                background: linear-gradient(to right, #fe8834,#f6561a);
                                span{
                                    background: #ff5319;
                                }
                            }
                            span{
                                display: inline-block;
                                padding: 5px 8px;
                                width: 100px;
                            }
                        }
                    }
                }
            }
        }
        .searchBox{
            line-height: 50px;;
            select{
                width: 120px;
                height: 30px;
                border-radius: 3px;
                border:1px solid #e4e4e4;
                color: #999;
            }
            input{
                height: 24px;
                width: 300px;
                padding-left: 5px;
                padding-right: 40px;
                margin-left: 30px;
                outline: #e4e4e4;
                border: 1px solid #e4e4e4;
                border-radius: 5px;
            }
            span{
                position: relative;
                right: 30px;
                top: 5px;
                cursor: pointer;
                img{
                    width: 18px;
                    height: 18px;
                }
            }
        }
    }
    .navD{
        padding: 15px 30px;
        ul{
            overflow: hidden;
            li{
                float: left;
                padding: 20px 40px;
                cursor: pointer;
                &.select{
                    border-bottom:2px solid #0096fa;
                    color: #0096fa;
                }
            }
        }
    }
    .big{
        font-size: 22px;
        font-weight: bold;
        color: #000!important;
    }
}
</style>