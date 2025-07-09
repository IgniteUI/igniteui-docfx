@@if(igxName === 'IgxGrid'){
---
title: Angular Data Grid の Excel スタイル フィルタリング - Ignite UI for Angular
_description: Angular Data Grid で Excel フィルタリングを構成する方法を説明します。さまざまなオプションを有効/無効にし、Excel スタイル フィルター メニューを自由にカスタマイズできます。
_keywords: Excel のようなフィルター, igniteui for angular, インフラジスティックス
_language: ja
---
}
@@if(igxName !== 'IgxGrid'){
---
title: Angular @@igComponent の Excel スタイル フィルタリング - Ignite UI for Angular
_description: Angular @@igComponent で Excel フィルタリングを構成する方法を説明します。さまざまなオプションを有効/無効にし、Excel スタイル フィルター メニューを自由にカスタマイズできます。
_keywords: Excel のようなフィルター, igniteui for angular, インフラジスティックス
_language: ja
---
}

# Angular @@igComponent の Excel スタイル フィルタリング

グリッド Excel フィルタリングは、@@igComponent などの Angular テーブルに対して Excel のようなフィルタリング UI を提供します。

## Angular @@igComponent Excel スタイル フィルタリングの例

@@if (igxName === 'IgxGrid') {

<code-view style="height:950px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-1" alt="Angular @@igComponent Excel スタイル フィルタリングの例">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:950px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-sample-1" alt="Angular @@igComponent Excel スタイル フィルタリングの例">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:950px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-1" alt="Angular @@igComponent Excel スタイル フィルタリングの例">
</code-view>

}

<div class="divider--half"></div>

## 使用方法

