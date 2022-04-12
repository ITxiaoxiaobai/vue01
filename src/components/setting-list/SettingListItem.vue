<template>
  <div class="setting-list-item" @click="showItemTitle(item.title)">
    <div class="setting-list-item-left">
      <img :src="require('../../assets/icon/'+item.icon)" class="item-icon">
      <span class="item-title">{{ item.title }}</span>
    </div>
    <div class="setting-list-item-right">
      <span class="icon iconfont icon-right"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingListItem",
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  methods: {
    showItemTitle(title) {
      this.$commonDialog.alert({title:"测试标题"}).then(()=>{

      }).catch(err=>{
        console.log(err)
      });
      // this.$dialog.confirm({
      //   message: title
      // }).then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log('取消',err)
      // })
    }
  }
}
</script>

<style scoped lang="scss">
.setting-list-item {
  display: flex;
  position: relative;
  justify-content: space-between;
  height: 55px;
  padding-left: 2%;
  background-color: #ffffff;

  &::after {
    position: absolute;
    display: block;
    content: '';
    width: 98%;
    height: 1px;
    left: 2%;
    bottom: 0;
    background-color: #EEEEEE;
    transform: scaleY(.7);
  }

  &:last-child::after {
    display: none;
  }

  .setting-list-item-left {
    display: flex;
    height: 55px;
    align-items: center;

    .item-icon {
      width: 25px;
      height: 25px;
    }

    .item-title {
      padding-left: 7px;
      font-size: 14px;
      webkit-text-size-adjust: none;
      font-weight: bold;
    }
  }

  .setting-list-item-right {
    display: flex;
    align-items: center;
    padding-right: 7px;
  }
}
</style>
