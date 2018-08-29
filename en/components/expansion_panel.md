---
title: Expansion Panel
_description: Provides an easily configurable component with two states - collapsed and expanded.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Collapsible component, IgxExpansionPanel, Ignite UI Expansion Panel
---

## Expansion Panel
<p class="highlight">
The `IgxExpansionPanel` is a lightweigh component which can be rendered in two states - collapsed or expanded. When collapsed, the panel displays a short summary of its content. The collapsed panel can be toggled (via click or keyboard interactions) to display the whole body of the component, containing any additional necessary content.
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
        - `igx-expansion-panel-title` - stores the component title. Has default styling and will always appear at the beginning of the header. Used in aria labels.
        - `igx-expansion-panel-description` - stores the component description. Can be used to provide a short summary. Will always be displayed second in the headers.
    - `igx-expansion-panel-body` - stores the component body. This part is only visible when the component is expanded.

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
        Hummingbirds are birds native to the Americas that constitute the family Trochilidae. They are among the smallest of birds, most species measuring 7.5–13 cm (3–5 in) in length. Indeed, the smallest extant bird species is a hummingbird, the 5 cm (2.0 in) bee hummingbird weighing less than 2.0 g (0.07 oz).
        <a href='https://en.wikipedia.org/wiki/Hummingbird'>Read more</a>
    </igx-expansion-panel-body>
</igx-expansion-panel>

```
The `IgxExpansionPanelComponent` exposes the `.igx-expansion-panel` class which we can use to style the component:

```css
<!-- expansion-panel.component.css -->

.igx-expansion-panel
{
    font-family: Verdana;
}
```

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

This way, the description will only be display when the component is collapsed.

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

Configuring the position of the header icon can be done through the `iconPosition` input on the `igx-expansion-panel-header`. The posible options for the icon position are **left**, **right** and **none**. Let's configure our components button to go on the *right* side.

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
Once imported, we can the avatar in the markup:

```html
<!-- in expansion-panel.component.html -->
...
<igx-expansion-panel-body>
    <div class='example-body'>
        <igx-avatar [src]="imgSource" roundShape="true" size="large">
        </igx-avatar>
        Hummingbirds are birds native to the Americas that constitute the family Trochilidae. They are among the smallest of birds,
        most species measuring 7.5–13 cm (3–5 in) in length. Indeed, the smallest extant bird species is a hummingbird,
        the 5 cm (2.0 in) bee hummingbird weighing less than 2.0 g (0.07 oz).
        <a [href]="readMore">Read more</a>
    </div>
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

## API
### IgxExpansionPanel
#### Properties 
| Name | Type | Description | Default |
|:-- |:-- |:-- |:-- |
| `id` | `string` | The unique id of the control | `igx-expansion-panel-0` |
| `cssClass` | `string` | If the control applies a css class. Set to \`\` to omit | `igx-expansion-panel` |

#### Input
|Name |Type | Description | Default |
|:---|:--|:--|:--|
| `collapsed` | `boolean` | Should the contents of the control be hidden | `true` |
| `animationSettings` | `{ openAnimation: AnimationMetadata, closeAnimation: AnimationMetadata }` | What animations should be played when expand/collapse is triggered | `{ openAnimation: slideIn, closeAnimation: slideOut }` | 
| `ariaLabelledBy`| `string` | Aria Support. Id of control that labels component | `""` |

#### Outputs
|Name |Emits | Description |
|:--|:--|:--|
| `onCollapsed` | `{event?: Event}` | Emitted when `collapse()` finishes |
| `onExpanded` | `{event?: Event}` | Emitted when `expanded()` finishes |

#### Methods
|Name |Signature | Description |
|:---|:--|:--|
| `collapse` | `() => void` | Collapses the control |
| `expand` | `() => void` | Expands the control |
| `toggle` | `() => void` | Toggles the control |

#### Directives
| Name | Selector | Description |
|:-- |:-- |:-- |
| `IgxExpansionPanelBody` | `igx-expansion-panel-body` | Marks the content of the component |
| `IgxExpansionPanelHeader` | `igx-expansion-panel-header` | Marks the header of the component | 

### IgxExpansionPanelHeader
#### Properties
| Name | Type | Description | Default |
|:-- |:-- |:-- |:-- |
| `id` | `string` | The unique id of the control | `igx-expansion-panel-0` |
| `panel` | `IgxExpansionPanelComponent` | The control the header belongs to | `null` |
| `title` | `IgxExpansionPanelTitleDirective` | The title element of the header | `null` |

#### Inputs
|Name |Type | Description | Default |
|:---|:--|:--|:--|
| `ariaLabelledBy`| `string` | Aria Support. Id of control that labels component | `panel.id` |
| `disabled` | `boolean` | Should the control respond to user interaction | `false` |
| `iconPosition` | `enum ICON_POSITION` | Where should the icon be displayed ('left', 'right' or 'none') | `left` |

#### Outputs
|Name |Emits | Description |
|:--|:--|:--|
| `onInteraction` | `{ event: Event }` | Emitted on user interaction with the component header |

#### Directives
| Name | Selector | Description |
|:-- |:-- |:-- |
| `IgxExpansionPanelTitle` | `igx-expansion-panel-title` | Marks the title of the component header |
| `IgxExpansionPanelDescription` | `igx-expansion-panel-description` | Marks the description of the component header |
| `IgxExpansionPanelIcon` | `igx-expansion-panel-icon` | Marks the template that should be used as the icon in the collapsible header |