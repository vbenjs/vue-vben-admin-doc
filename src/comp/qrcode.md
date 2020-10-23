# QrCode 二维码组件

 用于生成二维码的组件

 ```vue

 <template>
  <div class="p-4 flex flex-wrap">
    <CollapseContainer title="基础示例" :canExpan="true" class="text-center mb-6 qrcode-demo-item">
      <QrCode :value="qrCodeUrl" />
    </CollapseContainer>

    <CollapseContainer title="渲染成img标签示例" class="text-center mb-6 qrcode-demo-item">
      <QrCode :value="qrCodeUrl" tag="img" />
    </CollapseContainer>

    <CollapseContainer title="配置样式示例" class="text-center mb-6 qrcode-demo-item">
      <QrCode
        :value="qrCodeUrl"
        :options="{
          color: { dark: '#55D187' },
        }"
      />
    </CollapseContainer>

    <CollapseContainer title="本地logo示例" class="text-center mb-6 qrcode-demo-item">
      <QrCode :value="qrCodeUrl" :logo="LogoImg" />
    </CollapseContainer>

    <CollapseContainer title="在线logo示例" class="text-center mb-6 qrcode-demo-item">
      <QrCode
        :value="qrCodeUrl"
        logo="https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png"
        :options="{
          color: { dark: '#55D187' },
        }"
      />
    </CollapseContainer>

    <CollapseContainer title="logo配置示例" class="text-center mb-6 qrcode-demo-item">
      <QrCode
        :value="qrCodeUrl"
        :logo="{
          src: 'https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png',
          logoSize: 0.2,
          borderSize: 0.05,
          borderRadius: 50,
          bgColor: 'blue',
        }"
      />
    </CollapseContainer>

    <CollapseContainer title="下载示例" class="text-center qrcode-demo-item">
      <QrCode :value="qrCodeUrl" ref="qrRef" :logo="LogoImg" />
      <a-button class="mb-2" type="primary" @click="download"> 下载 </a-button>
      <div class="msg">(在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)</div>
    </CollapseContainer>

    <CollapseContainer title="配置大小示例" class="text-center qrcode-demo-item">
      <QrCode :value="qrCodeUrl" :width="300" />
    </CollapseContainer>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { QrCode, QrCodeActionType } from '/@/components/Qrcode/index';
  import LogoImg from '/@/assets/images/logo.png';
  import { CollapseContainer } from '/@/components/Container/index';
  const qrCodeUrl = 'https://www.vvbin.cn';
  export default defineComponent({
    components: { CollapseContainer, QrCode },
    setup() {
      const qrRef = ref<Nullable<QrCodeActionType>>(null);
      function download() {
        const qrEl = unref(qrRef);
        if (!qrEl) return;
        qrEl.download('文件名');
      }
      return {
        qrCodeUrl,
        LogoImg,
        download,
        qrRef,
      };
    },
  });
</script>
<style scoped>
  .qrcode-demo-item {
    width: 30%;
    margin-right: 1%;
  }
</style>



 ```
## Props

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| value | `string` | - | - | 二维码地址 |
| options | `QRCodeRenderersOptions` | - | - | 二维码配置 ,见 QRCodeRenderersOptions |
| width | `number` | 2-- | - | 宽度 |
| logo | `string｜LogoType` | - | - | 中间 logo 配置，见 LogoType |
| tag | `渲染标签` | canvas | `canvas|img` | img 不支持内嵌 logo |

**QRCodeRenderersOptions**

```ts
    /**
     * 定义margin的宽度。.
     * Default: 4
     */
    margin?: number;
    /**
     * 比例因子。值1表示每个模块1像素（黑点）。
     * Default: 4
     */
    scale?: number;
    /**
     * 为输出图像强制指定宽度。
     * 如果宽度太小而不能包含qr符号，则此选项将被忽略。
     * 优先于规模。
     */
    width?: number;
    color?: {
        /**
         * 暗模块的颜色。值必须为十六进制格式（RGBA）.
         * 注意：深色应始终比color.light暗。.
         * Default: #000000ff
         */
        dark?: string;
        /**
         * 照明模块的颜色。值必须为十六进制格式（RGBA）.
         * Default: #ffffffff
         */
        light?: string;
    };

```

**LogoType**

```js
{
  // logo图片
  src: string;
  // logo大小
  logoSize: number;
  // 背景颜色
  bgColor: string;
  // logo圆角
  logoRadius: number;
}
```

## 函数

| 名称     | 回调参数                    | 说明 |
| -------- | --------------------------- | ---- |
| download | `Function(fileName:string)` | 下载 |
