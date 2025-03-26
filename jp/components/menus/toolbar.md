---
title: Angular Toolbar コンポーネント | Ignite UI for Angular
_description: Angular ツールバー コンポーネントを簡単に始める方法をご覧ください。データ チャートと互換性があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular ツールバー コンポーネント, Angular ツールバー コントロール
mentionedTypes: ["Toolbar", "ToolAction", "DomainChart", "CategoryChart", "XamDataChart", "TrendLineType"]
_language: ja
---

# Angular Toolbar (ツールバー) の概要

Angular ツールバー コンポーネントは、主にチャート コンポーネントで使用される UI 操作のコンパニオン コンテナーです。ツールバーは、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) または [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) コンポーネントにリンクされると、プロパティとツール項目のプリセットで動的に更新されます。プロジェクト用のカスタム ツールを作成して、エンド ユーザーが変更を提供できるようになり、無限のカスタマイズが可能になります。

## Angular ツールバーの例

<code-view style="height: 600px" alt="Angular ツールバーの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/toolbar/actions-built-in-category-chart"
                                                 github-src="charts/toolbar/actions-built-in-category-chart">
</code-view>


## 依存関係

<!-- Angular, WebComponents, React -->

Ignite UI for Angular のレイアウト、入力、チャート、コア パッケージをインストールします。

```cmd
npm install igniteui-angular-layouts
npm install igniteui-angular-inputs
npm install igniteui-angular-charts
npm install igniteui-angular-core
```

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) コンポーネントとその機能とともに [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) を使用する場合、次のモジュールが必要です。

```ts
import { IgxToolbarModule } from 'igniteui-angular-layouts';
import { IgxDataChartToolbarModule, IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxDataChartAnnotationModule, IgxDataChartInteractivityModule, IgxDataChartCategoryTrendLineModule  } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxToolbarModule,
        IgxDataChartToolbarModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartAnnotationModule,
        IgxDataChartInteractivityModule,
        IgxDataChartCategoryTrendLineModule
        // ...
    ]
})
export class AppModule {}
```

```ts
import { IgxToolbarModule } from 'igniteui-react-layouts';
import { IgrDataChartToolbarModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrDataChartCategoryTrendLineModule  } from 'igniteui-react-charts';

IgxToolbarModule.register();
IgrDataChartToolbarModule.register();
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartAnnotationModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartCategoryTrendLineModule.register();
```

<!-- end:Angular, WebComponents, React -->

## 使用方法

### ツール操作

以下は、ツールバーに追加できるさまざまな [`IgxToolActionComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html) 項目のリストです。

*   [`IgxToolActionButtonComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionbuttoncomponent.html)
*   [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html)
*   [`IgxToolActionIconButtonComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconbuttoncomponent.html)
*   [`IgxToolActionIconMenuComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconmenucomponent.html)
*   [`IgxToolActionLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html)
*   [`IgxToolActionNumberInputComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionnumberinputcomponent.html)
*   [`IgxToolActionRadioComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html)
*   [`IgxToolActionSubPanelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionsubpanelcomponent.html)

これらのツールはそれぞれ、マウスのクリックによってトリガーされる `OnCommand` イベントを公開します。注: [`IgxToolActionIconMenuComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconmenucomponent.html) は、[`IgxToolActionIconMenuComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconmenucomponent.html) 内にラップすることもできる他のツールのラッパーです。

