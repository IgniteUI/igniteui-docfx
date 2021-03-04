---
title: Ripple ディレクティブ
_description: Ignite UI for Angular Ripple ディレクティブは、リップル アニメーション エフェクトが適用されている領域を定義できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Ripple コンポーネント, Angular Ripple コントロール
_language: ja
---

# Ripple
<p class="highlight">Ignite UI for Angular Ripple コンポーネントは、タッチまたはマウス クリックに応答してアニメーションを作成します。</p>

### Ripple デモ
<div class="divider--half"></div>
<div class="sample-container loading" style="height: 100px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-5" class="lazyload" alt="Ripple デモ">
</iframe></div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div class="divider--half"></div>

## 使用方法

### はじめに

Ripple ディレクティブが `NgModule` としてエクスポートされるため、アプリケーションで **app.module.ts** ファイルに `IgxRippleModule` をインポートする必要があります。

```typescript
// app.module.ts

import { IgxRippleModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxRippleModule,
        ...
    ]
})
export class AppModule {}
```

> [!WARNING]
> [`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) は Web Animation API を使用し、[サポートされるブラウザー](http://caniuse.com/#feat=web-animation)でネイティブに実行します。その他のブラウザーでは `web-animations.min.js` [ポリフィル](https://github.com/web-animations/web-animations-js)を使用します。


### リップル エフェクトの追加

`igxRipple` を使用して指定した要素にリップル効果を追加します。

```html
<button igxButton="raised" igxRipple>Click Me</button>
```

## 例

### カスタム色

`igxRipple` を使用して、デフォルトのリップル色を簡単に変更できます。

```html
<button igxButton="raised" igxRipple="white">White</button>
```
<div class="sample-container loading" style="height: 100px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-6" class="lazyload">
</iframe></div>

### 中央揃えのリップル エフェクト
デフォルトでリップル エフェクトはクリック イベントの位置から開始します。この動作で要素の中点を原点に変更するには、[`igxRippleCentered`]({environment:angularApiUrl}/classes/igxrippledirective.html#centered) プロパティを使用できます。

```html
<button igxButton="raised" igxRipple="white" [igxRippleCentered]="true">Centered</button>
```
<div class="sample-container loading" style="height: 100px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-3" class="lazyload">
</iframe></div>

### リップルの期間
[`igxRippleDuration`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippleduration) プロパティを使用して、リップルアニメーションの期間を変更できます。これは、デフォルトで 600 ミリ秒に設定されています。

```html
<button igxButton="raised" igxRipple [igxRippleDuration]="2000">Click Me</button>
```
<div class="sample-container loading" style="height: 100px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-4" class="lazyload">
</iframe></div>

### リップルの対象要素
[`igxRippleTarget`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippletarget) プロパティを使用して親要素内の特定の要素にリップル エフェクトをアタッチします。

```html
<div class="parent" igxRipple="white" igxRippleTarget=".child" [igxRippleCentered]="true">
    ...
    <button class="sample-button child" igxButton="raised">Read More</button>
</div>
```
親要素または子要素をクリックしても、リップル エフェクトはボタンにのみ表示されます。

<div class="sample-container loading" style="height: 350px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-2" class="lazyload">
</iframe></div>

> [!NOTE]
> `igxRippleTarget` プロパティで対象する子要素は、相対的に配置する必要があります。


## スタイル設定

はじめに、テーマ エンジンによって公開されている関数を使用するために、スタイル ファイルにすべてのスタイリング機能とミックスインが配置されている `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```   

次に、[`igx-ripple-theme`]({environment:sassApiUrl}/index.html#function-igx-ripple-theme) を拡張し、必要に応じてリップルをカスタマイズするために必要なパラメーターを受け入れる新しいテーマを作成します。

```scss
$custom-ripple-theme: igx-ripple-theme(
  $color: #217346
);
```  

### CSS 変数の使用

次に Ripple のカスタム テーマを渡します。

```scss
@include igx-css-vars($custom-ripple-theme);
```

### コンポーネント テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。

コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
    ::ng-deep {
        // Pass the custom ripple theme to the `igx-ripple` mixin
        @include igx-ripple($custom-ripple-theme);
    }
}
```

>[!NOTE]
  > `igxRiple` ディレクティブを使用して設定される色は、カスタム テーマ内で設定される色よりも優先されます。  

## Angular Ripple の例
<div class="sample-container loading" style="height:200px">
    <iframe id="ripple-styling-sample-iframe" data-src='{environment:demosBaseUrl}/interactions/ripple-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming" alt="Angular Ripple の例"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="ripple-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="ripple-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>


## API リファレンス
<div class="divider--half"></div>

* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [IgxRipple スタイル]({environment:sassApiUrl}/index.html#function-igx-ripple-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
