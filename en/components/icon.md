---
title: Icon Component
_description: Developers can unify and use various icon and font sets interchangeably with custom colors and more with Ignite UI for Angular Icon component. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Icon components, Angular Icon controls
---

# Icon
<p class="highlight">The Ignite UI for Angular Icon component unifies icon/font families so developers can use them interchangeably and add material icons to markup.</p>

## Angular Icon Example


<code-view style="height: 75px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/icon-sample-1" alt="Angular Icon Example">
</code-view>


<div class="divider--half"></div>

## Usage

The Icon component is exported as an `NgModule`, thus all you need to do in your application is to import the `IgxIconModule` inside your `AppModule`:

```typescript
// app.module.ts

import { IgxIconModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxIconModule,
        ...
    ]
})
export class AppModule {}
```
## Examples

### Icon Color

Use the [`color`]({environment:angularApiUrl}/classes/igxiconcomponent.html#iconcolor) property of the `igx-icon` component to change its default color:

```html
<igx-icon color="#e41c77">home</igx-icon>
```

<code-view style="height: 40px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/icon-sample-3" >
</code-view>


## Server-side Rendering Note

> In case you have implemented server side rendering logic in your application using Angular Universal and have used the `IgxIconService` to register icons, this may cause the following exception:
<br/><br/>
`XMLHttpRequest is not defined. Could not fetch SVG from url.`
<br/><br/>
In order to avoid this, execute the listed steps:
<ol>
<li>
Install `xmlhttprequest`:
```cmd
npm i xmlhttprequest
```
</li>
<li>
On the top of your `server.ts` file, add: 
``` typescript
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
```
</li>
</ol>

## Styling

To get started with styling the icons, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-icon-theme`]({environment:sassApiUrl}/index.html#function-igx-icon-theme) and accepts the parameters, required to customize the icon as desired. 

```scss
$custom-icon-theme: igx-icon-theme(
  $color: #1481b8,
  $disabled-color: #494949
);
```   

### Using CSS variables 

The last step is to pass the custom icon theme in our application: 

```scss
 @include igx-css-vars($custom-icon-theme);
```

### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables. 

If the component is using the [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
     ::ng-deep {
        @include igx-icon($custom-icon-theme);
    }
}
```

### Demo

<code-view style="height:75px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/icon-styling" alt="Angular Icon Example">
</code-view>



## API References
<div class="divider--half"></div>

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent Styles]({environment:sassApiUrl}/index.html#function-igx-icon-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
