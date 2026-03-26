---
title: Angular の新機能 | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular の新機能についての説明。
_keywords: 新機能, Ignite UI for Angular, インフラジスティックス
_language: ja
---

# Ignite UI for Angular の新機能

このトピックでは、Ignite UI for Angular の重大な変更と古いコードを最新の API に更新する方法について説明します。

## チャート機能

このリリースでは、Data Chart、Category Chart、Financial Chart などのすべてのチャート コンポーネントに対して、新しく改善されたビジュアル デザインと構成オプションがいくつか導入されています。

### チャートのデフォルト デザインの変更

- すべてのチャートのシリーズ / マーカーに対応する新しいカラー パレット

例:

| <img class="responsive-img" src="../images/chartDefaults1.png"  alt="Chart Defaults 1" /> | <img class="responsive-img" src="../images/chartDefaults2.png" alt="Chart Defaults 2" /> |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| <img class="responsive-img" src="../images/chartDefaults3.png" alt="Chart Defaults 3" /> | <img class="responsive-img" src="../images/chartDefaults4.png" alt="Chart Defaults 4" /> |

<div class="divider--half"></div>

- Bar/Column/Waterfall シリーズを角丸から四角い角に変更
- Scatter High Density シリーズの最小値/最大値の密度 (headt) プロパティの色を変更
- Financial/Waterfall シリーズの負の塗りつぶしビジュアルの色を変更
- マーカーの太さを 1px から 2px に変更
- PointSeries、BubbleSeries、ScatterSeries、PolarScatterSeries のマーカーの塗りつぶしをマーカーのアウトラインと一致するように変更
  - `MarkerFillMode` プロパティを Normal に設定することでこの変更を元に戻せます。
- TimeXAxis および OrdinalTimeXAxis のラベリングを圧縮
- 新しいマーカー プロパティ:
  - `MarkerFillMode` - 'MatchMarkerOutline' に設定するとマーカーがアウトラインに依存するようになります。
  - `MarkerFillOpacity` - 0 から 1 の値を設定できます。
  - `MarkerOutlineMode` - 'MatchMarkerBrush' に設定するとマーカーのアウトラインが塗りつぶしのブラシの色に依存するようになります。
- 新しいシリーズ `OutlineMode` プロパティ:
  - シリーズ アウトラインの表示を切り替えるために設定できます。Data Chart の場合、プロパティはシリーズ上にあります。
- 新しいプロット エリアの余白プロパティ:
  - `PlotAreaMarginLeft`
  - `PlotAreaMarginTop`
  - `PlotAreaMarginRight`
  - `PlotAreaMarginBottom`
  - [`ComputedPlotAreaMarginMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/computedplotareamarginmode.html)
  - プロット エリアの余白プロパティは、チャートがデフォルトのズーム レベルにある場合にビューポートに導入されるブリード オーバー領域を定義します。一般的なユース ケースは、軸と最初/最後のデータ ポイントの間にスペースを確保することです。以下にリストされている [`ComputedPlotAreaMarginMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/computedplotareamarginmode.html) は、マーカーが有効な場合に自動的に余白を設定します。その他は `Double` を指定して太さを表します。PlotAreaMarginLeft などはチャートの 4 辺すべてのスペースを調整します。
- 新しいハイライト表示プロパティ
  - [`HighlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/highlightingmode.html) - ホバーされたシリーズまたはホバーされていないシリーズをフェードまたは明るくするかどうかを設定します。
  - `HighlightingBehavior` - マウスの位置に応じてシリーズがハイライト表示されるかどうかを設定します (直接上や最近接アイテムなど)。
  - 以前のリリースではハイライト表示はホバー時のフェードのみに制限されていました。
- 以下のシリーズにハイライト表示を追加:
  - スタック
  - 散布図
  - 極座標
  - ラジアル
  - シェイプ
- 以下のシリーズに注釈レイヤーを追加:
  - スタック
  - 散布図
  - 極座標
  - ラジアル
  - シェイプ
- スタック シリーズ内の個別のスタック フラグメントのデータ ソースのオーバーライドのサポートを追加
- スタック、散布図、範囲、極座標、ラジアル、シェイプ シリーズにカスタム スタイル イベントを追加
- シリーズ コンテンツへの垂直ズームの自動同期のサポートを追加
- 表示された初期ラベルに基づいてチャートの水平余白を自動的に拡張するサポートを追加

### チャート凡例の機能

- ItemLegend に水平方向の配置を追加
  - 次のチャートタイプで水平方向の ItemLegend を使用できます:
    - バブル
    - ドーナツ
    - 円
- [`LegendHighlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/legendhighlightingmode.html) - 凡例アイテムにホバーしたときのシリーズのハイライト表示を有効にします。

### 地理マップ機能 (CTP)

- マップのラップアラウンド表示 (水平方向に無限スクロール) のサポートを追加
- 座標原点をラップアラウンドしながら一部のマップ シリーズのシフト表示をサポート
- シェイプ シリーズのハイライト表示のサポートを追加
- シェイプ シリーズの一部の注釈レイヤーのサポートを追加
