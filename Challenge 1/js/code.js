 google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChartDonut);
google.charts.setOnLoadCallback(drawChartBar);
google.charts.setOnLoadCallback(drawChartGauge);
      function drawChartDonut() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Brandstof',     11],
          ['Snelheid',      2],
          ['Acceleratie',  2],
          ['G force', 2],
        ]);

        var options = {
          title: 'Voertuig informatie',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }    

    function drawChartBar() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Hoeveelheid", { role: "style" } ],
        ["Eten", 8.94, "#FFD15C"],
        ["Water", 10.49, "#5CB1FF"],
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Voorraden",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(view, options);
  }

function drawChartGauge() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Memory', 80],
          ['CPU', 55],
          ['Network', 68]
        ]);

        var options = {
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 13000);
        setInterval(function() {
          data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 5000);
        setInterval(function() {
          data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(data, options);
        }, 26000);
      }