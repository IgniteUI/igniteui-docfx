---
title:  Grid の表示密度 - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Grid コントロールは、列のデータ型に基づいて編集可能な列のデフォルト セル テンプレートを提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Grid, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高パフォーマンス Grid, Grid 表示密度
_language: ja
---

### Grid の表示密度

**Igx-Grid** デザインは[マテリアル デザイン ガイドライン](https://material.io/guidelines/material-design/introduction.html)に基づきます。表示[密度](https://material.io/design/layout/density.html#usage)オプションの定義済みセットから選択するオプションを提供します。正しい密度を選択すると、コンテンツの大量との相互作用でユーザー エクスペリエンスを向上できます。

#### デモ

<div class="sample-container loading" style="height:620px">
    <iframe id="grid-displayDensity-sample-iframe" src='{environment:demosBaseUrl}/grid-displayDensity' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-displayDensity-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

<div class="divider--half"></div>

### 使用方法

上記デモで示されるように、[**Igx-Grid**]({environment:angularApiUrl}/classes/igxgridcomponent.html) は 3 つの密度オプション (**compact**、**cosy**、**comfortable**) を提供します。以下のコード スニペットは、[`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) を設定する方法を示します。

```html
<igx-grid #grid [data]="data" [displayDensity]="'cosy'" >
</igx-grid>
```

または

```typescript
...
this.grid.displayDensity = "cosy";
...
```

各オプションをグリッドに反映する方法を紹介します。表示密度オプション間で切り替える際に各グリッド要素の高さとそのパッディングが変更されます。カスタムの列幅を適用する場合、左右のパディングより大きくする必要があることに注意してください。
 - **comfortable** - デフォルトのグリッド表示密度です。密度が最も低く、行の高さが `50px` です。Left および Right パッディングは `24px`、最小列幅は `48px` です。
 - **cosy** - 中密度で、行の高さが `40px` です。Left および Right パッディングは `16px`、最小列幅は `32px` です。
 - **compact** - 密度が最も高く、行の高さが `32px` で、Left および Right パッディングは `12px` です。最小列幅は `24px` です。

> [!NOTE]
> 注: 現在サイズはオーバーライド**できません**。

引き続きサンプルを使用して [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) の適用方法について説明します。最初に各密度を切り替えるボタンを追加します。

```html
<div class="density-chooser">
    <igx-buttongroup [values]="displayDensities"></igx-buttongroup>
</div>
```

```typescript
@ViewChild(IgxButtonGroupComponent) public buttonGroup: IgxButtonGroupComponent;
public density = "compact";
public displayDensities;

public ngOnInit() {
    this.displayDensities = [
        {
            label: "compact",
            selected: this.density === "compact",
            togglable: true
        },
        {
            label: "cosy",
            selected: this.density === "cosy",
            togglable: true
        },
        {
            label: "comfortable",
            selected: this.density === "comfortable",
            togglable: true
        }
    ];
}
```

マークアップを追加します。


```html
<div class="density-chooser">
    <igx-buttongroup [values]="displayDensities" (onSelect)="selectDensity($event)"></igx-buttongroup>
</div>
<igx-grid #grid [data]="data" [displayDensity]="density" width="100%" height="550px" [allowFiltering]="true">
    <igx-column-group  header="Customer Information">
    <igx-column field="CustomerName" header="Customer Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column-group  header="Customer Address">
        <igx-column field="Country" header="Country" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
        </igx-column>
        <igx-column field="City" header="City" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
            </igx-column>
        <igx-column field="Address" header="Address" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
        </igx-column>
        <igx-column field="PostalCode" header="Postal Code" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
        </igx-column>
    </igx-column-group>
    </igx-column-group>
    <igx-column field="Salesperson" header="Sales Person" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
    </igx-column>
    <igx-column field="ShipperName" header="Shipper Name"  [dataType]="'string'" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date"  [dataType]="'date'" [sortable]="true" [hasSummary]="true">
        <ng-template igxCell let-cell="cell" let-val>
            {{val | date:'dd/MM/yyyy'}}
        </ng-template>
    </igx-column>
    <igx-column-group  header="Product Details">
        <igx-column field="ProductID" header="ID" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="ProductName" header="Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="UnitPrice" header="Unit Price" [dataType]="'number'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="Quantity" header="Quantity" [dataType]="'number'" [sortable]="true" [hasSummary]="true" [filterable]="false">
        </igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="true" [hasSummary]="true">
        </igx-column>
    </igx-column-group>
    <igx-column-group  header="Shipping Information">
        <igx-column field="ShipName" header="Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
        </igx-column>
        <igx-column-group  header="Shipping Address">
            <igx-column field="ShipCountry" header="Country" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
            </igx-column>
            <igx-column field="ShipCity" header="City" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
            </igx-column>
            <igx-column field="ShipPostalCode" header="Postal Code" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
            </igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```

最後に密度を適用するためのロジックを実装します。

```typescript
@ViewChild("grid", { read: IgxGridComponent })
public grid: IgxGridComponent;
.....
public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;

}
```

[**Igx-Grid**]({environment:angularApiUrl}/classes/igxgridcomponent.html) でグリッド行の高さを変更するその他のオプションとして、[`rowHeight`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowheight) プロパティがあります。のプロパティと [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) オプションがグリッドレイアウトにどのように動作に影響するかを以下で確認できます。

以下を確認してください。
 - **[rowHeight]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowheight) を指定** した場合、[`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) オプションは行の高さに影響**しません**。
 - [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) は、上記の理由により**残りすべてのグリッド要素に影響します。**。

サンプル機能を拡張して [`rowHeight`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowheight) プロパティをグリッドに追加します。 
 ```html
 <igx-grid #grid [data]="data" [displayDensity]="density" [rowHeight]="'80px'" width="100%" height="550px">
 ..............
 </igx-grid>

 ```

<div class="divider--half"></div>

### API
<div class="divider--half"></div>

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxcolumncomponent.html)

<div class="divider--half"></div>

### その他のリソース

* [Grid の概要](grid.md)
* [仮想化とパフォーマンス](grid_virtualization.md)
* [編集](grid_editing.md)
* [ページング](grid_paging.md)
* [フィルタリング](grid_filtering.md)
* [並べ替え](grid_sorting.md)
* [集計](grid_summaries.md)
* [列のピン固定](grid_column_pinning.md)
* [列のサイズ変更](grid_column_resizing.md)
* [選択](grid_selection.md)
* [検索](grid_search.md)
