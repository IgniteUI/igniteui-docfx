---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Data Chart Control, Angular Data Chart Example, Angular Data Chart Component, Angular Data Chart
_language: kr
---

## 분산 모양 시리즈의 샘플 데이터 소스

이 항목에서는 [분산 모양 시리즈](datachart_series_types_shape.md)의 데이터 소스를 구현하는 방법에 대한 예제를 제공합니다

```typescript
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
