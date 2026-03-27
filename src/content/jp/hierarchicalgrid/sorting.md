---
title: Angular Hierarchical Grid のソート - Ignite UI for Angular
_description: Ignite for Angular UI グリッドの Angular ソート機能を使用して、ソート可能な列の組み合わせを構成し、データ レコードの表示順序を変更します。
_keywords: angular sort, ignite ui for angular, infragistics
_license: commercial
_language: ja
---



# Angular Hierarchical Grid のソート

Ignite UI for Angular Hierarchical Grid では、列レベルでのデータ ソートが可能です。つまり、**igx-hierarchical-grid** にソート可能な列とソート不可の列の両方を持つことができます。Angular でソートを実行すると、指定した条件に基づいてレコードの表示順序を変更できます。

>[!NOTE]
> これまで、グループ化 / ソートは互いに連携して機能していました。13.2 バージョンでは、グループ化をソートから切り離す新しい動作が導入されています。たとえば、グループ化をクリアしても、グリッド内のソート式はクリアされません。その逆も同様です。それでも、列がソートおよびグループ化されている場合は、グループ化された式が優先されます。

## Angular Hierarchical Grid ソートの例




更に **igx-hierarchical-grid** の [`contextMenu`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#contextMenu) 出力を使用してソートにカスタム コンテキスト メニューが追加されます。


<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-sorting/" alt="Angular Hierarchical Grid ソートの例">
</code-view>



<div class="divider--half"></div>

[`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable) 入力で可能です。Hierarchical Grid のソートで、[`sortingIgnoreCase`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortingIgnoreCase) プロパティを設定して大文字と小文字を区別するソートができます。




```html
<igx-column field="ProductName" header="Product Name" [dataType]="'string'" sortable="true"></igx-column>
```



## ソート インジケーター

ソートされた列数が一定数以上ある場合、ソート順の指定がないと混乱する可能性があります。

**IgxHierarchicalGrid** は、ソートされた各列のインデックスを示すことにより、この問題の解決策を提供します。



## API を使用したソート

Hierarchical Grid [`sort`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#sort) メソッドを使用して列、複数の列の組み合わせをソートできます。




```typescript
import { SortingDirection } from 'igniteui-angular/grids/core';
// import { SortingDirection } from '@infragistics/igniteui-angular'; for licensed package

// Perform a case insensitive ascending sort on the ProductName column.
this.hierarchicalGrid.sort({ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true });

// Perform sorting on both the ProductName and Price columns.
this.hierarchicalGrid.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```



> [!NOTE]
> Sorting は、[`DefaultSortingStrategy`]({environment:angularApiUrl}/classes/defaultsortingstrategy.html) アルゴリズムを使用して実行されます。[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortStrategy) または [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html#strategy) は、代替アルゴリズムとして [`ISortingStrategy`]({environment:angularApiUrl}/interfaces/isortingstrategy.html) のカスタム実装を使用できます。たとえば複雑なテンプレート列や画像列にユーザー定義のソートを定義する必要がある場合に便利です。

フィルター動作で、ソート状態をクリアするには [`clearSort`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#clearSort) メソッドを使用します。




```typescript
// Removes the sorting state from the ProductName column
this.hierarchicalGrid.clearSort('ProductName');

// Removes the sorting state from every column in the Hierarchical Grid
this.hierarchicalGrid.clearSort();
```



> [!NOTE]
> **Hierarchical Grid** の [`sortStrategy`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#sortStrategy) は **column** の [`sortStrategy`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortStrategy) と比較して異なるタイプです。異なるスコープで機能し、異なるパラメーターを公開するためです。

> [!NOTE]
> ソート操作で Hierarchical Grid の基になるデータ ソースは変更**しません**。

## 初期のソート状態

Hierarchical Grid でソート状態を初期設定するには、ソート式の配列を Hierarchical Grid の [`sortingExpressions`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#sortingExpressions) プロパティに渡します。







```typescript
public ngOnInit(): void {
    this.hierarchicalGrid.sortingExpressions = [
        { 
            dir: SortingDirection.Asc, fieldName: 'Artist',
            ignoreCase: true, strategy: DefaultSortingStrategy.instance() 
        }
    ];
}
```



> [!NOTE]
> `string` 型の値が [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#dataType) `Date` の列で使用される場合、Hierarchical Grid が値を `Date` オブジェクトに解析しないため iHierarchical Grid `sorting` が正しく動作しません。`string` オブジェクトを使用する場合、値を `Date` オブジェクトに解析するためのロジックをアプリケーション レベルで実装する必要があります。

<div class="divider--half"></div>



## ソート インジケーのターテンプレート

列ヘッダーのソート インジケーター アイコンは、テンプレートを使用してカスタマイズできます。以下のディレクティブは、ソート状態 (昇順、降順、なし) のソート インジケーターをテンプレート化するために使用できます。

- `IgxSortHeaderIconDirective` – ソートが適用されない場合にソート アイコンを再テンプレート化します。

```html
<ng-template igxSortHeaderIcon>
    <igx-icon>unfold_more</igx-icon>
</ng-template>
```

- `IgxSortAscendingHeaderIconDirective` – 列が昇順にソートされたときにソート アイコンを再テンプレート化します。

```html
<ng-template igxSortAscendingHeaderIcon>
    <igx-icon>expand_less</igx-icon>
</ng-template>
```

- `IgxSortDescendningHeaderIconDirective` – 列が降順でソートされたときにソート アイコンを再テンプレート化します。

```html
<ng-template igxSortDescendingHeaderIcon>
    <igx-icon>expand_more</igx-icon>
</ng-template>
```

<div class="divider--half"></div>

## スタイル設定

ソート動作のスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も単純なアプローチに従って、[`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) を拡張し、`$sorted-header-icon-color` および `sortable-header-icon-hover-color` パラメーターを受け取ります。

```scss
$custom-theme: grid-theme(
  $sorted-header-icon-color: #ffb06a,
  $sortable-header-icon-hover-color: black
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


<code-view style="height:510px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-sorting-styling/" >
</code-view>



>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。

## API リファレンス

- [IgxHierarchicalGridComponent API]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)
- [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)

## その他のリソース

<div class="divider--half"></div>

- [Hierarchical Grid 概要](hierarchical-grid.md)
- [仮想化とパフォーマンス](virtualization.md)
- [ページング](paging.md)
- [フィルタリング](filtering.md)
- [集計](summaries.md)
- [列移動](column-moving.md)
- [列のピン固定](column-pinning.md)
- [列のサイズ変更](column-resizing.md)
- [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
