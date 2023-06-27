---
title: Angular Chart API | Data Visualization Tools | Infragistics
_description: Use Infragistics Ignite UI for Angular map provides useful API to configure and styles map visuals
_keywords: Angular maps, geographic, map API, API, Ignite UI for Angular,
mentionedTypes: ['XamGeographicMap', 'Series', 'SeriesViewer', 'GeographicSymbolSeries', 'GeographicProportionalSymbolSeries', 'GeographicShapeSeries', 'GeographicHighDensityScatterSeries', 'GeographicScatterAreaSeries', 'GeographicContourLineSeries']
namespace: Infragistics.Controls.Maps
---

# Angular Geographic Map API

The Angular [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) has the following API members:

*   [`zoomable`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#zoomable)
*   [`zoomToGeographic`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#zoomtogeographic)
*   [`worldRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#worldrect)
*   [`windowRect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#windowrect)
*   [`windowScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#windowscale)
*   [`getGeographicFromZoom`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#getgeographicfromzoom)
*   [`getGeographicPoint`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#getgeographicpoint)
*   [`getPixelPoint`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html#getpixelpoint)

# Angular Geographic Series Types

The Angular [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) has 7 types of series and they have the `ItemsSource` property for data binding.

*   [`IgxGeographicHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html)
*   [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html)
*   [`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html)
*   [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html)
*   [`IgxGeographicShapeSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriescomponent.html)
*   [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html)
*   [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html)

In addition, each type of series has specific properties for mapping data items and styling their appearance:

## Angular Geographic Symbol Series API

The Angular [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html) (Geographic Marker Series) has the following API members:

*   [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#latitudememberpath)
*   [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#longitudememberpath)
*   [`markerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmarkerseriescomponent.html#markertype)
*   [`markerBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmarkerseriescomponent.html#markerbrush)
*   [`markerOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmarkerseriescomponent.html#markeroutline)

## Angular Geographic Bubble Series API

The Angular [`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html) (Geographic Bubble Series) has the following API members:

*   [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#latitudememberpath)
*   [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#longitudememberpath)
*   [`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#radiusmemberpath)
*   [`radiusScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#radiusscale)
*   [`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#fillscale)
*   [`fillMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicproportionalsymbolseriescomponent.html#fillmemberpath)

## Angular Geographic Shape Series API

The Angular [`IgxGeographicShapeSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriescomponent.html) and [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicpolylineseriescomponent.html) have the same API members:

*   [`shapeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicshapeseriesbasecomponent.html#shapememberpath)
*   `Thickness`
*   `Brush`
*   `Outline`

## Angular Geographic Area Series API

The Angular [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html) has the following API members:

*   [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#latitudememberpath)
*   [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#longitudememberpath)
*   [`colorMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html#colormemberpath)
*   [`colorScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html#colorscale)

## Angular Geographic Contour Series API

The Angular [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html) has the following API members:

*   [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#latitudememberpath)
*   [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicsymbolseriescomponent.html#longitudememberpath)
*   [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html#valuememberpath)
*   [`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html#fillscale)

## Angular Geographic HD Series API

The Angular [`IgxGeographicHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html) has the following API members:

*   [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#latitudememberpath)
*   [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#longitudememberpath)
*   [`heatMaximumColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#heatmaximumcolor)
*   [`heatMinimumColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html#heatminimumcolor)
