## qrcode

用于生成二维码，支持导出,中间加 logo ，自定义颜色等

## 使用

```tsx
import { defineComponent, ref } from 'compatible-vue';
import { QrCode, QrCodeActionType } from '@/components/qrcode/index';
export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <QrCode value={qrCodeUrl} />
        </div>
      );
    };
  },
});
```

## props

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
