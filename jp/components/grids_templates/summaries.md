@@if (igxName === 'IgxGrid') {
---
title: 集計 コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular 集計を使用すると、列のデータ型に基づいて定義済みのデフォルト集計項目を持つ別のコンテナーで列情報を表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Grid, Angular Table, Angular Data Grid コンポーネント, Angular Data Table コンポーネント, Angular Data Grid コントロール, Angular Data Table コントロール, Angular Grid コンポーネント, Angular Table コンポーネント, Angular Grid コントロール, Angular Table コントロール, Angular 高パフォーマンス Grid, Angular High Performance Data Table, Data Grid Summaries, Data Table Summaries, Data Grid Column Summaries, Data Table Column Summaries, Data Grid Column Aggregations, Data Table Column Aggregations
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: 集計 コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular 集計を使用すると、列のデータ型に基づいて定義済みのデフォルト集計項目を持つ別のコンテナーで列情報を表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, UI ウィジェット, Angular, Native Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Native Angular コンポーネント, Angular Tree Grid, Angular Tree Table, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular 高パフォーマンス Tree Grid, Angular 高パフォーマンス Tree Table, Tree Grid Summaries, Tree Table Summaries, Tree Grid Column Summaries, Tree Table Column Summaries, Tree Grid Column Aggregations, Tree Table Column Aggregations
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: 集計 コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular 集計を使用すると、列のデータ型に基づいて定義済みのデフォルト集計項目を持つ別のコンテナーで列情報を表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント Suite, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント Library, ネイティブ Angular コンポーネント, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid コンポーネント, Angular Hierarchical Table コンポーネント, Angular Hierarchical Grid コントロール, Angular Hierarchical Table コントロール, Angular 高パフォーマンス Hierarchical Grid, Angular 高パフォーマンス Hierarchical Table, Hierarchical Data Grid Summaries, Hierarchical Table Summaries, Hierarchical Grid Column Summaries, Hierarchical Table Column Summaries, Hierarchical Grid Column Aggregations, Hierarchical Table Column Aggregations
_language: ja
---
}
### @@igComponent 集計

@@igComponent コンポーネントには、列レベルで制御可能な**集計**機能があります。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-summary-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:750px">
    <iframe id="treegrid-summary-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
  <div class="sample-container loading" style="height:650px">
    <iframe id="hierarchical-grid-summary-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}

<div class="divider--half"></div>

> [!NOTE]
> 列の集計は**列値すべての関数**ですが、フィルタリングが適用された場合、列の集計は**フィルターされた結果値の関数**になります。

列のデータ型に基づいて定義済みのデフォルト集計項目を持つ別のコンテナーで列情報を表示します。**@@igComponent 集計**を列ごとに有効にして必要な列のみアクティブ化できます。@@igComponent 集計は、列のデータ型に基づいてデフォルト集計の定義済みセットを提供します。


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
> 集計行の高さを正しく計算するために、@@igComponent の [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate) メソッドでデータが空の場合も常に IgxSummaryResult 配列の正しい長さを返す必要があります。
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
@@if (igxName === 'IgxGrid') {
### グループの集計

列のグループがある場合、@@igComponent は[`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) と [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) を使用して集計配置の変更やモードの計算をします。

以下は、使用可能な [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) プロパティの値です。
 - rootLevelOnly - ルート レベルのみ集計が計算されます。
 - childLevelsOnly - 子レベルのみ集計が計算されます。
 - rootAndChildLevels - ルートと子レベルの両方の集計が計算されます。これがデフォルト値です。

以下は、使用可能な [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) プロパティの値です。
 - top - 集計行はグループ列の子の前に表示されます。
 - bottom - 集計行はグループ列の子の後に表示されます。これがデフォルト値です。

> [!NOTE]
> [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) プロパティは子レベルの集計のみに適用します。ルートレベルの集計は、@@igComponent の下に常に固定されます。

#### デモ

<div class="sample-container loading" style="height:720px">
    <iframe id="grid-groupby-summary-iframe" data-src='{environment:demosBaseUrl}/grid/grid-groupby-summary' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-groupby-summary-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
### 子集計

@@igComponent はルート ノードの集計と各ネストされた子ノード レベルの区別をサポートします。集計は [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) プロパティを使用して設定できます。子レベル集計は、[`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) を使用して子ノードの前または後に表示できます。

以下は、使用可能な [`summaryCalculationMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) プロパティの値です。
 - rootLevelOnly - ルート レベルのノードのみ集計が計算されます。
 - childLevelsOnly - 子レベルのみ集計が計算されます。
 - rootAndChildLevels - ルートと子レベルの両方の集計が計算されます。これがデフォルト値です。

以下は、使用可能な [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summarycalculationmode) プロパティの値です。
 - top - 集計行は子行のリストの前に表示されます。
 - bottom - 集計行は子行のリストの後に表示されます。これがデフォルト値です。

> [!NOTE]
> [`summaryPosition`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#summaryposition) プロパティは子レベルの集計のみに適用します。ルートレベルの集計は、@@igComponent の下に常に固定されます。

<div class="sample-container loading" style="height:720px">
    <iframe id="treegrid-child-summary-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-summary2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-child-summary-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
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

### API リファレンス

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [@@igxNameSummaries Styles]({environment:sassApiUrl}/index.html#function-igx-grid-summary-theme)
* [IgxSummaryOperand]({environment:angularApiUrl}/classes/igxsummaryoperand.html)
* [IgxNumberSummaryOperand]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)
* [IgxDateSummaryOperand]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)