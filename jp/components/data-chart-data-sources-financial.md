---
title: データ チャート | 可視化ツール | Ignite UI for Angular | インフラジスティックス | データ ソース
_description: 同じプロット領域に視覚要素の複数インスタンスを表示するデータ チャートを作成し、複合チャートビューを作成します。
_keywords: data chart, Ignite UI for Angular, Infragistics, データ チャート, インフラジスティックス
mentionedTypes: ['XamDataChart', 'FinancialPriceSeries', 'FinancialSeries']
_language: ja
---

## ファイナンシャル シリーズのサンプル データソース

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
