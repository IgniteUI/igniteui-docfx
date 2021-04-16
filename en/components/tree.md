---
title: Tree Component - Native Angular | Ignite UI for Angular 
_description: 
_keywords: 
---

# Angular Tree Component Overview

The Angular Tree Component allows users to represent hierarchical data in a tree fashion, maintaining parent-child relationships. It's primary purpose is to navigate within nested data structures.

## Angular Tree Example

<code-view style="height: 513px" 
           data-demos-base-url="{environment:demosBaseUrl}/lists/tree-basic-sample" 
           iframe-src="" alt="Angular Tree Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Tree

To get started with the Angular Tree component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxTreeModule` in your app.module file. 

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
Now that we have the tree module imported, let’s get started with a basic configuration of the `igx-tree` and its nodes.

## Usage

[IgxTreeNodesComponent]({environment:angularApiUrl}/classes/igxtreenodecomponent.html) is the representation of every node that belongs to the [IgxTreeComponent]({environment:angularApiUrl}/classes/igxtreecomponent.html).  
Nodes provide [disabled]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#disabled), [active]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#active), [selected]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#selected) and [expanded]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#expanded) properties, which give you opportunity to configure the look and feel of the node as per your requirement. 
[data]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#data) property can be used to add a reference to data entry the node visualizing. Binding `[data]` is required for searching through nodes using [IgxTreeComponent.findNodes()]({environment:angularApiUrl}/classes/igxtreecomponent.html#findNodes).

### Declaring a tree

Nodes can be declared using one of the following approaches.

- Declaring the tree and its nodes by specifying the node hierarchy and iterating through a data set

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

- Declaring a tree by creating individual nodes manually

In order to render a tree you do not necessarily need a data set - individual nodes can be created without binding them to data:

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
To create a reusable template for your nodes, declare `<ng-template>` **within `igx-tree`**. 
```html
 <igx-tree>
    <igx-tree-node #myNode *ngFor="let node of data" [data]="node">
        <ng-template *ngTemplateOutlet="nodeTemplate; context { $implicit: myNode }">
        </ng-template>
        <igx-tree-node *ngFor="let child of node.ChildCompanies" [data]="child">
            {{ child.CompanyName }}                           
        </igx-tree-node>
    </igx-tree-node>                      
                   
    <ng-template #nodeTemplate let-node>
        <igx-combo type="line" [(ngModel)]="node.CompanyName" [displayKey]="'CompanyName'" [data]="data" width="220px"></igx-combo>
    </ng-template>
</igx-tree>
```
Additionally, by using the [expandIndicator]({environment:angularApiUrl}/classes/igxtreecomponent.html#expandIndicator) input you have the ability to set a custom template to be used for rendering the expand/collapse indicators of nodes.
```html
<igx-tree>
    <igx-tree-node *ngFor="let node of data" [data]="node">
    </igx-tree-node>
    <ng-template igxTreeExpandIndicator let-expanded>
        <igx-icon>{{ expanded ? 'expand_less' : 'expand_more' }}</igx-icon>
    </ng-template>
</igx-tree>
```

## Selection
In order to setup node selection in the `igx-tree`, you just need to set its [selection]({environment:angularApiUrl}/classes/igxtreecomponent.html#selection) property. This property accepts the following three modes: **None**, **Bi-State** and **Cascading**. Below we will take a look at each of them in more detail.
### None
In the `igx-tree` by default node selection is disabled. Users cannot select or deselect a row through UI interaction, but these actions can still be completed through the provided API method.
### Bi-State
To enable bi-state node selection in the `igx-tree` just set the [selection]({environment:angularApiUrl}/classes/igxtreecomponent.html#selection) property to **BiState**. This will render a checkbox for every node.  Each node has two states - selected or not.  This mode supports multiple selection.
```html
<igx-tree [selection]="'BiState'">
</igx-tree>
```
### Cascading
To enable cascade node selection in the `igx-tree` just set the selection property to **Cascading**. This will render a checkbox for every node. 
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
 - <kbd>Shift + Space</kbd> - toggles selection of all nodes between the active one and the one pressed Space while holding Shift if selection is enabled
 - <kbd>Enter</kbd> - activate the focused node. If the node has link in it, open the link
 - <kbd>*</kbd> - expand the node and all sibling nodes on the same level

When selection is enabled, end-user selection of nodes is only allowed through the rendered checkbox. Since both selection types allow multiple selection, the following mouse + keyboard interaction is available

 - <kbd>Click</kbd> - when performed on the node checkbox toggles selection of the node if selection is enabled. Otherwise, focuses the node
 - <kbd>Shift + Click</kbd> - when performed on the node checkbox toggles selection of all nodes between the active one and the one clicked while holding Shift if selection is enabled

## Load On Demand

The Ignite UI for Angular IgxTree can be rendered in such way that it requires the minimal amount of data to be retrieved from the server so the user could see it as quickly as possible. Then, only after the user expands a node, the children for that particular parent node will be loaded. This mechanism, also known as Load on Demand, can be easily configured to work with any remote data.
### Demo
<code-view style="height: 513px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="" alt="Tree Load On Demand Example">
</code-view>

After the user clicks the expand icon, it is replaced by a loading indicator. When the loading property resolves to false, the loading indicator disappears and the children are loaded.

## Angular Tree Styling
Using the [Ignite UI for Angular Theming](themes/index.md), we can greatly alter the tree appearance. First, in order for us to use the functions exposed by the theme engine, we need to import the `index` file in our style file: 

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [igx-tree-theme]({environment:sassApiUrl}/index.html#function-igx-tree-theme) and pass the parameters, which we would like to change: 
```scss
$custom-tree-theme: igx-tree-theme(
    $background-selected: #ffe6cc,
    $background-active:#ECAA53,
    $background-active-selected:  #ff8c1a
);
```

### Using CSS Variables

The last step is to include the component's theme.
```scss
:host {
    @include igx-css-vars($custom-tree-theme);
}
```

### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since CSS variables are not supported there.

If the component is using the [Emulated](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`: 
```scss
:host {
    ::ng-deep {
        @include igx-combo($custom-tree-theme);    
    }
}
```
## Known Issues and Limitations

|Limitation|Description|
|--- |--- |
| Recursive template nodes | The `igx-tree` does not support recursively creating the igx-tree-nodes via template. [Learn more](https://github.com/IgniteUI/igniteui-angular/wiki/Tree-Specification#assumptions-and-limitations). All of the nodes should be declared manually, meaning if you intend to visualize a very deep hierarchy, this would impact the size of your template file. The tree is intended to be primarily used as a layout / navigational component. If a hierarchical data source with numerous levels of depth and homogenous data needs to be visualized, you could use the [**IgxTreeGrid**](treegrid/tree-grid.md)|
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