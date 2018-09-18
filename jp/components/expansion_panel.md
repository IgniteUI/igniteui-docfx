---
title: Expansion Panel
_description: Provides an easily configurable component with two states - collapsed and expanded.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Collapsible component, IgxExpansionPanel, Ignite UI Expansion Panel
---

## Expansion Panel
<p class="highlight">
The `IgxExpansionPanel` is a lightweigh component which can be rendered in two states - collapsed or expanded. When collapsed, the panel displays a short summary of its content. The collapsed panel can be toggled using mouse click, or keyboard interactions (maybe have link here) to display the body completely, containing any additional necessary content.
</p>
<div class="divider--half"></div>

## Usage
### Getting Started
To use the `IgxExpansionPanelComponent` we need to import the **IgxExpansionPanelModule** in our **app.module**: 
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
        - `igx-expansion-panel-description` - stores the component description. Can be used to provide a short summary. The description will always appear after the title (if title is set).
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
        <a href="https://en.wikipedia.org/wiki/Hummingbird" target="_blank">Read more</a>
    </igx-expansion-panel-body>
</igx-expansion-panel>

```
The `IgxExpansionPanelComponent` exposes the `.igx-expansion-panel` class which we can use to style the component:

```css
<!-- expansion-panel.component.css -->

.igx-expansion-panel {
    font-family: Verdana;
    margin: 24px;
    width: 420px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .26), 0 2px 2px 0 rgba(0, 0, 0, .12), 0 3px 1px -2px rgba(0, 0, 0, .08);
}

.igx-expansion-panel__header--expanded {
    border-bottom: 1px dashed rgba(0, 0, 0, .74);
}

.igx-expansion-panel__body > * {
    padding: 8px 16px;
}
```

The classes `igx-expansion-panel__header` and `igx-expansion-panel__body` are also exposed for styling the header and body.

You can see the results below: 
<div class="sample-container loading" style="height: 200px;">
    <iframe id="expansion-sample-1-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/expansion-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-1-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Binding to properties and events

We can add some logic to our component to make it show/hide the description depending on the state of the panel. We can do this by binding the description to the controls `collapsed` property:

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
<div class="sample-container loading" style="height: 200px;">
    <iframe id="expansion-sample-2-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/expansion-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-2-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Styling the header
The `IgxExpansionPanelComponent` allows for easy customization of the header.
The default icon for the toggle state of the control can be templated. The position of this icon is also configurable - either the start or end of the header. It can also be hidden.

Configuring the position of the header icon can be done through the `iconPosition` input on the `igx-expansion-panel-header`. The posible options for the icon position are **left**, **right** and **none**. The next code sample demonstrates how to configure the component's button to go on the *right* side.

```html
<!-- in expansion-component.component.html -->
    <igx-expansion-panel>
    ...
        <igx-expansion-panel-header [iconPosition]="'right'">
        </igx-expansion-panel-header>
    </igx-expansion-panel>
```
> Note: The `iconPosition` property works with `RTL` - e.g. an icon set to show up in **right** will show in the leftmost part of the header when RTL is on.

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
### Adding content

The `igx-expansion-panel-body` tag of the component accepts all kinds of markup and renders everything with the `ng-content` projection. We can use an `IgxAvatar` to freshen up our expansion panel's inner content:
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
        <a [href]="readMore" target="_blank">Read more</a>
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
<div class="sample-container loading" style="height: 200px;">
    <iframe id="expansion-sample-3-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/expansion-sample-3" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-3-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

The `IgxExpansionPanel` control allows all sort of content to be added inside of the `igx-expansion-panel-body`. It can render `IgxGrid`s, `IgxCombo`, charts and even other expansion panels!

## Using Animations
### Using specific animation
It is possible to use other than default animation when expanding and collapsing the component.
Assuming the igxExpansionPanel is already imported in `app.module.ts` as previously described, you can create a custom animation setting object and set it to be used in the igxExpansionPanel. The approach requires the `useAnimation` method and the specific animations to be used so we start importing these and defining the animation settings like:

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
As you can see, we are going to use `slideInLeft` and `slideOutRight` animations from our inbuilt suit of animations to make the component content appear more dramatically from the left side and disappear on the right when collapsing the content. In the process, we override some of the existing parameters with the specific ones we want to use.

The sample shows some user information and the key point here is passing the animation settings to the component like:
`[animationSettings] = "animationSettingsCustom"`

```html
<!-- in expansion-panel.component.html -->
...
<igx-expansion-panel [animationSettings] = "animationSettingsCustom" class="content__collapsible">
    <igx-expansion-panel-header [disabled]="false">
        <igx-expansion-panel-title class="sample-title">Personal Information</igx-expansion-panel-title>
        <igx-expansion-panel-icon>
            <igx-icon fontSet="material" [name]="collapsed() ? 'expand_more':'expand_less'"></igx-icon>
        </igx-expansion-panel-icon>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body class="body">
        <igx-input-group class="group">
            <input igxInput name="fullName" type="text" [(ngModel)]="user.fullName"/>
            <label igxLabel for="fullName">Full Name</label>
            <igx-suffix>
                <igx-icon name="person"></igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <igx-prefix>+359</igx-prefix>
            <label igxLabel for="phone">Phone</label>
            <input igxInput name="phone" type="text" [(ngModel)]="user.phone" />
            <igx-suffix>
                <igx-icon name="phone"></igx-icon>
            </igx-suffix>
            <igx-hint position="start">Ex.: +359 555 123 456</igx-hint>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="email">Email address</label>
            <input igxInput name="email" type="email" [(ngModel)]="user.email"/>
            <igx-suffix>
                <igx-icon name="email"></igx-icon>
            </igx-suffix>
        </igx-input-group>
    </igx-expansion-panel-body>
