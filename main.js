// main.js
const birdCounter = function () {
    let sum = 0;
    const paragraph = document.createElement("p");
    document.querySelector("#counterDiv").appendChild(paragraph);

    const countUpTo = 267278;

    const countWithDelay = (currentCount) => {
        setTimeout(() => {
            paragraph.textContent = currentCount;

            if (currentCount < countUpTo) {
                countWithDelay(currentCount + 1);
            }
        }, 80); // Adjust the delay time (in milliseconds) as needed
    };

    countWithDelay(sum);
}

birdCounter();

console.log(data);

const ctx = document.querySelector('#chart1');

const totalDuration = 2000;
const delayBetweenPoints = totalDuration / 4;

const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
    x: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: NaN, // the point is initially skipped
        delay(ctx) {
            if (ctx.type !== 'data' || ctx.xStarted) {
                return 0;
            }
            ctx.xStarted = true;
            return ctx.index * delayBetweenPoints;
        }
    },
    y: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctx) {
            if (ctx.type !== 'data' || ctx.yStarted) {
                return 0;
            }
            ctx.yStarted = true;
            return ctx.index * delayBetweenPoints;
        }
    }
};

const counts = data.map(item => item["count(INDEX_NR)"]);

        new Chart(ctx, {
            scaleFontColor: "white",
            type: 'line',
            data: {
                labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAJ', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                datasets: [{
                    label: 'Bird strikes',
                    data: [{x: 0, y: 8928},{x:1, y: 8598},{x:2, y:13234},{x:3,y:19166},{x:4,y:26518},{x:5,y:22704},{x:6,y:34950},{x:7,y:37395},{x:8,y:34890},{x:9,y:32876},{x:10,y:18141},{x:11,y:10469}],
                    borderWidth: 4,
                    borderColor: "#70db70"
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Bird strikes per month',
                        position: 'top',
                    },
                    legend: {
                        fontColor: "white",
                        position: 'right'
                    }
                },
                scales: {
                    y: {
                        ticks: {
                            color: 'white'
                        },
                        beginAtZero: true,
                        grid: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'count of bird strikes'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            display: false
                        }
                    }
                },
                animation,
                interaction: {
                    intersect: false
                }
            }
        });

        // second chart

/*
const ctx2 = document.querySelector('#chart2');

const countsFatality = killedData.map(item => item["count(NR_FATALITIES)"]);


new Chart(ctx2, {
    type: 'line',
    data: {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAJ', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [{
        label: 'number of fatalities',
        data: countsFatality,
        borderWidth: 4,
        borderColor: "#70db70",

    }]
},
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Fatalities per month',
                position: 'top',
            },
            legend: {
                position: 'right'
            }
        },
        scales: {
            y: {
                ticks: {
                    color: 'white'
                },
                beginAtZero: true,
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'count of fatalities'
                }
            },
            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    display: false
                }
            }
        }
    }
});

*/
console.log(yearData);
console.log(yearData);

const ctx2 = document.querySelector('#chart2');

const counts2 = yearData.map(item => item["count(INDEX_NR)"]);

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Bird strikes',
            data: [2105, 2510, 2650, 2624, 2704, 2821, 3025, 3554, 3802, 5113, 6002, 5822, 6216, 5990, 6559, 7235, 7248, 7735, 7624, 9495, 9899, 10109, 10909, 11408, 13688, 13778, 13333, 14738, 16205, 17344, 11622, 15593, 8362],
            borderWidth: 4,
            borderColor: "#70db70"
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Bird strikes per year',
                position: 'top',
            },
            legend: {
                fontColor: "white",
                position: 'right'
            }
        },
        scales: {
            y: {
                ticks: {
                    color: 'white'
                },
                color: "white",
                beginAtZero: true,
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'count of bird strikes'
                }
            },
            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    display: false
                }
            }
        },
    }
});