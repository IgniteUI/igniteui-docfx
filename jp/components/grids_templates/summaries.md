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
_keywords: Angular Hierarchical Grid 集計
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid 集計 | グループ フッター | Ignite UI for Angular | インフラジスティックス
_description: 列のグループ フッターに Angular のグリッド集計を設定し、Angular マテリアル UI の Ignite UI でカスタム Angular テンプレートを設定するオプションがあります。
_keywords: Angular Hierarchical Grid 集計
_language: ja
---
}

### @@igComponent の集計概要

Ignite UI for Angular の Angular UI グリッドには、グループ フッターとして列レベルで集計できる機能があります。Angular グリッド集計は、列内のデータ タイプに応じて、あるいは @@igComponent にカスタム Angular テンプレートを実装することによって、定義済みのデフォルト集計項目を使用して別のコンテナの列情報を表示できます。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-summary-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:750px">
    <iframe id="treegrid-summary-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
  <div class="sample-container loading" style="height:650px">
    <iframe id="hierarchical-grid-summary-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}

<div class="divider--half"></div>

> [!NOTE]
> 列の集計は**列値すべての関数**ですが、フィルタリングが適用された場合、列の集計は**フィルターされた結果値の関数**になります。

**@@igComponent 集計**を列ごとに有効にして必要な列のみアクティブ化できます。@@igComponent 集計は、列のデータ型に基づいてデフォルト集計の定義済みセットを提供します。


`string` と `boolean` [`data types`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) の場合、データ型の場合、以下の関数が利用できます。
 - count

`Number` データ型の場合、以下の関数が利用できます。
 - count
 - min
 - max
 - average
 - sum

`date` データ型の場合、以下の関数が利用できます。
 - count
 - earliest
 - latest