Excel スタイル フィルタリングをオンにするには、2 つの入力を設定します。[`allowFiltering`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#allowFiltering) を `true` に設定し、[`filterMode`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#filterMode) を `excelStyleFilter` に設定してください。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="data" [autoGenerate]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
</igx-hierarchical-grid>
```
}

## インタラクション

特定の列のフィルター メニューを開くには、ヘッダーの Angular フィルター アイコンをクリックします。さらに、選択したヘッダーで `Ctrl + Shift + L` の組み合わせを使用できます。列でフィルタリング機能と並べ替え、ピン固定、移動、選択、非表示が設定された場合、オンになっている機能のボタンが表示されます。

フィルターが適用されていない場合、リストのすべての項目が選択されます。リストの上の入力からフィルターされます。データのフィルターは、リストで項目を選択/非選択して [適用] ボタンをクリックするか、あるいは `Enter` を押します。リスト項目に適用したフィルタリングは、`equals` オペレーターでフィルター式を作成します。各式間のロジック オペレーターは [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or) です。

検索ボックスに入力してフィルターを適用すると、検索条件に一致する項目のみが選択されます。ただし、現在フィルターされている項目に項目を追加したい場合は、`[現在の選択をフィルターに追加]` オプションを選択する必要があります。

フィルターをクリアしたい場合、[すべて選択] オプションをチェックして [適用] ボタンを押します。

異なる式でフィルターを適用する場合、**Text フィルター** をクリックし、特定の列で使用できるフィルター演算子のサブメニューを開きます。いずれかを選択してカスタム フィルター ダイアログを開き、フィルターとロジック演算子を使用して式を追加できます。[クリア] ボタンでフィルターをクリアできます。


<div class="divider--half"></div>

## メニュー機能の構成

ソート、移動、ピン固定、非表示の機能をフィルター メニューから削除できます。これらを制御する入力は以下のとおりです: [`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable)、[`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected)、[`disablePinning`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablePinning)、[`disableHiding`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disableHiding)。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [moving]="true" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
    <igx-column field="ProductName" header="Product Name" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="false" [disablePinning]="true" [disableHiding]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [disablePinning]="true" [disableHiding]="true" [sortable]="true" [dataType]="'number'">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="false"  [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [dataType]="'boolean'">
    </igx-column>
</igx-grid>
```

<div class="divider--half"></div>

以下のサンプルの **Product Name** と **Discontinued** 列で 4 つすべての機能が有効です。**Quantity Per Unit** で 4 機能すべてが無効、**Unit Price** でソートと移動のみ有効、**Order Date** でピン固定と非表示のみ [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) です。
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [moving]="true" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">
    <igx-column field="ID" header="Order ID" [dataType]="'string'"></igx-column>
    <igx-column field="Name" header="Order Product" [dataType]="'string'" [sortable]="true"></igx-column>
    <igx-column field="Category" header="Category" [dataType]="'string'" [sortable]="true"></igx-column>
    <igx-column field="Units" header="Units" [dataType]="'number'" [sortable]="true"></igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [dataType]="'currency'" [pipeArgs]="formatOptions"></igx-column>
    <igx-column field="Price" header="Price" [dataType]="'currency'" [pipeArgs]="formatOptions" [sortable]="false" [disablePinning]="true" [disableHiding]="true"></igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [formatter]="formatDate" [sortable]="false"></igx-column>
    <igx-column field="Delivered" header="Deliverued" [dataType]="'boolean'" [sortable]="false">
        <ng-template igxCell let-cell="cell" let-val>
            <img *ngIf="val" src="assets/images/grid/active.png" title="Delivered" alt="Delivered" />
            <img *ngIf="!val" src="assets/images/grid/expired.png" title="Undelivered" alt="Undelivered" />
        </ng-template>
    </igx-column>
</igx-tree-grid>
```

<div class="divider--half"></div>

以下のサンプルでは、'Order Product'、'Category'、および 'Units' 列で 3 つの機能がすべて有効化され、'Price' で 3 つすべてが無効化され、'Order Date' と 'Delivered' でピン固定と非表示のみが設定されています。
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [moving]="true" [allowFiltering]='true' filterMode="excelStyleFilter"
    [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    <igx-column field="Artist" [filterable]='true' [sortable]="true"></igx-column>
    <igx-column field="Photo" [filterable]='false'>
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [filterable]='true' [disablePinning]="true" [disableHiding]="true"></igx-column>
    <igx-column field="Grammy Nominations" [filterable]='true' [dataType]="'number'" [sortable]="false"></igx-column>
    <igx-column field="Grammy Awards" [filterable]='true' [dataType]="'number'"></igx-column>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
        <igx-column field="Album" [filterable]='true'></igx-column>
        <igx-column field="Launch Date" [filterable]='true' [dataType]="'date'"></igx-column>
        <igx-column field="Billboard Review" [filterable]='true' [dataType]="'number'"></igx-column>
        <igx-column field="US Billboard 200" [filterable]='true' [dataType]="'number'"></igx-column>
    <igx-row-island [key]="'Songs'" [autoGenerate]="false" >
            <igx-column field="No."></igx-column>
            <igx-column field="Title"></igx-column>
            <igx-column field="Released"></igx-column>
            <igx-column field="Genre"></igx-column>
    </igx-row-island>
    </igx-row-island>

    <igx-row-island [key]="'Tours'" [autoGenerate]="false">
        <igx-column field="Tour"></igx-column>
        <igx-column field="Started on"></igx-column>
        <igx-column field="Location"></igx-column>
        <igx-column field="Headliner"></igx-column>
    </igx-row-island>
</igx-hierarchical-grid>
```

<div class="divider--half"></div>

以下のサンプルは、'Artist' 列で 4 つの機能が有効、'Debut' で 4 つの機能が無効、'Grammy Nominations' でピン固定と非表示のみ有効です。
}

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {

<code-view style="height:900px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-2" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:900px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-sample-2" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:900px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-2" >
</code-view>

}

<div class="divider--half"></div>

## テンプレート

列機能を無効にせずに Excel スタイル フィルター メニューをさらにカスタマイズする場合は、カスタム テンプレートを使用できます。Excel スタイル フィルター メニューには、テンプレート化のための 2 つのディレクティブがあります:
- `IgxExcelStyleColumnOperationsTemplateDirective` - ソート、移動、固定などのすべての列操作で領域を再テンプレート化します。
- `IgxExcelStyleFilterOperationsTemplateDirective` - すべてのフィルター固有の操作で領域を再テンプレート化します。

これらの領域の 1 つだけ、または両方を再テンプレート化できます。これらのディレクティブ内にカスタム コンテンツを配置したり、組み込みの Excel スタイル フィルタリング コンポーネントを使用できます。

