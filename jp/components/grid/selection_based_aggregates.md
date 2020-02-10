---
title: Angular 選択に基づいたデータ集計 | 選択 | Ignite UI for Angular | インフラジスティックス
_description: 機能豊かな API を使用して Ignite Angular Material テーブルでグリッド内の選択したデータを集計する方法。また、グリッドの仮想化データでコンテンツの即時集計も可能。
_keywords: データ集計, 選択, ignite ui for angular, インフラジスティックス
---


### 選択に基づいた集計

以下のサンプルでは、グリッドのフッターで選択した値に基づいて、カスタム集計関数と共に集計を表示する際の複数選択の動作を確認できます。

#### 概要

選択に基づいた集計機能を実現するには、[`グリッド選択`]({environment:angularApiUrl}/components/grid/selection.html)機能と[`グリッド集計`]({environment:angularApiUrl}/components/grid/summaries.html)を使用できます。    
集計では、列のデータ タイプとニーズに応じて、[`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html)、 [`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)、 [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html) のいずれかの基本クラスを拡張することにより、基本的な集計機能をカスタマイズできます。  

#### 選択
選択したグリッド範囲のデータの操作を開始するには、グリッド選択の変更を通知するイベントにサブスクライブする必要があります。これは、[`onSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onrangeselection) と [`onRangeSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onselection) イベントにサブスクライブすることで実行できます。選択機能では、単一のセル選択とセル範囲の選択が区別されるため、両方にバインドする必要があります。     

イベント サブスクリプション ロジックでは、グリッドの [`getSelectedData`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onrangeselection) 関数を使用して選択したデータを抽出し、選択したデータをカスタム集計オペランドに渡すことができます。


#### まとめ
カスタム集計クラス内では、グリッドのデータ タイプを差別化する必要があります。たとえば、以下のシナリオでは、4 つの異なる列があり、それぞれのデータ タイプがカスタム集計に適しています。それらは、Unit Price、Units in Stock、 Discontinued status、Order Date です。   
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


#### デモ
選択を変更して、現在選択されている範囲の概要を表示します。     

<div class="sample-container loading" style="height: 560px;">
    <iframe id="grid-selection-custom-summaries" data-src='{environment:demosBaseUrl}/grid/grid-selection-custom-summaries' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-custom-summaries" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

### API リファレンス

* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)    
* [IgxGridCellComponent API]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)    
* [IgxGridComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)     

### その他のリソース
<div class="divider--half"></div>    

* [Grid の概要](grid.md)    
* [SelectionService]({environment:angularApiUrl}/classes/igxgridselectionservice.html)
* [行選択](row_selection.md)   
* [セル選択](cell_selection.md)    
* [IgxNumberSummaryOperand]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)
* [IgxDateSummaryOperand]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)
* [集計](summaries.md)    
* [ページング](paging.md)      

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。    

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)    
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)   
