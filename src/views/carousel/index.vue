<template>
  <div>
    <carousel @register="register" :imgList="imgList">
      <template #previousArrow>
        <left-circle-filled :style="{ fontSize: '40px' }" />
      </template>
      <template #nextArrow>
        <right-circle-filled :style="{ fontSize: '40px' }" @click="next" />
      </template>
    </carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import carousel from '@/components/carousel/index'
import { useCarousel } from '@/hook/useCarousel'
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons-vue'

const { register, next } = useCarousel()

const imgList = [
  {
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242332225H9-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649209747&t=58e652880af3252321615058cb4ed1f2'
  },
  {
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F052420105424%2F200524105424-8-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649209747&t=19b91ef2bf679026d697a34dc0a356fe'
  },
  {
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F032120114622%2F200321114622-4-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649209747&t=7dc0ec44919e5e699eca7a910f9df083'
  },
  {
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp10%2F21101613111B933-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649209747&t=6fcc9aa2b6c80893ed98d656b702c995'
  }
]
</script>

<style scoped lang="scss"></style>
