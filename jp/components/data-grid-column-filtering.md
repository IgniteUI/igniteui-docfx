---
title: Angular Data Grid | Angular アプリケーションの Ignite UI Table コントロール | Infragistics
_description: Ignite UI for Angular Live Grid コンポーネントは、グリッド ドメインの複雑さを管理しやすい API に簡素化しているためユーザーがデータのコレクションを簡単にバインドできます。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular Grid, Angular Grid Control, Angular Grid 例, Angular Grid コンポーネント, Angular Live Grid
_language: ja
---

## Angular Table 列フィルター API

Angular Data Table / Data Grid には、フィルタ処理される列のデータ型に基づいて並べ替え条件を実行する機能を提供する列フィルター API が含まれています。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### API を使用したフィルター

FilterExpression と FilterFactory をインポートして、フィルターのコレクションを作成できるようにします。

```ts
import { FilterExpression } from "igniteui-react-core/ES5/FilterExpression";
import { FilterFactory } from "igniteui-react-core/ES5/FilterFactory";
```

フィルターのコレクションに追加するための FilterExpression を作成します。
