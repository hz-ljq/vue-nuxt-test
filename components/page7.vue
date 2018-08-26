<template>
<div id="page7">
  <div class='clqk box-729-870'>
    <div class='title-prefix' />
    <div class='box-title'>两客一危车辆情况</div>

    <div class="left">
      <div class="image car1"></div>
      <div class="image car2"></div>
      <div class="image car3"></div>
    </div>

    <div class="right">
      <div class="item" v-for='(item, index) in cheliangqingkuang' :key='index'>
        <div class="title">{{item.title}}</div>
        <div class="line" />
        <div class="total">
          总数：
          <ICountUp class="number-font num1" :startVal="0" :endVal="item.total" :decimals="0" :duration="3" :options="option1" />
        </div>
        <div class="in-province">
          省内车辆：
          <ICountUp class="number-font num1" :startVal="0" :endVal="item.inProvince" :decimals="0" :duration="3" :options="option1" />
          <ICountUp class="number-font num2" :class="item.inProvinceRatio >= 0 ? 'red' : 'green'" :startVal="0" :endVal="item.inProvinceRatio" :decimals="0" :duration="3" :options="option2" />

          <div v-if='item.inProvinceRatio >= 0' class='arrow-up' />
          <div v-else class='arrow-down' />
        </div>
        <div class="to-province">
          外省入浙：
          <ICountUp class="number-font num1" :startVal="0" :endVal="item.toProvince" :decimals="0" :duration="3" :options="option1" />
          <ICountUp class="number-font num2" :class="item.toProvinceRatio  >= 0 ? 'red' : 'green'" :startVal="0" :endVal="item.toProvinceRatio" :decimals="0" :duration="3" :options="option2" />

          <div v-if='item.toProvinceRatio >= 0' class='arrow-up' />
          <div v-else class='arrow-down' />
        </div>
        <div class="rate">
          上线率：
          <ICountUp class="number-font num1" :startVal="0" :endVal="item.rate" :decimals="0" :duration="3" :options="option2" />
          <ICountUp class="number-font num2" :class="item.rateRatio >= 0 ? 'red' : 'green'" :startVal="0" :endVal="item.rateRatio" :decimals="0" :duration="3" :options="option2" />

          <div v-if='item.rateRatio >= 0' class='arrow-up' />
          <div v-else class='arrow-down' />
        </div>
      </div>
    </div>
  </div>

  <div id='map1-box' class='map1 box-1192-870'>
    <div id='map-big'></div>
    <div class='indi'>
      <div class='title'>两客一危总数</div>
      <ICountUp class="number-font num" :startVal="0" :endVal="totalNum" :decimals="0" :duration="3" :options="option1" />
      <div class='in-province'>
        省内运营
        <ICountUp class="number-font num" :startVal="0" :endVal="inProvince" :decimals="0" :duration="3" :options="option1" />辆
      </div>
      <div class='out-province'>
        省外运营
        <ICountUp class="number-font num" :startVal="0" :endVal="outProvince" :decimals="0" :duration="3" :options="option1" />辆
        <div class='masking' />
      </div>
      <div class='enter-province'>
        外省入浙
        <ICountUp class="number-font num" :startVal="0" :endVal="toProvince" :decimals="0" :duration="3" :options="option1" />辆
        <div class='masking' />
      </div>
    </div>
    <div class='shadow box-1192-870' />
  </div>
  <!-- <div class='map1-shadow box-1192-870' /> -->

  <!-- <div v-show='swiperFlag' id='map2-box' class='map2 box-790-438-left' @mouseenter="stopAutoplay" @mouseleave="startAutoplay"> -->
  <div id='map2-box' class='map2 box-790-438-left' @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
      <div class="swiper-wrapper">
        <!-- slides -->
        <div class="swiper-slide">
          <div id='map-small1' class='map-small1' />
          <div class='map-small1-title'>当前轨迹</div>
        </div>

        <div class="swiper-slide">
          <div class='info'>
            <div class='info1'>
              进站信息
            </div>
            <div class='info2'>
              权证信息
            </div>
            <div class='info3'>
              信息3
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div id='map-small2' class='map-small2'>
            map-small2
          </div>
          <div class='map-small2-info'>
            map-small2-info
          </div>
        </div>
        <div class="swiper-slide">
          <div class='videos'>
            video
            <video id="video1" class="video-js vjs-default-skin video-item" preload="auto">
              <source src="http://ivi.bupt.edu.cn/hls/cctv5.m3u8" type="application/x-mpegURL">
            </video>
            <video id="video2" class="video-js vjs-default-skin video-item" preload="auto">
              <source src="http://ivi.bupt.edu.cn/hls/cctv5.m3u8" type="application/x-mpegURL">
            </video>
          </div>
        </div>
      </div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>

    <div class='car-num'>浙A K5S17</div>
    <div class='shadow box-790-438-left-shadow' />
  </div>
  <!-- <div v-show='swiperFlag' class='map2-shadow box-790-438-left-shadow'/> -->

  <div class='yclb'>
    <div class='title-prefix' />
    <div class='box-title'>实时异常列表-旅游包车</div>

    <div class="list" @mouseenter="switchLoop('stop')"  @mouseleave="switchLoop('start')">
      <div class="list-items" id='list-items'>
        <div class='item' v-for='(item, index) in yichangList' :key='index'>
          <div class='col2' :title="item.content">{{item.content}}</div>
        </div>
      </div>
      <div v-if="yichangList.length > 14" class="list-items" id='list-items-copy'>
        <div class='item' v-for='(item, index) in yichangList' :key='index'>
          <div class='col2' :title="item.content">{{item.content}}</div>
        </div>
      </div>
    </div>

    <!-- <marquee direction="up" scrollamount="2" onmouseover="this.stop();" onmouseout="this.start()" class='list'>
      <div class='item' v-for='(item, index) in yichangList' :key='index'>
        <div class='col2' :title="item.content">{{item.content}}</div>
      </div>
    </marquee> -->
  </div>

  <div class='on-line'>
    <div class='title-prefix' />
    <div class='box-title'>省内两客一危车辆今日小时上线率</div>
    <div id='on-line-chart'></div>
  </div>
  <div class='seven'>
    <div class='title-prefix' />
    <div class='box-title'>两客一危GPS上线7日趋势图</div>
    <div id='seven-chart'></div>
  </div>

  <div class='dsfb'>
    <div class='title-prefix' />
    <div class='box-title'>两客一危车辆总数地市分布</div>
    <div id='dsfb-chart'></div>
  </div>

  <div class='lcjk box-790-438-right'>
    <div class='title-prefix' />
    <div class='box-title'>全管理流程监控</div>
    <div class='lcjk-image'>
      <div class='box1' id='btn-start1' :class="{active: activeBtn === 'btn-start1'}" @click="activeBtn='btn-start1'">开始
        <div class='number-font num'>3989</div>
      </div>
      <div class='box1 ' id='btn-yxjc' :class="{active: activeBtn === 'btn-yxjc'}" @click="activeBtn='btn-yxjc'">运行监测
        <div class='number-font num'>3989</div>
      </div>
      <div class='box1 ' id='btn-fxgj' :class="{active: activeBtn === 'btn-fxgj'}" @click="activeBtn='btn-fxgj'">非现告警
        <div class='number-font num'>3989</div>
      </div>
      <div class='box1 ' id='btn-xcjc' :class="{active: activeBtn === 'btn-xcjc'}" @click="activeBtn='btn-xcjc'">现场检查
        <div class='number-font num'>3989</div>
      </div>
      <div class='box2 ' id='btn-wxcl' :class="{active: activeBtn === 'btn-wxcl'}" @click="activeBtn='btn-wxcl'">无需处理
        <div class='number-font num'>3989</div>
      </div>
      <div class='box1 ' id='btn-zla' :class="{active: activeBtn === 'btn-zla'}" @click="activeBtn='btn-zla'">转立案
        <div class='number-font num'>3989</div>
      </div>
      <div class='box1 ' id='btn-llzg' :class="{active: activeBtn === 'btn-llzg'}" @click="activeBtn='btn-llzg'">勒令整改
        <div class='number-font num'>3989</div>
      </div>
      <div class='box1 ' id='btn-jycx' :class="{active: activeBtn === 'btn-jycx'}" @click="activeBtn='btn-jycx'">简易程序
        <div class='number-font num'>3989</div>
      </div>
      <div class='box1 ' id='btn-ybcx' :class="{active: activeBtn === 'btn-ybcx'}" @click="activeBtn='btn-ybcx'">一般程序
        <div class='number-font num'>3989</div>
      </div>
      <div class='box1 ' id='btn-zgjc' :class="{active: activeBtn === 'btn-zgjc'}" @click="activeBtn='btn-zgjc'">整改检查
        <div class='number-font num'>3989</div>
      </div>
      <div class='box1 ' id='btn-start2' :class="{active: activeBtn === 'btn-start2'}" @click="activeBtn='btn-start2'">开始
        <div class='number-font num'>3989</div>
      </div>

      <div class='image' />
    </div>
  </div>

  <div class='ydzs box-510-273'>
    <div class='title-prefix' />
    <div class='box-title'>各类车辆本年月度总数趋势图</div>
    <div id='ydzs-chart'></div>
  </div>
  <div class='jczb box-510-273'>
    <div class='title-prefix' />
    <div class='box-title'>近七日非现告警与现场检查占比</div>
    <div id='jczb-chart'></div>
  </div>
  <div class='yxjc box-510-273'>
    <div class='title-prefix' />
    <div class='box-title'>七日趋势图-运行监测</div>
    <div id='yxjc-chart'></div>
  </div>

  <div class='jryc box-729-870'>
    <div class='title-prefix' />
    <div class='box-title'>今日异常分类图</div>

    <div class="items">
      <div class="item">
        <div class="image car2"></div>

        <div class="title">三类以上班车异常</div>
        <ICountUp class="number-font num" :startVal="0" :endVal="2793" :decimals="0" :duration="3" :options="option1" />
        <div class="content">
          <div class="content-item" v-for="(item, index) in content1" :key='index'>
            <div class="name">{{item.name}}</div>
            <div class="number-font value">{{item.value}}</div>
            <div class="time">{{item.time}}</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="image car1"></div>

        <div class="title">旅游包车异常</div>
        <ICountUp class="number-font num" :startVal="0" :endVal="4393" :decimals="0" :duration="3" :options="option1" />
        <div class="content">
          <div class="content-item" v-for="(item, index) in content1" :key='index'>
            <div class="name">{{item.name}}</div>
            <div class="number-font value">{{item.value}}</div>
            <div class="time">{{item.time}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import './page7.scss'
// import Water from './page1-components/water.vue'
import echarts from 'echarts'
import {
  // line1Option,
  line2Option,
  // line3Option,
  barOption,
  areaOption,
  pieOption,
  yxjcOption,
  onlineOption
} from './page7-components/options'
import ICountUp from 'vue-countup-v2';
import axios from 'axios';

import 'video.js/dist/video-js.css'
import videojs from 'video.js'
import 'videojs-contrib-hls'

export default {
  name: 'page7',
  data() {
    return {
      // onlineOption: line1Option,
      onlineOption: onlineOption,
      sevenOption: line2Option,
      dsfbOption: barOption,
      ydzsOption: areaOption,
      jczbOption: pieOption,
      yxjcOption,

      totalNum: 4830,
      inProvince: 930,
      outProvince: 38290,
      toProvince: 23890,

      option1: {
        useEasing: true,
        useGrouping: false, // 是否使用千分位
        prefix: '', // 前缀
        suffix: '' // 后缀
      },
      option2: {
        useEasing: true,
        useGrouping: false, // 是否使用千分位
        prefix: '', // 前缀
        suffix: '%' // 后缀
      },

      activeBtn: '',

      content1: [{
        name: '年审过期1',
        value: '111',
        time: '20180101 15:35'
      }, {
        name: '年审过期2',
        value: '111',
        time: '20180101 15:35'
      }, {
        name: '年审过期3',
        value: '111',
        time: '20180101 15:35'
      }, {
        name: '年审过期4',
        value: '111',
        time: '20180101 15:35'
      }],

      cheliangqingkuang: [{
        title: '从事旅游的包车',
        total: 0,
        inProvince: 0,
        inProvinceRatio: 0,
        toProvince: 0,
        toProvinceRatio: 0,
        rate: 0,
        rateRatio: 0
      }, {
        title: '三类以上班线客车',
        total: 0,
        inProvince: 0,
        inProvinceRatio: 0,
        toProvince: 0,
        toProvinceRatio: 0,
        rate: 0,
        rateRatio: 0
      }, {
        title: '危险品专用车辆',
        total: 0,
        inProvince: 0,
        inProvinceRatio: 0,
        toProvince: 0,
        toProvinceRatio: 0,
        rate: 0,
        rateRatio: 0
      }],

      swiperOption: {
        loop: false,
        initialSlide: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        speed: 1000,
        autoplay: {
          delay: 10000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        allowTouchMove: false
      },

      yichangList: [],

      // markerInBigMap: null,

      timer: -1,

      loopTimer: -1,
      gap1: 0,
      gap2: 0

      // swiperFlag: true
    }
  },
  methods: {
    initVideo(url) {
      let opt = {
        bigPlayButton: false,
        textTrackDisplay: false,
        posterImage: true,
        errorDisplay: false,
        controlBar: true
      };
      videojs('video1', opt, function() {
        this.play();
      })
      videojs('video2', opt, function() {
        this.play();
      })
    },
    addGpsLayer(gpsData) {
      if (this.markerInBigMap) this.markerInBigMap.remove();

      if (this.bigMap.getLayer('gps-layer')) {
        console.log(13);
        this.bigMap.removeLayer('gps-layer');
      }
      if (this.bigMap.getSource('gps-source')) {
        console.log(23);
        this.bigMap.removeSource('gps-source');
      }
      let gpsSource = {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': []
        }
      };
      for (let x of gpsData) {
        if (x.lon && x.lat && x.no) {
          gpsSource.data.features.push({
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [x.lon, x.lat]
            },
            'properties': {
              '_carCode': x.no,
              // 'icon': 'marker-15-6',
              'color': 'yellow',
              '_lon': x.lon,
              '_lat': x.lat
            }
          });
        }
      }
      console.log(gpsSource.data.features.length);
      this.bigMap.addSource('gps-source', gpsSource);

      let gpsLayer = {
        'id': 'gps-layer',
        'type': 'symbol',
        'source': 'gps-source',
        'layout': {
          'icon-image': 'gps-icon',
          'icon-size': 1,
          'icon-optional': false,
          'icon-allow-overlap': false,
          'text-field': '{_carCode}',
          'text-size': 8,
          'text-offset': [0, 1],
          'text-anchor': 'top',
          'text-optional': false,
          'text-allow-overlap': false
        },
        'paint': {
          'text-color': {
            'type': 'identity',
            'property': 'color'
          },
          'icon-color': {
            'type': 'identity',
            'property': 'color'
          }
        }
      }

      this.bigMap.addLayer(gpsLayer);
    },

    startAutoplay(e) {
      // console.log('leave');
      // this.$refs.mySwiper.swiper.autoplay.start();
    },
    stopAutoplay(e) {
      // console.log('enter');
      // this.$refs.mySwiper.swiper.autoplay.stop();
    },

    initEcharts() {
      this.dsfbChart = echarts.init(document.getElementById('dsfb-chart'));
      // this.dsfbChart.setOption(this.dsfbOption);

      this.onlineChart = echarts.init(document.getElementById('on-line-chart'));
      this.onlineChart.setOption(this.onlineOption);

      this.sevenChart = echarts.init(document.getElementById('seven-chart'));
      // this.sevenChart.setOption(this.sevenOption);

      this.ydzsChart = echarts.init(document.getElementById('ydzs-chart'));
      // this.ydzsChart.setOption(this.ydzsOption);

      this.jczbChart = echarts.init(document.getElementById('jczb-chart'));
      this.jczbChart.setOption(this.jczbOption);

      this.jxjcChart = echarts.init(document.getElementById('yxjc-chart'));
      this.jxjcChart.setOption(this.yxjcOption);

      // this.dlysChart = echarts.init(document.getElementById('dlys-chart'));
      // this.dlysChart.setOption(this.dlysOption);
    },
    switchLoop(indi) {
      if (this.yichangList.length <= 14) return; // 条目数量少于14（list框的视口能容纳的最多条目数），不轮播；

      if (indi === 'start') {
        let offsetHeightTotal = document.getElementById('list-items').offsetHeight; // 获取所有条目的总高度；
        let offsetHeight = document.getElementById('list-items').getElementsByClassName('item')[0].offsetHeight; // 获取单个条目的高度；
        let timeStart = +new Date();
        // let intervalTime = 4000;
        let intervalTime = 50;

        clearInterval(this.loopTimer);
        this.loopTimer = setInterval(() => {
          let timeEnd = +new Date();
          let timeGap = timeEnd - timeStart;
          timeStart = timeEnd;

          this.gap1 -= timeGap / intervalTime * offsetHeight * 0.03; // 根据时间差计算具体的偏移量；
          this.gap2 -= timeGap / intervalTime * offsetHeight * 0.03;

          if (this.gap1 <= -offsetHeightTotal) {
            this.gap1 = offsetHeightTotal;
            document.getElementById('list-items').style.transform = `translateY(${this.gap1}px)`;
          } else {
            document.getElementById('list-items').style.transform = `translateY(${this.gap1}px)`;
          }
          if (this.gap2 <= -offsetHeightTotal * 2) {
            this.gap2 = 0;
            document.getElementById('list-items-copy').style.transform = `translateY(${this.gap2}px)`;
          } else {
            document.getElementById('list-items-copy').style.transform = `translateY(${this.gap2}px)`;
          }
        }, intervalTime);
      } else if (indi === 'stop') {
        clearInterval(this.loopTimer);
      }
    },
    getYichangListAndRender() {
      clearInterval(this.loopTimer);

      this.yichangList = [{
        content: '1【浙A524T7】【15:23】年审过期。当前位置：古墩路竞州路口'
      }, {
        content: '2【浙A524T7】【15:23】年审过期。当前位置：古墩路竞州路口11111111111111111111111111111111'
      }, {
        content: '3【浙A524T7】【15:23】年审过期。当前位置：古墩路竞州路口'
      }, {
        content: '4【浙A524T7】【15:23】年审过期。当前位置：古墩路竞州路口'
      }, {
        content: '5【浙A524T7】【15:23】年审过期。当前位置：古墩路竞州路口'
      }, {
        content: '6【浙A524T7】【15:23】年审过期。当前位置：古墩路竞州路口'
      }, {
        content: '7【浙A524T7】【15:23】年审过期。当前位置：古墩路竞州路口'
      }, {
        content: '8【浙A524T7】【15:23】年审过期。当前位置：古墩路竞州路口'
      }, {
        content: '9【浙A524T7】【15:23】年审过期。当前位置：古墩路竞州路口'
      }, {
        content: '10【浙A524T7】【15:23】年审过期。当前位置：古墩路竞州路口'
      }, {
        content: '11【浙A524T7】【15:23】年审过期。当前位置：古墩路竞州路口'
      }, {
        content: '12【浙A524T7】【15:23】年审过期。当前位置：古墩路竞州路口'
      }, {
        content: '13【浙A524T7】【15:23】年审过期。当前位置：古墩路竞州路口'
      }, {
        content: '14【浙A524T7】【15:23】年审过期。当前位置：古墩路竞州路口'
      }, {
        content: '15【浙A524T7】【15:23】年审过期。当前位置：古墩路竞州路口'
      }];
      this.$nextTick(() => {
        this.gap1 = 0;
        this.gap2 = 0;
        this.switchLoop('start');
      });
    },
    getDishifenbuDataAndRender() {
      axios.get('http://47.98.129.186:8084/daPing/getDangerAndBusRegisterPlace').then((res) => {
        // console.log(res.data.dataBody);
        this.dsfbOption.xAxis.data = [];
        this.dsfbOption.series[0].data = [];
        for (let x of res.data.dataBody) {
          this.dsfbOption.xAxis.data.push(x.region.substr(0, 2));
          this.dsfbOption.series[0].data.push(x.totalNum);
        }
        this.dsfbChart.setOption(this.dsfbOption);
      })
    },
    getSevenDataAndRender() {
      axios.get('http://47.98.129.186:8084/daPing/getGPSOnlineTrendThisWeek').then((res) => {
        // console.log(res.data.dataBody);
        this.sevenOption.xAxis.data = [];
        this.sevenOption.series[0].data = [];
        for (let x of res.data.dataBody) {
          let date = +x.date.substr(5, 2) + '.' + x.date.substr(8, 2);
          this.sevenOption.xAxis.data.push(date);
          this.sevenOption.series[0].data.push(x.total);
        }
        this.sevenChart.setOption(this.sevenOption);
      })
    },
    getBennianyueduDataAndRender() {
      axios.get('http://47.98.129.186:8084/daPing/getNumByVihicleTypeThisYear').then((res) => {
        // console.log(res.data.dataBody);
        this.ydzsOption.series[0].data = [];
        this.ydzsOption.series[1].data = [];
        this.ydzsOption.series[2].data = [];
        for (let x of res.data.dataBody) {
          if (x.vihicleType === '030') {
            this.ydzsOption.series[0].data.push(x.totalNum);
          } else if (x.vihicleType === '012') {
            this.ydzsOption.series[1].data.push(x.totalNum);
          } else if (x.vihicleType === '011') {
            this.ydzsOption.series[2].data.push(x.totalNum);
          }
        }
        this.ydzsChart.setOption(this.ydzsOption);
      })
    },
    getData() {
      this.getDishifenbuDataAndRender();
      this.getSevenDataAndRender();
      this.getBennianyueduDataAndRender();
      this.getYichangListAndRender();
    }
  },
  mounted() {
    this.$nextTick(() => {
      // this.initVideo();
      this.initEcharts();
      this.getData();

      this.timer = setInterval(() => {
        this.getData();
      }, 300000);
    });
  },
  components: {
    ICountUp
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearInterval(this.loopTimer);
  }
}
</script>
