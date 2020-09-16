---
title: Angular データ チャート | データ可視化ツール | データソース | インフラジスティックス
_description: インフラジスティックスの Angular チャート コントロールを使用して、高密度散布シリーズを作成します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, high density scatter, Ignite UI for Angular, Infragistics, data source, Angular チャート, データ チャート, 高密度散布, インフラジスティックス, データソース
mentionedTypes: ['XamDataChart', 'PolarBase']
_language: ja
---

# Angular 散布図 - HD シリーズのサンプル データソース

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
