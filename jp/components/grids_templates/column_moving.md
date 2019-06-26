---
title: 列移動 - ネイティブ Angular | Ignite UI for Angular
_description: 列移動機能は、標準ドラッグ/ドロップ マウス ジェスチャでインタラクティブに列を並べ替えます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Table, Angular Data Grid コンポーネント, Angular Data Table コンポーネント, Angular Data Grid コントロール, Angular Data Table コントロール, Angular Grid コンポーネント, Angular Table コンポーネント, Angular Grid コントロール, Angular Table コントロール, Angular 高パフォーマンス Grid, Angular 高パフォーマンス Data Table, 列移動, Grid 列移動, Angular Grid 列移動, Angular Data Table 列移動, Angular 列移動
_language: ja
---

### グリッドの列移動

Ignite UI for Angular の Grid コンポーネントは、標準ドラッグ/ドロップのマウス ジェスチャで**列移動**を使用した列の並び替えをサポートします。

固定列の列移動も可能なため、ピン固定していない列をドラッグしてピン固定領域内にドロップして列をピンを固定したり、ピン固定領域内から列をドラッグして非固定領域にドロップしてピン固定の解除ができます。

> [!NOTE]
> ヘッダーが再テンプレート化され、対応する列が移動可能 (またはグループ化可能) な場合は、テンプレート要素で **draggable** 属性を **false** に設定する必要があり、これにより適用されるイベントをすべて処理できます。

```html
<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon>
</ng-template>
```

#### デモ

<div class="sample-container loading" style="height:630px">
    <iframe id="column-moving-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-moving-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="column-moving-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

#### 概要
**列移動**は各列レベルで有効にできます。つまり、[**igx-grid**]({environment:angularApiUrl}/classes/igxgridcomponent.html) に移動可能な列と移動不可の列の両方を含むことができます。[`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の [`movable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#movable) 入力によって制御されます。

```html
<igx-column [field]="'Category'" [movable]="true"></igx-column>
```
> [!NOTE]
> ピン固定領域が最大幅 (グリッド幅合計の 80 %)を超えた場合、ドロップ操作が禁止されていてピン固定ができないことをヒントの表示でエンドユーザーに通知します。つまり、ピン固定領域に列をドロップできません。

#### イベント
列のドラッグアンドドロップ操作をカスタマイズするための列移動に関連するイベントが複数あります。[`onColumnMovingStart`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmovingstart)、[`onColumnMoving`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmoving)、[`onColumnMovingEnd`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmovingend) があります。
[`igx-grid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) の [`onColumnMovingEnd`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumnmovingend) イベントを処理し、列が新しい位置にドロップされたときにカスタム ロジックを実装できます。たとえば、Change On Year(%) 列の後に Category のドロップをキャンセルできます。

```html
<igx-grid #dataGrid [data]="data" [autoGenerate]="false" (onColumnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Category'" [movable]="true"></igx-column>
    <igx-column [field]="'Change On Year(%)'" [dataType]="'number'" [movable]="true" ></igx-column>
</igx-grid>
```

```typescript
public onColumnMovingEnd(event) {
    if (event.source.field === "Category" && event.target.field === "Change On Year(%)") {
        event.cancel = true;
    }
}
```

### Styling

To get started with styling the @@igComponent column moving headers, we need to import the `index` file, where all the theme functions and component mixins live:

 ```scss
// custom-grid-column-moving-style.component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
 ``` 

Following the simplest approach, we create a new theme that extends the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) and accepts the `$ghost-header-background`, `$ghost-header-text-color` and the `$ghost-header-icon-color` parameters.

```scss
// Define dark theme for the column moving
$dark-grid-column-moving-theme: igx-grid-theme(
    $ghost-header-text-color: #F4D45C,
    $ghost-header-background: #575757,
    $ghost-header-icon-color: #f4bb5c
);
```

The last step is to **include** the component mixins with its respective theme:

```scss
@include igx-grid($dark-grid-column-moving-theme);
```

> [!NOTE]
> Depending on the component [**View Encapsulation**](/components/themes/component-themes.html#view-encapsulation) strategy, it may be necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
    ::ng-deep {
        @include igx-grid($dark-grid-column-moving-theme);
    }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [igx-palette]({environment:sassApiUrl}/index.html#function-igx-palette) and [igx-color]({environment:sassApiUrl}/index.html#function-igx-color) functions.


**igx-palette** generates a color palette based on the primary and secondary colors that are passed:
```scss
$yellow-color: #F4D45C;
$black-color: #575757;

$dark-palette: igx-palette($primary: $yellow-color, $secondary: $black-color);
```

And then with [**igx-color**]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the pallete.

```scss
$dark-grid-column-moving-theme: igx-grid-theme(
    $palette: $dark-palette,
    $ghost-header-text-color: igx-color($dark-palette, "primary", 400),
    $ghost-header-background: igx-color($dark-palette, "secondary", 200),
    $ghost-header-icon-color:  igx-color($dark-palette, "primary", 500)
);
```


> [!NOTE]
> The igx-color and igx-palette are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](/components/themes/palette.html) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [schemas](/components/themes/schemas.html). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [light-grid]({environment:sassApiUrl}/index.html#variable-_light-grid).

```scss
// Extending the dark grid schema
$dark-grid-column-moving-schema: extend($_light-grid,
        (
            ghost-header-text-color:(
                igx-color: ("primary", 400)
            ),
            ghost-header-background:(
                igx-color: ("secondary", 200)
            ),
            ghost-header-icon-color:(
                igx-color:( "primary", 500)
            )
        )
);
```

In order to apply our custom schema we have to **extend** one of the globals ([light]({environment:sassApiUrl}/index.html#variable-light-schema) or [dark]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component theme:

```scss
// Extending the global dark-schema
$custom-light-schema: extend($light-schema,(
    igx-grid: $dark-grid-column-moving-schema,
));

// Defining dark-grid-theme with the global dark schema
$dark-grid-column-moving-theme: igx-grid-theme(
  $palette: $dark-palette,
  $schema: $custom-light-schema
);
```

Don't forget to include the theme in the same way as it was demonstrated above.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="column-moving-styled-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-moving-styled-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="column-moving-styled-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="treegrid-column-moving-styled-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-moving-styled' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-column-moving-styled-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-column-moving-styled-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-moving-styled' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-column-moving-styled-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

### API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent の概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)
* [検索](search.md)
* [Excel エクスポーター](../exporter_excel.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
