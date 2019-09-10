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
単一または複数の列を Angular UI グリッドの左端にピン固定できます。Ignite UI for Angular の**列固定**は、ユーザーが特定の列順序で列をロックすることを可能にし、@@igComponent で水平スクロール時にロックされた列が常に表示されます。 The Material UI Grid has a built-in column pinning UI, which can be used through the @@igComponent's toolbar to change the pin state of the columns. In addition, you can define a custom UI and change the pin state of the columns via the Column Pinning API.

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="grid-sample-toolbar-pinning-iframe" src='{environment:demosBaseUrl}/grid/grid-sample-toolbar-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-toolbar-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:630px">
    <iframe id="treegrid-toolbar-pinning-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-sample-toolbar-pinning-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-toolbar-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
}

#### 列固定 API

ピン固定領域の幅が @@igComponent より大きくならない限り各列をピン固定できます。列のピン固定は [`igx-column`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) の `pinned` 入力によって制御されます。ピン固定列は常に @@igComponent の左側に描画され、@@igComponent 本体のピン固定されていない列の水平スクロールで固定されます。


@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data | async" [width]="700px" [autoGenerate]="false" [paging]="true" [perPage]="6" (onColumnInit)="initColumns($event)"
    (onSelection)="selectCell($event)">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber"></igx-column>
    <igx-column [field]="TrackProgress"></igx-column>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false">
    <igx-column [field]="Name" [pinned]="true"></igx-column>
    <igx-column [field]="Title"></igx-column>
    <igx-column [field]="ID"></igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" #hierarchicalGrid>
    <igx-column [field]="Artist" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="Debut" [width]="200px"></igx-column>
</igx-hierarchical-grid>
```
}

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) の @@igComponent の [`pinColumn`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pincolumn) または [`unpinColumn`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#unpincolumn) メソッドを使用してフィールド名によって列をピン固定またはピン固定解除できます。

@@if (igxName === 'IgxGrid') {
```typescript
this.grid.pinColumn("AthleteNumber");
this.grid.unpinColumn("Name");
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
this.treeGrid.pinColumn("Title");
this.treeGrid.unpinColumn("Name");
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
this.hierarchicalGrid.pinColumn("Artist");
this.hierarchicalGrid.unpinColumn("Debut");
```
}

両方のメソッドは操作に成功したかどうかを示すブール値を返します。よくある失敗の原因として列がすでにそのステートになっていることがあります。[`pinColumn`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pincolumn) は、@@igComponent よりピン固定領域が大きいか同じサイズの場合に失敗します。以下はその例です。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data | async" [width]="300px" [autoGenerate]="false">
    <igx-column [field]="Name" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="AthleteNumber" [width]="200px"></igx-column>
</igx-grid>
```

```typescript
var succeed = this.grid.pinColumn("AthleteNumber"); // pinning fails and succeed will be false
```

`AthleteNumber` 列をピン固定すると、ピン固定領域が @@igComponent の幅より大きくなります。
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" [width]="300px" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false">
    <igx-column [field]="Name" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="Title" [width]="200px"></igx-column>
</igx-tree-grid>
```

```typescript
var succeed = this.treeGrid.pinColumn("Title"); // pinning fails and succeed will be false
```

`Title` 列をピン固定すると、ピン固定領域が @@igComponent の幅より大きくなります。
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" #hierarchicalGrid>
    <igx-column [field]="Artist" [width]="200px" [pinned]="true"></igx-column>
    <igx-column [field]="Debut" [width]="200px"></igx-column>
</igx-hierarchical-grid>
```

```typescript
var succeed = this.hierarchicalGrid.pinColumn("Artist"); // pinning fails and succeed will be false
```

`Artist` 列をピン固定すると、ピン固定領域が @@igComponent の幅より大きくなります。
}

