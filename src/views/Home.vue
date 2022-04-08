<template>
  <div class="home">
    <SettingList v-for="item of settingListAry" :itemList="item" :key="item+'a'">

    </SettingList>
  </div>
</template>

<script>
import SettingList from "@/components/setting-list/SettingList";

export default {
  name: 'Home',
  components: {SettingList},
  data() {
    return {
      settingListAry: [[{
          icon: "chakanbingli.png",
          title: "已绑定手机号"
        }, {
          icon: "ditu.png",
          title: "账号与安全"
        }], [{
          icon: "fenxiangerweima.png",
          title: "免密支付设置"
        }, {
          icon: "hongpei.png",
          title: "先用后付设置"
        }, {
          icon: "huazhuangpin.png",
          title: "免拼设置"
        }, {
          icon: "kafei.png",
          title: "拼小圈设置"
        }, {
          icon: "koulingmibao.png",
          title: "消息接收设置"
        }, {
          icon: "meishi.png",
          title: "直播、照片、视频和通话"
        }], [{
          icon: "miaosha.png",
          title: "常见问题"
        }, {
          icon: "muying.png",
          title: "意见反馈"
        }], [{
        icon: "riji.png",
        title: "免费入驻拼多多"
      }], [{
        icon: "tuijianyoujiang.png",
        title: "长辈版"
      }], [{
        icon: "waimai.png",
        title: "清除缓存"
      }, {
        icon: "xinpin.png",
        title: "个人信息共享清单"
      }, {
        icon: "xuanzhang.png",
        title: "个人信息收集清单"
      }, {
        icon: "zhibo.png",
        title: "隐私政策摘要"
      }, {
        icon: "zhongbiao.png",
        title: "关于拼多多"
      }]]
    }
  }
}
</script>
<style scoped>
.home {
  min-height: 100vh;
  background-color: #EEEEEE;
}
</style>
