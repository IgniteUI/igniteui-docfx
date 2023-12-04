---
title: Angular Icon Button コンポーネント – Ignite UI for Angular
_description: 標準のアイコンをボタン機能で向上します。今すぐお試しください。
_keywords: Angular Icon Button コンポーネント, Angular Icon Button コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, Angular UI コンポーネント
_language: ja
---

# Angular Icon Button (アイコン ボタン) の概要

Ignite UI for Angular Icon Button ディレクティブを任意のアイコン要素に適用して高機能なボタンを構成できます。  `igxIconButton` には、flat、outlined、およびデフォルトの contained 3 つのタイプがあります。 

## Angular Icon Button の例

<code-view style="height: 70px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/icon-button-overview" alt="Angular Icon Button の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Icon Button を使用した作業の開始

Ignite UI for Angular Icon Button ディレクティブを初期化するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックををご覧ください。

次の手順は、`IgxIconButtonDirective` をスタンドアロンの依存関係としてインポートすることです:

```typescript
// home.component.ts

...
import { IgxIconButtonDirective } from 'igniteui-angular';
// import { IgxIconButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
        <button igxIconButton="outlined">
            <igx-icon>home</igx-icon>
        </button>`,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxIconButtonDirective]
})
export class HomeComponent {}
```

Ignite UI for Angular Icon Button ディレクティブをインポートしたので、要素で `igxIconButton` ディレクティブの使用を開始できます。

## Angular Icon Button のタイプ

### Flat アイコン ボタン

[`igxIconButton`]({environment:angularApiUrl}/classes/igxiconbuttondirective.html) ディレクティブを使用して、シンプルなフラット アイコン ボタンをコンポーネント テンプレートに追加します。

```html
<button igxIconButton="flat">
    <igx-icon>edit</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/flat-icon-button"></iframe>
</div>

### Contained アイコン ボタン

Contained アイコン ボタンを作成するには、`igxIconButton` プロパティの値を変更するだけです。タイプを選択しない場合、デフォルト値は `contained` です。

```html
<button igxIconButton>
    <igx-icon>favorite</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/contained-icon-button">
</iframe></div>

### Outlined アイコン ボタン

同様に、アウトライン タイプに切り替えることができます。

```html
<button igxIconButton="outlined">
    <igx-icon>more_vert</igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/outlined-icon-button">
</iframe></div>

## 例

### Disabled アイコン ボタン

アイコン ボタンを無効にしたい場合は、[`disabled`]({environment:angularApiUrl}/classes/igxiconbuttoncomponent.html#disabled) プロパティを使用できます。このサンプルでは、`igxIconButton` ディレクティブを使用してさまざまなファミリーのアイコンを使用する方法も示します。

```html
<button igxIconButton="flat" disabled>
    <igx-icon family="fa" name="fa-home"></igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/disabled-icon-button">
</iframe></div>

### SVG アイコン

マテリアル アイコンに加えて、 `igxIconButton` ディレクティブは、アイコンとしての SVG 画像の使用もサポートしています。これを行うには、まず [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) 依存関係を挿入し、次に [`addSvgIcon`]({environment:angularApiUrl}/classes/igxiconservice.html#addSvgIcon) メソッドを使用して SVG ファイルをキャッシュにインポートする必要があります。詳細については、Icon トピックの [SVG セクション](icon.md#svg-アイコン)を参照してください。

```typescript
constructor(private _iconService: IgxIconService) { }

public ngOnInit() {
    // register custom SVG icon
    this._iconService.addSvgIcon('rain', 'assets/images/card/icons/rain.svg', 'weather-icons');
}
```

```html
<button igxIconButton>
    <igx-icon family="weather-icons" name="rain"></igx-icon>
</button>
```

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/svg-icon-button">
</iframe></div>

### Size (サイズ) 

ユーザーは、`--ig-size` カスタム CSS プロパティを使用して、3 つの事前定義された `igxIconButton` サイズのいずれかを選択できます。デフォルトでは、コンポーネントのサイズは medium に設定されています。 

<code-view style="height: 70px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/icon-button-size" alt="Angular Icon Button サイズの例">
</code-view>
<div class="divider--half"></div>


上記のサンプルからわかるように、`igxIconButton` ディレクティブを使用して、`span` や `div` などの要素を Ignite UI for Angular スタイルのアイコン ボタンに変換することもできます。 

## Angular Icon Button のスタイル設定

最も簡単な方法は、CSS 変数を使用してアイコン ボタンの外観をカスタマイズする方法です。

```scss
[igxIconButton="contained"] {
    --background: #011627;
    --foreground: #fefefe;
    --hover-foreground: #011627dc;
    --hover-background: #ecaa53;
    --focus-foreground: #011627dc;
    --focus-background: #ecaa53;
    --focus-border-color: #0116276c;
    --active-foreground: #011627dc;
    --active-background: #ecaa53;
}
```

ボタンのスタイル設定に使用できるパラメーターの完全なリストについては、[`icon-button-theme`]({environment:sassApiUrl}/index.html#function-icon-button-theme) セクションを参照してください。

<code-view style="height: 100px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/icon-button-styling" >
</code-view>
<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxIconButtonDirective]({environment:angularApiUrl}/classes/igxiconbuttondirective.html)
* [IgxIconButton スタイル]({environment:sassApiUrl}/index.html#function-icon-button-theme)
* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
