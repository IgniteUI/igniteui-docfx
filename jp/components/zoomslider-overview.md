---
title: Angular ズームスライダー | データ可視化ツール | ナビゲーション | ズーム | データ チャート | データ バインディング | インフラジスティックス
_description: インフラジスティックスの Angular ズームスライダー コントロールを使用して、最小値と最大値を表す 2 つのハンドルのデータ サブセットを簡単に表示します。Ignite UI for Angular ズームスライダーでデータの可視化を向上させます。
_keywords: zoom slider, Ignite UI for Angular, Infragistics, data chart, ズームスライダー, インフラジスティックス, データ チャート
mentionedTypes: ["ZoomSlider", "XamDataChart"]
_language: ja
---

# Angular ズーム スライダーの概要

Angular ZoomSlider コントロールは、範囲対応コントロールにズーム機能を提供します。ZoomSlider には、水平スクロールバー、全範囲の縮小表示、サイズ変更可能なズーム範囲ウィンドウの機能があります。ZoomSlider は、スタンド アロン コントロールとして機能できません。または、DataChart や CategoryChart などの範囲ベースのコントロールの拡張機能として動作します。

## Angular ズーム スライダーの例

以下のサンプルは、[`IgxZoomSliderComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxzoomslidercomponent.html) を使用して [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) のコンテンツをナビゲートする方法を示しています。

<code-view style="height: 600px" alt="Angular ズーム スライダーの例"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/zoomslider/overview"
                                                 github-src="charts/zoomslider/overview">
</code-view>


<div class="divider--half"></div>

## 使用方法

| 機能名|説明 |
| --------------------|----------------------- |
| スクロールバーのナビゲーション|ZoomSlider スクロールバーの組み込み機能を使用して、スケールを変更してデータ範囲をスクロールできます。 |
| パンとズーム|サムパッドの端をドラッグして表示スケールを調節し、現在の表示範囲を広げる (ズーム アウト)、または狭くする (ズーム イン) ことができます。 |
| 複数のユーザー インタラクション オプション|マウスによるすべてのインタラクションは、タッチ操作 (ほとんどはキーボードを介した操作) でもサポートされます。詳細は、ユーザー インタラクションと操作性を参照してください。 |
| タッチ サポート|タッチ対応デバイスでは、ZoomSlider のすべての機能を使用できます。すべてのマウス操作は、タッチ環境でもサポートされます。 |
| 拡張性|ZoomSlider コントロールは、追加設定なしで DataChart コントロール をサポートします。 |
| 構成可能なズーム範囲ウィンドウ|ズーム範囲ウィンドウの初期幅、初期位置、最小サイズは、構成可能です。 |

<!-- Angular, React, WebComponents -->

## 依存関係

Angular chart コンポーネントをインストールするときに core パッケージもインストールする必要があります。

```cmd
npm install --save igniteui-angular-core
npm install --save igniteui-angular-charts
```

<!-- end: Angular, React, WebComponents -->

## モジュールの要件

[`IgxZoomSliderComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxzoomslidercomponent.html) を作成するには、以下のモジュールが必要です。

```ts
import { IgxZoomSliderModule } from 'igniteui-angular-charts';
import { IgxZoomSliderComponent } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxZoomSliderModule,
        // ...
    ]
})
export class AppModule {}
```

## コード スニペット

以下のコードは、ZoomSlider を設定する方法を示します。

```html
<igx-zoom-slider
  width="100%"
  height="150px">
</igx-zoom-slider>
```

<div class="divider--half"></div>

## その他のリソース

チャートの詳細については、[グラフの機能](charts/chart-features.md)トピックを参照してください。

## API リファレンス

以下は上記のセクションで説明した API メンバーのリストです。

*   [`IgxZoomSliderComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxzoomslidercomponent.html)
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
