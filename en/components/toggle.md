---
title: Angular Toggle Component | Ignite UI for Angular 
_description: The Ignite UI for Angular Toggle directive allows the users to open, to interact with, to apply animations, and to close a toggle container. 
_keywords: Angular Toggle directive, Angular Toggle control, Angular Toggle Component, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Native Angular Components
---

# Angular Toggle Directive Overview

<p class="highlight">The Ignite UI for Angular Toggle directive allows the users to make a container in the DOM toggleable through user interaction.</p>

## Angular Toggle Example


<code-view style="height: 370px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/toggle-sample-1" alt="Angular Toggle Example">
</code-view>


## Getting Started with Ignite UI for Angular Toggle

To get started with the Ignite UI for Angular Toggle directive, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxToggleModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxToggleModule } from 'igniteui-angular';
// import { IgxToggleModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxToggleModule]
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxToggleDirective` as a standalone dependency.

```typescript
// home.component.ts

import { IgxToggleDirective, IgxButtonDirective } from 'igniteui-angular';
// import { IgxToggleDirective, IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <button class="toggle-button" igxButton="contained" (click)="toggleContent()">Toggle</button>
    <div class="toggle-content" igxToggle>
        <section class="toggle-section">
            <img src="assets/images/toggle/nature.jpg" alt="Nature" />
        </section>
    </div>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxToggleDirective, IgxButtonDirective]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Toggle module or directive imported, you can start using the `igxToggle` directive.

## Using the Angular Toggle Directive

### Display Toggle

In order to show and hide the toggle content, use its [open]({environment:angularApiUrl}/classes/igxtoggledirective.html#open) and [close]({environment:angularApiUrl}/classes/igxtoggledirective.html#close) methods:

```typescript
import { IgxToggleDirective } from 'igniteui-angular'
// import { IgxToggleDirective } from '@infragistics/igniteui-angular'; for licensed package
...

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

Then in the template of our component, we can apply the directive on the element we want to be togglable: 

```html
<!--template.component.html-->
<button class="toggle-button" igxButton="contained" (click)="toggleContent()">Toggle</button>
<div class="toggle-content" igxToggle>
    <section class="toggle-section">
        <img src="assets/images/toggle/nature.jpg"/>
    </section>
</div>
```

## Examples 

### Change Position 

In the next sample, we'll use a different positioning strategy so that the content is displayed below the button. 

The `igxToggle` directive uses the [`IgxOverlayService`]({environment:angularApiUrl}/classes/igxoverlayservice.html) provider. The `open`, `close` and `toggle` methods accept optional overlay settings that control how the content is displayed. If omitted, the default overlay settings are used as seen in the previous sample.

>[!NOTE]
> By default, the [`closeOnOutsideClick`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeOnOutsideClick) property is set to `true`. In order to disable this functionality, the property has to be set to `false`. Additionally, the [`closeOnEscape`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeOnEscape) property defaults to `false`, so in order to make use of it, we have to set it to `true`.

```typescript
// template.component.ts

...
    @ViewChild(IgxToggleDirective) public igxToggle: IgxToggleDirective;
    @ViewChild('button') public igxButton: ElementRef;

    public _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public _overlaySettings = {
        target: this.igxButton.nativeElement,
        closeOnOutsideClick: false,
        closeOnEscape: true,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings)
    };

    public toggle() {
        this.igxToggle.toggle(this._overlaySettings);
    }
```

This is how our toggle should look like now:


<code-view style="height: 370px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/toggle" >
</code-view>


### Automatic Toggle Actions

In order to avoid using the `open` and `close` methods, we can use a directive, which has an `onClick` handler, and changes the state of the toggle we are referring to automatically.

If we would like to take advantage of this functionality, we will have to use the `IgxToggleActionDirective` from the `IgxToggleModule` and assign the `IgxToggleDirective` to it.

>[!NOTE]
> The [`IgxToggleActionDirective`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) should be declared on the element we are planing to use like a trigger (toggle).

```html
<!--template.component.html-->
<button class="toggle-button"  igxButton="contained" [igxToggleAction]="toggleRef">Toggle</button>
<div class="toggle-content" igxToggle #toggleRef="toggle">
    <section class="toggle-section">
        <h6>Automatic toggle actions</h6>
    </section>
</div>
```

After these changes the toggle should work exactly in the same way.


<code-view style="height: 370px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/toggle-sample-2" >
</code-view>


>[!NOTE]
> By default `IgxToggleActionDirective` excludes its host element from the [`closeOnOutsideClick`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeOnOutsideClick) property. Therefore, clicking on the host element will not fire any event. Additionally, this directive will set its host element as the overlay settings [`target`]({environment:angularApiUrl}/interfaces/overlaysettings.html#target).

### Automatic Toggle Service Provider

There is a convenient way to keep the state of the `igxToggle` directive and command it via the [`igxNavigationService`]({environment:angularApiUrl}/classes/igxnavigationservice.html) provider. We just need to set an identifier for our `igxToggle` element, which will be used to register the toggle with the service. If we would like to control its state automatically, we have to pass this identifier to the `igxToggleActionDirective`.

```html
<!--template.component.html-->
<button igxToggleAction="toggleId" class="toggle-button" igxButton="contained">Toggle</button>
<div igxToggle id="toggleId" class="toggle-content">
    <section class="toggle-section">
        <h6>Toggled by the service provider</h6>
    </section>
</div>
```

If all went well, it will look like this:


<code-view style="height: 370px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/toggle-sample-3" >
</code-view>


### Offsetting the Toggle Container

We can manipulate the position of the toggle container along the corresponding axis by a provided amount:

```typescript
// deltaX and deltaY determine by how much the container will be offset compared to its' previous position
public offsetToggle() {
    const deltaX = 30;
    const deltaY = 30;
    this.toggle.setOffset(deltaX, deltaY);
}
```


<code-view style="height: 370px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/toggle-sample-4" >
</code-view>


## API References
<div class="divider"></div>

* [IgxToggleDirective]({environment:angularApiUrl}/classes/igxtoggledirective.html)
* [IgxToggleActionDirective]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html)

Additional components and/or directives with relative APIs that were used:

* [IgxOverlayOutletDirective]({environment:angularApiUrl}/classes/igxoverlayoutletdirective.html)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [igxNavigationService]({environment:angularApiUrl}/classes/igxnavigationservice.html)

## Theming Dependencies
* [IgxOverlay Theme]({environment:sassApiUrl}/index.html#function-overlay-theme)


## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
