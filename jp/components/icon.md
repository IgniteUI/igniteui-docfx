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

### 使用方法

```html
<igx-icon color="magenta">home</igx-icon>
```

### コード例

[`igx-icon`]({environment:angularApiUrl}/classes/igxiconcomponent.html) を使用して [`active`]({environment:angularApiUrl}/classes/igxiconcomponent.html#active) ホーム アイコンをマゼンタ [`color`]({environment:angularApiUrl}/classes/igxiconcomponent.html#iconcolor) に設定します。

```html
<igx-icon color="magenta" isActive="true">home</igx-icon>
```

`inactive` アイコンを設定します。

```html
<igx-icon [isActive]="false">volume_off</igx-icon>
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

### Breaking Changes in 6.2.0
* The [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html) `iconName` property is deprecated. To set the icon name for 'material' icons, place the name of the icon between the opening and closing tags. For 'Font Awesome' and SVG icons, use the `name` property.

### API リファレンス
<div class="divider--half"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent Styles]({environment:sassApiUrl}/index.html#function-igx-icon-theme)

### その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

