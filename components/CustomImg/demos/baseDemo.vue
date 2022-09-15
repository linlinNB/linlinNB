<template>
  <CustomImg
    :mainImg="mainImg"
    :subImg="subImg"
  />
</template>

<script>
import CustomImg from '../index.vue'
export default {
  name: 'CustomImgBaseDemo',
  components: {
    CustomImg
  },
  data() {
    return {
      mainImg: "https://tse1-mm.cn.bing.net/th/id/OIP-C.n0_p3rYRuofABd3XudbZnAHaEo?pid=ImgDet&rs=1",
      subImg: "https://tse3-mm.cn.bing.net/th/id/OIP-C.nRlAFygdctTCHmIWN7GxRwHaEK?pid=ImgDet&rs=1"
    }
  }
}
</script>