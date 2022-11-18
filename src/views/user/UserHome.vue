<template>
  <div class="container">
      <div class="search">
        <h1>Dashboard</h1>
        <input type="text" v-model="search" class="searchTerm" 
        placeholder="Search... "/>
      </div>
      <div class="balance">
        <div class="total-balance">
          <span class="material-icons">wallet</span>

          <div class="content-total-balance">
            <p>Total balance</p>
            <p style="font-size:24px; color:#FFFFFF;">$5240.21</p>
          </div>
        </div>
        <div class="total-invested">
          <span class="material-icons">wallet</span>

          <div class="content-total-invested">
            <p>Total invested</p>
            <p style="font-size:24px; color:#000000;">$2400.00</p>
          </div>
        </div>
        <div class="total-cash">
          <span class="material-icons">wallet</span>
          <div class="content-total-cash">
            <p>Total cash</p>
            <p style="font-size:24px; color:#000000;">$1150.00</p>
          </div>
        </div>
      </div>
      <div>
        <canvas id="myChart" width="400" height="400" class="chart"></canvas>
      </div>
    
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
    name: 'UserHome',
    components: {    
  }, 
  data() {
    return {
      search: '',
      contents: []
    }
  },
  methods: {

  },
  computed: {
   
  },
  mounted() {
    const ctx = document.getElementById('myChart');

    const data = {
    labels: [
      'stocks',
      'cash flow',
      'crypto'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [100, 50, 70],
      backgroundColor: [
        '#C8EE44',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

    const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data, 
  });

  myChart;
  }
    
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/global";

    .container {
        display: flex;
        flex-direction: column;
        margin: 10px auto;
        h1 {
            margin-top: 10px;  
            margin-bottom: 20px;
         }
      .search {
        
        .searchTerm {
          padding: 5px;
          border: 1px solid rgb(30 60 90 / 10%);
          border-radius: $borderRadius;
          width: 500px;
          &:focus-visible {
            outline-color: $cor2
          }
        }
        
      }

      .balance {
        display: flex;
        margin: 40px auto;
        
        .total-balance {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 24px 20px;
          width: 222px;
          height: 105px;
          background: $colordashboardblack;
          border-radius: 10px; 

            span {
            color: $cor2;
          }
          
          
           .content-total-balance {

            p {
              font-family: $fontText;
              font-style: normal;
              font-weight: 400;
              font-size: 17px;
              line-height: 27px;
              margin-left: 30px;
              color: #929EAE;
            }
            
           }
        }
        .total-invested {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 24px 20px;
         
          width: 222px;
          height: 105px;
          margin-left: 30px;
          background: $colordashboardwhite;
          border-radius: 10px;
          
          
          
           .content-total-invested {

            p {
              font-family: $fontText;
              font-style: normal;
              font-weight: 400;
              font-size: 17px;
              line-height: 27px;
              margin-left: 30px;
              color: #929EAE;
            }
            
           }
        }
        .total-cash {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 24px 20px;
          margin-left: 30px;
          width: 222px;
          height: 105px;

          background: $colordashboardwhite;
          border-radius: 10px;

          
          
          
           .content-total-cash {

            p {
              font-family: $fontText;
              font-style: normal;
              font-weight: 400;
              font-size: 17px;
              line-height: 27px;
              margin-left: 30px;
              color: #929EAE;
            }
            
           }

        }
      }

      .chart {

        width: 400px !important;
        height: 400px !important;
        margin: 50px auto;
      }
    }

</style>