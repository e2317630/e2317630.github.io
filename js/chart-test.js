console.log("chart-test.jsを読み込みました。")

const data1 = {
    labels: [
        '眠い',
        'おなかすいた',
        '夢小説を読みたい',
        '働きたくない',
        '死についての思考',
        'なめやがる相手への恨み'
    ],
    datasets: [{
        label: 'キチガイポニーの心の中',
        data: [30, 20, 20, 15, 10, 5],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(134, 255, 86)',
            'rgb(255, 205, 86)',
            'rgb(86, 255, 204)',
            'rgb(92, 86, 255)'

        ],
        hoverOffset: 4
    }]
};

const config1 = {
    type: 'doughnut',
    data: data1,
};

const ctx1 = document.getElementById("myChart1");
const myChart1 = new Chart(
    ctx1,
    config1,
)


