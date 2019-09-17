---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Data Source
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'PolarBase']
---

## Sample Data Source for Scatter HD Series

This topic provides an example on how to implement data source for [Scatter HD Series](data-chart-type-polar-series.md)

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
