---
title: Data Chart コンポーネント - ネイティブ Angular|Ignite UI for Angular
_description: Ignite UI for Angular Data Chart は、軸、マーカー、凡例、および注釈レイヤーのモジュール設計を提供するチャート コンポーネントです。チャート機能は、複合チャート ビューを作成するために同じチャート領域でのビジュアル要素の複数のインスタンスを利用できます。
_keywords: Ignite UI for Angular, Angular, Native Angular コンポーネント Suite, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント, ネイティブ Angular コンポーネント Library, Angular Chart, Angular Data Chart コントロール, Angular Data Chart Example, Angular Data Chart コンポーネント, Angular Data Chart
_language: ja
---

## カテゴリ シリーズのサンプル データソース

このトピックでは、[カテゴリ シリーズ](data-chart-type-category-series.md) のデータソースを実装する方法の例を示します。

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
