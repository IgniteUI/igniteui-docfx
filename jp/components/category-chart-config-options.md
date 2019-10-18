---
title: 構成オプション
_description: Ignite UI for Angular Category Chart コンポーネントは複雑なデータ ビジュアライゼーションを API によって簡素化できます。ユーザーがデータのコレクションまたはコレクションのグループにバインドし、データを指定するプロパティを設定後、チャート コントロールが残りの作業を処理します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular Category Chart
_language: ja
---

## 構成オプション

マーカー、チャート タイトルとサブタイトル、およびチャート タイプなどのカテゴリ チャート機能をカスタマイズできます。

### デモ

<div class="sample-container loading" style="height: 550px">
    <iframe id="category-chart-config-options-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-config-options' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="category-chart-config-options-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

### チャート ビジュアルの構成

上記デモのようにチャート タイプにブラシを構成できます。以下のコード例はチャート タイプを waterfall に設定し、ブラシのデフォルト色を変更します。

```html
 <igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    chartType="waterfall"
	brushes="blue, green"
	negativeBrushes="red, yellow"
	outlines="black"
	thickness="5">
</igx-category-chart>
```

### チャート マーカーの構成

マーカーは、Category Chart コントロールのプロット領域のデータ ポイント値を表示する視覚的要素です。値が主グリッド線と副グリッド線の間にある場合も指定したデータ ポイントの値をただちに識別できるようユーザーをサポートします。

チャート マーカーの外観は、Category Chart の `markerType`、`markerBrushes`、および `markerOutlines` プロパティによって処理されます。以下のコード例では、このプロパティを使用しています。

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    markerType="diamondMarker"
    markerBrushes="red"
    markerOutlines="yellow">
</igx-category-chart>
```

### チャートのタイトルとサブタイトルを構成

カテゴリ チャート コンポーネントのタイトルとサブタイトル機能は、チャートの上部セクションに情報を追加できます。
チャートにタイトルまたはサブタイトルを追加すると、タイトルとサブタイトルの情報に応じて、チャートの内容が自動的にサイズ変更されます。

以下のコード例のようにカテゴリ チャートのサブタイトルとタイトルにさまざまなフォントスタイル、マージン、配置を適用してルックアンドフィールをカスタマイズできます。

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    chartTitle="Energy Use Per Country"
    titleTextColor = "Red"
    titleTextStyle="20pt Verdana"
    subtitle="Results over a two year periods"
    subtitleTextColor = "Blue"
    subtitleTextStyle = "10pt Verdana">
</igx-category-chart>
```

### トランジションイン アニメーション

この機能は、新しいデータ ソースを読み込むときのシリーズのアニメーション化を可能にします。利用可能なアニメーションは、シリーズのタイプに基づきます。たとえば、列シリーズは  x 軸が上に上昇するとアニメーションを再生します。折れ線シリーズは y 軸から描画するアニメーションを再生します。

チャートでタイトルおよびサブタイトル情報がサイズ変更できます。

> [!NOTE]
> デフォルトでトランジションイン アニメーションは無効ですが、`IsTransitionInEnabled` オプションを `true` に設定してトランジションイン アニメーションを有効にできます。

トランジションイン アニメーションのトランジション タイプ、データ ポイントに相対するスピード、およびイージング関数によって管理されるイージング トランジションを構成できます。

トランジション タイプは、transitionInMode オプションを任意のトランジション名に設定して構成します。プロパティを `Auto` (デフォルト値) に設定し、シリーズ タイプに基づいてトランジション タイプを自動的に選択することもできます。

以下の例では、トランジション イン アニメーションを有効にし、チャートを右側からアコーディオン表示する方法を示します。

```html
 <igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    isTransitionInEnabled="true"
    transitionInDuration="5000"
    transitionInMode="AccordionFromRight">
</igx-category-chart>
```
