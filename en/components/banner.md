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
    <iframe id="banner-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/banner-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="banner-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage
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
#### Banner banner
In order to display the Banner component, use its [`open()`]({environment:angularApiUrl}/classes/igxbannercomponent.html#open) method and call it on a button click. Use the [`message`]({environment:angularApiUrl}/classes/igxbannercomponent.html#message) input to set a text message. The `confirmButtonText` and `dismissButtonText` are inputs for configuring the text on each of the banner buttons.

```html
<!--sample.component.html-->

<igx-banner #rateBanner message="It looks like you're enjoying our app. Would you like to rate it?" icon="star_rate"
    [confirmButtonText]="'Rate App'" [dismissButtonText]="'Maybe Later'">
</igx-banner>
...
<button igxButton="raised" (click)="rateBanner.toggle()">Toggle Banner</button>
```