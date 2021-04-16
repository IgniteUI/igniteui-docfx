---
title: Tree Component - Native Angular | Ignite UI for Angular 
_description: 
_keywords: 
---

# Angular Tree Component Overview

The Angular Tree Component allows users to represent hierarchical data in a tree fashion, maintaining parent-child relationship. It's primary purpose is to navigate within nested data structures.

## Angular Tree Example

<code-view style="height: 513px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="" alt="Angular Tree Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Tree

To get started with the Angular Tree component, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxTreeModule`  in your  app.module file. 

```typescript
// app.module.ts

...
import { IgxTreeModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxTreeModule],
    ...
})
export class AppModule {}
```
Now that we have the grid module imported, let’s get started with a basic configuration of the igx-tree and its nodes.

## Usage

[IgxTreeNodesComponent]({environment:angularApiUrl}/classes/igxtreenodecomponent.html) is the representation of every node that belongs to the [IgxTreeComponent]({environment:angularApiUrl}/classes/igxtreecomponent.html).  
Nodes provide [disabled]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#disabled), [active]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#active), [selected]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#selected) and [expanded]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#expanded) properties, which give you opportunity to configure the look and feel of the node as per your requirement. 
[data]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#data) property refers to the data entry that the node visualizes and it is required for searching through nodes.

Nodes can be declared using one of the following approaches.
### Declaring a tree

- **Declaring the tree and its nodes by specifying the node hierarchy and iterating through a data set**

```html
<igx-tree>
	<igx-tree-node *ngFor="let node of data" [data]="node" [expanded]="isNodeExpaded(node)" [selected]="isNodeSelected(node)">
		{{ node.text }}
		<img [src]="node.image" alt="node.imageAlt" />
		<igx-tree-node *ngFor="let child of node.children" [data]="child" [expanded]="isNodeExpaded(child)" [selected]="isNodeSelected(child)">
            {{ child.text }}
		</igx-tree-node>
	</igx-tree-node>
</igx-tree>
```

Nodes can be bound to a data model so that their expanded and selected states are reflected in the underlying data as well.

```html
<igx-tree (nodeSelection)="handleSelectionEvent($event)">
	<igx-tree-node *ngFor="let nodes of data" [data]="node" [(expanded)]="node.expanded" [(selected)]="node.selected">
		{{ node.text }}
		<img [src]="node.image" alt="node.imageAlt" />
		<igx-tree-node *ngFor="let child of node.children" [data]="child">
				<a igxTreeNodeLink href="child.url" target="_blank">
                    {{ child.text }}
                </a>
		</igx-tree-node>
	</igx-tree-node>
</igx-tree>
```

- **Declaring a tree by creating individual nodes manually**

In order to render a tree you do not necessarily need a data set - users can create individual nodes without binding them to data:

```html
<igx-tree>
	<igx-tree-node [expanded]="true" [selected]="false">
		I am a parent node 1
		<img [src]="hard_coded_src.webb" alt="Alt Text" />
		
		<igx-tree-node [expanded]="true" [selected]="false">
			I am a child node 1
			<igx-tree-url-node [url]="https://google.com">
				I am a child node of the child
			</igx-tree-url-node>
		</igx-tree-node>
	</igx-tree-node>
	
	<igx-tree-node [expanded]="false" [selected]="false">
		I am a parent node 2
		<img [src]="hard_coded_src.webb" alt="Alt Text" />
        <igx-tree-node [expanded]="false" [selected]="false">
			I am a child node 1
		</igx-tree-node>
	</igx-tree-node>

	<igx-tree-node [expanded]="false" [selected]="false">
		I am a parent node 3
		<img [src]="hard_coded_src.webb" alt="Alt Text" />
		
		<igx-tree-node [expanded]="false" [selected]="false">
			I am a child node 1
		</igx-tree-node>
	</igx-tree-node>

    <igx-tree-node [expanded]="false" [selected]="false" [disabled]="true">
		I am a parent node 4
	</igx-tree-node>
