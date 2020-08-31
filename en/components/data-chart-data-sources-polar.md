---
title: Angular Data Chart | Data Visualization Tools | Data Source | Infragistics
_description: Use Infragistics' Angular charts control to create polar charts such as polar area, polar line, polar scatter and more. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, polar, Ignite UI for Angular, Infragistics, data source
mentionedTypes: ['XamDataChart']
---

# Angular Sample Data Source for Polar Series

This topic provides an example on how to implement data source for [Polar Series](data-chart-type-polar-series.md)

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
