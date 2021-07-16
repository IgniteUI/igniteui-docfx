---
title: Angular チャート アニメーション | データ可視化 | インフラジスティックス
_description: インフラジスティックスの Angular チャート アニメーション
_keywords: Angular Charts, Animations, Infragistics, Angular チャート, アニメーション, インフラジスティックス
mentionedTypes: ["CategoryChart"]
_language: ja
---

# Angular チャート アニメーション

アニメーションを使用すると、新しいデータ ソースを読み込むときにシリーズをイーズインできます。利用可能なアニメーションは、シリーズのタイプに基づきます。たとえば、縦棒シリーズは x 軸から上昇する描画アニメーションになります。折れ線シリーズは y 軸の原点から描画するアニメーションになります。

アニメーションは Ignite UI for Angular チャートで無効ですが、[`isTransitionInEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#istransitioninenabled) プロパティを true に設定することで有効にできます。そこから、[`transitionInDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#transitioninduration) プロパティを設定してアニメーションが完了するまでの時間を決定し、[`transitionInMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#transitioninmode) でアニメーションのタイプを決定できます。

## Angular チャート アニメーションの例

以下の例は、アニメーションをデフォルトの [`transitionInMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#transitioninmode) ("Auto") に設定した[折れ線チャート](../types/line-chart.md)を示しています。この例の一番上のドロップダウンとスライダーは、[`transitionInMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#transitioninmode) と [`transitionInDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#transitioninduration) をそれぞれ変更できるため、サポートされるさまざまなアニメーションが異なる速度でどのように見えるかを確認できます。

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-animations"
           alt="Angular 構成オプションの例"
           github-src="charts/category-chart/line-chart-with-animations">
</code-view>

<div class="divider--half"></div>

## その他のリソース

関連するチャートタイプの詳細については、以下のトピックを参照してください。

-   [チャート注釈](chart-annotations.md)
-   [チャート強調表示](chart-highlighting.md)
-   [チャート ツールチップ](chart-tooltips.md)

## API メンバー

以下は、上記のセクションで説明した API メンバーのリストです。

-   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)
-   [`isTransitionInEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#istransitioninenabled)
-   [`transitionInDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#transitioninduration)
-   [`transitionInMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#transitioninmode)
