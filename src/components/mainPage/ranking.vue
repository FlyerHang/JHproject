<template>
    <div id="ranking">
        <div class="searchBox">
            <input type="text" placeholder="请输入项目名称"><span><img src="../../images/searchH.png" alt=""></span>
            <select name="" id="">
                <option value="0">请选择年度</option>
                <option value="2020">2020年</option>
                <option value="2019">2019年</option>
                <option value="2018">2018年</option>
                <option value="2017">2017年</option>
            </select>
        </div>
        <ul class="listBox">
            <li v-for="(list,index) in 6" :key="index">
                <div>排名:
                    <span v-if="index==0" class="font one">{{index+1}}</span>
                    <span v-if="index==1" class="font two">{{index+1}}</span>
                    <span v-if="index==2" class="font three">{{index+1}}</span>
                    <span v-if="index==3" class="font four">{{index+1}}</span>
                    <span v-if="index==4" class="font five">{{index+1}}</span>
                    <span v-if="index==5" class="font four">{{index+1}}</span>
                </div>
                <div class="bold">金华区块土石整理工程</div>
                <div>10，000万元</div>
                <div>2020-05 30</div>
                <div class="finally">
                    <div>建设进度：</div>
                    <div>
                        <div>已入库</div>
                        <div class="box">
                            <span class="fill" v-for="item in num[index]" :key="item+10"></span>
                            <span class="kong" v-for="value in 5-num[index]" :key="value+20"></span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="pageBox">
            <el-pagination
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name:"ranking",
    data(){
        return {
            num:[
                5,4,3,2,1,0
            ]
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
    }
}
</script>

<style lang="scss" scoped>
#ranking{
    text-align: left;
    background: #fff;
    .pageBox{
        line-height: 50px;
        padding-right: 40px;
        text-align: right;
    }
    .listBox{
        padding: 20px 30px;
        height: 70vh;
        overflow: auto;
        li{
            padding-left: 20px;;
            margin-top: 25px;
            line-height: 70px;
            overflow: hidden;
            border: 1px solid #e4e4e4;
            &>div{
                padding: 0 50px 0 0;
                float: left;
                &.finally{
                    &>div{
                        div.box{
                            position: relative;
                            left: -50px;
                            top: 15px;
                            span{
                                display: inline-block;
                                width: 20px;
                                height: 8px;
                                margin-left: 1px;
                                border: 1px solid #c9c9c9;
                                &.fill{
                                    background: #0066ff;
                                }
                            }
                        }
                    }
                }
                &.bold{
                    font-weight: bold;
                    font-size: 18px;
                }
                span{
                    &.font{
                        font-family: 'Lucida Handwriting kursiv', 'Lucida Handwriting';
                        font-style: italic;
                        font-size: 36px;
                        margin-left: 3px;
                        &.one{
                            color: #ffcc00;
                        }
                        &.two{
                            color:#9999ff
                        }
                        &.three{
                            color:#ccccff;
                        }
                        &.four{
                            color:#99cccc;
                        }
                        &.five{
                            color:#99cccc;
                        }
                    }
                }
                div{
                    display: inline-block;
                }
            }
        }
    }
    .searchBox{
            line-height: 50px;
            padding-top: 20px;
            select{
                width: 150px;
                margin-left: 30px;
                height: 28px;
                border:1px solid #e4e4e4;
            }
            input{
                height: 28px;
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
</style>