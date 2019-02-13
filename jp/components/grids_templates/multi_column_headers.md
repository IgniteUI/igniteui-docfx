---
title: Column Group コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: 複数列ヘッダーは、共通ヘッダーの下に配置して列をグループ化できます。各列グループにその他のグループや列を組み合わせて表示できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular データグリッド コンポーネント, Angular データグリッド コントロール, ネイティブ Angular コンポーネント, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高パフォーマンス Grid, 複数列ヘッダー, 遅延複数列ヘッダー, グリッド複数列ヘッダー, Angular グリッド複数列ヘッダー, Angular 列
_language: ja
---

## 複数列ヘッダー

[`IgxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) は、列ヘッダーの下に行を配置した行のグループ化が可能な `multi-column headers` をサポートします。各 `column group` は、その他のグループや列を組み合わせて表示できます。

## デモ

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-multi-column-headers-iframe" src='{environment:demosBaseUrl}/grid/multi-column-headers' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-multi-column-headers-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

`Multi column header` の宣言は列セットを [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) コンポーネントに [`header`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#header) タイトルを渡してラップします。

```html
<igx-grid [data]="data" height="600px" [allowFiltering]="true">
    <igx-column-group header="Contact Information">
        <igx-column sortable="true" resizable="true" field="Phone"></igx-column>
        <igx-column sortable="true" resizable="true" field="Fax"></igx-column>
        <igx-column sortable="true" resizable="true" field="PostalCode"></igx-column>
    </igx-column-group>
</igx-grid>
```

ネスト ヘッダーの `n-th` レベルは、上記の宣言に従います。つまり [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) をネストします。

```html
<igx-grid [data]="data" height="600px" [allowFiltering]="true">
    <igx-column-group header="General Information">
        <igx-column [movable]="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column [movable]="true" [pinned]="false" sortable="true" resizable="true" field="ContactName"></igx-column>
            <igx-column [movable]="true" sortable="true" resizable="true" field="ContactTitle"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```

各 [`igx-column-group`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) は、[`moving`](column_moving.md)、[`pinning`](column_pinning.md)、[`hiding`](column_hiding.md) をサポートします。
> [!NOTE]
> 列セットと列グループがある場合、ピン固定は一番上の列でのみ可能です。ネストされた各 `column groups` または `columns` のピン固定はできません。<br />
> `columns` と `column groups` 間の移動は、階層の同じレベルで同じ `group` の場合のみ可能です。<br />
> `columns/column-groups` が現在の `group` でラップされていない場合 ( **最上位** の `columns` の場合、移動は表示列間のみ可能です。

```html
<igx-grid [data]="data" height="600px" [allowFiltering]="true">
    <igx-column-group  [movable]="true" [pinned]="true" header="General Information">
        <igx-column [movable]="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
    </igx-column-group>
    <igx-column sortable="true" resizable="true" field="Phone"></igx-column>
    <igx-column sortable="true" resizable="true" field="Fax"></igx-column>
    <igx-column sortable="true" resizable="true" field="PostalCode"></igx-column>
</igx-grid>
```

### API まとめ
<div class="divider--half"></div>

* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxColumnGroupComponent]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html)

<div class="divider--half"></div>

### その他のリソース
<div class="divider--half"></div>

* [Grid の概要](grid.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)
* [グループ化](groupby.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)