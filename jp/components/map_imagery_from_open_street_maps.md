---
title: Map | Data Visualization Tools | Ignite UI for Angular | Open Street Maps | Infragistics
_description: マップを使用すると、ビューモデルからの地理的位置を含むデータ、またはシェープファイルから地理的画像マップにロードされた地理空間データを表示できます。
_keywords: map, Ignite UI for Angular, infragistics
_language: ja
---

## Binding Imagery from Open Street Maps

The Open Street Maps is a free geographic imagery mapping service created collaboratively by OpenStreetMapﾂｩ contributors from around the world. It provides geographic imagery tiles of the world only in road map style without any configuration options. This geographic imagery service can be accessed directly on <a href="http://www.openstreetmap.org" target="_blank">www.OpenStreetMap.org</a> web site.
By the default, the Ignite UI for Angular map component displays geographic imagery from the Open Street Maps in the map background content using the OpenStreetMapImagery class. Therefore, there is no need to configure the control to display geographic imagery from the Open Street Maps.

### Demo

<div class="sample-container" style="height: 400px">
    <iframe id="geo-map-binding-osm-imagery-iframe" src='{environment:demosBaseUrl}/maps/geo-map-binding-osm-imagery' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-osm-imagery-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Code Snippet

This code example explicitly sets `BackgroundContent` of the map component to the `OpenStreetMapImagery` object which provides geographic imagery tile from the Open Street Maps.
