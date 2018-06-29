---
title: Toggle Component - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Toggle directive allows the users to open, to interact with, to apply animations, and to close a toggle container. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Toggle directives, Angular Toggle controls, Angular Toggle Component,
---

##Toggle

The `igxToggle` directive allows the users to open, to interact with, to apply animations, and to close a toggle container. All toggle components implement the `igxToggle` or `igxToggleAction` internally, and users can implement toggle-based components and views, like dropdowns, while the `igxToggleAction` directive controls other components until the toggle umbrella.

###Toggle Demo

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-iframe" src='{environment:demosBaseUrl}/toggle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toggle-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>

##Usage
The toggle allows you easily to wrap some content into a box which easily can be opened and closed.
To get started with the IgniteUI for Angular Toggle, let's first import the **IgxToggleModule** in our **app.module.ts**. We are also planning to take advantage of **igxButton** directive so we will have to import **IgxButtonModule** into the **app.module.ts** too.

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```
Then in the template of our component we can apply the directive on the element we want to be togglable.

```html
<!--template.component.html-->
<button class="toggle-button"  igxButton="raised" (click)="toggleContent()">Toggle</button>
<div class="toggle-content" igxToggle #toggleRef="toggle">
    <section class="toggle-section">
        <ul>
            <li>Bananas</li>
            <li>Apples</li>
            <li>Strawberries</li>
            <li>Raspberry</li>
            <li>Cherry</li>
        </ul>
    </section>
</div>
```

In order to show and hide this content we will have to invoke one of the two methods open/close.

```typescript
import { IgxToggleDirective } from 'igniteui-angular'

@Component({
    ...
})
export class Class {
    @ViewChild(IgxToggleDirective) toggle: IgxToggleDirective;

    toggleContent() {
        if (this.toggle.collapsed) {
            this.toggle.open();
        } else {
            this.toggle.close();
        }
    }
}
```

If all went well, you should see the following in your browser:

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-1-iframe" src='{environment:demosBaseUrl}/toggle-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toggle-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>

In the next sample we'll use different positioning strategy so the content is displayed below the button. 

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

```html
<!--template.component.html-->
<div class="sample-wrapper">
  <article class="sample-column">
    <button class="toggle-button" #button igxButton="raised" (click)="toggle()">Toggle</button>
    <div class="toggle-content" igxToggle #toggleRef="toggle">
      <section class="toggle-section">
          <h2>Box</h2>
      </section>
    </div>
  </article>
</div>
```

```typescript
// template.component.ts

...
    @ViewChild(IgxToggleDirective) public igxToggle: IgxToggleDirective;
    @ViewChild("button") public igxButton: ElementRef;
    public _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };
    public _overlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
        scrollStrategy: new CloseScrollStrategy()
    };
    public toggle() {
        this._overlaySettings.positionStrategy.settings.target = this.igxButton.nativeElement;
        this.igxToggle.toggle(this._overlaySettings);
    }
```


<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-iframe-1" src='{environment:demosBaseUrl}/toggle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toggle-iframe-1" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>

### Automatic toggle actions

In order to prevent this invocation of these methods there is a directive which has `onClick` handler and changes the state to the toggle we are referred to. So let's dive in. If we would like to take advantage of this functionality we will have to use **IgxToggleActionDirective** Which is comming from the same **IgxToggleModule**.

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

Then in the template we need to declare **IgxToggleActionDirective** by assigning the **IgxToggleDirective** to it. The **IgxToggleActionDirective** should be declared on the element we are planing to use like a trigger(toggle).

```html
<!--template.component.html-->
<button class="toggle-button"  igxButton="raised" [igxToggleAction]="toggleRef">Toggle</button>
<div class="toggle-content" igxToggle #toggleRef="toggle">
    <section class="toggle-section">
        <img src="link to random image"/>
    </section>
</div>
```

After these changes the toggle should work exactly in the same way.

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-2-iframe" src='{environment:demosBaseUrl}/toggle-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toggle-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>

### Automatic toggle actions with service provider

There is a convenient way to keep the state and command our **igxToggle** through **igxNavigationService** provider which would be convenient for us to keep tracking it everywhere in our application. We just need to set identifier for our **igxToggle** directive and the registration into the service happens for us. If we would like this state to be controlled automatically again we just need to pass this identifier to our helping **igxToggleActionDirective**.

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

```html
<!--template.component.html-->
<button igxToggleAction="toggleId" [closeOnOutsideClick]="true" class="toggle-button"  igxButton="raised">Toggle</button>
<div igxToggle id="toggleId" class="toggle-content" collapsed="false">
    <section class="toggle-section">
    <h3>Click 
        <br/> Out of the Box</h3>
    </section>
</div>
```

If all went well, it will look like this:

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-3-iframe" src='{environment:demosBaseUrl}/toggle-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toggle-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>


## API Summary

In this article we covered the details of how to use Toggle directive. We created a content which would possible to be hidden or shown by invoking programmatically methods which determine this behaviour.
Furthermore we added another helping directive which controls automatically this same behaviour by giving it the appropriate toggle reference. In the end we have registered our **igxToggle** directive in the **igxNavigationService** provider by giving it an ID, which we then provided to our helping **igxToggleAction** directive.

###Inputs
The following inputs are available on the **igxToggle** directive:
| Name | Type | Description |
| :--- | :--- | :--- |
| `collapsed` | Boolean | Determines whether the toggle is open or closed. |
| `id` | Boolean | Identifier which is registered into **igxNavigationService**. |

<div class="divider"></div>

The following inputs are available on the **igxToggleAction** directive:
| Name | Type | Description |
| :--- | :--- | :--- |
| `igxToggleAction` | IgxToggleDirective | Accepts the toggle that has to be controlled. |
| `closeOnOutsideClick` | IgxToggleDirective | Determines whether toggle should be closed when you click outside. |

<div class="divider"></div>

####Outputs
The following outputs are available on the **igxToggle** directive:
| Name | Type | Description |
| :--- | :--- | :--- |
| `onOpening` | EventEmitter | Emits an event before the toggle container is opened. |
| `onOpened` | EventEmitter | Emits an event after the toggle container is opened. |
| `onClosing` | EventEmitter | Emits an event before the toggle container is closed. |
| `onClosed` | EventEmitter | Emits an event after the toggle container is closed. |

<div class="divider"></div>

####Methods
The following methods are available on the **igxToggle** directive:
| Name | Type | Description |
| :--- | :--- | :--- |
| `open` | void | Opens the toggle. |
| `close` | void | Closes the toggle. |
| `toggle` | void | Open or close the toggle depending on the state. |

<div class="divider"></div>

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
