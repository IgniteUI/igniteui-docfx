---
title:  Angular Grid のサイズ - Ignite UI for Angular
_description: Data Grid コンポーネントにサイズ機能を適用する方法を説明します。Ignite UI for Angular のコンパクト ビュー オプションのセットを使用できます。
_keywords: material density, size, igniteui for angular, infragistics, マテリアル密度
_license: commercial
_language: ja
---




# Angular Grid のサイズ

**IgxGrid** デザインは[マテリアル デザイン ガイドライン](https://material.io/design)に基づきます。現在、それぞれ small (小)、medium (中)、または large (大) のビューを表示する、事前定義されたサイズ オプションのセットから選択するオプションが提供されています。マテリアル UI テーブル/マテリアル UI グリッドに適切なサイズを選択することで、量の多いコンテンツを操作する際のユーザー エクスペリエンスを飛躍的に向上させることができます。


## Angular Grid サイズの例



<code-view style="height:620px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-displayDensity/" alt="Angular Grid サイズの例">
</code-view>

<div class="divider--half"></div>




## 使用方法

上記デモで示されるように、[**IgxGrid**]({environment:angularApiUrl}/classes/igxgridcomponent.html) には 3 つのサイズ オプション (**small**、**medium**、**large**) が用意されています。以下のコード スニペットは、size を設定する方法を示します。

```html
<igx-grid #grid [data]="data" style="--ig-size: var(--ig-size-small)">
</igx-grid>
```

以下のコード スニペットは、size を設定する方法を示します。各オプションを Grid に反映する方法を紹介します。サイズ間で切り替える際に各 Grid 要素の高さとそのパディングが変更されます。カスタムの列 [**width**]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) を適用する場合、左右のパディングより大きくする必要があることに注意してください。
- **--ig-size-large** - これはデフォルトの Grid サイズです。密度が最も低く、行の高さが `50px` です。左右のパディングは `24px` です。最小列 [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) は `80px` です。
- **--ig-size-medium** - これは行の高さが `40px` の中間サイズです。左右のパディングは `16px` です。最小列 [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) は `64px` です。
- **--ig-size-small** - これは行の高さが `32px` の最小サイズです。左右のパディングは `12px` です。最小列 [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) は `56px` です。

> [!NOTE]
> 現在サイズはオーバーライド**できません**。

引き続きサンプルを使用して、各サイズの適用方法について説明します。最初に各サイズを切り替えるボタンを追加します。

```html
<div class="density-chooser">
    <igx-buttongroup [values]="sizes"></igx-buttongroup>
</div>
```

```typescript
@ViewChild(IgxButtonGroupComponent) public buttonGroup: IgxButtonGroupComponent;
public size = 'small';
public sizes;

public ngOnInit() {
    this.sizes = [
        {
            label: 'small',
            selected: this.size === 'small',
            togglable: true
        },
        {
            label: 'medium',
            selected: this.sie === 'medium',
            togglable: true
        },
        {
            label: 'large',
            selected: this.size === 'large',
            togglable: true
        }
    ];
}
```

マークアップを追加します。



```html
<div class="density-chooser">
    <igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
</div>
<igx-grid #grid [data]="data" width="100%" height="550px" [allowFiltering]="true">
    <igx-column-group  header="Customer Information">
    <igx-column field="CustomerName" header="Customer Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
    </igx-column>
    <igx-column-group  header="Customer Address">
        <igx-column field="Country" header="Country" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
        </igx-column>
        <igx-column field="City" header="City" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
            </igx-column>
        <igx-column field="Address" header="Address" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
        </igx-column>
        <igx-column field="PostalCode" header="Postal Code" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
        </igx-column>
    </igx-column-group>
    </igx-column-group>
    <igx-column field="Salesperson" header="Sales Person" [dataType]="'string'" [sortable]="true" [hasSummary]="true">
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
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [sortable]="true" [hasSummary]="true" >
        </igx-column>
    </igx-column-group>
    <igx-column-group  header="Shipping Information">
        <igx-column field="ShipName" header="Name" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
        </igx-column>
        <igx-column-group  header="Shipping Address">
            <igx-column field="ShipCountry" header="Country" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
            </igx-column>
            <igx-column field="ShipCity" header="City" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
            </igx-column>
            <igx-column field="ShipPostalCode" header="Postal Code" [dataType]="'string'" [sortable]="true" [hasSummary]="true" >
            </igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```





最後にサイズを適用するためのロジックを実装します。

```typescript
@ViewChild('grid', { read: IgxGridComponent })
public grid: IgxGridComponent;

public selectSize(event: any) {
    this.size = this.sizes[event.index].label;
}


@HostBinding('style.--ig-size')
protected get sizeStyle() {
    return `var(--ig-size-${this.size})`;
}
```

[**IgxGrid**]({environment:angularApiUrl}/classes/igxgridcomponent.html) の Grid 行の高さを変更するその他のオプションに [`rowHeight`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowheight) プロパティがあります。このプロパティと `--ig-size` CSS 変数 オプションが Grid レイアウトにどのように動作に影響するかを以下で確認できます。

以下を確認してください。
- **[rowHeight]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowheight) が指定されている場合**、`--ig-size` CSS 変数は行の高さに**影響しません**。
- `--ig-size` は、上記の理由により**残りすべてのグリッド要素に影響します**。

サンプル機能を拡張して [`rowHeight`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowHeight) プロパティを Grid に追加します。

 ```html
 <igx-grid #grid [data]="data" [rowHeight]="'80px'" width="100%" 
 height="550px" [allowFiltering]="true">
 ..............
 </igx-grid>
 ```

<div class="divider--half"></div>

## API リファレンス

<div class="divider--half"></div>

- [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
- [IgxGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)
- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

<div class="divider--half"></div>

## その他のリソース

- [Grid 概要](grid.md)
- [仮想化とパフォーマンス](virtualization.md)
- [編集](editing.md)
- [ページング](paging.md)
- [フィルタリング](filtering.md)
- [ソート](sorting.md)
- [集計](summaries.md)
- [列のピン固定](column-pinning.md)
- [列のサイズ変更](column-resizing.md)
- [選択](selection.md)
- [検索](search.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
