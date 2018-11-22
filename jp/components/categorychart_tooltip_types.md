---
title: ツールチップ タイプ
_description: Ignite UI for Angular Category Chart コンポーネントは複雑なデータ ビジュアライゼーションを API によって簡素化できます。ユーザーがデータのコレクションまたはコレクションのグループにバインドし、データを指定するプロパティを設定後、チャート コントロールが残りの作業を処理します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular Grid コンポーネント, Angular Chart コンポーネント, Angular Category Chart
_language: ja
---
## ツールチップ タイプ

このトピックでは、`igx-category-chart` のツールチップ タイプについて説明します。

### デモ
<div class="sample-container" style="height: 500px">
    <iframe id="category-chart-tooltip-types-iframe" src='{environment:demosBaseUrl}/category-chart-tooltip-types' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-tooltip-types-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示
    </button>
</div>
<div class="divider--half"></div>

### ツールチップ タイプ

IgxCategoryChart は以下の方法でツールチップの表示を設定できます。

1. `Default` ツールチップはポインターが項目上に配置されたときに単一の項目に対してツールチップを表示できます。
1. `Item` ツールチップはポインターが項目上に配置されたときに各データ項目に対してツールチップを表示できます。
1. `Category` ツールチップはポインターがデータ ポイント上に配置されたときにすべてのデータ ポイントに対してツールチップを表示できます。
1. `None` はツールチップが非表示になります。

```html
<igx-category-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-category-chart>
```
