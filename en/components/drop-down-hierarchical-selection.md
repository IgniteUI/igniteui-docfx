---
title: Multi-select Hierarchical Drop Down- Ignite UI for Angular
_description: Learn how to create a multi-select tree-style hierarchical drop-down with Ignite UI.
_keywords: Multi-select drop-down, hierarchical selection, ignite ui for angular, infragistics
---

# Multi-select Hierarchical Drop Down

The following samples demonstrate how to create a multi-select hierarchical drop-down that allows the user to select single or multiple options from a tree-style hierarchical drop-down list.

## Topic Overview

For the drop-down list we will use the [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) as well as the [IgxToggleActionDirective]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) to open/close the drop-down.

To visualize the hierarchical data in the drop-down, you can use either the [IgxTreeComponent]({environment:angularApiUrl}/classes/igxtreecomponent.html) or the [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html).

The [`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html) is used to display the selected items.

## Selection

To display selected nodes/rows from the list use the [`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html) by handling the events that notify of selection changes and populate the `selectedNodes` / `selectedRows` array. This can be done by subscribing to the IgxTreeComponent's [`nodeSelection`]({environment:angularApiUrl}/classes/igxtreecomponent.html#nodeSelection) event and to the IgxTreeGridComponent's [`rowSelectionChanging`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowSelectionChanging) event.

To remove the chip from the DOM and deselect the item from the tree/grid, you have to handle the [`remove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#remove) event.

### Demo
<code-view style="height: 560px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/dropdown-tree-hierarchical-selection" >
</code-view>

<code-view style="height:560px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/dropdown-tree-grid-hierarchical-selection">
</code-view>


## API References

* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxChipComponent]({environment:angularApiUrl}/classes/igxchipcomponent.html)
* [IgxChipsAreaComponent]({environment:angularApiUrl}/classes/igxchipsareacomponent.html)
* [IgxTreeComponent]({environment:angularApiUrl}/classes/igxtreecomponent.html)
* [IgxTreeNodeComponent]({environment:angularApiUrl}/classes/igxtreenodecomponent.html)
* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)

## Additional Resources
<div class="divider--half"></div>    

* [Drop Down overview](drop-down.md)
* [Chip overview](chip.md)
* [Tree overview](tree.md)
* [Tree Grid overview](treegrid/tree-grid.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.    

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)    
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)     
