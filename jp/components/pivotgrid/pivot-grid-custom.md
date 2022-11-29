---
title: Angular ピボット グリッド カスタム リモート | ピボット テーブル | インフラジスティックス
_description: Ignite UI for Angular を使用して、高速で応答性の高い Angular ピボット グリッドとテーブルを作成します。ピボット データを介して複雑なデータ分析を実行します。
_keywords: angular ピボット グリッド, angular material ピボット テーブル, ignite ui for angular, ピボット グリッドのカスタマイズ, ピボット グリッド リモート, ピボット リモート
_language: ja
---


# Angular ピボット グリッドのリモート操作

ピボット データがすでにリモート サービスからグループ化および集約されており、クライアントでさらに処理する必要がないシナリオでは、クライアントでのデータ処理をスキップし、データをそのまま直接表示できるようにするカスタムの空のストラテジを使用するように構成できます。

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    columnStrategy: NoopPivotDimensionsStrategy.instance(),
    rowStrategy: NoopPivotDimensionsStrategy.instance(),
}
```

次の例は、データがすでに集約されているシナリオの処理方法と、その構造がどのように見えるかを示しています:
<code-view style="height: 530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-noop" alt="Angular ピボット グリッドのカスタム定義済み集計の例">
</code-view>

ユーザーは、ピボット グリッドに既に集計されたデータをフィードすることで、特定のシナリオを実現できます。データがどのように表示されるかについていくつかの要件があり、ピボット ビューの階層に関するいくつかの詳細があります。たとえば、`rows` ディメンションで階層を宣言するには、次のようにします:

```typescript
rows: [
    {
        memberName: 'AllProducts',
        memberFunction: () => 'All Products',
        enabled: true,
        childLevel: {
            memberName: 'ProductCategory',
            enabled: true
        }
    }
]
```

そして、集約された例は次のようになります:

```typescript
public aggregatedData = [
    {
        ProductCategory: 'All', AllProducts: 'All Products', All: 1000, 'All-Bulgaria': 774, 'All-USA': 829, 'All-Uruguay': 524, AllProducts_records: [
            { ProductCategory: 'Clothing', 'All-Bulgaria': 774, 'All-USA': 296, 'All-Uruguay': 456 },
            { ProductCategory: 'Bikes', 'All-Uruguay': 68 },
            { ProductCategory: 'Accessories', 'All-USA': 293 },
            { ProductCategory: 'Components', 'All-USA': 240 }
        ]
    }
];
```

ピボット グリッドは、ピボット計算を行うために使用するオブジェクト キー フィールドを提供します。
- `children` - 階層構築のために子を格納するフィールド。これは、グループ化された値と、その値に基づくすべての pivotGridRecords からのマップを表します。これは、階層の作成中に何かを行う必要がある非常に特殊なシナリオで利用できます。一般的な使用法のためにこれを変更する必要はありません。
- `records` - 元のデータ レコードへの参照を格納するフィールド。上記の例で見ることができます - `AllProducts_records`。このプロパティと同じ名前でデータにフィールドを設定することは避けてください。データ レコードに `records` プロパティがある場合は、`pivotKeys` を使用して異なる一意の値を指定できます。
- `aggregations` - 集計値を格納するフィールド。階層の作成中に適用され 、一般的なシナリオでは変更する必要はありません。
- `level` - 階層に基づいてディメンション レベルを格納するフィールド。このプロパティと同じ名前でデータにフィールドを設定することは避けてください。データ レコードに `level` プロパティがある場合は、`pivotKeys` を使用して異なる一意の値を指定できます。 
- `columnDimensionSeparator` - 一意の列フィールド値を生成するときに使用されるセパレーター。上からの例のダッシュ (`-`) - `All-Bulgaria` です。
- `rowDimensionSeparator` - 一意の行フィールド値を生成するときに使用されるセパレーター。上記の例のアンダースコア (`_`) - `AllProducts_records` です。`records` (レコード) と `level` (レベル フィールド) を作成するときに使用されます。

これらはすべて、`Pivo​​tConfiguration` の一部である `pivotKeys` プロパティに格納され、デフォルトのピボット キーを変更するために使用できます。これらのデフォルトは次のとおりです:

```typescript
export const DEFAULT_PIVOT_KEYS = {
    aggregations: 'aggregations', records: 'records', children: 'children', level: 'level',
    rowDimensionSeparator: '_', columnDimensionSeparator: '-'
};
```

`columnStrategy` と `rowStrategy` に `NoopPivotDimensionsStrategy` を設定すると、データ パイプによって行われるデータのグループ化と集計がスキップされますが、ピボット ビューを期待どおりに描画するには、ピボット グリッドで行、列、値、フィルターの宣言が必要です:

```typescript
public pivotConfig: IPivotConfiguration = {
    rows: [
        {
            memberName: 'AllProducts',
            memberFunction: () => 'All Products',
            enabled: true,
            childLevel: {
                memberName: 'ProductCategory',
                enabled: true
            }
        }
    ],
    columns: [
        {
            memberName: 'All',
            enabled: true,
            childLevel: {
                memberName: 'Country',
                enabled: true
            }
        }
    ],
    values: [
        {
            member: 'UnitsSold',
            aggregate: {
                aggregator: IgxPivotNumericAggregate.sum,
                key: 'sum',
                label: 'Sum'
            },
            enabled: true
        },
    ]
}
```

データが構成と一致することが重要です。最良の結果を得るには、集計データに追加のフィールドを含めたり、提供されたデータのフィールドを行または列として宣言せずに残したりしないでください。`IgxPivotGrid` コンポーネントは、`PivotConfiguration` に基づいてデータを構築し、それに応じて構成と集約データが一致することが期待されます。

同様に、ソートやフィルタリングなどの他のリモート データ操作の場合、関連する空のストラテジ (`filterStrategy`、`sortStrategy`) を設定することで、データ処理をスキップできます。

```html
<igx-pivot-grid [filterStrategy]="noopFilterStrategy" [sortStrategy]="noopSortStrategy" ...>
</igx-pivot-grid>
```

```typescript
public noopFilterStrategy = NoopFilteringStrategy.instance();
public noopSortStrategy = NoopSortingStrategy.instance();
```

## API リファレンス
* [IgxPivotGridComponent]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html)
* [IgxPivotDataSelectorComponent]({environment:angularApiUrl}/classes/igxpivotdataselectorcomponent.html)


## その他のリソース
<div class="divider--half"></div>
* [Angular ピボット グリッド機能](pivot-grid-features.md)
* [Angular ピボット グリッドの概要](pivot-grid.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)