次のコードは、[`igx-excel-style-header`]({environment:angularApiUrl}/classes/igxexcelstyleheadercomponent.html)、[`igx-excel-style-sorting`]({environment:angularApiUrl}/classes/igxexcelstylesortingcomponent.html) および [`igx-excel-style-search`]({environment:angularApiUrl}/classes/igxexcelstylesearchcomponent.html) コンポーネントを使用してカスタム Excel スタイル フィルター メニューを定義する方法を示しています。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid1 [data]="data" [autoGenerate]="false" height="650px" width="100%" [allowFiltering]="true" [filterMode]="'excelStyleFilter'">

    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>
    
    ...
</igx-grid>
```

}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treegrid1 [data]="data" [autoGenerate]="false" height="480px" width="100%" [allowFiltering]="true"
    primaryKey="ID" foreignKey="ParentID" filterMode="excelStyleFilter">

    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>

    ...
</igx-tree-grid>
```

}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter"
    [height]="'650px'" [width]="'100%'" [rowHeight]="'65px'" #hierarchicalGrid>
    
    <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
        <igx-excel-style-column-operations>
            <igx-excel-style-header
                [showPinning]="true"
                [showHiding]="true"
            >
            </igx-excel-style-header>

            <igx-excel-style-sorting></igx-excel-style-sorting>
        </igx-excel-style-column-operations>

        <igx-excel-style-filter-operations>
            <igx-excel-style-search></igx-excel-style-search>
        </igx-excel-style-filter-operations>
    </igx-grid-excel-style-filtering>

    ...

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" [allowFiltering]='true' filterMode="excelStyleFilter">
        <igx-grid-excel-style-filtering [minHeight]="'380px'" [maxHeight]="'500px'">
            <igx-excel-style-column-operations>
                <igx-excel-style-header
                    [showPinning]="true"
                    [showHiding]="true"
                >
                </igx-excel-style-header>

                <igx-excel-style-sorting></igx-excel-style-sorting>
            </igx-excel-style-column-operations>

            <igx-excel-style-filter-operations>
                <igx-excel-style-search></igx-excel-style-search>
            </igx-excel-style-filter-operations>
        </igx-grid-excel-style-filtering>
        ....
</igx-hierarchical-grid>
```

}

`igxExcelStyleHeaderIcon` ディレクティブを使用して、列ヘッダーの Excel スタイル フィルタリング アイコンを再テンプレート化することもできます。

```html
<@@igSelector ...>
    <ng-template igxExcelStyleHeaderIcon>
        <igx-icon>filter_alt</igx-icon>
    </ng-template>
