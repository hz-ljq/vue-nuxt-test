// let line1Option = {
//   grid: {
//     top: '32%',
//     left: '4%',
//     right: '7%',
//     bottom: '6%',
//     containLabel: true
//   },
//   tooltip: {
//     show: 'true',
//     trigger: 'axis',
//     axisPointer: {  坐标轴指示器，坐标轴触发有效
//       type: 'line'  默认为直线，可选为：'line' | 'shadow'
//     }
//      formatter: (param) => {
//         console.log(param);
//        return param[0].name + ':<br/>' + param[0].value;
//      }
//   },
//   xAxis: {
//     type: 'category',
//     show: true,
//     data: [
//       '6.6',
//       '6.7',
//       '6.8',
//       '6.9',
//       '6.10',
//       '6.11',
//       '6.12'
//     ],
//     axisLabel: {
//       textStyle: {
//         color: 'rgba(214, 218, 221, 1)'
//       }
//     },
//     axisTick: {
//       show: false
//     },
//     axisLine: {
//       show: false
//     }
//   },
//   yAxis: {
//     show: true,
//     type: 'value',
//      name: '单位         ',
//     nameTextStyle: {
//       color: 'rgba(145, 145, 153, 1)'
//     },
//     axisLabel: {
//       color: 'rgba(145, 145, 153, 1)'
//     },
//     splitLine: {
//       show: true,
//       lineStyle: {
//         color: 'rgba(145, 145, 153, 0.5)'
//       }
//     },
//     axisLine: {
//       show: false
//     },
//     axisTick: {
//       show: false
//     }
//   },
//   color: ['#e54035'],
//   series: [
//     {
//       symbol: 'circle',
//       symbolSize: 8,
//       name: '车流量',
//       type: 'line',
//       yAxisIndex: 0,
//       data: [
//         35.6,
//         25.6,
//         95.6,
//         75.6,
//         15.6,
//         39.6,
//         55.6
//       ],
//       itemStyle: {
//         normal: {
//           borderWidth: 5,
//           color: {
//             colorStops: [
//               {
//                 offset: 0,
//                 color: '#74d7f4'
//               }, {
//                 offset: 0.5,
//                 color: '#5aff83'
//               }, {
//                 offset: 1,
//                 color: '#f7fa42'
//               }
//             ]
//           }
//         }
//       }
//     }
//   ]
// }

let line2Option = {
  grid: {
    top: '32%',
    left: '4%',
    right: '7%',
    bottom: '6%',
    containLabel: true
  },
  tooltip: {
    show: 'true',
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'line' // 默认为直线，可选为：'line' | 'shadow'
    }
    // formatter: (param) => {
    //    console.log(param);
    //   return param[0].name + ':<br/>' + param[0].value;
    // }
  },
  xAxis: {
    type: 'category',
    show: true,
    data: [
      '6.6',
      '6.7',
      '6.8',
      '6.9',
      '6.10',
      '6.11',
      '6.12'
    ],
    axisLabel: {
      textStyle: {
        color: 'rgba(214, 218, 221, 1)'
      }
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    }
  },
  yAxis: {
    show: true,
    type: 'value',
    // name: '单位         ',
    nameTextStyle: {
      color: 'rgba(145, 145, 153, 1)'
    },
    axisLabel: {
      color: 'rgba(145, 145, 153, 1)'
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(145, 145, 153, 0.5)'
      }
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  color: ['#e54035'],
  series: [
    {
      symbol: 'circle',
      symbolSize: 8,
      name: '数量',
      type: 'line',
      yAxisIndex: 0,
      data: [
        35.6,
        25.6,
        95.6,
        75.6,
        15.6,
        39.6,
        55.6
      ],
      itemStyle: {
        normal: {
          borderWidth: 5,
          color: {
            colorStops: [
              {
                offset: 0,
                color: '#74d7f4'
              }, {
                offset: 0.5,
                color: '#5aff83'
              }, {
                offset: 1,
                color: '#f7fa42'
              }
            ]
          }
        }
      }
    }
  ]
}

