---
title: Angular Grid Lite フィルタリング | Ignite UI for Angular | MIT ライセンス
_description: Angular Grid Lite のフィルター操作、フィルターのカスタマイズ、およびリモート フィルタリング。オープン ソースの Angular Grid Lite を使用してアプリを作成できます。今すぐお試しください。
_keywords: フィルタリング, {Platform}, {ComponentKeywords}, {ProductName}, インフラジスティックス
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_language: ja
---

# Angular Grid Lite フィルター操作

Grid Lite は、データ ソースでのフィルター操作をサポートします。データ フィルタリングは列ごとに制御されるため、フィルタリング可能な列とフィルタリング不可能な列を設定できます。デフォルトでは、列構成オブジェクトの `filterable` プロパティで明示的に構成されない限り、列のフィルタリングは無効になっています。

```html
<igc-grid-lite-column
  field="price"
  filterable
></igc-grid-lite-column>
```

`filteringCaseSensitive` プロパティまたは `filtering-case-sensitive` 属性を使用して、文字列列のフィルター操作で大文字と小文字を区別するかどうかを制御することもできます:

```html
<igc-grid-lite-column
  field="name"
  filterable
  filtering-case-sensitive
></igc-grid-lite-column>
```

これらのプロパティはプログラムで設定することもできます。

```typescript
column.filterable = true;
column.filteringCaseSensitive = true;
```

<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/filtering-simple/" alt="Angular Grid Lite フィルタリング構成">
</code-view>

## フィルター モデル

グリッド内のフィルター操作の構成要素は、次の構造を持つ **`FilterExpression`** です。

```typescript
export interface FilterExpression<T, K extends Keys<T> = Keys<T>> {
  /**
   * フィルター操作の対象となる列です。
   */
  key: K;
  /**
   * データ レコードに対して実行されるフィルター関数です。
   */
  condition: FilterOperation<T[K]> | OperandKeys<T[K]>;

  /**
   * フィルター条件関数で使用されるフィルター値です。
   *
   * @remarks
   * フィルター条件関数で使用されるフィルター値です。
   */
  searchTerm?: T[K];
  /**
   * この式が他の式と関係してフィルター操作でどのように解決されるべきか
   * を指定します。
   */
  criteria?: FilterCriteria;
  /**
   * ソート操作で大文字と小文字を区別するかどうかを指定します。
   *
   * @remarks
   * 指定されていない場合、値は列のフィルター構成 (存在する場合) に基づいて解決されます。
   */
  caseSensitive?: boolean;
}
```

## フィルター API

Grid Lite は、API からフィルター操作を適用する 2 つの方法を提供します。**`GridLite.filter()`**/**`GridLite.clearFilter()`** メソッドまたは **`Grid.Lite.filterExpressions`** プロパティのいずれかを使用します。

**`filter()`** メソッドは、単一の式またはフィルター式の配列を受け入れ、それらの式に基づいてグリッド データをフィルターします。

```typescript
// Single
grid.filter({ key: 'firstName', condition: 'contains', searchTerm: 'George' });

// Multiple
grid.filter([
  { key: 'firstName', condition: 'startsWith', searchTerm: 'a' },
  { key: 'firstName', condition: 'startsWith' searchTerm: 'g', criteria: 'or' },
]);
```

**`clearFilter()`** メソッドは、その名前が示すように、渡された引数に応じて、単一の列またはグリッド コンポーネント全体のフィルター状態をクリアします。

```typescript
// `age` 列のフィルター状態をクリアします。
grid.clearFilter('age');

// グリッドのフィルター状態をクリアします。
grid.clearFilter();
```

## 初期のフィルター状態

**`filterExpressions`** プロパティの動作は、**`filter()`** メソッド呼び出しと非常に似ています。これはグリッド内のフィルター状態を制御する宣言的な方法を公開していますが、最も便利なプロパティは、Grid Lite コンポーネントが最初にレンダリングされるときに初期フィルター状態を設定できることです。

たとえば、Lit ベースのサンプルを次に示します。

```typescript
{
  filterState: FilterExpression<User>[] = [
    { key: 'age', condition: 'greaterThan', searchTerm: 21 },
    /** 単項条件のため `searchTerm` は不要です。 */
    { key: 'active', condition: 'true' },
  ];

  render() {
    return html`<igc-grid-lite .filterExpressions=${filterState}></igc-grid-lite>`
  }
}
```

これを使用すると、コンポーネントの現在のフィルター状態を取得し、アプリケーション内の別の状態に応じて追加の処理を実行できます。

```typescript
const state = grid.filterExpressions;
// 現在のフィルター状態を保存します。
saveUserFilterState(state);
```

## イベント

UI を通じてフィルター操作が実行されると、コンポーネントはカスタム **`filtering`** イベントを発行します。**`detail`** プロパティは、Grid Lite によって適用されるソート式です。イベントはキャンセル可能であり、キャンセルされると現在のフィルター操作が防止されます。

グリッドが新しいフィルター状態を適用すると、**`filtered`** イベントが発生します。対象列のフィルター状態を含み、このイベントはキャンセルできません。

```typescript
grid.addEventListener('filtering', (event: CustomEvent<GridLiteFilteringEvent<T>>) => { ... });
grid.addEventListener('filtered', (event: CustomEvent<GridLiteFilteredEvent<T>>) => { ... });
```

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/filtering-events/" alt="Angular Grid Lite フィルタリング構成イベント">
</code-view>

## リモート フィルター操作

フィルタリングをリモートで実行する必要がある場合、または現在の状態/データをどこかのサーバーに保存する必要がある場合、Grid Lite は、この動作を実装およびカスタマイズできるフックを公開します。

**`dataPipelineConfiguration`** プロパティを使用すると、フィルター操作が実行されるたびに呼び出されるカスタム フックを提供できます。コールバックには **`DataPipelineParams`** オブジェクトが渡されます。

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
grid.dataPipelineConfiguration = { filter: (params: DataPipelineParams<T>) => T[] | Promise<T[]> };
```

カスタム コールバックは、解決されるまでグリッドが待機するため、非同期にすることができます。

次の例では、コンポーネントのフィルター状態に基づいて生成された REST エンドポイントを反映して、リモート フィルター操作をモックします。

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/filtering-pipeline/" alt="Angular Grid Lite フィルタリング リモート構成">
</code-view>

<!-- TODO ## API References
## API References

- `{ComponentName}`
- `Column`
-->

## その他のリソース

- [列の構成](column-configuration.md)
- [ソート](sorting.md)

コミュニティに参加して新しいアイデアをご提案ください。

- [Grid Lite **GitHub**](https://github.com/IgniteUI/igniteui-grid-lite)
