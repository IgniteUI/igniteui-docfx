---
title: クエリ ビルダー モデルの使用
_description: Angular Query Builder は、シリアル化/逆シリアル化可能な JSON 形式モデルを提供し、SQL クエリを簡単に構築できるようにします。今すぐお試しください。
_keywords: Angular Query Builder コンポーネント, Angular Query Builder コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, Angular UI コンポーネント, ネイティブAngular コンポーネント ライブラリ
_language: ja
---

# クエリ ビルダー モデルの使用
Angular Query Builder は、シリアル化/逆シリアル化可能な JSON 形式モデルを提供し、SQL クエリを簡単に構築できるようにします。

## 概要

この Angular クエリ ビルダーの例では、[`IgxQueryBuilderComponent`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html) 式ツリーを使用してエンドポイント [Northwind WebAPI](https://data-northwind.indigo.design/swagger/index.html) からデータを要求し、それを [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) のデータ ソースとして設定する方法を示します。

<code-view style="height:700px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-request-sample" >
</code-view>

## クエリ ビルダー モデル
[`IgxQueryBuilderComponent`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html) に式ツリーを設定するには、[`FilteringExpressionsTree`]({environment:angularApiUrl}/classes/filteringexpressionstree.html) を定義する必要があります。各 [`FilteringExpressionsTree`]({environment:angularApiUrl}/classes/filteringexpressionstree.html) には、データ レコードがツリーに対してどのように解決されるかを表すフィルタリング ロジックが必要であり、ユース ケースに応じて、フィールド名、エンティティ名、および返却フィールドドの配列を渡すことができます。特定のエンティティ内のすべてのフィールドを返す必要がある場合は、`returnFields` プロパティを ['*'] に設定できます。

```ts
const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Entity A', ['*']);
```
ルート [`FilteringExpressionsTree`]({environment:angularApiUrl}/classes/filteringexpressionstree.html) が作成されると、その `filteringOperands` プロパティを [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) (単一の式またはグループ) または [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) (サブクエリ) の配列に設定することで、条件、グループ、またはサブクエリを追加できます。
各 [`IFilteringExpression`]({environment:angularApiUrl}/interfaces/ifilteringexpression.html) および [`IFilteringExpressionsTree`]({environment:angularApiUrl}/interfaces/ifilteringexpressionstree.html) には、フィルタリング式が配置されている列の名前である `fieldName` と、[`IFilteringOperation`]({environment:angularApiUrl}/interfaces/ifilteringoperation.html) 型の `condition` または `conditionName` のいずれかが必要です。必要に応じて、`searchVal`、[`IExpressionTree`]({environment:angularApiUrl}/interfaces/iexpressiontree.html) タイプの `searchTree`、および `ignoreCase` プロパティを設定することもできます。

- 簡単な**式**の定義:
```ts
tree.filteringOperands.push({
            fieldName: 'Name',
            conditionName: IgxStringFilteringOperand.instance().condition('endsWith').name,
            searchVal: 'a'
        });
```

- 式の**グループ**の定義:
```ts
const group = new FilteringExpressionsTree(FilteringLogic.Or, undefined, 'Entity A', ['*']);
group.filteringOperands.push({
    fieldName: 'Name',
    conditionName: IgxStringFilteringOperand.instance().condition('endsWith').name,
    searchVal: 'a'
});
group.filteringOperands.push({
    fieldName: 'DateTime created',
    conditionName: IgxDateFilteringOperand.instance().condition('today').name
});
tree.filteringOperands.push(group);
```

- **サブクエリ**の定義:
```ts
const innerTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Entity B', ['Number']);
innerTree.filteringOperands.push({
    fieldName: 'Number',
    conditionName: 'equals',
    searchVal: 123
});
 tree.filteringOperands.push({
    fieldName: 'Id',
    conditionName: 'inQuery',
    searchTree: innerTree
});
```

モデルは JSON 形式でシリアル化/逆シリアル化できるため、クライアントとサーバー間で簡単に転送できます。
```ts
JSON.stringify(tree, null, 2);
```

## サブクエリの使用

[`IgxQueryBuilderComponent`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html) のコンテキストでは、*IN / NOT-IN* 演算子は、*WHERE* 句で新しく公開されたサブクエリ機能とともに使用されます。

> [!Note]
> サブクエリは、外部クエリの条件として使用されるデータを取得するために使用される、別のクエリ内にネストされたクエリです。 

`FilteringExpression` で *IN / NOT-IN* 演算子を選択すると、サブクエリが作成されます。返すエンティティと列を選択した後、外部クエリの指定された列の値がサブクエリによって返される値のいずれかと一致するかどうかを確認します。

次の式ツリーは:
```ts
const innerTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Products', ['supplierId']);
innerTree.filteringOperands.push({
    fieldName: 'supplierId',
    conditionName: IgxNumberFilteringOperand.instance().condition('greaterThan').name,
    searchVal: 10
});

const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Suppliers', ['supplierId']);
tree.filteringOperands.push({
    fieldName: 'supplierId',
    conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
    searchTree: innerTree
});
```
次を呼び出すことでシリアル化できます:
```ts
JSON.stringify(tree, null, 2);
```

これは次のように転送されます:
``` 
{
  "filteringOperands": [
    {
      "fieldName": "supplierId",
      "condition": {
        "name": "inQuery",
        "isUnary": false,
        "isNestedQuery": true,
        "iconName": "in"
      },
      "conditionName": "inQuery",
      "searchVal": null,
      "searchTree": {
        "filteringOperands": [
          {
            "fieldName": "supplierId",
            "condition": {
              "name": "greaterThan",
              "isUnary": false,
              "iconName": "filter_greater_than"
            },
            "conditionName": "greaterThan",
            "searchVal": 10,
            "searchTree": null
          }
        ],
        "operator": 0,
        "entity": "Suppliers",
        "returnFields": [
          "supplierId"
        ]
      }
    }
  ],
  "operator": 0,
  "entity": "Products",
  "returnFields": [
    "supplierId"
  ]
}
```

## SQL の例

Ignite UI for Angular クエリ ビルダー コンポーネントを使用して SQL クエリを構築する方法の実用的な例を見てみましょう。

以下のサンプルには、「Suppliers」、「Categories」、「Products」 という名前の 3 つの`エンティティ`があります。

「Beverages」 カテゴリに属する製品を供給するすべてのサプライヤーを見つけたいとします。データはすべてのエンティティに分散されているため、*IN* 演算子を活用し、サブクエリを作成することでタスクを実行できます。各サブクエリは `FilteringExpressionsTree` によって表され、`transformExpressionTreeToSqlQuery(tree: IExpressionTree)` メソッドを通じて SQL クエリに変換できます。

まず、`name` が `Beverages` であるレコードの `categoryId` を返す `categoriesTree` を作成します。これは最も内側のサブクエリです:

```ts
const categoriesTree = new FilteringExpressionsTree(0, undefined, 'Categories', ['categoryId']);
categoriesTree.filteringOperands.push({
    fieldName: 'name',
    conditionName: IgxStringFilteringOperand.instance().condition('equals').name,
    searchVal: 'Beverages'
});
```

この `FilteringExpressionsTree` に対応する SQL クエリは次のようになります。

```
SELECT categoryId FROM Categories WHERE name = 'Beverages'
```

次に、最も内側のサブクエリによって返された `categoryId` と一致する `categoryId` を持つレコードの `categoriesTree` から、`supplierId` フィールドを返す `productsTree` を作成します。これは、`inQuery` 条件と関連する `searchTree` を設定することによって行います。これは中間のサブクエリです:

```ts
const productsTree = new FilteringExpressionsTree(0, undefined, 'Products', ['supplierId']);
productsTree.filteringOperands.push({
    fieldName: 'categoryId',
    conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
    searchTree: categoriesTree
});
```

SQL クエリの更新された状態は次のとおりです。

```
SELECT supplierId FROM Products WHERE categoryId IN (
    SELECT categoryId FROM Categories WHERE name = 'Beverages'
  )
```

最後に、`Suppliers` エンティティのすべてのフィールドを返す `suppliersTree` を作成します。ここで、`supplierId` は、中間のサブクエリによって返される `supplierId` のいずれかと一致します。これは最も外側のクエリです:

```ts
const suppliersTree = new FilteringExpressionsTree(0, undefined, 'Suppliers', ['*']);
suppliersTree.filteringOperands.push({
    fieldName: 'supplierId',
    conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
    searchTree: productsTree
});
```

これで SQL クエリは完了です。

```
SELECT * FROM Suppliers WHERE supplierId IN (
  SELECT supplierId FROM Products WHERE categoryId IN (
      SELECT categoryId FROM Categories WHERE name = 'Beverages'
    )
)
```

これで、`IgxQueryBuilderComponent` の `expressionsTree` プロパティを `suppliersTree` に設定できます。さらに、クエリが変更されるたびにエンドポイントへの新しいリクエストがトリガーされ、グリッドに表示される結果データが更新されます。

<code-view style="height:700px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-sql-sample" >
</code-view>

## API リファレンス

<div class="divider--half"></div>

* [IgxQueryBuilderComponent API]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html)
* [IgxQueryBuilderComponent スタイル]({environment:sassApiUrl}/themes#function-query-builder-theme)

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)