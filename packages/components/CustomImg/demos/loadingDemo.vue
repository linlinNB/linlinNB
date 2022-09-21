<markdown>
# Loading用法
loading 演示
</markdown>

<template>
  <div>
    <CustomImg
      :width="100"
      :height="100"
      :loading="loading"
      :mainImg="mainImg"
      :subImg="subImg"
    />
    <a-button @click="retryLoad">重新加载</a-button>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import loadingImg from './loading.gif'
export default defineComponent({
  name: 'CustomImgLoadingDemo',
  data() {
    return {
      loading: loadingImg,
      mainImg: '',
      subImg: '',
      setTimeoutTimer: null
    }
  },
  mounted() {
    this.retryLoad()
  },
  methods: {
    retryLoad() {
      this.mainImg = ''
      this.subImg = ''
      this.startSetTimeout()
    },
    startSetTimeout() {
      this.clearSetTimeout()
      this.setTimeoutTimer = setTimeout(() => {
        this.mainImg = 'https://tse1-mm.cn.bing.net/th/id/OIP-C.n0_p3rYRuofABd3XudbZnAHaEo?pid=ImgDet&rs=1'
        this.subImg = 'https://tse3-mm.cn.bing.net/th/id/OIP-C.nRlAFygdctTCHmIWN7GxRwHaEK?pid=ImgDet&rs=1'
      })
    },
    clearSetTimeout() {
      clearTimeout(this.setTimeoutTimer)
    }
  }
})
</script>