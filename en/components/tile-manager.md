---
title: Manage Angular Page Layout | Tile Manager | Ignite UI | Infragistics
_description: The Ignite UI for Angular Tile Manager component enables the display of content in individual tiles.
_keywords: manage angular page layout, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Tile Manager, Infragistics, Tile , Angular Tile Manager component, Angular Tile Manager control
---
# Angular Tile Manager Overview

The Tile Manager component enables the display of content in individual tiles. It allows users to interact with these tiles by rearranging and resizing them, giving them the freedom to customize the layout and appearance of the content according to their preferences. This flexibility enhances the user experience by enabling a more personalized and efficient way to view and manage content.

## Angular Tile Manager Example

The following Ignite UI for Angular Tile Manager Example shows the component in action. 

<code-view style="height:752px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/tile-manager-sample" alt="Angular Tile Manager Example">
</code-view>
<div class="divider--half"></div>

> [!WARNING]
> Due to the iframe permissions policy, the fullscreen button in this example will only work when the example is opened in standalone mode by clicking the 'Expand to fullscreen' button in the top-right corner.

## Getting Started with Ignite UI for Angular Tile Manager

Ignite UI Tile Manager is a standard [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) and as such can be used in an Angular application.

To start using it, first, you need to install the Ignite UI for Web Components package by running the following command:

```cmd
npm install igniteui-webcomponents --save
```

Next, you should call the `defineCustomElements()` function with `IgcTileManagerComponent` argument either in your `main.ts` file or in the component `.ts` file that is using `IgcTileManager`.

```ts
import { defineComponents, IgcTileManagerComponent } from 'igniteui-webcomponents';

defineComponents(IgcTileManagerComponent);
```

Now you can start with a basic configuration of the Angular Tile Manager.

## Usage

The Tile Manager provides a base tile layout behavior, managing the placement of tiles in maximized or normal state. The tiles can be sized independently of each other and used to form complex layouts. End users can reorder tiles by dragging and dropping them, providing a flexible and intuitive experience. 

The Tile Manager offers two components that we can use:
- `IgcTileComponent` - This component represents an individual tile displayed within the Tile Manager.
- `IgcTileManagerComponent` - This is the main component that contains all of the tile components, serving as the container for the entire tile layout.

```html
<igc-tile-manager>
  <igc-tile>
    <p>Tile 1</p>
  </igc-tile>
  <igc-tile>
    <p>Tile 2</p>
  </igc-tile>
  <igc-tile>
    <p>Tile 3</p>
  </igc-tile>
</igc-tile-manager>
```

For a complete introduction to the Ignite UI for Angular, read the [*Getting Started*](general/getting-started.md) topic.

For further information on the usage of the Tile Manager component, you can check out [this topic]({environment:infragisticsBaseUrl}/products/ignite-ui-web-components/web-components/components/layouts/tile-manager.html).
