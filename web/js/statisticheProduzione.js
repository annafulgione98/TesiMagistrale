function openPage(evt, pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentverticale");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinksPage");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpenPage").click();

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['60', '120', '180', '240', '300', '360'],
        datasets: [{
            label: 'Ritrovati',
            data: [10, 3, 11, 7, 23, 50],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 2,
            fill: false,
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Simulazione'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Minuti'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Ritrovati'
                }
            }]
        }
    }
});

var ctx = document.getElementById("produzioneAziende").getContext("2d");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data:{
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [
        {
            label: "Grimaldi Nocciola & Co.",
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            data: [2.510, 2.600, 2.650, 2.510, 2.410, 2.700],
            fill: false,
        },
        {
            label: "Azienda Agricola De Vita",
            backgroundColor: 'rgba(54, 162, 235, 1)',
            borderColor:  'rgba(54, 162, 235, 1)',
            data: [2.530, 2.410,2.600,2.510,2.690,2.900],
            fill: false,
        },
        {
            label: "La Bottega della Nocciola",
            backgroundColor:  'rgba(255, 206, 86, 1)',
            borderColor:  'rgba(255, 206, 86, 1)',
            data: [2.600,2.700,2.750,2.830,2.900,2.950],
            fill: false,
        },
        {
            label: "Biochemie International srl",
            backgroundColor:  'rgba(75, 192, 192, 1)',
            borderColor:  'rgba(75, 192, 192, 1)',
            data: [2.510, 2.900,2.500,2.540,2.800,2.600],
            fill: false,
        }]
        },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Azienda'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Anno'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Produzione'
                }
            }]
        }
    }
});