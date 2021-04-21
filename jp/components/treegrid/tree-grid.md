---
title: Angular Tree Grid | 最速の Angular Tree テーブル | インフラジスティックス
_description: Ignite UI for Angular のツリー グリッドは、階層データまたはフラット データを簡単に表示および操作するために使用されます。コーディングをほとんど行わずにデータをバインドできます。無料でお試しください。
_keywords: angular データ グリッド, igniteui for angular, インフラジスティックス
_language: ja
---

# Angular ツリー グリッド 概要と構成

Ignite UI for Angular Tree Grid は、階層データまたはフラットデータを簡単に表示および操作できます。最小限のコードでデータをすばやくバインドするか、さまざまなイベントを使用してさまざまな動作をカスタマイズします。このコンポーネントは、データ選択、Excel スタイル フィルタリング、ソート、ページング、テンプレート、列移動などの豊富な機能を提供します。Material Table ベースの UI ツリー グリッドにより、表形式のデータの表示がさらに簡単できれいになりました。


## Angular ツリー グリッドの例

この例では、ユーザーが階層データまたはフラット データを操作する方法を確認できます。フィルタリングとソートのオプション、ピン固定と非表示、行の選択、Excel と csv へのエクスポート、[スパークライン](../sparkline.md)コンポーネントを使用したセル テンプレートが含まれています。さらに、[Angular 改ページ](paging.md)を使用したカスタム改ページの例を見ることができます。



<code-view style="height:850px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/tree-grid/treegrid-childdatakey" alt="Angular ツリー グリッドの例">
</code-view>

<div class="divider--half"></div>


## Ignite UI for Angular Tree Grid で作業を開始

ツリー グリッドを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](../general/getting-started.md)トピックををご覧ください。

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

## 使用方法

>[!NOTE]
>**このコンポーネントでは、タッチ操作が正しく動作するために、アプリケーションのルート モジュールに [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) をインポートする必要があります。**.

