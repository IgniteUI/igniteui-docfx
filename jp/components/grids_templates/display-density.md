@@if (igxName === 'IgxGrid') {
---
title:  Angular Grid のサイズ - Ignite UI for Angular
_description: Data Grid コンポーネントにサイズ機能を適用する方法を説明します。Ignite UI for Angular のコンパクト ビュー オプションのセットを使用できます。
_keywords: material density, size, igniteui for angular, infragistics, マテリアル密度
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title:  Angular Grid のサイズ - Ignite UI for Angular
_description: Tree Grid コンポーネントにサイズ機能を適用する方法を説明します。Ignite UI for Angular のコンパクト ビュー オプションのセットを使用できます。
_keywords: material density, size, igniteui for angular, infragistics, マテリアル密度
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title:  Angular Grid のサイズ - Ignite UI for Angular
_description: Hierarchical Grid コンポーネントにサイズ機能を適用する方法を説明します。Ignite UI for Angular のコンパクト ビュー オプションのセットを使用できます。
_keywords: material density, size, igniteui for angular, infragistics, マテリアル密度
_language: ja
---
}

# Angular @@igComponent のサイズ

**@@igxName** デザインは[マテリアル デザイン ガイドライン](https://material.io/design)に基づきます。現在、それぞれ small (小)、medium (中)、または large (大) のビューを表示する、事前定義されたサイズ オプションのセットから選択するオプションが提供されています。マテリアル UI テーブル/マテリアル UI グリッドに適切なサイズを選択することで、量の多いコンテンツを操作する際のユーザー エクスペリエンスを飛躍的に向上させることができます。


## Angular @@igComponent サイズの例

@@if (igxName === 'IgxGrid') {

<code-view style="height:620px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-displayDensity" alt="Angular @@igComponent サイズの例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:620px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-display-density" alt="Angular @@igComponent サイズの例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:680px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-density" alt="Angular @@igComponent サイズの例">
</code-view>

<div class="divider--half"></div>
}

## 使用方法

上記デモで示されるように、[**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) には 3 つのサイズ オプション (**small**、**medium**、**large**) が用意されています。以下のコード スニペットは、size を設定する方法を示します。

```html
<@@igSelector #@@igObjectRef [data]="data" style="--ig-size: var(--ig-size-small)">
</@@igSelector>
```

以下のコード スニペットは、size を設定する方法を示します。各オプションを @@igComponent に反映する方法を紹介します。サイズ間で切り替える際に各 @@igComponent 要素の高さとそのパディングが変更されます。カスタムの列 [**width**]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) を適用する場合、左右のパディングより大きくする必要があることに注意してください。
 - **--ig-size-large** - これはデフォルトの @@igComponent サイズです。密度が最も低く、行の高さが `50px` です。左右のパディングは `24px` です。最小列 [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) は `80px` です。
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

@@if (igxName === 'IgxGrid') {
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
}
@@if (igxName === 'IgxTreeGrid') {
```html
<div class="density-chooser">
    <igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
</div>
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" width="100%"
    height="550px" [allowFiltering]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [hasSummary]="true" width="200px"></igx-column>
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="HireDate" dataType="date" [sortable]="true" [hasSummary]="true">
            <ng-template igxCell let-cell="cell" let-val>
                {{val | date:'dd/MM/yyyy'}}
            </ng-template>
        </igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ID" dataType="number" [filterable]="false"></igx-column>
            <igx-column field="Title" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Age" dataType="number" [sortable]="true" [hasSummary]="true"
                [summaries]="numberSummaries" [filterable]="false"></igx-column>
        </igx-column-group>
    </igx-column-group>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Country" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="City" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Address" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Fax" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="PostalCode" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Country" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="City" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Address" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<div class="density-chooser">
    <igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
</div>
<igx-hierarchical-grid #hGrid [data]="localdata" [height]="'600px'" [width]="'100%'" [allowFiltering]="true">
    <igx-column field="CustomerID"></igx-column>
    <igx-column field="CompanyName"></igx-column>
    <igx-column field="ContactName"></igx-column>
    <igx-column field="ContactTitle"></igx-column>
    <igx-column field="Address"></igx-column>
    <igx-column field="City"></igx-column>
    <igx-column field="PostalCode"></igx-column>
    <igx-column field="Country"></igx-column>
    <igx-column field="Phone"></igx-column>
    <igx-column field="Fax"></igx-column>

    <igx-row-island [key]="'Orders'" [autoGenerate]="false" #layout1 >
            <igx-column field="OrderID"></igx-column>
            <igx-column field="EmployeeID"></igx-column>
            <igx-column field="OrderDate"></igx-column>
            <igx-column field="RequiredDate"></igx-column>
            <igx-column field="ShippedDate"></igx-column>
            <igx-column field="ShipVia"></igx-column>
            <igx-column field="Freight"></igx-column>
            <igx-column field="ShipName"></igx-column>
            <igx-column field="ShipAddress"></igx-column>
            <igx-column field="ShipCity"></igx-column>
            <igx-column field="ShipPostalCode"></igx-column>
            <igx-column field="ShipCountry"></igx-column>
        <igx-row-island [key]="'OrderDetails'" [autoGenerate]="false">
                <igx-column field="ProductID"></igx-column>
                <igx-column field="UnitPrice"></igx-column>
                <igx-column field="Quantity"></igx-column>
                <igx-column field="Discount"></igx-column>
        </igx-row-island>
    </igx-row-island>

</igx-hierarchical-grid>
```
}

最後にサイズを適用するためのロジックを実装します。

```typescript
@ViewChild('@@igObjectRef', { read: @@igxNameComponent })
public @@igObjectRef: @@igxNameComponent;

public selectSize(event: any) {
    this.size = this.sizes[event.index].label;
}


@HostBinding('style.--ig-size')
protected get sizeStyle() {
    return `var(--ig-size-${this.size})`;
}
```

[**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) の @@igComponent 行の高さを変更するその他のオプションに [`rowHeight`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowheight) プロパティがあります。このプロパティと `--ig-size` CSS 変数 オプションが @@igComponent レイアウトにどのように動作に影響するかを以下で確認できます。

以下を確認してください。
 - **[rowHeight]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowheight) が指定されている場合**、`--ig-size` CSS 変数は行の高さに**影響しません**。
 - `--ig-size` は、上記の理由により**残りすべてのグリッド要素に影響します**。

サンプル機能を拡張して [`rowHeight`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowHeight) プロパティを @@igComponent に追加します。

 ```html
 <@@igSelector #@@igObjectRef [data]="data" [rowHeight]="'80px'" width="100%" 
 height="550px" [allowFiltering]="true">
 ..............
 </@@igSelector>
 ```
<div class="divider--half"></div>

## API リファレンス

<div class="divider--half"></div>

* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

<div class="divider--half"></div>

## その他のリソース

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [編集](editing.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
* [検索](search.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
