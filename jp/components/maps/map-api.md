---
title: Angular チャート API | データ視覚化ツール | インフラジスティックス
_description: インフラジスティックスの Ignite UI for Angular マップは、マップ ビジュアルを構成およびスタイル設定するための便利な API を提供します。
_keywords: Angular maps, geographic, map API, API, Angular マップ, 地理, マップ API, API, Ignite UI for Angular
mentionedTypes: ['XamGeographicMap', 'Series', 'SeriesViewer', 'GeographicSymbolSeries', 'GeographicProportionalSymbolSeries', 'GeographicShapeSeries', 'GeographicHighDensityScatterSeries', 'GeographicScatterAreaSeries', 'GeographicContourLineSeries']
namespace: Infragistics.Controls.Maps
_language: ja
---

# Angular 地理マップ API

Angular [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) には次の API メンバーがあります:

*   [`zoomable`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#zoomable)
*   [`zoomToGeographic`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#zoomToGeographic)
*   [`worldRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#worldRect)
*   [`windowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowRect)
*   [`windowScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#windowScale)
*   [`getGeographicFromZoom`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#getGeographicFromZoom)
*   [`getGeographicPoint`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#getGeographicPoint)
*   [`getPixelPoint`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#getPixelPoint)

# Angular 地理的シリーズの種類

Angular [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) には 7 種類のシリーズがあり、データ バインディング用の `ItemsSource` プロパティがあります。

*   [`IgxGeographicHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html)
*   [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html)
*   [`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html)
*   [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html)
*   [`IgxGeographicShapeSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriescomponent.html)
*   [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html)
*   [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html)

さらに、シリーズの各種類には、データ項目をマッピングし、その外観をスタイル設定するための特定のプロパティがあります。

## Angular 地理記号シリーズ API

Angular [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html) (地理マーカー シリーズ) には、次の API メンバーがあります。

*   [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#latitudeMemberPath)
*   [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#longitudeMemberPath)
*   [`markerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmarkerseriescomponent.html#markerType)
*   [`markerBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmarkerseriescomponent.html#markerBrush)
*   [`markerOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmarkerseriescomponent.html#markerOutline)

## Angular 地理バブル シリーズ API

Angular [`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html) (地理バブル シリーズ) には、次の API メンバーがあります。

*   [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#latitudeMemberPath)
*   [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#longitudeMemberPath)
*   [`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#radiusMemberPath)
*   [`radiusScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#radiusScale)
*   [`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#fillScale)
*   [`fillMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#fillMemberPath)

## Angular 地理シェイプ シリーズ API

Angular [`IgxGeographicShapeSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriescomponent.html) と [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) には同じ API メンバーがあります。

*   [`shapeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriesbasecomponent.html#shapeMemberPath)
*   `Thickness`
*   `Brush`
*   `Outline`

## Angular 地理エリア シリーズ API

Angular [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html) には、次の API メンバーがあります。

*   [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#latitudeMemberPath)
*   [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#longitudeMemberPath)
*   [`colorMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html#colorMemberPath)
*   [`colorScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html#colorScale)

## Angular 地理等高線シリーズ API

Angular [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html) には、次の API メンバーがあります。

*   [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#latitudeMemberPath)
*   [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#longitudeMemberPath)
*   [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html#valueMemberPath)
*   [`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html#fillScale)

## Angular 地理 HD シリーズ API

Angular [`IgxGeographicHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html) には、次の API メンバーがあります。

*   [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#latitudeMemberPath)
*   [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#longitudeMemberPath)
*   [`heatMaximumColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#heatMaximumColor)
*   [`heatMinimumColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#heatMinimumColor)
