---
title:  Angular Grid のサイズ - Ignite UI for Angular
_description: Tree Grid コンポーネントにサイズ機能を適用する方法を説明します。Ignite UI for Angular のコンパクト ビュー オプションのセットを使用できます。
_keywords: material density, size, igniteui for angular, infragistics, マテリアル密度
_license: commercial
_language: ja
---



# Angular Tree Grid のサイズ

**IgxTreeGrid** デザインは[マテリアル デザイン ガイドライン](https://material.io/design)に基づきます。現在、それぞれ small (小)、medium (中)、または large (大) のビューを表示する、事前定義されたサイズ オプションのセットから選択するオプションが提供されています。マテリアル UI テーブル/マテリアル UI グリッドに適切なサイズを選択することで、量の多いコンテンツを操作する際のユーザー エクスペリエンスを飛躍的に向上させることができます。


## Angular Tree Grid サイズの例




<code-view style="height:620px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-display-density/" alt="Angular Tree Grid サイズの例">
</code-view>

<div class="divider--half"></div>



## 使用方法

上記デモで示されるように、[**IgxTreeGrid**]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) には 3 つのサイズ オプション (**small**、**medium**、**large**) が用意されています。以下のコード スニペットは、size を設定する方法を示します。

```html
<igx-tree-grid #treeGrid [data]="data" style="--ig-size: var(--ig-size-small)">
</igx-tree-grid>
```

以下のコード スニペットは、size を設定する方法を示します。各オプションを Tree Grid に反映する方法を紹介します。サイズ間で切り替える際に各 Tree Grid 要素の高さとそのパディングが変更されます。カスタムの列 [**width**]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) を適用する場合、左右のパディングより大きくする必要があることに注意してください。
- **--ig-size-large** - これはデフォルトの Tree Grid サイズです。密度が最も低く、行の高さが `50px` です。左右のパディングは `24px` です。最小列 [`width`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width) は `80px` です。
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




最後にサイズを適用するためのロジックを実装します。

```typescript
@ViewChild('treeGrid', { read: IgxTreeGridComponent })
public treeGrid: IgxTreeGridComponent;

public selectSize(event: any) {
    this.size = this.sizes[event.index].label;
}


@HostBinding('style.--ig-size')
protected get sizeStyle() {
    return `var(--ig-size-${this.size})`;
}
```

[**IgxTreeGrid**]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) の Tree Grid 行の高さを変更するその他のオプションに [`rowHeight`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowheight) プロパティがあります。このプロパティと `--ig-size` CSS 変数 オプションが Tree Grid レイアウトにどのように動作に影響するかを以下で確認できます。

以下を確認してください。
- **[rowHeight]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowheight) が指定されている場合**、`--ig-size` CSS 変数は行の高さに**影響しません**。
- `--ig-size` は、上記の理由により**残りすべてのグリッド要素に影響します**。

サンプル機能を拡張して [`rowHeight`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowHeight) プロパティを Tree Grid に追加します。

 ```html
 <igx-tree-grid #treeGrid [data]="data" [rowHeight]="'80px'" width="100%" 
 height="550px" [allowFiltering]="true">
 ..............
 </igx-tree-grid>
 ```

<div class="divider--half"></div>

## API リファレンス

<div class="divider--half"></div>

- [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
- [IgxTreeGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)
- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)

<div class="divider--half"></div>

## その他のリソース

- [Tree Grid 概要](tree-grid.md)
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
