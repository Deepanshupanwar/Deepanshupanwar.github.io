const slider1 = document.getElementById("slider1");
const slidervalue = document.getElementById("contri");
slidervalue.innerHTML=slider1.value;
slider1.addEventListener("input" ,event =>{
    slidervalue.innerHTML=slider1.value;
})
const slider2 = document.getElementById("slider2");
const slider2value = document.getElementById("age");
slider2value.innerHTML=slider2.value;
slider2.addEventListener("input" ,event =>{
    slider2value.innerHTML=slider2.value;
})

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = google.visualization.arrayToDataTable([
          ['Genre', 'employer K 73,500', 'employee K 52,500', 'total interest K 244,313'],
          ['20', 10, 20, 30],
          ['', 15, 25, 35],
          ['25', 20, 30, 40],
          ['', 25,35 , 45],
          ['30', 30, 40, 50],
          ['', 35, 45, 55],
          ['35', 40, 50, 60],
          ['', 45, 55, 65],
          ['40', 50, 60, 70],
          ['', 55, 65, 75],
          ['60', 60, 70, 80],
          ['', 65, 75, 85],
          ['65', 70, 80, 90],
        ]);
  
        var options = {
          title: "Contributions Overtime",
          titleTextStyle: {
            fontSize: 20, // Custom font size for the title
            fontWeight: 'bold', // Custom font weight for the title
          },
          width: 830,
          height: 350,
          legend: { position: 'top', maxLines: 3 },
          isStacked: 'absolute', 
          orientation: 'horizontal', // Set the orientation to vertical
          colors: ['#0929fa', '#475def', '#9ca8f4'],
          vAxis: {
            ticks: [0, 100, 200, 300],
            gridlines: {
              color: 'transparent' // Make the gridlines transparent to hide them
            } // Custom Y-axis tick values
          },
        };
  
  

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

    
      google.charts.setOnLoadCallback(drawChart2);
      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          [,     11],
          [,      2],
        ]);

        var options = {
          colors: ['#29e1b3','#b6f5e5'],
          title:'Average',
          pieHole: 0.8,
          titleTextStyle: {
            fontSize: 18, // Custom font size for the title
            fontWeight: 'bold', // Custom font weight for the title
            color: '#3366cc', // Custom color for the title
          },
          pieSliceText: 'percentage', // Display percentage inside the pie slices
          pieSliceTextStyle: {
            color: 'black', // Custom color for the percentage text inside the pie slices
          },
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart1'));
        chart.draw(data, options);
        
      }
      google.charts.setOnLoadCallback(drawChart3);
      function drawChart3() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          [,     11],
          [,      1],
        ]);

        var options = {
          title:'Top',
          colors: ['#29e1b3','#b6f5e5'],
          pieHole: 0.8,
          titlePosition: 'bottom', 
          titleTextStyle: {
            fontSize: 18, // Custom font size for the title
            fontWeight: 'bold', // Custom font weight for the title
            color: '#3366cc', // Custom color for the title
          },
          pieSliceText: 'percentage', // Display percentage inside the pie slices
          pieSliceTextStyle: {
            color: 'black', // Custom color for the percentage text inside the pie slices
          },
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
        chart.draw(data, options);
      }
      google.charts.setOnLoadCallback(drawChart4);
      function drawChart4() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          [,     11],
          [,      6],
        ]);

        var options = {
          title:'Me',
          pieHole: 0.8,
          colors: ['#29e1b3', '#b6f5e5'],
          titlePosition: 'bottom', 
          titleTextStyle: {
            fontSize: 18, // Custom font size for the title
            fontWeight: 'bold', // Custom font weight for the title
            color: '#3366cc', // Custom color for the title
          },
          pieSliceText: 'percentage', // Display percentage inside the pie slices
          pieSliceTextStyle: {
            color: 'black', // Custom color for the percentage text inside the pie slices
          },
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart3'));
        chart.draw(data, options);
      }
