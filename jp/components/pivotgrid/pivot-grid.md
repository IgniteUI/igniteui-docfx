---
title: Angular ピボット グリッドおよびテーブル - Ignite UI for Angular
_description: Ignite UI for Angular を使用して、高速で応答性の高い Angular ピボット グリッドとテーブルを作成します。複雑な分析を実行し、データの並べ替え、グループ化、またはフィルタリングを適用します。
_keywords: angular pivot grid, angular pivot grid コンポーネント, angular pivot table, angular pivot table コンポーネント, angular pivot data table, Angular pivot table, angular ui コンポーネント, ignite ui for angular
_language: ja
---

# Angular Pivot Grid (ピボット グリッド) コンポーネントの概要

Ignite UI for Angular Pivot Grid は、当社の最高の [Angular コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular)の 1 つであり、グループ化された値と集計のテーブルを表す UI コンポーネントであり、データを表形式で整理して要約することができます。これは、スプレッドシートまたはデータベース テーブルから取得したデータの選択された列と行を再編成および要約して、目的のレポートを取得するために使用されるデータ要約ツールです。

## Angular ピボット グリッドの概要 

Angular ピボット グリッド コンポーネントは、ピボット テーブルにデータを表示し、提供されたデータセットに対して複雑な分析を実行するのに役立ちます。この洗練されたピボット グリッド コントロールは、後でクロス集計形式で表示される大量のデータを整理、集計、およびフィルタリングするために使用されます。Angular ピボット グリッドの主な機能は、行のディメンション、列のディメンション、集計、およびフィルターです。

`IgxPivotGridComponent` は、ユーザーが多次元ピボット テーブル構造でデータを構成および表示する機能を提供します。
行と列は個別のデータ グループを表し、データ セルの値は集計を表します。これにより、単純なフラット データセットに基づく複雑なデータ分析が可能になります。`IgxPivotGridComponent` は、機能が豊富なピボット テーブルであり、さまざまなディメンションと値の簡単な構成と、フィルタリングや並べ替えなどの追加のデータ操作を提供します。

## Angular ピボット グリッドの例

以下は、Angular ピボット データ セレクター コンポーネントと組み合わせた Angular ピボット グリッドの例です。このようにして、より柔軟なランタイム構成オプションを使用できます。

<code-view style="height: 870px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-datasource" alt="Angular ピボット セレクターを備えたピボット グリッドの例">
</code-view>

## Ignite UI for Angular Pivot Grid を使用した作業の開始

Ignite UI for Angular Pivot Grid コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](../general/getting-started.md)」 トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxPivotGridModule` をインポートします。

```typescript
// app.module.ts

import { IgxPivotGridModule } from 'igniteui-angular';
// import { IgxPivotGridModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxPivotGridModule,
        ...
    ]
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxPivotGridComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_PIVOT_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/grids/pivot-grid/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_PIVOT_GRID_DIRECTIVES } from 'igniteui-angular';
// import { IGX_PIVOT_GRID_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-pivot-grid [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
    </igx-pivot-grid>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_PIVOT_GRID_DIRECTIVES]
    /* or imports: [IgxPivotGridComponent] */
})
export class HomeComponent {
    public data: Transaction [];
}
```

Ignite UI for Angular Pivot Grid モジュールまたはディレクティブをインポートしたので、`igx-pivot-grid` コンポーネントの使用を開始できます。

## Angular Pivot Grid の使用

Angular ピボット グリッド コンポーネントは、[`pivotConfiguration`](({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#pivotConfiguration)) プロパティを介して構成できます。

```html
<igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
</igx-pivot-grid>
```

これは、`rows` (行)、`columns` (列)、`values` (値) の 3 つの主要なディメンションによって定義されます。`rows`と `columns` は、[Angular グリッド](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid)の行と列に表示されるグループ化された構造を定義します。`values` は、グループの関連する値を計算および表示するために使用される集計フィールドと集計を定義します。

フィルターは、`filters` 構成プロパティを介して定義することもできます。ディメンションまたは値として追加したくないが、UI を介して関連するメンバー値をフィルタリングしたいフィールドに使用できます。

### ディメンション構成

各基本ディメンション構成には、提供された `data` のフィールドに一致する `memberName`、または複雑なオブジェクトやその他のカスタム シナリオの場合にレコードから値を抽出する `memberFunction` が必要です。

複数の兄弟ディメンションを定義できます。これにより、関連する行または列のディメンション領域に、より複雑なネストされたグループが作成されます。

ディメンションは、ドラッグアンドドロップを使用して、対応するチップを介して、ある領域から別の領域にソートしたり移動したりできます。

ディメンションは、`childLevel` プロパティを介して拡張可能な階層を記述することもできます。例えば:
```typescript
   {
            memberFunction: () => 'All',
            memberName: 'AllProducts',
            enabled: true,
            childLevel: {
                memberFunction: (data) => data.ProductCategory,
                memberName: 'ProductCategory',
                enabled: true
            }
    }

