---
title: Angular データ チャート | データ可視化ツール | データソース | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用して、範囲エリア、範囲柱状などの範囲チャートを作成します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, range chart, Ignite UI for Angular, Infragistics, data source, Angular チャート, データ チャート, 範囲チャート, インフラジスティックス, データソース
mentionedTypes: ['XamDataChart']
_language: ja
---

# Angular エリア シリーズのサンプル データソース

このトピックでは、[エリア シリーズ](data-chart-type-range-series.md) のデータソースを実装する方法の例を示します。

```ts
export class SampleRangeData {

    public static create(): any[] {
        let temperature = 25;
        const data: any[] = [];
        for (let i = 2000; i < 2025; i++) {
            temperature += (Math.random() - 0.5) * 0.5;
            const high = this.round(temperature + (Math.random() * 2));
            const low  = this.round(temperature - (Math.random() * 2));
            data.push({"High": high, "Low": low, "Index": i});
        }
        return data;
    }
    public static round(value: number) {
        return Math.round(value * 10) / 10;
    }
}
```
