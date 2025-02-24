---
title: Angular Map | Data Visualization Tools | Geographic CSV Data | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geographic locations loaded from CSV files. View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, Infragistics
_language: kr
mentionedTypes: ["XamGeographicMap", "ShapefileConverter"]
---

# Angular Binding CSV Files with Geographic Locations

With the Ignite UI for Angular map component, you can plot geographic data loaded from various file types. For example, you can load geographic locations from a comma separated values (CSV) file.

## Demo

<code-view style="height: 400px" alt="Angular geo map binding data csv"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map/binding-data-csv"
                                                 github-src="maps/geo-map/binding-data-csv">
</code-view>


<div class="divider--half"></div>

## Data Example

Here is an example of data from CSV file:

```ts
City,Lat,Lon,State,Code,County,Density,Population
New York,40.7856,-74.0093,New Jersey,NJ,Hudson,21057,54227
Dundee,42.5236,-76.9775,New York,NY,Yates,579,1650
```

## Code Snippet

The following code loads and binds [`IgxGeographicHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographichighdensityscatterseriescomponent.html) in the map component to an array of objects created from loaded CSV file with geographic locations.
