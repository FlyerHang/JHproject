<template>
    <div id="archives">
        <div class="searchBox">
            <div class="searchList">
                <ul>
                    <li>
                        <span>项目年份：</span>
                        <select name="year" id="">
                            <option value="2020">2020年</option>
                            <option value="2019">2019年</option>
                            <option value="2018">2018年</option>
                            <option value="2017">2017年</option>
                            <option value="2016">2016年</option>
                        </select>
                    </li>
                    <li>
                        <span>建设性质：</span>
                        <select name="type" id="">
                            <option value="0">新建类项目</option>
                            <option value="1">续建类项目</option>
                        </select>
                    </li>
                    <li>
                        <span>所属镇街：</span>
                        <select name="type" id="">
                            <option value="0">江南街道</option>
                            <option value="1">秋滨街道</option>
                            <option value="2">三江街道</option>
                            <option value="3">西关街道</option>
                            <option value="4">汤溪镇</option>
                            <option value="5">罗埠镇</option>
                            <option value="4">洋埠镇</option>
                            <option value="5">苏孟乡</option>
                        </select>
                    </li>
                    <li>
                        <span>项目阶段：</span>
                        <select name="type" id="">
                            <option value="0">指标政策处理</option>
                            <option value="1">立项阶段</option>
                            <option value="2">审价招投标</option>
                            <option value="3">统计入库</option>
                            <option value="4">项目开工</option>
                            <option value="5">竣工验收</option>
                        </select>
                    </li>
                    <li>
                        <span>责任部门：</span>
                        <select name="type" id="">
                            <option value="0">建设局</option>
                            <option value="1">财务局</option>
                        </select>
                    </li>
                    <li>
                        <span>所属板块：</span>
                        <select name="type" id="">
                            <option value="0">金西新区平台</option>
                            <option value="1">健康生物产业园平台</option>
                            <option value="2">转型升级示范园平台</option>
                            <option value="3">新能源汽车产业园平台</option>
                            <option value="4">信息科创走廊平台</option>
                            <option value="5">湖海塘新区平台</option>
                        </select>
                    </li>
                    <li>
                        <span>项目业主：</span>
                        <select name="type" id="">
                            <option value="0">融盛集团</option>
                            <option value="1">国资公司</option>
                        </select>
                    </li>
                    <li>
                        <span>重点项目：</span>
                        <select name="type" id="">
                            <option value="1">是</option>
                            <option value="0">否</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div class="searchBtn">
                <button><img src="../../images/search.png">搜索</button>
            </div>
        </div>
        <div class="searchData">
            <div class="searchName">
                <input type="text" placeholder="请输入项目名称"><span><img src="../../images/searchH.png" alt=""></span>
                <button class="blueBtn" @click="exportF()">数据导出</button>
            </div>
            <div class="dataList">
                <ul>
                    <li v-for="(list,index) in 5" :key="index">
                        <div>
                            <span class="name" @click="toGo()">金华区块土石整理工程</span>
                            <button v-if="index==0">竣工验收</button>
                            <button v-if="index==1">审价投标</button>
                            <button v-if="index==2">项目立项</button>
                            <button v-if="index==3">统计图库</button>
                            <button v-if="index==4">竣工验收</button>
                        </div>
                        <div>
                            <span>项目业主：融盛集团</span>
                            <span>投资主管部门：组织人力社保局</span>
                            <span>项目总用地：100亩</span>
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
                <el-pagination
                    :page-sizes="[10, 20, 30, 40]"
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
    name: 'archives',
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
         * @分页
         */
        handleCurrentChange(){

        },
        handleSizeChange(){

        },
        currentPage4(){

        },
        /**
         * @导出文件
         */
        exportF(){
            window.location.href="http://www.jangle.xyz/bsAttachmentCtrl/downLoadByYan.ctrl?id=6489";
        },
        toGo(){
            this.$router.push({path:'/mainPage/detailC'})
        }
    }
}
</script>
<style lang="scss" scoped>
.searchData{
    width: calc(100% - 30px);
    margin-top: 20px;
    padding: 20px 15px;
    background: #fff;
    font-size: 14px;
    border-radius: 5px;
    .pageBox{
        padding-right: 40px;
        padding-top: 15px;
        text-align: right;
    }
    .dataList{
        padding: 15px;
        height: 47vh;
        overflow: auto;
        ul{
            li{
                padding:10px;
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
                        height: 28px;
                        padding: 0 15px;
                        margin-left: 30px;
                        line-height: 28px;
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
    .searchName{
        height: 50px;
        line-height: 50px;
        text-align: left;
        padding-bottom: 15px;
        border-bottom:1px solid #e4e4e4;
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
        button{
            float: right;
            margin-right: 9%;
            padding: 0 20px;
            height: 30px;
            margin-top: 15px;
            background: #0049D4;
            color: #fff;
            border-radius: 5px;
            cursor: pointer;
            border: 1px solid #0049d4;
            outline: none;
        }
    }
}
.searchBox{
    width: calc(100% - 30px);
    height: 150px;
    padding: 20px 15px 0 15px;
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
                    height: 46px;
                    text-align:left;
                    line-height: 50px;
                    padding-left: 5%;
                    select{
                        width: 160px;
                        height: 24px;
                    }
                }
            }
        }
    }
}
</style>