列をピン固定すると、一番右に配置されたピン固定列の右にピン固定されます。ピン固定列の順序を変更するには、[`onColumnPinning`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumnpinning) イベントでイベント引数の [`insertAtIndex`]({environment:angularApiUrl}/interfaces/ipincolumneventargs.html#insertatindex) プロパティを適切な位置インデックスに変更します。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="true" (onColumnPinning)="columnPinning($event)"></igx-grid>
```

```typescript
public columnPinning(event) {
    if (event.column.field === "Name") {
        event.insertAtIndex = 0;
    }
}
```
#### Demo

```typescript
public columnPinning(event) {
    if (event.column.field === "Name") {
        event.insertAtIndex = 0;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'800px'" 
        (onColumnPinning)="columnPinning($event)" #hierarchicalGrid>
</igx-hierarchical-grid> 
```

```typescript
public columnPinning(event) {
    if (event.column.field === "Artist") {
        event.insertAtIndex = 0;
    }
}
```
}

### Custom Column Pinning UI

You can define your custom UI and change the pin state of the columns via the related API.

Let's say that instead of a toolbar you would like to define pin icons in the column headers that the end user can click to change the particular column's pin state.
This can be done by creating a header template for the column with a custom icon.

@@if (igxName === 'IgxGrid') {

```html
<igx-grid #grid1 [data]="data" [width]="'100%'" [height]="'500px'">
    <igx-column #col *ngFor="let c of columns" [field]="c.field" [header]="c.header" [width]="c.width" [pinned]='c.pinned'
        [hidden]='c.hidden' [headerClasses]="'customHeaderSyle'">
        <ng-template igxHeader>
            <div class="title-inner">
                <span style="float:left">{{col.header}}</span>
                <igx-icon class="pin-icon" fontSet="fas" name="fa-thumbtack" (click)="toggleColumn(col)"></igx-icon>
            </div>
        </ng-template>
    </igx-column>
</igx-grid>
```

}

@@if (igxName === 'IgxTreeGrid') {

```html
<ng-template igxHeader let-column #pinTemplate>
    <div class="title-inner">
        <span style="float:left">{{column.header || column.field}}</span>
        <igx-icon class="pin-icon" [class.pinned]="column.pinned" [class.unpinned]="!column.pinned" fontSet="fas" name="fa-thumbtack"
            (click)="toggleColumn(column)"></igx-icon>
    </div>
</ng-template>
<div class="grid__wrapper">
    <igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" height="620px"
        width="100%">
        <igx-column [field]="'Name'" dataType="string" [headerTemplate]="pinTemplate" width="250px"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [headerTemplate]="pinTemplate" width="300px"></igx-column>
        <igx-column [field]="'ID'" dataType="number" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'HireDate'" header="Hire Date" dataType="date" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Age'" dataType="number" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Address'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'City'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Country'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Fax'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'PostalCode'" header="Postal Code" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
        <igx-column [field]="'Phone'" dataType="string" [headerTemplate]="pinTemplate" width="200px"></igx-column>
    </igx-tree-grid>
</div>
```

}

@@if (igxName === 'IgxHierarchicalGrid') {

```html
<ng-template igxHeader let-column #pinTemplate>
    <div class="title-inner">
        <span style="float:left">{{column.header || column.field}}</span>
        <igx-icon class="pin-icon" [class.pinned]="column.pinned" [class.unpinned]="!column.pinned" fontSet="fas" name="fa-thumbtack"
            (click)="toggleColumn(column)"></igx-icon>
    </div>
</ng-template>
<igx-hierarchical-grid class="hierarchicalGrid" [data]="localdata" [autoGenerate]="false"
    [height]="'500px'" [width]="'100%'" #hierarchicalGrid>
    <igx-column field="CompanyName" header="Company Name" [headerTemplate]="pinTemplate" width="200px" [pinned]="true"></igx-column>
    <igx-column field="ContactName" header="Contact Name" [headerTemplate]="pinTemplate" width="150px"></igx-column>
    <igx-column field="ContactTitle" header="Contact Title" [headerTemplate]="pinTemplate" width="200px"></igx-column>
    <igx-row-island [key]="'Orders'" [autoGenerate]="false">
            <igx-column field="OrderDate" header="Order Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="RequiredDate" header="Required Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="ShippedDate" header="Shipped Date" [headerTemplate]="pinTemplate" [dataType]="'date'" width="150px"></igx-column>
            <igx-column field="ShipVia" header="Ship Via" [headerTemplate]="pinTemplate" width="150px"></igx-column>
        <igx-row-island [key]="'OrderDetails'" [autoGenerate]="false">
                <igx-column field="UnitPrice" header="Unit Price" width="150px"></igx-column>
                <igx-column field="Quantity" width="150px"></igx-column>
                <igx-column field="Discount" width="150px"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```
}

On click of the custom icon the pin state of the related column can be changed using the column's API methods.

```typescript
public toggleColumn(col: IgxColumnComponent) {
    col.pinned ? col.unpin() : col.pin();
}
```

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="grid-sample-pinning-iframe" src='{environment:demosBaseUrl}/grid/grid-sample-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:630px">
    <iframe id="treegrid-sample-pinning-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-sample-pinning-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-pinning' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-pinning-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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

In order for the custom theme to affect only specific component, you can move all of the styles you just defined from the global styles file to the custom component's style file (including the import of the `index` file).

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
    <iframe id="grid-pinning-styling" data-src='{environment:demosBaseUrl}/grid/grid-pinning-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-pinning-styling" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

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
