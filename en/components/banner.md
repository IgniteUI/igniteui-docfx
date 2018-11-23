---
title: Banner Component
_description: Easily integrate a short, non-intrusive message (along with optional actions) using Ignite UI for Angular Banner component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Banner component, Angular Banner control
---
## Banner

<p class="highlight">
The Ignite UI for Angular Banner Component provides a way to easily display a prominent message to your application's users in a way that is less transient than a banner and less obtrusive than a Dialog. The Banner can also be configured to display custom action buttons and an icon.</p>
<div class="divider"></div>

### Banner Demo

<div class="sample-container loading" style="height: 350px">
    <iframe id="banner-sample-basic-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/banner-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="banner-sample-basic-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

## Usage

To get started with the Ignite UI for Angular Banner, let's first import the [`IgxBannerModule`]({environment:angularApiUrl}/classes/igxbannermodule.html) in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxBannerModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxBannerModule],
    ...
})
export class AppModule {}
```
### Basic banner

In order to display the Banner component, use its [`open()`]({environment:angularApiUrl}/classes/igxbannercomponent.html#open) method and call it on a button click. To configure the banner message, simply pass some text inside of the banner content. The text will show up in the specified banner area and the banner will use it's default template when displaying it

```html
<!--banner.component.html-->

<igx-banner #connectionBanner>
    You have lost connection to the internet.
</igx-banner>
...
<button igxButton="raised" (click)="connectionBanner.toggle()">Toggle Banner</button>
```

The banner appears relative to where the element was inserted in the page template, moving all other content. The banner typically shows some non-intrusive content that requires minimal user interaction to be dismissed (e.g. 1-2 clicks).

#### Basic Banner Demo

<div class="sample-container loading" style="height: 350px">
    <iframe id="banner-sample-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/banner-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="banner-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Templating the banner

The [`IgxBannerComponent`]({environment:angularApiUrl}/classes/igxbannercomponent.html) allows easily templating of its content while still sticking as closely as possible to the material design banner guidelines.

#### Changing the banner message

Changing the message displayed in the banner is easy - just change the content you are passing the `igx-banner` tag. Below, we will change our 'Connection' banner to a 'Rating' banner:

```html
    <!--banner.component.html-->
    <igx-banner #rateBanner> <!-- Change the banner ref as well, so it's more appropriate-->
        Looks like you are enjoing our app! Would you like to rate it?
    </igx-banner>
    ...
    <button igxButton="raised" (click)="rateBanner.toggle()">Toggle Banner</button>
```

#### Adding an icon

Developers can pass an [`igx-icon`]({environment:angularApiUrl}/classes/igxiconmodule.html) in the banner's content and it will always be positioned at **the start** of the banner message.

> [!NOTE]
> If several `igx-icon` elements are inserted as direct descendants of the banner, the banner will try positioning **all** of them at the start. It is **strongly** advised to only pass one `igx-icon` directly to the banner. If you want to use icons in your banner message, wrap them in a wrapping `span`.

To pass an `igx-icon` to you banner, simple insert it in the `igx-banner`s content:

```html
    <!--banner.component.html-->
    <igx-banner #rateBanner>
        <igx-icon>star_rate</igx-icon>
        Looks like you are enjoing our app! Would you like to rate it?
    </igx-banner>
    ...
```

#### Adding custom banner buttons

The [`IgxBannerModule`]({environment:angularApiUrl}/classes/igxbannermodule.html) also exposes a directive for templating the banner buttons - [`IgxBannerActionsDirective`]({environment:angularApiUrl}/classes/igxbanneractionsdirective.html). Using this directive allows you to override the default banner button (`Dismiss`) and add custom actions that you define. As most (but not all) of the time interaction with these elements is required to close the banner, make sure to call the banner's `close()` method in they `click` handlers.

> [!NOTE]
> Per Google's [`Material Design` guidelines](https://material.io/design/components/banners.html#anatomy), a banner should have a maximum of 2 buttons present. The `IgxBannerComponent` **does not** explicitly limit developers from passing more than 2 elements under the `igx-banner-actions` tag, but it is strongly advisable, should you choose to adhere to the material design guidelines. 

To further template the 'Rating' banner, we can pass custom action handles using the `igx-banner-actions` selector:

```html
    <!--banner.component.html-->
    <igx-banner #rateBanner>
        <igx-icon>star_rate</igx-icon>
        Looks like you are enjoing our app! Would you like to rate it?
        <igx-banner-actions>
            <button igxButton="raised" (click)="rateApp()">Yah!</button>
            <button igxButton="raised" (click)="rateBanner.close()">Nah.</button>
        </igx-banner-actions>
    </igx-banner>
    ...
