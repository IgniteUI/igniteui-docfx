---
title: How to Use Standalone Components - Angular | Ignite UI for Angular
_description: How to use Ignite UI for Angular components as standalone components, and as dependencies in your other standalone components.
_keywords: Ignite UI for Angular, Standalone Components, Angular 16, Angular Modules
---

# Using Standalone Components with Ignite UI for Angular

Angular 14 introduced the concept of [standalone components](https://angular.io/guide/standalone-components) which allows for a simplified way of building applications by reducing the need for using `NgModules`. Standalone components were in developer preview until Angular 15. To support this new paradigm, all Ignite UI for Angular components are now exported as `standalone` with version `16.0.0`. As of Angular 19 all compoenents are standalone by default. All the existing `NgModules` are still exported by the library for backward compatibility. However, they no longer declare any of the Ignite UI for Angular components. Instead they import and export the `standalone` components.

## How to use the new standalone components

Starting with Angular 16 and Ignite UI for Angular 16.0 you can now simply add the imports that your `standalone` component needs in the `imports` property. In the following example `IGX_GRID_DIRECTIVES` can be used to import all grid related components and directives.
    
```typescript
import { IGX_GRID_DIRECTIVES } from 'igniteui-angular';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['grid.sample.scss'],
    templateUrl: 'grid.sample.html',
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
    imports: [IgxGridModule, AsyncPipe]
})
```

## Utility Directives

The `IGX_GRID_DIRECTIVES` shown in the previous examples is a utility directive that exports all grid related components and directives. The following table lists all new utility directives that are available in Ignite UI for Angular.

| Directive Collection | Description |
| --- | --- |
| [`IGX_ACCORDION_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/accordion/public_api.ts) | Exports all accordion related components and directives. |
| [`IGX_ACTION_STRIP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/action-strip/public_api.ts) | Exports all action strip related components and directives. |
| [`IGX_BANNER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/banner/public_api.ts) | Exports all banner related components and directives. |
| [`IGX_BOTTOM_NAV_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/tabs/bottom-nav/public_api.ts) | Exports all bottom navigation related components and directives. |
| [`IGX_BUTTON_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/buttonGroup/public_api.ts) | Exports all button group related components and directives. |
| [`IGX_CALENDAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/calendar/public_api.ts) | Exports all calendar related components and directives. |
| [`IGX_CARD_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/card/public_api.ts) | Exports all card related components and directives. |
| [`IGX_CAROUSEL_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/carousel/public_api.ts) | Exports all carousel related components and directives. |
| [`IGX_CHIPS_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/chips/public_api.ts) | Exports all chip related components and directives. |
| [`IGX_CIRCULAR_PROGRESS_BAR_DIRECTIVES `](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/progressbar/public_api.ts) | Exports all circular progress bar related components and directives. |
| [`IGX_COMBO_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/combo/public_api.ts) | Exports all combo related components and directives. |
| [`IGX_DATE_PICKER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/date-picker/public_api.ts) | Exports all date-picker related components and directives. |
| [`IGX_DATE_RANGE_PICKER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/date-range-picker/public_api.ts) | Exports all date-range picker related components and directives. |
| [`IGX_DIALOG_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/dialog/public_api.ts) | Exports all dialog related components and directives. |
| [`IGX_DRAG_DROP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/directives/drag-drop/public_api.ts) | Exports all drag and drop related components and directives. |
| [`IGX_DROP_DOWN_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/drop-down/public_api.ts) | Exports all drop-down related components and directives. |
| [`IGX_EXPANSION_PANEL_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/expansion-panel/public_api.ts) | Exports all expansion panel related components and directives. |
| [`IGX_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/grids/grid/public_api.ts) | Exports all grid related components and directives. |
| [`IGX_HIERARCHICAL_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/grids/hierarchical-grid/public_api.ts) | Exports all hierarchical grid related components and directives. |
| [`IGX_INPUT_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/input-group/public_api.ts) | Exports all input group related components and directives. |
| [`IGX_LINEAR_PROGRESS_BAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/progressbar/public_api.ts) | Exports all linear progress bar related components and directives. |
| [`IGX_LIST_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/list/public_api.ts) | Exports all list related components and directives. |
| [`IGX_NAVBAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/navbar/public_api.ts) | Exports all navbar related components and directives. |
| [`IGX_NAVIGATION_DRAWER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/navigation-drawer/public_api.ts) | Exports all navigation drawer related components and directives. |
| [`IGX_PAGINATOR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/paginator/public_api.ts) | Exports all paginator related components and directives. |
| [`IGX_PIVOT_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/grids/pivot-grid/public_api.ts) | Exports all pivot grid related components and directives. |
| [`IGX_PROGRESS_BAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/progressbar/public_api.ts) | Exports all linear and circular progress bar related components and directives. |
| [`IGX_QUERY_BUILDER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/query-builder/public_api.ts) | Exports all query builder related components and directives. |
| [`IGX_RADIO_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/directives/radio/public_api.ts) | Exports all radio group related components and directives. |
| [`IGX_SELECT_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/select/public_api.ts) | Exports all select related components and directives. |
| [`IGX_SIMPLE_COMBO_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/simple-combo/public_api.ts) | Exports all simple combo related components and directives. |
| [`IGX_SLIDER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/slider/public_api.ts) | Exports all slider related components and directives. |
| [`IGX_SPLITTER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/splitter/public_api.ts) | Exports all splitter related components and directives. |
| [`IGX_STEPPER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/stepper/public_api.ts) | Exports all stepper related components and directives. |
| [`IGX_TABS_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/tabs/tabs/public_api.ts) | Exports all tabs related components and directives. |
| [`IGX_TIME_PICKER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/time-picker/public_api.ts) | Exports all time picker related components and directives. |
| [`IGX_TOOLTIP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/directives/tooltip/public_api.ts) | Exports all tooltip related components and directives. |
| [`IGX_TREE_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/tree/public_api.ts) | Exports all tree-view related components and directives. |
| [`IGX_TREE_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/grids/tree-grid/public_api.ts) | Exports all tree grid related components and directives. |

## Additional Resources

Related topics:

- [Standalone Components](https://angular.io/guide/standalone-components)
- [Getting started with Ignite UI for Angular](../getting-started.md)
- [Server-side Rendering with Angular](../ssr-rendering.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
