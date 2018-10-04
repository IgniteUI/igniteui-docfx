---
title: カテゴリ チャート注釈とオーバーレイ
_description: Ignite UI for Angular Financial Chart コンポーネントは、シンプルで直感的な API を使用してファイナンシャル データを表示します。ユーザーがデータにバインド後、チャートはデータの可視化オプションを複数提供します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular Grid コンポーネント, Angular Chart コンポーネント, Angular Financial Chart
_language: ja
---
## カテゴリ チャート注釈とオーバーレイ

このトピックでは、`igx-financial-chart` の注釈やインタラクションについて説明します。

### デモ
<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-annotations-and-overlays-iframe" src='{environment:demosBaseUrl}/financial-chart-annotations-and-overlays' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-annotations-and-overlays-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示開く
    </button>
</div>
<div class="divider--half"></div>

## オーバーレイ タイプ

### 十字線レイヤー

Crosshair Layer は、各ターゲット シリーズの実際の値に一致する十字線を提供します。Crosshair タイプは、Horizontal、Vertical、Both があります。

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    showCrosshairs="Horizontal"
    snapCrosshairsToData="true"
    displayCrosshairAxisAnnotations="true">
</igx-financial-chart>
```

### カテゴリ ツールチップ レイヤー

カテゴリ ツールチップ レイヤーは、カテゴリ軸を使用するシリーズ用にグループ化されたツールチップを表示します。

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    tooltipType="Category">
</igx-financial-chart>
```

### アイテム ツールチップ レイヤー

アイテム ツールチップ レイヤーは、すべてのターゲット シリーズにツールチップを表します。

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    tooltipType="Item">
</igx-financial-chart>
```

## 注釈タイプ

### 最終値レイヤー

最終値レイヤーは、シリーズに表示された最終値の軸に沿ったクイックビューをサポートします。

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    displayFinalValueAnnotation="true">
</igx-financial-chart>
```

### コールアウト レイヤー

コールアウト レイヤーは、X/Y 位置にコールアウトを表示します。注釈にホバーした際にラベルと追加コンテンツをツールチップで表示できます。

> 注: X 軸モードを使用する際に `eventsXMemberPath` は数値インデックスをポイントする必要があります。あるいは、`eventsXMemberPath` を時間値にポイントしてください。

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    displayEventAnnotations="true"
    [eventsDataSource]="calloutData"
    eventsXMemberPath="index"
    eventsYMemberPath="yValue"
    eventsTitleMemberPath="title"
    eventsContentMemberPath="content">
</igx-financial-chart>
```
