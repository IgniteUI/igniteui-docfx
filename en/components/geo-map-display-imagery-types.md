---
title: Angular Map | Data Visualization Tools | Geographic Imagery | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: Angular map, Geographic Imagery, tiles, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamGeographicMap']
---

# Angular Geographic Imagery

Angular Geographic imagery is a detailed representation of the world from a top view perspective. It can consist of an aerial-satellite map or road maps in a multi-scale imagery tiles structure. The geographic map component can display geographic imagery in order to provide end-users with rich and interactive world maps and geographic context for geo-spatial data.

## Types of geographic imagery

The map component can display geographic imagery tiles from three supported mapping services or from other mapping services that can be easily implemented in an application.

The following table summarizes supported and custom geographic imagery sources for the map component.

| Imagery          | Description                                                                                                                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Open Street Maps | Provides geographic imagery from Open Street Maps service with an option to display a road map style only in one coloring theme.                                                                                    |
| Bing Maps        | Provides geographic imagery from Bing Maps service with configurable options to display the following map styles:<ul><li> Satellite Map Style</li><li> Satellite Map with Labels Style</li><li> Road Map Style</li> |

<!-- | Map Quest |Provides custom geographic imagery from Map Quest service with configurable options to display the following map styles:<ul><li>Satellite Map Style</li><li>Road Map Style</li></ul> -->

## Map Background Content

The map component's `BackgroundContent` property is used to display all supported types of geographic imagery sources. For each imagery source, there is an imagery class used for rendering corresponding geographic imagery tiles.

The following table summarizes imagery classes provided by the map component.

| Imagery Class                                                                                                                                      | Description                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`IgxGeographicMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapimagery.html) | Represents the base control for all imagery classes that display all types of supported geographic imagery tiles. This class can be extended for the purpose of implementing support for geographic imagery tiles from other geographic imagery sources such as Map Quest mapping service. |
| [`IgxOpenStreetMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxopenstreetmapimagery.html) | Represents the multi-scale imagery control for displaying geographic imagery tiles from the Open Street Maps service.                                                                                                                                                                      |

<!-- |`BingMapsMapImagery`|Represents the multi-scale imagery control for displaying geographic imagery tiles from the Bing Maps service.| -->

By default, the `BackgroundContent` property is set to [`IgxOpenStreetMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxopenstreetmapimagery.html) object and the map component displays geographic imagery tiles from the Open Street Maps service. In order to display different types of geographic imagery tiles, the map component must be re-configured.

In addition, the `BackgroundContent` property can be set to any object that inherits the class. However, only objects that inherit the [`IgxGeographicMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapimagery.html) class will allow panning and zooming of the map background content.

In the map component, map background content is always rendered behind all geographic series. In other words, geographic imagery tiles are always rendered first and any geographic series in the map component's [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) property is rendered on top of the geographic imagery tiles. This is especially important when displaying multiple geographic series in the same plot area of the map component because geographic imagery tiles can quickly get buried in the map view.

## Code Snippet

This code example explicitly sets `BackgroundContent` of the map component to the [`IgxOpenStreetMapImagery`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxopenstreetmapimagery.html) object which provides geographic imagery tile from the Open Street Maps.
