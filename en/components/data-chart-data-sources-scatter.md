---
title: Angular Data Chart | Data Visualization Tools | Data Source | Infragistics
_description: Use Infragistics' Angular charts control to create scatter charts such as scatter area, scatter bubble, scatter contour and more. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, scatter chart, Ignite UI for Angular, Infragistics, data source
mentionedTypes: ['XamDataChart']
---

# Angular Sample Data Source for Scatter XY Series

This topic provides an example on how to implement data source for  [Scatter XY Series](data-chart-type-range-series.md)

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
