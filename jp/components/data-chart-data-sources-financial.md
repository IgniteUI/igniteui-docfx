---
title: Angular データ チャート | データ可視化ツール | データソース | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用して、ローソク足や OHLC などのファイナンシャル チャートを作成します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, financial, Ignite UI for Angular, Infragistics, data source, Angular チャート, データ チャート, ファイナンシャル, インフラジスティックス, データソース
mentionedTypes: ['XamDataChart', 'FinancialPriceSeries', 'FinancialSeries']
_language: ja
---

# Angular ファイナンシャル シリーズのサンプル データソース

このトピックでは、[ファイナンシャル シリーズ](data-chart-type-financial-series.md) のデータソースを実装する方法の例を示します。

```ts
export class SampleFinancialData {

    public static create(): any[] {
        // initial values
        let v = 10000;
        let o = 500;
        let h = o + (Math.random() * 5);
        let l = o - (Math.random() * 5);
        let c = l + (Math.random() * (h - l));

        const items = 100;
        const end = new Date(2020, 11, 1);
        let time = this.addDays(end, -items);

        const data: any[] = [];
        for (let i = 0; i < items; i++) {
            const label = time.toDateString();
            // adding new data item
            data.push({"Date": time, "Label": label, "Close": c, "Open": o, "High": h, "Low": l, "Volume": v});
            // generating new values
            const mod = Math.random() - 0.4;
            o = o + (mod * 5 * 2);
            v = v + (mod * 5 * 100 );
            h = o + (Math.random() * 5);
            l = o - (Math.random() * 5);
            c = l + (Math.random() * (h - l));
            time = this.addDays(time, 1);
        }
        return data;
    }

    public static addDays(date: Date, days: number): Date {
        return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }
}
```
