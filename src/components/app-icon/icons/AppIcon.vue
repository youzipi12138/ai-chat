<template>
  <component
    v-if="isCustomIcon"
    :is="
      Object.keys(iconMap).includes(iconName)
        ? iconMap[iconName].iconRender()
        : iconMap['app-404'].iconRender()
    "
    class="el-icon"
  ></component>
  <el-icon v-else-if="iconName">
    <component :is="iconName"></component>
  </el-icon>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { iconMap } from './icon'

defineOptions({
  name: 'AppIcon',
})
const props = withDefaults(
  defineProps<{
    iconName?: string
  }>(),
  {
    iconName: 'app-404',
  },
)
const isCustomIcon = computed(() => props.iconName?.includes('app-'))
</script>
