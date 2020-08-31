---
title: Angular Data Chart | Data Visualization Tools | Data Source | Infragistics
_description: Use Infragistics' Angular charts control to create shape charts such as scatter polygon and scatter polyline. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, shape chart, Ignite UI for Angular, Infragistics, data source
mentionedTypes: ['XamDataChart']
---

# Angular Sample Data Source for Scatter Shape Series

This topic provides an example on how to implement data source for [Scatter Shape Series](data-chart-type-shape-series.md)

```ts
export class SampleShapeData {

    public static create(): any[] {
        const shapes = [
            { "Label": "Hallway",
              "Points": [[ // points must a nested arrays
                { x: 6, y: 0 },
                { x: 6, y: 7 },
                { x: 4, y: 7 },
                { x: 4, y: 0 },
                // last point does not have to match 1st point of the shape
                // because polygon chartType always closes a shape by connecting 1st and last point with a line
              ]]
            },
            { "Label": "Entrance",
              "Points": [[
                { x: 0, y: 5 },
                { x: 4, y: 5 },
                { x: 4, y: 7 },
                { x: 0, y: 7 } ]]
            },
            { "Label": "Guest Bedroom",
              "Points": [[{ x: 2, y: 10 }, { x: 7, y: 10 }, { x: 7, y: 7 }, { x: 2, y: 7 }], ] },
            { "Label": "Bath",
              "Points": [[{ x: 0, y: 10 }, { x: 2, y: 10 }, { x: 2, y: 7 }, { x: 0, y: 7 }], ] },
            { "Label": "Kitchen",
              "Points": [[{ x: 6, y: 7 }, { x: 10, y: 7 }, { x: 10, y: 4 }, { x: 6, y: 4 }], ] },
            { "Label": "Living Room",
              "Points": [[{ x: 6, y: 4 }, { x: 10, y: 4 }, { x: 10, y: 0 }, { x: 6, y: 0 }], ] },
            { "Label": "Master Bedroom",
              "Points": [[{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 5 }, { x: 0, y: 5 }], ] },
        ];
        return shapes;
    }
}
```
