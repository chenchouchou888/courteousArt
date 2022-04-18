<template>
<el-container>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)" >
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-s-custom"></i>药品列表</template>   
     <el-menu-item-group>
       
          <el-menu-item v-for="item of result " @click="show(item)">{{item.drugName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
  
    </el-menu>
  </el-aside>

   <el-main class="show">
   </el-main>
  </el-container>
  
</template>

<script>
import info from './drug.json'
  export default {
    
    data() {
      return {
        info:info,
Selection:{}
      }
    },

    methods: {
      show(item){
        // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.querySelector('.show'));
      

      // 指定图表的配置项和数据
      var option = {
        title: {
          text:  item.drugName + " : " + item.drugInfos[0].drugSp
        },
        tooltip: {},
        legend: {
          data: ['消耗量']
        },
        xAxis: {
          data: item.drugInfos.map((item)=>item.day)
        },
        yAxis: {},
        series: [
          {
            name: '消耗量',
            type: 'line',
            data: item.drugInfos.map((item,i,arr)=>item.drugConsume)
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      }
    },
    computed:{
      result(){
        let result={}
        this.info.forEach(element => {
          if(!result[element.drugName]){
            let obj = {
              drugName:element.drugName,
              drugInfos:[element]
            }
            result[element.drugName] = obj
          }
          else{
            result[element.drugName].drugInfos.push(element)
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
    width:100rem;
    height:40rem;
  }

</style>

