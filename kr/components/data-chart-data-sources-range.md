---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: 컴포지트 차트 뷰를 만들기 위해 동일한 플롯 영역에 여러 개의 시각적 요소 인스턴스를 표시하는 데이터 차트를 만듭니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Data Chart Control, Angular Data Chart Example, Angular Data Chart Component, Angular Data Chart
_language: kr
---

# Angular 범위 시리즈의 샘플 데이터 소스

이 항목에서는 [범위 시리즈](data-chart-type-range-series.md)의 데이터 소스를 구현하는 방법에 대한 예제를 제공합니다

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
