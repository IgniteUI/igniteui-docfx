@@if (igxName === 'IgxGrid') {
---
title: Angular Data Grid での列の並べ替えと移動 - インフラジスティックス
_description: カスタム列順序を設定し、マウスのドラッグ/ドロップまたはタッチジェスチャ、または Angular Column Moving API を使用して列の並べ替えを有効にします。Ignite UI for Angular をお試しください。
_keywords: column order, igniteui for angular, infragistics, 列順序
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid での列の並べ替えと移動 - インフラジスティックス
_description: カスタム列順序を設定し、マウスのドラッグ/ドロップまたはタッチジェスチャ、または Angular Column Moving API を使用して列の並べ替えを有効にします。Ignite UI for Angular をお試しください。
_keywords: column order, igniteui for angular, infragistics, 列順序, インフラジスティックス
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid での列の並べ替えと移動 - インフラジスティックス
_description: カスタム列順序を設定し、マウスのドラッグ/ドロップまたはタッチジェスチャ、または Angular Column Moving API を使用して列の並べ替えを有効にします。Ignite UI for Angular をお試しください。
_keywords: column order, igniteui for angular, infragistics, 列順序, インフラジスティックス
_language: ja
---
}

# @@igComponent の列の並べ替えと移動

Ignite UI for Angular の @@igComponent のコンポーネントは、標準ドラッグ/ドロップのマウス/タッチによるジェスチャ、または列移動 API を使用した順序変更のための**列移動**機能を提供します。列の移動は、固定列と固定されていない列、および複数列ヘッダーの両方で機能します。列を固定領域に移動すると列が固定され、または逆に固定領域の外に列を移動すると、列の固定が解除されます。

> [!NOTE]
> 列と列グループ間の順序変更は、それらが階層の同じレベルにあり、両方が同じグループにある場合にのみ許可されます。列/列グループが最上位の列である場合、列/列グループ間を移動できます。

> [!NOTE]
> 列ヘッダーがテンプレート化され、対応する列が移動可能 (またはグループ化可能) である場合、テンプレート化された要素は **draggable** 属性を **false** に設定する必要があります。これにより、要素によって発行されたすべてのイベントのハンドラーをアタッチできます。それ以外の場合、イベントは `igxDrag` ディレクティブによって消費されます。

> [!NOTE]
> ピン固定領域が最大幅 (@@igComponent 幅合計の 80%) を超えた場合、ドロップ操作が禁止されていてピン固定ができないことをヒントの表示でエンドユーザーに通知します。つまり、ピン固定領域に列をドロップできません。

```html
<ng-template igxHeader>
    <igx-icon [attr.draggable]="false" (click)="onClick()"></igx-icon>
</ng-template>
```

## Angular @@igComponent 列移動の例

@@if (igxName === 'IgxGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-moving-sample" alt="Angular @@igComponent 列移動の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-column-moving" alt="Angular @@igComponent 列移動の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:660px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-moving" alt="Angular @@igComponent 列移動の例">
</code-view>

<div class="divider--half"></div>
}

## 概要

