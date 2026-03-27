---
title:  Angular Grid のサイズ - Ignite UI for Angular
_description: Hierarchical Grid コンポーネントにサイズ機能を適用する方法を説明します。Ignite UI for Angular のコンパクト ビュー オプションのセットを使用できます。
_keywords: material density, size, igniteui for angular, infragistics, マテリアル密度
_license: commercial
_language: ja
---


# Angular Hierarchical Grid のサイズ

**IgxHierarchicalGrid** デザインは[マテリアル デザイン ガイドライン](https://material.io/design)に基づきます。現在、それぞれ small (小)、medium (中)、または large (大) のビューを表示する、事前定義されたサイズ オプションのセットから選択するオプションが提供されています。マテリアル UI テーブル/マテリアル UI グリッドに適切なサイズを選択することで、量の多いコンテンツを操作する際のユーザー エクスペリエンスを飛躍的に向上させることができます。


## Angular Hierarchical Grid サイズの例





<code-view style="height:680px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-density/" alt="Angular Hierarchical Grid サイズの例">
</code-view>

<div class="divider--half"></div>


## 使用方法

上記デモで示されるように、[**IgxHierarchicalGrid**]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) には 3 つのサイズ オプション (**small**、**medium**、**large**) が用意されています。以下のコード スニペットは、size を設定する方法を示します。

```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data" style="--ig-size: var(--ig-size-small)">
</igx-hierarchical-grid>
```

以下のコード スニペットは、size を設定する方法を示します。各オプションを Hierarchical Grid に反映する方法を紹介します。サイズ間で切り替える際に各 Hierarchical Grid 要素の高さとそのパディングが変更されます。カスタムの列 [**width**]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) を適用する場合、左右のパディングより大きくする必要があることに注意してください。
- **--ig-size-large** - これはデフォルトの Hierarchical Grid サイズです。密度が最も低く、行の高さが `50px` です。左右のパディングは `24px` です。最小列 [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) は `80px` です。
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



最後にサイズを適用するためのロジックを実装します。

```typescript
@ViewChild('hierarchicalGrid', { read: IgxHierarchicalGridComponent })
public hierarchicalGrid: IgxHierarchicalGridComponent;

public selectSize(event: any) {
    this.size = this.sizes[event.index].label;
}


@HostBinding('style.--ig-size')
protected get sizeStyle() {
    return `var(--ig-size-${this.size})`;
}
```

[**IgxHierarchicalGrid**]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) の Hierarchical Grid 行の高さを変更するその他のオプションに [`rowHeight`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowheight) プロパティがあります。このプロパティと `--ig-size` CSS 変数 オプションが Hierarchical Grid レイアウトにどのように動作に影響するかを以下で確認できます。

以下を確認してください。
- **[rowHeight]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowheight) が指定されている場合**、`--ig-size` CSS 変数は行の高さに**影響しません**。
- `--ig-size` は、上記の理由により**残りすべてのグリッド要素に影響します**。

サンプル機能を拡張して [`rowHeight`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowHeight) プロパティを Hierarchical Grid に追加します。

 ```html
 <igx-hierarchical-grid #hierarchicalGrid [data]="data" [rowHeight]="'80px'" width="100%" 
 height="550px" [allowFiltering]="true">
 ..............
 </igx-hierarchical-grid>
 ```

<div class="divider--half"></div>

## API リファレンス

<div class="divider--half"></div>

- [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)
- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

<div class="divider--half"></div>

## その他のリソース

- [Hierarchical Grid 概要](hierarchical-grid.md)
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
