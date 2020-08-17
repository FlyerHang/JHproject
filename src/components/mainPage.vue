<template>
    <div id="mainPage">
        <el-container>
            <el-header>
                <div class="header">
                    <img src="../images/navLogo.png" @click="backNav()" alt="">
                    <span @click="goToBack()"><span class="UseImg"></span>user</span>
                </div>
            </el-header>
            <el-container>
                <el-aside width="250px">
                    <div class="backNav">企业档案</div>
                    <div class="navMain">
                        <el-row class="tac">
                            <el-col :span="24">
                                <el-menu
                                    mode="vertical"
                                    class="el-menu-vertical-demo"
                                    active-text-color="#fff"
                                    background-color="#384150"
                                    text-color="#fff"
                                    router
                                    :default-active = "path">
                                    <div v-for="(list,index) in nav" :key="index">
                                        <el-submenu v-if="list.children.length>0" :index="list.path">
                                            <template slot="title">
                                                <span>{{list.title}}</span>
                                            </template>
                                            <el-menu-item-group v-if="list.children.length>0" style="background:#434a50">
                                                <el-menu-item  v-for="(item,index) in list.children" :key="index+10" :index="item.path">
                                                    <span>{{item.title}}</span>
                                                </el-menu-item>
                                            </el-menu-item-group>
                                        </el-submenu>
                                        <el-menu-item v-else :index="list.path">
                                            <span slot="title">{{list.title}}</span>
                                        </el-menu-item>
                                    </div>
                                </el-menu>
                            </el-col>
                        </el-row>
                    </div>
                </el-aside>
                <el-main>
                    <div class="mainBox">
                        <router-view/>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'mainPage',
    data(){
        return{
            route:[
                {path:"/archives",component:import("./mainPage/archives")},
            ],
            nav:[
                {
                    title: '项目概况',
                    path: '/map',
                    children:[]
                }, {
                    title: '项目档案',
                    path: '/mainPage/archives',
                    children:[]
                }, {
                    title: '项目预警',
                    path: '/mainPage/alertDetail',
                    children:[]
                }, {
                    title: '项目排名',
                    path: '',
                    children:[
                        {
                            title: '项目排名',
                            path: '/mainPage/ranking',
                        },
                        {
                            title: '项目前五',
                            path: '/mainPage/rankFive',
                        }
                    ]
                }, {
                    title: '智慧工地',
                    path: '/mainPage/smartSite',
                    children:[]
                }, {
                    title: '系统设置',
                    path: '/mainPage/system',
                    children:[]
                }
            ], 
            path:"",
            compon:"",
        }
    },
    created(){
        this.path=this.$route.path;
    },
    methods: {
        /**
         * @跳转导航页
         */
        backNav:function(){
            this.$router.push({path:'/navigation'});
        },
        /**
         * @跳转登录页
         */
        goTo:function(){
            this.$router.push({path:'/'});
        },
        /**
         * @获取子元素的值
         */
        getChild(val){
            this.compon=val;
        },
        /**
         * @页面切换
         */
        // temChangeShow:function(index){
        //     this.compon=index;
        // },
        loginToNav(){
            this.$router.push({path:'/navigation'});
        }
    }
}
</script>

<style lang="scss" scoped>
#mainPage{
    width: 100%;
    height: 100vh;
    background: #f2f2f2;
}
.header{
    text-align: left;
    background: linear-gradient(to right,#072043,#1e437f);
}
.header>img{
    width: 19%;
    margin-top: 10px;
    cursor: pointer;
}
.backNav{
    line-height: 46px;
    text-align: left;
    padding-left: 50px;
    color: #bbb;
    font-size: 12px;
    // cursor: pointer;
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
}
.el-header{
    height: 70px!important;
    padding: 0;
}
.el-aside{
    // width: 16%!important;
    min-height: calc(100vh - 70px);
    background: #384150;
}
.headerTitle{
    float: left;
    width: 16%;
    text-align: center;
    height: 70px;
    line-height: 70px;
    background: #00284d;
}
.headerTitle>span{
    padding: 15px 25px;
    color: #fff;
    background: #384150;
    cursor: pointer;
    img{
        position: relative;
        top: 3px;
        margin-right: 3px;
        height: 20px;
        width: 20px;
        cursor: pointer;
    }
}
.rightHead>span{
    display: flex;
    float: right;
    width: 110px;
    height: 70px;
    line-height: 70px;
    margin-right: 20px;
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
.el-menu{
  background: transparent;
}
.el-menu-item-group>.el-menu-item{
    margin-top: 15px;
    background: #434a50;
    color: #fff;
}

.el-menu-item:hover{
     background: #545c64!important;
}
.rightHead{
    float:left;
    width: 84%;
    height: 70px;
    background: #fff;
}
.loginUser{
    float: right;
}
.mainBox{
    // max-height: 825px;
    height: 88vh;
    background: #fff;;
    overflow: auto;
}
// .el-menu-item.is-active{
//     background: transparent;
// }
</style>