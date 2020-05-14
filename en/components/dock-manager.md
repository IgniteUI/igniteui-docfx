---
title: Dock Manager | Layout Controls | Ignite UI for Angular | Infragistics
_description: 
_keywords: dock manager, layout, Ignite UI for Angular, Infragistics
---

## Dock Manager

The Angular Dock Manager is a component that uses panes to manage the application’s layout and allows the end user to customize the UI by unpinning, resizing, moving and hiding panes.

### Demo

<div class="sample-container loading" style="height: 600px">
    <iframe id="dock-manager-overview-iframe" src='{environment:dvDemosBaseUrl}/layouts/dock-manager-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dock-manager-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Dependencies

In order to install the Dock Manager package execute the following command:

**npm install --save igniteui-dockmanager**

### Required Imports

The Dock Manager requires you to import and call the `defineCustomElements()` function:

```ts
import { defineCustomElements } from 'igniteui-dockmanager/loader';

defineCustomElements();
```

<div class="divider--half"></div>

### Usage

Now that the Dock Manager is imported, you can add it on the page:

> [!NOTE]
> Since the Dock Manager component uses ShadowDOM and slots it is not supported on older browsers like Internet Explorer 11 and Edge 18 and below (non-Chromium versions).

The Dock Manager has a `layout` property which describes the layout of the panes. In order to start defining the layout you should set the `rootPane` property and then continue with adding child panes. The following code snippet demonstrates how to define a layout with a single content pane:

In order to load the content of the panes, the Dock Manager uses [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot). The [`slot`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute of the content element should match the `contentId` of the content pane in the layout configuration. It is highly recommended to set width and height of the content elements to `100%` in order to be properly displayed when the end user resizes the panes.

The Dock Manager defines several pane types:

-   Content Pane
-   Split Pane
-   Tab Group Pane
-   Document Host

Each type of pane has a `size` property. Depending on the parent orientation the size may affect either the width or the height of the pane. The size of the panes is relative to its sibling panes' sizes and defaults to `100`. If you have two sibling panes the first of which with size set to `200` and the second one with size set to `100`, the first one will take twice as much space as the second one. If the absolute size of their parent is `900px`, the absolute size of the first pane will be `600px` while the second pane will be `300px`.

The end user is allowed to perform the following customizations of the layout at runtime:

-   Pin/unpin a pane
-   Resize a pane
-   Close a pane
-   Drag a pane to make it floating
-   Move a floating pane
-   Dock a floating pane

All these customizations are reflected in the `layout` property of the Dock Manager.

#### Content Pane

The content pane represents a pane with a header and a content. The Content Pane can be hosted inside a Split Pane or a Tab Group Pane. The following code snippet demonstrates how to define a content pane:

An **Unpinned Pane** is a content pane which appears as a tab header at some of the edges of the Dock Manager. When the end user clicks the tab header its content appears over the docked pinned panes. In order to make a pane unpinned, the `isPinned` property of the content pane should be set to `false`.

The `isPinned` property affects only content panes that are docked outside a Document Host. Content pane hosted in a floating pane or a document host cannot be unpinned.

By default, the unpinned location of a content pane is calculated automatically based on the location of the pane relatively to the document host. If more than one document host is defined in the layout, the closest one in the content pane parent hierarchy will be used for the calculation. If there is no document host defined, the default location is `left`. The desired location of the unpinned pane could be set using the `unpinnedLocation` property.

#### Split Pane

The Split Pane is a container pane which stacks all of its child panes horizontally or vertically based on its `orientation` property. The following code snippet demonstrates how to define a horizontal Split Pane with two child content panes:

The Split Pane may contain child panes of all types including other split panes.

#### Tab Group Pane

The Tab Group Pane displays its child content panes in a tab component. The following code snippet demonstrates how to define a Tab Group Pane with two tabs:

#### Document Host

The Document Host represents a documents area similar to Visual Studio’s tabs area with code editors and design views. The following code snippet demonstrates how to define a Document Host with two document tabs:

#### Floating Pane

The Floating Pane is a split pane that is rendered on top of the other panes like a floating window. The floating pane definitions are stored in the `floatingPanes` property of the `layout`. The following code snippet demonstrates how to add a floating pane with a single content pane inside:

The `floatingLocation`, `floatingWidth` and `floatingHeight` properties represent absolute dimensions in pixels. Please note that these properties apply only for the split panes in the `floatingPanes` array.

#### Save/Load Layout

In order to save and restore the layout customizations you simply have to get/set the value of the `layout` property. The following code demonstrates how to preserve the layout as a stringified JSON:

```ts
private savedLayout: string;

private saveLayout() {
    this.savedLayout = JSON.stringify(this.dockManager.layout);
}

private loadLayout() {
    this.dockManager.layout = JSON.parse(this.savedLayout);
}
```

Please note that modifying any of the properties of the layout object won’t trigger an update of the Dock Manager. In order to trigger an update of the Dock Manager the whole layout object should be replaced:

### Themes

The Dock Manager supports dark and light themes. The light theme is the default one. The Dock Manager can detect which of its themes to use based on the OS color settings. In order to enable this feature the only thing you need to do is to import the `igc.themes.css` file in your css:

    @import '~@infragistics/igniteui-dockmanager/dist/collection/styles/igc.themes.css';

In order to force the Dock Manager to use either dark or light theme you have to include the `igc.themes.css` file and add the `dark-theme` or `light-theme` class to the Dock Manager or any of its parents. The following code snippet forces the Dock Manager to use its dark theme:
