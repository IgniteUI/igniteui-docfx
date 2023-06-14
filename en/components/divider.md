---
title: Angular Divider Component
_description: Ignite UI for Angular Divider component enables users to separate content both horizontally and vertically.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Angular Divider component, Angular Divider directive, Angular Divider control
---

# Angular Divider Component Overview

<p class="highlight">The divider component enables users to separate content both horizontally and vertically.</p>
<div class="divider"></div>

## Angular Divider Example

By default the divider is a solid horizontal line.


<code-view style="height:207px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/divider-sample-1" alt="Angular Divider Example">
</code-view>

## Getting Started with Ignite UI for Angular Divider

To get started with the Ignite UI for Angular Divider component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxDividerModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxDividerModule } from 'igniteui-angular';
// import { IgxDividerModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxDividerModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxDividerDirective` as a standalone dependency.

```typescript
// home.component.ts

import { IgxDividerDirective } from 'igniteui-angular';
// import { IgxDividerDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-divider></igx-divider>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxDividerDirective]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Divider module or directive imported, you can start using the `igx-divider` component.

## Using the Angular Divider

### Vertical Divider
By adding the `vertical` attribute and setting its value to `true`, you can change the direction of the divider from horizontal to vertical.

```html
<igx-divider [vertical]="true"></igx-divider>
```

<code-view style="height:238px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/divider-sample-2" >
</code-view>


### Dashed Divider
The default style of the divider is a `solid` line but it can also be `dashed`.
To change the default look simply use the `type` attribute of the divider and set its value to `dashed`.

```html
<igx-divider type="dashed"></igx-divider>
```

<code-view style="height:187px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/divider-sample-3" >
</code-view>


### Inset Divider
The divider can be set in on both sides.
To inset the divider, set the `middle` attribute of the divider to `true` and provider the desired `inset` value, the divider will start shrinking from both ends.

**Keep in mind that you have to add unit(px,rem,%...) at the end of the value otherwise, it will not work.**

```html
// Both side
<igx-divider [middle]="true" inset="80px"></igx-divider>

// Left side only 
<igx-divider inset="40px"></igx-divider>

```

<code-view style="height:311px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/divider-sample-4" >
</code-view>


If the value of the `middle` attribute is set to a falsy value, or if the attribute is omitted altoghether, the divider will set in only on the left.

## API References
<div class="divider--half"></div>

* [IgxDividerDirective]({environment:angularApiUrl}/classes/igxdividerdirective.html)
* [IgxDividerDirective Styles]({environment:sassApiUrl}/index.html#function-divider-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

