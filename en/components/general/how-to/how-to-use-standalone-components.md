---
title: How to Use Standalone Components - Angular | Ignite UI for Angular
_description: How to use Angular 16 preview feature that allows components to be imported standalone and without the use of NgModules with Ignite UI Angular
_keywords: Ignite UI for Angular, Standalone Components, Angular 16, Angular Modules
---

# Using Standalone Components with Ignite UI for Angular (Preview)

Angular 14 introduced the concept of [standalone components](https://angular.io/guide/standalone-components) which allows for a simplified way of building applications by reducing the need for using `NgModules`. Standalone components were in developer preview until Angular 15. To support this new paradigm, all Ignite UI for Angular components are now exported as `standalone` with version `16.0.0`. All the existing `NgModules` are still exported by the library for backward compatibility. However, they no longer declare any of the Ignite UI for Angular components. Instead they import and export the `standalone` components.

The `standalone` components are still in a **preview** stage. Some utility directive exports may change in the future and may be missing from the documentation in the initial release.

## How to use the new standalone components

Starting with Angular 16 and Ignite UI for Angular 16.0 you can now simply add the imports that your `standalone` component needs in the `imports` property. In the following example `IGX_GRID_DIRECTIVES` can be used to import all grid related components and directives.
    
```typescript
import { IGX_GRID_DIRECTIVES } from 'igniteui-angular';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['grid.sample.scss'],
    templateUrl: 'grid.sample.html',
    standalone: true,
    imports: [IGX_GRID_DIRECTIVES, AsyncPipe]
})
```

But you can also import all components used by your `standalone` component individually. Example with the `IgxGridComponent` and `IgxColumnComponent` when only these two are used by another component is as follows.

```typescript
import { IgxGridComponent, IgxColumnComponent } from 'igniteui-angular';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['grid.sample.scss'],
    templateUrl: 'grid.sample.html',
    standalone: true,
    imports: [IgxGridComponent, IgxColumnComponent, AsyncPipe]
})
```

In addition, as all existing modules are preserved but now only import and export the standalone components, you can also use them for your standalone component.

```typescript
// `NgModule` import of the `IgxGridModule` module, which is equivalent to IGX_GRID_DIRECTIVES in terms of exported components and directives.
import { IgxGridModule } from 'igniteui-angular';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['grid.sample.scss'],
    templateUrl: 'grid.sample.html',
    standalone: true,
    imports: [IgxGridModule, AsyncPipe]
})
```

## Utility Directives

The `IGX_GRID_DIRECTIVES` shown in the previous examples is a utility directive that exports all grid related components and directives. The following table lists all new utility directives that are available in Ignite UI for Angular.

| Directive Collection | Description |
| --- | --- |
| `IGX_ACCORDION_DIRECTIVES` | Exports all accordion related components and directives. |
| `IGX_ACTION_STRIP_DIRECTIVES` | Exports all action strip related components and directives. |
| `IGX_BANNER_DIRECTIVES` | Exports all banner related components and directives. |
| `IGX_BOTTOM_NAV_DIRECTIVES` | Exports all bottom navigation related components and directives. |
| `IGX_BUTTON_GROUP_DIRECTIVES` | Exports all button group related components and directives. |
| `IGX_CALENDAR_DIRECTIVES` | Exports all calendar related components and directives. |
| `IGX_CARD_DIRECTIVES` | Exports all card related components and directives. |
| `IGX_CAROUSEL_DIRECTIVES` | Exports all carousel related components and directives. |
| `IGX_CHIPS_DIRECTIVES` | Exports all chip related components and directives. |
| `IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES` | Exports all circular progress bar related components and directives. |
| `IGX_COMBO_DIRECTIVES` | Exports all combo related components and directives. |
| `IGX_DATE_PICKER_DIRECTIVES` | Exports all date-picker related components and directives. |
| `IGX_DATE_RANGE_PICKER_DIRECTIVES` | Exports all date-range picker related components and directives. |
| `IGX_DIALOG_DIRECTIVES` | Exports all dialog related components and directives. |
| `IGX_DRAG_DROP_DIRECTIVES` | Exports all drag and drop related components and directives. |
| `IGX_DROP_DOWN_DIRECTIVES` | Exports all drop-down related components and directives. |
| `IGX_EXPANSION_PANEL_DIRECTIVES` | Exports all expansion panel related components and directives. |
| `IGX_GRID_DIRECTIVES` | Exports all grid related components and directives. |
| `IGX_HIERARCHICAL_GRID_DIRECTIVES` | Exports all hierarchical grid related components and directives. |
| `IGX_INPUT_GROUP_DIRECTIVES` | Exports all input group related components and directives. |
| `IGX_LINEAR_PROGRESS_BAR_DIRECTIVES` | Exports all linear progress bar related components and directives. |
| `IGX_LIST_DIRECTIVES` | Exports all list related components and directives. |
| `IGX_NAVBAR_DIRECTIVES` | Exports all navbar related components and directives. |
| `IGX_NAVIGATION_DRAWER_DIRECTIVES` | Exports all navigation drawer related components and directives. |
| `IGX_PAGINATOR_DIRECTIVES` | Exports all paginator related components and directives. |
| `IGX_PIVOT_GRID_DIRECTIVES` | Exports all pivot grid related components and directives. |
| `IGX_PROGRESS_BAR_DIRECTIVES` | Exports all progress bar related components and directives. |
| `IGX_QUERY_BUILDER_DIRECTIVES` | Exports all query builder related components and directives. |
| `IGX_SELECT_DIRECTIVES` | Exports all select related components and directives. |
| `IGX_SIMPLE_COMBO_DIRECTIVES` | Exports all simple combo related components and directives. |
| `IGX_SLIDER_DIRECTIVES` | Exports all slider related components and directives. |
| `IGX_SPLITTER_DIRECTIVES` | Exports all splitter related components and directives. |
| `IGX_STEPPER_DIRECTIVES` | Exports all stepper related components and directives. |
| `IGX_TABS_DIRECTIVES` | Exports all tabs related components and directives. |
| `IGX_TIME_PICKER_DIRECTIVES` | Exports all time picker related components and directives. |
| `IGX_TOOLTIP_DIRECTIVES` | Exports all tooltip related components and directives. |
| `IGX_TREE_DIRECTIVES` | Exports all tree related components and directives. |
| `IGX_TREE_GRID_DIRECTIVES` | Exports all tree grid related components and directives. |

## Additional Resources

Related topics:

- [Standalone Components](https://angular.io/guide/standalone-components)
- [Getting started with Ignite UI for Angular](../getting-started.md)
- [Server-side Rendering with Angular](../ssr-rendering.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)