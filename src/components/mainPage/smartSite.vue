<template>
    <div id="smartSite">
        <div class="smartHome" v-if="smartShow==0">
            <div class="searchName">
                <input type="text" placeholder="请输入项目名称"><span><img src="../../images/searchH.png" alt=""></span>
            </div>
            <ul>
                <li v-for="index in 12" :key="index">
                    <div class="count">
                        <div><img  src="../../images/u26.png" alt=""></div>
                        <div>
                            <span>苏孟乡、汤溪镇、罗埠镇高标准</span><br>
                            <span>农田建设项目（一期、二期）</span>
                        </div>
                    </div>
                    <div class="look" @click="smartShow=1">
                        查看
                    </div>
                </li>
            </ul>
            <div class="pageBox">
                <el-pagination
                    :page-sizes="[12, 24, 36, 48]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </div>
        </div>
        <div class="lookShow" v-if="smartShow==1">
            <div class="backBox">
                <img  @click="smartShow=0" src="../../images/back.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"smaerSite",
    data(){
        return{
            smartShow:0,
        }
    },
    created(){

    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
#smartSite{
    min-height: 85vh;
    padding-bottom: 1vh;
    background: #fff;
    .lookShow{
        .backBox{
            padding: 15px 40px;
            text-align: left;
            img{
                width: 35px;
                height: 35px;
                cursor: pointer;
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
    ul{
        height: 650px;
        overflow: auto;
        padding-top: 30px;
        li{
            float: left;
            width: 22%;
            margin-left: 35px;
            margin-top: 25px;
            border: 1px solid #e4e4e4;
            &>div{
                padding: 25px;
                overflow: hidden;
                &.count{
                    padding: 35px 25px;
                    border-bottom: 1px solid #e4e4e4;
                }
                &.look{
                    cursor: pointer;
                }
                &>div{
                    float: left;
                    font-size: 14px;
                    margin-left: 20px;
                    text-align: left;
                    img{
                        width: 40px;
                        height: 40px;
                    }
                }
            }
        }
    }
    .pageBox{
        margin-top: 15px;
        padding-right: 55px;
        padding-bottom: 15px;
        text-align: right;
    }
}
</style>