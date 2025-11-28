---
title: Angular Grid Lite ソート | Ignite UI for Angular | MIT ライセンス
_description: Angular Grid Lite 向けに、ソート操作、ソート カスタマイズ、リモート ソートを備えた Angular Grid Lite をお試しください。デモと例を参照して、次のアプリを構築してください。
_keywords: ソート, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_language: ja
---

# ソート操作

Grid Lite はデータ ソースに対してソート操作をサポートします。ソートは列単位で制御され、ソート可能な列とソート不可の列を設定できます。グリッド自体も特定のソート動作を制御します。デフォルトでは、**`sort`** プロパティで明示的に設定されない限り、列のソートは無効です。

```typescript
{
  key: 'price',
  sort: true
}
```

**`sort`** プロパティは、単純なブール値、または追加の構成オプションを公開する **`ColumnSortConfiguration`** オブジェクトのいずれかになります。

```typescript
{
  key: 'name',
  sort: {
    /**
     * string データ タイプの場合、この列のソート操作で大文字と小文字を区別するかどうかを制御します。
     * 既定では、string タイプのソート操作は大文字と小文字を区別しません。
     */
    caseSensitive: true,
    /**
     * この列のソート操作に使用されるカスタム比較関数を指定します。
     *
     * 次のサンプルでは、`name` の値をその長さに基づいて比較します。
     */
    comparer: (a, b) => a.length - b.length
  }
}
```

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/sorting-simple" alt="Angular Grid Lite ソート構成">
</code-view>

## 単一および複数列ソート

グリッドは単一および複数列ソートの両方をサポートします。複数列はデフォルトで有効で、グリッドの **`sortConfiguration`** プロパティを通じて設定可能です。

```typescript
grid.sortConfiguration = { multiple: false, triState: true };
```

>[!NOTE]
>単一/複数列ソートの動作は、ユーザーが Grid Lite を操作する方法を制御します。API で複数の式によるソートを実行しても、単一ソートが有効な場合でも動作します。

### 3 状態ソート

さらに、Grid Lite は 3 状態ソートをサポートし、デフォルトで有効です。グリッドの **`sortConfiguration`** プロパティの **`triState 設定に応じて、ユーザーは次の状態を循環します:`**


- **3 状態有効**

  - ```typescript
    ascending -> descending -> none -> ascending
    ```

- **3 状態無効**

  - ```typescript
    ascending -> descending -> ascending
    ```

`none` はデータの初期状態で、グリッドによるソートが適用されていません。

### ソート インジケーター

複数列ソートが有効な場合、列ヘッダーにはソートインジケーターが表示されます。これはソート操作が適用された順序を示す番号です。

次のサンプルは、グリッドの **`sortConfiguration`** の組み合わせと、その反映例を示します。

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/sorting-grid-config" alt="Angular Grid Lite Sorting Config Grid">
</code-view>

## ソート モデル

Grid Lite におけるソート操作の基本単位は **`SortExpression`** で、以下のプロパティを持ちます:

```typescript
type SortExpression<T> = {
  /**
   * ソート操作の対象列の `key`。
   */
  key: keyof T;
  /**
   * 操作のソート方向。
   */
  direction: 'ascending' | 'descending' | 'none';
  /**
   * 操作を大文字と小文字を区別するかどうかを指定します。デフォルトの string タイプに適用されます。
   * 明示的に渡されていない場合、該当する列のソート設定の値が使用されます。
   */
  caseSensitive?: boolean;
  /**
   * 操作に対してカスタム比較関数を指定します。
   * 該当する列のソート設定が適用可能な場合、その値が使用されます。
   */
  comparer?: SortComparer<T, T[keyof T]>;
};
```

グリッドはこれらの式をソート API メソッドや設定で使用し、ユーザー操作時にイベントやソート状態を生成します。詳細は以下を参照してください。

## ソート API

