---
title: Map | Data Visualization Tools | Ignite UI for Angular | Map Navigation | Infragistics
_description: The Map allows you to navigate using geographic coordinates or relative window coordinates.
_keywords: map, Ignite UI for Angular, infragistics
mentionedTypes: ['XamGeographicMap']
---

## Navigating Map Content

Navigation in the [`IgxGeographicMapComponent`](/components/map_navigating_map_content.html) control is enabled by default and it allows zooming and panning of the map content. However, this behavior can be changed using the [`zoomable`](/components/map_navigating_map_content.html) property. It is important to know that the map allows only synchronized zooming - scaling the map content with preserved aspect ratio. As result, it is not possible to scale the map content vertically without scaling it also horizontally and vice versa.

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-navigation-iframe" src='{environment:demosBaseUrl}/maps/geo-map-navigation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-navigation-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Geographic Coordinates

You navigate map content within geographic region bound by these coordinates:

-   horizontally from 180°E (negative) to 180°W (positive) longitudes
-   vertically from 85°S (negative) to 85°N (positive) latitudes

This code snippet shows how navigate the map using geographic coordinates:

### Window Coordinates

Also, you can navigate map content within window rectangle bound by these relative coordinates:

-   horizontally from 0.0 to 1.0 values
-   vertically from 0.0 to 1.0 values

This code snippet shows how navigate the map using relative window coordinates:

### Properties

The following table summarizes properties that can be used in navigation of the [`IgxGeographicMapComponent`](/components/map_navigating_map_content.html) control:

| Property Name                                                                                                                            | Property Type | Description                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`windowRect`](/components/map_navigating_map_content.html)                                         | Rect          | Sets new position and size of the navigation window in viewable area of the map content. Rect with 0, 0, 1, 1 values will zoom out the entire map content in the navigation window.                                                                                                             |
| [`windowScale`](/components/map_navigating_map_content.html)                                      | number        | Sets new size of the navigation window in of the map control. It is equivalent smallest value of Width or Height stored in the [`windowRect`](/components/map_navigating_map_content.html) property                                                        |
| [`windowPositionHorizontal`](/components/map_navigating_map_content.html)             | number        | Sets new horizontal position of the navigation window’s anchor point from the left edge of the map control. It is equivalent to value stored in the Left of the [`windowRect`](/components/map_navigating_map_content.html) property.                      |
| [`windowPositionVertical`](/components/map_navigating_map_content.html)                 | number        | Sets new vertical position of the navigation window’s anchor point from the top edge of the map control. It is equivalent to value stored in the Top of the [`windowRect`](/components/map_navigating_map_content.html) property.                          |
| [`actualWindowRect`](/components/map_navigating_map_content.html)                             | Rect          | Indicates current position and size of the navigation window in viewable area of the map content. Rect with 0, 0, 1, 1 values displays the entire map content in the navigation window.                                                                                                         |
| [`actualWindowScale`](/components/map_navigating_map_content.html)                          | number        | Indicates current size of the navigation window in of the map control. It is equivalent to smallest value of Width or Height stored in the [`actualWindowRect`](/components/map_navigating_map_content.html) property                                |
| [`actualWindowPositionHorizontal`](/components/map_navigating_map_content.html) | number        | Indicates current horizontal position of the navigation window’s anchor point from the left edge of the map control. It is equivalent to value stored in the Left of the [`actualWindowRect`](/components/map_navigating_map_content.html) property. |
| [`actualWindowPositionVertical`](/components/map_navigating_map_content.html)     | number        | Indicates vertical position of the navigation window’s anchor point from the top edge of the map control. It is equivalent to value stored in the Top of the [`actualWindowRect`](/components/map_navigating_map_content.html) property.             |
