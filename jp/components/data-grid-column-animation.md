---
title: Angular Data Grid | Angular アプリケーションの Ignite UI Table コントロール | Infragistics
_description: Ignite UI for Angular Table / Grid コンポーネントは、グリッド ドメインの複雑さを管理しやすい API に簡素化しているためユーザーがデータのコレクションを簡単にバインドできます。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular グリッド, Angular Grid コントロール, Angular Grid 例, Angular Grid コンポーネント, Angular IgrLiveGrid
_language: ja
---

## Angular テーブル列アニメーション

Angular Data Table / Data Grid は、列の非表示や列の移動などのイベント時に列のアニメーションをサポートします。 Angular グリッドで Column Animation が設定されている場合、対応するアニメーションはその列のすべてのセルに対して発生します。

### デモ

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-animation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### 列アニメーション

各列のアニメーションプロパティは以下のとおりです。

-   `columnAddingAnimationMode`: 列を追加すると、列ヘッダーとそのセルを左、右、上、または下からスライドさせることができます。スライドやフェード インだけでなく、フェード インさせるオプションもあります。
-   `columnExchangingAnimationMode`: 列を交換する場合、交換した列ヘッダーとそのセルを左、右、上、または下にスライドさせることができます。スライドやフェードだけでなく、フェードさせるオプションもあります。
-   `columnHidingAnimationMode`: 列を非表示にすると、列ヘッダーとそのセルを左、右、上、または下からスライドさせることができます。スライドやフェード アウトだけでなく、フェード アウトさせるオプションもあります。
-   `columnMovingAnimationMode`: 列が移動すると、列ヘッダーとそのセルを左、右、上、または下からスライドさせることができます。
-   `columnPropertyUpdatingAnimationMode`: 列のプロパティが変更されると、その変更を補完またはさらに補完してそのプロパティの変更をアニメーションするオプションがあります。
-   `columnShowingAnimationMode`: 列を追加すると、列ヘッダーとそのセルを左、右、上、または下からスライドさせることができます。スライドやフェードインだけでなく、フェードインさせるオプションもあります。

### コード スニペット

このトピックで説明されている各列アニメーションの実装を次に示します。
