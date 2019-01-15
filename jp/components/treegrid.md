---
title: Tree Grid コンポーネント
_description: Ignite UI for Angular Tree Grid コントロールは、タッチ レスポンシブなデータ グリッドです。
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid component, Angular Tree Grid control, Angular Tree Grid component, Angular High Performance Tree Grid, Tree Grid
_language: ja
---

## ツリー グリッド

<p class="highlight">階層型データを統一性のあるテーブルとして書式設定したスキーマで表示、操作し、並べ替え、フィルタリング、集計、編集、列ピン固定、ページング、列移動、非表示など高度な機能をサポートします。</p>

### デモ

<div class="sample-container loading" style="height:850px">
    <iframe id="treegrid-childdatakey-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-childdatakey' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-childdatakey-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### はじめに

ツリー グリッドが NgModule としてエクスポートされるため、アプリケーションで `AppModule` に [`IgxTreeGridModule`]({environment:angularApiUrl}/classes/igxtreegridmodule.html)  をインポートする必要があります。

```typescript
// app.module.ts

import { IgxTreeGridModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxTreeGridModule,
        ...
    ]
})
export class AppModule {}
```

### 使用方法

[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) は [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) と多数の機能を共有しますが、データを階層で表示する機能も追加されています。
[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) は、各データオブジェクトの**子コレクション**または各データオブジェクトに**主キーまたは外部キー**を使用してデータ オブジェクト内の関係を定義できます。

#### ツリー セル

ツリー グリッド階層の構築に使用するオプション (子コレクションまたは主キーまたは外部キー) にかかわらず、ツリー グリッドの行は 2 タイプのセルで構成されます。

