---
title: Angular Data Chart | Data Visualization Tools | Title and SubTitle | Infragistics
_description: Use the titles and subtitles of the Infragistics' Angular charts to add information to to top section. Check out the Ignite UI for Angular graph's title and subtitles feature!
_keywords: Angular charts, data chart, chart title, chart subtitle, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
---

# Angular Title and Subtitle

The [`chartTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#charttitle) and [`subtitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#subtitle) feature of the Angular data chart component allows you to add information to the top section of the data chart. When adding a title or subtitle to the data chart, the content of the data chart automatically resizes allowing for the title and subtitle information that you provide.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-chart-titles-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-chart-titles' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-chart-titles-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

There are properties provided that allow you to style the text color, style, and margins of the titles and subtitles of the data chart. The following code-snippet demonstrates how you can set and customize the titles in the Angular data chart component:

```html
<igx-data-chart [dataSource]="data"
    height="600px"
    width="100%"
    chartTitle="Energy Use Per Country"
    subtitle="Results over a two year period"
    titleTextColor="Red"
    titleTextStyle="24pt Verdana"
    subtitleTextColor="Red"
    subtitleTextStyle="16pt Verdana">
</igx-data-chart>
```
