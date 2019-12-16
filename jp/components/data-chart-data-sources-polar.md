---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント Suite, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント Library, Angular Chart, Angular Data Chart コントロール, Angular Data Chart Example, Angular Data Chart コンポーネント, Angular Data Chart
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
