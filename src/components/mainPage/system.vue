<template>
    <div id="system">
        <ul class="nav">
            <li :class="selIndex==0?'select':''" @click="selIndex=0">新建项目预警设置</li>
            <li :class="selIndex==1?'select':''" @click="selIndex=1">续建项目预警设置</li>
        </ul>
        <div v-if="selIndex==0">
            <ul class="entry">
                <li class="title">
                    <span class="log"></span>
                    <span class="bold">项目预警纪之阈值设值</span>
                    <span class="tittle">请选择设置年度：</span>
                    <select name="" id="">
                        <option value="2020">2020年度</option>
                        <option value="2019">2019年度</option>
                        <option value="2018">2018年度</option>
                        <option value="2017">2017年度</option>
                    </select>
                </li>
                <li class="main">
                    <span>全年投资项目下发时间阈值：</span>
                    <span>
                        <input type="text" class="timeS1" v-model="timeS_1">
                        <!-- <input type="text" class="timeE1" v-model="timeE_1"> -->
                        <img src="../../images/date_1.png" alt="">
                    </span>
                    <input type="text" disabled v-model="radiusT1">
                    <span v-if="revise_1"><button @click="revise(1)">修改</button></span>
                    <span v-else><button class="gary" @click="cancel(1)">取消</button><button @click="define(1)">确认</button></span>
                </li>
                <li class="main">
                    <span class="name">项目指标问题处理时间阈值：</span>
                    <span class="time">
                        <input type="text" class="timeS2" v-model="timeS_2">
                        <!-- <input type="text" class="timeE2" v-model="timeE_2"> -->
                        <img src="../../images/date_1.png" alt="">
                    </span>
                    <input type="text" disabled v-model="radiusT2">
                    <span v-if="revise_2"><button @click="revise(2)">修改</button></span>
                    <span v-else><button class="gary" @click="cancel(2)">取消</button><button @click="define(2)">确认</button></span>
                </li>
                <li class="main">
                    <span>项目立项时间阈值:</span>
                    <span>
                        <input type="text" class="timeS3" v-model="timeS_3">
                        <!-- <input type="text" class="timeE3" v-model="timeE_3"> -->
                        <img src="../../images/date_1.png" alt="">
                    </span>
                    <input type="text" disabled v-model="radiusT3">
                    <span v-if="revise_3"><button @click="revise(3)">修改</button></span>
                    <span v-else><button class="gary" @click="cancel(3)">取消</button><button @click="define(3)">确认</button></span>
                </li>
                <li class="main">
                    <span>项目招投标时间阈值:</span>
                    <span>
                        <input type="text" class="timeS4" v-model="timeS_4">
                        <!-- <input type="text" class="timeE4" v-model="timeE_4"> -->
                        <img src="../../images/date_1.png" alt="">
                    </span>
                    <input type="text" disabled v-model="radiusT4">
                    <span v-if="revise_4"><button @click="revise(4)">修改</button></span>
                    <span v-else><button class="gary" @click="cancel(4)">取消</button><button @click="define(4)">确认</button></span>
                </li>
                <li class="main">
                    <span>监控项目统计开工时间阈值:</span>
                    <span>
                        <input type="text" class="timeS5" v-model="timeS_5">
                        <!-- <input type="text" class="timeE5" v-model="timeE_5"> -->
                        <img src="../../images/date_1.png" alt="">
                    </span>
                    <input type="text" disabled v-model="radiusT5">
                    <span v-if="revise_5"><button @click="revise(5)">修改</button></span>
                    <span v-else><button class="gary" @click="cancel(5)">取消</button><button @click="define(5)">确认</button></span>
                </li>
                <li class="main">
                    <span>监控项目统计入库时间阈值:</span>
                    <span>
                        <input type="text" class="timeS6" v-model="timeS_6">
                        <!-- <input type="text" class="timeE6" v-model="timeE_6"> -->
                        <img src="../../images/date_1.png" alt="">
                    </span>
                    <input type="text" disabled v-model="radiusT6">
                    <span v-if="revise_6"><button @click="revise(6)">修改</button></span>
                    <span v-else><button class="gary" @click="cancel(6)">取消</button><button @click="define(6)">确认</button></span>
                </li>
            </ul>
            <ul class="promt">
                <li class="title">
                    <span class="log"></span>
                    <span class="bold">项目预警提醒机制设置</span>
                </li>
                <li class="main">
                    <span>全年投资项目下发时间阈值：</span>
                    <input type="text" disabled v-model="timeData[0].start">
                    <input type="text" disabled v-model="timeData[0].end">
                    <span>
                        <input type="text" class="point1" v-model="pointT1" placeholder="请选择节点提示时间">
                        <img src="../../images/date_1.png" alt="">
                    </span>
                    <span v-if="revise_7"><button @click="revise(7)">修改</button></span>
                    <span v-else><button class="gary" @click="cancel(7)">取消</button><button @click="define(7)">确认</button></span>
                </li>
                <li class="main">
                    <span class="name">项目指标问题处理时间阈值：</span>
                    <input type="text" disabled v-model="timeData[1].start">
                    <input type="text" disabled v-model="timeData[1].end">
                    <span class="time">
                        <input type="text" class="point2" v-model="pointT2" placeholder="请选择节点提示时间">
                        <img src="../../images/date_1.png" alt="">
                    </span>
                    <span v-if="revise_8"><button @click="revise(8)">修改</button></span>
                    <span v-else><button class="gary" @click="cancel(8)">取消</button><button @click="define(8)">确认</button></span>
                </li>
                <li class="main">
                    <span>项目立项时间阈值:</span>
                    <input type="text" disabled v-model="timeData[2].start">
                    <input type="text" disabled v-model="timeData[2].end">
                    <span>
                        <input type="text" class="point3" v-model="pointT3" placeholder="请选择节点提示时间">
                        <img src="../../images/date_1.png" alt="">
                    </span>
                    <span v-if="revise_9"><button @click="revise(9)">修改</button></span>
                    <span v-else><button class="gary" @click="cancel(9)">取消</button><button @click="define(9)">确认</button></span>
                </li>
                <li class="main">
                    <span>项目招投标时间阈值:</span>
                    <input type="text" disabled v-model="timeData[3].start">
                    <input type="text" disabled v-model="timeData[3].end">
                    <span>
                        <input type="text" class="point4" v-model="pointT4" placeholder="请选择节点提示时间">
                        <img src="../../images/date_1.png" alt="">
                    </span>
                    <span v-if="revise_10"><button @click="revise(10)">修改</button></span>
                    <span v-else><button class="gary" @click="cancel(10)">取消</button><button @click="define(10)">确认</button></span>
                </li>
                <li class="main">
                    <span>监控项目统计开工时间阈值:</span>
                    <input type="text" disabled v-model="timeData[4].start">
                    <input type="text" disabled v-model="timeData[4].end">
                    <span>
                        <input type="text" class="point5" v-model="pointT5" placeholder="请选择节点提示时间">
                        <img src="../../images/date_1.png" alt="">
                    </span>
                    <span v-if="revise_11"><button @click="revise(11)">修改</button></span>
                    <span v-else><button class="gary" @click="cancel(11)">取消</button><button @click="define(11)">确认</button></span>
                </li>
                <li class="main">
                    <span>监控项目统计入库时间阈值:</span>
                    <input type="text" disabled v-model="timeData[5].start">
                    <input type="text" disabled v-model="timeData[5].end">
                    <span>
                        <input type="text" class="point6" v-model="pointT6" placeholder="请选择节点提示时间">
                        <img src="../../images/date_1.png" alt="">
                    </span>
                    <span v-if="revise_12"><button @click="revise(12)">修改</button></span>
                    <span v-else><button class="gary" @click="cancel(12)">取消</button><button @click="define(12)">确认</button></span>
                </li>
            </ul>
        </div>
        <div v-else>
            <ul class="entry">
                <li class="title">
                    <span class="log"></span>
                    <span class="bold">在建项目预警机制阈值设置</span>
                    <span class="tittle">请选择设置年度：</span>
                    <select name="" id="">
                        <option value="2020">2020年度</option>
                        <option value="2019">2019年度</option>
                        <option value="2018">2018年度</option>
                        <option value="2017">2017年度</option>
                    </select>
                </li>
                <li class="mainR">
                    <span>投资金额平台设置：</span>
                    <input type="text" v-model="invest">个月
                    <span v-if="revise_13"><button @click="revise(13)">修改</button></span>
                    <span v-else><button class="gary" @click="cancel(13)">取消</button><button @click="define(13)">确认</button></span>
                </li>
                <li class="mainR">
                    <span>投资金额平台设置：</span>
                    <input type="text" v-model="pay">个月
                    <span v-if="revise_14"><button @click="revise(14)">修改</button></span>
                    <span v-else><button class="gary" @click="cancel(14)">取消</button><button @click="define(14)">确认</button></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'system',
    data(){
        return{
            selIndex:0,
            laydate: window.laydate,
             //修改按钮状态切换
            revise_1:true,
            revise_2:true,
            revise_3:true,
            revise_4:true,
            revise_5:true,
            revise_6:true,
            revise_7:true,
            revise_8:true,
            revise_9:true,
            revise_10:true,
            revise_11:true,
            revise_12:true,
            revise_13:true,
            revise_14:true,
            //输入框绑定
            //数据绑定
            timeS_1:"",
            radiusT1:"",
            timeS_2:"",
            radiusT2:"",
            timeS_3:"",
            radiusT3:"",
            timeS_4:"",
            radiusT4:"",
            timeS_5:"",
            radiusT5:"",
            timeS_6:"",
            radiusT6:"",
            //提醒期限选择
            pointT1:"",
            pointT2:"",
            pointT3:"",
            pointT4:"",
            pointT5:"",
            pointT6:"",
            // timeE_1:"",
            invest:12,  //投资金融平台设置
            pay:12,     //支付金额平台设值
            timeData:[
                {start:"",end:""},
                {start:"",end:""},
                {start:"",end:""},
                {start:"",end:""},
                {start:"",end:""},
                {start:"",end:""},
            ]
        }
    },
    created(){

    },
    mounted(){
        var $this=this;
        this.laydate.render({
            elem: ".point1",
            trigger: 'click',
            done:function(value){
                $this.pointT1=value;
            }
        });
        this.laydate.render({
            elem: ".point2",
            trigger: 'click',
            done:function(value){
                $this.pointT2=value;
            }
        });
        this.laydate.render({
            elem: ".point3",
            trigger: 'click',
            done:function(value){
                $this.pointT3=value;
            }
        });
        this.laydate.render({
            elem: ".point4",
            trigger: 'click',
            done:function(value){
                $this.pointT4=value;
            }
        });
        this.laydate.render({
            elem: ".point5",
            trigger: 'click',
            done:function(value){
                $this.pointT5=value;
            }
        });
        this.laydate.render({
            elem: ".point1",
            trigger: 'click',
            done:function(value){
                $this.pointT6=value;
            }
        });
        this.laydate.render({
            elem: ".timeS1",
            range: true,
            trigger: 'click',
            done:function(value){
                $this.timeS_1=value;
                if(value!=""){
                    $this.radiusT1=$this.datedifference(value.slice(0,10),value.slice(13,23))+"天";
                }
            }
        });
        this.laydate.render({
            elem: ".timeS2",
            range: true,
            trigger: 'click',
            done:function(value){
                $this.timeS_2=value;
                if(value!=""){
                    $this.radiusT2=$this.datedifference(value.slice(0,10),value.slice(13,23))+"天";
                }
            }
        });
        this.laydate.render({
            elem: ".timeS3",
            range: true,
            trigger: 'click',
            done:function(value){
                $this.timeS_3=value;
                if(value!=""){
                    $this.radiusT3=$this.datedifference(value.slice(0,10),value.slice(13,23))+"天";
                }
            }
        });
        this.laydate.render({
            elem: ".timeS4",
            range: true,
            trigger: 'click',
            done:function(value){
                $this.timeS_4=value;
                if(value!=""){
                    $this.radiusT4=$this.datedifference(value.slice(0,10),value.slice(13,23))+"天";
                }
            }
        });
        this.laydate.render({
            elem: ".timeS5",
            range: true,
            trigger: 'click',
            done:function(value){
                $this.timeS_5=value;
                if(value!=""){
                    $this.radiusT5=$this.datedifference(value.slice(0,10),value.slice(13,23))+"天";
                }
            }
        });
        this.laydate.render({
            elem: ".timeS6",
            range: true,
            trigger: 'click',
            done:function(value){
                $this.timeS_6=value;
                if(value!=""){
                    $this.radiusT6=$this.datedifference(value.slice(0,10),value.slice(13,23))+"天";
                }
            }
        });
    },
    methods:{
        /**
         * @确认修改
         */
        define:function(num){
            var index=num-1
            var name="revise_"+num;
            var time=this["timeS_"+num];
            this[name]=true;
            this.timeData[index].start=time.slice(0,10);
            this.timeData[index].end=time.slice(13,23)
        },
        /**
         * @取消修改
         */
        cancel:function(num){
            var name="revise_"+num;
            this[name]=true;
        },
        /**
         * @修改触发
         */
        revise:function(num){
            var name="revise_"+num;
            this[name]=false;
        },
        /**
         * @计算天数
         */
        datedifference:function(sDate1, sDate2) {
            var dateSpan,
                iDays;
            sDate1 = Date.parse(sDate1);
            sDate2 = Date.parse(sDate2);
            dateSpan = sDate2 - sDate1;
            dateSpan = Math.abs(dateSpan);
            iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
            return iDays
        },
    }
}
</script>

