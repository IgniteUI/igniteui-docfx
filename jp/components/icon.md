---
title: Icon コンポーネント
_description: Ignite UI for Angular Icon コンポーネントを使用して、様々なアイコンおよびフォント セットを統合して交互に使用し、カスタム色を定義できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Icon コンポーネント, Angular Icon コントロール
_language: ja
---

# Angular Icon (アイコン) コンポーネントの概要

<p class="highlight">Ignite UI for Angular Icon コンポーネントはアイコンおよびフォント ファミリを統合するため、交互の使用やマテリアル アイコンをマークアップに追加できます。</p>

## Angular Icon の例

<code-view style="height: 75px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/icon-sample-1" alt="Angular Icon の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Icon を使用した作業の開始

Ignite UI for Angular Icon コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxIconModule` をインポートします。

```typescript
// app.module.ts

import { IgxIconModule } from 'igniteui-angular';
// import { IgxIconModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxIconModule,
        ...
    ]
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxIconComponent` をスタンドアロンの依存関係としてインポートできます。

```typescript
// home.component.ts

import { IgxIconComponent } from 'igniteui-angular';
// import { IgxIconComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: '<igx-icon [style.color]="color">home</igx-icon>',
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IgxIconComponent],
})
export class HomeComponent {
  public color = '#e41c77';
}
```

Ignite UI for Angular Icon モジュールまたはコンポーネントをインポートしたので、`igx-icon` コンポーネントの使用を開始できます。

## Angular Icon の使用

### アイコンの色

`style.color` CSS プロパティを使用して、デフォルトの色を変更します。

```html
<igx-icon [style.color]="#e41c77">home</igx-icon>
```

<div class="sample-container loading" style="height: 40px">
    <iframe id="icon-sample-3-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-3" class="lazyload">
</iframe></div>

### アイコンの無効化

アイコンを無効にするには、[`active`]({environment:angularApiUrl}/classes/igxiconcomponent.html#active) を使用できます。

```html
<igx-icon [active]="false">volume_off</igx-icon>
```

<div class="sample-container loading" style="height: 40px">
    <iframe id="icon-sample-4-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-4" class="lazyload">
</iframe></div>

### コンテンツ プロジェクション

コンテンツ プロジェクションでアイコンを設定できます。

```html
<igx-icon>bluetooth</igx-icon>
```

<div class="sample-container loading" style="height: 40px">
    <iframe id="icon-sample-5-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-5" class="lazyload">
</iframe></div>

### アイコンのサイズ

CSS を使用してアイコンをカスタマイズできます。アイコンのサイズを変更するには、`--size` CSS 変数を使用します。

```scss
.custom-size {
  --size: 56px;
}
```

<div class="sample-container loading" style="height: 80px">
    <iframe id="icon-sample-2-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-2" class="lazyload">
</iframe></div>

## SVG アイコン

SVG 画像はアイコンとして使用できます。はじめに [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) 依存を注入します。この例ではコンポーネントのコンストラクタに注入されますが、コード内の必要な場所に使用できます。

[`addSvgIcon`]({environment:angularApiUrl}/classes/igxiconservice.html#addSvgIcon) メソッドを SVG ファイルをキャッシュにインポートするために使用します。SVG をキャッシュした場合、アプリケーションのどこでも使用できるようになります。アイコン名とファイル URL がメソッドに必須のパラメーターです。ファミリも指定できます。HTML マークアップの SVG ファイルを使用できます。または `addSvgIconFromText` メソッドを使用して SVG ファイルをインポートして、SVC テキスト コンテンツを使用できます。

* 同じ名前のアイコンが 2 つある場合に同じファミリ SVG アイコンが優先順位に従って表示されます。
* SVG ファイルの画像の幅と高さは指定しないことをお勧めします。
* 追加のポリフィル スクリプトがインターネット エクスプローラーで必要な場合があります。

```typescript
constructor(private iconService: IgxIconService) { }

public ngOnInit() {
    // register custom SVG icons
    this.iconService.addSvgIcon('contains', '/assets/images/svg/contains.svg', 'filter-icons');
}
```

```html
<igx-icon name="contains" family="filter-icons"></igx-icon>
```

<code-view style="height: 70px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/svg-icon-sample" >
</code-view>

## マテリアル シンボル

さらに、ユーザーは新しく作成された[`マテリアル シンボル ライブラリ`](https://fonts.google.com/icons)に含まれる最新のマテリアル アイコンとそのデザイン バリエーションを利用できます。マテリアル シンボルの使用を開始するには、まずライブラリをアプリケーションに追加する必要があります。

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
```

