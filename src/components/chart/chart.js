import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

const Chart = (props) => {

    const dataSet = {
        labels: props
            .data
            .map(data => data.x),
        datasets: [
            {
                data: props
                    .data
                    .map(data => data.y),
                backgroundColor: props.fillColor,
                borderColor: props.lineColor,
                pointBackgroundColor: props.lineColor,
                pointBorderColor: props.lineColor
            }
        ]
    }
    const chartOptions = {
        legend: {
            display: false
        },
        scales: {
            xAxes: [
                {
                    type: "time",
                    time: {
                        unit: 'hour',
                        unitStepSize: 24,
                        round: 'hour',
                        tooltipFormat: "hA",
                        displayFormats: {
                            hour: 'MMM D'
                        }
                    },
                    ticks: {
                        callback: function (value, index, values) {
                            return props.unitX
                                ? value + props.unitX
                                : value;
                        }
                    }
                }
            ],
            yAxes: [
                {

                    scaleLabel: {
                        display: props.labelY
                            ? true
                            : false,
                        labelString: props.labelY
                            ? props.labelY
                            : null
                    },
                    ticks: {
                        callback: function (value, index, values) {
                            return props.unitY
                                ? value + props.unitY
                                : value;
                        }
                    }
                }
            ]
        }
    };

    return (<Line
        data={dataSet}
        width={props.width}
        height={props.height}
        options={chartOptions}/>);
}

export default Chart
