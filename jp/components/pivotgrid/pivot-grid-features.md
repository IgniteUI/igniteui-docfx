---
title: Angular ピボット グリッド機能 | ピボット テーブル | インフラジスティックス
_description: Ignite UI for Angular を使用して、高速で応答性の高い Angular ピボット グリッドとテーブルを作成します。ピボット データを介して複雑なデータ分析を実行します。
_keywords: angular ピボット グリッド, Angular ピボット テーブル, ignite ui for angular, ピボット グリッド機能, ピボット機能
_license: commercial
_language: ja
---

# Angular ピボット グリッド機能

ピボットおよびフラット グリッド コンポーネント クラスは、共通ベースを継承しているため、いくつかの機能を共有しています。

>[!NOTE]
>一部の機能は、ピボット テーブルのコンテキストで意味のある動作をしないため、`IgxPivotGrid` で有効にできません。以下が含まれます。
> - CRUD 操作
> - グループ化
> - 行 / 列のピン固定
> - 集計
> - ページング

ピボット グリッド コンポーネントには、以下で説明するように、そのディメンションに関連する追加の機能があります。

<code-view style="height: 870px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-features/" alt="Angular ピボット セレクターを備えたピボット グリッドの例">
</code-view>

## ディメンション フィルタリング

すべてのディメンション (フィルター、行、列) は、チップ UI または API を介してフィルター処理できます。この機能は埋め込まれており、デフォルトで有効になっています。

>[!NOTE]
>フィルタリング ディメンションを使用して、ピボット ビューの一部ではないデータ値を除外できます。

フィルタリング UI は、ディメンション チップ フィルターア イコンを介して開くことができ、一意のディメンション値の Excel スタイルのフィルタリングを可能にします。

>[!NOTE]
>すべてのフィルタリング チップに十分なスペースがない場合、ピボット グリッドには、ドロップダウンに切り取られたものが表示されます。エンドユーザーはそこでアクセスして操作できます。

ディメンションは、ディメンションの `filter` プロパティを使用して `pivotConfiguration` のディメンション構成を介して最初にフィルター処理することもできます。これは、関連するフィルター条件を使用して新しい `FilteringExpressionsTree` に設定できます。例えば:

```typescript
public filterExpTree = new FilteringExpressionsTree(FilteringLogic.And);

constructor() {
    this.filterExpTree.filteringOperands = [
        {
            condition: IgxStringFilteringOperand.instance().condition('equals'),
            fieldName: 'SellerName',
            searchVal: 'Stanley'
        }
    ];
}

public pivotConfigHierarchy: IPivotConfiguration = {
    filters: [
        {
            memberName: 'SellerName',
            enabled: true,
            filter: this.filterExpTree
        }
    ]
}
```

## ディメンションのソート

行または列のディメンション値は、関連するチップまたは API を介してソートすることができます。この機能は埋め込まれており、デフォルトで有効になっています。

関連するチップをクリックするとディメンションがソートされ、その結果、ディメンション値が昇順/降順でソートされます。

ソートは、ディメンション定義の `sortDirection` プロパティを介して最初に適用することもできます。

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    rows: [
        {
            memberName: 'SellerName',
            enabled: true,
            sortDirection: SortingDirection.Asc
        }
    ]
}
```

## ディメンションのサイズ変更

行のサイズは、列のサイズ変更と同様に、セルの右端にあるサイズ変更インジケーターを介してサイズ変更できます。
サイズ変更インジケーターをダブルクリックするか、関連する API (`autoSizeRowDimension`) を使用して、自動サイズ設定することもできます。

ディメンション定義で使用可能な `width` プロパティを使用して、最初に別のサイズを設定することもできます。

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    rows: [
        {
            memberName: 'Country',
            enabled: true,
            width: '400px'
        }
    ]
}
```

>[!NOTE]
>バージョン `18.0.0` 以降、Ignite UI for Angular では行ディメンションの `width` を `auto` に設定できます。

## ディメンションの選択

ピボット グリッドは、ベース グリッドと同じように有効になる単一選択をサポートします。例:

```html
<igx-pivot-grid #grid1 [rowSelection]="'single'" [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
</igx-pivot-grid>
```

複数の行/列にまたがるグループを作成する複数の行または列のディメンションがある場合、選択は、選択されたグループに属するすべてのセルに適用されます。

## スーパー コンパクト モード