let line3Option = {
  grid: {
    top: '32%',
    left: '4%',
    right: '7%',
    bottom: '6%',
    containLabel: true
  },
  tooltip: {
    show: 'true',
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'line' // 默认为直线，可选为：'line' | 'shadow'
    }
    // formatter: (param) => {
    //    console.log(param);
    //   return param[0].name + ':<br/>' + param[0].value;
    // }
  },
  xAxis: {
    type: 'category',
    show: true,
    data: [
      '6.6',
      '6.7',
      '6.8',
      '6.9',
      '6.10',
      '6.11',
      '6.12'
    ],
    axisLabel: {
      textStyle: {
        color: 'rgba(214, 218, 221, 1)'
      }
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    }
  },
  yAxis: {
    show: true,
    type: 'value',
    // name: '单位         ',
    nameTextStyle: {
      color: 'rgba(145, 145, 153, 1)'
    },
    axisLabel: {
      color: 'rgba(145, 145, 153, 1)'
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(145, 145, 153, 0.5)'
      }
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  color: ['#e54035'],
  series: [
    {
      symbol: 'circle',
      symbolSize: 8,
      name: '车流量',
      type: 'line',
      yAxisIndex: 0,
      data: [
        35.6,
        25.6,
        95.6,
        75.6,
        15.6,
        39.6,
        55.6
      ],
      itemStyle: {
        normal: {
          borderWidth: 5,
          color: {
            colorStops: [
              {
                offset: 0,
                color: '#74d7f4'
              }, {
                offset: 0.5,
                color: '#5aff83'
              }, {
                offset: 1,
                color: '#f7fa42'
              }
            ]
          }
        }
      }
    }
  ]
}

let barOption = {
  grid: {
    left: '6%',
    right: '10%',
    top: '24%',
    bottom: '7%',
    containLabel: true
  },
  tooltip: {
    show: 'true',
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  visualMap: {
    show: false,
    min: 0,
    max: 11,
    dimension: 0,
    inRange: {
      color: ['#5395d8', '#6ff9f6', '#7ee29c']
    }
  },
  yAxis: {
    name: '千辆         ',
    nameTextStyle: {
      color: '#8093ad',
      fontSize: 16
    },
    type: 'value',
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      color: '#8093ad',
      fontSize: 16
    },
    axisLine: {
      show: false
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: 'rgba(142, 145, 150, 0.5)'
      }
    }
  },
  xAxis: {
    type: 'category',
    // offset: 11,
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: true,
      color: '#dfe8f8',
      fontWeight: 800,
      fontSize: 16
    },
    data: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ]
  },
  series: [
    {
      name: '数量',
      type: 'bar',
      xAxisIndex: 0,
      yAxisIndex: 0,
      label: {
        show: false
      },
      itemStyle: {
        normal: {
          show: true,
          shadowBlur: 20,
          shadowColor: 'rgba(0, 0, 0, 1)',
          barBorderRadius: 50,
          borderWidth: 0,
          borderColor: '#333'
        }
      },
      // barGap:'20%',
      // barCategoryGap:'0%',
      barWidth: '54%',
      data: [
        120,
        132,
        101,
        20,
        132,
        10,
        200,
        156,
        301,
        47,
        90,
        82
      ]
    }
  ]
}
let onlineOption = {
  grid: {
    top: '30%',
    left: '4%',
    right: '7%',
    bottom: '6%',
    containLabel: true
  },
  tooltip: {
    show: 'true',
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  visualMap: {
    show: false,
    min: 1,
    max: 36,
    dimension: 0,
    inRange: {
      color: ['#5395d8', '#6ff9f6', '#7ee29c']
    }
  },
  yAxis: {
    name: '',
    // nameTextStyle: {
    //   color: '#8093ad',
    //   fontSize: 16
    // },
    type: 'value',
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      color: '#8093ad',
      fontSize: 12
    },
    axisLine: {
      show: false
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: 'rgba(142, 145, 150, 0.5)'
      }
    }
  },
  xAxis: {
    type: 'category',
    // offset: 11,
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: true,
      color: '#dfe8f8',
      // fontWeight: 800,
      fontSize: 12
    },
    data: [
      1,
      '北京',
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      '深圳',
      11,
      12,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ]
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 50,
      minSpan: 25
    }
    // {
    //   start: 0,
    //   end: 10,
    //   handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
    //   handleSize: '60%',
    //   handleStyle: {
    //     color: 'blue',
    //     shadowBlur: 3,
    //     shadowColor: 'rgba(0, 0, 0, 0.6)',
    //     shadowOffsetX: 2,
    //     shadowOffsetY: 2
    //   }
    // }
  ],
  series: [
    {
      name: '上线率',
      type: 'bar',
      xAxisIndex: 0,
      yAxisIndex: 0,
      label: {
        show: false
      },
      itemStyle: {
        normal: {
          show: true,
          shadowBlur: 20,
          shadowColor: 'rgba(0, 0, 0, 1)',
          barBorderRadius: 50,
          borderWidth: 0,
          borderColor: '#333'
        }
      },
      // barGap:'20%',
      // barCategoryGap:'0%',
      barWidth: 10,
      data: [
        120,
        132,
        101,
        20,
        132,
        10,
        200,
        156,
        301,
        47,
        90,
        82,
        120,
        132,
        101,
        20,
        132,
        10,
        200,
        156,
        301,
        47,
        90,
        82,
        120,
        132,
        101,
        20,
        132,
        10,
        200,
        156,
        301,
        47,
        90,
        82
      ]
    }
  ]
}

