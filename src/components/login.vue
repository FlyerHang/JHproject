<template>
    <div id="login">
        <div class="mainBox">
            <div class="loginTitle"><img src="../images/loginLogo.png" alt=""></div>
            <div class="loginMain">
                <span><img src="" alt=""><input type="text" v-model="account"></span>
                <span><img src="" alt=""><input type="text" v-model="password"></span>
                <button class="loginTo" @click="loginToNav()">登录</button>
            </div>
            <div class="forget"><span></span>记住密码 <a href="#">忘记密码?</a></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data(){
        return{
            account:"",
            password:"",
        }
    },
    components: {

    },
    methods: {
        loginToNav(){
            this.$router.push({path:'/navigation'})
            // if(this.account==""){
            //     this.$layer.msg("请输入账号！",{time:2000})
            // }else if(this.password==""){
            //     this.$layer.msg("请输入密码！",{time:2000})
            // }else{
            //     alert("通过")
            // }
        }
    }
}
</script> 
<style lang="scss" scoped>
#login{
    width: 100%;
    height: 100vh;
    background: url("../images/loginBg.png");
}
.mainBox{
    position: fixed;
    height: 360px;
    width: 900px;
    padding: 20px;;
    left: calc(50% - 450px);
    top: calc(45% - 200px);
    // background: #fff;
}
.loginTitle{
    margin-top: 50px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
}
.loginTitle>img{
    width: 60%;
}
.loginMain{
    margin-top: 50px;
}
.loginMain>span:first-child{
    margin-right: 18px;
}
.loginMain>span>input{
    padding-left: 40px;
    width: 240px;
    height: 36px;
    border-radius: 3px;
    border:1px solid #123360;
}
.loginTo{
    position: relative;
    width: 130px;
    height: 40px;
    margin-left: 18px;
    top: 1px;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
    background: linear-gradient(to right,#00b1ff, #0068ff);
}
.forget{
    text-align: left;
    padding-left: 80px;
    margin-top: 10px;
    color: #0171f6;
}
.forget>a{
    margin-left: 5px;
    color: #0171f6;
}
</style>