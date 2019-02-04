---
title: パフォーマンス
_description: Ignite UI for Angular Financial Chart コンポーネントは簡易な API を使用してファイナンシャル データを表示できます。ユーザーがデータにバインド後にチャートがデータの可視化オプションを複数提供します。
_keywords: Ignite UI for Angular, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント ライブラリ, Angular チャート, Angular チャート コントロール, Angular チャート例, Angular チャート コンポーネント, Angular Financial Chart
_language: ja
---

## パフォーマンス

`IgxFinancialChart` コントロールは多数のデータ ポイントの描画で高いパフォーマンスを実現します。以下のデモは 20 年間のデータをバインドし、ローソク足チャートで 1 日間隔の在庫価格を示します。

### デモ

<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-performance-iframe" src='{environment:demosBaseUrl}/charts/financial-chart-performance' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-performance-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

以下のコードはファイナンシャル チャートを大量データにバインドします。

```typescript
import { GenerateOhlcPricesService } from "../services/generate-ohlc-prices.service";

export class AppComponent {
    public data: any;

    constructor(private dataService: GenerateOhlcPricesService) {
        const dateEnd = new Date(2018, 3, 20); // April 20, 2018
        const dateStart = new Date(1998, 3, 20); // April 20, 1998
        this.data = this.dataService.GetStockHistoryBetween(dateStart, dateEnd);
    }
}
```

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px">
 </igx-financial-chart>
```

チャートのパフォーマンスに影響を及ぼす Angular 固有の機能があり、アプリケーションのパフォーマンスを最適化する際に検討する必要があります。

-   コンポーネントにバインドするプロパティで大量のデータを保存する場合、`@Component` デコレーターで `changeDetection: ChangeDetectionStrategy.OnPush` を設定します。Angular の各変更検出のサイクルでデータ配列内の変更を確認しないようにする設定です。
-   チャートに Angular が自動でデータ変更を通知する代わりに、バインドされたデータが変更された方法をコンポーネントに通知できます。デルタ通知の処理は、Angular が変更検出を実行する際に 100 万のレコードを含む配列のすべての変更を比較するより効果的に実行できます。バインドしたデータの変更をチャートに通知する方法の詳細については、チャートの `notify*` メソッドを参照してください。
-   Angular が Debug モードで実行されている場合、特定のブラウザーでパフォーマンスを低下させるオーバーヘッドがあります。実環境パフォーマンスを評価する場合、`--prod` を使用して serve または build してください。

また、アプリケーションのパフォーマンスを最適化する場合、ファイナンシャル チャートの以下の機能に注意してください。

### チャート タイプ

`chartType` オプションの設定はチャート パフォーマンスに影響します。

-   `line` - 簡単に描画できるチャート タイプです。大量のデータ ポイントの描画や複数のデータ ソースをプロットする場合に使用することをお勧めします。
-   `column` - `line` チャート タイプより描画が複雑です。単一の数値を持つデータ項目を描画する場合の使用することをお勧めします。
-   `bar` - `column` チャート タイプより描画が複雑です。OHLC 数値を持つデータ項目を描画する場合に使用することをお勧めします。
-   `candle` - `bar` チャート タイプより描画が複雑です。OHLC 数値を持つデータ項目を描画する場合にも推薦されます。

### ボリューム タイプ

`volumeType` オプションの設定はチャート パフォーマンスに影響します。

-   `line` - 描画する一番安いボリューム タイプです。データ ポイントの大量を描画するか、複数のデータ ソースをプロットする場合に使用することをお勧めします。
-   `area` - `line` ボリューム タイプより描画に手間がかかります。
-   `column` - `area` ボリューム タイプより描画に手間がかかります。1 つ ～ 3 つの在庫の出来高データを描画する場合に使用することをお勧めします。

### マーカー タイプ

`markerTypes` オプションを `none` に設定すると他のタイプより描画する項目の量が少なくなります。

### 凡例の表示

`isLegendVisible` オプションを `false` に設定すると凡例が描画されないためパフォーマンスが向上します。

### ズーム スライダー タイプ

`zoomSliderType` オプションを `none` に設定すると、チャート パフォーマンスが向上し、その他のインジケーターおよびボリューム ペインに垂直スペースが利用できるようになります。

### チャート ペイン

`indicatorTypes` および `overlayTypes` オプションを使用して複数のペインを設定した場合、パフォーマンスが低下する可能性があり、少数の財務指標および単一の財務オーバーレイを使用することをお勧めします。

### X 軸モード

`xAxisMode` オプションの設定はチャート パフォーマンスに影響します。

-   `ordinal` - ファイナンシャル チャートで使用できる最も簡易な X 軸です。データ範囲のギャップ (週末または休日など) の描画が必要ない場合に使用することをお勧めします。
-   `time` - ファイナンシャル チャートで `ordinal` より手間がかかります。データ範囲のギャップ (週末または休日など) の描画が必要な場合に使用することをお勧めします。

### Y 軸モード

パフォーマンスを向上させるには、`percentChange` モードよりオプションが少ない `yAxisMode` オプションの `numeric` に設定してください。

### 注釈

コールアウト注釈 (`calloutsVisible`) または最終値の注釈 (`finalValueAnnotationsVisible`) はファイナンシャル チャートのパフォーマンスを低下させます。

### 軸ビジュアル

デフォルトで、ファイナンシャル チャートのパフォーマンスが最適化されています。ただし、以下のオプションの追加などチャート ビジュアルを有効化することによりパフォーマンスが低下する場合があります。

-   `xAxisInterval`
-   `yAxisInterval`
-   `xAxisTitle*`
-   `yAxisTitle*`
-   `xAxisTick*`
-   `yAxisTick*`
-   `xAxisMajor*`
-   `yAxisMajor*`
-   `xAxisMinor*`
-   `yAxisMinor*`
-   `xAxisLabel*`
-   `yAxisLabel*`
-   `xAxisStroke*`
-   `yAxisStroke*`
-   `xAxisStrip*`
-   `yAxisStrip*`

<div class="divider--half"></div>

### その他のリソース

<div class="divider--half"></div>

-   [大規模なデータへのバインド](financialchart_high_volume_data.md)
-   [リアルタイム データにバインド](financialchart_real_time_data.md)
-   [複数データ ソースへのバインド](financialchart_binding_to_multiple_data.md)
