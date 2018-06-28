---
title: Column Group コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: 複数列ヘッダーは、共通ヘッダーの下に配置して列をグループ化できます。各列グループにその他のグループや列を組み合わせて表示できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular データグリッド コンポーネント, Angular データグリッド コントロール, ネイティブ Angular コンポーネント, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高パフォーマンス Grid, 複数列ヘッダー, 遅延複数列ヘッダー, グリッド複数列ヘッダー, Angular グリッド複数列ヘッダー, Angular 列
---

## 複数列ヘッダー

`igxGrid` は、列ヘッダーの下に行を配置した行のグループ化が可能な `multi-column headers` をサポートします。各 `column group` は、その他のグループや列を組み合わせて表示できます。

## デモ

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-multi-column-headers-iframe" src='{environment:demosBaseUrl}/multi-column-headers' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-multi-column-headers-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

`Multi column header` の宣言は列セットを `igx-column-group` コンポーネントに `header` タイトルを渡してラップします。

```html
<igx-grid [data]="data" height="600px">
    <igx-column-group header="Contact Information">
        <igx-column filterable="true" sortable="true" resizable="true" field="Phone"></igx-column>
        <igx-column filterable="true" sortable="true" resizable="true" field="Fax"></igx-column>
        <igx-column filterable="true" sortable="true" resizable="true" field="PostalCode"></igx-column>
    </igx-column-group>
</igx-grid>
```

ネスト ヘッダーの `n-th` レベルは、上記の宣言に従います。つまり `igx-column-group` をネストします。

```html
<igx-grid [data]="data" height="600px">
    <igx-column-group header="General Information">
        <igx-column [movable]="true" filterable="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
        <igx-column-group [movable]="true" header="Person Details">
            <igx-column [movable]="true" [pinned]="false" filterable="true" sortable="true" resizable="true" field="ContactName"></igx-column>
            <igx-column [movable]="true" filterable="true" sortable="true" resizable="true" field="ContactTitle"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-grid>
```

各 `igx-column-group` は、`moving`、`pinning`、`hiding` をサポートします。
> [!NOTE]
> 列セットと列グループがある場合、ピン固定は一番上の列にのみ可能です。ネストされた各 `column groups` または `columns` のピン固定はできません。<br />
> `columns` と `column groups` 間の移動は、階層の同じレベルで同じ `group` の場合のみ可能です。<br />
> `columns/column-groups` が現在の `group` でラップされていない場合 ( **最上位** の `columns` の場合、移動は表示列間のみ可能です。

```html
<igx-grid [data]="data" height="600px">
    <igx-column-group  [movable]="true" [pinned]="true" header="General Information">
        <igx-column [movable]="true" filterable="true" sortable="true" resizable="true" field="CompanyName"></igx-column>
    </igx-column-group>
    <igx-column filterable="true" sortable="true" resizable="true" field="Phone"></igx-column>
    <igx-column filterable="true" sortable="true" resizable="true" field="Fax"></igx-column>
    <igx-column filterable="true" sortable="true" resizable="true" field="PostalCode"></igx-column>
</igx-grid>
```

## API まとめ
### IgxColumnGroupComponent

#### 入力
| 名前 | 型 | 説明 |
| :--- | :--- | :---|
|`searchable`| boolean | 列が検索に含まれるかどうかを決定します。 false (デフォルトは true) に設定した場合、この列のセル値はグリッドの検索 API の結果に含まれません。|
|`hidden`| boolean | 列の表示状態。 |
|`movable`| boolean | 現在の `column group` が移動可能かどうかを決定します。 |

#### Getters/Setters
|名前|型|ゲッター|セッター|説明|
|--- |--- |--- |--- |--- |
|`allChildren`| IgxColumnComponent[] | はい | いいえ |  `column groups` を含むすべての子の `flatten` データを返します。|
|`columnGroup`| boolean | はい | いいえ | 現在の列が column group` かどうかを返します。|
|`level`| number | はい | いいえ | ヘッダー階層内の `column group` のレベルを返します。|
|`parent`| IgxColumnGroupComponent|IgxColumnComponent | はい | いいえ | ヘッダー階層内の `column group` のレベルを返します。|
|`children`| IgxColumnComponent[] | はい | いいえ | `column group` の直接の子を返します。 |
|`topLevelParent`| IgxColumnGroupComponent | はい | いいえ | `group` の最上位の親を返します。 |
|`width`| string | はい | いいえ | グループに含まれる子によって決定される現在の列グループの `width` を返します。 |
|`pinned`| boolean | はい | はい | 現在の `column group` がピン固定されているかどうかを取得または設定します。 |

### Methods

|名前|戻り値の型|説明|
|--- |--- |--- |
|`pin(index?): boolean`|boolean|列をピン固定します。操作が成功したかどうかを返します。|
|`unpin(index?): boolean`|boolean|列のピン固定を解除します。操作が成功したかどうかを返します。|

<div class="divider--half"></div>

### その他のリソース
<div class="divider--half"></div>

* [Grid の概要](grid.md)
* [仮想化とパフォーマンス](grid_virtualization.md)
* [ページング](grid_paging.md)
* [フィルタリング](grid_filtering.md)
* [並べ替え](grid_sorting.md)
* [集計](grid_summaries.md)
* [列のサイズ変更](grid_column_resizing.md)
* [選択](grid_selection.md)
* [グループ化](grid_groupby.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)