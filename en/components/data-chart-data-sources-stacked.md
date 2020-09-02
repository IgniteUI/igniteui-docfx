---
title: Angular Data Chart | Data Visualization Tools | Data Source | Infragistics
_description: Use Infragistics' Angular charts control to create stacked charts such as stacked bar, stacked area and more. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, stacked chart, Ignite UI for Angular, Infragistics, data source
mentionedTypes: ['XamDataChart']
---

# Angular Sample Data Source for Stacked Series

This topic provides an example on how to implement data source for Stacked Series

```ts
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
