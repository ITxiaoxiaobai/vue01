<template>
  <div class="setting-list">
    <SettingListItem v-for="item of itemList" :item="item" :key="item.icon">

    </SettingListItem>
  </div>
</template>

<script>
import SettingListItem from "@/components/setting-list/SettingListItem";

export default {
  name: "SettingList",
  props: {
    itemList: {
      type: Array,
      required: true,
    }
  },
  components: {SettingListItem}
}
</script>

<style scoped lang="scss">
.setting-list{
  padding-top:5px;
}
</style>