次に、[`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) 依存関係を注入し、その `setFamily` メソッドを利用して、マテリアル シンボルが `igx-icon` で動作できるようにする必要があります。

```ts
constructor(private iconService: IgxIconService) { }

public ngOnInit() {
    // registers a 'material-symbols-outlined' class to be applied to all igx-icons with 'material-symbols' font-family
    this.iconService.setFamily('material-symbols', { className: 'material-symbols-outlined', type: 'liga' });
}
```

これで、目的のアイコンをマークアップに追加し、調整可能なフォント スタイルを使用してカスタマイズする準備が整いました。

```html
<igx-icon family="material-symbols" name="diamond" class="custom-icon"></igx-icon>
```

```scss
.custom-icon {
  font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 40;
}
```

<code-view style="height: 70px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/material-symbols" >
</code-view>

マテリアル シンボル スタイルの詳細については、[`公式ドキュメント`](https://fonts.google.com/icons)をご覧ください。

## サーバーサイド レンダリング時の注意

> [!NOTE]
> Angular Universal を使用してアプリケーションにサーバー側のレンダリング ロジックを実装し、`IgxIconService` を使用してアイコンを登録した場合は、以下の例外が発生することがあります。
> <br/><br/>`XMLHttpRequest is not defined. Could not fetch SVG from url.` (XMLHttpRequest が定義されていません。url から SVG をフェッチできませんでした。)> <br/><br/>
> これを避けるためには、以下の順序に従って下さい。
<ol>
<li>
`xmlhttprequest` のインストール:

```cmd
npm i xmlhttprequest
```

</li>
<li>
`server.ts` ファイル以外に追加するファイル:

```typescript
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
```

</li>
</ol>

## スタイル設定

アイコンのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`icon-theme`]({environment:sassApiUrl}/index.html#function-icon-theme) を拡張し、必要に応じてアイコンをカスタマイズするために必要なパラメーターを受け入れる新しいテーマを作成する方法です。

```scss
$custom-icon-theme: icon-theme(
  $color: #1481b8,
  $disabled-color: #494949,
);
```

最後には、カスタム アイコン テーマをアプリケーションに渡します。

```scss
@include css-vars($custom-icon-theme);
```

### デモ

<code-view style="height:75px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/icon-styling" alt="Angular Icon の例">
</code-view>

### SVG の制限

カスタム SVG アイコンを使用する場合、[`icon-theme`]({environment:sassApiUrl}/index.html#function-icon-theme) は `<svg>` 要素自体の色のみを適用および上書きできることに注意することが重要です。SVG 内に `<path>`、`<rect>`、`<circle>`、`<g>` などの子要素が含まれており、それらにハードコードされたカラー値が設定されている場合、その色はテーマから上書きできません。

例:

```html
<svg>
    <path fill="#050d42"/>
</svg>
```

このような場合、アイコンは常に `<path>` 要素内で定義された `#050d42` の色を使用し、テーマで指定された色は反映されません。

```html
<svg fill="#050d42">
    <path .../>
</svg>
```

ここでは、塗りつぶしの色が `<svg>` 要素に適用されているため、[`icon-theme`]({environment:sassApiUrl}/index.html#function-icon-theme) で提供されるカスタム カラーで上書きできます。

アイコン全体を [`icon-theme`]({environment:sassApiUrl}/index.html#function-icon-theme) を使用してスタイル設定できるように、SVG 子要素にハードコードされた色を使用しないことをお勧めします。ただし、子要素にハードコードされた色を適用する場合は、Ignite UI のカラー変数を使用することもできます。

```html
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <!-- This element uses the theme color from the igx-icon component -->
  <path d="M12 2L15 8H9L12 2Z" />

  <!-- This element uses an accent color from Ignite UI palette -->
  <circle cx="12" cy="17" r="4" fill="var(--ig-primary-500)" />
</svg>
```

### カスタム サイズ変更

`igx-icon` を直接ターゲットとして `--size` 変数を使用することができます。

```scss
igx-icon {
  --size: 50px;
}
```

または、ユニバーサル変数 `--igx-icon-size` を使用して、すべてのインスタンスをターゲットにすることもできます。

```html
<div class="my-app">
  <igx-icon></igx-icon>
</div>
```

```scss
.my-app {
  --igx-icon-size: 50px;
}
```

事前定義されたサイズの 1 つを使用して、それを `--ig-size` 変数に割り当てることもできます。`--ig-size` に使用可能な値は、`--ig-size-small`、`--ig-size-medium`、`--ig-size-large` です。

```scss
igx-icon {
  --ig-size: var(--ig-size-medium);
}
```

詳細については、[サイズ](display-density.md)の記事をご覧ください。

## API リファレンス

<div class="divider--half"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent スタイル]({environment:sassApiUrl}/index.html#function-icon-theme)

## その他のリソース

<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