[`hasSummary`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#hassummary) プロパティを `true` に設定すると **@@igComponent 集計** が列レベルで有効になります。各列の集計は列のデータ型に基づいて解決されます。`@@igSelector` のデフォルトの列データ型は `string` のため、`number` または `date` 固有の集計を適用するには、[`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) プロパティを `number` または `date` に設定します。

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

#### カスタム @@igComponent 集計
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
上記コードに示すように、メソッド [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate) がインターフェイスである [`IgxSummaryResult`]({environment:angularApiUrl}/interfaces/igxsummaryresult.html) のリストを返します。
```typescript
interface IgxSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```

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

#### すべての @@igComponent データにアクセスするカスタム集計
 カスタム列集計内のすべてのグリッド データにアクセスできます。IgxSummaryOperand `operate` メソッドには、2 つの追加のオプション パラメーターが導入されています。
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
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-alldata-summaries-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-alldata-summaries' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-alldata-summaries-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-alldata-summaries-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="tree-grid-allData-summary-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-allData-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-allData-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-allData-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
  <div class="sample-container loading" style="height:650px">
    <iframe id="hierarchical-grid-allData-summary-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-allData-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-allData-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-allData-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}

@@if (igxName === 'IgxGrid') {
### グループの集計

列のグループがある場合、@@igComponent は[`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) と [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) を使用して集計配置の変更やモードの計算をします。これら 2 つのプロパティに加えて、@@igxName は、参照するグループ行が縮小されたときに集計行が表示されたままであるかどうかを決定できる [`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showsummaryoncollapse) プロパティを公開します。

以下は、使用可能な [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) プロパティの値です。
 - rootLevelOnly - ルート レベルのみ集計が計算されます。
 - childLevelsOnly - 子レベルのみ集計が計算されます。
 - rootAndChildLevels - ルートと子レベルの両方の集計が計算されます。これがデフォルト値です。

以下は、使用可能な [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) プロパティの値です。
 - top - 集計行はグループ列の子の前に表示されます。
 - bottom - 集計行はグループ列の子の後に表示されます。これがデフォルト値です。

[`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showsummaryoncollapse) プロパティはブール値です。 デフォルト値は **false** に設定されています。これは、親行が縮小されたときに集計行が非表示になることを意味します。プロパティが **true** に設定されている場合、グループ行が縮小されたときに、集計行は表示されたままになります。

> [!NOTE]
> [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) プロパティは子レベルの集計のみに適用します。ルートレベルの集計は、@@igComponent の下に常に固定されます。

#### デモ

<div class="sample-container loading" style="height:720px">
    <iframe id="grid-groupby-summary-iframe" data-src='{environment:demosBaseUrl}/grid/grid-groupby-summary' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-groupby-summary-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-groupby-summary-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
### 子集計

@@igComponent はルート ノードの集計と各ネストされた子ノード レベルの区別をサポートします。集計は [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) プロパティを使用して設定できます。子レベル集計は、[`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) を使用して子ノードの前または後に表示できます。これら 2 つのプロパティに加えて、@@igxName は、参照する親ノードが縮小されたときに集計行が表示されたままであるかどうかを決定でき [`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showsummaryoncollapse) プロパティを公開します。

以下は、使用可能な [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) プロパティの値です。
 - rootLevelOnly - ルート レベルのノードのみ集計が計算されます。
 - childLevelsOnly - 子レベルのみ集計が計算されます。
 - rootAndChildLevels - ルートと子レベルの両方の集計が計算されます。これがデフォルト値です。

以下は、使用可能な [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) プロパティの値です。
 - top - 集計行は子行のリストの前に表示されます。
 - bottom - 集計行は子行のリストの後に表示されます。これがデフォルト値です。

[`showSummaryOnCollapse`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showsummaryoncollapse) プロパティはブール値です。 デフォルト値は **false** に設定されています。これは、親行が縮小されたときに集計行が非表示になることを意味します。プロパティが **true** に設定されている場合、親行が縮小されたときに、集計行は表示されたままになります。

> [!NOTE]
> [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) プロパティは子レベルの集計のみに適用します。ルートレベルの集計は、@@igComponent の下に常に固定されます。

<div class="sample-container loading" style="height:720px">
    <iframe id="treegrid-child-summary-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-summary2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-child-summary-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-child-summary-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
<div class="divider--half"></div>

#### キーボード ナビゲーション

集計行は、以下のキーボード操作でナビゲーションできます。

- <kbd>UP</kbd> - 1 つ上のセルへ移動。
- <kbd>DOWN</kbd> - 1 つ下のセルへ移動。
- <kbd>LEFT</kbd> - 1 つ左のセルへ移動。
- <kbd>RIGHT</kbd> - 1 つ右のセルへ移動。
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> or <kbd>HOME</kbd> - 左端のセルへ移動。
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> または <kbd>END</kbd> - 右端のセルへ移動。
- <kbd>TAB</kbd> - 行の次のセルへ順番に移動して最後のセルの後は次の行へ移動。
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd> - 行で前のセルへ順番に移動して最初のセルの後は前の行へ移動。

### スタイル設定

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
最後にそれぞれのテーマを持つコンポーネント mixins を**含めます**。

```scss
@include igx-grid-summary($custom-theme);
```

>[!NOTE]
 >コンポーネントが[`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

 ```scss
:host {
    ::ng-deep {
        @include igx-grid-summary($custom-theme);
    }
}
```

#### カラーパレットの定義

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
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](../themes/palette.md)のトピックを参照してください。

#### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](../themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法のことです。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマ (ここでは [`_light-grid-summary`]({environment:sassApiUrl}/index.html#variable-_light-grid-summary) の 1 つを拡張します。:

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
#### デモ

<div class="sample-container loading" style="height:710px">
    <iframe id="grid-groupby-summary-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-groupby-summary-styling' width="100%" height="100%"
        seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-groupby-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-groupby-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
#### デモ

<div class="sample-container loading" style="height:710px">
    <iframe id="treegrid-summary-styling-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-summary-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-summary-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-summary-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
#### デモ

<div class="sample-container loading" style="height:710px">
    <iframe id="hierarchical-grid-summary-styling-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-summary-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-summary-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-summary-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
}

### API リファレンス

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [@@igxNameSummaries スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-summary-theme)
* [IgxSummaryOperand]({environment:angularApiUrl}/classes/igxsummaryoperand.html)
* [IgxNumberSummaryOperand]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)
* [IgxDateSummaryOperand]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)


### API リファレンス

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [@@igxNameSummaries スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-summary-theme)
* [IgxSummaryOperand]({environment:angularApiUrl}/classes/igxsummaryoperand.html)
* [IgxNumberSummaryOperand]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)
* [IgxDateSummaryOperand]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
