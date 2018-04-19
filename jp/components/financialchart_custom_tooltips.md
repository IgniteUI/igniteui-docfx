---
title: カスタム ツールチップ
_description: Ignite UI for Angular Financial Chart コンポーネントは、財務データを表示するタッチ対応、高いパフォーマンス、軽量なチャート コントロールです。
_keywords: Ignite UI for Angular, データ ビジュアライゼーション, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Chart コンポーネント, Angular Financial Chart コンポーネント, Angular Chart コントロール, Angular Financial Chart コントロール
_language: ja
---
## カスタム ツールチップ

igxFinancialChart は、各シリーズ タイプにデフォルト ツールチップを提供します。デフォルト ツールチップは特定のシリーズ項目に関連するすべての情報を表示します。これはシリーズ タイトル、データ値、および軸値を含みます。シリーズのスタイルと一致します。デフォルト ツールチップのコンテンツおよびルック アンド フィールを変更するためにカスタム ツールチップを構成できます。

### カスタム ツールチップ デモ

<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-custom-tooltips-iframe" src='{environment:demosBaseUrl}/financial-chart-custom-tooltips' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="financial-chart-custom-tooltips-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く
    </button>
</div>

<div class="divider--half"></div>

ツールチップ コンテンツは、以下のコードのように、ツールチップのためのテンプレートを作成してカスタマイズ化されます。

```html
<ng-template let-series="series" let-item="item" #valueTooltip> 
    <div> 
        <span [style.color]="series.actualBrush">{{series.title}}</span> 
        <span> stock opened on {{item.time | date}} with a value of ${{item.open | number}} and closed with a value of ${{item.close | number}}.</span> 
    </div> 
</ng-template> 


<igx-financial-chart 
    [dataSource]="data"
    width="850px"
    height="600px"
    [tooltipTemplate]="valueTooltip" > 
</igx-financial-chart> 
```
