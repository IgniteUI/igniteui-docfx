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

<div class="sample-container loading" style="height: 384px">
    <iframe id="icon-sample-1-iframe" seamless="" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-display/icon-sample-1" onload="onSampleIframeContentLoaded(this);">
</iframe></div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="icon-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
</div>
<div class="divider--half"></div>

### 依存関係
Icon コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

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
### 用方法

[`igx-icon`]({environment:angularApiUrl}/classes/igxiconcomponent.html) を使用して [`active`]({environment:angularApiUrl}/classes/igxiconcomponent.html#active) ホーム アイコンをマゼンタ [`color`]({environment:angularApiUrl}/classes/igxiconcomponent.html#iconcolor) に設定します。

```html
<igx-icon color="magenta">home</igx-icon>
```

inactive アイコンを設定します。
```html
<igx-icon [isActive]="false">volume_off</igx-icon>
```

コンテンツ プロジェクションでアイコンを設定します。

```html
<igx-icon color="red">bluetooth</igx-icon>
```

CSS でアイコン サイズを設定するには、カスタム CSS を作成して名前を *custom-size* とします。アイコン サイズは **font-size** プロパティで変更でき、更に中央揃えにするには、**width** と **height** を同じ値にします。
```html
<igx-icon color="#0375be" class="custom-size">phone_iphone</igx-icon>
```
```css
<!-- icon-sample2.component.scss -->

.custom-size{
    font-size: 56px;
    width: 56px;
    height: 56px;
}
```
<div class="sample-container loading" style="height: 80px; width: 300px">
    <iframe id="icon-sample2-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/icon-sample2" class="lazyload">
</iframe></div>

### SVG Icons

はじめに [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) 依存を注入します。この例では、 [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) 依存がコンポーネントのコンストラクタに注入されますが、コードで必要な場所に使用できます。

[`addSvgIcon`]({environment:angularApiUrl}/classes/igxiconservice.html#addsvgicon) メソッドを SVG ファイルをキャッシュにインポートするために使用します。SVG をキャッシュした場合、アプリケーションのどこでも使用できるようになります。アイコン名とファイル URL がメソッドに必須のパラメーターです。フォントセットも指定できます。HTML マークアップの SVG ファイルを使用できます。または `addSvgIconFromText` メソッドを使用して SVG ファイルをインポートして SVC テキスト コンテンツを使用できます。

* 同じ名前のアイコンが 2 つある場合に同じフォント セット SVG アイコンが優先順位に従って表示されます。
* SVG ファイルの画像の幅と高さは指定しないことをお勧めします。
* 追加のポリフィル スクリプトがインターネット　エクスプローラーで必要な場合があります。

```typescript
// svg-icon-sample.ts

constructor(private iconService: IgxIconService) { }

public ngOnInit() {
    // register custom SVG icons
    this.iconService.addSvgIcon("contains", "/assets/images/svg/contains.svg", "filter-icons");
}
```

```html
<!-- svg-icon-sample.html -->

<igx-icon name="contains" fontSet="filter-icons"></igx-icon>
```

<div class="sample-container loading" style="height: 50px">
    <iframe id="svg-icon-sample-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-display/svg-icon-sample" class="lazyload">
</iframe></div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="svg-icon-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

### サーバーサイド レンダリング時の注意

> Angular Universal を使用してアプリケーションにサーバー側のレンダリング ロジックを実装し、`IgxIconService` を使用してアイコンを登録した場合は、以下の例外が発生することがあります。
<br/>
`XMLHttpRequest is not defined. Could not fetch SVG from url.` (XMLHttpRequest が定義されていません。url から SVG をフェッチできませんでした。)　
<br/>
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
igxIcon では、[Ignite UI for Angular Theme ライブラリ](./themes/component-themes.md)でスタイルを設定できます。アイコンの[テーマ]({environment:sassApiUrl}/index.html#function-igx-icon-theme)は、コンポーネントの色をカスタマイズできるプロパティを公開します。

#### グローバル テーマのインポート
定義済みのアイコン レイアウトのスタイリングを開始するには、すべてのスタイリング機能と mixin が配置されている `index` ファイルをインポートする必要があります。  
```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```   

#### カスタム テーマの定義
[`igx-icon-theme`]({environment:sassApiUrl}/index.html#function-igx-icon-theme) を拡張し、必要に応じてアイコンをカスタマイズするために必要なパラメーターを受け入れる新しいテーマを簡単に作成できます。   
   

```scss
$custom-theme: igx-icon-theme(
  $color: #ffcd0f,
  $disabled-color: #494949
);
```   

#### カスタム カラー パレットの定義
上記で説明したアプローチでは、色の値がハード コーディングされていました。または、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して、柔軟性を高めることができます。   
`Igx-palette` は指定した一次色と二次色に基づいてカラーパレットを生成します。  

```scss
$black-color: #494949;
$yellow-color: #ffcd0f;

$custom-palette: igx-palette(
    $primary: $black-color,
    $secondary: $yellow-color
);
```   

カスタム パレットが生成された後、`igx-color` 関数を使用して、さまざまな種類の原色と二次色を取得できます。   

```scss
$custom-theme: igx-icon-theme(
    $color: igx-color($custom-palette, "secondary", 600),
    $disabled-color: igx-color($custom-palette, "primary", 500)
);
```

#### カスタム スキーマの定義
[**スキーマ**](./themes/schemas.md) のすべての利点を備えた柔軟な構造を構築できます。**schema** はテーマを作成させるための方法です。   
すべてのコンポーネントに提供される 2 つの事前定義されたスキーマのいずれかを拡張します。この場合、 `$_dark_icon` を使用します。   

```scss
$custom-icon-schema: extend($_dark-icon, (
    color: (igx-color("secondary", 500)),
    disabled-color: (igx-color("primary", 500))
));
```   
カスタム スキーマを適用するには、`light` グローバルまたは `dark` グローバルを拡張する必要があります。プロセス全体が実際にコンポーネントにカスタム スキーマを提供し、その後、それぞれのコンポーネントテーマに追加します。   

```scss
$my-custom-schema: extend($dark-schema, (
    igx-icon: $custom-icon-schema
));

$custom-theme: igx-icon-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

#### カスタム テーマの適用
テーマを適用する最も簡単な方法は、グローバル スタイル ファイルに `sass` `@include` ステートメントを使用することです。
```scss
@include igx-icon($custom-theme);
```

#### スコープ コンポーネント テーマ

カスタム テーマが特定のコンポーネントのみに影響するように、定義したすべてのスタイルをグローバル スタイル ファイルからカスタム コンポーネントのスタイルファイルに移動できます (`index` ファイルのインポートを含む)。

このように、Angular の [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation) により、スタイルはカスタム コンポーネントにのみ適用されます。

 >[!NOTE]
 >コンポーネントが[`エミュレート`](./themes/component-themes.md#表示のカプセル化)された ViewEncapsulation を使用している場合、グリッドのスタイル設定は `::ng-deep` を使用してこのカプセル化をペネトレーションする必要があります。
 >[!NOTE]
 >ステートメントがコンポーネントの外にある要素に影響を与えないよう、ステートメントを `:host` セレクター内にラップします。

```scss
:host {
    ::ng-deep {
        @include igx-icon($custom-theme);
    }
}
```    

#### デモ
<div class="sample-container loading" style="height:320px">
    <iframe id="icon-styling-sample-iframe" data-src='{environment:demosBaseUrl}/data-display/icon-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
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

