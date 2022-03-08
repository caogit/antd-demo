<template>
  <div :style="props.carouselBoxStyle">
    <template v-for="(item, index) in props.imgList" :key="item">
      <img
        v-show="~~index == imgIndex"
        :src="item.url"
        alt=""
        class="carousel-img"
      />
    </template>
    <!-- 显示上一个箭头 -->
    <div class="carousel-previous">
      <slot name="previousArrow">
        <left-circle-two-tone :style="{ fontSize: '40px' }" @click="prev" />
      </slot>
    </div>
    <!-- 显示下一个箭头 -->
    <div class="carousel-next">
      <slot name="nextArrow">
        <right-circle-two-tone :style="{ fontSize: '40px' }" @click="next" />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, PropType, getCurrentInstance } from 'vue'
import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons-vue'
import { IImgList } from '../index'
const emit = defineEmits(['register'])

const imgIndex = ref(0)
// 是否开启定时器
const openSettimeout = false

const props = defineProps({
  carouselBoxStyle: {
    type: Object,
    default: () => {
      return {
        width: '1000px',
        height: '400px',
        position: 'relative',
        border: '1px solid red'
      }
    }
  },
  imgList: {
    type: Array as PropType<IImgList[]>,
    required: true
  },
  openSettimeout: {
    type: Boolean,
    default: () => {
      return true
    }
  }
})

if (props.openSettimeout) {
  console.log(1)

  setInterval(() => {
    next()
  }, 1000)
}

const methods = {
  next: () => {
    imgIndex.value++
    if (imgIndex.value == props.imgList.length) {
      imgIndex.value = 0
    }
    return {
      index: imgIndex.value
    }
  },
  prev: () => {
    imgIndex.value--
    if (imgIndex.value < 0) {
      imgIndex.value = props.imgList.length - 1
    }
  }
}
const { next, prev } = methods

const instance = getCurrentInstance()
if (instance) {
  emit('register', methods)
}

defineExpose({
  ...methods
})
</script>

<style scoped lang="scss">
.carousel-img {
  width: 100%;
  height: 100%;
}
.carousel-previous {
  position: absolute;
  top: 50%;
  left: 3%;
  z-index: 999;
  transform: translate(-50%, -10%);
}
.carousel-next {
  position: absolute;
  top: 50%;
  right: 3%;
  z-index: 999;
}
</style>
