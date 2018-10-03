---
title: Navbar Component
_description: Ignite UI for Angular Navbar control provides optimal UI experience with seamless integration to allow users to move within an application smoothly.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular NavBar component, Angular Navbar control
---

##Navbar
<p class="highlight">The Ignite UI for Angular [`IgxNavbarComponent`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html) informs the user of their current position in an app, and helps them move back (much like the “back” button in a browser). The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.</p>
<div class="divider"></div>

### Navbar Demo
<div class="sample-container loading" style="height: 530px">
    <iframe id="nav-bar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/navbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

###Usage
To get started with the Ignite UI for Angular NavBar component, let's first import the [`IgxNavbarModule`]({environment:angularApiUrl}/classes/igxnavbarmodule.html) in our **app.module.ts** file:

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

####With back button
Good, we know which application we have opened. Now, let's see what capabilities it offers us by exploring its menu. To achieve this we will show the action button and make it use a menu icon as follows:

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App"
    actionButtonIcon="menu"
    [isActionButtonVisible]="true">
</igx-navbar>
```

If all went well, you should see the following in your browser:
<div class="sample-container loading" style="height: 330px">
    <iframe id="nav-bar-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src='{environment:demosBaseUrl}/navbar-sample-1' onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

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

 <igx-navbar title="Sample App" actionButtonIcon="menu">
    <igx-icon name="search"></igx-icon>
    <igx-icon name="favorite"></igx-icon>
    <igx-icon name="more_vert"></igx-icon>
</igx-navbar>
```

<div class="divider"></div>

### API References

In this article we show a few scenarios where the navbar component may come in handy. The APIs, we used to achieve them, are listed in the links below.

[`IgxNavbarComponent`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
