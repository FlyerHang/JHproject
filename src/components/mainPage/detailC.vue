<template>
    <div id="detailC">
        <div class="deNav">
            <ul>
                <li :class="navShow==0?'select':''" @click="navShow=0">基础信息</li>
                <li :class="navShow==1?'select':''" @click="navShow=1">招标信息</li>
                <li :class="navShow==2?'select':''" @click="navShow=2">审批进度</li>
                <li :class="navShow==3?'select':''" @click="navShow=3">智慧工地</li>
            </ul>
        </div>
        <div class="deMain">
            <div v-if="navShow==0" class="navOne">
                <ul>
                    <li>
                        <div><span class="rule"></span><span class="bold">项目单位基本情况</span></div>
                        <div><span>项目业主：融盛集团</span></div>
                        <div><span>投资主管部门：建设局</span></div>
                        <div><span>负责人：周建国</span><span>手机号码：15982273483</span></div>
                    </li>
                    <li>
                        <div><span class="rule"></span><span class="bold">项目基本情况</span></div>
                        <div><span>项目名称：人才公寓建设</span><span>项目类别：城建</span></div>
                        <div><span>拟建地址：环城北路188号</span></div>
                        <div><span>项目总用地：20亩</span><span>其中农转用地：0亩</span></div>
                        <div><span>工程施工单位：萧宏建设有限公司</span></div>
                    </li>
                    <li>
                        <div><span class="rule"></span><span class="bold">资金基本情况</span></div>
                        <div><span>*总投资（万元）：1000</span><span>中央投资（万元）：0</span><span>当前月投资金额（万元）：10</span></div>
                        <div><span>市级投资（万元）：600</span><span>县市区投资（万元）：400</span><span>当前月支付金额（万元）：10</span></div>
                    </li>
                    <li>
                        <div><span class="rule"></span><span class="bold">月度形象报告</span></div>
                        <div><span>已完成形象进度：设计方案评审</span></div>
                        <div><span>下月形象进度：完成图纸设置</span></div>
                    </li>
                </ul>
            </div>
            <div v-else-if="navShow==1" class="navTwo">
                <ul>
                    <li><span>招标单位：</span>中招国际招标有限公司</li>
                    <li><span>招标时间：</span>2020-09-08</li>
                    <li><span>项目名称：</span>金华市技术学院开发改造</li>
                    <li><span>联系人：</span>周利华</li>
                    <li><span>联系电话：</span>15988340596</li>
                    <li><span>招标方式：</span>公开招标</li>
                    <li><span>控制价(万元)：</span>420</li>
                    <li><span>投标家数：</span>8</li>
                    <li><span>中标单位：</span>金华市经济开发区人社局</li>
                    <li><span>中标时间：</span>2020-09-08</li>
                    <li><span>中标价(万元)：</span>390</li>
                    <li><span>中标通知书编号：</span>8987673290XL12178</li>
                </ul>
            </div>
            <div v-else-if="navShow==2" class="navThree">
                <ul>
                    <li>
                        <div class="head">
                            <span class="num grey">6</span>
                            <span>项目开工</span>
                            <span>已完成</span>
                            <button class="btnH blue">提醒负责部门</button>
                        </div>
                        <div class="main">
                            <ul>
                                <li>处理人：黄金涛</li>
                                <li>预计处理时间：2020-03-15</li>
                                <li>实际处理时间：2020-03-15</li>
                                <li>处理人：黄金涛</li>
                                <li>相关材料证明：<span style="color:#1890ff">项目下发文件.pdf</span></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="head">
                            <span class="num">5</span>
                            <span>项目已入库</span>
                            <span>已完成</span>
                            <button class="btnH">提醒负责部门</button>
                        </div>
                        <div class="main">
                            <ul>
                                <li>处理人：黄金涛</li>
                                <li>预计处理时间：2020-03-15</li>
                                <li>实际处理时间：2020-03-15</li>
                                <li>处理人：黄金涛</li>
                                <li>相关材料证明：<span style="color:#1890ff">项目下发文件.pdf</span></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="head">
                            <span class="num">4</span>
                            <span>项目招投标</span>
                            <span>已完成</span>
                            <button class="btnH">提醒负责部门</button>
                        </div>
                        <div class="main">
                            <ul>
                                <li>处理人：黄金涛</li>
                                <li>预计处理时间：2020-03-15</li>
                                <li>实际处理时间：2020-03-15</li>
                                <li>处理人：黄金涛</li>
                                <li>相关材料证明：<span style="color:#1890ff">项目下发文件.pdf</span></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="head">
                            <span class="num">3</span>
                            <span>项目立项</span>
                            <span>已完成</span>
                            <button class="btnH">提醒负责部门</button>
                        </div>
                        <div class="main">
                            <ul>
                                <li>处理人：黄金涛</li>
                                <li>预计处理时间：2020-03-15</li>
                                <li>实际处理时间：2020-03-15</li>
                                <li>处理人：黄金涛</li>
                                <li>相关材料证明：<span style="color:#1890ff">项目下发文件.pdf</span></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="head">
                            <span class="num">2</span>
                            <span>指标处理</span>
                            <span>已完成</span>
                            <button class="btnH">提醒负责部门</button>
                        </div>
                        <div class="main">
                            <ul>
                                <li>处理人：黄金涛</li>
                                <li>预计处理时间：2020-03-15</li>
                                <li>实际处理时间：2020-03-15</li>
                                <li>处理人：黄金涛</li>
                                <li>相关材料证明：<span style="color:#1890ff">项目下发文件.pdf</span></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="head">
                            <span class="num">1</span>
                            <span>项目下发</span>
                            <span>已完成</span>
                            <button class="btnH">提醒负责部门</button>
                        </div>
                        <div class="main">
                            <ul>
                                <li>处理人：黄金涛</li>
                                <li>预计处理时间：2020-03-15</li>
                                <li>实际处理时间：2020-03-15</li>
                                <li>处理人：黄金涛</li>
                                <li>相关材料证明：<span style="color:#1890ff">项目下发文件.pdf</span></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div v-else class="navFour">
                <img src="../../images/u602.jpg" alt="">
            </div>
        </div>
        <div class="confirm"><button @click="goToBack()">确定</button></div>
    </div>
