// composables/useSmartSkeleton.js
import { ref, watch } from 'vue'
import type { Ref } from 'vue'

/**
 * 一个专业的加载状态渲染 Composable，同时处理延迟显示和最小显示时间。
 * @param {Ref<boolean>} isLoading - 一个包含原始加载状态的 ref。
 * @param {object} options - 配置选项
 * @param {number} options.delay - 延迟显示骨架屏的时间（毫秒）。
 * @param {number} options.minDisplayTime - 骨架屏的最短显示时间（毫秒）。
 * @returns {Ref<boolean>} - 一个 ref，其值为 true 时表示应该渲染骨架屏。
 */
export function useSmartSkeleton(
  isLoading: Ref<boolean>,
  { delay = 200, minDisplayTime = 300 } = {},
) {
  // ref 用于存储最终是否应该渲染骨架屏的状态
  const shouldRenderSkeleton = ref(false)

  // 用于存储计时器的 ID
  let delayTimeoutId = null
  let minDisplayTimeoutId = null

  // 记录骨架屏开始显示的时间戳
  let skeletonShownTime = 0

  // 使用 watch 来响应 isLoading 状态的变化
  watch(
    isLoading,
    (newIsLoading, oldIsLoading) => {
      // 如果状态没有变化，则不做任何事
      if (newIsLoading === oldIsLoading) {
        return
      }

      // 清理之前可能存在的计时器，防止内存泄漏和意外行为
      clearTimeout(delayTimeoutId)
      clearTimeout(minDisplayTimeoutId)

      if (newIsLoading) {
        // --- 开始加载：处理延迟显示 ---
        delayTimeoutId = setTimeout(() => {
          shouldRenderSkeleton.value = true
          skeletonShownTime = Date.now() // 记录开始显示的时间
        }, delay)
      } else {
        // --- 加载结束：处理最小显示时间 ---
        if (skeletonShownTime === 0) {
          // 如果骨架屏从未显示过（即请求在 delay 内完成），直接隐藏
          shouldRenderSkeleton.value = false
        } else {
          const timeDisplayed = Date.now() - skeletonShownTime
          const remainingTime = minDisplayTime - timeDisplayed

          if (remainingTime > 0) {
            // 如果显示时间不足，则再等一会儿
            minDisplayTimeoutId = setTimeout(() => {
              shouldRenderSkeleton.value = false
              skeletonShownTime = 0 // 重置
            }, remainingTime)
          } else {
            // 如果显示时间已足够，直接隐藏
            shouldRenderSkeleton.value = false
            skeletonShownTime = 0 // 重置
          }
        }
      }
    },
    { immediate: true },
  ) // immediate: true 确保在组件初始化时就执行一次 watch 逻辑

  return {
    shouldRenderSkeleton,
  }
}