**列移動**は各列レベルで有効にできます。つまり、[**@@igSelector**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) に移動可能な列と移動不可の列の両方を含むことができます。[`moving`]({environment:angularApiUrl}/classes/igxgridcomponent.html#moving) の [`igx-grid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) 入力によって制御されます。


@@if (igxName === 'IgxGrid') {
```html
<igx-grid [moving]="true"></igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [moving]="true"></igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [moving]="true">
    ...
    <igx-row-island [moving]="true"></igx-row-island>
</igx-hierarchical-grid>
```
}

## API
ドラッグアンドドロップ機能に加えて、列の移動機能には、プログラムで列を移動/並べ替えできる 2 つの API メソッドも用意されています。 

[`moveColumn`]({environment:angularApiUrl}/classes/igxgridcomponent.html#moveColumn) - 列を別の列 (ターゲット) の前または後に移動します。最初のパラメーターは移動する列で、2 番目のパラメーターはターゲット列です。オプションの 3 番目のパラメーター `position` ([`DropPosition`]({environment:angularApiUrl}/enums/dropposition.html) 値を表す) でターゲット列の前または後に列を配置するかどうかを決定します。

```typescript
// Move the ID column after the Name column
const idColumn = grid.getColumnByName("ID");
const nameColumn = grid.getColumnByName("Name");

grid.moveColumn(idColumn, nameColumn, DropPosition.AfterDropTarget);
```

[`move`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#move) - 列を指定された表示インデックスに移動します。渡されたインデックス パラメーターが無効である場合 (負である/列数を超える場合)、または列がこのインデックスに移動できない場合 (別のグループ内にある場合)、操作は実行されません。

```typescript
// Move the ID column at 3rd position.
const idColumn = grid.getColumnByName("ID");
idColumn.move(3);
```

API を使用する時、操作が成功した場合、[`columnMovingEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnMovingEnd) イベントのみが発行されることに注意してください。また、ドラッグアンドドロップ機能と比較して、API を使用するために `moving` プロパティを true に設定する必要がないことにも注意してください。 

## イベント

列のドラッグアンドドロップ操作をカスタマイズするための列移動に関連するイベントが複数あります。[`columnMovingStart`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnMovingStart)、[`columnMoving`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnMoving)、[`columnMovingEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnMovingEnd) があります。
[`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) の [`columnMovingEnd`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnMovingEnd) イベントを処理し、列が新しい位置にドロップされたときにカスタム ロジックを実装できます。たとえば、Change On Year(%) 列の後に Category のドロップをキャンセルできます。

@@if (igxName === 'IgxGrid') {
```html
<igx-grid #dataGrid [data]="data" [autoGenerate]="false" [moving]="true" (columnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Category'"></igx-column>
    <igx-column [field]="'Change On Year(%)'" [dataType]="'number'" ></igx-column>
</igx-grid>
```

```typescript
public onColumnMovingEnd(event) {
    if (event.source.field === "Category" && event.target.field === "Change On Year(%)") {
        event.cancel = true;
    }
}
```
}

@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" [moving]="true" (columnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Name'" dataType="string" width="250px"></igx-column>
    <igx-column [field]="'Title'" dataType="string" width="250px"></igx-column>
</igx-tree-grid>
```

```typescript
public onColumnMovingEnd(event) {
    if (event.source.field === "Name" && event.target.field === "Title") {
        event.cancel = true;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data" [autoGenerate]="false" [moving]="true" (columnMovingEnd)="onColumnMovingEnd($event)">
    <igx-column [field]="'Country'"></igx-column>
    <igx-column [field]="'Phone'" [dataType]="'number'"></igx-column>
</igx-hierarchical-grid>
```

```typescript
public onColumnMovingEnd(event) {
    if (event.source.field === "Phone" && event.target.field === "Country") {
        event.cancel = true;
    }
}
```
}

## スタイル設定

@@igComponent 列移動ヘッダーのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

最も簡単な方法は、[`grid-theme`]({environment:sassApiUrl}/index.html#function-grid-theme) を拡張して `$ghost-header-background`、`$ghost-header-text-color`、`$ghost-header-icon-color` パラメーターを受け入れる新しいテーマを作成します。

```scss
// Define dark theme for the column moving
$dark-grid-column-moving-theme: grid-theme(
  $ghost-header-text-color: #f4d45c,
  $ghost-header-background: #575757,
  $ghost-header-icon-color: #f4bb5c
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/index.html#function-palette) および [`color`]({environment:sassApiUrl}/index.html#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](../themes/sass/palettes.md)のトピックをご覧ください。

最後の手順は、それぞれのテーマを持つコンポーネント ミックスインを**含める**ことです。

```scss
@include css-vars($dark-grid-column-moving-theme);
```

### デモ

@@if (igxName === 'IgxGrid') {

<code-view style="height:650px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-moving-styled-sample" >
</code-view>

}

@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:650px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-column-moving-styled" >
</code-view>

}

@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:660px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-moving-styled" >
</code-view>

}

>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。

## API リファレンス
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [ページング](paging.md)
* [フィルタリング](filtering.md)
* [ソート](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [検索](search.md)}

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
