<template>
    <div id="navigation">
        <div class="header"><img src="../images/navLogo.png" alt=""><span @click="goToBack()"><span class="UseImg"></span>user</span></div>
        <div class="neck">
            <span>{{time}}</span>
            <span>
                <div>hello world</div>
                <div>{{date}}  {{week}}</div>
            </span>
        </div>
        <div class="mainBox">
            <ul class="topNav">
                <li class="one" @click="goto('map')">
                    <span>项目概况<br><span>Project Overview</span></span>
                </li>
                <li class="two marginLeft" @click="goto('archives')">
                    <span>项目档案<br><span>Project Archives</span></span>
                </li>
                <li class="three marginLeft" @click="goto('alertP')">
                    <span>项目预警<br><span>Project Alert</span></span>
                </li>
            </ul>
            <ul class="underNav">
                <li class="four" @click="goto('ranking')">
                    <span>项目排名<br><span>Project Ranking</span></span>
                </li>
                <li class="five marginLeft" @click="goto('smartSite')">
                    <span>智慧工地<br><span>Smart Site</span></span>
                </li>
                <li class="six marginLeft" @click="goto('system')">
                    <span>系统设置<br><span>Setting System</span></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    data(){
        return{
            time:"",    //时间
            date:"",    //日期
            week:"",    //星期
        }
    },
    created(){
        this.getTime()
    },
    components: {

    },
    methods: {
        /**
         * @获取当前时间
         */
        getTime:function(){
            let nowDate = new Date(),
                year=nowDate.getFullYear(),
                month= nowDate.getMonth() + 1,
                day=nowDate.getDate(),
                hour=nowDate.getHours(),
                mm=nowDate.getMinutes();
            var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
            this.week = weeks[nowDate.getDay()];
            if(month<10){
                month = "0" + month
            }
            if(day<10){
                day="0" + day
            }
            if(hour<10){
                hour = "0" + hour
            }
            if(mm<10){
                mm = "0" + mm
            }
            this.date = year + '-'+ month + '-' + day;
            this.time = hour+':'+mm;
        },
        /**
         *@返回登录页
         */
        goToBack:function(){
            this.$router.push({path:'/'})
        },
        /**
         *@跳转内容页
         */
        goto:function(type){
            if(type=="map"){
                this.$router.push({path:'/map'})
            }else if(type=="archives"){
                this.$router.push({path:'/mainPage/archives'})
            }else if(type=="alertP"){
                this.$router.push({path:'/mainPage/alertP'})
            }else if(type=="ranking"){
                this.$router.push({path:'/mainPage/ranking'})
            }else if(type=="smartSite"){
                this.$router.push({path:'/mainPage/smartSite'})
            }else if(type=="system"){
                this.$router.push({path:'/mainPage/system'})
            }
        }
    }
}
</script> 
<style lang="scss" scoped>
#navigation{
    width: 100%;
    height: 100vh;
    background: url("../images/navBg.png");
    background-size: 100% 100%;
}
.header{
    text-align: left;
    background: linear-gradient(to right,#072043,#1e437f);
}
.header>img{
    width: 20%;
    margin-top: 10px;
}
.header>span{
    display: flex;
    float: right;
    width: 110px;
    height: 70px;
    line-height: 70px;
    margin-right: 20px;
    color: #fff;
    align-items: center;
    cursor: pointer;
}
.UseImg{
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: url("../images/tou.jpg");
    background-size: 100%;
    margin-right: 5px;
}
.neck{
    width: 70%;
    margin: auto;
    margin-top: 120px;
    color: #fff;
    overflow: hidden;
}
.neck>span{
    float: left;
    height: 60px;
}
.neck>span:first-child{
    font-size: 50px;
    line-height: 60px;
    font-weight: bold;
}
.neck>span:last-child{
    text-align: left;
    margin-left: 15px;
}
.neck>span:last-child>div{
    line-height: 30px;
}
.neck>span:last-child>div:last-child{
    color: #899d88;
}
.mainBox{
    width: 70%;
    height: 44%;
    margin: auto;
    margin-top: 30px;
}
.mainBox>ul{
    width: 100%;
    height: 48.5%;
}
.underNav{
    margin-top: 2.5%;
}
.mainBox>ul>li{
    float: left;
    width: 31%;
    height: 100%;
    cursor: pointer;
}
.marginLeft{
    margin-left: 3.5%;
}
.one{
    background: url("../images/nav_1.png");
}
.two{
    background: url("../images/nav_2.png");
}
.three{
    background: url("../images/nav_3.png");
}
.four{
    background: url("../images/nav_4.png");
}
.five{
    background: url("../images/nav_5.png");
}
.six{
    background: url("../images/nav_6.png");
}
.mainBox>ul>li{
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background-size: 100% 100%;
}
.mainBox>ul>li>span{
    margin-left: 15%;
    margin-top: 10px;
    font-size: 20px;
    text-align: left;
}
.mainBox>ul>li>span>span{
    font-size: 12px;
    color: #788cab;
}
</style>