</@@igSelector>
```

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-excel-style-filtering-sample-3" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-sample-3" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-sample-3" >
</code-view>

}

以下は、使用可能な Excel スタイルフィルタリング コンポーネントの完全なリストです:
- [`igx-excel-style-header`]({environment:angularApiUrl}/classes/igxexcelstyleheadercomponent.html)
- [`igx-excel-style-sorting`]({environment:angularApiUrl}/classes/igxexcelstylesortingcomponent.html)
- [`igx-excel-style-moving`]({environment:angularApiUrl}/classes/igxexcelstylemovingcomponent.html)
- [`igx-excel-style-pinning`]({environment:angularApiUrl}/classes/igxexcelstylepinningcomponent.html)
- [`igx-excel-style-hiding`]({environment:angularApiUrl}/classes/igxexcelstylehidingcomponent.html)
- [`igx-excel-style-selecting`]({environment:angularApiUrl}/classes/igxexcelstyleselectingcomponent.html)
- [`igx-excel-style-clear-filters`]({environment:angularApiUrl}/classes/igxexcelstyleclearfilterscomponent.html)
- [`igx-excel-style-conditional-filter`]({environment:angularApiUrl}/classes/igxexcelstyleconditionalfiltercomponent.html)
- [`igx-excel-style-search`]({environment:angularApiUrl}/classes/igxexcelstylesearchcomponent.html)

<div class="divider--half"></div>

## 一意の列値ストラテジ

Excel スタイル フィルタリング ダイアログ内のリスト項目は、それぞれの列の一意の値を表します。これらの値は手動で提供し、ロード オン デマンドすることができます。詳細については、[`@@igComponent リモート データ操作`](remote-data-operations.md#一意の列値ストラテジ)で説明されています。

## 書式設定された値のフィルタリング ストラテジ

デフォルトで、@@igComponent コンポーネントは元のセル値に基づいてデータをフィルターしますが、場合によっては書式設定された値に基づいてデータをフィルターすることができます。@@if (igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid') { そのためには、[`FormattedValuesFilteringStrategy`]({environment:angularApiUrl}/classes/formattedvaluesfilteringstrategy.html) を使用します。 } @@if (igxName === 'IgxTreeGrid') { そのためには、[`TreeGridFormattedValuesFilteringStrategy`]({environment:angularApiUrl}/classes/treegridformattedvaluesfilteringstrategy.html) を使用します。 } 以下のサンプルは、列の数値を文字列として書式設定し、文字列値に基づいて @@igComponent をフィルターする方法を示します。

@@if (igxName === 'IgxGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-formatted-filtering-strategy" >
</code-view>

}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-formatted-filtering-strategy" >
</code-view>

}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-formatted-filtering-strategy" >
</code-view>

}

>[!NOTE]
>データの同じフィールドに複数の列がバインドされていて、1 つの列にフォーマッタがある場合、書式設定された値のフィルタリング ストラテジは正しく動作しません。

@@if (igxName === 'IgxTreeGrid') {
## ツリー フィルター ビュー

デフォルトでは、Excel スタイル フィルタリング ダイアログはリスト ビューで項目を表示します。それらをツリー ビューに表示するには、[`TreeGridFilteringStrategy`]({environment:angularApiUrl}/classes/treegridfilteringstrategy.html) を使用して、列フィールド名の配列を指定します。フィルター項目は、指定された列の場合はツリー ビューに、他のすべての列の場合はリスト ビューに表示されます。次のサンプルは、最初の列のツリー ビューにフィルター項目を表示する方法を示しています:

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-tree-filter-view" >
</code-view>
}

## 外部の Excel スタイル フィルタリング

上記デモで示されるように、Excel スタイル フィルタリング ダイアログのデフォルトの外観は @@igComponent 内にあります。このダイアログは、フィルターを構成するときにのみ表示されます。ダイアログはグリッドの外部でスタンドアロン コンポーネントとして使用すると、常に表示になります。以下のデモでは、Excel スタイル フィルタリングが @@igComponent とは別に宣言されます。

### デモ

@@if (igxName === 'IgxGrid') {

<code-view style="height:670px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-external-excel-style-filtering" >
</code-view>

}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:670px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-external-excel-style-filtering" >
</code-view>

}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:670px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-external-excel-style-filtering" >
</code-view>

}


<div class="divider--half"></div>

### 使用方法

Excel スタイル フィルタリング コンポーネントを設定するには、[`column`]({environment:angularApiUrl}/classes/igxgridexcelstylefilteringcomponent.html#column) プロパティを @@igComponent 列の 1 つに設定する必要があります。上記のサンプルで、[`column`]({environment:angularApiUrl}/classes/igxgridexcelstylefilteringcomponent.html#column) プロパティは @@igComponent 列を表示する IgxSelectComponent の値にバインドされています。

@@if (igxName === 'IgxGrid') {
```html
<igx-select #gridColums value="ProductID">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of grid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="grid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-select #gridColums value="ID">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of treegrid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="treegrid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-select #gridColums value="Artist">
   <label igxLabel>Columns:</label>
   <igx-select-item *ngFor="let c of hierarchicalgrid1.columns" [value]="c.field">
       {{ c.field }}
   </igx-select-item>
</igx-select>

