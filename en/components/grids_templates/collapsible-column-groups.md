@@if(igxName==='IgxGrid') {
---
title: Angular Collapsible Column Groups | Ignite UI for Angular | Infragistics
_description: Collapsible multi-column headers make it possible to collapse some subset of the nested columns under the current one and to show some nested headers, which will give you a shorten information for example.
_keywords: collapsible column headers, ignite ui for angular, infragistics
---
}
@@if(igxName!=='IgxGrid') {
---
title: Angular Collapsible Column Groups | Ignite UI for Angular | Infragistics
_description: Collapsible multi-column headers make it possible to collapse some subset of the nested columns under the current one and to show some nested headers, which will give you a shorten information for example.
_keywords: collapsible column headers, ignite ui for angular, infragistics
_canonicalLink: grid/collapsible-column-groups
---
}

# Grid Collapsible Column Groups Overview

Multi-column headers allow you to have multiple levels of nested columns and column groups, also they provide you the ability to mark each column group as **collapsible**. **Collapsible multi-column headers** make it possible to collapse/expand, e.g. to show and hide the nested headers under the current one, which will give you a shortened/summarized information for example.

### Angular Grid Collapsible Column Groups Overview Example

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-collapsible-groups-iframe" src='{environment:demosBaseUrl}/grid/grid-collapsible-groups' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-collapsible-groups-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-collapsible-groups-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="tree-grid-collapsible-groups-iframe" data-src='{environment:demosBaseUrl}/tree-grid/tree-grid-collapsible-groups' width="100%" height="100%" seamless="" frameborder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-collapsible-groups-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-collapsible-groups-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="hierarchical-grid-collapsible-column-groups-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-collapsible-column-groups' width="100%" height="100%" seamless="" frameborder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-collapsible-column-groups-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-collapsible-column-groups-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

## Setup

To get started with the IgxGrid and the **Collapsible multi-column headers** , first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the @@if (igxName === 'IgxGrid') {`IgxGridModule`} @@if (igxName === 'IgxTreeGrid') {`IgxTreeGridModule`} @@if (igxName === 'IgxHierarchicalGrid') {`IgxHierarchicalGridModule`} in the app.module.ts file. Also we strongly suggest you to take a brief look at [*multi-column groups*](./multi-column-headers.md) topic, to see more detailed information on how to setup the column groups in your grid.

## Usage

*Collapsible Column Groups* is a part of the multi-column headers feature which provides a way to collapse/expand a column group to a smaller set of data. When a column group is collapsed, a subset of the columns will be shown to the end-user and the other child columns of the group will hide. Each collapsed/expanded column can be bound to the grid data source, or it may be unbound, thus calculated.

In order to define a column group as `collapsible`, you need to set the property to `[collapsible]="true"` and also keep in mind that you need to define the property `visibleWhenCollapsed` to at least two child columns: at least one column must be visible when the group is collapsed (`[visibleWhenCollapsed]="true"`) and at least one column must be hidden when the group is expanded (`[visibleWhenCollapsed]="false"`), otherwise the **collapsible functionality will be disabled**. If  `visibleWhenCollapsed` is not specified for some of the child columns, then this column will be always visible no matter whether the parent state is expanded or collapsed.

So let's see the markup below:

```html
<igx-column-group header="Customer Information" [collapsible]="true"> <!-- Initially the column groups will be expanded--->
    <!--The column below will be visible when its parent is collapsed-->
    <igx-column field="CustomerName" header="Fullname" [dataType]="'string'" [visibleWhenCollapsed]="true"></igx-column>
    <!--The three columns below will be visible when its parent is expanded-->
    <igx-column field="CustomerID" header="Customer ID" [dataType]="'string'" [visibleWhenCollapsed]="false"></igx-column>
    <igx-column field="FirstName" header="First Name" [dataType]="'string'" [visibleWhenCollapsed]="false">
    </igx-column>
    <igx-column field="LastName" header="Last Name" [dataType]="'string'" [visibleWhenCollapsed]="false">
    </igx-column>
    <igx-column-group header="Customer Address"> <!--This column visibility will not be changed based on parent expand/collapsed state-->
        <igx-column field="Country" header="Country" [dataType]="'string'" [sortable]="true">
        </igx-column>
        <igx-column field="City" header="City" [dataType]="'string'" [sortable]="true">
        </igx-column>
    </igx-column-group>
</igx-column-group>
```

And now let's sum up: every child column has tree states:
-	Can be always visible, no matter expand state of its parent;
-	Can be visible, when its parent is expanded;
-	Can be visible, when its parent is collapsed;

The initial state of the column group which is specified as collapsible is `[expanded]="true"`. But you can easily change this behavour by setting the property `[expanded]="false"`.

## Expand/Collapse indicator template

Default expand indicator for the igxGrid is the following:

 <img src="../../images/general/expand_indicator.png" style="width: 450px; height: 130px"/>

Default collapse indicator for the igxGrid is the following:

<img src="../../images/general/collapsed_indicator.png" style="width: 400px; height: 130px"/>

Also if you need to change the default expand/collapse indicator we introduce you two easy ways to do it.
### By input property

You can define custom expand/collapse template and provide it to each of the collapsible column groups using **collapsibleIndicatorTemplate** input property. Check the markup below:

```html
<ng-template #indTemplate let-column="column">
    <igx-icon [attr.draggable]="false" >{{column.expanded ? 'remove' : 'add'}} </igx-icon>
</ng-template>
<igx-column-group header="Customer Information" [collapsible]="true" [collapsibleIndicatorTemplate]="indTemplate">
    <igx-column field="CustomerName" header="Fullname" [dataType]="'string'" [visibleWhenCollapsed]="true"></igx-column>
    <igx-column field="CustomerID" header="Customer ID" [dataType]="'string'" [visibleWhenCollapsed]="false"></igx-column>
    <igx-column-group header="Customer Address" [collapsible]="true" [collapsibleIndicatorTemplate]="indTemplate">
        <igx-column field="Country" header="Country" [dataType]="'string'" [sortable]="true" [visibleWhenCollapsed]="true"></igx-column>
        <igx-column field="City" header="City" [dataType]="'string'" [sortable]="true" [visibleWhenCollapsed]="false"></igx-column>
    </igx-column-group>
</igx-column-group>
```
### Using igxCollapsibleIndicator directive

Another way to achieve this behavior is to use the igxCollapsibleIndicator directive as shown in the example below:

```html
<igx-column-group header="Customer Information" [collapsible]="true">
    <ng-template igxCollapsibleIndicator let-column="column">
        <igx-icon [attr.draggable]="false">{{column.expanded ? 'remove' : 'add'}} </<igx-icon>
    </ng-template>
    <igx-column field="CustomerName" header="Fullname" [dataType]="'string'" [visibleWhenCollapsed]="true"></igx-column>
    <igx-column field="CustomerID" header="Customer ID" [dataType]="'string'" [visibleWhenCollapsed]="false"></igx-column>
    <igx-column-group header="Customer Address" [collapsible]="true">
        <igx-column field="Country" header="Country" [dataType]="'string'" [sortable]="true" [visibleWhenCollapsed]="true"></igx-column>
        <igx-column field="City" header="City" [dataType]="'string'" [sortable]="true" [visibleWhenCollapsed]="false"></igx-column>
    </igx-column-group>
</igx-column-group>
```


> [!Note]
> Please keep in mind that initially collapse group option takes precedence over column hidden - If you declared your column to be hidden using the property
> hidden and you have a group defined where the same column should be shown, the column will be shown.


## API References
<div class="divider--half"></div>

* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#mixin-igx-grid)

## Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
