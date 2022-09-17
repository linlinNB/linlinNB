<template>
  <div class="demo-box-wrapper">
    <div class="demo-box-title">
      <span style="cursor: pointer">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <span>
        <a-space>
          <a-tooltip title="复制代码">
            <a-icon @click="copy" type="copy" />
          </a-tooltip>
          <a-tooltip :title="codeSwitchText">
            <a-icon @click="codeShow = !codeShow" type="copy" />
          </a-tooltip>
        </a-space>
      </span>
    </div>
    <div class="demo-box-content">
      <slot name="content" />
      <slot name="demo" />
    </div>
    <div class="demo-box-footer" v-show="codeShow">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoBox',
  props: {
    title: {
      type: String,
      required: true
    },
    jsCode: {
      type: String,
      required: true
    },
    languageType: {
      type: String,
      default: 'js'
    }
  },
  data() {
    return {
      codeShow: false,
      codeSwitchText: '展示代码'
    }
  },
  computed: {
    codeSwitchText() {
      if (this.codeShow) {
        return '收起代码'
      }
      return '显示代码'
    }
  }
}
</script>

<style lang="less" scoped>
.demo-box-wrapper {
  .demo-box-title {
    display: flex;
    justify-content: space-between;
  }
  .demo-box-content {

  }
  .demo-box-footer {

  }
}
</style>