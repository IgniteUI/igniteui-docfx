---
title: React Data Grid | Table Controls | Ignite UI for Angular | Animations | Infragistics
_description: The Ignite UI for Angular Table / Grid component simplifies the complexities of the grid domain into manageable API so that a user can bind a collection of data.
_keywords: react table, Ignite UI for Angular, infragistics
mentionedTypes: ['Grid']
---

## Column Animations

The Ignite UI for Angular Data Table / Data Grid supports Column Animation during events like Column Hiding or Column Moving.  When Column Animation on the Angular data grid is set, the corresponding animation will fire for all of the cells in that column.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-animation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### Animation Properties

Each column animation property is listed and described below:

-   [`columnAddingAnimationMode`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegridcomponent.html#columnaddinganimationmode): When a column is added, you have the option to have the column header and its cells slide in from the left, right, top, or bottom. There are also options to have it fade in as well as slide and fade in.
-   [`columnExchangingAnimationMode`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegridcomponent.html#columnexchanginganimationmode): When a column is exchanged, you have the option to have the exchanged column header and its cells slide to the left, right, top, or bottom. There are also options to have it fade as well as slide and fade.
-   [`columnHidingAnimationMode`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegridcomponent.html#columnhidinganimationmode): When a column is hidden, you have the option to have the column header and its cells slide out to the left, right, top, or bottom. There are also options to have it fade out as well as slide and fade out.
-   [`columnMovingAnimationMode`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegridcomponent.html#columnmovinganimationmode): When a column is moved, you have the option to have the column header and its cells slide over.
-   [`columnPropertyUpdatingAnimationMode`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegridcomponent.html#columnpropertyupdatinganimationmode): When a column's property changes, you have the option to have that property change animate by interpolating or deeply interpolating its change.
-   [`columnShowingAnimationMode`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegridcomponent.html#columnshowinganimationmode): When a column is added, you have the option to have the column header and its cells slide in from the left, right, top, or bottom. There are also options to have it fade in as well as slide and fade in.

### Code Snippet

The following demonstrates the implementation of each of the column animations described in this topic:
