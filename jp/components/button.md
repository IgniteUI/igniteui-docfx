---
title: Button ディレクティブ
_description: Ignite UI for Angular の Button コントロールで規格のボタンに定義済みテキスト、画像、およびその他の機能を追加します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Button コンポーネント, Angular Button コントロール
_language: ja
---

# Button
<p class="highlight">Ignite UI for Angular Button ディレクティブを任意の button、span、div、または anchor 要素に適用して高機能なボタンを構成できます。</p>

## Angular Button の例
<div class="divider--half"></div>

<code-view style="height: 150px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-sample-1" alt="Angular Button の例">
</code-view>

<div class="divider--half"></div>

## 使用方法

Button ディレクティブは `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` に `IgxButtonModule` をインポートする必要があります:

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

## ボタン タイプ

### フラットボタン

[`igxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) ディレクティブを使用して、コンポーネント テンプレートにシンプルなフラット ボタンをコンポーネント テンプレートに追加します。タイプを選択しない場合、デフォルト値は `flat` です。

```html
<button igxButton="flat">Flat</button>
```


<code-view style="height: 70px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-sample-2" >
</code-view>

<div class="divider--half"></div>

## スタイル設定

ボタンのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

次に、[`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) を拡張し、それぞれのホバーとフォーカス パラメーターと共に ``$foreground` と `$background` パラメーターを受け入れる新しいテーマを作成します。

```scss
$custom-button-theme: igx-button-theme(
    $foreground: #fdfdfd,
    $hover-foreground: #fdfdfd,
    $focus-foreground: #fdfdfd,
    $background: #345779,
    $hover-background: #2e4d6b,
    $focus-background: #2e4d6b,
    $disabled-foreground: #2e4d6b
);
```

ボタンのスタイル設定に使用できるパラメーターの完全なリストについては、[`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) セクションを参照してください。

### CSS 変数の使用 

最後には、カスタム ボタン テーマをアプリケーションに渡します。 

```scss
 @include igx-css-vars($custom-button-theme);
```

### テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。

コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
     ::ng-deep {
        @include igx-button($custom-button-theme);
    }
}
```

### デモ


<code-view style="height: 100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/buttons-style" >
</code-view>

<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton スタイル]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [IgxButtonGroupComponent]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
