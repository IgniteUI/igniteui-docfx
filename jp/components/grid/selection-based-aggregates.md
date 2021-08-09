---
title: Angular 選択に基づいたデータ集計 | 選択 | Ignite UI for Angular | インフラジスティックス
_description: 機能豊かな API を使用して Ignite Angular Material テーブルでグリッド内の選択したデータを集計する方法。また、グリッドの仮想化データでコンテンツの即時集計も可能。
_keywords: データ集計, 選択, ignite ui for angular, インフラジスティックス
---

# 選択に基づいた集計

以下のサンプルでは、グリッドのフッターで選択した値に基づいて、カスタム集計関数と共に集計を表示する際の複数選択の動作を確認できます。

## トピックの概要

選択に基づいた集計機能を実現するには、[`グリッド選択`]({environment:angularApiUrl}/components/grid/selection.html)機能と[`グリッド集計`]({environment:angularApiUrl}/components/grid/summaries.html)を使用できます。    
集計では、列のデータ タイプとニーズに応じて、[`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html)、[`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)、[`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) のいずれかの基本クラスを拡張することにより、基本的な集計機能をカスタマイズできます。  

## 選択
選択したグリッド範囲のデータの操作を開始するには、グリッド選択の変更を通知するイベントにサブスクライブする必要があります。これは、[`selected`]({environment:angularApiUrl}/classes/igxgridcomponent.html#selected) と [`rangeSelected`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rangeSelected) イベントにサブスクライブすることで実行できます。選択機能では、単一のセル選択とセル範囲の選択が区別されるため、両方にバインドする必要があります。     

イベント サブスクリプション ロジックでは、グリッドの [`getSelectedData`]({environment:angularApiUrl}/classes/igxgridcomponent.html#getSelectedData) 関数を使用して選択したデータを抽出し、選択したデータをカスタム集計オペランドに渡すことができます。


## まとめ
カスタム集計クラス内では、グリッドのデータ タイプを差別化する必要があります。たとえば、以下のシナリオでは、4 つの異なる列があり、それぞれのデータ タイプがカスタム集計に適しています。それらは、Unit Price、Units in Stock、Discontinued status、Order Date です。   
`IgxSummaryOperand` の派生クラスの `operate` メソッドでデータを処理します。データ タイプに基づいて、さまざまなカテゴリにデータを入れていきます。

```typescript
const numberData = data.filter(rec => typeof rec === "number");
const boolData = data.filter(rec => typeof rec === "boolean");
const dates = data.filter(rec => isDate(rec));
```   

> [!NOTE]
> `isDate` はカスタム関数であることに注意してください。     

データ タイプをグループ化した後、集計を開始できます。そのため、`IgxNumberSummaryOperand` および `IgxDateSummaryOperand` の既に公開されているメソッドを使用できます。 
その後、集計データを同じ配列に配置する必要があり、テンプレートに返されます。  
データを可視化には、`<igx-grid-footer>`を使用することができ、`custom-summaries` クラスと組み合わせて集計を表示します。


### デモ
選択を変更して、現在選択されている範囲の概要を表示します。     


<code-view style="height: 560px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-selection-custom-summaries" >
</code-view>


## API リファレンス

* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)    
* [IgxGridCell API]({environment:angularApiUrl}/classes/igxgridcell.html)    
* [IgxGridComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)     

## その他のリソース
<div class="divider--half"></div>    

* [Grid の概要](grid.md)    
* [SelectionService]({environment:angularApiUrl}/classes/igxgridselectionservice.html)
* [行選択](row-selection.md)   
* [セル選択](cell-selection.md)    
* [IgxNumberSummaryOperand]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)
* [IgxDateSummaryOperand]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)
* [集計](summaries.md)    
* [ページング](paging.md)    

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。    

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)    
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)   
