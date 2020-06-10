---
title: Dock Manager | Layout Controls | Ignite UI for Angular | Infragistics
_description:
_keywords: dock manager, layout, Ignite UI for Angular, Infragistics
---

## Dock Manager Overview

The Angular Dock Manager component provides means to manage the layout of your application through panes, allowing your end-users to customize it further by pinning, resizing, moving and hiding panes.

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

To install the Dock Manager package execute the following command:

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-dockmanager
</pre>

Then it is necessary to import and call the `defineCustomElements()` function:

```ts
import { defineCustomElements } from 'igniteui-dockmanager/loader';

defineCustomElements();
```

<div class="divider--half"></div>

### Usage

Once the Dock Manager is imported, you can add it on the page:

> [!NOTE]
> Since the Dock Manager component uses ShadowDOM and slots it is not supported on older browsers like Internet Explorer 11 and Edge 18 and below (non-Chromium versions).

The Dock Manager has a [`layout`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) property, which describes the layout of the panes. To start defining a layout, you should set the [`rootPane`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagerlayout.html#rootpane) property and add child panes. Here is how you can define a layout with a single content pane:

To load the content of the panes, the Dock Manager uses [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot). The [`slot`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute of the content element should match the [`contentId`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#contentid) of the content pane in the layout configuration. It is highly recommended to set width and height of the content elements to `100%` for predictable response when the end-user is resizing panes.

The Dock Manager defines several [pane types]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/enums/igcdockmanagerpanetype.html):

-   [Content pane]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html)
-   [Split pane]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html)
-   [Tab group pane]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html)
-   [Document host]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdocumenthost.html)

Each type of pane has a [`size`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#size) property. Depending on the parent orientation the size may affect either the width or the height of the pane. The size of a pane is relative to the sizes of its sibling panes and defaults to 100. If you have two sibling panes, where the first one has size set to 200 and the second one - size set to 100, the first will be twice the size of the second one. If the absolute size of their parent is 900px, they will be sized to 600px and 300px respectively.

The end-user can perform the following actions to customize the layout at runtime:

-   Pin/unpin a pane
-   Resize a pane
-   Close a pane
-   Drag a pane to make it float
-   Move a floating pane
-   Dock a floating pane

All of these are reflected in the [`layout`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) property of the Dock Manager.

#### Content Pane

The [content pane]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html) represents a pane with header and content. It can be hosted inside a Split Pane or a Tab Group Pane. Here is how a content pane is defined:

When a pane is unpinned, it appears as a tab header at one of the edges of the Dock Manager. If the end-user selects it, its content appears over the docked pinned panes. To unpin a content pane, set its [`isPinned`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#ispinned) property to `false`.

The [`isPinned`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#ispinned) property affects only content panes that are docked outside a document host. Also, content panes hosted in a floating pane cannot be unpinned.

By default, the unpin destination for a content pane is calculated automatically based on the location of the pane relative to the document host. When more than one document host is defined, the nearest one in the parent hierarchy of the unpinned content pane will be used. If there is no document host defined, the default location is used - [`left`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/enums/igcunpinnedlocation.html#left). It is also possible to set the desired destination of the unpinned pane by using the [`unpinnedLocation`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igccontentpane.html#unpinnedlocation) property.

#### Split Pane

The [split pane]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html) is a container pane which stacks all of its child [`panes`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#panes) horizontally or vertically based on its [`orientation`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#orientation) property. Here is how a horizontal split pane with two child content panes is defined:

The split pane may contain child panes of all pane types including other split panes.

#### Tab Group Pane

The [tab group pane]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html) displays its child content [`panes`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igctabgrouppane.html#panes) as the tabs of a tab component. Here is how a tab group pane with a content pane for each of its two tabs is defined:

#### Document Host

The [document host]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdocumenthost.html) is an area of tabs for documents, similar to the one in Visual Studio for code editing and design view. Here is how to define a document host with two document tabs:

#### Floating Pane

The floating pane is a split pane rendered above all other ones in a floating window. The floating pane definitions are stored in the [`floatingPanes`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagerlayout.html#floatingpanes) property of the [`layout`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout). Here is how to add a floating pane with a single content pane inside:

The [`floatingLocation`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#floatinglocation), [`floatingWidth`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#floatingwidth) and [`floatingHeight`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcsplitpane.html#floatingheight) properties represent absolute dimensions in pixels. Please note that these properties are applied only for the split panes in the [`floatingPanes`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagerlayout.html#floatingpanes) array.

#### Save/Load Layout

To restore or persist a layout, you simply have to get/set the value of the [`layout`]({environment:infragisticsBaseUrl}/products/ignite-ui/dock-manager/docs/typescript/latest/interfaces/igcdockmanagercomponent.html#layout) property. Here is how to save the layout as a stringified JSON:

```ts
private savedLayout: string;

private saveLayout() {
    this.savedLayout = JSON.stringify(this.dockManager.layout);
}

private loadLayout() {
    this.dockManager.layout = JSON.parse(this.savedLayout);
}
```

Please note that modifying any of the properties of the layout object will not trigger an update of the Dock Manager. If that is your goal, you should replace the whole layout object like so:

### Themes

The Dock Manager comes with a light and a dark theme. The light theme is the default one. To change it to dark, you only need to import the `igc.themes.css` file in your css and add the `dark-theme` class to the Dock Manager or any of its parents:

    @import '~igniteui-dockmanager/dist/collection/styles/igc.themes';
