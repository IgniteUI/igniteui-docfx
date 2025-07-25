@@if (igxName === 'IgxGrid') {
---
title: Angular Grid の集計 - Ignite UI for Angular
_description: 列のグループ フッターで Angular Grid 集計を構成し、オプションを使用して Ignite UI for Angular テーブルにカスタム Angular テンプレートを設定します。
_keywords: angular grid 集計, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Grid の集計 - Ignite UI for Angular
_description: 列のグループ フッターで Angular Grid 集計を構成し、オプションを使用して Ignite UI for Angular テーブルにカスタム Angular テンプレートを設定します。
_keywords: angular grid 集計, ignite ui for angular, infragistics
_canonicalLink: grid/summaries
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Grid の集計 - Ignite UI for Angular
_description: 列のグループ フッターで Angular Grid 集計を構成し、オプションを使用して Ignite UI for Angular テーブルにカスタム Angular テンプレートを設定します。
_keywords: angular grid 集計, ignite ui for angular, infragistics
_canonicalLink: grid/summaries
_language: ja
---
}

# Angular @@igComponent 集計

Ignite UI for Angular の Angular UI グリッドには、グループ フッターとして列レベルで集計できる機能があります。Angular グリッド集計は、列内のデータ タイプに応じて、あるいは @@igComponent にカスタム Angular テンプレートを実装することによって、定義済みのデフォルト集計項目を使用して別のコンテナーの列情報を表示できます。

## Angular @@igComponent 集計の例

@@if (igxName === 'IgxGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-summary" alt="Angular @@igComponent 集計の例">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:750px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-summary" alt="Angular @@igComponent 集計の例">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-summary" alt="Angular @@igComponent 集計の例">
</code-view>

}

<div class="divider--half"></div>

> [!NOTE]
> 列の集計は**列値すべての関数**ですが、フィルタリングが適用された場合、列の集計は**フィルターされた結果値の関数**になります。

**@@igComponent 集計**を列ごとに有効にして必要な列のみアクティブ化できます。@@igComponent 集計は、列のデータ型に基づいてデフォルト集計の定義済みセットを提供します。


