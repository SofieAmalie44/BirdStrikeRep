// main.js
const counterForBirdStrikes = document.querySelector("#counter-bird-strike")

// Counter for bird strikes
const birdCounter = function () {
    let sum = 0;
    let speed = 80
    const countUpTo = 267278;

    const countWithDelay = (currentCount) => {
        // Adjust the speed as needed
        if (currentCount > 100 && currentCount < 200) {
            speed = 20;
        } else if (currentCount > 200 && currentCount < 300) {
            speed = 10;
        } else if (currentCount > 300) {
            speed = 4;
        }
        setTimeout(() => {
            counterForBirdStrikes.innerText = currentCount;

            if (currentCount < countUpTo) {
                countWithDelay(currentCount + 1);
            }
        }, speed);
    };
    countWithDelay(sum);
}

birdCounter();

// Bird Strikes Per Year Chart

// Format Data
let arrayWithYears = [];
let arrayWithDataForYears = [];
function formatDataForYear () {

    yearData.forEach((year) => {
        arrayWithYears.push(year.INCIDENT_YEAR)
        arrayWithDataForYears.push(year.amount)
    })
}
formatDataForYear()

const ctx = document.querySelector('#chart1');

// Create Chart
new Chart(ctx, {
    type: 'line',
    data: {
        labels: arrayWithYears,
        datasets: [{
            label: 'Bird strikes',
            data: arrayWithDataForYears,
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
                color: 'white'
            },
            legend: {
                fontColor: "white",
                position: 'right'
            }
        },
        scales: {
            y: {
                ticks: {
                    color: 'white',

                },
                color: "white",
                beginAtZero: true,
                grid: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'count of bird strikes',
                    color: 'white'
                }
            },
            x: {
                ticks: {
                    color: 'white',
                    callback: function(val, index) {
                        // Hide every 2nd tick label
                        return index % 2 === 0 ? this.getLabelForValue(val) : '';
                    },
                },
                grid: {
                    display: false
                }
            }
        },
    }
});


// Bird Strikes Per Month

// Format Data
let arrayWithXAndYDataPointsForPerMonth = [];
function formatPerMonthData () {

    dataPerMonth.forEach((month, index) => {
        let monthAsObject = {};
        monthAsObject.x = index
        monthAsObject.y = month.amount
        arrayWithXAndYDataPointsForPerMonth.push(monthAsObject)
    })
}
formatPerMonthData();

// Create Animation For Chart
const ctx2 = document.querySelector('#chart2');

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

// Creation of Chart
new Chart(ctx2, {
    scaleFontColor: "white",
    type: 'line',
    data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAJ', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [{
            label: 'Bird strikes',
            data: arrayWithXAndYDataPointsForPerMonth,
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
                color: 'white'
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
                    text: 'count of bird strikes',
                    color: 'white'
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

// Humans Killed Chart
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
