(function selectChart(){
    
    const dcrPrice = document.getElementById('dcr-price');
    const ticketPrice = document.getElementById('ticket-price');

    const chartPriceSelector = document.getElementById('myChart');
    const chartTicketPriceSelector = document.getElementById('chartTicketPrice');

    const optionWrapperOne = document.getElementById('option-wrapper-1');
    const optionWrapperTwo = document.getElementById('option-wrapper-2');
    
    
    ticketPrice.addEventListener('click', () =>  {
        ticketPrice.style.background = '#3D5873';
        ticketPrice.style.color = '#F9FAFA';
    
        dcrPrice.style.background = 'transparent';
        dcrPrice.style.color = '#091440';

        chartPriceSelector.style.display = 'none';
        chartTicketPriceSelector.style.display = 'block';

        optionWrapperOne.style.display = 'none';
        optionWrapperTwo.style.display = 'flex';
    });
    
    dcrPrice.addEventListener('click', () =>  {
        dcrPrice.style.background = '#3D5873';
        dcrPrice.style.color = '#F9FAFA';
    
        ticketPrice.style.background = 'transparent';
        ticketPrice.style.color = '#091440';

        
        chartPriceSelector.style.display = 'block';
        chartTicketPriceSelector.style.display = 'none';

        optionWrapperOne.style.display = 'flex';
        optionWrapperTwo.style.display = 'none';
    });
}());


(function(){
    const chartButton = document.getElementById('chart-button');
    const tableButton = document.getElementById('table-button');

    const smoothButton = document.getElementById('smooth-button');
    const steppedButton = document.getElementById('stepped-button');

    tableButton.addEventListener('click', () => {

        chartButton.classList.remove('active');
        tableButton.classList.add('active');

    });

    chartButton.addEventListener('click', () => {
        chartButton.classList.add('active');
        tableButton.classList.remove('active');
    });
    
    smoothButton.addEventListener('click', () => {
        smoothButton.classList.add('active');
        steppedButton.classList.remove('active');
    });

    steppedButton.addEventListener('click', () => {
        smoothButton.classList.remove('active');
        steppedButton.classList.add('active');
    });

}());




(function chartPrice(){
    let ctx = document.getElementById("myChart");
    let mychart = new Chart(ctx, {
        type: "line",
        data:{
            labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
            datasets: [{
                label: 'DCR Price', 
                data: [50,35,48,13,25,27,28,35,37,42,53,65,78,60,85,70,75,73,91,61,65,70,75,80,81,82,99,98,96,80,86,70,75,70,65,50,80,85,90,99],
                backgroundColor: [
                    'hsl(228,75%,14%, 0.2)'
                ],
                borderColor: [
                    '#091440'
                ],
                borderWidth: [2]
            }],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}());

(function chartTicketPrice(){
    let ctz = document.getElementById("chartTicketPrice");
    let chart = new Chart(ctz, {
        type: "line",
        data:{
            labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
            datasets: [{
                label: 'Price',  
                data: [50,35,48,13,25,27,28,35,37,42,53,65,78,60,85,70,75,73,91,61,65,70,75,80,81,82,99,98,96,80,86,70,75,70,65,50,80,85,90,99],
                backgroundColor: [
                    'hsl(228,75%,14%, 0.2)'
                ],
                borderColor: [
                    '#091440'
                ],
                borderWidth: [2]
            }, {
                label: 'Tickets Bought',  
                data: [35,22,25,25,27,37,25,26,24,21,19,29,24,31,21,25,23,25,21,29,32,19,25,29,31,35,38,29,21,19,18,17,16,15,14,22,24,25,26,27,29],
                borderColor:[
                    '#091440'
                ],
                backgroundColor: [
                    'hsl(228,75%,14%, 0.2)'
                ],
            }],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
        
    });
}());

(function (){
    let cty = document.getElementById("chartRewards");
    var myChart = new Chart(cty, {
        type: 'pie',
        data: {
          labels: ['OK', 'WARNING', 'CRITICAL', 'UNKNOWN'],
          datasets: [{
            label: '# of Tomatoes',
            data: [12, 19, 3, 5],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
             //cutoutPercentage: 40,
          responsive: false,
      
        }
      });
}());