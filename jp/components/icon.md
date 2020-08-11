---
title: Icon コンポーネント
_description: Ignite UI for Angular Icon コンポーネントを使用して、様々なアイコンおよびフォント セットを統合して交互に使用し、カスタム色を定義できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Icon コンポーネント, Angular Icon コントロール
_language: ja
---

## Icon
<p class="highlight">Ignite UI for Angular Icon コンポーネントはアイコンおよびフォント セットを統合するため、交互の使用やマテリアル アイコンをマークアップに追加できます。</p>

### デモ

<div class="sample-container loading" style="height: 75px">
    <iframe id="icon-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-display/icon-sample-1" onload="onSampleIframeContentLoaded(this);">
</iframe></div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="icon-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                codesandbox で表示
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="icon-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 使用方法

Icon コンポーネントが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` への `IgxIconModule` のインポートのみが必要になります。

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
### 例

#### アイコンの色

デフォルトの色を変更するには、`igx-icon` コンポーネントの [`color`]({environment:angularApiUrl}/classes/igxiconcomponent.html#iconcolor) プロパティを使用します。

```html
<igx-icon color="#e41c77">home</igx-icon>
```
<div class="sample-container loading" style="height: 40px">
    <iframe id="icon-sample-3-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-3" class="lazyload">
</iframe></div>

#### アイコンの無効化

アイコンを無効にするには、[`active`]({environment:angularApiUrl}/classes/igxiconcomponent.html#active) を使用できます。

```html
<igx-icon [isActive]="false">volume_off</igx-icon>
```
<div class="sample-container loading" style="height: 40px">
    <iframe id="icon-sample-4-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-4" class="lazyload">
</iframe></div>

#### コンテンツ プロジェクション

コンテンツ プロジェクションでアイコンを設定できます。

```html
<igx-icon>bluetooth</igx-icon>
```

<div class="sample-container loading" style="height: 40px">
    <iframe id="icon-sample-5-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-5" class="lazyload">
</iframe></div>

#### アイコンのサイズ

CSS を使用してアイコンをカスタマイズできます。アイコン サイズは `font-size` プロパティで変更できます。さらに中央揃えにするには、`width` と `height` プロパティに等しい値を設定します。

```scss
.custom-size{
    font-size: 56px;
    width: 56px;
    height: 56px;
}
```
<div class="sample-container loading" style="height: 80px">
    <iframe id="icon-sample-2-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample-2" class="lazyload">
</iframe></div>

### SVG アイコン

SVG 画像はアイコンとして使用できます。はじめに [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) 依存を注入します。この例ではコンポーネントのコンストラクタに注入されますが、コード内の必要な場所に使用できます。

[`addSvgIcon`]({environment:angularApiUrl}/classes/igxiconservice.html#addsvgicon) メソッドを SVG ファイルをキャッシュにインポートするために使用します。SVG をキャッシュした場合、アプリケーションのどこでも使用できるようになります。アイコン名とファイル URL がメソッドに必須のパラメーターです。フォントセットも指定できます。HTML マークアップの SVG ファイルを使用できます。または `addSvgIconFromText` メソッドを使用して SVG ファイルをインポートして、SVC テキスト コンテンツを使用できます。

* 同じ名前のアイコンが 2 つある場合に同じフォント セット SVG アイコンが優先順位に従って表示されます。
* SVG ファイルの画像の幅と高さは指定しないことをお勧めします。
* 追加のポリフィル スクリプトがインターネット　エクスプローラーで必要な場合があります。

```typescript
constructor(private iconService: IgxIconService) { }

public ngOnInit() {
    // register custom SVG icons
    this.iconService.addSvgIcon("contains", "/assets/images/svg/contains.svg", "filter-icons");
}
```

```html
<igx-icon name="contains" fontSet="filter-icons"></igx-icon>
```

<div class="sample-container loading" style="height: 70px">
    <iframe id="svg-icon-sample-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/svg-icon-sample" class="lazyload">
</iframe></div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="svg-icon-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                codesandbox で表示
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="svg-icon-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
</div>

### サーバーサイド レンダリング時の注意

> Angular Universal を使用してアプリケーションにサーバー側のレンダリング ロジックを実装し、`IgxIconService` を使用してアイコンを登録した場合は、以下の例外が発生することがあります。
<br/><br/>
`XMLHttpRequest is not defined. Could not fetch SVG from url.` (XMLHttpRequest が定義されていません。url から SVG をフェッチできませんでした。)　
<br/><br/>
これを避けるためには、以下の順序に従って下さい。
<ol>
<li>
`xmlhttprequest` のインストール:
```cmd
npm i xmlhttprequest
```
</li>
<li>
`Server.ts` ファイル以外に追加するファイル:  
``` typescript
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
```
</li>
</ol>

### スタイル設定

アイコンのスタイル設定を始めるには、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法は、[`igx-icon-theme`]({environment:sassApiUrl}/index.html#function-igx-icon-theme) を拡張し、必要に応じてアイコンをカスタマイズするために必要なパラメーターを受け入れる新しいテーマを作成する方法です。

```scss
$custom-icon-theme: igx-icon-theme(
  $color: #1481b8,
  $disabled-color: #494949
);
```   

#### CSS 変数の使用 

最後には、カスタム アイコン テーマをアプリケーションに渡します。

```scss
 @include igx-css-vars($custom-icon-theme);
```

#### テーマ オーバーライドの使用

Internet Explorer 11 などの古いブラウザーのコンポーネントをスタイル設定するには、CSS 変数をサポートしていないため、別のアプローチを用いる必要があります。

コンポーネントが [`Emulated`](themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化をペネトレーションする必要があります。カスタム テーマが他のコンポーネントに影響しないようにするには、`::ng-deep` の前に `:host` セレクターを含めるようにしてください。

```scss
:host {
     ::ng-deep {
        @include igx-icon($custom-icon-theme);
    }
}
```

#### デモ
<div class="sample-container loading" style="height:75px">
    <iframe id="icon-styling-sample-iframe" data-src='{environment:demosBaseUrl}/data-display/icon-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="icon-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="icon-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### 6.2.0 の重大な変更

* [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html) `iconName` プロパティは非推奨です。「マテリアル」アイコンのアイコン名を設定するには、開始タグと終了タグの間にアイコンの名前を配置します。'Font Awesome' と SVG のアイコンには `name` プロパティを使用します。

### API リファレンス
<div class="divider--half"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-icon-theme)

### その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
