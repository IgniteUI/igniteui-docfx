---
title: Dock Manager | Updating Panes | Ignite UI for Angular | Infragistics
_description:
_keywords: dock manager, layout, updating panes, Ignite UI for Angular, Infragistics
---

## Embedding Frames in Dock Manager

The Angular Dock Manager component provides you with the layout for embedding interactive content in your application using panes.

### Demo

<div class="sample-container loading" style="height: 600px">
    <iframe id="dock-manager-embedding-frames-iframe" src='{environment:dvDemosBaseUrl}/layouts/dock-manager-embedding-frames' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dock-manager-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

<!--
### Usage

Once the Dock Manager is imported, you can add it on the page:

```html
<igc-dockmanager id="dockManager">
</igc-dockmanager>
```

```ts
import { IgcDockManagerPaneType, IgcSplitPaneOrientation, IgcDockManagerComponent } from 'igniteui-dockmanager';

// ...

this.dockManager = document.getElementById("dockManager") as IgcDockManagerComponent;
this.dockManager.layout = {
    rootPane: {
        type: IgcDockManagerPaneType.splitPane,
        orientation: IgcSplitPaneOrientation.horizontal,
        panes: [
            {
                type: IgcDockManagerPaneType.contentPane,
                contentId: 'content1',
                header: 'Pane 1'
            }
        ]
    }
};
```

```html
<igc-dockmanager id="dockManager">
    <div slot="content1" style="width: 100%; height: 100%;">Content 1</div>
</igc-dockmanager>
``` -->
