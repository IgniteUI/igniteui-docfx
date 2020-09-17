---
title: Angular データ チャート | データ可視化ツール | データソース | インフラジスティックス
_description: ンフラジスティックスの Angular チャート コントロールを使用して、ラジアル領域、ラジアル折れ線、ラジアル散布などのラジアル チャートを作成します。Ignite UI for Angular グラフ タイプについて説明します。
_keywords: Angular charts, data chart, radial, Ignite UI for Angular, Infragistics, data source, Angular チャート, データ チャート, ラジアル, インフラジスティックス, データソース
mentionedTypes: ['XamDataChart']
_language: ja
---

# Angular ラジアル シリーズのサンプル データソース

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
