---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Data Chart Control, Angular Data Chart Example, Angular Data Chart Component, Angular Data Chart
---

## Sample Data Source for Stacked Series

This topic provides an example on how to implement data source for Stacked Series

```typescript
export class SampleCategoryItem  {
    public Year?: string;
    public USA?: number;
    public RUS?: number;
    public CHN?: number;

    constructor(year: string, usa: number, chn: number, rus: number) {
        this.Year = year;
        this.USA = usa;
        this.RUS = chn;
        this.CHN = rus;
    }
}

export class SampleCategoryData {
    public static create(): SampleCategoryItem[] {
        const data: SampleCategoryItem[] = [];
        // total olympic medals for top countries: USA, CHN, RUS
        data.push(new SampleCategoryItem("1996", 148, 110, 95));
        data.push(new SampleCategoryItem("2000", 142, 115, 91));
        data.push(new SampleCategoryItem("2004", 134, 121, 86));
        data.push(new SampleCategoryItem("2008", 131, 129, 65));
        data.push(new SampleCategoryItem("2012", 135, 115, 77));
        data.push(new SampleCategoryItem("2016", 146, 112, 88));
        return data;
    }
}
```
