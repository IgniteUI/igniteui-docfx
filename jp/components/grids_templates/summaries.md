@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 集計 | グループ フッター | Ignite UI for Angular | インフラジスティックス
_description: 列のグループ フッターに Angular のグリッド集計を設定し、Angular マテリアル UI の Ignite UI でカスタム Angular テンプレートを設定するオプションがあります。
_keywords: Angular Grid 集計, igniteui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid 集計 | グループ フッター | Ignite UI for Angular | インフラジスティックス
_description: 列のグループ フッターに Angular のグリッド集計を設定し、Angular マテリアル UI の Ignite UI でカスタム Angular テンプレートを設定するオプションがあります。
_keywords: gngular grid 集計, igniteui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid 集計 | グループ フッター | Ignite UI for Angular | インフラジスティックス
_description: 列のグループ フッターに Angular のグリッド集計を設定し、Angular マテリアル UI の Ignite UI でカスタム Angular テンプレートを設定するオプションがあります。
_keywords: gngular grid 集計, igniteui for angular, infragistics
_language: ja
---
}

# @@igComponent の集計概要

Ignite UI for Angular の Angular UI グリッドには、グループ フッターとして列レベルで集計できる機能があります。Angular グリッド集計は、列内のデータ タイプに応じて、あるいは @@igComponent にカスタム Angular テンプレートを実装することによって、定義済みのデフォルト集計項目を使用して別のコンテナの列情報を表示できます。

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


`string` と `boolean` [`data types`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) の場合、データ型の場合、以下の関数が利用できます。
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