</template>
<script>
export default {
    name: 'detailC',
    data(){
        return{
            navShow:0,
        }
    },
    created(){
    },
    components: {

    },
    methods: {
        /**
         * @返回上一页
         */
        goToBack:function(){
            this.$router.push({
                path:'/mainPage/archives',
            })
        },
    }
}
</script>
<style lang="scss" scoped>
#detailC{
    margin-top: 3px;
    text-align: left;
    background: #fff;
    font-size: 14px;
    .confirm{
        padding: 30px 0;
        text-align: center;
        button{
            padding: 10px 40px;
            background: #66ccff;
            // color: #fff;
            cursor: pointer;
            border: 1px solid #66ccff;
            border-radius: 3px;
            outline: none;
        }
    }
    .deMain{
        .navFour{
            text-align: center;
            img{
                margin-top: 30px;
            }
        }
        .navThree{
            padding: 15px 30px;
            ul{
                li{
                    .main{
                        margin-left: 15px;
                        padding-left: 15px;
                        &:not(:last-child){
                            border-left: 2px solid #88c7f4;
                        }
                        ul{
                            li{
                                line-height: 30px;
                            }
                        }
                    }
                    .head{
                        line-height: 40px;
                        button{
                            margin-left: 50px;
                            padding: 5px 15px;
                            background: #66ccff;
                            color: #fff;
                            cursor: pointer;
                            border: 1px solid #66ccff;
                            border-radius: 3px;
                            outline: none;
                            &.btnH{
                                background: #ccc;
                                border: 1px solid #ccc;
                                &.blue{
                                    background: #0096fa;
                                    border: 1px solid #0096fa;
                                }
                            }
                        }
                        span{
                            &:nth-child(2){
                                margin-left: 10px;
                                font-weight: bold;
                            }
                            &:nth-child(3){
                                margin-left: 20px;
                            }
                        }
                        .num{
                            display: inline-block;
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            background: #1890ff;
                            color: #fff;
                            text-align: center;
                            line-height: 30px;
                        }
                    }
                }
            }
        }
        .navTwo{
            ul{
                padding: 15px;
                li{
                    padding-left: 15px;
                    line-height: 50px;
                    span{
                        display: inline-block;
                        width: 130px;
                    }
                }
            }
        }
        .navOne{
            padding: 10px 20px;
            ul{
                li{
                    padding: 15px 0;
                    border-bottom:1px solid #e4e4e4;
                    div{
                        line-height: 30px;
                        &:not(:first-child){
                            span{
                                display: inline-block;
                                width: 16%;
                                margin-left: 15px;
                            }
                        }
                        .bold{
                            font-weight: bold;
                            margin-left:10px;
                        }
                        .rule{
                            position: relative;
                            display: inline-block;
                            width: 6px;
                            top: 5px;
                            height: 24px;
                            background: #6666ff;
                        }
                    }
                }
            }
        }
    }
    .deNav{
        padding: 15px;
        border-bottom:1px solid #e4e4e4;
        ul{
            overflow: hidden;
            li{
                float: left;
                padding: 18px 30px;
                margin-left:50px;
                cursor: pointer;
                &.select{
                    background: #00a5ff;
                    color: #fff;
                }
            }
        }
    }
}
</style>