</igx-expansion-panel>
...
```

You can see the results below: 
<div class="sample-container loading" style="height: 350px;">
    <iframe id="expansion-sample-6-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/expansion-sample-6" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-6-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
### Implementing accordion like scenario using several igxExpansionPanel components
In the following example we are going to implement more like app case scenario, where you want to follow a particular workflow showing and requiring more user details on portions. In this sample the default `growVerIn` and `growVerOut` animations from our inbuilt animations suite are used thus there is no need to pass any specific animation settings or import animations. Notice how we do not allow more than one `igxExpansionPanel` to be expanded at a time, handling the `onInteraction` event.

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
            <igx-icon fontSet="material" [name]="collapsed(0) ? 'expand_more':'expand_less'"></igx-icon>
        </igx-expansion-panel-icon>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body class="body">
        <igx-input-group class="group">
            <input igxInput name="fullName" type="text" [(ngModel)]="user.fullName"/>
            <label igxLabel for="fullName">Full Name</label>
            <igx-suffix>
                <igx-icon name="person"></igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <igx-prefix>+359</igx-prefix>
            <label igxLabel for="phone">Phone</label>
            <input igxInput name="phone" type="text" [(ngModel)]="user.phone" />
            <igx-suffix>
                <igx-icon name="phone"></igx-icon>
            </igx-suffix>
            <igx-hint position="start">Ex.: +359 555 123 456</igx-hint>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="email">Email address</label>
            <input igxInput name="email" type="email" [(ngModel)]="user.email"/>
            <igx-suffix>
                <igx-icon name="email"></igx-icon>
            </igx-suffix>
        </igx-input-group>
    </igx-expansion-panel-body>
</igx-expansion-panel>

<igx-expansion-panel class="content__collapsible">
    <igx-expansion-panel-header (onInteraction)="onInteraction($event)" [disabled]="false">
        <igx-expansion-panel-title class="sample-title">Billing Address</igx-expansion-panel-title>
        <igx-expansion-panel-icon>
            <igx-icon fontSet="material" [name]="collapsed(1) ? 'expand_more':'expand_less'"></igx-icon>
        </igx-expansion-panel-icon>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body class="body">
        <igx-input-group class="group">
            <input igxInput name="address" type="text" [(ngModel)]="shippingAddress.address"/>
            <label igxLabel for="address">Billing Address:</label>
            <igx-suffix>
                <igx-icon name="add_location"></igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="city">City:</label>
            <input igxInput name="city" type="text" [(ngModel)]="shippingAddress.city"/>
            <igx-suffix>
                <igx-icon name="location_city"></igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="state">State:</label>
            <input igxInput name="state" type="text" [(ngModel)]="shippingAddress.state"/>
            <igx-suffix>
                <igx-icon name="terrain"></igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="zipCode">Zip Code:</label>
            <input igxInput name="zipCode" type="text" [(ngModel)]="shippingAddress.zipCode">
            <igx-suffix>
                <igx-icon name="mail_outline"></igx-icon>
            </igx-suffix>
        </igx-input-group>
    </igx-expansion-panel-body>
</igx-expansion-panel>

<igx-expansion-panel class="content__collapsible">
    <igx-expansion-panel-header (onInteraction)="onInteraction($event)" [disabled]="false">
        <igx-expansion-panel-title class="sample-title">Shipping Address</igx-expansion-panel-title>
        <igx-expansion-panel-icon>
            <igx-icon fontSet="material" [name]="collapsed(2) ? 'expand_more':'expand_less'"></igx-icon>
        </igx-expansion-panel-icon>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body class="body">
        <igx-input-group class="group">
            <input igxInput name="address" type="text" [(ngModel)]="billingAddress.address"/>
            <label igxLabel for="address">Shipping Address:</label>
            <igx-suffix>
                <igx-icon name="add_location"></igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="city">City:</label>
            <input igxInput name="city" type="text" [(ngModel)]="billingAddress.city"/>
            <igx-suffix>
                <igx-icon name="location_city"></igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="state">State:</label>
            <input igxInput name="state" type="text" [(ngModel)]="billingAddress.state"/>
            <igx-suffix>
                <igx-icon name="terrain"></igx-icon>
            </igx-suffix>
        </igx-input-group>
        <igx-input-group class="group">
            <label igxLabel for="zipCode">Zip Code:</label>
            <input igxInput name="zipCode" type="text" [(ngModel)]="billingAddress.zipCode">
            <igx-suffix>
                <igx-icon name="mail_outline"></igx-icon>
            </igx-suffix>
        </igx-input-group>
    </igx-expansion-panel-body>
</igx-expansion-panel>
...
```
You can see the results below: 
<div class="sample-container loading" style="height: 500px;">
    <iframe id="expansion-sample-5-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/expansion-sample-5" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-5-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>


