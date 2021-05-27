---
title: Angular ファイナンシャル チャート | 大規模データ | インフラジスティックス
_description: インフラジスティックスの Angular ファイナンシャル チャート コントロールのパフォーマンスを最適化する方法について説明します。Ignite UI for Angular チャートのパフォーマンスを向上させます。
_keywords: Angular charts, financial chart, stock chart, performance, Ignite UI for Angular, Infragistics, Angular チャート, ファイナンシャル チャート, 株価チャート, パフォーマンス, インフラジスティックス
mentionedTypes: ['FinancialChart']
_language: ja
---

# Angular 大規模データのバインド

Angular Financial Chart  コンポーネントは大量のデータを処理できます。以下のデモは 20 年間分のデータをバインドし、折れ線チャートで 1 時間間隔の在庫価格を示します。

## Angular 大規模データのバインドの例

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-high-volume"
           alt="Angular 大規模データのバインドの例"
           github-src="charts/financial-chart/high-volume">
</code-view>

<div class="divider--half"></div>

チャートのパフォーマンスに影響を及ぼすチャート機能および Angular 固有の機能があり、アプリケーションのパフォーマンスを最適化する際に検討する必要があります。

コンポーネントにバインドするプロパティで大量のデータを保存する場合、`@Component` デコレーターで `changeDetection: ChangeDetectionStrategy.OnPush`  を設定します。Angular の各変更検出のサイクルでデータ配列内の変更を確認しないようにする設定です。

以下のコードはファイナンシャル チャートを大量データにバインドします。

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
-   [リアルタイムにデータをバインド](financial-chart-high-frequency.md)
-   [複数データ ソースのバインド](financial-chart-multiple-data.md)
