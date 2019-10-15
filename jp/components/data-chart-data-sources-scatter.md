---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers.チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント Suite, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント Library, Angular Chart, Angular Data Chart コントロール, Angular Data Chart Example, Angular Data Chart コンポーネント, Angular Data Chart
_language: ja
---

## 散布 XY シリーズのサンプル データソース

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
