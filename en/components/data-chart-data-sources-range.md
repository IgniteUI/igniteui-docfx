---
title: Angular Data Chart | Data Visualization Tools | Data Source | Infragistics
_description: Use Infragistics' Angular charts control to create range charts such as range area, range column and more. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, range chart, Ignite UI for Angular, Infragistics, data source
mentionedTypes: ['XamDataChart']
---

# Angular Sample Data Source for Range Series

This topic provides an example on how to implement data source for [Range Series](data-chart-type-range-series.md)

```ts
export class SampleRangeData {

    public static create(): any[] {
        let temperature = 25;
        const data: any[] = [];
        for (let i = 2000; i < 2025; i++) {
            temperature += (Math.random() - 0.5) * 0.5;
            const high = this.round(temperature + (Math.random() * 2));
            const low  = this.round(temperature - (Math.random() * 2));
            data.push({"High": high, "Low": low, "Index": i});
        }
        return data;
    }
    public static round(value: number) {
        return Math.round(value * 10) / 10;
    }
}
```
