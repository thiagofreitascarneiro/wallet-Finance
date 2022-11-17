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
        <canvas id="myChart" width="400" height="400"></canvas>
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

    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
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
        margin-top: 40px;
        
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
    }

</style>