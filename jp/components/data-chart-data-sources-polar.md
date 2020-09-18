---
title: Angular データ チャート | データ可視化ツール | データソース | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用して、極座標エリア、極座標折れ線、極座標散布などの極座標チャートを作成します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, polar, Ignite UI for Angular, Infragistics, data source, Angular チャート, データ チャート, 極座標, インフラジスティックス, データソース
mentionedTypes: ['XamDataChart']
_language: ja
---

# Angular 極座標シリーズのサンプル データソース

このトピックでは、[極座標シリーズ](data-chart-type-polar-series.md) のデータソースを実装する方法の例を示します。

```ts
export class SamplePolarData {

    public static create(): any[] {
        const data: ISamplePolarItem[] = [
            { Direction: 0,   WindSpeed: 70,  BoatSpeed: 90 },
            { Direction: 45,  WindSpeed: 35,  BoatSpeed: 65 },
            { Direction: 90,  WindSpeed: 25,  BoatSpeed: 45 },
            { Direction: 135, WindSpeed: 15,  BoatSpeed: 25 },
            { Direction: 180, WindSpeed:  0,  BoatSpeed: 0  },
            { Direction: 225, WindSpeed: 15,  BoatSpeed: 25 },
            { Direction: 270, WindSpeed: 25,  BoatSpeed: 45 },
            { Direction: 315, WindSpeed: 35,  BoatSpeed: 65 },
            { Direction: 360, WindSpeed: 70,  BoatSpeed: 90 },
        ];
        return data;
    }
}

interface ISamplePolarItem {
    Direction?: number;
    WindSpeed?: number;
    BoatSpeed?: number;
}
```
