---
title: Map | Data Visualization Tools | Ignite UI for Angular | Geographic Data Models | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Binding Geographic Data Models

The Ignite UI for Angular map component is designed to display geo-spatial data from shape files and/or geographic locations from data models on geographic imagery maps. The `ItemsSource` property of geographic series is used for the purpose of binding to data models. This property can be bound an array of custom objects.

### Demo

<div class="sample-container" style="height: 400px">
    <iframe id="geo-map-binding-data-model-iframe" src='{environment:demosBaseUrl}/maps/geo-map-binding-data-model' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-data-model-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The following table summarized data structures required for each type of geographic series:

| Geographic Series                    | Properties                                                      | Description                                                                                                                                                                                        |
| ------------------------------------ | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GeographicSymbolSeries`             | `LongitudeMemberPath`, `LatitudeMemberPath`                     | Specifies names of 2 numeric longitude and latitude coordinates                                                                                                                                    |
| `GeographicHighDensityScatterSeries` | `LongitudeMemberPath`, `LatitudeMemberPath`                     | Specifies names of 2 numeric longitude and latitude coordinates                                                                                                                                    |
| `GeographicProportionalSymbolSeries` | `LongitudeMemberPath`, `LatitudeMemberPath`, `RadiusMemberPath` | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for size/radius of symbols                                                                                    |
| `GeographicScatterAreaSeries`        | `LongitudeMemberPath`, `LatitudeMemberPath`, `ColorMemberPath`  | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for triangulation of values                                                                                   |
| `GeographicContourLineSeries`        | `LongitudeMemberPath`, `LatitudeMemberPath`, `ValueMemberPath`  | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for triangulation of values                                                                                   |
| `GeographicShapeSeries`              | `ShapeMemberPath`                                               | Specifies the name of data column of `ItemsSource` items that contains the geographic points of shapes. This property must be mapped to an array of arrays of objects with x and y properties.     |
| `GeographicPolylineSeries`           | `ShapeMemberPath`                                               | Specifies the name of data column of `ItemsSource` items that contains the geographic coordinates of lines. This property must be mapped to an array of arrays of objects with x and y properties. |

### Code Snippet

The following code shows how to bind the `GeographicSymbolSeries` to a custom data model that contains geographic locations of some cities of the world stored using longitude and latitude coordinates. Also, we use the `GeographicPolylineSeries` to plot shortest geographic path between these locations using the [WorldUtility](map_resources_world_util.md)