let top5Option = {
  grid: {
    left: '40%',
    right: '20%',
    top: '23%',
    bottom: '8%',
    containLabel: true
  },
  tooltip: {
    show: 'true',
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  xAxis: {
    type: 'value',
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: '#fff'
      }
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'category',
    // offset: 11,
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false,
      color: 'rgba(204, 205, 208, 1)',
      fontWeight: 800,
      fontSize: 12
    },
    data: ['船员1船员1船员1', '船员1船员2222222船员1', '船员3', '船员4', '船员5']
  },
  series: [
    {
      name: '数量',
      type: 'bar',
      label: {
        show: true,
        position: 'right',
        color: 'rgba(204, 205, 208, 1)',
        fontWeight: 800,
        fontSize: 12
      },
      itemStyle: {
        normal: {
          show: true,
          color: {
            type: 'bar',
            colorStops: [
              {
                offset: 0,
                color: 'rgba(80, 220, 228, 0)' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'rgba(80, 220, 228, 1)' // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
          barBorderRadius: [
            0, 50, 50, 0
          ],
          borderWidth: 0,
          borderColor: '#333'
        }
      },
      // barGap:'20%',
      // barCategoryGap:'0%',
      barWidth: '52%',
      data: [120, 132, 101, 222, 190]
    }
  ]
}

let pieOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  series: [
    {
      name: '占比',
      type: 'pie',
      radius: '55%',
      center: [
        '50%', '60%'
      ],
      data: [
        {
          value: 335,
          name: '非现告警',
          itemStyle: {
            normal: {
              color: '#2dfefe'
            }
          }
        }, {
          value: 210,
          name: '现场检查',
          itemStyle: {
            normal: {
              color: '#1371f9'
            }
          }
        }
      ],
      roseType: 'angle',
      label: {
        formatter: function(param) {
          // console.log(param);
          return `{a|${param.name}}\n{b|${param.value}}`
          // return '{a|' + param.name + '}\n{b|' + param.value +'}'
        },
        rich: {
          a: {
            color: 'white',
            fontSize: 16,
            lineHeight: 20,
            fontWeight: 600
          },
          b: {
            color: '#fecb2a',
            fontSize: 36,
            lineHeight: 45,
            fontWeight: 600,
            fontFamily: 'DIN Condensed'
          }
        }
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: '#4c9ca5'
          },
          smooth: 0.2,
          length: 20,
          length2: 50
        }
      }
    }
  ]
};

