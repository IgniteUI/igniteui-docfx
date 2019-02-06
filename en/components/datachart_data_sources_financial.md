---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart component is TODO.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Data Chart Control, Angular Data Chart Example, Angular Data Chart Component, Angular Data Chart
---

## Sample Data Source for Financial Series

This topic provides an example on how to implement data source for [Financial Series](datachart_series_types_financial.md)

```typescript
export class SampleFinancialData {

    public static create(): any[] {
        // initial values
        let v = 10000;
        let o = 500;
        let h = o + (Math.random() * 5);
        let l = o - (Math.random() * 5);
        let c = l + (Math.random() * (h - l));

        const items = 100;
        const end = new Date(2020, 11, 1);
        let time = this.addDays(end, -items);

        const data: any[] = [];
        for (let i = 0; i < items; i++) {
            const label = time.toDateString();
            // adding new data item
            data.push({"Date": time, "Label": label, "Close": c, "Open": o, "High": h, "Low": l, "Volume": v});
            // generating new values
            const mod = Math.random() - 0.4;
            o = o + (mod * 5 * 2);
            v = v + (mod * 5 * 100 );
            h = o + (Math.random() * 5);
            l = o - (Math.random() * 5);
            c = l + (Math.random() * (h - l));
            time = this.addDays(time, 1);
        }
        return data;
    }

    public static addDays(date: Date, days: number): Date {
        return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }
}
```
