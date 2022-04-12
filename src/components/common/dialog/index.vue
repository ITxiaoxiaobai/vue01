<template>
  <div class="common-dialog" :class="{'common-dialog-active':show}">
    <div class="common-dialog-bg" :class="{'common-dialog-bg-active':show}" @click="cancel"></div>
    <div class="common-dialog-content">
      <div class="common-dialog-content-title">测试标题</div>
      <div class="common-dialog-content-text">如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。</div>
      <div class="common-dialog-content-btn">
        <div class="common-dialog-content-btn-cancel" @click="cancel" v-if="showCancelButton">取消</div>
        <div class="common-dialog-content-btn-confirm" @click="confirm">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      showCancelButton: false,
      show:false
    }
  },
  methods: {
    cancel() {
      this.close();
      this.reject('cancel');
    },
    confirm(){
      this.close();
      this.resolve('confirm');
    },
    close(){
      this.$el.classList.remove('common-dialog-active')
    }
  }
}
</script>

<style scoped lang="scss">
.common-dialog {
  visibility: hidden;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;

  .common-dialog-bg {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 3s linear;
  }
  .common-dialog-bg-active{
    background-color:rgba(0,0,0,.5)
  }
  .common-dialog-content {
    position: absolute;
    width: 90%;
    top: 50%;
    left: 50%;
    border-radius: 6px;
    transform: translate(-50%, -50%);
    background-color: #ffffff;

    .common-dialog-content-title {
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: #323233;
      padding: 25px 10px 5px 10px;
    }

    .common-dialog-content-text {
      text-align: center;
      line-height: 1.5;
      font-size: 14px;
      padding: 5px 10px 25px 10px;
      color: #646566;
    }

    .common-dialog-content-btn {
      display: flex;
      position: relative;

      .common-dialog-content-btn-cancel, .common-dialog-content-btn-confirm {
        display: flex;
        flex-grow: 1;
        height: 60px;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: bold;
      }

      &::after {
        position: absolute;
        display: block;
        content: "";
        width: 100%;
        height: 1px;
        background-color: #EEEEEE;
        transform: scaleY(.6);
      }

      .common-dialog-content-btn-cancel::before {
        position: absolute;
        display: block;
        content: "";
        width: 1px;
        height: 60px;
        left: 50%;
        background-color: #EEEEEE;
        transform: scalex(.6);
      }
    }
  }
}

.common-dialog-active {
  visibility: visible;
}
</style>
