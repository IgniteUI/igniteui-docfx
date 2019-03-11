---
title: Button ディレクティブ
_description: Ignite UI for Angular の Button コントロールで規格のボタンに定義済みテキスト、画像、およびその他の機能を追加します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Button コンポーネント, Angular Button コントロール
_language: ja
---

## Button

Ignite UI for Angular Button ディレクティブを任意の button、span、div、または anchor 要素に適用して高機能なボタンを構成できます。

### Button デモ

<div class="sample-container loading" style="height: 436px">
    <iframe id="buttons-sample-iframe" seamless="" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/buttons-sample-1" onload="onSampleIframeContentLoaded(this);">
</iframe></div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttons-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 依存関係

Button ディレクティブは `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に [`IgxButtonModule`]({environment:angularApiUrl}/classes/igxbuttonmodule.html) をインポートする必要があります。

```typescript
// app.module.ts

import { IgxButtonModule } from 'igniteui-angular';

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

シンプルな [`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) を設定します。タイプを選択しない場合、デフォルト値は `flat` です。

```html
<button igxButton="flat">Flat</button>
```

結果:

<div class="sample-container loading" style="height: 48px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-2" class="lazyload">
</iframe></div>

リップル エフェクトを追加できます。色を設定します。 `igxRipple="blue"`。

```html
<button igxButton="flat" igxRipple>Flat</button>
```

デフォルトのリップル色。カスタム リップル色。

<div class="sample-container loading" style="height: 48px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-3" class="lazyload">
</iframe></div>

アウトライン付きボタン スタイル:

```html
<button igxButton="outlined">Outlined</button>
```

結果:
<div class="sample-container loading" style="height: 48px">
    <iframe class="lazyload" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-8">
</iframe></div>

[`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) を使用して span 要素を Ignite UI for Angular のスタイル設定済みボタンにします。

```html
<span igxButton="raised" igxButtonColor="yellow" igxButtonBackground="#000" igxRipple="yellow">クリック</span>
```

span は以下のようになります。

<div class="sample-container loading" style="height: 54px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-4" class="lazyload">
</iframe></div>

raised ボタンを作成できます。　

```html
<button igxButton="raised" igxRipple="white">Raised</button>
```

<div class="sample-container loading" style="height: 54px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-5" class="lazyload">
</iframe></div>

フローティング アクション ボタンを作成し、表示するアイコンを使用します。

```html
<button igxButton="fab" igxButtonColor="#FBB13C" igxButtonBackground="#340068" igxRipple="#FBB13C">
  <igx-icon fontSet="material">edit</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 74px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-6" class="lazyload">
</iframe></div>

また、アイコンをボタンとして使用できます。

```html
<button igxButton="icon" igxRipple igxRippleCentered="true">
  <igx-icon fontSet="material">search</igx-icon>
</button>
```

```html
<button igxButton="icon" igxRipple igxButtonColor="#E41C77" igxRippleCentered="true">
  <igx-icon fontSet="material">favorite</igx-icon>
</button>
```

アイコンの結果:

<div class="sample-container loading" style="height: 54px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/buttons-sample-7" class="lazyload">
</iframe></div>

<div class="divider--half"></div>

### Button タイプ

| 名前       |                                                  説明                                                  |
| :--------- | :----------------------------------------------------------------------------------------------------: |
| `flat`     |               デフォルトのボタン タイプ。透明な背景およびプライマリ テーマ色のテキスト。               |
| `outlined` |  Flat ボタン タイプに似ていますがボタンの端が細いアウトラインで囲まれます。 |
| `raised`   | このボタン タイプはわずかなシャドウを使用します。背景のパレットにセカンダリ テーマ色を使用。 |
| `fab`      |      フローティング アクションのボタン タイプ。背景用のセカンダリ テーマ色で円形。       |
| `icon`     |        最もシンプルなボタン タイプ。アイコンをボタンとして使用する場合に使用。         |

### API リファレンス
<div class="divider--half"></div>

* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton Styles]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
