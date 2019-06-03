---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Data Chart Control, Angular Data Chart Example, Angular Data Chart Component, Angular Data Chart
_language: kr
---

## 범위 시리즈의 샘플 데이터 소스

이 항목에서는 [범위 시리즈](datachart_series_types_range.md)의 데이터 소스를 구현하는 방법에 대한 예제를 제공합니다

```typescript
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
