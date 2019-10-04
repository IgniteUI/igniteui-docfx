---
제목: 데이터 차트 구성 요소 - 네이티브 Angular | Ignite UI for Angular
_description: 컴포지트 차트 뷰를 만들기 위해 동일한 플롯 영역에 여러 개의 시각적 요소 인스턴스를 표시하는 데이터 차트를 만듭니다.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Data Chart Control, Angular Data Chart Example, Angular Data Chart Component, Angular Data Chart
_language: kr
---

## 카테고리 시리즈의 샘플 데이터 소스

이 항목에서는 [카테고리 시리즈](data-chart-type-category-series.md)의 데이터 소스를 구현하는 방법에 대한 예제를 제공합니다

```ts
export class SampleCategoryData {

    public static create(): any[] {
        const data: any[] = [];
        // total olympic medals for top countries
        data.push({"Year": "1996", "USA": 148, "CHN": 110, "RUS": 95});
        data.push({"Year": "2000", "USA": 142, "CHN": 115, "RUS": 91});
        data.push({"Year": "2004", "USA": 134, "CHN": 121, "RUS": 86});
        data.push({"Year": "2008", "USA": 131, "CHN": 129, "RUS": 65});
        data.push({"Year": "2012", "USA": 135, "CHN": 115, "RUS": 77});
        data.push({"Year": "2016", "USA": 146, "CHN": 112, "RUS": 88});
        return data;
    }
}
```
