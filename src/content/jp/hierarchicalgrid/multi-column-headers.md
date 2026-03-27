---
title: Angular の複数列ヘッダー - Ignite UI for Angular
_description: Ignite UI for Angular グリッドを使用して列ヘッダーを共通の階層ヘッダーの下に配置し、それらを複数のヘッダーに結合することで、列ヘッダーのグループ化を開始します。
_keywords: 列ヘッダー, ignite ui for angular, infragistics
_license: commercial
_language: ja
---



# Angular Hierarchical Grid 複数列ヘッダーの概要

[`IgxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) は、共通の列ヘッダー下で行のグループ化が可能な`複数列ヘッダー`をサポートします。各複数列ヘッダーグループは、マテリアル UI グリッド内でその他複数のグループや列を組み合わせることができます。

## Angular Hierarchical Grid 複数列ヘッダーの例





<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-column/" alt="Angular Hierarchical Grid 複数列ヘッダーの例">
</code-view>



`Multi-column header` の宣言は列セットを [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) コンポーネントと渡された [`header`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#header) タイトルにラップして行います。





```html
<igx-hierarchical-grid [data]="localdata" [moving]="true" [allowFiltering]="true">
    <igx-column field="CustomerID" sortable="true" resizable="true"></igx-column>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Address" sortable="true" resizable="true"></igx-column>
            <igx-column field="City" sortable="true" resizable="true"></igx-column>
            <igx-column field="PostalCode" sortable="true" resizable="true"></igx-column>
            <igx-column field="Country" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" sortable="true" resizable="true"></igx-column>
            <igx-column field="Fax" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-hierarchical-grid>
```



ネスト ヘッダーの `n-th` レベルは、上記の宣言に従います。[`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) をネストしてください。





```html
<igx-hierarchical-grid [data]="localdata" [allowFiltering]="true" [moving]="true">
    <igx-column field="CustomerID" sortable="true" resizable="true"></igx-column>
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="CompanyName" sortable="true" resizable="true"></igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ContactName" sortable="true" resizable="true"></igx-column>
            <igx-column field="ContactTitle" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-hierarchical-grid>
```



各 [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) は、[`移動`](column-moving.md)、[`ピン固定`](column-pinning.md)と[`非表示`](column-hiding.md)をサポートします。

> [!NOTE]
> 列セットと列グループがある場合、ピン固定は列の一番上の親レベルでのみ可能です。ネストした `column groups` や `columns` のピン固定はできません。<br />
> 複数列ヘッダーでのピン固定を使用すると、グループ全体がピン固定されることに注意してください。<br />
> `columns` と `column groups` 間の移動は、階層の同じレベルで同じ `group` の場合のみです。<br />
> `columns/column-groups` が現在の `group` でラップされない場合 (**一番上のレベル** `columns` の場合)、表示列全体の移動はできません。





```html
<igx-hierarchical-grid [data]="localdata" [allowFiltering]="true" [moving]="true">
    <igx-column field="CustomerID" sortable="true" resizable="true"></igx-column>
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="CompanyName" sortable="true" resizable="true"></igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ContactName" sortable="true" resizable="true"></igx-column>
            <igx-column field="ContactTitle" sortable="true" resizable="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
    ...
</igx-hierarchical-grid>
```



## 複数列ヘッダー テンプレート

グリッドの各列グループは個別のテンプレートを持つことができます。列グループは、`igxHeader` ディレクティブで装飾された `ng-template` タグを必要とします。
`ng-template` は、列グループ オブジェクトと共にコンテキストとして提供されています。

```html
...
<igx-column-group header="General Information">
    <ng-template igxHeader let-columnGroup>
        {{ columnGroup.header | uppercase }}
    </ng-template>
    ...
</igx-column-group>
...
```

複数の列グループに対して単一のテンプレートを再利用する場合は、以下のように列グループの [`headerTemplate`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#headerTemplate) プロパティを設定できます。

```html
<ng-template #columnGroupHeaderTemplate let-columnGroup>
    {{ columnGroup.header | uppercase }}
</ng-template>

...
<igx-column-group header="General Information" [headerTemplate]="columnGroupHeaderTemplate">
    ...
</igx-column-group>
<igx-column-group header="Address Information" [headerTemplate]="columnGroupHeaderTemplate">
    ...
</igx-column-group>
...
```

> [!NOTE]
> ヘッダーが再テンプレート化され、対応する列グループが移動可能な場合は、テンプレート要素で **draggable** 属性を **false** に設定する必要があり、これにより適用されるイベントをすべて処理できます。

```html
<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon>
</ng-template>
```

次のサンプルは、ヘッダー テンプレートを使用して折りたたみ可能な列グループを実装する方法を示しています。





<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-column-template/" >
</code-view>



## スタイル設定

ソート動作のスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も単純なアプローチに従って、[`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme)  を拡張する新しいテーマを作成し、`$header-background`、`$header-text-color`、`$header-border-width`、`$header-border-style` および `$header-border-color` パラメーターを受け取ります。

```scss
$custom-theme: grid-theme(
  $header-background: #e0f3ff,
  $header-text-color: #e41c77,
  $header-border-width: 1px,
  $header-border-style: solid,
  $header-border-color: rgba(0, 0, 0, 0.08)
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/palettes#function-palette) および [`color`]({environment:sassApiUrl}/palettes#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](../themes/sass/palettes.md)のトピックをご覧ください。

最後の手順は、それぞれのテーマを持つコンポーネント ミックスインを**含める**ことです。

```scss
:host {
  @include tokens($custom-theme);
}
```





### デモ


<code-view style="height:500px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-column-styling/" >
</code-view>



>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。

## API リファレンス

<div class="divider--half"></div>

- [IgxHierarchicalGridComponent]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)
- [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)
<div class="divider--half"></div>

## その他のリソース

<div class="divider--half"></div>

- [Hierarchical Grid 概要](hierarchical-grid.md)
- [仮想化とパフォーマンス](virtualization.md)
- [ページング](paging.md)
- [フィルタリング](filtering.md)
- [ソート](sorting.md)
- [集計](summaries.md)
- [列のサイズ変更](column-resizing.md)
- [選択](selection.md)


<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