[`hasSummary`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#hassummary) プロパティを `true` に設定すると **@@igComponent 集計**が列レベルで有効になります。各列の集計は列のデータ型に基づいて解決されます。`@@igSelector` のデフォルトの列データ型は `string` のため、`number` または `date` 固有の集計を適用するには、[`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) プロパティを `number` または `date` に設定します。集計値は、グリッドの [`locale`]({environment:angularApiUrl}/classes/igxgridcomponent.html#locale) および列 [`pipeArgs`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#pipeArgs) に従ってローカライズされて表示されます。

@@if (igxName !== 'IgxHierarchicalGrid') {
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)">
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</@@igSelector>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
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
        ...
    </igx-hierarchical-grid>

```
}
特定の列や列のリストを有効または無効にする他の方法として **@@igSelector** のパブリック メソッド [`enableSummaries`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#enablesummaries)/[`disableSummaries`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#disablesummaries) を使用する方法があります。

@@if (igxName !== 'IgxHierarchicalGrid') {
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)" >
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="false">
    </igx-column>
</@@igSelector>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
```typescript
public enableSummary() {
    this.grid1.enableSummaries([
        {fieldName: "ReorderLevel", customSummary: this.mySummary},
        {fieldName: "ProductID"}
    ]);
}
public disableSummary() {
    this.grid1.disableSummaries("ProductName");
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<@@igSelector #hierarchicalGrid [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)" >
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
        {fieldName: "Grammy Nominations", customSummary: this.mySummary},
        {fieldName: "Artist"}
    ]);
}
public disableSummary() {
    this.hierarchicalGrid.disableSummaries("Photo");
}
```
}

## カスタム @@igComponent 集計
この関数が要件に合わない場合、指定した列にカスタム集計を提供できます。これには、基本クラス [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html)、[`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)、[`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) のいずれかを列データ型や必要に応じてオーバーライドします。このように既存の関数を再定義、または新しい関数を追加できます。[`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) クラスは、[`count`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#count) メソッドにデフォルト実装のみを提供します。[`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html) は [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) を拡張し、[`min`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#min)、[`max`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#max)、[`sum`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#sum)、[`average`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#average) を提供します。[`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) は [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) を拡張し、追加で [`earliest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#earliest) と [`latest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#latest) を提供します。

@@if (igxName !== 'IgxHierarchicalGrid') {
```typescript
import { IgxSummaryResult, IgxSummaryOperand, IgxNumberSummaryOperand, IgxDateSummaryOperand } from 'igniteui-angular/grid/grid-summary';

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
import { IgxRowIslandComponent, IgxHierarchicalGridComponent, IgxNumberSummaryOperand, IgxSummaryResult } from "igniteui-angular";

class MySummary extends IgxNumberSummaryOperand {

    constructor() {
      super();
    }
    public operate(data?: any[]): IgxSummaryResult[] {
      const result = super.operate(data);
      result.push({
        key: "test",
        label: "More than 5",
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

以下の[「すべてのデータにアクセスするカスタム集計」](#すべての-@@igComponent-データにアクセスするカスタム集計)セクションを参照してください。

> [!NOTE]
> 集計行の高さを正しく計算するために、@@igComponent の [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate) メソッドでデータが空の場合も常に [`IgxSummaryResult`]({environment:angularApiUrl}/interfaces/igxsummaryresult.html) 配列の正しい長さを返す必要があります。
@@if (igxName !== 'IgxHierarchicalGrid') {
`UnitsInStock` 列にカスタム集計を追加します。[`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries) プロパティを以下に作成するクラスに設定します。
```html
<@@igSelector #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)" >
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

@@if (igxName === 'IgxHierarchicalGrid') {
列 `GramyNominations` にカスタム集計を追加します。[`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries) プロパティを以下に作成するクラスに設定します。
```html
 <igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" #hierarchicalGrid>
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
...
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

### 集計のフォーマット
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

列のグループがある場合、@@igComponent は[`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) と [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) を使用して集計配置の変更やモードの計算をします。これら 2 つのプロパティに加えて、@@igxName は、参照するグループ行が縮小されたときに集計行が表示されたままであるかどうかを決定できる [`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showsummaryoncollapse) プロパティを公開します。

以下は、使用可能な [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) プロパティの値です。
 - rootLevelOnly - ルート レベルのみ集計が計算されます。
 - childLevelsOnly - 子レベルのみ集計が計算されます。
 - rootAndChildLevels - ルートと子レベルの両方の集計が計算されます。これがデフォルト値です。

以下は、使用可能な [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) プロパティの値です。
 - top - 集計行はグループ列の子の前に表示されます。
 - bottom - 集計行はグループ列の子の後に表示されます。これがデフォルト値です。

[`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showsummaryoncollapse) プロパティはブール値です。デフォルト値は **false** に設定されています。これは、親行が縮小されたときに集計行が非表示になることを意味します。プロパティが **true** に設定されている場合、グループ行が縮小されたときに、集計行は表示されたままになります。


> [!NOTE]
> [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) プロパティは子レベルの集計のみに適用します。ルートレベルの集計は、@@igComponent の下に常に固定されます。

### デモ