[`IgxToolActionComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html) オブジェクトの [`overlayId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#overlayId)、[`beforeId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#beforeId)、および [`afterId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#afterId) プロパティを使用して、新規および既存のツールの位置を変更したり、非表示にマークしたりすることができます。ToolActions は [`visibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#visibility) プロパティも公開します。

次の例は、いくつかの機能を示しています。まず、**ZoomReset** や **AnalyzeMenu** メニュー ツール操作などの組み込みツールを非表示にするなど、[`IgxToolActionSubPanelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionsubpanelcomponent.html) でツールをグループ化できます。この例では、[`afterId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#afterId) プロパティを使用して **ZoomOut** に割り当てることで、**ZoomReset** ツール操作の新しいインスタンスが追加され、**ZoomMenu** 内に配置されます。また、ツールの [`isHighlighted`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#isHighlighted) プロパティによってもハイライト表示されます。これにより、新しいリセット ツールが **ZoomMenu** の下部にすぐに表示されます。

<code-view style="height: 600px" alt="Angular Toolbar の例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/toolbar/layout-actions-for-data-chart"
                                                 github-src="charts/toolbar/layout-actions-for-data-chart">
</code-view>


### Angular データ チャートの統合

Angular ツールバーには、`Target` プロパティが含まれています。これは、以下のコードに示すように、[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) などのコンポーネントをリンクするために使用されます。

```html
  <div class="legend">
    <igx-toolbar
      name="toolbar"
      [target]="chart"
      #toolbar>
    </igx-toolbar>
  </div>
  <div class="container fill">
    <igx-data-chart
    name="chart"
    #chart>
  </igx-data-chart>
```

[`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) が Toolbar にリンクされると、いくつかの既存の [`IgxToolActionComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html) 項目とメニューが使用可能になります。以下は、組み込みの Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) ツール操作とそれに関連付けられた [`overlayId`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#overlayId) のリストです。

ズーム操作

*   `ZoomReset`: チャート上で [`resetZoom`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#resetZoom) メソッドを呼び出し、ズーム レベルをデフォルトの位置にリセットする [`IgxToolActionLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html)。
*   `ZoomMenu`: チャートのズーム レベルを増減するためにチャート上で [`zoomIn`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#zoomIn) および [`zoomOut`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#zoomOut) メソッドを呼び出す 2 つの [`IgxToolActionLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html) 項目を公開する [`IgxToolActionIconMenuComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconmenucomponent.html)。

トレンド操作

*   `AnalyzeMenu`: チャートのさまざまなオプションを構成するためのいくつかのオプションを含む [`IgxToolActionIconMenuComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioniconmenucomponent.html)。
*   `AnalyzeHeader`: サブ セクションのヘッダー。
*   `LinesMenu`: チャート上で水平破線を表示するためのさまざまなツールが含まれるサブ メニュー。
    *   `LinesHeader`: 次の 3 つのツールのサブメニュー セクション ヘッダー:
        *   `MaxValue`: シリーズの最大値で yAxis に沿って水平破線を表示する [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html)。
        *   `MinValue`: シリーズの最小値で yAxis に沿って水平破線を表示する [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html)。
        *   `Average`:  シリーズの平均値で yAxis に沿って水平破線を表示する [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html)。
*   `TrendsMenu`: さまざまな近似曲線を [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) プロット領域に適用するためのツールを含むサブ メニュー。
    *   `TrendsHeader`: 次の 3 つのツールのサブメニュー セクション ヘッダー:
        *   **Exponential**: チャート内の各シリーズの [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineType) を **ExponentialFit** に設定する [`IgxToolActionRadioComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html)。
        *   **Linear**: チャート内の各シリーズの [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineType) を **LinearFit** に設定する [`IgxToolActionRadioComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html)。
        *   **Logarithmic**: チャート内の各シリーズの [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineType) を **LogarithmicFit** に設定する [`IgxToolActionRadioComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionradiocomponent.html)。
*   `HelpersHeader`: サブ セクションのヘッダー。
*   `SeriesAvg`: `Average` タイプの [`ValueLayerValueMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html) を使用して、チャートのシリーズ コレクションに [`IgxValueLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html) を追加または削除する [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html)。
*   `ValueLabelsMenu`: [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) のプロット領域に注釈を表示するためのさまざまなツールを含むサブ メニュー。
    *   `ValueLabelsHeader`: 次のツールのサブ メニュー セクション ヘッダー:
        *   `ShowValueLabels`: [`IgxCalloutLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html) を使用してデータ ポイント値を切り替える [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html)。
        *   `ShowLastValueLabel`: [`IgxFinalValueLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinalvaluelayercomponent.html) を使用して最終値軸の注釈を切り替える [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html)。
*   `ShowCrosshairs`: チャートの [`crosshairsDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#crosshairsDisplayMode) プロパティを介してマウスオーバー十字線の注釈を切り替える [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html)。
*   `ShowGridlines`: X-Axis に `MajorStroke` を適用することで追加のグリッド線を切り替える [`IgxToolActionCheckboxComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncheckboxcomponent.html)。

画像に保存アクション

*   `CopyAsImage`: チャートをクリップボードにコピーするオプションを公開する [`IgxToolActionLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionlabelcomponent.html)。
*   `CopyHeader`: サブ セクションのヘッダー。

### SVG アイコン

ツールを手動で追加する場合、`RenderIconFromText` メソッドを使用してアイコンを割り当てることができます。このメソッドには 3 つのパラメーターを渡す必要があります。1 つ目は、ツールで定義されたアイコン コレクション名です (例: [`iconCollectionName`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#iconCollectionName))。2 つ目は、ツールで定義されたアイコンの名前 (例: [`iconName`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html#iconName)) で、その後に SVG 文字列を追加します。

### データ URL アイコン

svg を追加するのと同様に、`RegisterIconFromDataURL` を介して URL からアイコン画像を追加することもできます。メソッドの 3 番目のパラメーターは、文字列 URL を入力するために使用されます。

次のスニペットは、アイコンを追加する両方の方法を示しています。

```html
<igx-tool-action-label
    title="Custom Icon"
    iconName="CustomIcon"
    iconCollectionName="CustomCollection">
</igx-tool-action-label>
```

```ts
public toolbarCustomIconOnViewInit(): void {

  const icon = '<svg width="28px" height="28px" stroke="none" viewBox="0 0 3.5 3.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M0.436 0.178a0.073 0.073 0 0 0 -0.062 0.036L0.01 0.846a0.073 0.073 0 0 0 0.063 0.109h0.729a0.073 0.073 0 0 0 0.063 -0.109L0.501 0.214a0.073 0.073 0 0 0 -0.064 -0.036zm0.001 0.219 0.238 0.413H0.199zM1.4 0.507v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245zM0.073 1.388A0.073 0.073 0 0 0 0 1.461v0.583a0.073 0.073 0 0 0 0.073 0.073h0.729A0.073 0.073 0 0 0 0.875 2.045V1.461a0.073 0.073 0 0 0 -0.073 -0.073zm0.073 0.146h0.583v0.438H0.146zM1.4 1.674v0.245h0.945v-0.245zm1.19 0v0.245h0.91v-0.245zM0.438 2.447c-0.241 0 -0.438 0.197 -0.438 0.438 0 0.241 0.197 0.438 0.438 0.438s0.438 -0.197 0.438 -0.438c0 -0.241 -0.197 -0.438 -0.438 -0.438zm0 0.146a0.291 0.291 0 0 1 0.292 0.292 0.291 0.291 0 0 1 -0.292 0.292 0.291 0.291 0 0 1 -0.292 -0.292A0.291 0.291 0 0 1 0.438 2.593zM1.4 2.842v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245z" fill="#000000" fill-rule="evenodd"/></svg>';
  
  this.toolbar.registerIconFromText("CustomCollection", "CustomIcon", icon);
}
```

```ts
public toolbarCustomIconOnViewInit(): void {

  toolbar.registerIconFromDataURL("CustomCollection", "CustomIcon", "https://www.svgrepo.com/show/678/calculator.svg");

}
```

```ts
public toolbarCustomIconOnViewInit(): void {

  const icon = '<svg width="28px" height="28px" stroke="none" viewBox="0 0 3.5 3.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--gis" preserveAspectRatio="xMidYMid meet"><path d="M0.436 0.178a0.073 0.073 0 0 0 -0.062 0.036L0.01 0.846a0.073 0.073 0 0 0 0.063 0.109h0.729a0.073 0.073 0 0 0 0.063 -0.109L0.501 0.214a0.073 0.073 0 0 0 -0.064 -0.036zm0.001 0.219 0.238 0.413H0.199zM1.4 0.507v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245zM0.073 1.388A0.073 0.073 0 0 0 0 1.461v0.583a0.073 0.073 0 0 0 0.073 0.073h0.729A0.073 0.073 0 0 0 0.875 2.045V1.461a0.073 0.073 0 0 0 -0.073 -0.073zm0.073 0.146h0.583v0.438H0.146zM1.4 1.674v0.245h0.945v-0.245zm1.19 0v0.245h0.91v-0.245zM0.438 2.447c-0.241 0 -0.438 0.197 -0.438 0.438 0 0.241 0.197 0.438 0.438 0.438s0.438 -0.197 0.438 -0.438c0 -0.241 -0.197 -0.438 -0.438 -0.438zm0 0.146a0.291 0.291 0 0 1 0.292 0.292 0.291 0.291 0 0 1 -0.292 0.292 0.291 0.291 0 0 1 -0.292 -0.292A0.291 0.291 0 0 1 0.438 2.593zM1.4 2.842v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245z" fill="#000000" fill-rule="evenodd"/></svg>';

  this.toolbar.registerIconFromText("CustomCollection", "CustomIcon", icon);

}
```

```ts
public toolbarCustomIconOnViewInit(): void {

  toolbar.registerIconFromDataURL("CustomCollection", "CustomIcon", "https://www.svgrepo.com/show/678/calculator.svg");
  
}
```

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var toolbar = this.toolbar;

        if (firstRender) {
            this.ToolbarCustomIconOnViewInit();
        }
    }

    private IgbToolbar toolbar;

    public void ToolbarCustomIconOnViewInit()
    {
    	this.toolbar.EnsureReady().ContinueWith(new Action<Task>((e) =>
    	{
            this.toolbar.RegisterIconFromDataURLAsync("CustomCollection", "CustomIcon", "https://www.svgrepo.com/show/678/calculator.svg");
    	}));
    }

}

````

```tsx
<IgrToolbar orientation="Vertical" />
````

### 垂直方向

デフォルトでは、Angular ツールバーは水平に表示されますが、[`orientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html#orientation) プロパティを設定することで垂直に表示することもできます。

```html
<igx-toolbar orientation="Vertical" />
```

次の例は、Angular ツールバーの垂直方向を示しています。

<code-view style="height: 600px" alt="Angular 垂直方向"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/toolbar/layout-in-vertical-orientation"
                                                 github-src="charts/toolbar/layout-in-vertical-orientation">
</code-view>


### Color Editor (カラー エディター)

Angular Toolbar にカスタム カラー エディター ツールを追加できます。このツールは、コマンド イベントと連携して、アプリケーションにカスタム スタイルを適用することもできます。

```html
<igx-toolbar
  name="toolbar"
  #toolbar>
      <igx-tool-action-color-editor
      title="Series Brush"
      name="colorEditorTool"
      #colorEditorTool>
      </igx-tool-action-color-editor>
</igx-toolbar>
```

```ts
<igc-toolbar
  name="toolbar"
  id="toolbar">
      <igc-tool-action-color-editor
      title="Series Brush Color"
      name="colorEditorTool"
      id="colorEditorTool">
      </igc-tool-action-color-editor>
</igc-toolbar>
```

次の例は、カラー エディター ツールを使用して Angular Data Chart シリーズ ブラシのスタイルを設定する方法を示しています。

<code-view style="height: 600px" alt="Angular Color Editor のサポート"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/toolbar/color-editor-support"
                                                 github-src="charts/toolbar/color-editor-support">
</code-view>


<!-- ## スタイル設定 / テーマ設定

アイコン コンポーネントは、`BaseTheme` プロパティを `Toolbar` に直接使用してスタイルを設定できます。

```html
<igx-toolbar baseTheme="SlingshotDark" />
```

```html
<igc-toolbar base-theme="SlingshotDark" />
```

```razor
<IgbToolbar BaseTheme="BaseControlTheme.SlingshotDark" />
```

```tsx
<IgrToolbar baseTheme="SlingshotDark" />
```

<!-- 次の例は、適用できるさまざまなテーマ オプションを示しています。
`sample="/charts/toolbar/theming", height="600", alt="Angular Toolbar スタイル設定/テーマ設定"` -->

## API リファレンス

*   [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html)
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)

## その他のリソース

*   [Ignite UI for Angular **フォーラム (英語)**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
*   [Ignite UI for Angular **GitHub (英語)**](https://github.com/IgniteUI/igniteui-angular)
