## Transition

### 基础用法

:::demo
```vue
<template>
  <div>
    <u-button @click="show3 = !show3">Click Me</u-button>

    <div style="margin-top: 20px; height: 200px;">
      <u-transition>
        <div v-show="show3">
          <div class="transition-box">u-transition</div>
          <div class="transition-box">u-transition</div>
        </div>
      </u-transition>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
      show3: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::