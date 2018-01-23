<template>
  <div class="header">
    <!-- 头部通栏 -->
    <div class="top-wrapper">
      <div class="back-wrapper">
        <span class="icon-arrow_lift"></span>
      </div>
      <form class="search-wrapper">
        <span class="search-icon"></span>
        <input class="search-bar" type="text" placeholder="搜索">
      </form>
      <div class="more-wrapper">
        <a class="spelling-bt" href="#">拼单</a>
        <div class="more-bt">
          <i class="s-radius"></i>
          <i class="s-radius"></i>
          <i class="s-radius"></i>
        </div>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="content-wrapper">
      <!-- 将传递过来的值显示到页面上 -->
      <div class="icon" :style="head_bg">
        <!-- <img :src=""/> -->
      </div>
      <div class="name">
        <h3>{{poiInfo.name}}</h3>
      </div>
      <div class="collect">
        <img src="../../../resource/img/star.png"/>
        <span>收藏</span>
      </div>
    </div>
    <!-- 公司公告 -->
    <div class="bulletin-wapper">
      <img class="icon" v-if="poiInfo.discounts2" :src="poiInfo.discounts2[0].icon_url"/>
      <span class="text" v-if="poiInfo.discounts2">{{poiInfo.discounts2[0].info}}</span>
      <div class="detail" v-if="poiInfo.discounts2" @click="showBulletin">
        {{poiInfo.discounts2.length}}个活动
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <!-- 背景 -->
    <div class="bg-wrapper" :style="content_bg">
      <!-- <img :src="poiInfo.head_pic_url"/> -->
    </div>
    <!-- 公告详情 -->
    <!-- <transition name="detail"></transition>vue添加过度效果的标签 -->
    <transition name="detail">
    <div class="bulletin-ditail" v-show="isshow">
      <div class="detial-wrapper">
        <div class="main-wrapper" :style="ditail_bg">
          <div class="icon" :style="head_bg"></div>
          <h3 class="name">{{poiInfo.name}}</h3>
          <!-- 评价 -->
          <p class="tip">
            {{poiInfo.min_price_tip}}<i>|</i>
            {{poiInfo.shipping_fee_tip}}<i>|</i>
            {{poiInfo.delivery_time_tip}}
          </p>
          <p class="time">
            配送时间:{{poiInfo.shipping_time}}
          </p>
          <div class="discounts" v-if="poiInfo.discounts2">
            <p>
              <img :src="poiInfo.discounts2[0].icon_url"/>
              <span>{{poiInfo.discounts2[0].info}}</span>
            </p>
          </div>
        </div>
        <div class="close-wrapper">
          <span class="icon-close" @click="closeBulletin"></span>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isshow: false //公告是否显示
    };
  },
  // 接收App页面传递过来的值
  props: {
    //组件传值
    poiInfo: {
      type: Object,
      default: {}
    }
  },
  computed: {
    //计算属性
    content_bg() {
      return "background-image:url(" + this.poiInfo.head_pic_url + ");";
    },
    head_bg() {
      return "background-image:url(" + this.poiInfo.pic_url + ");";
    },
    ditail_bg() {
      return "background-image:url(" + this.poiInfo.poi_back_pic_url + ");";
    }
  },
  methods: {
    showBulletin() {
      this.isshow = true;
    },
    closeBulletin() {
      this.isshow = false;
    }
  }
};
</script>
<style>
/* 导入字体图标 */
@import url("../../common/styles/icon.css");
/* 导入css样式 */
@import url("./Header.css");
</style>


