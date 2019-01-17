---
title: 集計 - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular 集計を使用すると、列のデータ型に基づいて定義済みのデフォルト集計項目を持つ別のコンテナーで列情報を表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Grid, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高いパフォーマンス Grid, 集計機能, 集計
_language: ja
---

### グリッドの集計

Ignite UI for Angular Grid コンポーネントには、列レベルで制御可能な**集計**機能があります。

#### デモ

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-summary-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-summary-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> 列の集計は**列値すべての関数**ですが、フィルタリングが適用された場合、列の集計は**フィルターされた結果値の関数**になります。

列のデータ型に基づいて定義済みのデフォルト集計項目を持つ別のコンテナーで列情報を表示します。Ignite UI for Angular で**グリッド集計**を列ごとに有効にして必要な列のみアクティブ化できます。グリッド集計は、列のデータ型に基づいてデフォルト集計の定義済みセットを提供します。

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

列で [`hasSummary`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#hassummary) プロパティを `true` に設定すると**グリッド集計**が有効になります。各列の集計は列のデータ型に基づいて解決されます。`igx-grid` でデフォルトの列データ型は `string` のため、`number` または `date` の集計を適用するには、[`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) プロパティを `number` または `date` に設定します。

```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)" >
    <igx-column field="ProductID" header="Product ID" width="200px"  [sortable]="true">
    </igx-column>
    <igx-column field="ProductName" header="Product Name" width="200px" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="ReorderLevel" width="200px" [editable]="true" [dataType]="'number'" [hasSummary]="true">
    </igx-column>
</igx-grid>
```

特定の列または列のリストで集計を有効/無効にするもう 1 つの方法として **igx-grid** の [`enableSummaries`]({environment:angularApiUrl}/classes/igxgridcomponent.html#enablesummaries)/[`disableSummaries`]({environment:angularApiUrl}/classes/igxgridcomponent.html#disablesummaries) 公開メソッドがあります。

```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)" >
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

この関数が要件に合わない場合、指定した列にカスタム集計を提供できます。これを実装するには、列のデータ型に基づいて [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html)、[`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)、または [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) の基本クラスをオーバーライドします。このように既存の関数を変更または新しい関数を追加できます。[`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) クラスのデフォルト集計は [`count`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#count) メソッドのみです。[`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html) は [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) を拡張し、[`min`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#min)、[`max`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#max)、[`sum`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#sum)、および [`average`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html#average) 集計を提供します。[`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) は [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html) を拡張し、[`earliest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#earliest) および [`latest`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html#latest) を提供します。

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

以下のコードで、[`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate) メソッドはインターフェイスである IgxSummaryResult のリストを返します。

```typescript
interface IgxSummaryResult {
    key: string;
    label: string;
    summaryResult: any;
}
```

> [!NOTE]
> 集計行の高さを正しく計算するためにグリッドで [`operate`]({environment:angularApiUrl}/classes/igxsummaryoperand.html#operate) メソッドがデータが空の場合も常に [`IgxSummaryResult`]({environment:angularApiUrl}/interfaces/igxsummaryresult.html) 配列の正しい長さを返す必要があります。

`UnitsInStock` 列にカスタム集計を追加します。[`summaries`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#summaries) プロパティを以下に作成するクラスに設定します。

```typescript
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="800px" width="800px" (onColumnInit)="initColumn($event)" >
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

### グループ集計

グループ列がある場合、[`summaryCalculationMode`]({environment:angularApiUrl}/classes/igxgridcomponent.html#summarycalculationmode) や [`summaryPosition`]({environment:angularApiUrl}/classes/igxgridcomponent.html#summaryposition) でグリッド集計の配置や計算モードを変更できます。

以下は使用できる [`summaryCalculationMode`]({environment:angularApiUrl}/classes/igxgridcomponent.html#summarycalculationmode) プロパティの値です。
 - rootLevelOnly - ルート レベルのみ集計が計算されます。
 - childLevelsOnly - 子レベルのみ集計が計算されます。
 - rootAndChildLevels - ルートと子レベルの両方の集計が計算されます。これがデフォルト値です。

以下は使用できる [`summaryCalculationMode`]({environment:angularApiUrl}/classes/igxgridcomponent.html#summarycalculationmode) プロパティの値です。
 - top - 集計行はグループ列の子の前に表示されます。
 - bottom - 集計行はグループ列の子の後に表示されます。これがデフォルト値です。

> [!NOTE]
> [`summaryPosition`]({environment:angularApiUrl}/classes/igxgridcomponent.html#summaryposition) プロパティは子レベルの集計のみに適用します。ルートレベルの集計は、常にグリッドの下に固定されます。

#### デモ

<div class="sample-container loading" style="height:720px">
    <iframe id="grid-groupby-summary-iframe" src='{environment:demosBaseUrl}/grid/grid-groupby-summary' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-groupby-summary-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
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

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxGridSummaries スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-summary-theme)
* [IgxSummaryOperand]({environment:angularApiUrl}/classes/igxsummaryoperand.html)
* [IgxNumberSummaryOperand]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)
* [IgxDateSummaryOperand]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

### その他のリソース
<div class="divider--half"></div>

* [グリッドの概要](grid.md)
* [仮想化とパフォーマンス](grid_virtualization.md)
* [ページング](grid_paging.md)
* [フィルタリング](grid_filtering.md)
* [並べ替え](grid_sorting.md)
* [列移動](grid_column_moving.md)
* [列のピン固定](grid_column_pinning.md)
* [列のサイズ変更](grid_column_resizing.md)
* [選択](grid_selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
