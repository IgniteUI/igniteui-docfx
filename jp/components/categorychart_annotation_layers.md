---
title: カテゴリ チャート注釈とオーバーレイ
_description: Ignite UI for Angular Category Chart コンポーネントは複雑なデータ ビジュアライゼーションを API によって簡素化できます。ユーザーがデータのコレクションまたはコレクションのグループにバインドし、データを指定するプロパティを設定後、チャート コントロールが残りの作業を処理します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular Grid コンポーネント, Angular Chart コンポーネント, Angular Category Chart
_language: ja
---
## カテゴリ チャート注釈とオーバーレイ

このトピックでは、`igx-category-chart` の注釈やインタラクションについて説明します。

### デモ
<div class="sample-container" style="height: 550px">
    <iframe id="category-chart-annotations-and-overlays-iframe" src='{environment:demosBaseUrl}/category-chart-annotations-and-overlays' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-annotations-and-overlays-iframe" data-demos-base-url="{environment:demosBaseUrl}"> StackBlitz で開く
    </button>
</div>
<div class="divider--half"></div>

## オーバーレイ タイプ

### 十字線レイヤー

Crosshair Layer は、各ターゲット シリーズの実際の値に一致する十字線を提供します。Crosshair タイプは、Horizontal、Vertical、Both があります。

```html
<igx-category-chart
    [dataSource]="data"
    displayCrosshairs="Horizontal"
    snapCrosshairsToData="true"
    displayCrosshairAxisAnnotations="true">
</igx-category-chart>
```

### カテゴリ ツールチップ レイヤー

カテゴリ ツールチップ レイヤーは、カテゴリ軸を使用するシリーズ用にグループ化されたツールチップを表示します。

```html
<igx-category-chart
    [dataSource]="data"
    tooltipType="Category">
</igx-category-chart>
```

### アイテム ツールチップ レイヤー

アイテム ツールチップ レイヤーは、すべてのターゲット シリーズにツールチップを表します。

```html
<igx-category-chart
    [dataSource]="data"
    tooltipType="Item">
</igx-category-chart>
```

### カテゴリ項目強調表示レイヤー

Category Item Highlight Layer レイヤーは、その位置で縞模様シェイプまたはマーカーを描画することにより、カテゴリ軸を使用するシリーズ内の項目を強調表示します。

```html
<igx-category-chart
    [dataSource]="data"
    highlightItemUnderCursor="true">
</igx-category-chart>
```

### カテゴリ強調表示レイヤー

カテゴリ軸またはチャート内のすべてのカテゴリ軸に対する注釈レイヤーを表します。カーソル位置に最も近い軸のエリアを照らすシェイプを描画します。

```html
<igx-category-chart
    [dataSource]="data"
    highlightCategoryUnderCursor="true">
</igx-category-chart>
```

## 注釈タイプ

### 最終値レイヤー

最終値レイヤーは、シリーズに表示された最終値の軸に沿ったクイックビューをサポートします。

```html
<igx-category-chart
    [dataSource]="data"
    displayFinalValueAnnotation="true">
</igx-category-chart>
```

### コールアウト レイヤー

Callout Layer は、X/Y 位置にコールアウトを表示します。注釈にホバーした際にラベルと追加コンテンツをツールチップで表示できます。

> 注:  Category 軸使用時は `eventsXMemberPath` が数値インデックスまたは時間軸の時間値をポイントする必要があります。

```html
<igx-category-chart
    [dataSource]="data"
    displayEventAnnotations="true"
    [eventsDataSource]="calloutData"
    eventsXMemberPath="index"
    eventsYMemberPath="yValue"
    eventsTitleMemberPath="title"
    eventsContentMemberPath="content">
</igx-category-chart>
```
