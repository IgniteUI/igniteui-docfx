---
title: Angular Banner Component – Ignite UI for Angular | Infragistics | MIT license
_description: Easily integrate a short, non-intrusive message (along with optional actions) using Ignite UI for Angular Banner component.
_keywords: Angular Banner component, Angular Banner control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Angular UI Components
_license: MIT
---

# Angular Banner Component Overview

<p class="highlight">Angular Banner Component provides a way to easily display a prominent message to your application's users in a way that is less transient than a snackbar and less obtrusive than a dialog. The Banner can also be configured to display custom action buttons and an icon.</p>

## Angular Banner Example

<code-view style="height: 530px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/banner-sample-1/" alt="Angular Banner Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Banner

To get started with the Ignite UI for Angular Banner component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxBannerModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxBannerModule } from 'igniteui-angular';
// import { IgxBannerModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxBannerModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxBannerComponent` as a standalone dependency, or use the [`IGX_BANNER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/banner/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

...
import { IGX_BANNER_DIRECTIVES } from 'igniteui-angular';
// import { IGX_BANNER_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-banner>
        You are currently offline.
    </igx-banner>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_BANNER_DIRECTIVES]
    /* or imports: [IgxBannerComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Banner module or directives imported, you can start with a basic configuration of the `igx-banner` component.

## Using the Angular Banner Component

### Show Banner

In order to display the banner component, use its [`open()`]({environment:angularApiUrl}/classes/igxbannercomponent.html#open) method and call it on a button click. The banner appears relative to where the element was inserted in the page template, moving all other content. It typically shows some non-intrusive content that requires minimal user interaction to be dismissed.

```html
<!--banner.component.html-->

<igx-icon (click)="connectionBanner.open()">refresh</igx-icon>
...
<igx-banner #connectionBanner>
    You are currently offline.
</igx-banner>

```

> [!NOTE]
> The `IgxBannerModule` includes a default banner button `Dismiss`, which closes the banner.

## Examples

The [`IgxBannerComponent`]({environment:angularApiUrl}/classes/igxbannercomponent.html) allows templating of its content while still sticking as closely as possible to the material design banner guidelines.

### Changing the banner message

Configuring the message displayed in the banner is easy - just change the content you are passing to the `igx-banner` tag. The text will show up in the specified banner area and the banner will use its default template when displaying it. Below, we will change the content of our sample banner to be a bit more descriptive:

```html
<!--banner.component.html-->
<igx-banner #connectionBanner>
    You have lost connection to the internet. This app is offline.
</igx-banner>
```

### Adding an icon

An [`igx-icon`](icon.md) can be displayed in the banner by passing it to the banner's content. The icon will always be positioned at the beginning of the banner message.

> [!NOTE]
> If several `igx-icon` elements are inserted as direct descendants of the banner, the banner will try to position all of them at the beginning. It is strongly advised to pass only one `igx-icon` directly to the banner.

To pass an `igx-icon` to you banner, simply insert it in the banner's content:

```html
<!--banner.component.html-->
<igx-banner #connectionBanner>
    <igx-icon>signal_wifi_off</igx-icon>
    You have lost connection to the internet. This app is offline.
</igx-banner>
```

If you want to use an `igx-icon` in your banner message, wrap it in a `span` tag:

```html
<!--banner.component.html-->
<igx-banner #connectionBanner>
    You have lost connection to the internet. This app is offline.
    <span>
        <igx-icon>signal_wifi_off</igx-icon>
    </span>
</igx-banner>
```

### Changing the banner button

The `IgxBannerModule` exposes a directive for templating the banner buttons - [`IgxBannerActionsDirective`]({environment:angularApiUrl}/classes/igxbanneractionsdirective.html). This directive allows you to override the default banner button (`Dismiss`) and add user-defined custom actions.

```html
<!--banner.component.html-->
<igx-banner #connectionBanner>
    <igx-icon>signal_wifi_off</igx-icon>
    You have lost connection to the internet. This app is offline.
    <igx-banner-actions>
        <button igxButton igxRipple (click)="connectionBanner.toggle()">Toggle Banner</button>
    </igx-banner-actions>
</igx-banner>
```


<code-view style="height: 530px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/banner-sample-2/" >
</code-view>


### Applying custom animations

The banner component comes with the [`animationSettings`]({environment:angularApiUrl}/classes/igxbannercomponent.html#animationSettings) property that allows applying custom opening and closing animations. Developers can choose between self-defined animations, and those from our [`Animation suite`]({environment:sassApiUrl}/animations). The default ones, used by the banner, are `growVerIn` for entering and `growVerOut` for exiting.

Let's change the animations that our banner uses, so that it slides in and out:

```html
<!--banner.component.html-->
<igx-banner #connectionBanner [animationSettings]="animationSettings">
    ...
</igx-banner>
```

```typescript
// banner.component.ts
import { IgxBannerComponent, slideInLeft, slideOutRight } from 'igniteui-angular'
// import { IgxBannerComponent, slideInLeft, slideOutRight } from '@infragistics/igniteui-angular'; for licensed package
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


<code-view style="height: 530px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/banner-sample-3/" >
</code-view>


### Binding to events

The banner component emits events when changing its state - [`opening`]({environment:angularApiUrl}/classes/igxbannercomponent.html#opening) and [`opened`]({environment:angularApiUrl}/classes/igxbannercomponent.html#opened) are called when the banner is shown (before and after, resp.), while [`closing`]({environment:angularApiUrl}/classes/igxbannercomponent.html#closing) and [`closed`]({environment:angularApiUrl}/classes/igxbannercomponent.html#closed) are emitted when the banner is closed. The _ing_ events (`opening`, `closing`) are cancelable - they use the `ICancelEventArgs` interface and the emitted object has a `cancel` property. If the `cancel` property is set to true, the corresponding end action and event will not be triggered - e.g. if we cancel `opening`, the banner's `open` method will not finish and the banner will not be shown.

To cancel an event, bind it to the emitted object and set its `cancel` property to `true`.

```html
<!--banner.component.html-->
    <igx-banner #connectionBanner (opening)="handleOpen($event)">
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

## Advanced Example

Let's create a banner with two custom buttons - one for dismissing the notification and one for turning on the connection. We can pass custom action handlers using the `igx-banner-actions` selector:

```html
<!--banner.component.html-->
<igx-banner class="offline-banner" #connectionBanner [animationSettings]="animationSettings">
    <igx-icon>signal_wifi_off</igx-icon>
        You have lost connection to the internet. This app is offline.
    <igx-banner-actions>
        <button igxButton igxRipple (click)="connectionBanner.close()">Continue Offline</button>
        <button igxButton igxRipple (click)="wifiState = true">Turn On Wifi</button>
    </igx-banner-actions>
</igx-banner>
```

> [!NOTE]
> According to Google's [`Material Design`](https://material.io/design/components/banners.html#anatomy) guidelines, a banner should have a maximum of 2 buttons present. The `IgxBannerComponent` does not explicitly limit the number of elements under the `igx-banner-actions` tag, but it is strongly recommended to use up to 2 if you want to adhere to the material design guidelines.

The dismiss option (`'Continue Offline'`) doesn't need any further logic, so it can just call the `close()` method. The confirm action (`'Turn On Wifi'`), however, requires some additional logic, so we have to define it in the component. Then, we will create `onNetworkStateChange` Observable and subscribe to it. The last step is to call the `refreshBanner()` method on each change, which will toggle the banner depending on the `wifiState`.

The banner will also have a WiFi icon in the navbar. As the subscription fires on any change of the `wifiState`, the icon will not only toggle the banner, but change according to the state of the connection:

```html
<!--banner.component.html-->
<igx-navbar title="Gallery">
    <igx-icon (click)="wifiState = !wifiState">
        {{ wifiState ? 'signal_wifi_4_bar' : 'signal_wifi_off' }}
    </igx-icon>
</igx-navbar>
```

Finally, we will add a `toast`, displaying a message about the WiFi state. The results of the templated banner can be seen in the demo below:


<code-view style="height: 530px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/banner-advanced-sample/" >
</code-view>


## Styling

First, in order to use the functions exposed by the theme engine, we need to import the index file in our style file:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`banner-theme`]({environment:sassApiUrl}/themes#function-banner-theme) and specifying just the `$banner-background`. Based on this value, the `$banner-message-color` and `$banner-illustration-color` are automatically set to black or white, depending on which provides better contrast with the background.

```scss
$custom-banner-theme: banner-theme(
  $banner-background: #011627,
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/palettes#function-palette) and [`color`]({environment:sassApiUrl}/palettes#function-color) functions. Please refer to [`Palettes`](/themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to pass the custom banner theme:

```scss
@include css-vars($custom-banner-theme);
```

<code-view style="height: 530px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/notifications/banner-styling/" >
</code-view>


<div class="divider--half"></div>

## API Reference

<div class="divider--half"></div>

- [IgxBannerComponent]({environment:angularApiUrl}/classes/igxbannercomponent.html)
- [IgxBannerActionsDirective]({environment:angularApiUrl}/classes/igxbanneractionsdirective.html)
- [IgxBannerComponent Styles]({environment:sassApiUrl}/themes#function-banner-theme)

Additional components and/or directives with relative APIs that were used:

- [IgxCardComponent]({environment:angularApiUrl}/classes/igxcardcomponent.html)
- [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
- [IgxNavbarComponent]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
- [IgxToastComponent]({environment:angularApiUrl}/classes/igxtoastcomponent.html)

## Theming Dependencies

- [IgxIcon Theme]({environment:sassApiUrl}/themes#function-icon-theme)
- [IgxButton Theme]({environment:sassApiUrl}/themes#function-button-theme)
- [IgxRipple Theme]({environment:sassApiUrl}/themes#function-ripple-theme)
- [IgxExpansionPanel Theme]({environment:sassApiUrl}/themes#function-expansion-panel-theme)


## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
