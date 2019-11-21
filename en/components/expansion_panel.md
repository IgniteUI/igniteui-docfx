---
title: Angular Panel | Expandable | Ignite UI for Angular | Infragistics
_description: Use an Angular accordion/material expansion panel which provides an easily configurable expandable component with two states - collapsed and expanded.
_keywords: angular accordion, igniteui for angular, infragistics
---

## Expansion Panel
<p class="highlight">

The [igx-expansion-panel]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) is a lightweight Angular accordion component which can be rendered in two states - collapsed or expanded. When collapsed, the expandable displays a summary of its content. The collapsed material expansion panel can be toggled using mouse click, or keyboard interactions to display the body completely, containing any additional necessary content.
</p>
<div class="divider--half"></div>

### Expansion Panel Demo
<div class="sample-container loading" style="height: 450px;">
    <iframe id="expansion-sample-1-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/layouts/expansion-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-1-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Usage
### Getting Started
To use the [`IgxExpansionPanelComponent`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) first we need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

The next step is to import the **IgxExpansionPanelModule** in our **app.module**:
```typescript
// app.module.ts

...
import { IgxExpansionPanelModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxExpansionPanelModule],
    ...
})
export class AppModule {}
```

We can now start using `igx-expansion-panel` in the markup. The expansion panel has a simple structure, as you can see below:
- `igx-expansion-panel` - the component host - stores header and body
    - `igx-expansion-panel-header` - stores the component header. This is always visible. Stores title and description as well as any additional content
        - `igx-expansion-panel-title` - stores the component title. Has default styling. The title will always appear first in the header content (after icon if `iconPosition === 'left'`). Used in aria labels.
        - `igx-expansion-panel-description` - stores the component description. It can be used to provide a short summary. The description will always appear after the title (if the title is set).
    - `igx-expansion-panel-body` - stores the component body. This part of the component is only visible when the panel is expanded.

In the below example, we can create a small collapsible component that hold a bit of information about the hummingbird:
```html
<!-- expansible-panel.component.html -->
<igx-expansion-panel>
    <igx-expansion-panel-header>
        <igx-expansion-panel-title>
            Hummingbird
        </igx-expansion-panel-title>
        <igx-expansion-panel-description>
            One of the smallest birds
        </igx-expansion-panel-description>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        <p>
            Hummingbirds are birds native to the Americas that constitute the family Trochilidae.
            They are among the smallest of birds, most species measuring 7.5–13 cm (3–5 in) in length.
            Indeed, the smallest extant bird species is a hummingbird, the 5 cm (2.0 in) bee hummingbird weighing less
            than 2.0 g (0.07 oz).
        </p>
        <a href="https://en.wikipedia.org/wiki/Hummingbird" target="_blank" rel="nofollow" title="Hummingbird">Read more</a>
    </igx-expansion-panel-body>
</igx-expansion-panel>

```

You can see the results below:
<div class="sample-container loading" style="height: 450px;">
    <iframe id="expansion-sample-1-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-1" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-1-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Binding to properties and events

