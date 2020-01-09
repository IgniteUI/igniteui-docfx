---
title: データ チャート | 可視化ツール | Ignite UI for Angular | インフラジスティックス | データ ソース
_description: 同じプロット領域に視覚要素の複数インスタンスを表示するデータ チャートを作成し、複合チャートビューを作成します。
_keywords: data chart, Ignite UI for Angular, Infragistics, データ チャート, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---

## 極座標シリーズのサンプル データソース

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