[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) は [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) と多数の機能を共有しますが、データを階層で表示する機能も追加されています。
[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) は、各データオブジェクトの[子コレクション](#子コレクション)または各データオブジェクトに[プライマリキーまたは外部キー](#プライマリと外部キー)を使用してデータ オブジェクト内の関係を定義できます。

### ツリー セル

ツリー グリッド階層の構築に使用するオプション (子コレクションまたは主キーまたは外部キー) にかかわらず、ツリー グリッドの行は 2 タイプのセルで構成されます。

- [`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) - 値を含む標準セル。
- [`IgxTreeGridCellComponent`]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html) - セル行のレベルに基づいた値、インジケーターの展開/縮小、インデント div 要素を含むツリー セル。インナー [`treeRow`]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html#treerow) の [`level`]({environment:angularApiUrl}/interfaces/itreegridrecord.html#level) プロパティでアクセスできる行コンポーネント レベル。

> [!NOTE]
> 各行にはツリー セルを 1 つのみ含むことができますが、標準セルは複数含むことが可能です。

### 初期展開時の深さ

初期時のツリーグリッドは、すべてのノード レベルを展開して表示します。この動作は、[`expansionDepth`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#expansiondepth) プロパティを使用して設定できます。デフォルトの値は **Infinity** ですべてのノードが展開されます。初期時の展開の深さは、このプロパティを数値に設定して制御できます。たとえば、**0** はルート レベルのノードのみを表示し、**1** はルートレベルと子ノードを表示します。

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
最初の列に集計機能、各列にはフィルタリング、ソート、編集、サイズ変更機能を有効にします。

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

最後に [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)、[`IgxGridToolbarHidingComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html)、[`IgxGridToolbarPinningComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarpinningcomponent.html) および [`IgxGridToolbarExporterComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarexportercomponent.html) を個別に使用して、列非表示、列ピン固定、エクスポートの機能を含むツリー グリッドのツールバーを有効にします。

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false" [rowSelectable]="true" [paging]="true" [allowFiltering]="true">
    <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
                <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
            </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [movable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```

このトピックのはじめにあるコードの結果は、[デモ](#デモ)で確認できます。

### プライマリと外部キー
**Primary and foreign keys** オプションを使用した際に各データオブジェクトはプライマリキーと外部キーを含みます。プライマリキーは現在のデータ オブジェクトの一意識別子、外部キーは親の一意識別子です。元のデータソースを含むツリー グリッドの [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) プロパティがフラットコレクションになります。

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

上記サンプル データはすべてのレコードに ID (ParentID と Name、JobTitle、Age.などの追加のプロパティ) があります。レコードの ID は一意である必要があります。ParentID は、親ノードの ID を含みます。行にツリーグリッドのいずれの行にも一致しない ParentID がある場合、行がルート行であることを意味します。

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

更に [`rowSelectable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowselectable) プロパティを使用してツリーグリッドの行選択機能、および各列でフィルタリング、ソート、編集、移動、サイズ変更機能を有効にします。

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


<code-view style="height:450px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/tree-grid/treegrid-primaryforeignkey" >
</code-view>

<div class="divider--half"></div>

## パーシステンスとインテグレーション

**ツリー セル**のインデントは、フィルタリング、ソート、ページングなど他のツリーグリッド全体の機能で永続化されます。

- **sorting** が列に適用された際にデータ行がレベルごとにソートされます。ルートレベルの行はそれぞれの子に関係なく個々にソートされます。各子コレクションは個々にソートされます。
- 最初の列 ([`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleindex) 0 を持つ列は、常にツリー列です。
- 列ピン固定、列の非表示、列移動などの処理後に 0 の [`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleindex) で終わる列はツリー列になります。
- エクスポートした Excel ワークシートは、ツリーグリッドでグループ化されるときにレコードをグループ化して階層に反映できます。すべてのレコードを展開した状態が保持および反映されます。
- CSV レベルにエクスポートする際に展開した状態は無視されてすべてのデータがフラットでエクスポートされます。

<div class="divider--half"></div>

## Angular ツリー グリッド サイズ変更

[Grid サイズ変更](sizing.md) トピックを確認してください。

## Angular ツリー グリッド スタイル設定

[Ignite UI for Angular テーマ ライブラリ](../themes/component-themes.md)でスタイルを設定できます。ツリー グリッドの [テーマ]({environment:sassApiUrl}/index.html#function-igx-grid-theme)  は、さまざまなプロパティを公開します。これにより、ツリーグリッドのすべての機能をカスタマイズできます。

Tree Grid (ツリー グリッドのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが含まれる `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

次に、[`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme) を拡張し、必要に応じてツリー グリッドをカスタマイズするために必要なパラメーターを受け取る新しいテーマを作成します。

>[!NOTE]
>`sass` 階層グリッド固有の機能はありません。

```scss
$custom-theme: igx-grid-theme(
  $cell-active-border-color: #FFCD0F,
  $cell-selected-background: #6F6F6F,
  $row-hover-background: #F8E495,
  $row-selected-background: #8D8D8D,
  $header-background: #494949,
  $header-text-color: #FFF,
  $expand-icon-color: #FFCD0F,
  $expand-icon-hover-color: #E0B710,
  $resize-line-color: #FFCD0F,
  $row-highlight: #FFCD0F
);
```

最後にコンポーネントのテーマを**含めます**。

```scss
@include igx-grid($custom-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
    ::ng-deep {
        @include igx-grid($custom-theme);
    }
}
```

### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) と [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #FFCD0F;
$black-color: #494949;
$custom-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

次に [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取得できます。 

```scss
$custom-theme: igx-grid-theme(
    $cell-active-border-color: igx-color($custom-palette, "secondary", 500),
    $cell-selected-background: igx-color($custom-palette, "primary", 300),
    $row-hover-background: igx-color($custom-palette, "secondary", 100),
    $row-selected-background: igx-color($custom-palette, "primary", 100),
    $header-background: igx-color($custom-palette, "primary", 500),
    $header-text-color: igx-contrast-color($custom-palette, "primary", 500),
    $expand-icon-color: igx-color($custom-palette, "secondary", 500),
    $expand-icon-hover-color: igx-color($custom-palette, "secondary", 600),
    $resize-line-color: igx-color($custom-palette, "secondary", 500),
    $row-highlight: igx-color($custom-palette, "secondary", 500)
);
```

### スキーマの使用

テーマ エンジンを使用して[**スキーマ**](../themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`light-grid`]({environment:sassApiUrl}/index.html#variable-_light-grid)) の 1 つを拡張します。

```scss
// Extending the light tree grid schema
$custom-grid-schema: extend($_light-grid, (
    cell-active-border-color: (igx-color:('secondary', 500)),
    cell-selected-background: (igx-color:('primary', 300)),
    row-hover-background: (igx-color:('secondary', 100)),
    row-selected-background: (igx-color:('primary', 100)),
    header-background: (igx-color:('primary', 500)),
    header-text-color: (igx-contrast-color:('primary', 500)),
    expand-icon-color: (igx-color:('secondary', 500)),
    expand-icon-hover-color: (igx-color:('secondary', 600)),
    resize-line-color: (igx-color:('secondary', 500)),
    row-highlight: (igx-color:('secondary', 500))
));
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを拡張する必要があります。これは基本的にカスタム スキーマでコンポーネントをポイントし、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema, (
    igx-grid: $custom-grid-schema
));

// Defining grid-theme with the global light schema
$custom-theme: igx-grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
); 
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### Angular ツリー グリッド スタイル設定のデモ


<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-style" alt="Angular ツリー グリッド スタイル設定のデモ">
</code-view>

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

<div class="divider--half"></div>

## 既知の制限

|制限|説明|
|--- |--- |
|ツリー セルのテンプレート化|ツリーセルをテンプレート化する場合、セルの境界外にスパンするコンテンツはオーバレイに配置しない限り表示されません。|
|グループ化|グループ化機能は、ツリーグリッドに継承されるためサポートされません。|

> [!NOTE]
> ツリー グリッドには、25 レベルの深度制限があります。それ以上のレベルをサポートするには、アプリケーションにカスタム CSS クラスを追加する必要があります。以下には、このような CSS クラスの例を示します。

```scss
.igx-grid__tree-cell--padding-level-26 {
    padding-left: 39rem;
}
```

> [!NOTE]
> `igxTreeGrid` は内部で `igxForOf` ディレクティブを使用するため、すべての `igxForOf` の制限が `igxTreeGrid` で有効です。詳細については、[igxForOf 既知の問題](../for-of.html#既知の問題と制限) のセクションを参照してください。

<div class="divider--half"></div>

## API リファレンス

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxTreeGridCellComponent]({environment:angularApiUrl}/classes/igxtreegridcellcomponent.html)
* [IgxTreeGridRowComponent]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)


## その他のリソース

<div class="divider--half"></div>

* [Grid サイズ変更](sizing.md)
* [Data Grid](../grid/grid.md)
* [行編集](row-editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
