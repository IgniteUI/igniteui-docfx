---
title: Navbar Component
_description: Ignite UI for Angular Navbar control provides optimal UI experience with seamless integration to allow users to move within an application smoothly.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular NavBar component, Angular Navbar control
_language: kr
---

## Navbar
<p class="highlight">The Ignite UI for Angular [`IgxNavbarComponent`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html) informs the user of their current position in an app, and helps them move back (much like the “back” button in a browser). The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.</p>
<div class="divider"></div>

### Navbar Demo

<code-view style="height: 530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar" >
</code-view>

<div class="divider--half"></div>

### Usage
To get started with the Ignite UI for Angular NavBar component, let's first import the `IgxNavbarModule` in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxNavbarModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxNavbarModule],
    ...
})
export class AppModule {}
```

Then in the template of our component we can add the following code to show a basic navbar with a title only:

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App">
</igx-navbar>
```

#### With menu button
Good, we know which application we have opened. Now, let's see what capabilities it offers us by exploring its menu. To achieve this we will show the action button and make it use a menu icon as follows:

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App" actionButtonIcon="menu" [isActionButtonVisible]="true">
</igx-navbar>
```

> [!NOTE]
> The [`actionButtonIcon`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#actionbuttonicon) uses the Material fontset by design.

#### Adding Icons

Now that our app has its menu in place, we can make it a little more functional by adding options for searching, favorites and more. To do that let's grab the [**IgxIcon**](icon.md) module and import it in our **app.module.ts** file.
```typescript
// app.module.ts

...
import {
    IgxNavbarModule,
    IgxIconModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxIconModule],
})
export class AppModule {}
```

Next, we need to update our template with an icon for each of the options we want our app to provide:

```html
<!--navbar.component.html-->

 <igx-navbar title="Sample App" actionButtonIcon="menu" [isActionButtonVisible]="true">
    <igx-icon>search</igx-icon>
    <igx-icon>favorite</igx-icon>
    <igx-icon>more_vert</igx-icon>
</igx-navbar>
```

If all went well, you should see the following in your browser:

<code-view style="height: 330px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-sample-1" >
</code-view>

<div class="divider--half"></div>

#### Custom action icon

What if we want to use a custom action icon for our app navigation instead of the default one that is on the left-most part of the navbar?
We can easily achieve this by using the [`igx-action-icon`]({environment:angularApiUrl}/classes/igxactionicondirective.html) directive, which will replace the default action icon with the content we have provided. We will do that by using the Font Awesome home icon in combination with a style for it.

```css
/* navbar.component.css */

@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fontawesome.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-regular.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-solid.css");

.customIcon {
    vertical-align: middle;
}
```

```html
<!--navbar.component.html-->

 <igx-navbar title="Sample App" actionButtonIcon="menu" [isActionButtonVisible]="true">
    <igx-icon>search</igx-icon>
    <igx-icon>favorite</igx-icon>
    <igx-icon>more_vert</igx-icon>

    <igx-action-icon>
        <igx-icon class="customIcon" fontSet="fa" name="fa-home"></igx-icon>
    </igx-action-icon>
</igx-navbar>
```

Finally, this is how our navbar should look like with its custom action icon:


<code-view style="height: 330px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-sample-2" >
</code-view>

<div class="divider--half"></div>

> [!NOTE]
> If [`igx-action-icon`]({environment:angularApiUrl}/classes/igxactionicondirective.html) is provided, the default [`actionButtonIcon`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#actionbuttonicon) will not be used. 

### API References

In this article we show a few scenarios where the navbar component may come in handy. The APIs, we used to achieve them, are listed in the links below.

* [`IgxNavbarComponent`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [`IgxActionIconDirective`]({environment:angularApiUrl}/classes/igxactionicondirective.html)

Additional components and/or directives with relative APIs that were used:

* [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html)

Styles:

* [`IgxNavbarComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-navbar-theme)
* [`IgxIconComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-icon-theme)

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