```
この場合、ディメンションはグリッドの関連セクション (行または列) にエキスパンダーを描画し、階層の一部として子を展開または縮小ことができます。デフォルトでは、行のディメンションは最初に展開されます。この動作は、ピボット グリッドの `defaultExpandState` `@Input` を使用して制御できます。

### 事前定義されたディメンション

ピボット グリッドの一部として、構成を容易にするために、いくつかの追加の事前定義されたディメンションが公開されています:
- `IgxPivotDateDimension`
    日付フィールドに使用できます。デフォルトで次の階層を記述します:
    - すべての期間
    - 年
    - 四半期
    - 月
    - 完全な日付

次のように、行または列に設定できます:

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    rows: [
        new IgxPivotDateDimension({ memberName: 'Date', enabled: true });
    ]
}
```

また、階層の特定の部分を有効または無効にするために、2 番目のオプション パラメーターを介してさらにカスタマイズすることもできます。例えば:

```typescript
 new IgxPivotDateDimension({ memberName: 'Date', enabled: true }, {
    total: true,
    years: true,
    months: true,
    fullDate: true,
    quarters: false
});
```


### 値の構成

値の構成には、提供された `data` のフィールドに一致する `member` が必要です。または、より複雑なカスタム シナリオでは、`aggregatorName` またはカスタムの `aggregator` 関数のいずれかを定義できます。データ フィールドのデータ型に応じて使用できる 4 つの事前定義された集計があります:

- `IgxPivotNumericAggregate` - 数値フィールド用。
    次の集計関数が含まれています: `SUM`、`AVG`、`MIN`、`MAX`、`COUNT`。
- `IgxPivotDateAggregate` - 日付フィールド用。
    次の集計関数が含まれています: `LATEST`、`EARLIEST`、`COUNT`。
- `IgxPivotTimeAggregate` - 時間フィールド用。
    次の集計関数が含まれています: `LATEST`、`EARLIEST`、`COUNT`。
- `IgxPivotAggregate` - その他のデータ型の場合。これが基本集計です。
    次の集計関数が含まれています: `COUNT`。

現在の集計関数は、値のーチップのドロップダウンを使用して実行時に変更できます。デフォルトでは、フィールドのデータ型に基づいて使用可能な集計のリストが表示されます。集計のカスタム リストは、`aggregateList` プロパティを介して設定することもできます。例えば:

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    values: [
        {
            member: 'AmountOfSale',
            displayName: 'Amount of Sale',
            aggregate: {
                key: 'SUM',
                aggregator: IgxTotalSaleAggregate.totalSale,
                label: 'Sum of Sale'
            },
            aggregateList: [{
                key: 'SUM',
                aggregator: IgxTotalSaleAggregate.totalSale,
                label: 'Sum of Sale'
            }, {
                key: 'MIN',
                aggregator: IgxTotalSaleAggregate.totalMin,
                label: 'Minimum of Sale'
            }, {
                key: 'MAX',
                aggregator: IgxTotalSaleAggregate.totalMax,
                label: 'Maximum of Sale'
            }]
        }
    ]
}

public static totalSale: PivotAggregation = (members, data: any) =>
    data.reduce((accumulator, value) => accumulator + value.UnitPrice * value.UnitsSold, 0);

public static totalMin: PivotAggregation = (members, data: any) => {
    return data.map(x => x.UnitPrice * x.UnitsSold).reduce((a, b) => Math.min(a, b));
};

