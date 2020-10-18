# 按钮

保持 [anvt button](https://2x.antdv.com/components/button-cn/) 原有功能的情况下扩展以下属性

::: tip
1. 按钮不需要 import ,已经全局注册，直接使用 a-button 标签即可
2. 如果是Tsx文件,需要手动import
:::


## 使用

```vue
<template>
 <a-button color="success">成功按钮</a-button>
 <a-button color="error">错误按钮</a-button>
 <a-button color="warning">警告按钮</a-button>
</template>
```

## props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| color | `'error' | 'warning' | 'success'` | - | 按钮的颜色场景状态颜色， |
| throttle | `throttle｜debounce` | - | 按钮的防抖节流状态,应用于全部按钮，控制所有按钮，可以解决重复点击问题 |
| throttleTime | `number` | - | 防抖节流时间 |
