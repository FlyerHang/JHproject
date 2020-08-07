<template>
    <div id="mainPage">
        <el-container>
            <el-header>
                <div class="headerTitle" @click="backNav()">
                  <span><img src="../images/backNav.png">金华开发区项目生命周期管理</span>
                </div>
                <div class="rightHead">
                    <span class="loginUser" @click="goTo()"><span class="UseImg"></span>user</span>
                </div>
            </el-header>
            <el-container>
                <el-aside>
                    <div class="navMain">
                        <el-row class="tac">
                            <el-col :span="24">
                                <el-menu
                                    mode="vertical"
                                    class="el-menu-vertical-demo"
                                    active-text-color="#ffd04b"
                                    background-color="#001529"
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
                    path: '/mainPage/alertP',
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
    components: {
        // archives: () => import("../subgroup/archives"),
        // detailC: () => import("../subgroup/detailC"),
        // alertP: () => import("../subgroup/alertP"),
        // alertDeatil: () => import("../subgroup/alertDetail"),
        // ranking: () => import("../subgroup/ranking"),
        // rankFive: () => import("../subgroup/rankFive"),
        // system: () => import("../subgroup/system"),
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
.el-header{
    height: 70px!important;
    padding: 0;
}
.el-aside{
    width: 16%!important;
    min-height: calc(100vh - 70px);
    background: #001529;
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
    background: #284867;
    cursor: pointer;
    img{
        position: relative;
        top: 3px;
        margin-right: 3px;
        height: 20px;
        width: 20px;
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
.navMain{
    padding-top: 20px;
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
    max-height: 825px;
    overflow: auto;
}
// .el-menu-item.is-active{
//     background: transparent;
// }
</style>