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

<div class="sample-container" style="height: 384px">
    <iframe id="icon-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/icon-sample-1"  onload="onSampleIframeContentLoaded(this);">
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="icon-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                StackBlitz で表示
    </button>
</div>
<div class="divider--half"></div>

### 依存関係

Icon コンポーネントが `NgModule` としてエクスポートされるため、アプリケーションで `AppModule` への [`IgxIconModule`]({environment:angularApiUrl}/classes/igxiconmodule.html) のインポートのみが必要になります。

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
<div class="sample-container" style="height: 80px; width: 300px">
    <iframe id="icon-sample2-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/icon-sample2"  onload="onSampleIframeContentLoaded(this);">
</div>

You can also use a SVG image as an icon. First, inject [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) dependency. In this example [`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html) dependency is injected in a component's constructor but you can use it wherever it is needed in your code. 

Use the [`addSvgIcon`]({environment:angularApiUrl}/classes/igxiconservice.html#addsvgicon) method to import the SVG file in cache. When the SVG is cached, it can be used anywhere in the application. Icon name and file URL path are method's mandatory parameters, you can specify font-set ase well. After that, you can use the SVG files in the HTML markup. Alternatively, you can use the `addSvgIconFromText` method to import the SVG file providing the SVG text content instead of the file URL.

* Have in mind that if there are two icons with the same name and the same font-set - SVG icon will be displayed with priority.
* It is better not to provide image width and height in the SVG file.
* You may need additional polyfill scripts ("polyfills") for Internet Explorer.

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

<div class="sample-container" style="height: 50px">
    <iframe id="svg-icon-sample-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/svg-icon-sample"  onload="onSampleIframeContentLoaded(this);">
</div>
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

