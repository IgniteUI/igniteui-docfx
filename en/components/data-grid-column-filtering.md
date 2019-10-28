---
title: React Data Grid | Table Controls | Ignite UI for Angular | Filtering | Infragistics
_description: Start using react filtering to return data with Ignite UI for Angular table similar to excel with convenient usage by the react grid filtering
_keywords: react table, filtering, Ignite UI for Angular, infragistics
mentionedTypes: ['Grid']
---

## Column Filtering

The Ignite UI for Angular Data Table / Data Grid includes a column filtering that gives you the ability to perform expressive sort conditions based on the data type of the column being filtered.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-filtering' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### Code Snippets

Import the FilterExpression and FilterFactory so a collection of filters can be created.

```ts
import { FilterExpression } from "igniteui-react-core/ES5/FilterExpression";
import { FilterFactory } from "igniteui-react-core/ES5/FilterFactory";
```

Create a FilterExpression to add to the collection of filters.
