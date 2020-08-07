<template>
    <div id="rankFive">
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
        <div class="navBox">
            <ul>
                <li :class="selLi==0?'select':''" @click="selLi=0">当前项目前五榜单</li>
                <li :class="selLi==1?'select':''" @click="selLi=1">当前项目后五榜单</li>
            </ul>
        </div>
        <ul class="listBox" v-if="selLi==0">
            <li v-for="(list,index) in 5" :key="index">
                <div>排名:
                    <span v-if="index==0" class="font one">{{index+1}}</span>
                    <span v-if="index==1" class="font two">{{index+1}}</span>
                    <span v-if="index==2" class="font three">{{index+1}}</span>
                    <span v-if="index==3" class="font four">{{index+1}}</span>
                    <span v-if="index==4" class="font five">{{index+1}}</span>
                </div>
                <div class="bold">金华区块土石整理工程</div>
                <div>10，000万元</div>
                <div>2020-05 30</div>
                <div class="finally">
                    <div>建设进度：</div>
                    <div>
                        <div>已入库</div>
                        <div class="box">
                            <span class="fill" v-for="index in 5-index" :key="index+10"></span>
                            <span class="kong" v-for="index in index++" :key="index+20"></span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="listBox" v-else>
            <li v-for="(list,index) in 5" :key="index">
                <div>排名:
                    <span v-if="index==0" class="font one">倒{{index+1}}</span>
                    <span v-if="index==1" class="font two">倒{{index+1}}</span>
                    <span v-if="index==2" class="font three">倒{{index+1}}</span>
                    <span v-if="index==3" class="font four">倒{{index+1}}</span>
                    <span v-if="index==4" class="font five">倒{{index+1}}</span>
                </div>
                <div class="bold">金华区块土石整理工程</div>
                <div>10，000万元</div>
                <div>2020-05 30</div>
                <div class="finally">
                    <div>建设进度：</div>
                    <div>
                        <div>已入库</div>
                        <div class="box">
                            <span class="fill" v-for="index in index" :key="index"></span>
                            <span class="kong" v-for="index in 5-index" :key="index"></span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"rankFive",
    data(){
        return {
            selLi:0,
        }
    },
    created(){

    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
#rankFive{
    text-align: left;
    background: #fff;
    .navBox{
        margin-top: 20px;
        ul{
            overflow: hidden;
            padding-left: 30px;
            li{
                float: left;
                padding: 20px 40px;
                cursor: pointer;
                &:hover{
                    color: #199ed8;
                }
                &.select{
                    color: #fff;
                    background: #199ed8;
                }
            }
        }
    }
    .pageBox{
        line-height: 50px;
        padding-right: 40px;
        text-align: right;
    }
    .listBox{
        padding: 20px 30px;
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