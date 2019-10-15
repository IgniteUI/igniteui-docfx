---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント Suite, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント Library, Angular Chart, Angular Data Chart コントロール, Angular Data Chart Example, Angular Data Chart コンポーネント, Angular Data Chart
_language: ja
---

## 散布図 - HD シリーズのサンプル データソース

このトピックでは、[散布 HD シリーズ](data-chart-type-polar-series.md) のデータソースを実装する方法の例を示します。

```ts
export class SampleDensityData {

    public static create(): any[] {
        const amount = 950000;
        const data: any[] = [];
        // generating a lot of data points that spread from specified X/Y center
        data.concat(this.generate(amount / 8, 5000, 3000, 3000, 2000));
        data.concat(this.generate(amount / 8, 6000, 5000, 2000, 2000));
        data.concat(this.generate(amount / 4, 7000, 7000, 5000, 4000));
        data.concat(this.generate(amount / 8, 8000, 9000, 2000, 2000));
        data.concat(this.generate(amount / 8, 9000, 11000, 3000, 2000));
        return data;
    }

    public static generate(count: number,
        centerX: number, centerY: number,
        spreadX: number, spreadY: number): any[] {

        const data: any[] = [];
        for (let i = 0; i <= count; i++)
        {
            let rangeX = Math.random() * spreadX;
            let rangeY = Math.random() * spreadY;
            const flip = 1;
            const prop = Math.random();
            if (prop < .25) {
                rangeX *= flip;
                rangeY *= flip;
            }
            else if (prop >= .25 && prop < .5) {
                rangeX *= -flip;
                rangeY *= flip;
            }
            else if (prop >= .5 && prop < .75) {
                rangeX *= flip;
                rangeY *= -flip;
            }
            else {
                rangeX *= -flip;
                rangeY *= -flip;
            }
            const dispersionX = Math.random() + 0.12;
            const dispersionY = Math.random() + 0.12;
            const x = centerX + (rangeX * dispersionX);
            const y = centerY + (rangeY * dispersionY);
            data.push({ "X": x, "Y": y });
        }
        return data;
    }
}
```