- [`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) - 値を含む標準セル。
- [`IgxTreeGridCellComponent`]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html) - セル行のレベルに基づいた値、インジケーターの展開/縮小、インデント div 要素を含むツリー セル。インナー [`treeRow`]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html#treerow) の [`level`]({environment:angularApiUrl}/interfaces/itreegridrecord.html#level) プロパティでアクセスできる行コンポーネント レベル。

> [!NOTE]
> 各行にはツリー セルを 1 つのみ含むことができますが、標準セルは複数含むことが可能です。

#### 初期展開時の深さ

初期時のツリーグリッドは、すべてのノード レベルを展開して表示します。この動作は、[`expansionDepth`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#expansiondepth) プロパティを使用して設定できます。デフォルトの値は **Infinity** ですべてのノードが展開されます。初期時の展開の深さは、このプロパティを数値に設定して制御できます。たとえば、 **0** はルート レベルのノードのみを表示し、**1** はルートレベルと子ノードを表示します。

#### 子コレクション
**子コレクション**のオプションを使用して各データ オブジェクトは子コレクションを含み、親データ オブジェクトとして同じタイプの項目で生成します。これによりツリー グリッドの各レコードがその子への直接の参照を持つことができます。元のデータソースを含むツリー グリッドの [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) プロパティが階層が定義されたコレクションになります。

このサンプルでは、コレクション ストラクチャを使用します。

```typescript
// Sample Employee Data

export const EMPLOYEE_DATA = [
    {
        Name: "Johnathan Winchester",
        ID: 1,
        HireDate: new Date(2008, 3, 20),
        Age: 55,
        Employees: [
            {
                Name: "Michael Burke",
                ID: 3,
                HireDate: new Date(2011, 6, 3),
                Age: 43,
                Employees: []
            },
            {
                Name: "Thomas Anderson"
                ID: 2,
                HireDate: new Date(2009, 6, 19),
                Age: 29,
                Employees: []
            },
            ...
        ]
    },
    ...
]
```

データ コレクションをインポートしてツリーグリッドの [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) 入力にバインドします。

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData">
</igx-tree-grid>
```

IgxTreeGridComponent を階層にバインドするには、[`childDataKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#childdatakey) プロパティを各データ オブジェクトで使用される子コレクションの名前に設定します。このサンプルでは **Employees** コレクションです。
更に自動列生成を無効にしてデータ オブジェクトの実際のプロパティとの一致を手動で定義します。**Employees** コレクションが階層で自動的に使用されるため、列定義に含める必要はありません。

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false">
    <igx-column field="Name" dataType="string"></igx-column>
    <igx-column field="HireDate" dataType="date"></igx-column>
    <igx-column field="Age" dataType="number"></igx-column>
</igx-tree-grid>
```

[`rowSelectable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowselectable) と [`paging`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#paging) を使用してツリー グリッドの行選択とページング機能を有効にします。
最初の列に集計機能、各列にはフィルタリング、並べ替え、編集、サイズ変更機能を有効にします。

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false" [rowSelectable]="true" [paging]="true" [allowFiltering]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"
                [hasSummary]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```

最後に [`showToolbar`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#showtoolbar)、[`columnHiding`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnhiding), [`columnPinning`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnpinning)、[`exportExcel`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#exportexcel)、 [`exportCsv`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#exportcsv) プロパティを個別に使用して、列非表示と列ピン固定機能を含むツリー グリッドのツールバーを有効にします。

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false" [rowSelectable]="true" [paging]="true" [allowFiltering]="true"
               [showToolbar]="true" toolbarTitle="Employees" [columnHiding]="true" [columnPinning]="true"
               [exportExcel]="true" [exportCsv]="true" exportExcelText="To Excel" exportCsvText="To CSV">
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```

このトピックのはじめにあるコードの結果は、[デモ](#demo)で確認できます。

#### プライマリと外部キー
**primary and foreign keys**オプションを使用した際に各データオブジェクトはプライマリキーと外部キーを含みます。プライマリキーは現在のデータ オブジェクトの一意識別子、外部キーは親の一意識別子です。元のデータソースを含むツリー グリッドの [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) プロパティがフラットコレクションになります。

以下は、主と外部キーの関係を定義したフラット コレクションを含むコンポーネントの例です。

```typescript
// treeGridSample.component.ts

@Component({
    ...
})
export class MyComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        // Primary and Foreign keys sample data
        this.data = [
            { ID: 1, ParentID: -1, Name: "Casey Houston", JobTitle: "Vice President", Age: 32 },
            { ID: 2, ParentID: 1, Name: "Gilberto Todd", JobTitle: "Director", Age: 41 },
            { ID: 3, ParentID: 2, Name: "Tanya Bennett", JobTitle: "Director", Age: 29 },
            { ID: 4, ParentID: 2, Name: "Jack Simon", JobTitle: "Software Developer", Age: 33 },
            { ID: 5, ParentID: 8, Name: "Celia Martinez", JobTitle: "Senior Software Developer", Age: 44 },
            { ID: 6, ParentID: -1, Name: "Erma Walsh", JobTitle: "CEO", Age: 52 },
            { ID: 7, ParentID: 2, Name: "Debra Morton", JobTitle: "Associate Software Developer", Age: 35 },
            { ID: 8, ParentID: 10, Name: "Erika Wells", JobTitle: "Software Development Team Lead", Age: 50 },
            { ID: 9, ParentID: 8, Name: "Leslie Hansen", JobTitle: "Associate Software Developer", Age: 28 },
            { ID: 10, ParentID: -1, Name: "Eduardo Ramirez", JobTitle: "Development Manager", Age: 53 }
        ];
    }
}
```

上記サンプル データはすべてのレコードに ID (ParentID と Name, JobTitle、Age.などの追加のプロパティ) があります。レコードの ID は一意である必要があります。ParentID は、親ノードの ID を含みます。行にツリーグリッドのいずれの行にも一致しない ParentID がある場合、行がルート行であることを意味します。

親子関係は、ツリーグリッドの  [`primaryKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#primarykey) と [`foreignKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#foreignkey) プロパティを使用して設定されます。

上記フラット コレクションで定義されたデータを表示するツリーグリッドを設定する方法を示すコンポーネントのテンプレートです。

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
    [autoGenerate]="false">
    <igx-column field="Name" dataType="string"></igx-column>
    <igx-column field="JobTitle" dataType="string"></igx-column>
    <igx-column field="Age" dataType="number"></igx-column>
</igx-tree-grid>
```

更に [`rowSelectable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowselectable) プロパティを使用してツリーグリッドの行選択機能、および各列でフィルタリング、並べ替え、編集、移動、サイズ変更機能を有効にします。

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
    [autoGenerate]="false" [rowSelectable]="true" [allowFiltering]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="JobTitle" dataType="string" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```

以下は結果です。

<div class="sample-container loading" style="height:450px">
    <iframe id="treegrid-primaryforeignkey-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-primaryforeignkey' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-primaryforeignkey-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Tree Grid 行編集

行編集 - ツリー グリッド データソースに変更をサブミットする前に行の複数セルを一度に変更することが可能です。新しいトランザクション プロバイダーの保留中の変更を利用できます。

[`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) が有効な場合、[`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) プロパティが定義されていない場合も [field]({environment:angularApiUrl}/classes/igxcolumncomponent.html#field) プロパティが定義されたすべての列 ([`primaryKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#primarykey) を除く) が編集可能になります。特定の列の編集を無効にする場合、[`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) 列の入力を false に設定します。
以下の手順では、グリッドの [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) プロパティで行編集を有効にする方法を示します。

ツリー グリッドをバインド データソースで定義して [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) を true に設定します。

```html
    <igx-tree-grid #treeGrid1 [data]="data" primaryKey="EmployeID" foreignKey="PID" width="100%" height="500px"
        rowEditable=true rowSelectable=true>
        <igx-column *ngFor="let c of columns"
            [editable]="c.editable"
            [field]="c.field"
            [dataType]="c.dataType"
            [header]="c.label"
            [movable]="c.movable"
            [resizable]="c.resizable"
            [sortable]="c.sortable"
            [filterable]="c.filterable"
            >
        </igx-column>
    </igx-tree-grid>
```

> [!NOTE]
> 行編集を含む編集操作でプライマリキーの設定は必須です。
> [!NOTE]
> 各列の編集を有効にする必要はありません。グリッドで[`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) プロパティを使用するとプライマリ行以外 [`field`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#field) プロパティを定義したすべての行が編集可能になります。特定の列の編集を無効にする場合、[`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) 列の入力を false に設定します。

```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
...

@Component({
    providers: [],
    selector: "app-tree-grid-row-editing-sample",
    styleUrls: ["tree-grid-row-editing-sample.component.scss"],
    templateUrl: "tree-grid-row-editing-sample.component.html"
})
export class TreeGridRowEditSampleComponent implements OnInit {

    public data: any[];
    public columns: any[];

    @ViewChild("treeGrid1") public treeGrid1: IgxTreeGridComponent;
    public ngOnInit(): void {
        this.data = FLAT_DATA;
        this.columns = [
            { field: "FirstName", label: "First Name", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" },
            { field: "LastName", label: "Last Name", resizable: false, movable: false, sortable: false, filterable: false, editable: true, dataType: "string" },
            { field: "Title", label: "Title", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" },
            { field: "HireDate", label: "Hire Date", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "date" }
        ];
    }

```

> [!NOTE]
> グリッドは、保留中のセル変更を保持するプロバイダー [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) を行ステートをサブミットまたはキャンセルするまで内部使用します。

以下は結果です。

<div class="sample-container loading" style="height:590px">
    <iframe id="tree-grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-row-edit' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>

#### パーシステンスとインテグレーション

**ツリー セル**のインデントは、フィルタリング、並べ替え、ページングなど他のツリーグリッド全体の機能で永続化されます。

- **sorting**が列に適用された際にデータ行がレベルごとに並べ替えられます。ルートレベルの行はそれぞれの子に関係なく個々に並べ替えられます。各子コレクションは個々に並べ替えられます。
- 最初の列 [`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleindex) は、常にツリー列です。
- 列ピン固定、列の非表示、列移動などの処理後に 0 の [`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleindex) で終わる列はツリー列になります。
- エクスポートした Excel ワークシートは、ツリー グリッドでグループ化されたレコードをグループ化した階層に反映します。すべてのレコードを展開した状態が保持および反映されます。
- CSV レベルにエクスポートする際に展開した状態は無視されるため、すべてのデータがフラットでエクスポートされます。

<div class="divider--half"></div>

### 既知の問題と制限

|制限|説明|
|--- |--- |
|ツリー セルのテンプレート化|ツリーセルをテンプレート化する場合、セルの境界外にスパンするコンテンツはオーバレイに配置しない限り表示されません。|
|検索 API|検索 API はツリーグリッドで現在サポートされておりません。|
|グループ化|グループ化機能は、ツリーグリッドに継承されるためサポートされません。|


<div class="divider--half"></div>

### API リファレンス

<div class="divider--half"></div>

* [`IgxTreeGridModule`]({environment:angularApiUrl}/classes/igxtreegridmodule.html)
* [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [`IgxTreeGridCellComponent`]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html)
* [`IgxTreeGridRowComponent`]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)
* [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [`IgxGridComponent Styles`]({environment:sassApiUrl}/#function-igx-grid-theme)
* [`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [`IgxGridRowComponent`]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)


### その他のリソース

<div class="divider--half"></div>

* [Data Grid](grid.md)
* [Grid Editing](grid_row_editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
