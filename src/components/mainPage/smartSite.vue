<template>
    <div id="smartSite">
        <ul>
            <li>
                <div class="count">
                    <div><img src="../../images/u26.png" alt=""></div>
                    <div>
                        <span>苏孟乡、汤溪镇、罗埠镇高标准</span><br>
                        <span>农田建设项目（一期、二期）</span>
                    </div>
                </div>
                <div class="look">
                    查看
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"smaerSite",
    data(){
        return{

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
    ul{
        overflow: hidden;
        padding-top: 30px;
        li{
            float: left;
            width: 25%;
            margin-left: 30px;
            border: 1px solid #e4e4e4;
            &>div{
                padding: 25px;
                overflow: hidden;
                &.count{
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
                        width: 50px;
                        height: 50px;
                    }
                }
            }
        }
    }
}
</style>