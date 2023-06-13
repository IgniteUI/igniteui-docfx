---
title: Ripple ディレクティブ
_description: Ignite UI for Angular Ripple ディレクティブは、リップル アニメーション エフェクトが適用されている領域を定義できます。
_keywords: Angular Ripple component, Angular Ripple Directive, Angular Ripple control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
_language: ja
---

# Angular Ripple Directive Overview

<p class="highlight">Ignite UI for Angular Ripple コンポーネントは、タッチまたはマウス クリックに応答してアニメーションを作成します。</p>

### Angular Ripple の例

<div class="divider--half"></div>

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-sample-5" alt="Angular Ripple の例">
</code-view>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Ripple Directive

To get started with the Ignite UI for Angular Ripple directive, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxRippleModule` in the **app.module.ts** file.

```typescript
// app.module.ts

import { IgxRippleModule } from 'igniteui-angular';
// import { IgxRippleModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxRippleModule,
        ...
    ]
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxRippleDirective` as standalone dependencies.

```typescript
// home.component.ts
import { IgxRippleDirective, IgxButtonDirective } from 'igniteui-angular';
// import { IgxRippleDirective, IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package
@Component({
    selector: 'app-home',
    template: '<button igxButton="raised" igxRipple>Click Me</button>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxRippleDirective, IgxButtonDirective]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Ripple module or directive imported, you can start using the `igxRipple` directive.

> [!WARNING]
> [`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) は Web Animation API を使用し、[サポートされるブラウザー](http://caniuse.com/#feat=web-animation)でネイティブに実行します。その他のブラウザーでは `web-animations.min.js` [ポリフィル](https://github.com/web-animations/web-animations-js)を使用します。

## Using the Angular Ripple Directive

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

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-sample-6" alt="Angular Ripple の例">
</code-view>

### 中央揃えのリップル エフェクト
デフォルトでリップル エフェクトはクリック イベントの位置から開始します。この動作で要素の中点を原点に変更するには、[`igxRippleCentered`]({environment:angularApiUrl}/classes/igxrippledirective.html#centered) プロパティを使用できます。

```html
<button igxButton="raised" igxRipple="white" [igxRippleCentered]="true">Centered</button>
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-sample-3" alt="Angular Ripple の例">
</code-view>

### リップルの期間
[`igxRippleDuration`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippleDuration) プロパティを使用して、リップルアニメーションの期間を変更できます。これは、デフォルトで 600 ミリ秒に設定されています。

```html
<button igxButton="raised" igxRipple [igxRippleDuration]="2000">Click Me</button>
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-sample-4" alt="Angular Ripple の例">
</code-view>

### リップルの対象要素
[`igxRippleTarget`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippleTarget) プロパティを使用して親要素内の特定の要素にリップル エフェクトをアタッチします。

```html
<div class="parent" igxRipple="white" igxRippleTarget=".child" [igxRippleCentered]="true">
    ...
    <button class="sample-button child" igxButton="raised">Read More</button>
</div>
```
親要素または子要素をクリックしても、リップル エフェクトはボタンにのみ表示されます。

<code-view style="height: 350px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-sample-2" alt="Angular Ripple の例">
</code-view>

> [!NOTE]
> `igxRippleTarget` プロパティで対象する子要素は、相対的に配置する必要があります。


## スタイル設定

はじめに、テーマ エンジンによって公開されている関数を使用するために、スタイル ファイルにすべてのスタイリング機能とミックスインが配置されている `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```   

次に、[`ripple-theme`]({environment:sassApiUrl}/index.html#function-ripple-theme) を拡張し、必要に応じてリップルをカスタマイズするために必要なパラメーターを受け入れる新しいテーマを作成します。

```scss
$custom-ripple-theme: ripple-theme(
  $color: #217346
);
```  

### CSS 変数の使用

次に Ripple のカスタム テーマを渡します。

```scss
@include css-vars($custom-ripple-theme);
```

### コンポーネント テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。

コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
    ::ng-deep {
        // Custom ripple theme を `igx-ripple` ミックスインに渡します
        @include ripple($custom-ripple-theme);
    }
}
```

>[!NOTE]
  > `igxRiple` ディレクティブを使用して設定される色は、カスタム テーマ内で設定される色よりも優先されます。  

## Angular Ripple の例

<code-view style="height:200px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-styling" alt="Angular Ripple の例">
</code-view>



## API リファレンス
<div class="divider--half"></div>

* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [IgxRipple スタイル]({environment:sassApiUrl}/index.html#function-ripple-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
