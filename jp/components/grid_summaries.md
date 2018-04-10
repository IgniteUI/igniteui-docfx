---
title: Grid summaries
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Summaries, Summary
_language: ja
---

### 集計

> [!NOTE]
> 列の集計は、ページング、フィルタリング、または並べ替えが適用された場合も**列値すべての関数**です。

グリッド**集計**を列ごとに有効できます。つまり、必要な列のみアクティブ化できます。**グリッド集計**は、列のデータ型に基づいてデフォルト集計の定義済みセットを提供します。

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

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.html)
* [Virtualization and Performance](grid_virtualization.html)
* [Paging](grid_paging.html)
* [Filtering](grid_filtering.html)
* [Sorting](grid_sorting.html)
* [Column Pinning](grid_column_pinning.html)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)