---
title: Angular Tree Grid | 最速の Angular Tree テーブル | インフラジスティックス
_description: Ignite UI for Angular のツリー グリッドは、階層データまたはフラット データを簡単に表示および操作するために使用されます。コーディングをほとんど行わずにデータをバインドできます。無料でお試しください。
_keywords: angular tree grid, angular tree table, angular hierarchical tree grid コンポーネント, angular tree table コンポーネント, angular UI コンポーネント, igniteui for angular, インフラジスティックス
_language: ja
---

# Angular Tree Grid (ツリー グリッド) コンポーネントの概要

Ignite UI for Angular Tree Grid は、階層データまたはフラットな自己参照データを表示および操作できます。最小限のコードでデータをすばやくバインドするか、さまざまなイベントを使用してさまざまな動作をカスタマイズします。このコンポーネントは、データ選択、Excel スタイルのフィルタリング、ソート、ページング、グループ化、テンプレート化、列の移動、列のピン固定、Excel および CSV へのエクスポートなどの豊富な機能セットを提供します。

## Angular ツリー グリッドの例

In this example, you can see how users can display hierarchical data.フィルタリングとソートのオプション、ピン固定と非表示、行の選択、Excel と csv へのエクスポート、[スパークライン](../sparkline.md)コンポーネントを使用したセル テンプレートが含まれています。さらに、[Angular 改ページ](paging.md)を使用したカスタム改ページの例を見ることができます。

<code-view style="height:850px"
           data-demos-base-url="{environment:lobDemosBaseUrl}"
           iframe-src="{environment:lobDemosBaseUrl}/tree-grid/treegrid-childdatakey" alt="Angular ツリー グリッドの例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Tree Grid を使用した作業の開始

Ignite UI for Angular Tree Grid コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、[はじめに](../general/getting-started.md)トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxTreeGridModule` をインポートします。

```typescript
// app.module.ts

import { IgxTreeGridModule } from 'igniteui-angular';
// import { IgxTreeGridModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxTreeGridModule,
        ...
    ]
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxTreeGridComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_TREE_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/grids/tree-grid/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_TREE_GRID_DIRECTIVES } from 'igniteui-angular';
// import { IGX_TREE_GRID_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-tree-grid [data]="data"></igx-tree-grid>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_TREE_GRID_DIRECTIVES]
    /* or imports: [IgxTreeGridComponent] */
})
export class HomeComponent {
    public data: Employee [];
}
```

Ignite UI for Angular Tree Grid モジュールまたはディレクティブをインポートしたので、`igx-tree-grid` コンポーネントの使用を開始できます。

## Angular Tree Grid の使用

>[!NOTE]
>このコンポーネントは、**オプションで** [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) を利用できます。タッチ操作が正しく動作するために、アプリケーションのルート モジュールにインポートできます。

[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) は [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) と多数の機能を共有しますが、データを階層で表示する機能も追加されています。
[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) は、各データオブジェクトの[子コレクション](#子コレクション)または各データオブジェクトに[プライマリキーまたは外部キー](#プライマリと外部キー)を使用してデータ オブジェクト内の関係を定義できます。

### ツリー セル

ツリー グリッド階層の構築に使用するオプション (子コレクションまたは主キーまたは外部キー) にかかわらず、ツリー グリッドの行は 2 タイプのセルで構成されます。

- [`IgxGridCell`]({environment:angularApiUrl}/classes/igxgridcell.html) - 値を含む標準セル。
- [`IgxGridCell`]({environment:angularApiUrl}/classes/igxgridcell.html) - セル行のレベルに基づいた値、インジケーターの展開/縮小、インデント div 要素を含むツリー セル。インナー [`treeRow`]({environment:angularApiUrl}/classes/igxtreegridrow.html#treeRow) の [`level`]({environment:angularApiUrl}/interfaces/itreegridrecord.html#level) プロパティでアクセスできる行コンポーネント レベル。

> [!NOTE]
> 各行にはツリー セルを 1 つのみ含むことができますが、標準セルは複数含むことが可能です。

### 初期展開時の深さ

初期時のツリーグリッドは、すべてのノード レベルを展開して表示します。この動作は、[`expansionDepth`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#expansionDepth) プロパティを使用して設定できます。デフォルトの値は **Infinity** ですべてのノードが展開されます。初期時の展開の深さは、このプロパティを数値に設定して制御できます。たとえば、**0** はルート レベルのノードのみを表示し、**1** はルートレベルと子ノードを表示します。

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

IgxTreeGridComponent を階層にバインドするには、[`childDataKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#childDataKey) プロパティを各データ オブジェクトで使用される子コレクションの名前に設定します。このサンプルでは **Employees** コレクションです。
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

