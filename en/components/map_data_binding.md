---
title: Map | Data Visualization Tools | Ignite UI for Angular | Data Binding | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information. 
_keywords: map, Ignite UI for Angular, infragistics
---

## Data Binding

The Ignite UI for Angular map component is designed to display geo-spatial data from shape files and/or geographic locations from data models on geographic imagery maps. The `ItemsSource` property of geographic series is used for the purpose of binding to data models. This property can be bound to any object that implements the IEnumerable interface (e.g. List, Collection, Queue, Stack). However, some types of geographic series require that each data item must have properties with specific data structures.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="map-data-binding-iframe" src='{environment:demosBaseUrl}/maps/map-data-binding' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="map-data-binding-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The following table summarized data structures required for each type of geographic series :

| Geographic Series          | Properties                                 | Description                                                                                                                                                                                                                             |
| -------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GeographicSymbolSeries`   | `LongitudeMemberPath` `LatitudeMemberPath` | Specify the names of data columns of `ItemsSource` items that contain geographic longitude and latitude coordinates of symbols. These properties must be mapped to data columns of numeric type such as double, integer, or float, etc. |
| `GeographicShapeSeries`    | `ShapeMemberPath`                          | Specifies the name of data column of `ItemsSource` items that contains the geographic points of shapes. This property must be mapped to a data column of IEnumerable<Point> or IEnumerable&lt;IEnumerable<Point>>                       |
| `GeographicPolylineSeries` | `ShapeMemberPath`                          | Specifies the name of data column of `ItemsSource` items that contains the geographic coordinates of lines. This property must be mapped to a data column of IEnumerable<Point> or IEnumerable&lt;IEnumerable<Point>>                   |

### Code Snippet

The following code shows how to bind the `GeographicSymbolSeries` to a data model that contains geographic locations of some cities of the world stored using the `PointList` class.
