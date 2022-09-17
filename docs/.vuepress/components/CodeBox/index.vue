<template>
  <div>我是code</div>
</template>

<script>
import hljs from 'highlight.js'
export default {
  name: 'CodeBox',
  props: {
    language: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    },
    trim: {
      type: Boolean,
      default: true
    }
  }
}
</script>