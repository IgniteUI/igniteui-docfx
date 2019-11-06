---
title: Angular データ グリッド | Angular アプリケーションの Ignite UI Table コントロール | Infragistics
_description: Ignite UI for Angular Table / Grid コンポーネントは、グリッド ドメインの複雑さを管理しやすい API に簡素化しているためユーザーがデータのコレクションを簡単にバインドできます。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Grid Control, Angular Grid 例, Angular Grid コンポーネント, Angular Live Grid
_language: ja
---

## Angular テーブル列グループ化

Angular Data Table / Data Grid を使用すると、列の値を「固定ヘッダー」行グループにまとめることができます。この機能は Microsoft Outlook の Group By 機能同様、独自の基準に基づいてデータを視覚的にグループ化する簡単な方法を使用します。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-grid-row-grouping-iframe" src='{environment:demosBaseUrl}/grids/data-grid-row-grouping' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="data-grid-row-grouping-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示
    </button>
</div>

<div class="divider--half"></div>

### API を使用した列のグループ化

```ts
import { ColumnGroupDescription } from "igniteui-react-grids/ES5/igr-column-group-description";
import { ListSortDirection } from "igniteui-react-core/ES5/ListSortDirection";
```

```ts
import { ColumnGroupDescription } from 'igniteui-webcomponents-grids/ES2015/igc-column-group-description';
import { ListSortDirection } from "igniteui-webcomponents-core/ES2015/ListSortDirection";

const desc = new ColumnGroupDescription();
    desc.propertyPath = "LastName";
    desc.displayName = "Last Name";
    desc.sortDirection = ListSortDirection.Descending;
    grid1.groupDescriptions.add(desc);
```
