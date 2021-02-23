---
title: Angular チャートおよびグラフ | データ可視化ツール | 構成オプション | インフラジスティックス
_description: マーカー、タイトル、サブタイトル、アニメーションの設定など、インフラジスティックスの Angular チャート コントロール機能の使用方法を学びます。インフラジスティックスの Ignite UI for Angular グラフ デモを是非お試しください!
_keywords: Angular charts, category chart, annotations, Ignite UI for Angular, Infragistics, Angular チャート, カテゴリ チャート, 注釈, インフラジスティックス
mentionedTypes: ['CategoryChart','CategoryTransitionInMode']
_language: ja
---

# Angular 構成オプション

マーカー、チャート タイトルとサブタイトル、およびチャート タイプなどの Ignite UI for Angular カテゴリ チャート コンポネント機能をカスタマイズできます。

## Angular 構成オプションの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-marker-options-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-marker-options' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular 構成オプションの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="category-chart-marker-options-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

## チャート ビジュアルの構成

上記サンプルのようにチャート タイプにブラシを構成できます。以下のコード例はチャート タイプを waterfall に設定し、ブラシのデフォルト色を変更します。

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

## チャート マーカーの構成

マーカーは、カテゴリ チャート コンポーネントのプロット領域のデータ ポイント値を表示する視覚的要素です。値が主グリッド線と副グリッド線の間にある場合も指定したデータ ポイントの値をただちに識別できるようユーザーをサポートします。

チャート マーカーの外観は、カテゴリ チャートの [`MarkerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/markertype.html)、[`markerBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markerbrushes)、および [`markerOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markeroutlines) プロパティによって処理されます。以下のコード例では、このプロパティを使用しています。

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

## チャートのタイトルとサブタイトルを構成

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

## トランジションイン アニメーション

この機能は、新しいデータ ソースを読み込むときのシリーズのアニメーション化を可能にします。利用可能なアニメーションは、シリーズのタイプに基づきます。たとえば、列シリーズは  x 軸が上に上昇するとアニメーションを再生します。折れ線シリーズは y 軸から描画するアニメーションを再生します。

チャートでタイトルおよびサブタイトル情報がサイズ変更できます。

デフォルトでアニメーションのトランジションは無効ですが、[`isTransitionInEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#istransitioninenabled) オプションを true に設定してトランジションイン アニメーションを有効にできます。

アニメーションのトランジショントはトランジション タイプ、データ ポイントに相対するスピード、およびイージング関数によって管理されるイージング トランジションを構成できます。

トランジション タイプは、transitionInMode オプションを任意のトランジション名に設定して構成します。プロパティを [`Auto`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/categorytransitioninmode.html#auto) (デフォルト値) に設定し、シリーズ タイプに基づいてトランジション タイプを自動的に選択することもできます。

以下のコード例では、トランジションイン アニメーションを有効にし、チャートを右側からアコーディオン表示する方法を示します。

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