## API
### IgxExpansionPanel
#### Properties 
| Name | Type | Description | Default |
|:-- |:-- |:-- |:-- |
| `id` | `string` | The unique id of the control | `igx-expansion-panel-0` |
| `cssClass` | `string` | If the control applies a css class. Set to \`\` to omit | `igx-expansion-panel` |
| `header` | `IgxExpansionPanelHeaderComponent` | Reference to the header of the component (if present) | `null` |

#### Input
|Name |Type | Description | Default |
|:---|:--|:--|:--|
| `collapsed` | `boolean` | Should the contents of the control be hidden | `true` |
| `animationSettings` | `{ openAnimation: AnimationMetadata, closeAnimation: AnimationMetadata }` | What animations should be played when expand/collapse is triggered | `{ openAnimation: growVerIn, closeAnimation: growVerOut }` | 

#### Outputs
|Name |Emits | Description |
|:--|:--|:--|
| `onCollapsed` | `{event?: Event, panel: IgxExpansionPanelComponent }` | Emitted when `collapse()` finishes |
| `onExpanded` | `{event?: Event, panel: IgxExpansionPanelComponent }` | Emitted when `expanded()` finishes |

#### Methods
|Name |Signature | Description |
|:---|:--|:--|
| `collapse` | `() => void` | Collapses the control |
| `expand` | `() => void` | Expands the control |
| `toggle` | `() => void` | Toggles the control |

### Directives
| Name | Selector | Description |
|:-- |:-- |:-- |
| `IgxExpansionPanelHeader` | `igx-expansion-panel-header` | Marks the header of the component | 

### IgxExpansionPanelHeader
#### Properties
| Name | Type | Description | Default |
|:-- |:-- |:-- |:-- |
| `id` | `string` | The unique id of the control | `igx-expansion-panel-0-header` |
| `panel` | `IgxExpansionPanelComponent` | The control the header belongs to | `null` |
| `title` | `IgxExpansionPanelTitleDirective` | The title element of the header | `null` |

#### Inputs
|Name |Type | Description | Default |
|:---|:--|:--|:--|
| `disabled` | `boolean` | Should the control respond to user interaction | `false` |
| `iconPosition` | `enum ICON_POSITION` | Where should the icon be displayed ('left', 'right' or 'none') | `left` |

#### Outputs
|Name |Emits | Description |
|:--|:--|:--|
| `onInteraction` | `{ event: Event, panel: IgxExpansionPanelComponent }` | Emitted on user interaction with the component header |

### Directives
| Name | Selector | Description |
|:-- |:-- |:-- |
| `IgxExpansionPanelTitle` | `igx-expansion-panel-title` | Marks the title of the component header |
| `IgxExpansionPanelDescription` | `igx-expansion-panel-description` | Marks the description of the component header |
| `IgxExpansionPanelIcon` | `igx-expansion-panel-icon` | Marks the template that should be used as the icon in the collapsible header |


### IgxExpansionPanelBody

#### Properties
|Name |Type | Description | Default |
|:---|:--|:--|:--|
| `panel` | `IgxExpansionPanelComponent` | The control the header belongs to | `null` |
| `role` | `string` | Binds to the host attribute `role` | `region` |

#### Inputs
|Name |Type | Description | Default |
|:---|:--|:--|:--|
| `labelledBy` | `string` | Binds to the host attribute `aria-labelledby` | `panel.header.id`  |
| `label` | `string` | Binds to the host attribute `aria-label` | `''` |
