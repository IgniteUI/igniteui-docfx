---
title: Angular ファイナンシャル チャート | データ可視化ツール | カスタム インジケーター | インフラジスティックス
_description: 簡単な API を使用して財務データを可視化するには、ファイナンシャル チャート コンポーネントを使用します。詳細については、デモ、依存関係、使用方法、およびツールバーを参照してください。
_keywords: Angular charts, financial chart, Ignite UI for Angular, Infragistics, Angular チャート, ファイナンシャル チャート, インフラジスティックス
mentionedTypes: ['XamFinancialChart']
_language: ja
---

# Angular カスタム インジケーター

Angular Financial Chart コンポーネントでは、インジケーター ペインに表示するカスタム財務指標を定義できます。

## Angular カスタム インジケーターの例

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-custom-indicators-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-custom-indicators' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular カスタム インジケーターの例"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-custom-indicators-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">StackBlitz で表示
    </button>


</div>

<div class="divider--half"></div>

Angular Financial Chart コンポーネントでカスタム財務指標を有効にするには、`customIndicatorNames` プロパティに名前を追加し、`applyCustomIndicators` イベントで計算を実行します。

以下のコード例は、2 つのカスタム インジケーターを設定して計算する方法を紹介します。単純移動平均 (SMA) およびランダム値を表示するインジケーターを使用します。

```html
 <igx-financial-chart
    width="850px"
    height="600px"
    [dataSource]="data"
    (applyCustomIndicators)="applyCustomIndicators($event)"
    customIndicatorNames="Open, Open (SMA)">
 </igx-financial-chart>
```

```ts
    public applyCustomIndicators(event: { sender: any, args: IgxFinancialChartCustomIndicatorArgs }) {
        if (event.args.index === 0) {
            const info: IgxFinancialEventArgs = event.args.indicatorInfo;
            const ds = info.dataSource;
            const open = ds.openColumn;
            for (let i = 0; i < ds.indicatorColumn.length; i++) {
                ds.indicatorColumn[i] = open[i];
            }
        } else {
            const info: IgxFinancialEventArgs = event.args.indicatorInfo;
            const ds = info.dataSource;
            const close = ds.closeColumn;
            for (let i = 0; i < ds.indicatorColumn.length; i++) {
                let startIndex = i - 9;
                if (startIndex < 0) {
                    startIndex = 0;
                }
                const count = (i - startIndex) + 1;

                let sum = 0;
                for (let j = startIndex; j <= i; j++) {
                    sum += close[j];
                }
                ds.indicatorColumn[i] = sum / count;
            }
        }
    }
```
