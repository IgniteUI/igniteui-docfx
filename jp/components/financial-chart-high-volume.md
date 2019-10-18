---
title: Financial Chart - 大規模なデータの処理
_description: Ignite UI for Angular Financial Chart コンポーネントは、財務データを表示するタッチ対応、高いパフォーマンス、軽量なチャート コントロールです。
_keywords: Ignite UI for Angular, データ ビジュアライゼーション, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Chart コンポーネント, Angular Financial Chart コンポーネント, Angular Chart コントロール, Angular Financial Chart コントロール
_language: ja
---

## 大規模なデータの処理

[`IgxFinancialChart`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchart.html) コントロールは大規模なデータを処理できます。以下のデモは 20 年にわたるデータをバインドします。折れ線チャートで 1 時間間隔の在庫価格を示します。

<div class="divider"></div>

### デモ

<div class="sample-container loading" style="height: 550px">
    <iframe id="financial-chart-high-volume-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-high-volume' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-high-volume-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

チャートのパフォーマンスに影響を及ぼすチャート機能および Angular 固有の機能があり、アプリケーションのパフォーマンスを最適化する際に検討する必要があります。

-   コンポーネントにバインドするプロパティで大量のデータを保存する場合、`@Component` デコレーターで `changeDetection: ChangeDetectionStrategy.OnPush` を設定します。 Angular の各変更検出のサイクルでデータ配列内の変更を確認しないようにする設定です。

以下のコードはファイナンシャル チャートを大量のデータにバインドします。

```ts
import { GenerateHourlyPricesService } from "../services/generate-hourly-prices.service";

export class AppComponent {
    public data: any;

    constructor(private dataService: GenerateHourlyPricesService) {
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

<div class="divider--half"></div>

### その他のリソース

<div class="divider--half"></div>

-   [チャートのパフォーマンス](financial-chart-performance.md)
-   [リアルタイム データにバインド](financial-chart-high-frequency.md)
-   [複数データ ソースへのバインド](financial-chart-multiple-data.md)