<code-view style="height:720px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-groupby-summary" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {
## 子集計

@@igComponent はルート ノードの集計と各ネストされた子ノード レベルの区別をサポートします。集計は [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) プロパティを使用して設定できます。子レベル集計は、[`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) を使用して子ノードの前または後に表示できます。これら 2 つのプロパティに加えて、@@igxName は、参照する親ノードが縮小されたときに集計行が表示されたままであるかどうかを決定でき [`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showsummaryoncollapse) プロパティを公開します。


以下は、使用可能な [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) プロパティの値です。
 - rootLevelOnly - ルート レベルのノードのみ集計が計算されます。
 - childLevelsOnly - 子レベルのみ集計が計算されます。
 - rootAndChildLevels - ルートと子レベルの両方の集計が計算されます。これがデフォルト値です。

以下は、使用可能な [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) プロパティの値です。
 - top - 集計行は子行のリストの前に表示されます。
 - bottom - 集計行は子行のリストの後に表示されます。これがデフォルト値です。

[`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showsummaryoncollapse) プロパティはブール値です。デフォルト値は **false** に設定されています。これは、親行が縮小されたときに集計行が非表示になることを意味します。プロパティが **true** に設定されている場合、親行が縮小されたときに、集計行は表示されたままになります。

> [!NOTE]
> [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) プロパティは子レベルの集計のみに適用します。ルートレベルの集計は、@@igComponent の下に常に固定されます。


<code-view style="height:720px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-summary2" >
</code-view>

}
<div class="divider--half"></div>

### キーボード ナビゲーション

集計行は、以下のキーボード操作でナビゲーションできます。

- <kbd>UP</kbd> - 1 つ上のセルへ移動。
- <kbd>DOWN</kbd> - 1 つ下のセルへ移動。
- <kbd>LEFT</kbd> - 1 つ左のセルへ移動。
- <kbd>RIGHT</kbd> - 1 つ右のセルへ移動。
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> or <kbd>HOME</kbd> - 左端のセルへ移動。
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> または <kbd>END</kbd> - 右端のセルへ移動。
- <kbd>TAB</kbd> - 行の次のセルへ順番に移動して最後のセルの後は次の行へ移動。
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd> - 行で前のセルへ順番に移動して最初のセルの後は前の行へ移動。

## スタイル設定

ソート動作のスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`igx-grid-summary-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-summary-theme) を拡張する新しいテーマを作成し、`$background-color`, `$focus-background-color`、`$label-color`, `$result-color`、`$pinned-border-width`、`$pinned-border-style`、および `$pinned-border-color` パラメーターを受け取る方法です。

```scss
$custom-theme: igx-grid-summary-theme(
    $background-color: #e0f3ff,
    $focus-background-color: rgba( #94d1f7, .3 ),
    $label-color: #e41c77,
    $result-color: black,
    $pinned-border-width: 2px,
    $pinned-border-style: dotted,
    $pinned-border-color: #e41c77
);
```
最後にそれぞれのテーマを持つコンポーネント ミックスインを**含めます**。

```scss
@include igx-grid-summary($custom-theme);
```

>[!NOTE]
 >コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

 ```scss
:host {
    ::ng-deep {
        @include igx-grid-summary($custom-theme);
    }
}
```

### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$blue-color: #7793b1;
$green-color: #00ff2d;

$my-custom-palette: igx-palette($primary: $blue-color, $secondary: $green-color);
```

また [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。

```scss
$custom-theme: igx-grid-summary-theme(
    $background-color: igx-color($my-custom-palette, "primary", 700),
    $focus-background-color: igx-color($my-custom-palette, "primary", 800),
    $label-color: igx-color($my-custom-palette, "secondary", 500),
    $result-color: igx-color($my-custom-palette, "grays", 900),
    $pinned-border-width: 2px,
    $pinned-border-style: dotted,
    $pinned-border-color: igx-color($my-custom-palette, "secondary", 500)
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](../themes/palettes.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して[**スキーマ**](../themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法のことです。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`_light-grid-summary`]({environment:sassApiUrl}/index.html#variable-_light-grid-summary) の 1 つを拡張します。

```scss
// Extending the light grid summary schema
$my-summary-schema: extend($_light-grid-summary,
    (
        background-color: (igx-color: ('primary', 700)),
        focus-background-color: (igx-color: ('primary', 800)),
        label-color: (igx-color: ('secondary', 500)),
        result-color: (igx-color: ('grays', 900)),
        pinned-border-width: 2px,
        pinned-border-style: dotted,
        pinned-border-color: (igx-color: ('secondary', 500))
    )
);
```

カスタム スキーマを適用するには、グローバル [`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
// Extending the global light-schema
$my-custom-schema: extend($light-schema,
    (
        igx-grid-summary: $my-summary-schema
    )
);

// Defining our custom theme with the custom schema
$custom-theme: igx-grid-summary-theme(
    $palette: $my-custom-palette,
    $schema: $my-custom-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

@@if (igxName === 'IgxGrid') {
### デモ


<code-view style="height:710px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-groupby-summary-styling" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {
### デモ


<code-view style="height:710px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-summary-styling" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
### デモ


<code-view style="height:710px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-summary-styling" >
</code-view>

}

## API リファレンス

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [@@igxNameSummaries スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-summary-theme)
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

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)