`IgxPivotGrid` コンポーネントは、`superCompactMode` `@Input` を提供します。一度にたくさんのセルが画面に表示させる必要がある場合に適しています。有効にすると、このオプションはピボット グリッドの `ig-size` 変数を無視します。`superCompactMode` を有効にすると、`superCompactMode` オプションがない子コンポーネント (`IgxChip` など) ごとに `ig-size` 変数が `ig-size-small` に設定されます。

```html
<igx-pivot-grid [superCompactMode]="true"></igx-pivot-grid>
```

## 集計列の追加

`column` ディメンションが階層を定義すると、ピボット グリッドは追加の集計/合計列を描画し、グループ内のすべての列の集計を蓄積します。グループが縮小されている場合、集計列のみが残ります。また、グループを展開すると、グループの最後に追加の集計列が表示されます。

## 行ディメンションのヘッダー

バージョン `18.0.0` 以降では、Ignite UI for Angular の幅値のヘッダーは `pivotUI` オプションを通じて有効にできます。

```html
<igx-pivot-grid [pivotUI]="{ showRowHeaders: true }">
</igx-pivot-grid>
```

## 行ディメンションのレイアウト

`IgxPivotGridComponent` は、行ディメンションのレンダリングについて 2 通りの方法をサポートしています。これは、`pivotUI` オプションの `rowLayout` プロパティを設定することで制御できます。

```html
  <igx-pivot-grid [pivotUI]="pivotUI">
  </igx-pivot-grid>
```

```typescript
public pivotUI: IPivotUISettings = { rowLayout: PivotRowLayoutType.Horizontal };
```

グリッドのデフォルトのレイアウトは `Vertical` です。このモードでは、ディメンションの階層が垂直に展開されます。代わりに `Horizontal` を使用することもできます。このモードでは、展開された単一行ディメンションの子は、同じ親の複数行レイアウトで水平に表示されます。以下のサンプルでは、​​2 つのモードを切り替えて比較できます。

`Horizo​​ntal` モードでは、親行が縮小されていない限り、親行ディメンションの集計は表示されないことに注意してください。
行集計に親ディメンションを表示するには、関連するディメンションの `horizo​​ntalSummary` プロパティを有効にします。

```ts
rows: [
    {
        memberFunction: () => 'All Products',
        memberName: 'AllProducts',
        enabled: true,
        horizontalSummary: true,
        width: "150px",
        childLevel: {
            //...
        }
    }
]
```

さらに、`pivotUI` オプションの `horizontalSummariesPosition` プロパティで集計の位置を変更できます。これは、`Top` (デフォルト) または `Bottom` に設定できます。

```ts
public pivotUI: IPivotUISettings = { rowLayout: PivotRowLayoutType.Horizontal, horizontalSummariesPosition: PivotSummaryPosition.Bottom };
```

>[!NOTE]
> 行集計関連のオプション (`horizontalSummary` および `horizontalSummariesPosition`) は、`Horizontal` レイアウト モードにのみ適用されます。

<code-view style="height: 870px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-layout/" alt="水平行ディメンション レイアウトの Angular ピボット グリッド">
</code-view>

## インタラクション

### キーボード ナビゲーション

`IgxPivotGrid` のキーボード ナビゲーションは、`IgxGrid` のキーボード ナビゲーションと同様に機能します。ピボット グリッドは、`rows`、`columns`、`values` の 3 つの領域に分割されます。`rows` と `columns` の領域はナビゲーションの目的でヘッダーと見なされ、`values` の領域は本文です。
キーボードの矢印を使用すると、現在の領域内でのみアクティブな要素をナビゲートできます。

### ディメンションのドラッグアンドドロップ

ディメンションはチップで表現され、ドラッグアンドドロップが可能です。
すべてのチップは、ドラッグアンドドロップでエリア内の順序を変更できます。
`rows`、`column`、`filter` (ディメンション チップ) のチップは、これらの領域のいずれかから他の任意の場所に移動できます。
これらの領域のチップは `values` 領域に移動できず、`values` 領域のチップはどのディメンション領域にも移動できません。

>[!NOTE]
>ピボット グリッドのチップをピボット データ セレクターに移動したり、ピボット データ セレクターの項目をピボット グリッドに移動したりすることはできません。

## API リファレンス

- [IgxPivotGridComponent]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html)
- [IgxPivotDataSelectorComponent]({environment:angularApiUrl}/classes/igxpivotdataselectorcomponent.html)


## その他のリソース

<div class="divider--half"></div>

- [Angular ピボット グリッド機能](pivot-grid-features.md)
- [Angular ピボット グリッド カスタム集計](pivot-grid-custom.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)

