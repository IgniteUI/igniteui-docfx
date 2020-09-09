---
title: Angular Data Chart | Data Visualization Tools | Data Source | Infragistics
_description: Use Infragistics' Angular charts control to create radial charts such as radial area, radial line, radial scatter and more. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, radial, Ignite UI for Angular, Infragistics, data source
mentionedTypes: ['XamDataChart']
---

# Angular Sample Data Source for Radial Series

This topic provides an example on how to implement data source for [Radial Series](data-chart-type-radial-series.md)

```ts
export class SampleRadialData {

    public static create(): any[] {
        const data: any[] = [];
        data.push( { "Spending": 20, "Budget": 60, "Department": "Admin" });
        data.push( { "Spending": 80, "Budget": 40, "Department": "Sales" });
        data.push( { "Spending": 30, "Budget": 60, "Department": "IT" });
        data.push( { "Spending": 80, "Budget": 40, "Department": "Marketing" });
        data.push( { "Spending": 40, "Budget": 60, "Department": "Research" });
        data.push( { "Spending": 60, "Budget": 20, "Department": "Support" });
        return data;
    }
}
```
