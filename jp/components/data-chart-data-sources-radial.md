---
title: データ チャート | 可視化ツール | Ignite UI for Angular | インフラジスティックス | データ ソース
_description: 同じプロット領域に視覚要素の複数インスタンスを表示するデータ チャートを作成し、複合チャートビューを作成します。
_keywords: data chart, Ignite UI for Angular, Infragistics, データ チャート, インフラジスティックス
mentionedTypes: ['XamDataChart']
_language: ja
---

## ラジアル シリーズのサンプル データソース

このトピックでは、[ラジアル シリーズ](data-chart-type-radial-series.md) のデータソースを実装する方法の例を示します。

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