We can add some logic to our component to make it show/hide the description depending on the state of the panel. We can do this by binding the description to the controls [`collapsed`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html#collapsed) property:

```typescript
// in expansion-panel.component.ts
import { IgxExpansionPanelComponent } from 'igniteui-angular';
@Component({
    ...
})
export class ExpansionPanelComponent {
    @ViewChild(IgxExpansionPanelComponent, {read: IgxExpansionPanelComponent})
    public panel: IgxExpansionPanelComponent;
    public readMore: string = 'https://en.wikipedia.org/wiki/Hummingbird';
}
```
The following code sample will show the description only when the component is in collapsed state.

```html
<!-- in expansion-component.component.html -->
...
    <igx-expansion-panel-header>
        ...
        <igx-expansion-panel-description *ngIf="panel.collapsed">
            One of the smallest birds
        </igx-expansion-panel-description>
    </igx-expansion-panel-header>
```

If we want to add more complex functionality depending on the component's state, we could also bind to the event emitters.
```typescript
// in expansion-panel.component.ts

export class ExpansionPanelComponent {
    ...
    public handleExpansion(args: {event: Event}): void {
        ... // Some functionality
    }
}
```
```html
<!-- in expansion-component.component.html -->
    <igx-expansion-panel (onExpanded)="handleExpansion($event)">

    </igx-expansion-panel>
```

Below we have the results:
<div class="sample-container loading" style="height: 400px;">
    <iframe id="expansion-sample-2-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-2" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-2-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Adding content

The [`igx-expansion-panel-body`]({environment:angularApiUrl}/classes/igxexpansionpanelbodycomponent.html) tag of the component accepts all kinds of markup and renders everything with the `ng-content` projection. We can use an [`IgxAvatar`](avatar.md) to freshen up our expansion panel's inner content:
First, we need to import the `IgxAvatarModule` in our **app.module.ts**
```typescript
// in app.module.ts
import { IgxExpansionPanelModule, IgxAvatarModule } from 'igniteui-angular';

NgModule({
    imports: [
        ...
        IgxAvatarModule
        ...
    ],
    ...
})
```
Once imported, we can use the avatar in the markup:

```html
<!-- in expansion-panel.component.html -->
...
<igx-expansion-panel-body>
    <div>
            <igx-avatar [src]="imgSource" roundShape="true" size="large">
            </igx-avatar>
        </div>
        <p>
            Hummingbirds are birds native to the Americas that constitute the family Trochilidae. They are among
            the smallest of birds,
            most species measuring 7.5–13 cm (3–5 in) in length. Indeed, the smallest extant bird species is a
            hummingbird,
            the 5 cm (2.0 in) bee hummingbird weighing less than 2.0 g (0.07 oz).
        </p>
        <a [href]="readMore" target="_blank" rel="nofollow" title="Hummingbird">Read more</a>
</igx-expansion-panel-body>
...
```
We just need to add the image source to the component definition, so it can be easily changed
```typescript
// in expansion-panel.component.html
export class ExpansionPanelComponent {
    ...
    public imgSource = 'https://upload.wikimedia.org/wikipedia/commons/4/46/Purple-throated_carib_hummingbird_feeding.jpg';
}
```
### Summary
After applying all of the changes to our initial component, here is the final result:
<div class="sample-container loading" style="height: 550px;">
    <iframe id="expansion-sample-3-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-3" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-3-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

The `IgxExpansionPanel` control allows all sorts of content to be added inside of the `igx-expansion-panel-body`. It can render [`IgxGrid`](grid/grid.md)s, [`IgxCombo`](combo.md), charts and even other expansion panels!

## Styling
The Expansion Panel comes without specific borders or paddings defined for the body content. You can either manually set the Expansion Panel body element's padding or wrap the Expansion Panel body in an `igxCard` . You can refer to the [Weather Forecast Sample](#weather-forecast-sample) for the latter.

### Styling the header
The [`IgxExpansionPanelComponent`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) allows for easy customization of [the header]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html).
The default icon for the toggle state of the control can be templated. The position of this icon is also configurable - either the start or end of the header. It can also be hidden.

