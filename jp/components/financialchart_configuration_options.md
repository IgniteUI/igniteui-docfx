---
title: Financial Chart - 構成オプション
_description: Ignite UI for Angular Financial Chart コンポーネントは、財務データを表示するタッチ対応、高いパフォーマンス、軽量なチャート コントロールです。
_keywords: Ignite UI for Angular, データ ビジュアライゼーション, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Chart コンポーネント, Angular Financial Chart コンポーネント, Angular Chart コントロール, Angular Financial Chart コントロール
_language: ja
---
## 構成オプション

`igx-financial-chart` コントロールで、ナビゲーション動作、トレンドライン レイヤー、オーバーレイ、チャート タイトル、チャート サブタイトルなどのカスタマイズ可能なビジュアルがあります。このページは、カスタマイズされたファイナンシャル チャートを作成するために設定するプロパティをコード例を使用して説明します。

### 構成オプション デモ

<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-trendlines-iframe" src='{environment:demosBaseUrl}/financial-chart-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-trendlines-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

### ナビゲーションの構成

`igx-financial-chart` コントロールでは、チャート ナビゲーションがデフォルトで有効になっています。ただし、以下のプロパティを設定することによって、カスタマイズできます。

- `IsHorizontalZoomEnabled` - チャートがユーザー操作により水平方向にズーム可能かどうかを指定します。デフォルトでこのプロパティは true に設定されます。
- `IsVerticalZoomEnabled` - チャートがユーザー操作により垂直方向にズーム可能かどうかを指定します。デフォルトでこのプロパティは false に設定されます。
- `IsWindowSyncedToVisibleRange` - true に設定される場合、Y 軸は表示データ範囲に自動的にサイズ変更します。デフォルトでこのプロパティは false に設定されます。
- `WindowRect` - `igx-financial-chart` のスクロール状態およびズーム状態を取得または設定するために使用できます。`windowRect` は、 0 ~ 1 の間の座標およびサイズの Rectangle として表現されます。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    isHorizontalZoomEnabled="true"
    isVerticalZoomEnabled="false">
 </igx-financial-chart>
```

### トレンドラインの構成

トレンドラインはデフォルトで igxFinancialChart に表示されません。トレンドラインが表示される場合、同じトレンドラインがすべてのチャート ペインに表示されます。トレンドラインのデフォルト設定をカスタマイズできます。

以下のコードはトレンドラインの色および太さを設定します。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    trendLineType="QuinticFit"
	trendLineThickness="2"
    trendLineBrushes="Green, Blue">
 </igx-financial-chart>
```

### オーバーレイの構成

オーバーレイはデフォルトで igxFinancialChart に表示されません。オーバーレイには、`BollingerBands` および `PriceChannel` の 2 種類があります。オーバーレイのデフォルト設定をカスタマイズできます。

以下のコードはオーバーレイの色、アウトライン、および太さを設定します。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    overlayTypes="BollingerBands"
    overlayBrushes="Red"
    overlayOutlines="Green"
    overlayThickness="2">
 </igx-financial-chart>
```
