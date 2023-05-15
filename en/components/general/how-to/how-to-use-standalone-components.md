---
title: How to Use Standalone Components - Angular | Ignite UI for Angular
_description: How to use Angular 16 preview feature that allows components to be imported standalone and without the use of NgModules with Ignite UI Angular
_keywords: Ignite UI for Angular, Standalone Components, Angular 16, Angular Modules
---

# Using Standalone Components with Ignite UI for Angular (Preview)

Angular 16 introduces the concept of [standalone components](https://angular.io/guide/standalone-components) which allows for a simplified way of building applications by reducing the need for using `NgModules`. To support this new paradigm, all Ignite UI for Angular components are now exported as `standalone`. All the existing `NgModules` are still exported by the library for backward compatibility. However, they no longer declare any of the Ignite UI for Angular components. Instead they import and export the `standalone` components.

The `standalone` components are still in a **preview** stage. Some utility directive exports may change in the future and may be missing from the documentation in the initial release.

## How to use the new standalone components

Starting with Angular 16 and Ignite UI for Angular 16.0 you can now simply add the imports that your component needs in the `imports` property. In the following example `IGX_GRID_DIRECTIVES` can be used to import all grid related components and directives.
    
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

But you can also import only `IgxGridComponent`.

```typescript
import { IgxGridComponent } from 'igniteui-angular';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['grid.sample.scss'],
    templateUrl: 'grid.sample.html',
    standalone: true,
    imports: [IgxGridComponent, AsyncPipe]
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

## Additional Resources

Related topics:

- [Standalone Components](https://angular.io/guide/standalone-components)
- [Getting started with Ignite UI for Angular](../getting-started.md)
- [Server-side Rendering with Angular](../ssr-rendering.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