```
The dismiss option (`'Nah.'`) does not require any further logic, so it can just call `rateBanner.close()`. The confirm action (`'Yah!'`) requires some additional logic, so we define it in the component definition.

```typescript
// banner.component.ts
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxBannerComponent } from 'igniteui-angular'
...
export class MyBannerComponent {
    @ViewChild(IgxBannerComponent) public banner: IgxBannerComponent;
    private rateUrl = `https://infragistics.com/products`;
    ...
    public rateApp() {
        /**
            Rating logic
        */
        window.open(this.rateUrl);
        /**
            Close the banner once done
        */
        this.banner.close();
    };
}
```

#### Templating Demo

<div class="sample-container loading" style="height: 350px">
    <iframe id="banner-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/banner-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="banner-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Applying custom animations

The banner component also exposes an `Input` property that allows the use of custom entry and exit animations - [`animationSettings`]({environment:angularApiUrl}/classes/igxbannermodule.html#animationsettings). This allows developers to pass custom animations - either separately defined, or ones from our *IgniteUI for Angular animation suite*({environment:sassApiUrl}/index.html). The default animations used by the banner are [`growVerIn`]({environment:sassApiUrl}/index.html#mixin-grow-ver-in) for entry and [`growVerOut`]({environment:sassApiUrl}/index.html#mixin-grow-ver-out) for exiting.

Let's change the animations that our banner uses, so that it appears to slide in.

```html
<!--banner.component.html-->
    <igx-banner #rateBanner [animationSettings]="animationSettings">
        ...
    </igx-banner>
    ...
```

```typescript
// banner.component.ts
import { IgxBannerComponent, slideInLeft, slideOutRight } from 'igniteui-angular'
...
export class MyBannerComponent {
    ...
    public animationSettings = {
        openAnimation: slideInLeft,
        closeAnimation: slideOutRight
    }
    ...
}
```

#### Animation Demo

<div class="sample-container loading" style="height: 350px">
    <iframe id="banner-sample-3-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/banner-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="banner-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Binding to events
The banner component emits events when changing its state - [`onOpening`]({environment:angularApiUrl}/classes/igxbannercomponent.html#onopening) and [`onOpened`]({environment:angularApiUrl}/classes/igxbannercomponent.html#onopened) are called when the banner is shown (before and after, resp.), while [`onClosing`]({environment:angularApiUrl}/classes/igxbannercomponent.html#onclosing) and [`onClosed`]({environment:angularApiUrl}/classes/igxbannercomponent.html#onclosed) are emitted when the banner is closed. The *ing* events (`onOpening`, `onClosing`) are cancelable - they make use of the `ICancelEventArgs` interface and the emitted object has a `cancel` property. If the `cancel` property is set to true, the corresponding end action and event will not be triggered - e.g. if we cancel `onOpening`, the banner's `open` method will not finish and the banner will not be shown.

To cancel an event, bind to the emitted object and set its `cancel` property to be `true`.

```html
<!--banner.component.html-->
    <igx-banner #rateBanner (onOpening)="handleOpen($event)">
        ...
    </igx-banner>
```
```typescript
// banner.component.ts
...
export class MyBannerComponent {
    ...
    public handleOpen(event) {
        event.cancel = true;
    }
}
```
> [!NOTE]
> If the changes above are applied, the banner will never open, as the opening event is always cancelled.

## API Reference

[`IgxBannerComponent API`]({environment:angularApiUrl}/classes/igxbannercomponent.html)
[`IgxBannerModule`]({environment:angularApiUrl}/classes/igxbannermodule.html)
[`IgxBanner Styles`]({environment:sassApiUrl}/index.html#mixin-igx-banner)