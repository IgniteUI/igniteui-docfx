---
title: Summaries Component - Native Angular | Ignite UI for Angular
_description: With the Ignite UI for Angular Summaries component, see the column information in a separate container with a predefined set of default summary items, depending on the type of data within the column.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Summaries, Summary
_language: ja
---

### グリッドの集計

The Grid component in ignite UI for Angular has a **summaries** feature that functions on a per-column level. The user is able to see the column information in a separate container with a predefined set of default summary items, depending on the type of data within the column.

#### デモ

<div class="sample-container loading" style="height:750px">
    <iframe id="grid-summary-sample-iframe" src='{environment:demosBaseUrl}/grid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> 列の集計は**列値すべての関数**ですが、フィルタリングが適用された場合、列の集計は**フィルターされた結果値の関数**になります。

**Grid summaries** can also be enabled on a per-column level in Ignite UI for Angular, which means that you can activate it only for columns that you need. Grid summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:

`string` および `boolean` データ型の場合、以下の関数が利用できます。
 - count

`number` データ型の場合、以下の関数が利用できます。
 - count
 - min
 - max
 - average
 - sum

`date` データ型の場合、以下の関数が利用できます。
 - count
 - earliest
 - latest

列で `hasSummary` プロパティを `true` に設定すると**グリッド集計**が有効になります。各列の集計は列のデータ型に基づいて解決されます。`igx-grid` でデフォルトの列データ型は `string` のため、`number` または `date` の集計を適用するには、`dataType` プロパティを `number` または `date` に設定します。

```typescript
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColunm($event)" >
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</igx-grid>
```

特定の列または列のリストで集計を有効/無効にするもう 1 つの方法として **igx-grid** の `enableSummaries`/`disableSummaries` 公開メソッドがあります。

```typescript
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColunm($event)" >
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="false">
    </igx-column>
</igx-grid>
<button (click)="enableSummary()">Enable Summary</button>
<button (click)="disableSummary()">Disable Summary </button>
```
```typescript
public enableSummary() {
    this.grid1.enableSummaries([{fieldName: "ReorderLevel", customSummary: this.mySummary},
    {fieldName: "ProductID"}]);
  }
public disableSummary() {
    this.grid1.disableSummaries("ProductName");
}
```

この関数が要件に合わない場合、指定した列にカスタム集計を提供できます。これを実装するには、列のデータ型に基づいて `IgxSummaryOperand`、`IgxNumberSummaryOperand`、または `IgxDateSummaryOperand` の基本クラスをオーバーライドします。このように既存の関数を変更または新しい関数を追加できます。`IgxSummaryOperand` クラスのデフォルト集計は `count` メソッドのみです。`IgxNumberSummaryOperand` は `IgxSummaryOperand` を拡張し、`min`、`max`、`sum`、および `average` 集計を提供します。`IgxDateSummaryOperand` は `IgxSummaryOperand` を拡張し、`earliest` および `latest` を提供します。

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

以下のコードで、`operate` メソッドはインターフェイスである `IgxSummaryResult` のリストを返します。

```typescript
interface IgxSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```

`UnitsInStock` 列にカスタム集計を追加します。`summaries` プロパティを以下に作成するクラスに設定します。

```typescript
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColunm($event)" >
    <igx-column field="ProductID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="UnitsInStock" width="200px" [dataType]="'number'" [hasSummary]="true" [summaries]="mySummary" [sortable]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</igx-grid>
```

```typescript
...
export class GridComponent implements OnInit {

  mySummary = MySummary;

    ....
}
```

パフォーマンスを向上するため、**igx-grid** はすべての集計をキャッシュし、データで CRUD 操作を実行する場合に再計算します。データ ソースが **igx-grid** 以外に変更される場合、`clearSummaryCache()` メソッドを呼び出して **igx-grid** の集計の再計算を実行する必要があります。

```typescript
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColunm($event)" >
    <igx-column field="ProductID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="UnitsInStock" width="200px" [dataType]="'number'" [hasSummary]="true" [summaries]="mySummary" [sortable]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</igx-grid>
<button (click)="updateData()">Update Data</button>
```

```typescript
...
export class GridComponent implements OnInit {

 updateData() {
    const d = [].concat(this.data).concat(this.data.slice(0, 15));
    this.data = d;
    this.grid1.clearSummaryCache();
  }
}
```

`http` 要求が実行された場合にもキャッシュを更新します。

```typescript
this.http.get<any[]>('/assets/data.json')
    .subscribe(data => {
    this.data = data;
    this.grid1.clearSummaryCache();
});
```

### 追加のリソース
<div class="divider--half"></div>

* [グリッドの概要](grid.html)
* [仮想化とパフォーマンス](grid_virtualization.html)
* [ページング](grid_paging.html)
* [フィルタリング](grid_filtering.html)
* [並べ替え](grid_sorting.html)
* [列のピン固定](grid_column_pinning.html)
* [列のサイズ変更](grid_column_resizing.html)
* [選択](grid_selection.html)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
