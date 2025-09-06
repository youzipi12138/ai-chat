<script setup lang="ts">
import { ref } from 'vue'
const items = ['直播', '推荐', '热门', '追番', '新征程']
const active = ref(0)
const footeritems = ['首页', '频道', '动态', '消息', '我的']
const activeFooter = ref(0)
</script>

<template>
  <div class="container bg-[#fff]">
    <div class="fixed top-0 w-full bg-[#fff]">
      <div class="nav flex justify-around space-x-1 items-center pt-4">
        <img src="@/public/image.png" alt="" class="w-8 h-8 rounded-full" />
        <input
          type="text"
          placeholder="请输入"
          class="border-2 border-[#aaa] focus:border-[#ff6699] focus:outline-none rounded-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-[#aaa]"
        >
          <!-- 手柄主体 -->
          <rect x="2" y="8" width="20" height="8" rx="4" ry="4" />
          <!-- 左边十字键 -->
          <line x1="8" y1="10" x2="8" y2="14" />
          <line x1="6" y1="12" x2="10" y2="12" />
          <!-- 右边按键 -->
          <circle cx="16" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-[#aaa]"
        >
          <!-- 袋子主体 -->
          <path d="M6 7h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 7z" />
          <!-- 提手 -->
          <path d="M9 7a3 3 0 0 1 6 0" />
        </svg>
      </div>
      <div>
        <ul class="sub-nav flex justify-around mt-2 mx-8 text-[#aaa] mb-1">
          <li
            v-for="(item, index) in items"
            :key="item"
            @click="active = index"
            :class="[active === index ? 'border-b-2 text-[#ff6699]' : 'none']"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="border-y-[#f1f2f3] border-y-1">
      <div class="px-4 py-3">
        <img src="./public/1.png" alt="" class="rounded-md" />
      </div>
      <div class="flex px-4 space-x-2 items-start pb-2">
        <img src="@/public/image.png" alt="" class="w-9 h-9 rounded-full" />
        <div class="par">
          <p class="text-[#18191c]">我相信，只要我足够努力，一定能让这个家重新焕发生机，不sad</p>
          <div class="text-sm text-gray-400">
            <span>先锋测评</span>
            <span>:</span>
            <span>8月20日</span>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-[#aaa] cursor-pointer"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.78 1.4 8.169L12 18.896l-7.334 3.863 1.4-8.169L.132 9.21l8.2-1.192z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-[#aaa]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z"
          />
        </svg>
      </div>
    </div>
    <div class="border-y-[#f1f2f3] border-y-1">
      <div class="px-4 py-3">
        <img src="./public/1.png" alt="" class="rounded-md" />
      </div>
      <div class="flex px-4 space-x-2 items-start pb-2">
        <img src="@/public/image.png" alt="" class="w-9 h-9 rounded-full" />
        <div class="par">
          <p class="text-[#18191c]">我相信，只要我足够努力，一定能让这个家重新焕发生机，不sad</p>
          <div class="text-sm text-gray-400">
            <span>先锋测评</span>
            <span>:</span>
            <span>8月20日</span>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-[#aaa] cursor-pointer"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.78 1.4 8.169L12 18.896l-7.334 3.863 1.4-8.169L.132 9.21l8.2-1.192z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-[#aaa]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z"
          />
        </svg>
      </div>
    </div>
    <div class="border-y-[#f1f2f3] border-y-1">
      <div class="px-4 py-3">
        <img src="./public/1.png" alt="" class="rounded-md" />
      </div>
      <div class="flex px-4 space-x-2 items-start pb-2">
        <img src="@/public/image.png" alt="" class="w-9 h-9 rounded-full" />
        <div class="par">
          <p class="text-[#18191c]">我相信，只要我足够努力，一定能让这个家重新焕发生机，不sad</p>
          <div class="text-sm text-gray-400">
            <span>先锋测评</span>
            <span>:</span>
            <span>8月20日</span>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-[#aaa] cursor-pointer"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.78 1.4 8.169L12 18.896l-7.334 3.863 1.4-8.169L.132 9.21l8.2-1.192z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-[#aaa]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z"
          />
        </svg>
      </div>
    </div>
    <ul class="flex justify-around items-center bg-white shadow-md h-16 fixed bottom-0 w-full">
      <!-- 首页 -->
      <li class="flex flex-col items-center justify-center">
        <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M3 12L12 3l9 9v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H9v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-9z"
          />
        </svg>
        <span class="text-xs mt-1">首页</span>
      </li>

      <!-- 频道 -->
      <li class="flex flex-col items-center justify-center">
        <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="12" y1="2" x2="12" y2="22" />
        </svg>
        <span class="text-xs mt-1">频道</span>
      </li>

      <!-- 动态 -->
      <li class="flex flex-col items-center justify-center">
        <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M17 1l4 4-4 4M7 23l-4-4 4-4M2 12h20" />
        </svg>
        <span class="text-xs mt-1">动态</span>
      </li>

      <!-- 消息 -->
      <li class="flex flex-col items-center justify-center">
        <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
        </svg>
        <span class="text-xs mt-1">消息</span>
      </li>

      <!-- 我的 -->
      <li class="flex flex-col items-center justify-center">
        <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a7 7 0 0 1 13 0" />
        </svg>
        <span class="text-xs mt-1">我的</span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
