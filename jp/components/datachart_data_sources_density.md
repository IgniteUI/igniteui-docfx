---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Data Chart Control, Angular Data Chart Example, Angular Data Chart Component, Angular Data Chart
_language: ja
---

## Sample Data Source for Scatter HD Series

This topic provides an example on how to implement data source for [Scatter HD Series](datachart_series_types_polar.md)

```typescript
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
