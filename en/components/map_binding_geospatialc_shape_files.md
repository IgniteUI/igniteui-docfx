---
title: Map | Data Visualization Tools | Ignite UI for Angular | Geogrpahich Data Models | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information. 
_keywords: map, Ignite UI for Angular, infragistics
---

## Binding Shape Files with Geo-spatial Data

The Ignite UI for Angular map component, the ShapefileConverter class loads geo-spatial data from shape files and converts it to a collection of ShapefileRecord objects.
The following table explains properties of the ShapefileConverter class for loading shape files.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="map-binding-shape-files-with-geospatial-data-iframe" src='{environment:demosBaseUrl}/maps/map-binding-shape-files-with-geospatial-data' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="map-binding-shape-files-with-geospatial-data-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The following table summarized data structures required for each type of geographic series :

| Property        | Type | Description                                                                                              |
| --------------- | ---- | -------------------------------------------------------------------------------------------------------- |
| ShapefileSource | Uri  | Specifies the Uri to a shape file (.shp) that contains geo-spatial data items.                           |
| DatabaseSource  | Uri  | Specifies the Uri to a shape database file (.dbf) that contains a data table for geo-spatial data items. |

Both of the source properties for shape files are of Uri type. This means that shape files can be embedded resources in the application assembly and on the internet (via http). Refer to the previous section for more information on this process. The rules for resolving Uri objects are equivalent to any standard Uri property, for example the BitmapImage.UriSource property.

When both source properties are set to non-null values, then the ShapefileConverter object’s ImportAsync method is invoked which in return performs fetching and reading the shape files and finally doing the conversion. After this operation is complete, the ShapefileConverter is populated with ShapefileRecord objects and the ImportCompleted event is raised in order to notify about completed process of loading and converting geo-spatial data from shape files.

### Code Snippet

The following code creates an instance of the ShapefileConverter object for loading a shape file that contains locations of major cities in the world. It also demonstrates how to handle the ImportCompleted event as a prerequisite for binding data to the map component.

### Binding Geo-spatial Data to Geographic Series

In the map component, Geographic Series are used for displaying geo-spatial data that is loaded from shape files. All types of Geographic Series have an `ItemsSource` property which can be bound to any object that implements the interface (for example: List, Collection, Queue, Stack). The ShapefileConverter is another example of Enumerable object because it implements a collection of ShapefileRecord objects.

The ShapefileRecord class provides properties for storing geo-spatial data, listed in the following table.

| Property                                                                          | Type                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Points                                                                            | List&lt;List&lt;>>            | Contains all the points in one geo-spatial shape loaded from a shape file (.shp). For example, the country of Japan in shape file would be represented as a List of a List of points object, where:<ul><li>The first list of points describes shape of Hokkaido island</li><li>The second list of points describes shape of Honshu island</li><li>The third list of points describes shape of Kyushu island</li><li>The fourth list of points describes shape of Shikoku island |
| And so on until all shapes/states/islands of a country are represented.</li></ul> |                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Fields                                                                            | Dictionary&lt;String, Object> | Contains a row of data from the shape database file (.dbf) keyed by a column name. For example, a data about county of Japan which includes population, area, name of a capital, etc.                                                                                                                                                                                                                                                                                           |

This data structure is suitable for use in most Geographic Series as long as appropriate data columns are mapped to them.

### Code Snippet

This code example assumes that shape files were loaded using the ShapefileConverter.
The following code binds GeographicShapeSeries in the map component to the ShapefileConverter and maps the Points property of all ShapefileRecord objects.
