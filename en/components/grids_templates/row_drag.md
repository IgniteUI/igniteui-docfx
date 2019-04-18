@@if (igxName === 'IgxGrid') {
---
title: Grid Row Drag
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Row Drag, Row Dragging, Data Grid Row Drag, Data Table Row Drag
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Tree Grid Row Drag
_description: The Ignite UI for Angular Tree Grid control features the fastest, touch-responsive data-rich tree grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Row Drag, Row Dragging, Tree Grid Row Drag, Tree Table Row Drag
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Hierarchical Grid Row Drag
_description: The Ignite UI for Angular Hierarchical Grid control features the fastest, touch-responsive data-rich tree grid with popular features.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Row Drag, Row Dragging, Hierarchical Grid Row Drag, Hierarchical Table Row Drag
---
}

### @@igComponent Row Drag

In Ignite UI for Angular @@igComponent, **RowDrag** is initialized on the root `@@igSelector` component and is configurable via the [`rowDrag`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowDrag) input.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-row-drag-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-row-drag' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-row-drag-to-grid-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-row-drag-to-grid' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-drag-to-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {

}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:560px">
    <iframe id="hierarchical-grid-row-drag-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-drag' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-drag-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
