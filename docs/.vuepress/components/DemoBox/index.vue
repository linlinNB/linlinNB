<template>
  <div class="demo-box-wrapper">
    <div class="demo-box-title">
      <span class="header-main">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <span class="header-extra">
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
      {{ jsCode }}
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
      default: 'javascript'
    }
  },
  data() {
    return {
      codeShow: false
    }
  },
  computed: {
    codeSwitchText() {
      if (this.codeShow) {
        return '收起代码'
      }
      return '显示代码'
    }
  },
  methods: {
    copy() {

    }
  }
}
</script>

<style lang="less" scoped>
.demo-box-wrapper {
  margin: 5px 0;
  border: 1px solid #ebedf0;
  border-radius: 2px;
  .demo-box-title {
    padding: 20px 24px;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    .header-main {
      font-weight: 500;
    }
    .header-extra {
      font-size: 14px;
    }
  }
  .demo-box-content {
    padding: 0 24px 20px;
    .demo-wrapper {
      margin-top: 16px;
    }
  }
  .demo-box-footer {
    border-top: 1px solid #ebedf0;
  }
}
</style>