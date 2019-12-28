<template>
  <div>
    <!-- <input placeholder="属性测试" :title="属性"/> -->
    <input placeholder="属性测试" :title="标题" />
    <p>文本测试</p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      text: "文案"
    };
  },
  computed: {
    data: {
      get: () => {
        return `数据${data}`
      }
    }
  },
};
</script>