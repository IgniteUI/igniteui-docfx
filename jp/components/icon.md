---
title: Icon コンポーネント
_description: Ignite UI for Angular Icon コンポーネントを使用して、様々なアイコンおよびフォント セットを統合して交互に使用し、カスタム色を定義できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Icon コンポーネント, Angular Icon コントロール
_language: ja
---

## Icon

<p class="highlight">Ignite UI for Angular Icon コンポーネントはアイコンおよびフォント セットを統合するため、交互の使用やマテリアル アイコンをマークアップに追加できます。コンポーネントはカスタム色をサポートします。アイコンを非アクティブに設定できます。</p>
<div class="divider"></div>

### Icon デモ

<div class="sample-container" style="height: 384px">
    <iframe id="icon-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/icon-sample-1"  onload="onSampleIframeContentLoaded(this);">
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="icon-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
</div>
<div class="divider--half"></div>

### 依存関係

Icon コンポーネントが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` への _IgxIconModule_ のインポートのみが必要になります。

```typescript
// app.module.ts

import { IgxIconModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxIconModule,
        ...
    ]
})
export class AppModule {}
```

### 使用方法

```html
<igx-icon name="home" color="magenta" ></igx-icon>
```

### コード例

`igx-icon` を使用して `active` ホーム アイコンをマゼンタ `color` に設定します。

```html
<igx-icon name="home" color="magenta" isActive="true"></igx-icon>
```

`inactive` アイコンを設定します。

```html
<igx-icon name="volume_off" [isActive]="false"></igx-icon>
```

CSS でアイコン サイズを設定するには、カスタム CSS を作成して名前を *custom-size* とします。アイコン サイズは **font-size** プロパティで変更でき、更に中央揃えにするには、**width** と **height** を同じ値にします。
```html
<igx-icon name="phone_iphone" color="#0375be" class="custom-size"></igx-icon>
```
```css
<!-- icon-sample2.component.scss -->

.custom-size{
    font-size: 56px;
    width: 56px;
    height: 56px;
}
```
<div class="sample-container" style="height: 80px; width: 300px">
    <iframe id="icon-sample2-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/icon-sample2"  onload="onSampleIframeContentLoaded(this);">
</div>

<div class="divider--half"></div>

### API まとめ

この記事で Icon コンポーネントを説明しました。以下は、その他の API のリストです。

####Inputs
The following inputs are available on the **igx-icon** component:
| Name   |       Type      |  Description |
|:----------|:-------------:|:------|
| `name` |  string | Set the icon by providing its name from the official [material icons set](https://material.io/icons/) . |
| `iconName` |  string | Set the `glyphName` of the icon. You can provide either ligature `name` or glyph `iconName`, but not both at the same time. |
| `fontSet` |  string | Set the value of the `fontSet`. By default it's "material".
| `active` |  boolean | Set the icon to active/inactive state (default is true). |
| `color` |  string | Set the icon color by providing a string value. |
<div class="divider--half"></div>

####Getters
The following getters are available on the **igx-icon** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `getFontSet()` | string | Returns the icon font. |
| `getIconColor()` | string | Returns the icon color. |
| `getIconName()` | string | Returns the icon name. |
| `getActive()` | boolean | Returns the icon active state. |
| `getInactive()` | boolean | Returns the icon inactive state. |
<div class="divider"></div>

### 追加のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