public static totalMax: PivotAggregation = (members, data: any) => {
    return data.map(x => x.UnitPrice * x.UnitsSold).reduce((a, b) => Math.max(a,b));
};
```
ピボット値は、`displayName` プロパティも提供します。この値のカスタム名を列ヘッダーに表示するために使用できます。

> `aggregatorName` と `aggregator` 関数の両方を定義すると、`aggregatorName` が優先されます。何も設定されていない場合、エラーがスローされます。

### プロパティを有効にする

`IPivotConfiguration` は、`IgxPivotGrid` コンポーネントの現在の状態を記述するインターフェースです。これを使用すると、開発者はデータのフィールドを `rows`、`columns`、`filters`、または `values` として宣言できます。この構成では、これらの各要素を個別に有効または無効にすることができます。ピボット グリッドの現在の状態には、有効な要素のみが含まれます。`IgxPivotDataSelector` コンポーネントは同じ構成を利用し、すべての有効と無効の要素のリストを表示します。それぞれについて、適切な状態のチェックボックスがあります。エンドユーザーは、これらのチェックボックスを使用してさまざまな要素を切り替えることにより、ピボット状態を簡単に調整できます。
`enable` プロパティは、特定の `IPivotDimension` または `IPivotValue` がアクティブであり、ピボット グリッドによって描画されるピボット ビューに参加するかどうかを制御します。

### 完全な構成例

基本的なピボット構成を見てみましょう:

```typescript
      public pivotConfigHierarchy: IPivotConfiguration = {
        columns: [
            {

                memberName: 'Product',
                memberFunction: (data) => data.Product.Name,
                enabled: true
            }

        ],
        rows: [
            {
                memberName: 'Seller',
                memberFunction: (data) => data.Seller.Name,
                enabled: true,
            }
        ],
        values: [
            {
                member: 'NumberOfUnits',
                aggregate: {
                    aggregator: IgxPivotNumericAggregate.sum,
                    key: 'sum',
                    label: 'Sum'
                },
                enabled: true
            },
            {
                member: 'AmountOfSale',
                aggregate: {
                    aggregatorName: 'SUM',
                    key: 'sum',
                    label: 'Sum'
                },
                enabled: true
            }
        ]
    };
```

この構成では、各ディメンション グループの値を合計する 1 行、1 列、および 1 つの集計が定義されます。メンバーは、提供されたデータ ソースで使用可能なフィールドと一致します。

```typescript
public data = [
[
    {
        Product: {
            Name: 'Clothing',
            UnitPrice: '12.814860936633712'
        },
        Seller: {
            Name: 'Stanley Brooker',
            City: 'Seattle'
        },
        Date: '2007-01-01T00:00:00',
        Value: '94.2652032683907',
        NumberOfUnits: '282'
    },
    //...
];

```


次のビューは、Product (製品) カテゴリの一意の列をグループ化し、Sellers Countries (売り手の国) を一意の行にグループ化し、関連するセルのユニット数の関連する集計を表示します。

<code-view style="height: 530px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-basic" alt="Angular ピボット グリッドの基本例">
</code-view>

また、アプリ開発プロセス全体を合理化したい場合は、次回の Angular アプリ開発から [WYSIWYG App Builder™](https://jp.infragistics.com/products/appbuilder) を試すことができます。

## 既知の問題と制限

|制限|説明|
|--- |--- |
| 列を宣言的に設定することはサポートされていません。 | ピボット グリッドは `columns` (列) の構成に基づいて列を生成するため、ベース グリッドのように宣言的に設定することはサポートされていません。このような列は無視されます。|
| ディメンション / 値に重複する `memberName` または `member` プロパティ値を設定します。 | `memberName`/`member` は、ディメンション / 値ごとに一意である必要があります。複製すると、最終結果からデータが失われる可能性があります。 |
| 行選択は、`single` モードでのみサポートされます。| 現在、複数選択はサポートされていません。|
| ディメンション メンバーのマージでは大文字と小文字が区別されます。| ピボット グリッドはグループを作成し、同じ (大文字と小文字を区別する) 値をマージします。ただし、ディメンションは `memberFunction` を提供し、これはそこで変更できます。`memberFunction` の結果が比較され、表示値として使用されます。|

## API リファレンス
* [IgxPivotGridComponent]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html)
* [IgxPivotDataSelectorComponent]({environment:angularApiUrl}/classes/igxpivotdataselectorcomponent.html)


## その他のリソース
<div class="divider--half"></div>
* [Angular ピボット グリッド機能](pivot-grid-features.md)
* [Angular ピボット グリッド カスタム集計](pivot-grid-custom.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)