Configuring the position of the header icon can be done through the [`iconPosition`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#iconposition) input on the `igx-expansion-panel-header`. The possible options for the icon position are **left**, **right** and **none**. The next code sample demonstrates how to configure the component's button to go on the *right* side.

```html
<!-- in expansion-component.component.html -->
    <igx-expansion-panel>
    ...
        <igx-expansion-panel-header [iconPosition]="'right'">
        </igx-expansion-panel-header>
    </igx-expansion-panel>
```
> Note: The [`iconPosition`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#iconposition) property works with `RTL` - e.g. an icon set to show up in **right** will show in the leftmost part of the header when RTL is on.

We can also override the default icon that is used in the control by passing content in an `igx-expansion-panel-icon` tag:
```html
<!-- in expansion-component.component.html -->
    <igx-expansion-panel>
    ...
        <igx-expansion-panel-header [iconPosition]="'right'">
        ...
            <igx-expansion-panel-icon>
                <span class="example-icon" *ngIf="panel.collapsed">Show more</span>
                <span class="example-icon" *ngIf="!panel.collapsed">Collapse</span>
            </igx-expansion-panel-icon>
        </igx-expansion-panel-header>
    </igx-expansion-panel>
```
```css
<!-- in expansion-component.component.scss -->
.example-icon {
    font-size: 12px;
    font-weight: 600px;
}
```
Our component will now render "Show More" when the panel is collapsed and "Collapse" once it's fully expanded.

### Import theme
Using the [Ignite UI for Angular Theming](themes/index.md), we can alter the **igx-expansion-panel** appearance. Now we are going to customize it in a more robust manner.

First, in order for us to use the functions exposed by the theme engine, we need to import the `index` file in our style file: 

```scss
// in styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

### Define palette & colors
After we've imported the `index` file we can go ahead and use the [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) function to define some color variables we would like to use in our custom theme. We are going to use these for our custom `igx-expansion-panel` styling in conjunction with our color [palette](themes/palette.md) where we can specify our main colors to be used by the component.
Fist we define a custom palette and pass our main colors:
```scss
// in styles.scss
$my-primary-color:#72da67;
$my-secondary-color: #7344df81;
$my-info-color:rgba(0, 0, 0, 0.54)

$my-color-palette: igx-palette(
    $primary: $my-primary-color,
    $secondary: $my-secondary-color,
    $info: $my-info-color
);
```

To see our custom palette and colors applied, we need to pass these to a theme function.
So in one bold move we will [`create a custom theme`](themes/component-themes.md#creating-themes) and pass our colors to a number of predefined `igx-expansion-panel-theme` parameters . Let's say we have decided modifying these specific parameters will be more than sufficient to make our component look the way we like. It is really convenient to take use of the previously created [palette](themes/palette.md) and base our new colors on the colors defined.
```scss
// in styles.scss
$custom-panel-theme: igx-expansion-panel-theme(
    $palette: $my-color-palette,
    $header-background: igx-color($my-color-palette, "primary", 200),
    $header-focus-background: igx-color($my-color-palette, "primary", 300),
    $header-title-color: igx-color($my-color-palette, "info"),
    $header-icon-color: igx-color($my-color-palette, "info"),
    $body-background: igx-color($my-color-palette, "secondary", 100),
    $border-radius: 0.35em
);
```

### Applying
All that's left is to properly scope our newly created theme.

#### Globally
In case you want this newly created `igx-expansion-panel theme` to be applied [`globally`](themes/component-themes.md#creating-themes) in your app, all that is needed is to include the theme in your app root style file and pass it to the [igx-expansion-panel mixin]({environment:sassApiUrl}/index.html#mixin-igx-expansion-panel):
```scss
// in styles.scss
// Pass our custom-panel-theme to `igx-expansion-panel` mixin.
@include igx-expansion-panel($custom-panel-theme);
```
#### Scoped
There may be a case where you want a particular `igx-expansion-panel` to be styled differently than the others in the app. This will require to use angular specific pseudo-class selectors like `:host`, `::ng-deep`, etc. Additionally, all of the above steps need to be moved from `styles.scss` to the `component.scss` file.

 >[!NOTE]
 >If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`.
 On the other side, in order to prevent our custom theme to leak to other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
// in component.scss
:host {
    ::ng-deep {
        // Pass our custom-panel-theme to `igx-expansion-panel` mixin.
        @include igx-expansion-panel($custom-panel-theme);
    }
}
```
### Styling Demo

You can see the styled sample below:
<div class="sample-container loading" style="height: 300px;">
    <iframe id="expansion-styling" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-styling" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-styling" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## Using Animations
### Using specific animation
It is possible to use other than default animation when expanding and collapsing the component.
Assuming the igxExpansionPanel is already imported in `app.module.ts` as previously described, you can create a custom animation setting object and set it to be used in the igxExpansionPanel. The approach requires the [`useAnimation`](https://angular.io/api/animations/useAnimation) method and the specific animations to be used so we start importing these and defining the animation settings like:

```typescript
// in expansion-panel.component.ts
import { useAnimation } from "@angular/animations";
import { IgxExpansionPanelComponent, slideInLeft, slideOutRight } from 'igniteui-angular';
@Component({
    ...
})
export class ExpansionPanelComponent {
    @ViewChild(IgxExpansionPanelComponent, {read: IgxExpansionPanelComponent})
    public panel: IgxExpansionPanelComponent;

    public animationSettingsCustom = {
        closeAnimation: useAnimation(slideOutRight, {
            params: {
                duration: "100ms",
                toPosition: "translateX(25px)"
            }
        }),
        openAnimation: useAnimation(slideInLeft, {
            params: {
                duration: "500ms",
                fromPosition: "translateX(-15px)",
                startOpacity: 0.1
            }
        })
    };

    public user = {
        email: "",
        fullName: "",
        phone: ""
    };

    public collapsed() {
        return this.panel && this.panel.collapsed;
    }
}
```
As you can see, we are going to use [`slideInLeft`]({environment:sassApiUrl}/index.html#mixin-slide-in-left) and [`slideOutRight`]({environment:sassApiUrl}/index.html#mixin-slide-out-right) animations from our [**inbuilt suite of animations**]({environment:sassApiUrl}/index.html#animations) to make the component content appear more dramatically from the left side and disappear on the right when collapsing the content. In the process, we override some of the existing parameters with the specific ones we want to use.

The sample shows some user information and the key point here is passing the animation settings to the component like:
`[animationSettings] = "animationSettingsCustom"`

```html
<!-- in expansion-panel.component.html -->
...
<igx-expansion-panel [animationSettings] = "animationSettingsCustom" class="content__collapsible">
    <igx-expansion-panel-header [disabled]="false">
        <igx-expansion-panel-title class="sample-title">Personal Information</igx-expansion-panel-title>
        <igx-expansion-panel-icon>
            <igx-icon fontSet="material">{{collapsed() ? 'expand_more':'expand_less'}}</igx-icon>
        </igx-expansion-panel-icon>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body class="body">
        <igx-input-group class="group">
            <input igxInput name="fullName" type="text" [(ngModel)]="user.fullName"/>
            <label igxLabel for="fullName">Full Name</label>
            <igx-suffix>
                <igx-icon>person</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <igx-prefix>+359</igx-prefix>
            <label igxLabel for="phone">Phone</label>
            <input igxInput name="phone" type="text" [(ngModel)]="user.phone" />
            <igx-suffix>
                <igx-icon>phone</igx-icon>
            </igx-suffix>
            <igx-hint position="start">Ex.: +359 555 123 456</igx-hint>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="email">Email address</label>
            <input igxInput name="email" type="email" [(ngModel)]="user.email"/>
            <igx-suffix>
                <igx-icon>email</igx-icon>
            </igx-suffix>
        </igx-input-group>
    </igx-expansion-panel-body>
</igx-expansion-panel>
...
```

You can see the results below:
<div class="sample-container loading" style="height: 350px;">
    <iframe id="expansion-sample-6-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-6" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-6-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Multiple panel scenario
In the following example, we are going to implement more like app case scenario, where you want to follow a particular workflow showing and requiring more user details on portions. In this sample, the default `growVerIn` and `growVerOut` animations from our inbuilt animations suite are used thus there is no need to pass any specific animation settings or import animations. Notice how we do not allow more than one `igxExpansionPanel` to be expanded at a time, handling the [`onInteraction`]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html#oninteraction)  event.

```typescript
// in expansion-panel.component.ts
import { Component, QueryList, ViewChildren } from "@angular/core";
import { IgxExpansionPanelComponent } from "igniteui-angular";

@Component({
    ...
})
export class ExpansionPanelComponent {
    @ViewChildren(IgxExpansionPanelComponent)
    public accordion: QueryList<IgxExpansionPanelComponent>;

    public user = {
        email: "",
        fullName: "",
        phone: ""
    };

    public billingAddress = {
        address: "",
        city: "",
        state: "",
        zipCode: ""
    };

    public shippingAddress = {
        address: "",
        city: "",
        state: "",
        zipCode: ""
    };

    public collapsed(index: number) {
         if (!this.accordion) {
            return true;
         }
         return this.accordion.toArray()[index] && this.accordion.toArray()[index].collapsed;
     }

    public onInteraction(event) {
        const expandedPanels = this.accordion.filter((panel) => !panel.collapsed);
        expandedPanels.forEach((expandedPanel) => {
            if (expandedPanel.elementRef !==  event.event.currentTarget) {
                expandedPanel.collapse();
            }
        });
    }
}
```

```html
<!-- in expansion-panel.component.html -->
...
<igx-expansion-panel class="content__collapsible">
    <igx-expansion-panel-header (onInteraction)="onInteraction($event)" [disabled]="false">
        <igx-expansion-panel-title class="sample-title">Personal Information</igx-expansion-panel-title>
        <igx-expansion-panel-icon>
            <igx-icon fontSet="material">{{collapsed(0) ? 'expand_more':'expand_less'}}</igx-icon>
        </igx-expansion-panel-icon>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body class="body">
        <igx-input-group class="group">
            <input igxInput name="fullName" type="text" [(ngModel)]="user.fullName"/>
            <label igxLabel for="fullName">Full Name</label>
            <igx-suffix>
                <igx-icon>person</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <igx-prefix>+359</igx-prefix>
            <label igxLabel for="phone">Phone</label>
            <input igxInput name="phone" type="text" [(ngModel)]="user.phone" />
            <igx-suffix>
                <igx-icon>phone</igx-icon>
            </igx-suffix>
            <igx-hint position="start">Ex.: +359 555 123 456</igx-hint>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="email">Email address</label>
            <input igxInput name="email" type="email" [(ngModel)]="user.email"/>
            <igx-suffix>
                <igx-icon>email</igx-icon>
            </igx-suffix>
        </igx-input-group>
    </igx-expansion-panel-body>
</igx-expansion-panel>

<igx-expansion-panel class="content__collapsible">
    <igx-expansion-panel-header (onInteraction)="onInteraction($event)" [disabled]="false">
        <igx-expansion-panel-title class="sample-title">Billing Address</igx-expansion-panel-title>
        <igx-expansion-panel-icon>
            <igx-icon fontSet="material">{{collapsed(1) ? 'expand_more':'expand_less'}}</igx-icon>
        </igx-expansion-panel-icon>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body class="body">
        <igx-input-group class="group">
            <input igxInput name="address" type="text" [(ngModel)]="shippingAddress.address"/>
            <label igxLabel for="address">Billing Address:</label>
            <igx-suffix>
                <igx-icon>add_location</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="city">City:</label>
            <input igxInput name="city" type="text" [(ngModel)]="shippingAddress.city"/>
            <igx-suffix>
                <igx-icon>location_city</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="state">State:</label>
            <input igxInput name="state" type="text" [(ngModel)]="shippingAddress.state"/>
            <igx-suffix>
                <igx-icon>terrain</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="zipCode">Zip Code:</label>
            <input igxInput name="zipCode" type="text" [(ngModel)]="shippingAddress.zipCode">
            <igx-suffix>
                <igx-icon>mail_outline</igx-icon>
            </igx-suffix>
        </igx-input-group>
    </igx-expansion-panel-body>
</igx-expansion-panel>

<igx-expansion-panel class="content__collapsible">
    <igx-expansion-panel-header (onInteraction)="onInteraction($event)" [disabled]="false">
        <igx-expansion-panel-title class="sample-title">Shipping Address</igx-expansion-panel-title>
        <igx-expansion-panel-icon>
            <igx-icon fontSet="material">{{collapsed(2) ? 'expand_more':'expand_less'}}</igx-icon>
        </igx-expansion-panel-icon>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body class="body">
        <igx-input-group class="group">
            <input igxInput name="address" type="text" [(ngModel)]="billingAddress.address"/>
            <label igxLabel for="address">Shipping Address:</label>
            <igx-suffix>
                <igx-icon>add_location</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="city">City:</label>
            <input igxInput name="city" type="text" [(ngModel)]="billingAddress.city"/>
            <igx-suffix>
                <igx-icon>location_city</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="state">State:</label>
            <input igxInput name="state" type="text" [(ngModel)]="billingAddress.state"/>
            <igx-suffix>
                <igx-icon>terrain</igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="zipCode">Zip Code:</label>
            <input igxInput name="zipCode" type="text" [(ngModel)]="billingAddress.zipCode">
            <igx-suffix>
                <igx-icon>mail_outline</igx-icon>
            </igx-suffix>
        </igx-input-group>
    </igx-expansion-panel-body>
</igx-expansion-panel>
...
```
You can see the results below:
<div class="sample-container loading" style="height: 550px;">
    <iframe id="expansion-sample-5-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-5" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-5-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## Weather Forecast Sample
The following is an illustration of using the [`IgxExpansionPanelComponent`]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html) in combination with several other components like [`IgxCard`](card.md) and [`IgxIcon`](icon.md) to achieve a particular task. In this case - creating a weather component capable of showing both current day temperature and conditions as well as forecast details. If needed, the user can expand more and see the upcoming days' weather conditions.

```typescript
// in weather-forecast.component.ts
import { Component, ViewChild } from "@angular/core";
import { IgxExpansionPanelComponent } from "igniteui-angular";
import { data as weatherData } from "./weather-data";

@Component({
    ...
})
export class WeatherForecast {

    @ViewChild(IgxExpansionPanelComponent)
    public panel: IgxExpansionPanelComponent;
    public data = weatherData;

    public toggleDetails() {
        this.panel.toggle();
    }
}
```

```html
<!-- in weather-forecast.component.html -->
<div class="sample-wrapper">
  <igx-card>
    <igx-card-header>
      <h3 class="igx-card-header__title">{{data.city}}</h3>
      <h5 class="igx-card-header__subtitle">{{data.dateTime}}, {{data.today.description}}</h5>
    </igx-card-header>
    <igx-card-content>
      <div class="weather__main" *ngIf=data>
        <div class="weather__main-temp">
          <div>{{data.today.tempMax}}°<sup>C</sup></div>
          <div class="right"><igx-icon color="orange" fontSet="fas" name="fa-sun"></igx-icon></div>
        </div>
        <div class="weather__main-hum">
          <div><igx-icon color="blue" fontSet="fas" name="fa-umbrella"></igx-icon>{{data.precipitation}} Precipitation </div>
          <div class="right"><igx-icon color="aqua-blue" fontSet="fas" name="fa-tint"></igx-icon>{{data.humidity}} Humidity </div>
        </div>
      </div>
      <button igxButton igxRipple (click)="toggleDetails()">Forecast Details</button>
      <igx-expansion-panel>
        <igx-expansion-panel-body>
          <div class="forecast__container" *ngIf=data>
            <div *ngFor="let day of data.daysOfWeek" class="forecast__day">
              <div>{{day.name}}</div>
              <div class="right">
                <igx-icon [color]="day.iconColor" fontSet="fas" [name]="day.iconName" font-size="1em"></igx-icon>
                {{day.tempMin}}°/{{day.tempMax}}°
              </div>
            </div>
          </div>
        </igx-expansion-panel-body>
      </igx-expansion-panel>
    </igx-card-content>
  </igx-card>
</div>
```

```typescript
// in weather-data.ts
export const data = {
  city: "Sofia",
  humidity: "44%",
  precipitation: "5%",
  windSpeed: 279,
  dateTime: "10/7/2018, 14:35:00 PM",
  today: {
    name: "Sunday",
    tempMax: 25,
    tempMin: 15,
    description: "Sunday",
    iconColor: "gray",
    iconName: "fa-cloud"
  },
  daysOfWeek: [
    {
      name: "Monday",
      tempMax: 22,
      tempMin: 15,
      description: "Sunny",
      iconColor: "orange",
      iconName: "fa-sun"
    },
    //...
  ]
};
```

You can see the results below:
<div class="sample-container loading" style="height: 600px;">
    <iframe id="expansion-sample-7-sample" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/layouts/expansion-sample-7" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-7-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## API Reference
* [IgxExpansionPanel API]({environment:angularApiUrl}/classes/igxexpansionpanelcomponent.html)
* [IgxExpansionPanelHeader API]({environment:angularApiUrl}/classes/igxexpansionpanelheadercomponent.html)
* [IgxExpansionPanelBody API]({environment:angularApiUrl}/classes/igxexpansionpanelbodycomponent.html)
* [IgxExpansionPanel Styles]({environment:sassApiUrl}/index.html#mixin-igx-expansion-panel)
