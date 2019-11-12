---
title: React Data Grid | Table Controls | Ignite UI for Angular | Row Grouping | Infragistics
_description: Configure the react group by feature that allows visualizing of data records in the Ignite UI for Angular table, visualize the grouped data in  separate and convenient column groups
_keywords: react table, grouping, Ignite UI for Angular, infragistics
mentionedTypes: ['Grid']
---

## Row Grouping

The Ignite UI for Angular Data Table / Data Grid lets you group rows into a ‘sticky header’ Row Group.  This is similar to the Group By feature in Microsoft Outlook, which is an easy way to visually group data based on your own criteria.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-grid-row-grouping-iframe" src='{environment:demosBaseUrl}/grids/data-grid-row-grouping' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="data-grid-row-grouping-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Code Snippet

```ts
import { ColumnGroupDescription } from "igniteui-react-grids/ES5/igr-column-group-description";
import { ListSortDirection } from "igniteui-react-core/ES5/ListSortDirection";
```

```ts
import { ColumnGroupDescription } from "igniteui-webcomponents-grids/ES2015/igc-column-group-description";
import { ListSortDirection } from "igniteui-webcomponents-core/ES2015/ListSortDirection";

const desc = new ColumnGroupDescription();
    desc.propertyPath = "LastName";
    desc.displayName = "Last Name";
    desc.sortDirection = ListSortDirection.Descending;
    grid1.groupDescriptions.add(desc);
    grid1.isGroupCollapsable = true;
    grid1.groupHeaderDisplayMode = "combined"
```

### Setting the Section Header Collasable Properties

The `groupHeaderDisplayMode` property allows the groups to be hierarchical. By default, each group description that is added gets aggregated together. Setting the `groupHeaderDisplayMode` to `split` will create a section header for ever group.

The Grid component can display a toggle on each group section to allow the end user to expand or collapse the grouped data via the `isGroupCollapsable` property. 
