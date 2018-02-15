---
title: Toggle Directive
_description: Using any content wrapped into an element which implements the toggle directive become a box you can open and close intuitively through a native Angular framework with Ingite UI for Angular Toggle directive.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Toggle directives, Angular Toggle controls
---

##Toggle

<p class="highlight">The ignite UI for Angular Toggle directive wraps a content into a box which could be opened and respectively closed programmatically or interactively.</p>
<div class="divider"></div>

##Toggle Demo

<div>Demo</div>
<div class="divider--half"></div>

> [!WARNING]
> Ignite UI for Angular has a [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/) on [**HammerJS**](https://hammerjs.github.io/).
> Make sure you add it to your Angular project.
> <br/> <br/>`$ npm install hammerjs @types/hammerjs`

##Usage
The toggle allows you easilly to wrap some content into a box which easily can be opened and closed.
To get started with the IgniteUI for Angular Toggle, let's first import the **IgxToggleModule** in our **app.module.ts**

```typescript
// app.module.ts

...
import { IgxToggleModule } from 'igniteui-angular/main'

@NgModule({
    ...
    imports: [..., IgxToggleModule]
    ...
})
export class AppModule {}
```
Then in the template of our component we can apply the directive on the element we want to be togglable.

```html
<!--template.component.html-->
<button (onClick)="toggle()">Open/Close</button>
<div igxToggle>
    <p>Content</p>
</div>
```

In order to show and hide this content we will have to invoke one of the two methods open/close.

```typescript
import { IgxToggleDirective } from 'igniteui-angular/main'

@Component({
    ...
})
export class Class {
    @ViewChild(IgxToggleDirective) toggle: IgxToggleDirective;

    toggle() {
        if (this.toggle.collapsed) {
            this.toggle.open();
        } else {
            this.toggle.close();
        }
    }
}
```

If all went well, you should see the following in your browser:

<div class="sample-container" style="height: 200px">
Demo
</div>

#### Automatic toggle actions

In order to prevent this invocation of these methods there is a directive which has `onClick` handler and changes the state to the toggle we are referred to. So let's dive in. Firstly we have to import the **IgxToggleActionModule** in our **app.module.ts**

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxToggleActionModule } from 'igniteui-angular/main'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxToggleActionModule]
    ...
})
export class AppModule {}
```

Then in the template we need to declare **IgxToggleActionDirective** by assigning the **IgxToggleDirective** to it. The **IgxToggleActionDirective** should be declared on the element we are planing to use like a trigger(toggle).

```html
<!--template.component.html-->
<button [igxToggleAction]="toggle">Open/Close</button>
<div igxToggle #toggle="toggle">
    <p>Content</p>
</div>
```

After these changes the toggle should work exactly in the same way.

<div class="sample-container" style="height: 400px">
Demo
</div>

### API Summary

In this article we covered the details of how to use Toggle directive. We created a content which would possible to be hidden or shown by invoking programmatically methods which determine this behaviour.
Furthermore we added another helping directive which controls automatically this same behaviour by giving it the appropriate toggle reference.

###Inputs
The following inputs are available on the **igxToggle** directive:
| Name | Type | Description |
| :--- | :--- | :--- |
| `collapsed` | Boolean | Determines whether the toggle is open or closed. |

<div class="divider"></div>

The following inputs are available on the **igxToggleAction** directive:
| Name | Type | Description |
| :--- | :--- | :--- |
| `igxToggleAction` | IgxToggleDirective | Accepts the toggle that has to be controlled. |

<div class="divider"></div>

####Outputs
The following outputs are available on the **igxToggle** directive:
| Name | Type | Description |
| :--- | :--- | :--- |
| `onOpen` | EventEmitter | Emits an event when the toggle container is opened. |
| `onClose` | EventEmitter | Emits an event when the toggle container is closed. |

<div class="divider"></div>

####Methods
The following methods are available on the **igxToggle** directive:
| Name | Type | Description |
| :--- | :--- | :--- |
| `open` | void | Opens the toggle. |
| `close` | void | Closes the toggle. |

<div class="divider"></div>

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
