---
title: Angular Data Grid の高度なフィルタリング - Ignite UI for Angular
_description: Angular テーブルを使用してデータの高度なフィルターを構成する方法を学びます。グリッドの高度なフィルタリングは、これまで以上に便利で魅力的です。
_keywords: 高度なフィルター, igniteui for angular, インフラジスティックス
_license: commercial
_language: ja
---




# Angular Pivot Grid 高度なフィルタリング

高度なフィルタリングは、Pivot Grid のような任意の [Angular テーブル](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid)の全列に及ぶフィルタリング条件を持つグループを作成できるダイアログを提供します。

## Angular Pivot Grid 高度なフィルタリングの例





<div class="divider--half"></div>

## インタラクション

**高度なフィルタリング** ダイアログを開くには、グリッドツールバーの高度なフィルタリングボタンをクリックする必要があります。ダイアログはフィルタリング ロジックを生成、表示、編集するために [`IgxQueryBuilder`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html) コンポーネントを使用しています。インタラクション プロセスの詳細については、[`Query Builder トピック`](../query-builder.md#ignite-ui-for-angular-query-builder-を使用した作業の開始)を参照してください。

フィルタリング条件とグループを作成する準備後にデータをフィルタリングするには、**[適用]** ボタンをクリックします。拡張フィルターを変更後、変更を保存したくない場合は、**[キャンセル]** ボタンをクリックします。**[フィルターのクリア]** ボタンをクリックして、高度なフィルターをクリアすることもできます。

## 使用方法

高度なフィルタリングを有効にするには [`allowAdvancedFiltering`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#allowAdvancedFiltering) 入力プロパティを true に設定します。





高度なフィルタリングは、[`advancedFilteringExpressionsTree`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#advancedFilteringExpressionsTree) 入力プロパティに保存される [`FilteringExpressionsTree`]({environment:angularApiUrl}/classes/filteringexpressionstree.html) を生成します。このプロパティを使用して、高度なフィルタリングの初期状態を設定できます。



```typescript
ngAfterViewInit(): void {
    const tree = new FilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'ID',
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        searchVal: 'a',
        ignoreCase: true
    });
    const subTree = new FilteringExpressionsTree(FilteringLogic.Or);
    subTree.filteringOperands.push({
        fieldName: 'ContactTitle',
        condition: IgxStringFilteringOperand.instance().condition('doesNotContain'),
        searchVal: 'b',
        ignoreCase: true
    });
    subTree.filteringOperands.push({
        fieldName: 'CompanyName',
        condition: IgxStringFilteringOperand.instance().condition('startsWith'),
        searchVal: 'c',
        ignoreCase: true
    });
    tree.filteringOperands.push(subTree);
    
    this.pivotGrid.advancedFilteringExpressionsTree = tree;
}
```





Pivot Grid ツールバーを表示したくない場合は、[`openAdvancedFilteringDialog`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#openAdvancedFilteringDialog) および [`closeAdvancedFilteringDialog`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#closeAdvancedFilteringDialog) メソッドを使用して、高度なフィルタリング ダイアログをコーディングを使用して開いたり閉じたりできます。

>[!NOTE]
>Pivot Grid で `quickFilter`/`excelStyleFilter` と高度なフィルタリング ユーザー インターフェイスの両方を有効にできます。両フィルタリング ユーザー インターフェイスは、互いに依存せずに機能します。Pivot Grid の最終的なフィルター結果は、2 つのフィルターの結果の共通部分です。


## 外部の高度なフィルタリング

上記デモで示されるように、高度なフィルタリング ダイアログは、Pivot Grid の上にあるオーバーレイでホストされます。ダイアログのセットアップの準備ができたときに、適用または閉じる操作によってダイアログが非表示になります。ダイアログはスタンドアロン コンポーネントとして使用した場合、常に表示になります。以下のデモでは、高度なフィルタリングダイアログが Pivot Grid とは別に宣言されます。

### デモ







### 使用方法

Pivot Grid の外部で動作するように高度なフィルタリングを構成する方法は簡単です。ダイアログを作成して、その [`grid`]({environment:angularApiUrl}/classes/igxgridtoolbaradvancedfilteringcomponent.html#grid) プロパティを設定するだけです。





また、[ドラッグアンドドロップ App Builder™](https://jp.infragistics.com/products/appbuilder) が、デザインから Angular コード作成へのストーリー全体をどのように効率化できるかを確認することもできます。

<div class="divider--half"></div>


## スタイル設定

高度なフィルタリング ダイアログのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

高度なフィルタリング ダイアログは [`IgxQueryBuilder`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html) コンポーネントを使用するため、[`query-builder-theme`]({environment:sassApiUrl}/themes#query-builder-theme) を使用してスタイルを設定できます。ヘッダー タイトルのスタイルを設定するには、[`query-builder-theme`]({environment:sassApiUrl}/themes#query-builder-theme) を拡張するカスタム テーマを作成し、`$header-foreground` パラメーターを設定します。

```scss
$custom-query-builder: query-builder-theme(
  $header-foreground: #512da8
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/palettes#function-palette) および [`color`]({environment:sassApiUrl}/palettes#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](../themes/sass/palettes.md)のトピックをご覧ください。

最後にコンポーネントのテーマをアプリケーションに**含めます**。

```scss
$custom-query-builder: query-builder-theme(
  $header-foreground: #512da8,
  $color-expression-group-and:  #eb0000,
  $color-expression-group-or: #0000f3,
  $subquery-header-background: var(--ig-gray-300),
  $subquery-border-color: var(--ig-warn-500),
  $subquery-border-radius: rem(4px)
);

igx-advanced-filtering-dialog {
  @include tokens($custom-query-builder);
}
```

>[!NOTE]
>作成した **query-builder-theme** を `igx-advanced-filtering-dialog` 内に含めることで、このカスタム テーマは高度なフィルタリング ダイアログ内のクエリ ビルダーにのみに影響します。そうしない場合、アプリケーション内の他のクエリ ビルダー コンポーネントにも影響します。

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
$custom-query-builder: query-builder-theme(
  $header-foreground: #512da8,
  $color-expression-group-and:  #eb0000,
  $color-expression-group-or: #0000f3,
  $subquery-header-background: var(--ig-gray-300),
  $subquery-border-color: var(--ig-warn-500),
  $subquery-border-radius: rem(4px)
);

:host {
  ::ng-deep {
    igx-advanced-filtering-dialog {
      @include tokens($custom-query-builder);
    }
  }
}
```

### デモ





>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。
<div class="divider--half"></div>

## API リファレンス

<div class="divider--half"></div>

- [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
- [IgxPivotGridComponent API]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html)
- [IgxPivotGridComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)

## その他のリソース

<div class="divider--half"></div>

- [Pivot Grid 概要](pivot-grid.md)
- [フィルタリング](filtering.md)
- [Excel スタイル フィルタリング](excel-style-filtering.md)
- [仮想化とパフォーマンス](virtualization.md)
- [ページング](paging.md)
- [ソート](sorting.md)
- [集計](summaries.md)
- [列移動](column-moving.md)
- [列固定](column-pinning.md)
- [列サイズ変更](column-resizing.md)
- [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
