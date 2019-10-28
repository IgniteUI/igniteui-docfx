---
title: React Data Grid | Table Controls | Ignite UI for Angular | Remote Data Binding | Infragistics
_description: The Ignite UI for Angular Table / Grid component simplifies the complexities of the grid domain into manageable API so that a user can bind a collection of data.
_keywords: react table, Ignite UI for Angular, infragistics
mentionedTypes: ['Grid']
---

## Binding Virtual Data

The Ignite UI for Angular Data Table / Data Grid supports binding to remote datasources with one line of code.  With the Angular data table’s Virtual Data Source, you simply configure the Angular grid with your remote URI and which OData Entity you’d like returned, and the Angular grid does the rest of the work for you.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-grid-remote-data-iframe" src='{environment:demosBaseUrl}/grids/data-grid-remote-data' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="data-grid-remote-data-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Dependencies

In addition to the core and Angular data grid packages you will also have to install the datasources package.

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-grids**
-   **npm install --save igniteui-angular-datasources**

### Required Modules

The [`IgxLiveGrid`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegrid.html) requires the following modules:

<div class="divider--half"></div>

### Code Snippet

Now that the Angular data grid module is imported, the next step is the basic configuration of the Angular grid that binds to remote data. Create the virtual datasource. Assign the url where the data will be retrieved from to the <b>baseUri</b> property. Setting the <b>entitySet</b> property will inform which table to retrieve from the virtual datasource.

```ts
private virtualData: ODataVirtualDataSource;
// ...
const vds = new ODataVirtualDataSource();
vds.baseUri = ("https://services.odata.org/V4/Northwind/Northwind.svc");
vds.entitySet = ("Orders");
this.virtualData = vds;
```

Assign the data source to the grid.
