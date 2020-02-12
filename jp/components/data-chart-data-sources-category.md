---
title: データ チャート | 可視化ツール | Ignite UI for Angular | インフラジスティックス | データ ソース
_description: 同じプロット領域に視覚要素の複数インスタンスを表示するデータ チャートを作成し、複合チャートビューを作成します。
_keywords: data chart, Ignite UI for Angular, Infragistics, データ チャート, インフラジスティックス
mentionedTypes: ['XamDataChart']
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
