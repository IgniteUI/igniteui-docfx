---
title: Banner Component
_description: Easily integrate a short, non-intrusive message (along with optional actions) using Ignite UI for Angular Banner component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Banner component, Angular Banner control
---
# Banner
<p class="highlight">
The Ignite UI for Angular Banner Component provides a way to easily display a prominent message to your application's users in a way that is less transient than a snackbar and less obtrusive than a dialog. The Banner can also be configured to display custom action buttons and an icon.</p>

## Angular Banner Example

<div class="sample-container loading" style="height: 530px">
    <iframe id="banner-sample-1-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/banner-sample-1" class="lazyload" alt="Angular Banner Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="banner-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="banner-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Usage

### First Steps

To get started with the Banner component, first you need to import the `IgxBannerModule` in your **app.module.ts** file:

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

### Show Banner

In order to display the banner component, use its [`open()`]({environment:angularApiUrl}/classes/igxbannercomponent.html#open) method and call it on a button click. The banner appears relative to where the element was inserted in the page template, moving all other content. It typically shows some non-intrusive content that requires minimal user interaction to be dismissed.

```html
<!--banner.component.html-->

<igx-icon (click)="connectionBanner.open()">Refresh</igx-icon>
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
    ...
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
    ...
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

<div class="sample-container loading" style="height: 530px">
    <iframe id="banner-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/banner-sample-2" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="banner-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="banner-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Applying custom animations

The banner component comes with the [`animationSettings`]({environment:angularApiUrl}/classes/igxbannercomponent.html#animationsettings) property that allows applying custom opening and closing animations. Developers can choose between self-defined animations, and those from our [`Animation suite`]({environment:sassApiUrl}/index.html). The default ones, used by the banner, are `growVerIn` for entering and `growVerOut` for exiting.

Let's change the animations that our banner uses, so that it slides in and out:

```html
<!--banner.component.html-->
    <igx-banner #connectionBanner [animationSettings]="animationSettings">
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

<div class="sample-container loading" style="height: 530px">
    <iframe id="banner-sample-3-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/banner-sample-3" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="banner-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="banner-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Binding to events
The banner component emits events when changing its state - [`onOpening`]({environment:angularApiUrl}/classes/igxbannercomponent.html#onopening) and [`onOpened`]({environment:angularApiUrl}/classes/igxbannercomponent.html#onopened) are called when the banner is shown (before and after, resp.), while [`onClosing`]({environment:angularApiUrl}/classes/igxbannercomponent.html#onclosing) and [`onClosed`]({environment:angularApiUrl}/classes/igxbannercomponent.html#onclosed) are emitted when the banner is closed. The *ing* events (`onOpening`, `onClosing`) are cancelable - they use the `ICancelEventArgs` interface and the emitted object has a `cancel` property. If the `cancel` property is set to true, the corresponding end action and event will not be triggered - e.g. if we cancel `onOpening`, the banner's `open` method will not finish and the banner will not be shown.

To cancel an event, bind it to the emitted object and set its `cancel` property to `true`.

```html
<!--banner.component.html-->
    <igx-banner #connectionBanner (onOpening)="handleOpen($event)">
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

<div class="sample-container loading" style="height: 530px">
    <iframe id="banner-advanced-sample-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/banner-advanced-sample" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="banner-advanced-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="banner-advanced-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## Styling

First, in order to use the functions exposed by the theme engine, we need to import the index file in our style file: 

```scss
// in styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-banner-theme`]({environment:sassApiUrl}/index.html#function-igx-banner-theme) and accepts the `$banner-message-color`, `$banner-background` and the `$banner-illustration-color` parameters.

```scss
$custom-banner-theme: igx-banner-theme(
    $banner-message-color: #151515,
    $banner-background: #dedede,
    $banner-illustration-color: #666666
);
```

### Using CSS variables 

The last step is to pass the custom banner theme:

```scss
@include igx-css-vars($custom-banner-theme);
```

### Using mixins

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables. 

If the component is using the [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
    ::ng-deep {
        // Pass the custom banner theme to the `igx-banner` mixin
        @include igx-banner($custom-banner-theme);
    }
}
```

### Using color palettes

Instead of hardcoding the color values, like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

The `igx-palette` function generates a color palette based on the primary and secondary colors that are passed:

```scss
$white-color: #dedede;
$black-color: #151515;

$light-banner-palette: igx-palette($primary: $white-color, $secondary: $black-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette. 

```scss
$custom-banner-theme: igx-banner-theme(
    $banner-message-color: igx-color($light-banner-palette, "secondary", 400),
    $banner-background: igx-color($light-banner-palette, "primary", 400),
    $banner-illustration-color: igx-color($light-banner-palette, "secondary", 100)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to the [`Palettes`](themes/palette.md) topic for detailed guidance on how to use them.

### Using schemas

You can build a robust and flexible structure that benefits from [`schemas`](themes/schemas.md).
Extend one of the two predefined schemas, that are provided for every component, in this case - [`light-banner`]({environment:sassApiUrl}/index.html#variable-_light-banner) schema: 

```scss
//  Extending the banner schema
$light-toast-schema: extend($_light-toast,
    (
        banner-message-color: (
            igx-color: ("secondary", 400)
        ),
        banner-background: (
            igx-color: ("primary", 400)
        ),
        banner-illustration-color: (
            igx-color: ("secondary", 100)
        )
    )
);

// Defining banner with the global light schema
$custom-banner-theme: igx-banner-theme(
  $palette: $light-banner-palette,
  $schema: $light-toast-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

<div class="sample-container loading" style="height: 530px">
    <iframe id="banner-styling-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/notifications/banner-styling" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="banner-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="banner-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

## API Reference
<div class="divider--half"></div>

* [IgxBannerComponent]({environment:angularApiUrl}/classes/igxbannercomponent.html)
* [IgxBannerActionsDirective]({environment:angularApiUrl}/classes/igxbanneractionsdirective.html)
* [IgxBannerComponent Styles]({environment:sassApiUrl}/index.html#function-igx-banner-theme)

Additional components and/or directives with relative APIs that were used:

* [IgxCardComponent]({environment:angularApiUrl}/classes/igxcardcomponent.html)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxNavbarComponent]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [IgxToastComponent]({environment:angularApiUrl}/classes/igxtoastcomponent.html)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)