<template>
    <div id="echartBox" ref="echartBox">
    </div>
</template>
<script>
    const echarts = require('echarts');
    export default {
        name: "echartBox",
        data() {
            return {
                city: [{
                        name: "杭州市",
                        value: "1.0",
                        num:"40",
                    },
                    {
                        name: "宁波市",
                        value: "2.3",
                        num:"30",
                    },
                    {
                        name: "温州市",
                        value: "2.5",
                        num:"35",
                    },
                    {
                        name: "绍兴市",
                        value: "3.2",
                        num:"20",
                    },
                    {
                        name: "湖州市",
                        value: "3.5",
                        num:"23",
                    },
                    {
                        name: "嘉兴市",
                        value: "4.2",
                        num:"18",
                    },
                    {
                        name: "金华市",
                        value: "0.2",
                        num:"33",
                    },
                    {
                        name: "衢州市",
                        value: "0.8",
                        num:"37",
                    },
                    {
                        name: "台州市",
                        value: "1.4",
                        num:"25",
                    },
                    {
                        name: "丽水市",
                        value: "2.5",
                        num:"22",
                    },
                    {
                        name: "舟山市",
                        value: "2.9",
                        num:"21",
                    }
                ]
            }
        },
        props:{
            parentTo:Object
        },
        mounted() {
            let parent=this.parentTo;
            this.$refs.echartBox.style.width="100%";
            this.$refs.echartBox.style.height=parent.height;
            var time=parent.time,
                color=parent.color,
                name=parent.name,
                data=parent.data,
                type=parent.type;
            if(type=="map"){
                this.echartMapShow();
            }else if(type=="line"){
                let lists=this.parentTo.valueList;
                let series=[];
                for(let i=0;i<lists.length;i++){
                    let _list=lists[i]
                    let obj={
                        name:name[i],
                        data: data[i],
                        type: _list,
                        lineStyle:{
                            color:color[i]
                        }
                    }
                    series.push(obj);
                }
                this.echartLineShow(time,color,name,series);
            }else if(type=="barLine"){
                let lists=this.parentTo.valueList;
                let series=[];
                for(let i=0;i<lists.length;i++){
                    let _list=lists[i];
                    let obj={}
                    if(_list=="bar"){
                        obj={
                            name:name[i],
                            data: data[i],
                            type: _list,
                            barGap:0,
                            barWidth:20,
                            yAxisIndex: 1,
                            lineStyle:{
                                color:color[i]
                            }
                        }
                    }else if(_list=="line"){
                        obj={
                            name:name[i],
                            data: data[i],
                            type: _list,
                            lineStyle:{
                                color:color[i],
                                type:"dashed"
                            }
                        }
                    }else if(_list=="lineArea"){
                        obj={
                            name:name[i],
                            data: data[i],
                            type: "line",
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color:  color[i]
                                    },
                                    {
                                        offset: 1, color: "#fff"
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                            yAxisIndex: 1,
                            lineStyle:{
                                color:color[i]
                            }
                        }
                    }
                    series.push(obj);
                }
                this.echartBarShow(time,name,color,series);
            }else if(type=="barX"){
                let lists=this.parentTo.valueList;
                let series=[];
                for(let i=0;i<lists.length;i++){
                    let _list=lists[i];
                    let obj={
                        // name:name[i],
                        data: data[i],
                        type: _list,
                        barWidth:15,
                        lineStyle:{
                            color:color[i]
                        }
                    }
                    series.push(obj);
                }
                this.echartBarXShow(time,color,series)
            }else if(type=="circle"){
                let lists=this.parentTo.time;
                let series=[];
                for(let i=0;i<lists.length;i++){
                    let _list=lists[i];
                    let obj={value:data[i],name:_list,itemStyle:{color:color[i]}}
                    series.push(obj);
                }
                this.echartCircle(time,color,series)
            }else if(type=="barLineT"){
                let lists=this.parentTo.valueList;
                let series=[];
                for(let i=0;i<lists.length;i++){
                    let _list=lists[i];
                    let obj={}
                    if(_list=="bar"){
                        var _data=data[i],
                            $data=[];
                        for(let j=0;j<time.length;j++){
                            let _obj={
                                name:time[j],
                                value:_data[j],
                                borderWidth:40,
                                itemStyle:{
                                    color:color[j]
                                }
                            }
                            $data.push(_obj)
                        }
                        obj={
                            data: $data,
                            type: _list,
                            barGap:0,
                            barWidth:20,
                            yAxisIndex: 1,
                            lineStyle:{
                                color:color[i]
                            }
                        }
                    }else if(_list=="line"){
                        obj={
                            name:name[i],
                            data: data[i],
                            type: _list,
                            lineStyle:{
                                color:color[i]
                            }
                        }
                    }else if(_list=="lineArea"){
                        obj={
                            name:name[i],
                            data: data[i],
                            type: "line",
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color:  color[i]
                                    },
                                    {
                                        offset:0.5,color:"#e8736f"
                                    },
                                    {
                                        offset: 1, color: "#fff"
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                            yAxisIndex: 1,
                            lineStyle:{
                                color:color[i]
                            }
                        }
                    }
                    series.push(obj);
                }
                this.echartBarShow(time,name,color,series);
            }
        },
        methods: {
            /**
             * @饼图
             */
            echartCircle(time,color,series){
                var echartBox = echarts.init(this.$refs.echartBox);
                var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    grid:{
                        top:10,
                        left:120,
                        right:50,
                        bottom:15,
                    },
                    color:color,
                    legend: {
                        orient: 'vertical',
                        right: 10,
                        top:15,
                        align:"left",
                        padding:60,
                        itemGap:15,
                        data: time
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['35%', '60%'],
                            center: ['30%','50%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '16',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: series
                        }
                    ]
                };
                echartBox.setOption(option)
            },
            /**
             * @X轴柱状图
             */
            echartBarXShow(time,color,series){
                var echartBox = echarts.init(this.$refs.echartBox);
                var option = {
                    grid:{
                        top:10,
                        left:120,
                        right:50,
                        bottom:15,
                    },
                    color:color,
                    legend: {
                        show:true,
                        icon:"circle",
                        data: name,
                        bottom:0
                    },
                    xAxis: {
                        show:false,
                        type: 'value',
                    },
                    yAxis:[
                        {
                            type: 'category',
                            data: time,
                            inverse:true,
                            axisLine:{
                                show:false
                            },
                            axisTick:{
                                show:false
                            }
                        }
                    ],
                    series: series
                };
                echartBox.setOption(option)
            },
            /**
             * @柱状图
             */
            echartBarShow:function(time,name,color,series){
                var echartBox = echarts.init(this.$refs.echartBox);
                var option = {
                    grid:{
                        top:40,
                        left:50,
                        right:50,
                        bottom:50,
                    },
                    color:color,
                    legend: {
                        show:true,
                        data: name,
                        top:0,
                        right:50,
                        textStyle:{
                            color:"#fff"
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: time,
                        axisLabel:{
                            color:"#fff"
                        }
                    },
                    yAxis:[
                        {
                            type: 'value',
                            name: '不良率',
                            interval:1,
                            axisLabel: {
                                formatter: '{value} %'
                            }
                        },
                        {
                            type: 'value',
                            show:false,
                            name: '不良余额',
                            // interval:100,
                            axisLabel: {
                                formatter: '{value}'
                            }
                        },
                    ],
                    series: series
                };
                echartBox.setOption(option)
            },
            /**
             * @折线图
             */
            echartLineShow:function(time,color,name,series){
                var echartBox = echarts.init(this.$refs.echartBox);
                var option = {
                    grid:{
                        top:40,
                        left:40,
                        right:30,
                        bottom:60,
                    },
                    color:color,
                    legend: {
                        show:true,
                        icon:"circle",
                        fontSize:12,
                        data: name,
                        bottom:10
                    },
                    xAxis: {
                        type: 'category',
                        data: time
                    },
                    yAxis:{
                        type: 'value',
                        name: '不良率',
                        axisLabel: {
                            formatter: '{value} %'
                        }
                    },
                    series: series
                };
                echartBox.setOption(option)
            },
            /**
             * @地图统计图
             */
            echartMapShow: function () {
                var yData = [];
                var barData = [];
                for (var i = 0; i < this.city.length; i++) {
                    var data = this.city[i]
                    barData.push(data);
                    yData.push(i + data.name);
                };
                var echartBox = echarts.init(this.$refs.echartBox);
                var option = {
                    tooltip: {
                        show: true,
                        formatter: function (params) {
                            return params.name + '<br>不良率：' + params.data['value'] + '%<br>不良余额：'+params.data['num']
                        },
                    },
                    visualMap: {
                        min: 0,
                        max: 100,
                        right: 50,
                        bottom: 40,
                        showLabel: !0,
                        text: ["标识不良率"],
                        pieces: [{
                            gt: 4.0,
                            lt: 5.0,
                            label: "4.0 - 5.0 %",
                            color: "#b33d26"
                        }, {
                            gt: 3.0,
                            lt: 4.0,
                            label: "3.0 - 4.0 %",
                            color: "#ff6a4d"
                        }, {
                            gt: 2.0,
                            lt: 3.0,
                            label: "2.0 - 3.0 %",
                            color: "#ff9985"
                        }, {
                            gt: 1.0,
                            lt: 2.0,
                            label: "1.0 - 2.0 %",
                            color: "#ffbfa6"
                        }, {
                            gt: 0,
                            lt: 1.0,
                            label: "0 - 1.0 %",
                            color: "#ffe5da"
                        }],
                    },
                    geo: {
                        map: "zhejiang",
                        roam: !1,
                        scaleLimit: {
                            min: 1,
                            max: 2
                        },
                        zoom: 1,
                        label: {
                            normal: {
                                show: !0,
                                fontSize: "14",
                                color: "rgba(0,0,0,0.7)"
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: "rgba(0, 0, 0, 0.2)"
                            },
                            emphasis: {
                                areaColor: "#f2d5ad",
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                borderWidth: 0
                            }
                        }
                    },
                    series: [{
                        name: "不良率",
                        type: "map",
                        geoIndex: 0,
                        data: barData
                    }]
                };
                echartBox.setOption(option)
            },
        }
    }
</script>

<style lang="scss" scoped>
    #echartBox {
        // width: 500px;
        // height: 700px;
    }
</style>