---
title: Tree Grid コンポーネント
_description: Ignite UI for Angular Tree Grid コントロールは、タッチ レスポンシブなデータ グリッドです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コントロール Suite, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Tree Grid コンポーネント, Angular Tree Grid コントロール, Angular Tree Grid コンポーネント, Angular 高パフォーマンス Tree Grid, Tree Grid
---

## ツリー グリッド

<p class="highlight">統一性のあるテーブルとして書式設定されたスキーマで階層型データを表示および操作し、並べ替え、フィルタリング、集計、編集、列ピン固定、ページング、列移動、非表示など高度な機能を提供します。</p>

### デモ

<div class="sample-container loading" style="height:850px">
    <iframe id="treegrid-childdatakey-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-childdatakey' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-childdatakey-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### はじめに

ツリー グリッドが NgModule としてエクスポートされるため、アプリケーションで `AppModule` に `IgxTreeGridModule` をインポートする必要があります。

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
[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) は、各データオブジェクトの [child collection](#child-collection) または各データオブジェクトに[プライマリキーまたは外部キー](#primary-and-foreign-keys)を使用してデータ オブジェクト内の関係を定義できます。

### ツリー セル

ツリー グリッド階層の構築に使用するオプション (子コレクションまたは主キーまたは外部キー) にかかわらず、ツリー グリッドの行は 2 タイプのセルで構成されます。

- [`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) - 値を含む標準セル。
- [`IgxTreeGridCellComponent`]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html) - セル行のレベルに基づいた値、インジケーターの展開/縮小、インデント div 要素を含むツリー セル。インナー [`treeRow`]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html#treerow) の [`level`]({environment:angularApiUrl}/interfaces/itreegridrecord.html#level) プロパティでアクセスできる行コンポーネント レベル。

> [!NOTE]
> 各行にはツリー セルを 1 つのみ含むことができますが、標準セルは複数含むことが可能です。

### 初期展開時の深さ

初期時のツリーグリッドは、すべてのノード レベルを展開して表示します。この動作は、[`expansionDepth`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#expansiondepth) プロパティを使用して設定できます。デフォルトの値は **Infinity** ですべてのノードが展開されます。初期時の展開の深さは、このプロパティを数値に設定して制御できます。たとえば、 **0** はルート レベルのノードのみを表示し、**1** はルートレベルと子ノードを表示します。

### 子コレクション
**child collection** オプションを使用して各データ オブジェクトは子コレクションを含み、親データ オブジェクトとして同じタイプの項目で生成します。これによりツリー グリッドの各レコードがその子への直接の参照を持つことができます。元のデータソースを含むツリー グリッドの [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) プロパティが階層が定義されたコレクションになります。

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

最後に [`showToolbar`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#showtoolbar), [`columnHiding`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnhiding), [`columnPinning`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnpinning), [`exportExcel`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#exportexcel) and [`exportCsv`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#exportcsv) を個別に使用して、列非表示、列ピン固定、エクスポートの機能を含むツリー グリッドのツールバーを有効にします。

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

### プライマリと外部キー
**primary and foreign keys** オプションを使用した際に各データオブジェクトはプライマリキーと外部キーを含みます。プライマリキーは現在のデータ オブジェクトの一意識別子、外部キーは親の一意識別子です。元のデータソースを含むツリー グリッドの [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) プロパティがフラットコレクションになります。

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
    <iframe id="treegrid-primaryforeignkey-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-primaryforeignkey' width="100%" height="100%" seamless="" frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-primaryforeignkey-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### パーシステンスとインテグレーション

**ツリー セル**のインデントは、フィルタリング、並べ替え、ページングなど他のツリーグリッド全体の機能で永続化されます。

- **sorting** が列に適用された際にデータ行がレベルごとに並べ替えられます。ルートレベルの行はそれぞれの子に関係なく個々に並べ替えられます。各子コレクションは個々に並べ替えられます。
- 最初の列 ([`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleindex)　を持つ列は、常にツリー列です。
- 列ピン固定、列の非表示、列移動などの処理後に 0 の [`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleindex) で終わる列はツリー列になります。
- エクスポートした Excel ワークシートは、ツリーグリッドでグループ化されるときにレコードをグループ化して階層に反映できます。すべてのレコードを展開した状態が保持および反映されます。
- CSV レベルにエクスポートする際に展開した状態は無視されてすべてのデータがフラットでエクスポートされます。

<div class="divider--half"></div>

### キーボード ナビゲーション

Tree Grid では、キーボード ナビゲーションがデフォルトで有効です。エンドユーザーの要件に合わせて機能を追加できます。以下は、特定のセルをフォーカスして以下のキーの組み合わせを押した場合の動作を示します。

 - `上矢印` - 1 つ上のセルへ移動 (ラッピングなし);
 - `下矢印` - 1 つ下のセルへ移動 (ラッピングなし);
 - `左矢印` - 1 つ左のセルへ移動 (行間のラッピングなし);
 - `右矢印` - 1 つ右のセルへ移動 (行間のラッピングなし);
 - `Ctrl + 上矢印` - 現在の列の最初のセルへ移動
 - Ctrl + 下矢印` - 現在の列の最後のセルへ移動
 - Ctrl + 左矢印` -  行の左端のセルへ移動;
 - `Home` - 行の左端のセルへ移動;
 - `Ctrl + Home` - グリッドの左上のセルへ移動;
 - `Ctrl + 右矢印` -  行の右端のセルへ移動;
 - `End` - 行の右端のセルへ移動;
 - `Ctrl + End` - グリッドの右下のセルへ移動;
 - `Page Up` - 1 ページ (ビューポート) 上へスクロール;
 - `Page Down` - 1 ページ (ビューポート) 下へスクロール;
 - `Enter` - 編集モードに入る;
 - `F2` - 編集モードに入る;
 - `Esc` - 編集モードを終了する;
 - `Tab` - フォーカスを行の次のセルへ順番に移動し、最後のセルのあとは次の行へ移動します。次の行がグループ行の場合、行全体がフォーカスされます。データ行の場合、最初のセルにフォーカスを移動します。セルが編集モードの場合、フォーカスを次の編集可能なセルへ移動し、編集可能な一番右のセルから`CANCEL`、`DONE` ボタン、`DONE` から編集可能な一番左のセルへ移動します。次のセルが編集できない場合は選択する必要があります。
 - `Shift + Tab` - 行の前のセルへフォーカスを順番に移動し、最初のセルの次に前の行へフォーカスを移動します。セルが編集モードの場合、行で編集可能な前のセルにフォーカスを移動します。編集可能な一番右のセルから `CANCEL`、`DONE` ボタンへ、`DONE` から編集可能な一番左のセルへ移動します。セルが編集できない場合は選択する必要があります。
 - `Space` - 行が選択可能な場合、スペースキーを押下すると行選択をトリガーします。
 - ` Alt + 左矢印 ` Tree Grid 行の上 - セルが選択されてフォーカスされたままになり、選択されたセル行に子がある場合、その行が折りたたまれます。
 - ` Alt + 上矢印 ` Tree Grid 行の上 - セルが選択されてフォーカスされたままになり、選択されたセル行に子がある場合、その行が折りたたまれます。
 - ` Alt + 右矢印 ` Tree Grid 行の上 - セルが選択されてフォーカスされたままになり、選択されたセル行に子がある場合、その行がエキスパンダーりたたまれます。
 - ` Alt + 下矢印 ` Tree Grid 行の上 - セルが選択されてフォーカスされたままになり、選択されたセル行に子がある場合、その行がエキスパンダーりたたまれます。
 - マウス `ホイール` - フォーカス要素をぼかします。

<div class="divider--half"></div>

## 既知の問題と制限

|制限|説明|
|--- |--- |
|ツリー セルのテンプレート化|ツリーセルをテンプレート化する場合、セルの境界外にスパンするコンテンツはオーバレイに配置しない限り表示されません。|
|グループ化|グループ化機能は、ツリーグリッドに継承されるためサポートされません。|


<div class="divider--half"></div>

## API リファレンス

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxTreeGridCellComponent]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html)
* [IgxTreeGridRowComponent]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)


## その他のリソース

<div class="divider--half"></div>

* [データ グリッド](../grid/grid.md)
* [行編集](row_editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular ** フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