<igx-grid-excel-style-filtering [column]="hierarchicalgrid1.getColumnByName(gridColums.value)">
</igx-grid-excel-style-filtering>
```
}

## 表示要素が重なる場合のアウトレット設定

@@igComponent の [`z-index`](https://developer.mozilla.org/ja-JP/docs/Web/CSS/z-index) は、DOM の各グリッドに個別の重ね合わせコンテキストを作成します。これにより、グリッドのすべての子孫要素が互いに重ね合うことなく意図したとおりに描画されます。
ただし、グリッドの外側にある要素 (Excel スタイル フィルターなど) は、同じ `z-index` を持つ外側の要素 (たとえば、2 つのグリッドが上下に重ねる) と競合し、誤った描画が発生します。この問題の解決策は、[`outlet`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#outlet) プロパティを外部のアウトレット ディレクティブに設定し、オーバーレイ要素が常に上に表示されるようにすることです。

### デモ
@@if (igxName === 'IgxGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-external-outlet" >
</code-view>

}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-external-outlet" >
</code-view>

}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-external-outlet" >
</code-view>

}

## スタイル設定

ページネーターのスタイル設定を始めるには、すべてのテーマ関数とコンポーネントミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Excel スタイルのフィルタリング ダイアログは、`filtering-row-background` パラメーターを使用して、グリッドのテーマから背景色を取得します。背景を変更するには、カスタム テーマを作成する必要があります。

```scss
$custom-grid: grid-theme(
  $filtering-row-background: #ffcd0f
);
```

ボタン、チェックボックス、リスト、さらにはドロップダウンなど、フィルタリング ダイアログのような Excel 内には明らかに多くのコンポーネントがあります。スタイルを設定するには、それぞれに個別のテーマを作成する必要があります。

```scss
$dark-button: button-theme(
  $background: #ffcd0f,
  $foreground: #292826,
  $hover-background: #292826,
  $hover-foreground: #ffcd0f
);

$dark-input-group: input-group-theme(
  $box-background: #ffcd0f,
  $idle-text-color: #292826,
  $focused-text-color: #292826,
  $filled-text-color: #292826
);

$custom-list: list-theme(
  $background: #ffcd0f
);

$custom-checkbox: checkbox-theme(
  $empty-color: #292826,
  $fill-color: #292826,
  $tick-color: #ffcd0f,
  $label-color: #292826
);

$custom-drop-down: drop-down-theme(
  $background-color: #ffcd0f,
  $item-text-color: #292826,
  $hover-item-background: #292826,
  $hover-item-text-color: #ffcd0f
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/index.html#function-palette) および [`color`]({environment:sassApiUrl}/index.html#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](../themes/sass/palettes.md)のトピックをご覧ください。

この例では、リストされたコンポーネントのパラメーターの一部のみを変更しましたが、[`button-theme`]({environment:sassApiUrl}/index.html#function-button-theme)、[`checkbox-theme`]({environment:sassApiUrl}/index.html#function-checkbox-theme)、[`drop-down-theme`]({environment:sassApiUrl}/index.html#function-drop-down-theme)、[`input-group-theme`]({environment:sassApiUrl}/index.html#function-input-group-theme)、[`list-theme`]({environment:sassApiUrl}/index.html#function-list-theme) テーマは、それぞれのスタイルを制御するためのより多くのパラメーターを提供します。

最後の手順は、それぞれのテーマを持つコンポーネント ミックスインを**含める**ことです。また、入力のプレース ホルダーの色プロパティを設定します。

```scss
@include css-vars($custom-drop-down);
@include css-vars($custom-grid);

.igx-excel-filter, 
.igx-excel-filter__secondary {
  @include css-vars($dark-button);
  @include css-vars($dark-input-group);
  @include css-vars($custom-list);
  @include css-vars($custom-checkbox);

  .igx-input-group__input::placeholder {
    color: #ffcd0f;
  }
}
```

>[!NOTE]
>`.igx-excel-filter` と `.igx-excel-filter__secondary` 内のほとんどのコンポーネントのミックスインをスコープするため、これらのカスタムテーマは、Excel スタイル フィルタリング ダイアログとそのすべてのサブダイアログにネストされたコンポーネントのみに影響します。そうでない場合、他のボタン、チェックボックス、入力グループ、およびリストも影響を受けます。

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
  ::ng-deep {
    @include css-vars($custom-drop-down);
    @include css-vars($custom-grid);

    .igx-excel-filter,
    .igx-excel-filter__secondary {
      @include css-vars($dark-button);
      @include css-vars($dark-input-group);
      @include css-vars($custom-list);
      @include css-vars($custom-checkbox);
      
      .igx-input-group__input::placeholder {
        color: #ffcd0f;
      }
    }
  }
}
```

### デモ

@@if (igxName === 'IgxGrid') {

<code-view style="height:950px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-excel-style-filtering-style" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:950px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-excel-style-filtering-style" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:950px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-style-filtering-style" >
</code-view>

}

>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。
<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-grid-theme)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列移動](column-moving.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
