﻿---
title: Button ディレクティブ
_description: Ignite UI for Angular の Button コントロールで規格のボタンに定義済みテキスト、画像、およびその他の機能を追加します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Button コンポーネント, Angular Button コントロール
_language: ja
---

## Button

<p class="highlight">Button ディレクティブを任意の button、span、div、または anchor 要素に適用して高機能なボタンを構成できます。</p>
<div class="divider"></div>

### Button デモ

<div class="sample-container" style="height: 436px">
    <iframe id="buttons-sample-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/buttons-sample-1" onload="onSampleIframeContentLoaded(this);">
</div>

<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="buttons-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 依存関係

Button ディレクティブは `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に _IgxButtonModule_ をインポートする必要があります。

```typescript
// app.module.ts

import { IgxButtonModule } from 'igniteui-angular/main';

@NgModule({
    imports: [
        ...
        IgxButtonModule,
        ...
    ]
})
export class AppModule {}
```

### 使用方法

```html
<target-element igxButton [..options]>クリック</target-element>
```

### コード例

シンプルな `igxButton` を設定します。タイプを選択しない場合、デフォルト値は `flat` です。

```html
<button igxButton="flat">Flat</button>
```

結果:

<div class="sample-container" style="height: 48px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/buttons-sample-2">
</div>

リップル効果を追加できます。色を設定します。 `igxRipple="blue"`。

```html
<button igxButton="flat" igxRipple>Flat</button>
```

デフォルトのリップル色。カスタム リップル色。

<div class="sample-container" style="height: 48px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/buttons-sample-3">
</div>

`igxButton` を使用して span 要素を Ignite UI for Angular のスタイル設定済みボタンにします。

```html
<span igxButton="raised" igxButtonColor="yellow" igxButtonBackground="#000" igxRipple="yellow">クリック</span>
```

span は以下のようになります。

<div class="sample-container" style="height: 54px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/buttons-sample-4">
</div>

raised ボタンを作成できます。　

```html
<button igxButton="raised" igxRipple="white">Raised</button>
```

<div class="sample-container" style="height: 54px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/buttons-sample-5">
</div>

フローティング アクション ボタンを作成し、表示するアイコンを使用します。

```html
<button igxButton="fab" igxButtonColor="#FBB13C" igxButtonBackground="#340068" igxRipple="#FBB13C">
  <igx-icon fontSet="material" name="edit"></igx-icon>
</button>
```

<div class="sample-container" style="height: 74px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/buttons-sample-6">
</div>

また、アイコンをボタンとして使用できます。

```html
<button igxButton="icon" igxRipple igxRippleCentered="true">
  <igx-icon fontSet="material" name="search"></igx-icon>
</button>
```

```html
<button igxButton="icon" igxRipple igxButtonColor="#E41C77" igxRippleCentered="true">
  <igx-icon fontSet="material" name="favorite"></igx-icon>
</button>
```

アイコンの結果:

<div class="sample-container" style="height: 54px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/buttons-sample-7">
</div>

<div class="divider--half"></div>

### Button タイプ

| 名前       |                                                  説明                                                  |
| :--------- | :----------------------------------------------------------------------------------------------------: |
| `flat`     |               デフォルトのボタン タイプ。透明な背景およびプライマリ テーマ色のテキスト。               |
| `raised`   | 名前どおり、このボタン タイプは box-shadow を使用します。プライマリ テーマ色の背景および白いテキスト。 |
| `gradient` |             raised ボタン タイプと同じです。それに、背景色にグラデーションを指定できます。             |
| `fab`      |      フローティング アクションのボタン タイプ。丸形で、プライマリ テーマ色の背景色と白い前景色。       |
| `icon`     |        これは最もシンプルなボタン タイプです。アイコンをボタンとして使用する場合に使用します。         |
| `navbar`   |     icon ボタン タイプと同じですが、igx-navbar コンポーネントで使用するために最適化されています。      |

<div class="divider--half"></div>

### API まとめ

このトピックではさまざまなボタン タイプについて説明しました。以下は、Button ディレクティブのその他の API です。

#### 入力

以下の入力は **igxButton** ディレクティブで利用できます。

| 名前                  |   型   | 説明                                                                  |
| :-------------------- | :----: | :-------------------------------------------------------------------- |
| `igxButton`           | string | 使用される igxButton のタイプを設定します。デフォルト値は flat です。 |
| `igxButtonColor`      | string | ボタンのテキスト色を設定します。任意の有効な CSS 色値を使用できます。 |
| `igxButtonBackground` | string | ボタンの背景色を設定します。任意の有効な CSS 色値を使用できます。     |

<div class="divider--half"></div>

<div class="divider"></div>

### 追加のリソース

<div class="divider--half"></div>
是非コミュニティに参加してください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
