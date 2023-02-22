import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react"


const ChartContainer = (props) => {
    const { chartRef, setChartInfo } = props

    console.log(chartRef, 'useref info');
    //Interface Highcharts.Options 
    const [lineOptions] = useState({
        plotOptions: {
            series: {
                point: {
                    events: {
                        mouseOver: function () {
                            setChartInfo({
                                name: this.series.name,
                                x: this.x,
                                y: this.y
                            });
                        },
                        mouseOut: function () {
                            setChartInfo(null);
                        }
                    }
                }
            }
        },
        series: [
            {
                data: [2, 7, 5, 1, 4]
            },
            {
                data: [4, 3, 5, 6, 2, 3]
            }
        ]
    })

    const series = [{
        name: "Gases",
        data: [{
            name: 'Argon',
            y: 0.9,
            color: '#3498db'
        },
        {
            name: 'Nitrogen',
            y: 78.1,
            color: '#9b59b6'
        },
        {
            name: 'Oxygen',
            y: 20.9,
            color: '#2ecc71'
        },
        {
            name: 'Trace Gases',
            y: 0.1,
            color: '#f1c40f'
        }]
    }]

    const [barOption] = useState({
        chart: {
            type: 'pie',
            renderTo: 'atmospheric-composition'
        },
        title: {
            verticalAlign: 'middle',
            floating: true,
            text: 'Earth\'s Atmospheric Composition',
            style: {
                fontSize: '10px',
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    format: '{point.name}: {point.percentage:.1f} %'
                },
                innerSize: '70%'
            }
        },
        series: series
    })

    const [guageOptions] = useState({
        chart: {
            type: 'solidgauge',
            height: '110%',
            // events: {
            //     render: renderIcons
            // }
        },

        title: {
            text: 'Activity',
            style: {
                fontSize: '24px'
            }
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
            valueSuffix: '%',
            pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
            positioner: function (labelWidth) {
                return {
                    x: (this.chart.chartWidth - labelWidth) / 2,
                    y: (this.chart.plotHeight / 2) + 15
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }, { // Track for Exercise
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.color(Highcharts.getOptions().colors[1])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }, { // Track for Stand
                outerRadius: '62%',
                innerRadius: '38%',
                backgroundColor: Highcharts.color(Highcharts.getOptions().colors[2])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: 'Move',
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '112%',
                innerRadius: '88%',
                y: 80
            }]
        }, {
            name: 'Exercise',
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '87%',
                innerRadius: '63%',
                y: 65
            }]
        }, {
            name: 'Stand',
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '62%',
                innerRadius: '38%',
                y: 50
            }]
        }]
    })

    return (
        <>
            <HighchartsReact ref={chartRef} highcharts={Highcharts} options={lineOptions} />
            <HighchartsReact ref={chartRef} highcharts={Highcharts} options={barOption} />
            {/* <HighchartsReact ref={chartRef} highcharts={Highcharts} options={guageOptions} /> */}
        </>
    )
}

export default ChartContainer
