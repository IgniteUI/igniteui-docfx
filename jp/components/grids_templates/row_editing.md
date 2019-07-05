﻿---
title: Angular Grid Row Editing | UI Grid | Ignite UI for Angular | Infragistics
_description: Learn how to configure in row data manipulations with Ignite UI for Angular. Intuitive grid row editing and CRUD capabilities are available with the UI grid.
_keywords: row editing, igniteui for angular, infragistics
_language: ja
---

### @@igComponent Row Editing and Usage

Row editing allows updating of several cells in the row, before submitting, at once, all those changes. Grid Row Editing as part of the Angular CRUD is happening in row in the UI grid. Leverages the pending changes functionality of the new transaction provider.


#### デモ

以下の手順では、@@igComponent で行編集を有効にする方法を示します。セル値を変更してから同じ行の他のセルをクリックまたはナビゲーションした場合も Done ボタンを使用して確定するまで行値を更新しません。または Cancel ボタンを使用して破棄します。

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-row-editing' width="100%" height="100%"
    seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:590px">
    <iframe id="tree-grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-row-edit' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
   <div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>
}

> [!NOTE]
> 行が編集モードにある場合、他の行のセルをクリックすると Done ボタンが押されたように動作し、前の行の変更をすべての変更をサブミットします。フォーカスのある新しいセルが編集可能かどうか、新しい行が編集モードに入るかどうか、セルが編集できない場合は前の行のみ編集モードを終了します。

### 使用方法

`@@igxNameModule` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { @@igxNameModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., @@igxNameModule],
    ...
})
export class AppModule {}
```

次に @@igComponent をバインドしたデータソースで定義し、[`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) を true に設定してバインドします。
@@if (igxName ==='IgxGrid') {
```html
<div class="sample-wrapper">
    <igx-grid #gridRowEditTransaction [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
        [rowEditable]="true">
        <igx-column field="ProductID" header="Product ID" editable="false"></igx-column>
        <igx-column field="ReorderLevel" header="ReorderLever" [dataType]="'number'"></igx-column>
        <igx-column field="ProductName" header="ProductName" [dataType]="'string'"></igx-column>
        <igx-column field="UnitsInStock" header="UnitsInStock" [dataType]="'number'">
            <ng-template igxCellEditor let-cell="cell">
                <input name="units" [(ngModel)]="cell.value" style="color: black" />
            </ng-template>
        </igx-column>
        <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'"></igx-column>
    </igx-grid>
</div>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" [primaryKey]="EmployeID" [foreignKey]="PID" width ="100%"
               height ="500px" [rowEditable]="true" [rowSelectable]="true" [columnHiding]="true">
    <igx-column *ngFor="let c of columns"
        [editable] ="c.editable"
        [field]="c.field"
        [dataType]="c.dataType"
        [header]="c.label"
        [movable]="c.movable"
        [resizable]="c.resizable"
        [sortable]="c.sortable"
        [filterable]="c.filterable">
    </igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
        <igx-hierarchical-grid #hierarchicalGrid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'">
            <igx-column field="Artist" [editable]="true" [dataType]="'string'"></igx-column>
            <igx-column field="HasGrammyAward" [editable]="true" [dataType]="'boolean'">
            </igx-column>
            <igx-column field="Debut" [editable]="true" [dataType]="'number'"></igx-column>
            <igx-column field="GrammyNominations" [editable]="true" [dataType]="'number'" [hasSummary]="true"></igx-column>
            <igx-column field="GrammyAwards" [editable]="true" [dataType]="'number'"
            [hasSummary]="true"></igx-column>
            <igx-column width="10%">
                <ng-template igxCell let-cell="cell">
                    <button igxButton="icon" (click)="removeRow(cell.cellID.rowIndex)">
                        <igx-icon>delete</igx-icon>
                    </button>
                </ng-template>
            </igx-column>

        <igx-row-island [key]="'Albums'" #layout1 [autoGenerate]="false">
            <igx-column field="Album" [editable]="true" [dataType]="'string'"></igx-column>
            <igx-column field="Launch Date" [editable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="Billboard Review" [editable]="true" [dataType]="'number'"></igx-column>
            <igx-column field="US Billboard 200" [editable]="true" [dataType]="'number'"></igx-column>
            <igx-row-island [key]="'Songs'" [autoGenerate]="false">
                    <igx-column field="No."></igx-column>
                    <igx-column field="Title"></igx-column>
                    <igx-column field="Released"></igx-column>
                    <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
```
}

