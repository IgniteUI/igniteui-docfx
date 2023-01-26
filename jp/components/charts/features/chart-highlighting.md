---
title: Angular チャート強調表示 | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular チャート強調表示
_keywords: Angular Charts, Highlighting, Infragistics, Angular チャート, 強調表示, インフラジスティックス
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
_language: ja
---

# Angular チャート強調表示

すべての Angular チャートは、エンド ユーザーがプロット領域に描画されたデータ項目の上にマウス カーソルを置いたときに、線、列、マーカーなどのビジュアルの強調表示をサポートします。強調表示は、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)、[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)、および [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールによってサポートされており、強調表示機能を使用するための同じ API を備えています。

## Angular チャート強調表示の例

以下の例は、Angular チャートで使用できるさまざまな強調表示オプションを示しています。チェックボックスをクリックして強調表示タイプを有効にします。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-highlighting"
           alt="Angular チャート強調表示の例"
           github-src="charts/category-chart/column-chart-with-highlighting">
</code-view>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
      <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/category-chart/column-chart-with-highlighting?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/app.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Code Sandbox" src="https://static.infragistics.com/xplatform/images/browsers/open-sandbox.png"/>
        </a>
        <a target="_blank" href="https://stackblitz.com/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/category-chart/column-chart-with-highlighting?file=src%2Fapp.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Stackblitz" src="https://static.infragistics.com/xplatform/images/browsers/open-stackblitz.png"/>
        </a>
    </body>
</html>

<div class="divider--half"></div>

# Angular チャートの強調表示モードと動作

すべての Angular チャートは、さまざまな強調表示オプションをサポートしています。[`highlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#highlightingmode) は、プロット領域に描画されたシリーズ/データ項目にマウスを合わせたときに明るくまたはフェードするように設定できます。[`highlightingBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#highlightingbehavior) は、強調表示の効果をトリガーするために、直接または最も近いデータ項目に設定できます。強調表示のモードと動作は、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)、[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)、および [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでサポートされており、強調表示機能を使用するための同じ API を備えています。

# Angular チャート凡例の強調表示

すべての Angular チャートは、凡例の強調表示をサポートしています。[`legendHighlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#legendhighlightingmode) を有効にすると、マウスが凡例マーカー項目にカーソルを合わせると、描画されたシリーズがプロット領域で強調表示されます。凡例の強調表示は、[`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)、[`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)、および [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) コントロールでサポートされており、強調表示機能を使用するための同じ API を備えています。

## 強調表示レイヤー

Ignite UI for Angular [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) は、データ項目にカーソルを合わせると 3 種類の強調表示を有効にできます。

1.  シリーズ ハイライトは、ポインターがデータ ポイント上ある場合に、マーカーまたは列で表される単一のデータ ポイントをハイライトします。これは、[`isSeriesHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#isserieshighlightingenabled) プロパティを true に設定することで有効になります。

2.  項目ハイライトは、その位置に縞模様の図形を描画したりマーカーを描画したりすることでシリーズの項目を強調表示します。これは、[`isItemHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#isitemhighlightingenabled) プロパティを true に設定することで有効になります。

3.  カテゴリ ハイライトはすべてのカテゴリ軸を対象にします。カーソル位置に最も近い軸領域を照らす図形を描画します。これは、[`isCategoryHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#iscategoryhighlightingenabled) プロパティを true に設定することで有効になります。

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

-   [チャート アニメーション](chart-animations.md)
-   [チャート注釈](chart-annotations.md)
-   [チャート ツールチップ](chart-tooltips.md)

## API リファレンス

以下は、上記のセクションで説明した API メンバーのリストです。

-   [`highlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#highlightingmode)
-   [`highlightingBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#highlightingbehavior)
-   `LegendHighlightingBehavior`
-   [`isCategoryHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#iscategoryhighlightingenabled)
-   [`isItemHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#isitemhighlightingenabled)
-   [`isSeriesHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#isserieshighlightingenabled)
-   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)
-   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
-   [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)