[`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowselection) と [`paging`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#paging) プロパティを使用してツリー グリッドの行選択とページング機能を有効にします。
最初の列に集計機能、各列にはフィルタリング、ソート、編集、サイズ変更機能を有効にします。

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false" [rowSelection]="'multiple'" [allowFiltering]="true" [moving]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [resizable]="true"
                [hasSummary]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-paginator>
    </igx-paginator>
</igx-tree-grid>
```

最後に [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)、[`IgxGridToolbarHidingComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html)、[`IgxGridToolbarPinningComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarpinningcomponent.html) および [`IgxGridToolbarExporterComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarexportercomponent.html) を個別に使用して、列非表示、列ピン固定、エクスポートの機能を含むツリー グリッドのツールバーを有効にします。

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="localData" childDataKey="Employees"
               [autoGenerate]="false" [rowSelection]="'multiple'" [allowFiltering]="true" [moving]="true">
    <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
                <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
            </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="HireDate" dataType="date" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-paginator [perPage]="6">
    </igx-paginator>
</igx-tree-grid>
```

このトピックのはじめにあるコードの結果は、[Angular ツリー グリッドの例](#angular-ツリー-グリッドの例)で確認できます。

### プライマリと外部キー
**Primary and foreign keys** オプションを使用した際に各データオブジェクトはプライマリキーと外部キーを含みます。プライマリキーは現在のデータ オブジェクトの一意識別子、外部キーは親の一意識別子です。元のデータソースを含むツリー グリッドの [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) プロパティがフラットコレクションになります。

以下は、主と外部キーの関係を定義したフラット コレクションを含むコンポーネントの例です。

```typescript
// treeGridSample.component.ts

@Component({...})
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

上記サンプル データはすべてのレコードに ID (ParentID と Name、JobTitle、Age などの追加のプロパティ) があります。レコードの ID は一意である必要があります。ParentID は、親ノードの ID を含みます。行にツリーグリッドのいずれの行にも一致しない ParentID がある場合、行がルート行であることを意味します。

親子関係は、ツリーグリッドの  [`primaryKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#primaryKey) と [`foreignKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#foreignKey) プロパティを使用して設定されます。

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

更に [`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowSelection) プロパティを使用してツリーグリッドの行選択機能、および各列でフィルタリング、ソート、編集、移動、サイズ変更機能を有効にします。

```html
<!--treeGridSample.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
    [autoGenerate]="false" [rowSelection]="'multiple'" [allowFiltering]="true" [moving]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="JobTitle" dataType="string" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
    <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [resizable]="true"></igx-column>
</igx-tree-grid>
```

以下は結果です。

<code-view style="height:450px"
           data-demos-base-url="{environment:lobDemosBaseUrl}"
           iframe-src="{environment:lobDemosBaseUrl}/tree-grid/treegrid-primaryforeignkey" >
<div class="divider--half"></div>

## パーシステンスとインテグレーション

**ツリー セル**のインデントは、フィルタリング、ソート、ページングなど他のツリーグリッド全体の機能で永続化されます。

- **sorting** が列に適用された際にデータ行がレベルごとにソートされます。ルートレベルの行はそれぞれの子に関係なく個々にソートされます。各子コレクションは個々にソートされます。
- 最初の列 ([`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleIndex) 0 を持つ列は、常にツリー列です。
- 列ピン固定、列の非表示、列移動などの処理後に 0 の [`visibleIndex`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#visibleIndex) で終わる列はツリー列になります。
- エクスポートした Excel ワークシートは、ツリーグリッドでグループ化されるときにレコードをグループ化して階層に反映できます。すべてのレコードを展開した状態が保持および反映されます。
- CSV レベルにエクスポートする際に展開した状態は無視されてすべてのデータがフラットでエクスポートされます。

<div class="divider--half"></div>

## Angular ツリー グリッド サイズ変更

[Grid サイズ変更](sizing.md) トピックを確認してください。

## Angular ツリー グリッド スタイル設定

[Ignite UI for Angular テーマ ライブラリ](../themes/sass/component-themes.md)でスタイルを設定できます。ツリー グリッドの [テーマ]({environment:sassApiUrl}/index.html#function-grid-theme)  は、さまざまなプロパティを公開します。これにより、ツリーグリッドのすべての機能をカスタマイズできます。

Tree Grid (ツリー グリッドのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが含まれる `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

次に、[`grid-theme`]({environment:sassApiUrl}/index.html#function-grid-theme) を拡張し、必要に応じてツリー グリッドをカスタマイズするために必要なパラメーターを受け取る新しいテーマを作成します。

>[!NOTE]
>`sass` 階層グリッド固有の機能はありません。

```scss
$custom-theme: grid-theme(
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
@include grid($custom-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
    ::ng-deep {
        @include grid($custom-theme);
    }
}
```

### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) と [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #FFCD0F;
$black-color: #494949;
$custom-palette: palette($primary: $black-color, $secondary: $yellow-color);
```

次に [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取得できます。 

```scss
$custom-theme: grid-theme(
    $cell-active-border-color: color($custom-palette, "secondary", 500),
    $cell-selected-background: color($custom-palette, "primary", 300),
    $row-hover-background: color($custom-palette, "secondary", 100),
    $row-selected-background: color($custom-palette, "primary", 100),
    $header-background: color($custom-palette, "primary", 500),
    $header-text-color:contrast-color($custom-palette, "primary", 500),
    $expand-icon-color: color($custom-palette, "secondary", 500),
    $expand-icon-hover-color: color($custom-palette, "secondary", 600),
    $resize-line-color: color($custom-palette, "secondary", 500),
    $row-highlight: color($custom-palette, "secondary", 500)
);
```

### スキーマの使用

テーマ エンジンを使用して[**スキーマ**](../themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

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
$custom-theme: grid-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### Angular ツリー グリッド スタイル設定のデモ


<code-view style="height:600px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-style" alt="Angular ツリー グリッド スタイル設定のデモ">
</code-view>

>[!NOTE]
>このサンプルは、「テーマの変更」から選択したグローバル テーマに影響を受けません。

<div class="divider--half"></div>

## パフォーマンス (試験中)

`igxTreeGrid` のデザインでは、Angular で導入されたイベント結合機能を利用できます。この機能は、インタラクションとレスポンシブの点で **`20%`** のパフォーマンスを向上します。この機能は、`bootstrapModule` メソッドで `ngZoneEventCoalescing` と `ngZoneRunCoalescing` プロパティを `true` に設定するだけでアプリケーション レベルで有効にできます。

```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZoneEventCoalescing: true, ngZoneRunCoalescing: true })
  .catch(err => console.error(err));
```

>[!NOTE]
> これは `igxTreeGrid` の試験中の機能です。これは、ツリー グリッドで予期しない動作が発生する可能性があることを意味します。このような動作が発生した場合は、[Github](https://github.com/IgniteUI/igniteui-angular/discussions) ページでお問い合わせください。

>[!NOTE]
> 有効にすると、`igxTreeGrid` に関連しない Angular アプリケーションの他の部分に影響します。

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
> `igxTreeGrid` は内部で `igxForOf` ディレクティブを使用するため、すべての `igxForOf` の制限が `igxTreeGrid` で有効です。詳細については、[igxForOf 既知の問題](../for-of.md#既知の問題と制限) のセクションを参照してください。

<div class="divider--half"></div>

## API リファレンス

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html)
* [IgxTreeGridRow]({environment:angularApiUrl}/classes/igxtreegridrow.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/#function-grid-theme)
* [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)

## テーマの依存関係
* [IgxIcon テーマ]({environment:sassApiUrl}/index.html#function-icon-theme)
* [IgxInputGroup テーマ]({environment:sassApiUrl}/index.html#function-input-group-theme)
* [IgxChip テーマ]({environment:sassApiUrl}/index.html#function-chip-theme)
* [IgxRipple テーマ]({environment:sassApiUrl}/index.html#function-ripple-theme)
* [IgxButton テーマ]({environment:sassApiUrl}/index.html#function-button-theme)
* [IgxOverlay テーマ]({environment:sassApiUrl}/index.html#function-overlay-theme)
* [IgxDropDown テーマ]({environment:sassApiUrl}/index.html#function-drop-down-theme)
* [IgxCalendar テーマ]({environment:sassApiUrl}/index.html#function-calendar-theme)
* [IgxSnackBar テーマ]({environment:sassApiUrl}/index.html#function-snackbar-theme)
* [IgxBadge テーマ]({environment:sassApiUrl}/index.html#function-badge-theme)


## その他のリソース

<div class="divider--half"></div>

* [Grid サイズ変更](sizing.md)
* [Data Grid](../grid/grid.md)
* [行編集](row-editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