> [!NOTE]
> プライマリキーは行編集操作で必須です。

> [!NOTE]
> 各列の編集を有効にする必要はありません。@@igComponent で[`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) プロパティを使用するとプライマリ行以外 `field` プロパティを定義したすべての行が編集可能になります。特定の列の編集を無効にする場合、[`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) 列の入力を false に設定します。

@@if (igxName === 'IgxGrid') {
```typescript
import { Component, ViewChild } from "@angular/core";
import { data } from "./data";
import { IgxGridComponent } from "igniteui-angular";

@Component({
    selector: "app-grid-row-edit",
    styleUrls: [`grid-row-editing-sample.component.css`],
    templateUrl: "grid-row-editing-sample.component.html"
})
export class GridRowEditSampleComponent {
    @ViewChild("gridRowEdit", { read: IgxGridComponent }) public gridRowEdit: IgxGridComponent;

    public data: any[];

    constructor() {
        this.data = data;
    }
}
```
}

@@if (igxName === 'IgxTreeGrid') {
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { FLAT_DATA } from "./data";

@Component({
   providers: [],
    selector: "app-tree-grid-row-editing-sample",
    styleUrls: ["tree-grid-row-editing-sample.component.scss"],
    templateUrl: "tree-grid-row-editing-sample.component.html"
})
export class TreeGridRowEditSampleComponent implements OnInit {

    public data: any[];
    public columns: any[];

    @ViewChild("treeGrid") public treeGrid: IgxTreeGridComponent;
    public ngOnInit(): void {
        this.data = FLAT_DATA;

        this.columns = [
            { field: "FirstName", label: "First Name", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" },
            { field: "LastName", label: "Last Name", resizable: false, movable: false, sortable: false, filterable: false, editable: true, dataType: "string" },
            { field: "Title", label: "Title", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" },
            { field: "HireDate", label: "Hire Date", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "date" }
        ];
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from './data';

@Component({
    selector: "hierarchical-grid-row-editing",
    styleUrls: ["./hierarchical-grid-row-editing.component.scss"],
    templateUrl: "hierarchical-grid-row-editing.component.html"
})

export class HGridRowEditingSampleComponent implements OnInit {
    public localdata;

    @ViewChild('layout1')
    layout1: IgxRowIslandComponent;

    @ViewChild('hierarchicalGrid')
    hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
}
```
}

> [!NOTE]
> @@igComponent は、保留中のセル変更を保持するプロバイダー [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) を行ステートをサブミットまたはキャンセルするまで内部使用します。

### 配置

- オーバーレイのデフォルトの位置は編集モードで行の下にあります。

- 行の下にスペースがない場合、オーバーレイが行の上に表示されます。

- 一番上または下に表示されると、オーバーレイは閉じられるまでスクロール時にこの位置を保持します。

### 動作

- 行が編集モードの場合、編集が継続します。同じ行のセルがクリックされたかどうか。

- Done ボタンをクリックすると行編集を完了し、変更をデータソースまたはトランザクションへサブミットします。更に行が編集モードを完了します。

- Cancel ボタンがをクリックすると現在の行のすべての変更を元に戻し、行編集モードを終了します。

- 行が編集モードにある場合、他の行のセルをクリックすると現在の行編集を終了し、行の新規の変更をサブミット (Done ボタンをクリックした場合と同じ) します。フォーカスのある新しいセルが編集可能かどうか、新しい行が編集モードに入るかどうか、セルが編集できない場合は前の行のみ編集モードを終了します。

- 行が編集モードの時にグリッドがスクロールされると行が表示領域外になりますが、@@igComponent は編集モードのままです。@@igComponent をスクロールすると編集行は再度表示されますが編集行が編集モードのままになります。@@igComponent 以外をクリックしたときにセルも編集モードに残ります。

並べ替え、フィルタリング、検索、および非表示操作を実行すると、現在の行のすべての変更が元に戻され、行の編集モードを終了します。

ページング、サイズ変更、ピン留め、移動操作を実行すると、編集モードを終了して最新の値を送信します。

- 編集した各セルは行編集が終了するまで変更スタイルを取得します。@@igComponent がトランザクションで提供されない場合の動作です。トランザクションが有効な場合、すべての変更がコミットされるまでセル編集スタイルが適用されます。


### キーボード ナビゲーション

- `Enter` と F2 で行編集モードに入ります。

- `Esc` で行編集モードを終了し、行の編集モード時に変更されたいずれのセルの変更もサブミットしません。

- `Tab` で行の編集可能なセルから次のセルへフォーカスを移動、右端の編集可能なセルから CANCEL と Done ボタンへ移動します。DONE ボタンからのナビゲーションは現在の編集行内で編集可能なセルへ移動します。


### 機能の統合

- すべてのデータ変更操作は行変更操作を終了し、現在の行の変更をサブミットします。並べ替え、グループの変更、フィルタリング条件、ページングなどが含まれます。

- 行編集が終了した後に集計が更新されます。同様に並べ替えやフィルタリングなどの他の機能が有効になります。

@@if (igxName === 'IgxGrid') {
- グループ行の展開と縮小は現在の行の編集を終了しません。
}

### 行編集オーバーレイのカスタマイズ

#### テキストのカスタマイズ

`igxRowEditTextDirective` を使用した行編集オーバーレイのテキストのカスタマイズが可能です。
`rowChangesCount` プロパティが公開されて変更されたセルのカウントを保持します。

```html
<ng-template igxRowEditText let-rowChangesCount>
	Changes: {{rowChangesCount}}
</ng-template>
 ```

#### ボタンのカスタマイズ
`igxRowEditActionsDirective` を使用して行編集オーバーレイのボタンのカスタマイズが可能です。
キーボード ナビゲーションにボタンを含める場合、各ボタンに `igxRowEditTabStopDirective` が必要です。

 ```html
 <ng-template igxRowEditActions let-endRowEdit>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
 ```

### Styling

Using the [IgniteUI theme engine](../themes/index.md), we can greatly alter the row-editing overlay. 
In the below steps, we'll go through the process of changing the look of our row-editing banner by passing custom templates for with the `igxRowEditActions` and `igxRowEditText` directives and making use of the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme), [`igx-banner-theme`]({environment:sassApiUrl}/index.html#function-igx-banner-theme), [`igx-input-group-theme`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme) and [`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme).

#### Passing custom templates

The first thing we can do is pass our custom buttons and banner text in the component's template:

```html
<!-- in component.html -->
<@@igSelector>
    ...
    <ng-template igxRowEditText let-rowChangesCount>
        <span class="changes"> Changes: {{rowChangesCount}}</span>
    </ng-template>
    ...
    <ng-template igxRowEditActions let-endRowEdit>
        <span class="custom-failure">
            <button igxButton="icon" class="custom-button" igxRowEditTabStop (click)="endRowEdit(false)">
                <igx-icon>clear</igx-icon>
            </button>
        </span>
        <span class="custom-success">
            <button igxButton="icon" class="custom-button" igxRowEditTabStop (click)="endRowEdit(true)">
                <igx-icon>check</igx-icon>
            </button>
        </span>
    </ng-template>
    ...
</@@igSelector>
```

With this quick adjustment, our buttons will now be **X** and **✔** instead of **Dismiss** and **Done**. 
Now that we've added the custom templates, it's time for the theme engine to do some heavy lifting.

#### Import theme

In order for us to use the funcitons exposed by the theme engine, we need to import the `index` file in our style file: 

```scss
// in component.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

#### Define colors

After we've imported the `index` file we can go ahead and use the [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) and [`igx-contrast-color`]({environment:sassApiUrl}/index.html#function-igx-contrast-color) functions to define some color variables:
```scss
$banner-color: igx-color($default-palette, "primary", 400);
$editing-color: igx-contrast-color($default-palette, "primary", 200);
$success: igx-color($default-palette, "success", 500);
$failure: igx-color($default-palette, "error", 500);
```
All of the colors are based off of the [`$default-palette`]({environment:sassApiUrl}/index.html#variable-default-palette) - the default palette exposed by the igx-theme.

We'll use the colors as follows:
    - `$banner-color` - this will be the color we will use for the background of the row-editing overlay
    - `$editing-color` - we'll use this to change the background on the edited cell
    - `$success`, `$failure` - we'll generate a palette out of these and use it to style the buttons in the banner

#### Define palette & themes

Next, we can define our custom palette (for the buttons) and our custom themes which we would like to use. (You can learn more about palettes [here](../themes/palette.md))

To define the palette, we make use of the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) function:

```scss
$my-success-error-palette: igx-palette($primary: $success, $secondary: $failure);
```

In order to style the cell's background color, all we have to do is define a theme that extends the `igx-grid-theme` and change the property of `cell-editing-backgroud`:
```scss
$custom-grid: igx-grid-theme(
    $cell-editing-background: $editing-color
);
```

This changes the background of the cell, but not the input *inside of* the cell. For that, we'll have to use `igx-input-group-theme` function:
```scss
$input-group: igx-input-group-theme(
  $filled-text-color: $editing-color,
  $focused-text-color: $editing-color,
  $idle-text-color: $editing-color
);
```

Our custom grid and input-group themes will take care of the editing parts in the grid.
Now, all that's left is to define two more themes to style the row-editing overlay. The overlay itself is composed of a banner (the background-part) and the custom text and buttons we passed.
To style the banner, we'll create a custom banner theme and scope it to the overlay container:
```scss
$banner-theme: igx-banner-theme(
    $banner-background: igx-color($default-palette, "primary", 100),
    $banner-message-color: igx-contrast($default-palette, "primary", 100),
    $banner-border-color: igx-color($default-palette, "second", 800)
);
```

For the buttons, we'll need to create two themes - since we want the buttons to be different from one another and to have either a red or green highlight (for `dismiss` and `done`, resp.):
```scss
$button-theme-success: igx-button-theme(
    $icon-color: igx-contrast($my-success-error-palette, "primary", 200),
    $icon-hover-color: igx-contrast($my-success-error-palette, "primary", 600),
    $icon-focus-color: igx-contrast($my-success-error-palette, "primary", 300),
    $icon-background: igx-color($my-success-error-palette, "primary", 200),
    $icon-hover-background: igx-color($my-success-error-palette, "primary", 600),
    $icon-focus-background: igx-color($my-success-error-palette, "primary", 300)
);
$button-theme-failure: igx-button-theme(
    $icon-color: igx-contrast($my-success-error-palette, "secondary", 200),
    $icon-hover-color: igx-contrast($my-success-error-palette, "secondary", 600),
    $icon-focus-color: igx-contrast($my-success-error-palette, "secondary", 300),
    $icon-background: igx-color($my-success-error-palette, "secondary", 200),
    $icon-hover-background: igx-color($my-success-error-palette, "secondary", 600),
    $icon-focus-background: igx-color($my-success-error-palette, "secondary", 300)
);
```

To define the two themes, we use the custom palette we created earlier, since the `igx-palette` function conveniently creates color shades for us to use!

#### Apply the themes

All that's left is to properly scope our newly created themes to our component.
For the buttons, we can use our class selector that we added earlier, in the [templates](#passing-custom-templates) section

```scss
.custom-failure {
    @include igx-button($button-theme-failure);
  }

.custom-success {
    @include igx-button($button-theme-success);
  }
```

As for input, grid and banner themes, we pass them under the context of our sample component:
```scss
.sample-wrapper {
    @include igx-grid($custom-grid);
    @include igx-input-group($input-group);
    @include igx-banner($banner-theme);
}
```
>[!NOTE]
 >If the component is using an [`Emulated ViewEncapsulation`](../themes/component-themes.md#view-encapsulation), it is necessary to penetrate this encapsulation using `::ng-deep`:
 ```scss
    ::ng-deep {
        .sample-wrapper {
            @include igx-grid($custom-grid);
            @include igx-input-group($input-group);
            @include igx-banner($banner-theme);
        }
    }
```

#### Demo

@@if (igxName === 'IgxGrid'){
<div class="sample-container loading" style="height:560px">
    <iframe id="grid-row-edit-style-iframe" src='{environment:demosBaseUrl}/grid/grid-row-edit-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-edit-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid'){
<div class="sample-container loading" style="height:560px">
    <iframe id="hierarchical-grid-row-edit-style-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-edit-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>  
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-edit-style-iframe" 
        data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz
    </button>
</div>
}


@@if (igxName === 'IgxTreeGrid'){
<div class="sample-container loading" style="height:560px">
    <iframe id="treegrid-row-edit-style-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-row-edit-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>  
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="treegrid-row-edit-style-iframe" 
        data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz
    </button>
</div>
}

### API リファレンス

* [rowEditable]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable)
* [onRowEditEnter]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onroweditenter)
* [onRowEdit]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowedit)
* [onRowEditCancel]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onroweditcancel)
* [endEdit]({environment:angularApiUrl}/classes/@@igTypeDoc.html#endedit)
* [field]({environment:angularApiUrl}/classes/igxcolumncomponent.html#field)
* [editable]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable)
* [primaryKey]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [@@igComponent 編集](editing.md)
* [@@igComponent トランザクション](batch_editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
