@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 列固定|Lock Column |Ignite UI for Angular |Infragistics
_description: Angular Material テーブルの Ignite UI のピン留め機能で列をロック、また API で簡単に列の並べ替えを実装できます。
_keywords: lock column, ignite ui for angular, infragistics 
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid 列固定|Lock Column |Ignite UI for Angular |Infragistics
_description: Angular Material テーブルの Ignite UI のピン留め機能で列をロック、また API で簡単に列の並べ替えを実装できます。
_keywords: lock column, ignite ui for angular, infragistics 
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Tree Grid 列固定|Lock Column |Ignite UI for Angular |Infragistics
_description: Angular Material テーブルの Ignite UI のピン留め機能で列をロック、また API で簡単に列の並べ替えを実装できます。
_keywords: lock column, ignite ui for angular, infragistics 
---
}

### @@igComponent 列ピン固定 
単一または複数の列を Angular UI グリッドの左端にピン固定できます。Ignite UI for Angular の**列固定**は、ユーザーが特定の列順序で列をロックすることを可能にし、@@igComponent で水平スクロール時にロックされた列が常に表示されます。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-pinning-iframe" src='{environment:demosBaseUrl}/grid/grid-sample-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:670px">
    <iframe id="treegrid-sample-pinning-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-sample-pinning-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}

@@if (igxName === 'IgxGrid') {
### Styling   

The igxGrid allows styling through the [Ignite UI for Angular Theme Library](../themes/component-themes.md). The grid's [theme]({environment:sassApiUrl}/index.html#function-igx-grid-theme) exposes a wide variety of properties, which allow the customization of all the features of the grid.      

In the below steps, we are going through the steps of customizing the grid's Pinning styling.

#### Importing global theme
To begin the customization of the Pinning feature, you need to import the `index` file, where all styling functions and mixins are located.
```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```

#### Defining custom theme
Next, create a new theme, that extends the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) and accepts the parameters, required to customize the Pinning feature as desired.   

```scss
$custom-theme: igx-grid-theme(
    /* Pinning properties that affect styling */
    $pinned-border-width: 5px,
    $pinned-border-style: double,
    $pinned-border-color: #FFCD0F,
    $cell-active-border-color: #FFCD0F
    /* add other features properties here... */
);
```    

#### Defining a custom color palette
In the approach, that was described above, the color values were hardcoded. Alternatively, you can achieve greater flexibility, using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.   
`igx-palette` generates a color palette, based on provided primary and secondary colors.  

 ```scss
$primary-color: #292826;
$secondary-color: #ffcd0f;

$custom-palette: igx-palette(
  $primary: $primary-color,
  $secondary: $secondary-color
);
```   

After a custom palette has been generated, the `igx-color` function can be used to obtain different varieties of the primary and the secondary colors.   


```scss
$custom-theme: igx-grid-theme(
    $pinned-border-width: 5px,
    $pinned-border-style: double,
    $pinned-border-color: igx-color($custom-palette, "secondary", 500),
    $cell-active-border-color: igx-color($custom-palette, "secondary", 500)
);
```   

The `$custom-theme` contains the same properties as the one in the previous section, but this time the colors are not hardcoded. Instead, the custom `igx-palette` was used and the colors were obtained through its primary and secondary colors, with a given color variant.   

#### Defining custom schemas
You can go even further and build flexible structure that has all the benefits of a [**schema**](../themes/schemas.md). The **schema** is the recipe of a theme.   
Extend one of the two predefined schemas, that are provided for every component. In our case, we would use `$_light_grid`.   
```scss
$custom-grid-schema: extend($_light-grid,(
    pinned-border-width: 5px,
    pinned-border-style: double,
    pinned-border-color: igx-color:("secondary", 500),
    cell-active-border-color: igx-color:("secondary", 500)
));
```   
In order for the custom schema to be applied, either `light`, or `dark` globals has to be extended. The whole process is actually supplying a component with a custom schema and adding it to the respective component theme afterwards.     
```scss
$my-custom-schema: extend($light-schema, ( 
    igx-grid: $custom-grid-schema
));
$custom-theme: igx-grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

#### Applying the custom theme
The easiest way to apply your theme is with a `sass` `@include` statement in the global styles file: 
```scss
@include igx-grid($custom-theme);
```

#### Scoped component theme

In order for the custom theme do affect only specific component, you can move all of the styles you just defined from the global styles file to the custom component's style file (including the import of the `index` file).

This way, due to Angular's [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation), your styles will be applied only to your custom component.
 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
 >[!NOTE]
 >Wrap the statement inside of a `:host` selector to prevent your styles from affecting elements *outside of* our component:

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
    }
}
```
#### Demo

<div class="sample-container loading" style="height:506px">
    <iframe id="grid-pinning-styling" src='{environment:demosBaseUrl}/grid/grid-pinning-styling' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-pinning-styling" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

### ピン固定の制限

*   列幅をパーセンテージ (%) で設定した場合にピン固定列があると @@igComponent 本体およびヘッダー コンテンツが正しく配置されません。列のピン固定を正しく設定するには、列幅をピクセル (px) に設定するか、@@igComponent によって自動的に割り当てる必要があります。

<div class="divider--half"></div>

### トラブルシューティング

このセクションは、列固定機能で発生した問題を解決するためのトラブルシューティングを提供します。

#### 警告:

* `@@igxName - ピン固定領域がピン固定可能な最大幅を超過しています。次の列のピン固定は、問題を回避するため解除しています。.`- この警告は初期時にユーザーが列をピン固定を過剰に定義した場合にスローされます。初期時にピン固定した列の合計幅は、@@igComponent 幅の 80% を超えないようにしてください。超過した場合は、デフォルトで @@igComponent の最初の列を取得し、残りの列 (警告にリストされた列) はピン解除されます。@@igComponent でピン固定を初期化する前に [`onColumnInit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumninit) を使用し、初期化時に手動で列のピン固定解除するかどうかを決定するためのロジックを実行できます。各列でトリガーされます。

<div class="divider--half"></div>

### API リファレンス
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