<style lang="scss" scoped>
#system{
    background: #fff;
    text-align: left;
    border-radius: 5px;
    font-size: 14px;
    &>div{
        height: 78vh;
        overflow: auto;
        padding-bottom: 1vh;
    }
    .promt{
        padding: 20px 30px;
        li{
            &.main{
                padding: 10px 0;
                &>input{
                    text-align: center;
                    width: 120px;
                    height: 26px;
                    line-height: 26px;
                    margin-left: 20px;
                    border: 1px solid #d8d8d8;
                    outline: none;
                }
                span{
                    display: inline-block;
                    &:last-child{
                        width: 120px;
                        margin-left: 30px;
                        text-align: center;
                        button{
                            border: none;
                            outline: none;
                            color: #3597f9;
                            background: transparent;
                            cursor: pointer;
                            &.gary{
                                color: #aaa;
                            }
                            &:last-child{
                                margin-left: 15px;
                            }
                        }
                    }
                    &:nth-child(4){
                        padding: 0 15px 0 30px;
                        margin-left: 40px;
                        line-height: 28px;
                        border: 1px solid #d8d8d8;
                        input{
                            border: none;
                            outline: none;
                        }
                        img{
                            position: relative;
                            width: 20px;
                            height: 20px;
                            top: 5px;
                            margin-left: 15px;
                        }
                    }
                    &:first-child{
                        width: 210px;
                    }
                }
            }
            &.title{
                display: flex;
                align-items: center;
                line-height: 50px;
                select{
                    width: 120px;
                    height: 24px;
                }
                span{
                    display: inline-block;
                    &.tittle{
                        padding: 0 5px 0 80px;
                    }
                    &.bold{
                        font-weight: bold;
                    }
                    &.log{
                        width: 10px;
                        height: 30px;
                        margin-right: 10px;
                        background: #3597f7;
                    }
                }
            }
        }
    }
    .entry{
        padding: 20px 30px;
        li{
            &.mainR{
                line-height: 50px;
                &>input{
                    height:22px;
                    width: 100px;
                    margin:0 10px 0 20px;
                    padding-left: 5px;
                    outline: none;
                }
                span{
                    display: inline-block;
                    &:last-child{
                        width: 120px;
                        margin-left: 30px;
                        text-align: center;
                        button{
                            border: none;
                            outline: none;
                            color: #3597f9;
                            background: transparent;
                            cursor: pointer;
                            &.gary{
                                color: #aaa;
                            }
                            &:last-child{
                                margin-left: 15px;
                            }
                        }
                    }
                }
            }
            &.main{
                line-height: 50px;
                &>input{
                    height:24px;
                    width: 80px;
                    margin-left: 30px;
                    padding-left: 5px;
                    outline: none;
                }
                span{
                    display: inline-block;
                    input{
                        height: 24px;
                        width: 300px;
                        padding-left: 5px;
                        border: transparent;
                        outline: none;
                    }
                    img{
                        position: relative;
                        top: 5px;
                        width: 20px;
                        height: 20px;
                        margin-left: 20px;
                    }
                    &:last-child{
                        width: 120px;
                        margin-left: 30px;
                        text-align: center;
                        button{
                            border: none;
                            outline: none;
                            color: #3597f9;
                            background: transparent;
                            cursor: pointer;
                            &.gary{
                                color: #aaa;
                            }
                            &:last-child{
                                margin-left: 15px;
                            }
                        }
                    }
                    &:nth-child(2){
                        height: 30px;
                        line-height: 30px;
                        padding-right: 15px;
                        border: 1px solid #d8d8d8;
                    }
                    &:first-child{
                        width: 210px;
                    }
                }
            }
            &.title{
                display: flex;
                align-items: center;
                line-height: 50px;
                select{
                    width: 120px;
                    height: 24px;
                }
                span{
                    display: inline-block;
                    &.tittle{
                        padding: 0 5px 0 80px;
                    }
                    &.bold{
                        font-weight: bold;
                    }
                    &.log{
                        width: 10px;
                        height: 30px;
                        margin-right: 10px;
                        background: #3597f7;
                    }
                }
            }
        }
    }
    ul.nav{
        overflow: hidden;
        padding-top: 15px;
        padding-left: 30px;
        li{
            float: left;
            padding: 20px 30px;
            cursor: pointer;
            &.select{
                color: #00b2fc;
                border-bottom: 2px solid #00b2fc;
            }
            &:hover{
                color: #00b2fc;
            }
        }
    }
}
</style>