let areaOption = {
  color: [
    'rgba(71, 241, 210, 1)', 'rgba(203, 68, 250, 1)', 'rgba(27, 168, 252, 1)'
  ],
  tooltip: {
    show: true,
    trigger: 'axis'
  },
  legend: {
    top: 18,
    right: 32,
    itemGap: 4,
    itemWidth: 8.5,
    itemHeight: 8.5,
    orient: 'vertical',
    icon: 'circle',
    data: [
      {
        name: '危险品车',
        textStyle: {
          fontFamily: 'SourceHanSansSC',
          fontSize: 12,
          fontWeight: 600,
          color: 'rgba(71, 241, 210, 1)'
        }
      }, {
        name: '旅游用车',
        textStyle: {
          fontFamily: 'SourceHanSansSC',
          fontSize: 12,
          fontWeight: 600,
          color: 'rgba(203, 68, 250, 1)'
        }
      }, {
        name: '三线客车',
        textStyle: {
          fontFamily: 'SourceHanSansSC',
          fontSize: 12,
          fontWeight: 600,
          color: 'rgba(27, 168, 252, 1)'
        }
      }
    ]
  },
  grid: {
    left: '10%',
    right: '8%',
    top: '38%',
    bottom: '8%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12'
    ],
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisLabel: {
      margin: 10,
      color: '#dfe8f8',
      fontFamily: 'SourceHanSansSC',
      fontSize: 14
    }
  },
  yAxis: {
    name: '千辆       ',
    nameTextStyle: {
      color: '#8093ad',
      fontSize: 16
    },
    type: 'value',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(142, 145, 150, 0.5)'
      }
    },
    axisLabel: {
      margin: 5,
      color: '#8093ad',
      fontFamily: 'SourceHanSansSC',
      fontSize: 14
    }
  },
  series: [
    {
      name: '危险品车',
      type: 'line',
      showSymbol: false,
      hoverAnimation: false,
      smooth: true,
      data: [
        21,
        38,
        12,
        67,
        67,
        66,
        69,
        43,
        61,
        18,
        59,
        56
      ],
      // itemStyle: {
      //   color: '#00ffff'
      // },
      lineStyle: {
        color: 'rgba(71, 241, 210, 1)',
        width: 1.5
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(71, 241, 210, 1)'
            }, {
              offset: 1,
              color: 'rgba(71, 241, 210, 0)'
            }
          ]
        },
        opacity: 1
      }
    }, {
      name: '旅游用车',
      type: 'line',
      showSymbol: false,
      hoverAnimation: false,
      smooth: true,
      data: [
        41,
        13,
        38,
        57,
        17,
        46,
        77,
        83,
        61,
        58,
        79,
        20
      ],
      // itemStyle: {
      //   color: '#0196ee'
      // },
      lineStyle: {
        color: 'rgba(203, 68, 250, 1)',
        width: 1.5
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(203, 68, 250, 1)'
            }, {
              offset: 1,
              color: 'rgba(203, 68, 250, 0)'
            }
          ]
        },
        opacity: 1
      }
    }, {
      name: '三线客车',
      type: 'line',
      showSymbol: false,
      hoverAnimation: false,
      smooth: true,
      data: [
        11,
        43,
        38,
        57,
        47,
        46,
        67,
        83,
        61,
        58,
        29,
        49
      ],
      // itemStyle: {
      //   color: '#0196ee'
      // },
      lineStyle: {
        color: 'rgba(27, 168, 252, 1)',
        width: 1.5
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(27, 168, 252, 1)'
            }, {
              offset: 1,
              color: 'rgba(27, 168, 252, 0)'
            }
          ]
        },
        opacity: 1
      }
    }
  ]
}

let yxjcOption = {
  grid: {
    top: '28%',
    left: '7%',
    right: '7.8%',
    bottom: '10%',
    containLabel: true
  },
  tooltip: {
    show: 'true',
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'line' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    show: true,
    data: [
      '周一',
      '周二',
      '周三',
      '周四',
      '周五',
      '周六',
      '周日'
    ],
    axisLabel: {
      textStyle: {
        color: 'rgba(214, 218, 221, 1)'
      }
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(6, 67, 95, 1)'
      }
    }
  },
  yAxis: {
    show: true,
    type: 'value',
    name: '',
    nameTextStyle: {
      color: 'rgba(145, 145, 153, 1)'
    },
    axisLabel: {
      color: 'rgba(145, 145, 153, 1)'
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(6, 67, 95, 1)'
      }
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(6, 67, 95, 1)'
      }
    },
    axisTick: {
      show: false
    }
  },
  series: [
    {
      symbol: 'circle',
      symbolSize: 8,
      name: '昨日',
      type: 'line',
      data: [
        25.6,
        15.6,
        45.6,
        35.6,
        55.6,
        89.6,
        95.6
      ],
      itemStyle: {
        normal: {
          borderWidth: 5,
          color: {
            colorStops: [
              {
                offset: 0,
                color: 'rgba(108, 244, 238, 1)'
              }, {
                offset: 1,
                color: 'rgba(232, 240, 63, 1)'
              }
            ]
          }
        }
      },
      areaStyle: {
        normal: {
          // shadowColor: 'rgba(145, 206, 136, 0.7)',
          // shadowBlur: 100,
          // shadowOffsetY: -30,
          color: {
            colorStops: [
              {
                offset: 0,
                color: 'rgba(108, 244, 238, 0.3)'
              }, {
                offset: 1,
                color: 'rgba(232, 240, 63, 0.3)'
              }
            ]
          }
        }
      }
    }
  ]
}

export {
  // line1Option,
  line2Option,
  line3Option,
  barOption,
  top5Option,
  pieOption,
  areaOption,
  yxjcOption,
  onlineOption
};
