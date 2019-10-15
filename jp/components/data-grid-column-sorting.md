---
title: Angular Data Grid | Angular アプリケーションの Ignite UI Table コントロール | Infragistics
mentionedTypes: ['XamDataGrid']
_description: Ignite UI for Angular Table / Grid コンポーネントは、グリッド ドメインの複雑さを管理しやすい API に簡素化しているためユーザーがデータのコレクションを簡単にバインドできます。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Grid コントロール, Angular Grid 例, Angular Grid コンポーネント, Angular Live Grid
_language: ja
---

## Angular テーブルの並べ替え

Angular Data Table / Data Grid は、単一列、複数列、およびトライステート列の並べ替え構成で昇順および降順の列の並べ替えをサポートします。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-grid-column-sorting-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-sorting' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="data-grid-column-sorting-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

### 並べ替えタイプの設定

列または複数の列を昇順降順に並べ替えできます。TriState が有効な場合、列に適用されている並べ替えを削除できます。

-   `SortByMultipleColumns`
-   `SortByMultipleColumnsTriState`
-   `SortByOneColumnOnly`
-   `SortByOneColumnOnlyTriState`

```ts
import { HeaderClickAction } from "igniteui-react-grids/ES5/HeaderClickAction";
```

### API を使用した並べ替え

```ts
import { ColumnSortDescription } from "igniteui-react-grids/ES5/igr-column-sort-description";
import { ListSortDirection } from "igniteui-react-core/ES5/ListSortDirection";
```
