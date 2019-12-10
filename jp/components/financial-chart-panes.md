---
title: ペイン
_description: Ignite UI for Angular Financial Chart コンポーネントは簡易な API を使用してファイナンシャル データを表示できます。ユーザーがデータにバインド後にチャートがデータの可視化オプションを複数提供します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular Financial Chart
_language: ja
---

## ペイン

`XamFinancialChart` コントロールには、財務データを表示する複数のペインがあります。

### サンプル

<div class="sample-container loading" style="height: 550px">
    <iframe id="financial-chart-panes-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-panes' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-panes-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>
</div>

以下のペインが Financial Chart コントロールで利用できます。

-   価格ペイン - 折れ線、ローソク足、棒 (OHLC)、トレンドライン、およびファイナンシャル オーバーレイを使用して価格を描画します。
-   インジケーター ペイン - すべての財務指標を別のチャートに描画し、`BollingerBands` および `PriceChannel` オーバーレイが Y 軸と同じ値範囲を使用するために価格ペインに描画されます。
-   ボリューム ペイン - 柱状、折れ線、およびエリアのチャート タイプを使用して出来高を上記のペインの下に描画します。
-   ズーム ペイン - すべてのペインのズームを制御します。常にチャートの下側に描画されます。

### インジケーター ペイン

財務指標は、株価の動きの計測やトレンドを確認するためにトレーダーによって使用されます。これらのインジケーターは、同じ Y 軸を共有しないため価格ペインの下に表示されます。

デフォルトでインジケーター ペインは表示されません。ユーザーはツールバーを使用してランタイムで表示するインジケーターを選択できます。初期でインジケーター ペインを表示するには、以下のコードのように `indicatorTypes` プロパティをインジケーターのタイプを 1 つ以上に設定する必要があります。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    indicatorTypes="AverageTrueRange,ForceIndex">
 </igx-financial-chart>
```

### ボリューム ペイン

ボリューム ペインは指定した期間に取引された株式数を表します。出来高の低さは関心が低いことを示し、出来高の多さは取引が多く、関心が高いことを示します。柱状、折れ線、またはエリア チャート タイプを使用して表示できます。ツールバーでチャート タイプを選択すると、ランタイムにデータを表示するボリューム ペインが表示されます。ペインを表示するには、以下のコードのようにボリューム タイプを設定する必要があります。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    volumeType="Column">
 </igx-financial-chart>
```

### 価格ペイン

このペインは、在庫価格を表示し、経時的な在庫の高値、安値、始値、終値を示します。さらに、トレンドラインおよびオーバーレイを表示できます。ツールバーからチャート タイプを選択できます。デフォルトで、チャート タイプは `auto` に設定されています。以下のコードに示すように、デフォルト設定をオーバーライドできます。

```html
<igx-financial-chart
   [dataSource]="data"
   width="850px"
   height="600px"
   chartType="Line">
</igx-financial-chart>
```

注: 複数のデータ ソースまたはデータ ポイントが大量にあるデータ ソースを描画する場合、折れ線チャート タイプを使用してください。

### ズーム ペイン

このペインはすべての表示されるペインのズームを制御します。このペインはデフォルトで表示されます。以下のコードのように `ZoomSliderType` を `none` に設定すると機能を無効にできます。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    zoomSliderType="none">
 </igx-financial-chart>
```

注: `ZoomSliderType` オプションを [`ChartType`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) オプションと同じ値に設定してください。このように、ズーム スライダーは価格ペインの正しいプレビューを表示します。以下のコードはその方法を示しています。

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    chartType="Line"
    zoomSliderType="Line">
 </igx-financial-chart>
```

<div class="divider--half"></div>

### その他のリソース

<div class="divider--half"></div>

-   [チャートのパフォーマンス](financial-chart-performance.md)
