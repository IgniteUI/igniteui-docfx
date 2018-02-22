---
title: Ripple ディレクティブ
_description: Ignite UI for Angular Ripple ディレクティブは、リップル アニメーション エフェクトが適用されている領域を定義できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Ripple コンポーネント, Angular Ripple コントロール
_language: ja
---

## Ripple

<p class="highlight">Ignite UI for Angular Ripple ディレクティブを使用すると、入力の受け取りが構成されていない領域にクリックまたはタッチした場合にリップル アニメーション エフェクトのフィードバックを作成できます。タッチまたはマウス クリックの応答としてアニメーションを再生する相対的な位置を持つ要素にこのディレクティブを設定します。</p>
<div class="divider"></div>

### Ripple デモ

<div class="sample-container loading" style="height: 558px">
    <iframe id="ripple-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/ripple-sample-1" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="ripple-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 依存関係

Ripple ディレクティブが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に _IgxRippleModule_ をインポートする必要があります。

```typescript
// app.module.ts

import { IgxRippleModule } from 'igniteui-angular/main';

@NgModule({
    imports: [
        ...
        IgxRippleModule,
        ...
    ]
})
export class AppModule {}
```

### 使用方法
#### リップル エフェクトの追加

`igxRipple` を使用して指定した要素にリップル効果を追加します。デフォルト色のリップル エフェクトを追加します。

```html
<button igxButton="raised" igxRipple>Click Me</button>
```

<div class="sample-container loading" style="height: 68px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/ripple-sample-5" onload="onSampleIframeContentLoaded(this);">
</div>

#### カスタム色

`igxRipple` でリップル色を設定できます。このサンプルでは、リップルに白色を設定します。

```html
<button igxButton="raised" igxRipple="white">White</button>
```

<div class="sample-container loading" style="height: 68px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/ripple-sample-6" onload="onSampleIframeContentLoaded(this);">
</div>

#### 中央揃えのリップル エフェクト

リップル エフェクトはクリック イベントの位置から開始します。この動作で要素の中点を原点に変更するには、`igxRippleCentered` を使用できます。

```html
<button igxButton="raised" igxRipple="white" igxRippleCentered="true">Centered</button>
```

<div class="sample-container loading" style="height: 68px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/ripple-sample-3" onload="onSampleIframeContentLoaded(this);">
</div>

#### リップルの対象要素

`igxRippleTarget` を使用して親要素内の特定の要素にリップル エフェクトをアタッチします。

```html
<div class="parent-div" igxRipple="blue" igxRippleTarget=".child-div" igxRippleCentered="true">
  Parent Div
  <div class="child-div">
    Child Div
  </div>
</div>
```

親 div または子 div をクリックすると、リップル エフェクトは子 div 内のみに表示されます。子 div の要素を **relative** に設定する必要があります。

<div class="sample-container loading" style="height: 168px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/ripple-sample-2" onload="onSampleIframeContentLoaded(this);">
</div>

#### リップルの期間

`igxRippleDuration` を使用するとリップル アニメーションの期間を変更できます。デフォルト値は 600 ミリ秒です。このサンプルで `igxRippleDuration` は 2000 ミリ秒に設定されます。

```html
<div class="ripple-sample dark" [igxRippleDuration]=2000 igxRipple="white">
  <p style="margin-bottom:0">Long Ripple Animation</p>
</div>
```

<div class="sample-container loading" style="height: 148px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/ripple-sample-4" onload="onSampleIframeContentLoaded(this);">
</div>

`igxRipple` は Web Animation API を使用し、[サポートされるブラウザー](http://caniuse.com/#feat=web-animation)でネイティブに実行します。その他のブラウザーで `web-animations.min.js` [ポリフィル](https://github.com/web-animations/web-animations-js)を使用します。

> [!NOTE]
> リップル アニメーションで相対的な位置を持つ要素を使用します。また、`igxRippleTarget` を使用して子要素を対象にすることもできます。

<div class="divider--half"></div>

### API

| 名前                |   型    | 説明                                                                                                                                      |
| :------------------ | :-----: | :---------------------------------------------------------------------------------------------------------------------------------------- |
| `igxRipple`         | string  | リップル アニメーションの色。                                                                                                             |
| `igxRippleTarget`   | string  | `igxRipple` の親で子要素にリップルをアクティブ化することを設定します。CSS セレクターを受け取ります。デフォルト値は `igxRipple` の親です。 |
| `igxRippleCentered` | boolean | true の場合、リップル アニメーションはクリック イベントの位置の代わりに要素の中央から再生します。                                         |
| `igxRippleDuration` | number  | リップル アニメーションの期間。デフォルト値は 600 ミリ秒です。                                                                            |

<div class="divider--half"></div>

### 追加のリソース

<div class="divider--half"></div>
是非コミュニティに参加してください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)