---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart component is TODO.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
---

## Chart Titles

The `Title` and `Subtitle` feature of the `IgxDataChart` control allows you to add information to the top section of the chart. When adding a title or subtitle to the chart, the content of the chart automatically resizes allowing for the title and subtitle information that you provide.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:demosBaseUrl}/data-chart-titles' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="financial-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

There are properties provided that allow you to style the text color, style, and margins of the titles and subtitles of the chart. The following code-snippet demonstrates how you can set and customize the titles in the chart:

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