Grid Lite は、ソート操作を API から適用するために 2 つの方法を提供します。**`GridLite.sort()`**/**`GridLite.clearSort()`** メソッドを使用するか、**`Grid.Lite.sortExpressions`** プロパティを使用します。

The **`sort()`** メソッドは、単一式または複数のソート式の配列を受け取り、それらに基づいてグリッド データをソートします。

```typescript
// 単一
grid.sort({ key: 'price', direction: 'descending' });

// 複数
grid.sort([
  { key: 'price', direction: 'descending' },
  { key: 'name', direction: 'descending' },
]);
```

The **`clearSort()`** メソッドは、その名の通り、単一列またはグリッド全体のソート状態をクリアします。引数に応じて挙動が変わります。
```typescript
// `price` 列のソート状態をクリアします。
grid.clearSort('price');

// グリッドのソート状態をクリアします。
grid.clearSort();
```

### 初期のソート状態

**`sortExpressions`** プロパティは **`sort()`** メソッド呼び出しと同様の動作をします。これはグリッド内のソート状態を制御する宣言的な方法を公開していますが、最も便利なプロパティは、Grid Lite が最初にレンダリングされるときに初期ソート状態を設定できることです。

たとえば、Lit ベースのサンプルを次に示します。

```typescript
{
  sortState: SortExpression<Products>[] = [
    { key: 'price', direction: 'descending' },
    { key: 'name', direction: 'ascending', caseSensitive: true },
  ];

  render() {
    return html`<igc-grid-lite .sortExpressions=${sortState}></igc-grid-lite>`
  }
}
```

これを使用すると、コンポーネントの現在のソート状態を取得し、アプリケーション内の別の状態に応じて追加の処理を実行できます。

```typescript
const state = grid.sortExpressions;
// 現在のソート状態を保存します
saveUserSortState(state);
```

## イベント

UI を通じてソート操作が実行されると、コンポーネントはカスタム **`sorting`** イベントを発行します。**`detail`** プロパティには Gird Lite が適用するソート式が含まれます。イベントはキャンセル可能で、キャンセルすると現在のソート操作が停止します。

グリッドが新しいソート状態を適用した後、**`sorted`** イベントが発行されます。最後のソート操作で使用された式を含み、キャンセルはできません。

```typescript
grid.addEventListener('sorting', (event: CustomEvent<SortExpression<T>>) => { ... });
grid.addEventListener('sorted', (event: CustomEvent<SortExpression<T>>) => { ... });
```

次のサンプルでは、**Name** と **Rating** 列のソートを試みると操作がキャンセルされます。下記のイベント ログで動作を確認してください。

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/sorting-events" alt="Angular Grid Lite ソート構成イベント">
</code-view>

## リモート ソート操作

ソートをリモートで実行する必要がある場合、または現在の状態/データをどこかのサーバーに保存する必要がある場合、{GridLiteTitle} は、この動作を実装およびカスタマイズできるフックを公開します。

**`dataPipelineConfiguration`** プロパティを使用すると、ソート操作が実行されるたびに呼び出されるカスタム フックを提供できます。コールバックには **`DataPipelineParams`** オブジェクトが渡されます。

```typescript
export type DataPipelineParams<T extends object> = {
  /**
   * グリッドの現在のデータ状態。
   */
  data: T[];
  /**
   * グリッド コンポーネント。
   */
  grid: GridLite<T>;
  /**
   * 実行されるデータ操作のタイプ。
   */
  type: 'sort' | 'filter';
};
```

```typescript
grid.dataPipelineConfiguration = { sort: (params: DataPipelineParams<T>) => T[] | Promise<T[]> };
```

カスタム コールバックは、解決されるまでグリッドが待機するため、非同期にすることができます。

次の例では、コンポーネントのソート状態に基づいて生成された REST エンドポイントを反映して、リモート ソート操作をモックします。

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/sorting-pipeline" alt="Angular Grid Lite ソート構成パイプライン">
</code-view>

<!-- TODO ## API References

- `{ComponentName}`
- `Column`

-->

## その他のリソース

- [列の構成](column-configuration.md)
- [フィルタリング](filtering.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [Grid Lite **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
