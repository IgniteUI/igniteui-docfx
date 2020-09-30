---
title: Angular データ チャート | データ可視化ツール | データソース | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用して、散布エリア、散布バブル、散布等高線などの散布図を作成します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, scatter chart, Ignite UI for Angular, Infragistics, data source, Angular チャート, データ チャート, 散布図, インフラジスティックス, データソース
mentionedTypes: ['XamDataChart']
_language: ja
---

# Angular 散布 XY シリーズのサンプル データソース

このトピックでは、[散布 XY シリーズ](data-chart-type-range-series.md)のデータソースを実装する方法の例を示します。

```ts
export class SampleScatterData {

    public static create(): any[] {

        const data: any[] = [];
        const xMin = -100;
        const xMax = 100;
        const yMin = -100;
        const yMax = 100;
        const xCount = 11;
        const yCount = 11;

        const xStep = (xMax - xMin) / (xCount - 1);
        const yStep = (yMax - yMin) / (yCount - 1);
        let index = 0;
        for (let x = xMin; x <= xMax; x += xStep)
        {
            for (let y = yMin; y <= yMax; y += yStep)
            {
                const z = Math.cos(x) + Math.cos(y);
                // adding new data item
                data.push({"X": x, "Y": y, "Z": z, "Index": index++});
            }
        }
        return data;
    }
}
```
