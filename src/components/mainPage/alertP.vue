<template>
    <div id="alertP">
        <div class="searchBox">
            <div class="searchList">
                <ul>
                    <li>项目类型：<input type="text"></li>
                    <li>所属镇街：<input type="text"></li>
                    <li>项目年份：<input type="text"></li>
                    <li>项目阶段：<input type="text"></li>
                    <li>投资部门：<input type="text"></li>
                </ul>
            </div>
            <div class="searchBtn">
                <button><img src="../../images/search.png">搜索</button>
            </div>
        </div>
        <div class="searchData">
            <ul class="searchName">
                <li><input type="text" placeholder="请输入项目名称"><span><img src="../../images/searchH.png" alt=""></span></li>
                <li><input type="text" placeholder="请输入项目业主"><span><img src="../../images/searchH.png" alt=""></span></li>
            </ul>
            <div class="listMian">
                <ul>
                    <li v-for="(list,index) in 5" :key="index">
                        <div>
                            <span class="name" @click="toGo()">人才用房建设</span>
                            <button v-if="index==0">前置审批</button>
                            <button v-if="index==1">项目审批</button>
                            <button v-if="index==2">项目在建</button>
                            <button v-if="index==3">验收存档</button>
                            <button v-if="index==4">验收存档</button>
                        </div>
                        <div>
                            <span>项目业主：融盛集团</span>
                            <span>投资主管部门：组织人力社保局</span>
                        </div>
                        <div>
                            <span>项目类别：其他</span>
                            <span>建设性质：新建类</span>
                            <span>投资金额：100万元</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="pageBox">
                <!-- @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4" -->
                <el-pagination
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'alertP',
    data(){
        return{
        }
    },
    created(){
    },
    components: {

    },
    methods: {
        /**
         * @详情
         */
        toGo(){
            this.$router.push({path:'/mainPage/alertDetail'})
        },
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
         * @返回上一页
         */
        goToBack:function(){
            
        },
    }
}
</script>
<style lang="scss" scoped>
#alertP{
    width: 100%;
    text-align: left;
    font-size:14px;
    .searchData{
        margin-top: 30px;
        background: #fff;
        border-radius: 5px;
        .pageBox{
           line-height: 50px;
            padding-right: 40px;
            text-align: right;
        }
        .listMian{
            padding: 15px;
            height: 48.5vh;
            overflow: auto;
            ul{
                li{
                    padding:15px 10px;
                    margin-top:20px;
                    border:1px solid #e4e4e4;
                    div{
                        text-align: left;
                        line-height: 30px;
                        &:not(:first-child){
                            span{
                                display: inline-block;
                                width:16%;
                            }
                        }
                        span{
                            margin-left: 15px;
                        }
                        button{
                            height: 24px;
                            padding: 0 15px;
                            margin-left: 30px;
                            line-height: 24px;
                            background: #66ccff;
                            // color: #fff;
                            cursor: pointer;
                            border: 1px solid #66ccff;
                            border-radius: 3px;
                            outline: none;
                        }
                        .name{
                            font-weight: bold;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        ul.searchName{
            padding: 20px 25px;
            overflow: hidden;
            border-bottom: 1px solid #e4e4e4;
            li{
                float: left;
                line-height: 50px;
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
    }
    .searchBox{
        width: calc(100% - 30px);
        height: 100px;
        padding: 30px 15px;
        background: #fff;
        font-size: 14px;
        border-radius: 5px;
        div{
            float: left;
            &.searchBtn{
                display: flex;
                width: 15%;
                height: 100%;
                justify-items: center;
                align-items: center;
                text-align: center;
                button{
                    width: 80px;
                    height: 32px;
                    line-height: 32px;
                    background: #ff733e;
                    color: #fff;
                    cursor: pointer;
                    border: 1px solid #ff733e;
                    border-radius: 3px;
                    outline: none;
                    &:hover{
                        background: #ff4202;
                    }
                    img{
                        position: relative;
                        width: 20px;
                        height: 20px;
                        top: 5px;
                    }
                }
            }
            &.searchList{
                width: 85%;
                ul{
                    li{
                        float: left;
                        width: 28%;
                        height: 50px;
                        text-align:left;
                        line-height: 50px;
                        padding-left: 5%;
                        input{
                            height: 22px;
                            padding-left: 3px;
                            border:1px solid #e4e4e4;
                            outline: none;
                            border-radius: 3px;
                        }
                    }
                }
            }
        }
    }
}
</style>