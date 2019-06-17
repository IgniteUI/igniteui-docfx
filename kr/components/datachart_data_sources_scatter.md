---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Data Chart Control, Angular Data Chart Example, Angular Data Chart Component, Angular Data Chart
_language: kr
---

## 분산 XY 시리즈의 샘플 데이터 소스

이 항목에서는 [분산 XY 시리즈](datachart_series_types_range.md)의 데이터 소스를 구현하는 방법에 대한 예제를 제공합니다

```typescript
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