`string` と `boolean` [`data types`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#dataType) の場合、データ型の場合、以下の関数が利用できます。
 - count

`number`、`currency`、および `percent` データ型の場合、以下の関数を使用できます。
 - count
 - min
 - max
 - average
 - sum

`date` データ型の場合、以下の関数が利用できます。
 - count
 - earliest
 - latest

すべての利用可能な列データ型は、公式の[列タイプ トピック](column-types.md#デフォルトのテンプレート)にあります。

[`hasSummary`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#hasSummary) プロパティを `true` に設定すると **@@igComponent 集計**が列レベルで有効になります。各列の集計は列のデータ型に基づいて解決されます。`@@igSelector` のデフォルトの列データ型は `string` のため、`number` または `date` 固有の集計を適用するには、[`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#dataType) プロパティを `number` または `date` に設定します。集計値は、グリッドの [`locale`]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale) および列 [`pipeArgs`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#pipeArgs) に従ってローカライズされて表示されます。

@@if (igxName === 'IgxGrid') {
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)">
    <igx-column field="ProductID" header="Product ID" width="200px" [sortable]="true"></igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true"></igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true"></igx-column>
</@@igSelector>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)">
    <igx-column field="ID" header="Order ID" width="200px" [sortable]="true"></igx-column>
    <igx-column field="Name" header="Order Product" width="200px" [sortable]="true" [hasSummary]="true"></igx-column>
    <igx-column field="Units" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true"></igx-column>
</@@igSelector>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false">
    <igx-column field="Artist" [hasSummary]='true'></igx-column>
    <igx-column field="Photo">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [hasSummary]='true'></igx-column>
    <igx-column field="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="mySummary"></igx-column>
    <igx-column field="Grammy Awards" [hasSummary]='true' [dataType]="'number'"></igx-column>
</igx-hierarchical-grid>
```
}

特定の列や列のリストを有効または無効にする他の方法として **@@igSelector** のパブリック メソッド [`enableSummaries`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#enableSummaries)/[`disableSummaries`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#disableSummaries) を使用する方法があります。

@@if (igxName === 'IgxGrid') {
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true"></igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true"></igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="false"></igx-column>
</@@igSelector>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
```typescript
public enableSummary() {
    this.grid1.enableSummaries([
        {fieldName: 'ReorderLevel', customSummary: this.mySummary},
        {fieldName: 'ProductID'}
    ]);
}
public disableSummary() {
    this.grid1.disableSummaries('ProductName');
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
    <igx-column field="ID" header="Order ID" width="200px" [sortable]="true"></igx-column>
    <igx-column field="Name" header="Order Product" width="200px" [sortable]="true" [hasSummary]="true" ></igx-column>
    <igx-column field="Units" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="false"></igx-column>

</@@igSelector>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
```typescript
public enableSummary() {
    this.grid1.enableSummaries([
        {fieldName: 'Units', customSummary: this.mySummary},
        {fieldName: 'ID'}
    ]);
}
public disableSummary() {
    this.grid1.disableSummaries('Name');
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<@@igSelector #hierarchicalGrid [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
  <igx-column field="Artist" [hasSummary]='true'></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [hasSummary]='true'></igx-column>
        <igx-column field="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="mySummary"></igx-column>
        <igx-column field="Grammy Awards" [hasSummary]='true' [dataType]="'number'"></igx-column>
</@@igSelector>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
```typescript
public enableSummary() {
    this.hierarchicalGrid.enableSummaries([
        {fieldName: 'Grammy Nominations', customSummary: this.mySummary},
        {fieldName: 'Artist'}
    ]);
}
public disableSummary() {
    this.hierarchicalGrid.disableSummaries('Photo');
}
```
}

## カスタム @@igComponent 集計
この関数が要件に合わない場合、指定した列にカスタム集計を提供できます。これには、基本クラス [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html)、[`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)、[`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) のいずれかを列データ型や必要に応じてオーバーライドします。このように既存の関数を再定義、または新しい関数を追加できます。[`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) クラスは、[`count`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#count) メソッドにデフォルト実装のみを提供します。[`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html) は [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) を拡張し、[`min`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#min)、[`max`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#max)、[`sum`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#sum)、[`average`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#average) を提供します。[`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) は [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) を拡張し、追加で [`earliest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#earliest) と [`latest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#latest) を提供します。

@@if (igxName !== 'IgxHierarchicalGrid') {
```typescript
import { IgxSummaryResult, IgxSummaryOperand, IgxNumberSummaryOperand, IgxDateSummaryOperand } from 'igniteui-angular';
// import { IgxSummaryResult, IgxSummaryOperand, IgxNumberSummaryOperand, IgxDateSummaryOperand } from '@infragistics/igniteui-angular'; for licensed package

class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }

    operate(data?: any[]): IgxSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: 'test',
            label: 'Test',
            summaryResult: data.filter(rec => rec > 10 && rec < 30).length
        });
        return result;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
import { IgxRowIslandComponent, IgxHierarchicalGridComponent, IgxNumberSummaryOperand, IgxSummaryResult } from 'igniteui-angular';
// import { IgxRowIslandComponent, IgxHierarchicalGridComponent, IgxNumberSummaryOperand, IgxSummaryResult } from '@infragistics/igniteui-angular'; for licensed package

class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: 'test',
            label: 'More than 5',
            summaryResult: data.filter((rec) => rec > 5).length
        });

        return result;
    }
}
```
}

例に表示されるように、基本クラスは [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate) メソッドを公開しているため、すべてのデフォルト集計を取得して結果を変更するか、まったく新しい集計結果を計算することができます。
このメソッドは [`IgxSummaryResult`]({environment:angularApiUrl}/interfaces/igxsummaryresult.html) のリストを返し、集計を計算するためのオプションのパラメーターを取得します。
```typescript
interface IgxSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```
以下の[「すべてのデータにアクセスするカスタム集計」](#すべてのデータにアクセスするカスタム集計)セクションを参照してください。

> [!NOTE]
> 集計行の高さを正しく計算するために、@@igComponent の [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate) メソッドでデータが空の場合も常に [`IgxSummaryResult`]({environment:angularApiUrl}/interfaces/igxsummaryresult.html) 配列の正しい長さを返す必要があります。
@@if (igxName === 'IgxGrid') {
`UnitsInStock` 列にカスタム集計を追加します。[`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries) プロパティを以下に作成するクラスに設定します。
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)" >
    <igx-column field="ProductID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="UnitsInStock" width="200px" [dataType]="'number'" [hasSummary]="true" [summaries]="mySummary" [sortable]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</@@igSelector>
```

```typescript
...
export class GridComponent implements OnInit {
    mySummary = MySummary;
    ....
}
```
}

@@if (igxName === 'IgxTreeGrid') {
`UnitPrice` 列にカスタム集計を追加します。[`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries) プロパティを以下に作成するクラスに設定します。
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (columnInit)="initColumn($event)">
    <igx-column field="ID" header="Order ID" width="200px" [sortable]="true"></igx-column>
    <igx-column field="Name" header="Order Product" width="200px" [sortable]="true" [hasSummary]="true"></igx-column>
    <igx-column field="Units" [dataType]="'number'" width="200px" [editable]="true" [hasSummary]="true" [summaries]="mySummary"></igx-column>
    <igx-column field="UnitPrice" header="Unit Price" width="200px" [dataType]="'number'"  [dataType]="'currency'" [hasSummary]="true"></igx-column>
</@@igSelector>
```

```typescript
...
export class GridComponent implements OnInit {
    mySummary = MySummary;
    ....
}
```
}

@@if (igxName === 'IgxHierarchicalGrid') {
列 `GramyNominations` にカスタム集計を追加します。[`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries) プロパティを以下に作成するクラスに設定します。
```html
 <igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false">
    <igx-column field="Artist" [hasSummary]='true'></igx-column>
    <igx-column field="Photo">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [hasSummary]='true'></igx-column>
    <igx-column field="Grammy Nominations" [hasSummary]='true' [dataType]="'number'" [summaries]="mySummary"></igx-column>
    <igx-column field="Grammy Awards" [hasSummary]='true' [dataType]="'number'"></igx-column>
</igx-hierarchical-grid>
```

```typescript
...
export class HGridSummarySampleComponent implements OnInit {
    mySummary = MySummary;
    ....
}
```
}

### すべてのデータにアクセスするカスタム集計
 カスタム列集計内のすべての @@igComponent データにアクセスできます。IgxSummaryOperand `operate` メソッドには、2 つの追加のオプション パラメーターが導入されています。
以下のコード スニペットで示されるように operate メソッドには以下の 3 つのパラメーターがあります。
- columnData - 現在の列の値のみを含む配列を提供します。
- allGridData - グリッド データソース全体を提供します。
- fieldName - 現在の列フィールド。

@@if (igxName === 'IgxTreeGrid') {
```typescript
class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgxSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'test', label: 'Total Undelivered', summaryResult: allData.filter((rec) => rec.Discontinued).length });
        return result;
    }
}
```
}
@@if (igxName !== 'IgxTreeGrid') {
```typescript
class MySummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }
    operate(columnData: any[], allGridData = [], fieldName?): IgxSummaryResult[] {
        const result = super.operate(allData.map(r => r[fieldName]));
        result.push({ key: 'test', label: 'Total Discontinued', summaryResult: allData.filter((rec) => rec.Discontinued).length });
        return result;
    }
}
```
}

@@if (igxName === 'IgxGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-alldata-summaries" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-allData-summary" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-allData-summary" >
</code-view>

}

### 集計テンプレート
`igxSummary` は、列の集計の結果をコンテキストとして提供する列の集計を対象としています。

```html
<igx-column ... [hasSummary]="true">
    <ng-template igxSummary let-summaryResults>
        <span> My custom summary template</span>
        <span>{{ summaryResults[0].label }} - {{ summaryResults[0].summaryResult }}</span>
    </ng-template>
</igx-column>
```

デフォルトの集計が定義されている場合、集計領域の高さは、集計の数が最も多い列とグリッドのサイズに応じてデザインにより計算されます。[summaryRowHeight]({environment:angularApiUrl}/classes/igxgridcomponent.html#summaryRowHeight) 入力プロパティを使用して、デフォルト値をオーバーライドします。引数として数値が必要であり、false 値を設定すると、グリッド フッターのデフォルトのサイズ設定動作がトリガーされます。

> [!NOTE]
> 列の集計テンプレートは、列 [summaryTemplate]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaryTemplate) プロパティを必要な TemplateRef に設定することにより、API を介して定義できます。


@@if (igxName === 'IgxGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-summary-template" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-summary-template" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hgrid-summary-template" >
</code-view>

}

## 集計の無効化

[`disabledSummaries`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#disabledSummaries) プロパティは、Ignite UI for Angular グリッド集計機能に対して列ごとに正確な制御を提供します。このプロパティを使用すると、グリッド内の各列に表示される集計をカスタマイズして、最も関連性の高い意味のあるデータのみが表示されるようにすることができます。たとえば、配列で集計キーを指定することにより、`['count', 'min', 'max']` などの特定の集計タイプを除外できます。

このプロパティは、コードを通じて**実行時に動的に**変更することもできるため、変化するアプリケーションの状態やユーザー操作に合わせてグリッドの集計を柔軟に調整できます。

次の例は、`disabledSummaries` プロパティを使用してさまざまな列の集計を管理し、Ignite UI for Angular グリッドで特定のデフォルトおよびカスタムの集計タイプを除外する方法を示しています。

@@if (igxName === 'IgxGrid') {
```html
<!-- default summaries -->
<igx-column
    field="UnitPrice"
    header="Unit Price"
    dataType="number"
    [hasSummary]="true"
    [disabledSummaries]="['count', 'sum', 'average']"
>
</igx-column>
<!-- custom summaries -->
<igx-column
    field="UnitsInStock"
    header="Units In Stock"
    dataType="number"
    [hasSummary]="true"
    [summaries]="discontinuedSummary"
    [disabledSummaries]="['discontinued', 'totalDiscontinued']"
>
</igx-column>
```
`UnitPrice` の場合、`count`、`sum`、`average` などのデフォルトの集計は無効になっており、`min` や `max` などの他の集計は有効のままになっています。

`UnitsInStock` の場合、`total` や `totalDiscontinued` などのカスタム集計は `disabledSummaries` プロパティを使用して除外されます。
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!-- custom summaries -->
<igx-column
    field="Units"
    header="Units"
    dataType="number"
    [hasSummary]="true"
    [summaries]="unitsSummary"
    [disabledSummaries]="['uniqueCount', 'maxDifference']"
>
</igx-column>
<!-- default summaries -->
<igx-column
    field="UnitPrice"
    header="Unit Price"
    dataType="number"
    [hasSummary]="true"
    [disabledSummaries]="['count', 'sum', 'average']"
>
</igx-column>
```
`Units` の場合、`totalDelivered` や `totalNotDelivered` などのカスタム集計は `disabledSummaries` プロパティを使用して除外されます。

`UnitPrice` の場合、`count`、`sum`、`average` などのデフォルトの集計は無効になっており、`min` や `max` などの他の集計は有効のままになっています。
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<!-- custom summaries -->
<igx-column
    field="Photo"
    [hasSummary]="true"
    [summaries]="grammySummary"
    [disabledSummaries]="['singersWithAwards', 'awards']"
>
    <ng-template igxCell let-cell="cell">
        <div class="cell__inner_2">
            <img [src]="cell.value" class="photo" />
        </div>
    </ng-template>
</igx-column>
<!-- default summaries -->
<igx-column
    field="GrammyNominations"
    header="Grammy Nominations"
    dataType="number"
    [hasSummary]="true"
    [disabledSummaries]="['count', 'sum', 'average']"
></igx-column>
```
`Photo` の場合、`singersWithAwards` や `awards` などのカスタム集計は `disabledSummaries` プロパティを使用して除外されます。

`GrammyNominations` の場合、`count`、`sum`、`average` などのデフォルトの集計は無効になっており、`min` や `max` などの他の集計は有効のままになっています。
}

実行時に、`disabledSummaries` プロパティを使用して集計を動的に無効にすることもできます。たとえば、特定の列のプロパティをプログラムで設定または更新して、ユーザー操作やアプリケーションの状態の変化に基づいて表示される集計を調整できます。

@@if (igxName === 'IgxGrid') {
<code-view style="height:850px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-disable-summaries" >
</code-view>
}
@@if (igxName === 'IgxTreeGrid') {
<code-view style="height:950px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-disable-summaries" >
</code-view>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:850px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-disable-summaries" >
</code-view>
}

## 集計のフォーマット
デフォルトでは、組み込みの集計オペランドによって生成される集計結果は、グリッド [`locale`]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale) および列 [`pipeArgs`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#pipeArgs) に従ってローカライズおよびフォーマットされます。カスタム オペランドを使用する場合、`locale` と `pipeArgs` は適用されません。集計結果のデフォルトの外観を変更する場合は、[`summaryFormatter`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaryFormatter) プロパティを使用してフォーマットできます。

```typescript
public dateSummaryFormat(summary: IgxSummaryResult, summaryOperand: IgxSummaryOperand): string {
    const result = summary.summaryResult;
    if(summaryOperand instanceof IgxDateSummaryOperand && summary.key !== 'count'
        && result !== null && result !== undefined) {
        const pipe = new DatePipe('en-US');
        return pipe.transform(result,'MMM YYYY');
    }
    return result;
}
```

```html
<igx-column ... [summaryFormatter]="dateSummaryFormat"></igx-column>
```

@@if (igxName === 'IgxGrid') {
<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-summary-formatter" >
</code-view>
}
@@if (igxName === 'IgxTreeGrid') {
<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-summary-formatter" >
</code-view>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-summary-formatter" >
</code-view>
}

@@if (igxName === 'IgxGrid') {
## グループの集計

列のグループがある場合、@@igComponent は[`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryCalculationMode) と [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryPosition) を使用して集計配置の変更やモードの計算をします。これら 2 つのプロパティに加えて、@@igxName は、参照するグループ行が縮小されたときに集計行が表示されたままであるかどうかを決定できる [`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showSummaryOnCollapse) プロパティを公開します。

以下は、使用可能な [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryCalculationMode) プロパティの値です。
 - rootLevelOnly - ルート レベルのみ集計が計算されます。
 - childLevelsOnly - 子レベルのみ集計が計算されます。
 - rootAndChildLevels - ルートと子レベルの両方の集計が計算されます。これがデフォルト値です。

以下は、使用可能な [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryPosition) プロパティの値です。
 - top - 集計行はグループ列の子の前に表示されます。
 - bottom - 集計行はグループ列の子の後に表示されます。これがデフォルト値です。

[`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showSummaryOnCollapse) プロパティはブール値です。デフォルト値は **false** に設定されています。これは、親行が縮小されたときに集計行が非表示になることを意味します。プロパティが **true** に設定されている場合、グループ行が縮小されたときに、集計行は表示されたままになります。


> [!NOTE]
> [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryPosition) プロパティは子レベルの集計のみに適用します。ルートレベルの集計は、@@igComponent の下に常に固定されます。

### デモ


<code-view style="height:720px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-groupby-summary" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {
## 子集計

@@igComponent はルート ノードの集計と各ネストされた子ノード レベルの区別をサポートします。集計は [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryCalculationMode) プロパティを使用して設定できます。子レベル集計は、[`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryPosition) を使用して子ノードの前または後に表示できます。これら 2 つのプロパティに加えて、@@igxName は、参照する親ノードが縮小されたときに集計行が表示されたままであるかどうかを決定でき [`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showSummaryOnCollapse) プロパティを公開します。


以下は、使用可能な [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryCalculationMode) プロパティの値です。
 - rootLevelOnly - ルート レベルのノードのみ集計が計算されます。
 - childLevelsOnly - 子レベルのみ集計が計算されます。
 - rootAndChildLevels - ルートと子レベルの両方の集計が計算されます。これがデフォルト値です。

以下は、使用可能な [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryPosition) プロパティの値です。
 - top - 集計行は子行のリストの前に表示されます。
 - bottom - 集計行は子行のリストの後に表示されます。これがデフォルト値です。

[`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showSummaryOnCollapse) プロパティはブール値です。デフォルト値は **false** に設定されています。これは、親行が縮小されたときに集計行が非表示になることを意味します。プロパティが **true** に設定されている場合、親行が縮小されたときに、集計行は表示されたままになります。

> [!NOTE]
> [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryPosition) プロパティは子レベルの集計のみに適用します。ルートレベルの集計は、@@igComponent の下に常に固定されます。


<code-view style="height:720px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-summary2" >
</code-view>

}
<div class="divider--half"></div>

## 集計のエクスポート

[`exportSummaries`]({environment:angularApiUrl}/classes/IgxExcelExporterOptions.html#exportSummaries) オプションが `IgxExcelExporterOptions` にあり、エクスポートされたデータにグリッドの集計を含めるかどうかを指定します。デフォルトの `exportSummaries` 値は **false** です。

[`IgxExcelExporterService`]({environment:angularApiUrl}/classes/IgxExcelExporterService.html) は、すべての列タイプのデフォルトの集計を同等の Excel 関数としてエクスポートするため、シートが変更された場合でも適切に機能し続けます。以下の例をご覧ください:

@@if (igxName === 'IgxGrid') {
<code-view style="height:770px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-summary-export" >
</code-view>
}

@@if (igxName === 'IgxTreeGrid') {
<code-view style="height:780px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-summary-export" >
</code-view>
}


@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:760px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-summary-export" >
</code-view>
}

エクスポートされたファイルには、シート内の各 `DataRecord` のレベルを保持する非表示の列が含まれています。このレベルは、集計関数に含める必要があるセルを除外するために集計で使用されます。

以下の表では、デフォルトの各集計に対応する Excel 式を見つけることができます。

データ型 | 関数 | Excel 関数 |
|:--------|:--------:|:---------------|
`string`、`boolean` | count | ="Count: "&COUNTIF(start:end, recordLevel) |
`number`、`currency`、`percent` | count | ="Count: "&COUNTIF(start:end, recordLevel) |
|| min| ="Min: "&MIN(IF(start:end=recordLevel, rangeStart:rangeEnd)) |
|| max | ="Max: "&MAX(IF(start:end=recordLevel, rangeStart:rangeEnd)) |
|| average | ="Avg: "&AVERAGEIF(start:end, recordLevel, rangeStart:rangeEnd) |
|| sum | ="Sum: "&SUMIF(start:end, recordLevel, rangeStart:rangeEnd) |
`date` | count | ="Count: "&COUNTIF(start:end, recordLevel) |
|| earliest | ="Earliest: "& TEXT(MIN(IF(start:end=recordLevel, rangeStart:rangeEnd)), format) |
|| latest | ="Latest: "&TEXT(MAX(IF(start:end=recordLevel, rangeStart:rangeEnd)), format) |

### 既知の問題と制限

|制限|説明|
|--- |--- |
| カスタム集計のエクスポート | カスタム集計は、Excel 関数ではなく文字列としてエクスポートされます。 |
| テンプレート化された集計のエクスポート | テンプレート化された集計はサポートされておらず、デフォルトのものとしてエクスポートされます。 |

## キーボード ナビゲーション

集計行は、以下のキーボード操作でナビゲーションできます。

- <kbd>UP</kbd> - 1 つ上のセルへ移動。
- <kbd>DOWN</kbd> - 1 つ下のセルへ移動。
- <kbd>LEFT</kbd> - 1 つ左のセルへ移動。
- <kbd>RIGHT</kbd> - 1 つ右のセルへ移動。
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> または <kbd>HOME</kbd> - 左端のセルへ移動。
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> または <kbd>END</kbd> - 右端のセルへ移動。

## スタイル設定

ソート動作のスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`grid-summary-theme`]({environment:sassApiUrl}/themes#function-grid-summary-theme) を拡張する新しいテーマを作成し、`$background-color`、`$focus-background-color`、`$label-color`、`$result-color`、`$pinned-border-width`、`$pinned-border-style`、および `$pinned-border-color` パラメーターを受け取る方法です。

```scss
$custom-theme: grid-summary-theme(
  $background-color: #e0f3ff,
  $focus-background-color: rgba(#94d1f7, .3),
  $label-color: #e41c77,
  $result-color: black,
  $pinned-border-width: 2px,
  $pinned-border-style: dotted,
  $pinned-border-color: #e41c77
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/palettes#function-palette) および [`color`]({environment:sassApiUrl}/palettes#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](../themes/sass/palettes.md)のトピックをご覧ください。

最後にコンポーネントのカスタム テーマを**含めます**。

```scss
@include css-vars($custom-theme);
```

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
  ::ng-deep {
    @include css-vars($custom-theme);
  }
}
```

@@if (igxName === 'IgxGrid') {
### デモ


<code-view style="height:710px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-groupby-summary-styling" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {
### デモ


<code-view style="height:710px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-summary-styling" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
### デモ


<code-view style="height:710px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-summary-styling" >
</code-view>

}

## API リファレンス

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)
* [@@igxNameSummaries スタイル]({environment:sassApiUrl}/themes#function-grid-summary-theme)
* [IgxSummaryOperand]({environment:angularApiUrl}/classes/igxsummaryoperand.html)
* [IgxNumberSummaryOperand]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)
* [IgxDateSummaryOperand]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [列のデータ型](column-types.md#デフォルトのテンプレート)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [列移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
@@if (igxName === 'IgxGrid'){* [選択に基づいた集計]({environment:angularApiUrl}/grid/selection-based-aggregates.html)}

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
