<template>
<el-container>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)" >
    <el-menu :default-openeds="['1', '3']">
      <el-menu-item @click="show(item)"><i class="el-icon-s-custom"></i>科室总表</el-menu-item>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-s-custom"></i>科室分表</template>   
     <el-menu-item-group>
       
          <el-menu-item v-for="item in deptResult" @click="departmentShow(item)">{{item.dept}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
  
    </el-menu>
  </el-aside>

  
     <el-main>
       <div class="show">
       </div>
       <div class="showtwo">
       </div>



     </el-main>
   
  </el-container>
  
</template>

<script>
import info from './dept.json'
import deptbox from './deptbox.json'
import deptnotbox from'./deptnotbox.json'
import hezhi from './hezhi.json'
  export default {
    data() {
      return {
        info:info,
        deptbox:deptbox,
        deptnotbox:deptnotbox,
        hezhi:hezhi,
        Selection:{}
      }
    },
    mounted(){
    }
    ,

    methods: {
      show(item){
        // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.querySelector('.show'));
      

      // 指定图表的配置项和数据
      var option = {
        title: {
          text:  '总表'
        },
        tooltip: {},
        legend: {
          data: ['种类数']
        },
        xAxis: {
          // data: item.drugInfos.map((item)=>item.drugname),
          data:this.name,
          overflow:'none',
          type:'category',
          axisLabel:{
            rotate:20
          }
        },
        yAxis: {
        },
        series: [
          {
            name: '种类数',
            type: 'bar',
            data: this.valuee
          },
          {
            data:this.valuee,
            type:'bar'
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      },
      departmentShow(item){
        // 基于准备好的dom，初始化echarts实例
      var myChart2 = echarts.init(document.querySelector('.showtwo'));
      var myChart = echarts.init(document.querySelector('.show'));
      let arr = item.infos
      let clay = this.hezhi.find((e)=>e.deptname == item.dept)
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: item.dept
         },
        tooltip: {},
        legend: {
          data: ['盒装','非盒装']
        },
        xAxis: {
          data:arr.map((item)=>item.time),
          overflow:'none',
          type:'category',
          axisLabel:{
            rotate:30
          }
        },
        yAxis: {
        },
        series: [
          {
            name: '盒装',
            type: 'bar',
            data: arr.map((item)=>item.boxnum)
          },
          {
            name:'非盒装',
            data: arr.map((item)=>item.notboxnum),
            type:'bar'
          }
        ]
      };
      var optiontwo = {
        title: {
          text: '种类分布'
         },
        tooltip: {},
        legend: {
          data: []
        },
        xAxis: {
          data:['盒','支','瓶','粒','袋','片','其他'],
          overflow:'none',
          type:'category',
          axisLabel:{
            rotate:30
          }
        },
        yAxis: {
        },
        series: [
          {
            type: 'bar',
            data: Object.values(clay).slice(1,Object.values(clay).length-1)
          }
          
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      myChart2.setOption(optiontwo)


      

      },
      unique(arr) {
   var newArr = [ arr[0] ]
   for (var i = 1; i < arr.length; i++) {
       if (newArr.indexOf(arr[i])===-1) {    // 或者使用数组的includes方法(但此方法不兼容IE)
           newArr.push(arr[i])
       }
   }
   return newArr
}
    },
    computed:{
      result(){
        let result={}
        this.info.forEach(element => {
          if(!result[element.deptname]){
            let obj = {
              deptname:element.deptname,
              drugInfos:[element.drugname]
            }
            result[element.deptname] = obj
          }
          else{
            //去重
            if(result[element.deptname].drugInfos.indexOf(element.drugname) == -1)
            {
            result[element.deptname].drugInfos.push(element.drugname)
            }
          }
        });
        return result

      },
      name(){
        let arr = []
        for(let item in this.result)
        {
          arr.push(item)
        }
        return arr

      },
      valuee(){
        let arr = []
        console.log(this.result)
        for(let item in this.result)
        {
          arr.push(this.result[item].drugInfos.length)
        }
        return arr
      },
      //整合科室+日期值 [deptname+day,deptname+day]
      deptall(){
        let arr = []
        const that = this
        const boxDepts = this.deptbox.map((item)=>item.deptname)
        const notboxDepts = this.deptnotbox.map((item)=>item.deptname)
        arr = this.unique(boxDepts.concat(notboxDepts))
        let result = []
        arr.forEach(element => {
          let resultElement  = {
            dept:element.split('2022/')[0],
            time:element.split('2022/')[1],
            boxnum:0,
            notboxnum:0
          }
          for(let i = 0;i<boxDepts.length;i++)
          {
            if(boxDepts[i]==element)
            {
              resultElement.boxnum = that.deptbox[i].categorynum
              break
            }
          }
           for(let i = 0;i<notboxDepts.length;i++)
          {
            if(notboxDepts[i]==element)
            {
              resultElement.notboxnum = that.deptnotbox[i].categorynum
              break
            }
          }
       
          result.push(resultElement)
          
        });
        return result//去重化
      },
      deptResult(){
        const arr = this.deptall
        let result = {}
        arr.forEach(element => {
          if(!result[element.dept])
          {
            let obj={
              dept:element.dept,
              infos:[element]
            }
            result[element.dept] = obj
          }
          else{
            result[element.dept].infos.push(element)
          }
        });
        console.log(result)
        return result
      }


    }
  }
</script>

<style lang="less" scoped>

  .el-container{
    margin-top: 5rem;
    width:113rem;
    height:60rem;
  }
  .show,.showtwo{
    width: 100% !important;
    height: 23rem;
  }

</style>