</igx-tree>
```

### Nodes with links
When a node should render a link, the `IgxTreeNodeLink` directive should be added to the a tag. This will ensure the proper aria role is assigned to the node's DOM elements.

```html
<igx-tree>
	<igx-tree-node *ngFor="let nodes of data" [data]="node" [expanded]="isNodeExpaded(node)" [selected]="isNodeSelected(node)">
		{{ node.text }}
		<img [src]="node.image" alt="node.imageAlt" />
		<igx-tree-node *ngFor="let child of node.children" [data]="child">
				<a igxTreeNodeLink href="child.url" target="_blank">
                    {{ child.text }}
                </a>
		</igx-tree-node>
	</igx-tree-node>
</igx-tree>
```
### Node Interactions
IgxTree provides the following API methods for node interactions:
- [**expand**]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#expand) - expands the node
- [**collapse**]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#collapse) - collapses the node
- [**toggle**]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#toggle) - toggles node expansion state
- [**collapseAll**]({environment:angularApiUrl}/classes/igxtreecomponent.html#collapseAll) - collapses the specified nodes. If no nodes are passed, collapses all parent nodes.
- [**expandAll**]({environment:angularApiUrl}/classes/igxtreecomponent.html#expandAll) - sets the specified nodes as expanded. If no nodes are passed, expands all parent nodes.
- [**deselectAll**]({environment:angularApiUrl}/classes/igxtreecomponent.html#deselectAll) - deselects all nodes. If a nodes array is passed, deselects only the specified nodes. Does not emit nodeSelection event.

### Finding Nodes
You can find a specific node within IgxTree by using the [findNodes]({environment:angularApiUrl}/classes/igxtreecomponent.html#findNodes) method.  It returns an array of nodes, which match the specified data.
When finding nodes, you can pass a custom comparer function in order to find the data.
```html
<igx-tree>
	<igx-tree-node *ngFor="let nodes of data" [data]="node" [expanded]="isNodeExpaded(node)" [selected]="isNodeSelected(node)">
		{{ node.text }}
		<img [src]="node.image" alt="node.imageAlt" />
		<igx-tree-node *ngFor="let child of node.children" [data]="child" [expanded]="isNodeExpaded(child)" [selected]="isNodeSelected(child)">
      {{ child.text }}
		</igx-tree-node>
	</igx-tree-node>
</igx-tree>
```
```typescript
export class MyTreeViewComponent {
  public data: { [key: string]: any, valueKey: string } = MY_DATA;
  @ViewChild(IgxTreeComponent, { read: IgxTreeComponent })
  public tree;

  findNode(valueKey: string) {
    const comparer: (nodeData: any, node: IgxTreeNodeComponent) => boolean =
      (data: any, node: IgxTreeNodeComponent) => nodeData.valueKey === data;
    this.tree.findData(valueKey, comparer);
  }
}
```
### Templating
To create a custom node template within igx-tree, declare `<ng-template>`. From the template you can access the implicitly provided context variable, with properties that give you information about the node. 
```html
 <igx-tree>
    <igx-tree-node #node>
        <ng-template *ngTemplateOutlet="nodeTemplate; context { $implicit: node }">
        </ng-template>
    </igx-tree-node>
    <ng-template #nodeTemplate let-node>
        <igx-combo type="line" [(ngModel)]="node.CompanyName" [displayKey]="'CompanyName'" [data]="data" width="220px"></igx-combo>
    </ng-template>
