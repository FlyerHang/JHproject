<template>
    <div id="map">
        <div class="main">
            <div class="back" @click="backHome()"></div>
        </div>
    </div>
</template>

<script>
 export default {
    name: 'map',
    data(){
        return{
            
        }
    },
    components: {

    },
    methods: {
        backHome(){
            this.$router.push({path:'/navigation'})
        }
    }
}  
</script>

<style lang="scss" scoped>
#map{
    width: 100%;
    height: 100vh;
    background: url("../images/map.png");
    background-size: 100% 100%;
}
.back{
    float: right;
    height: 30px;
    width: 70px;
    margin-right: 15px;
    margin-top: 5px;
    cursor: pointer;
}
</style>