</igx-tree>
```
Additionally, by using the [expandIndicator]({environment:angularApiUrl}/classes/igxtreecomponent.html#expandIndicator) input you have the ability to set a custom template to be used for rendering the expand/collapse indicators of nodes.


## Selection
In order to setup node selection in the igx-tree, you just need to set its selection property. This property accepts the following three modes: **None**, **Bi-State** and **Cascading**. Below we will take a look at each of them in more detail.
### None
In the igx-tree by default node selection is disabled. So you can not select or deselect a row through interaction with the Tree UI, the only way to complete these actions is to use the provided API method.
### Bi-State
To enable bi-state node selection in the igx-tree just set the [selection]({environment:angularApiUrl}/classes/igxtreecomponent.html#selection) property to **BiState**. This will render a checkbox for every node.  Each node has two states - selected or not.  This mode supports multiple selection.
```html
<igx-tree [selection]="'BiState'">
</igx-tree>
```
### Cascading
To enable cascade node selection in the igx-tree just set the selection property to **Cascading**. This will render a checkbox for every node. 
```html
<igx-tree [selection]="'Cascading'">
</igx-tree>
```
In this mode a parent's selection state entirely depends on the selection state of its children. When a parent has some selected and some deselected children, its checkbox is in an indeterminate state.

## Keyboard Navigation
Keyboard navigation in IgxTree provides a rich variety of keyboard interactions for the user. This functionality is enabled by default and allows to navigate through the nodes.

The IgxTree navigation is compliant with W3C accesibility standards and convenient to use.

**Key Combinations**

 - <kbd>Arrow Down</kbd> - navigates to the next visible node. Marks the node as active. Does nothing if on the LAST node
 - <kbd>Ctrl + Arrow Down</kbd> - navigates to the next visible node. Does nothing if on the LAST node
 - <kbd>Arrow Up</kbd> - navigates to the previous visible node. Marks the node as active. Does nothing if on the FIRST node
 - <kbd>Ctrl + Arrow Up</kbd> - navigates to the previous visible node. Does nothing if on the FIRST node
 - <kbd>Arrow Left</kbd> - on an expanded parent node, collapses it. If on a child node, moves to its parent node.
 - <kbd>Arrow Right</kbd> - on an expanded parent node, navigates to the first child of the node. If on a collapsed parent node, expands it.
 - <kbd>Home</kbd> - navigates to the FIRST node
 - <kbd>End</kbd> - navigates to the LAST visible node
 - <kbd>Tab</kbd> - navigates to the next focusable element on the page, outside of the tree
 - <kbd>Shift + Tab</kbd> - navigates to the previous focusable element on the page, outside of the tree
 - <kbd>Space</kbd> - toggles selection of the current node. Marks the node as active.
 - <kbd>Enter</kbd> - activate the focused node. If the node has link in it, open the link
 - <kbd>*</kbd> - expand the node and all sibling nodes on the same level

When selection is enabled, end-user selection of nodes is only allowed through the rendered checkbox. Since both selection types allow multiple selection, the following mouse + keyboard interaction is available

 - <kbd>Click</kbd> - toggles selection of the node if selection is enabled. Otherwise, focuses the node
 - <kbd>Shift + Click</kbd> - toggles selection of all nodes between the active one and the one clicked while holding SHIFT if selection is enabled

## Load On Demand
## Styling

## Known Issues and Limitations

|Limitation|Description|
|--- |--- |
| Recursive template nodes | The igx-tree does not support recursively creating the igx-tree-nodes via template. [Learn more](https://github.com/IgniteUI/igniteui-angular/wiki/Tree-Specification#assumptions-and-limitations). All of the nodes should be declared manually, meaning if you intend to visualize a very deep hierarchy, this would impact the size of your template file. The tree is intended to be primarily used as a layout / navigational component. If a hierarchical data source with numerous levels of depth and homogenous data needs to be visualized, you could use the [**IgxTreeGrid**](treegrid/tree-grid.md)|
|Using IgxTreeNodes with old View Engine (pre-Ivy)|There is an issue in Angular's View Engine (pre-Ivy) that prevents the tree from being used when `enableIvy: false` is set in tsconfig.json|
|Tab navigation in FireFox|Tabbing into the tree via keyboard navigation, when the tree has a scrollbar, will first focus the igx-tree-node element. This is the default behavior in FireFox, however it can be resolved by putting an explicit `tabIndex = -1` on the tree.
## API References
<div class="divider"></div>

* [IgxTreeComponent]({environment:angularApiUrl}/classes/igxtreecomponent.html)
* [IgxTreeNodeComponent]({environment:angularApiUrl}/classes/igxtreenodecomponent.html)

## Additional Resources
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)