---
title: Autocomplete Directive
_description: The igxAutocomplete directive provides a way to enhance a text input by showing a panel of suggested options provided by the developer.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Autocomplete components, Angular Autocomplete directives, Angular Autocomplete controls
---

## Autocomplete
<p class="highlight">

The [**igxAutocomplete**]({environment:angularApiUrl}/classes/igxautocompletedirective.html) directive provides a way to enhance a text input by showing a [drop down]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) with suggested options provided by the developer.

The [igx-autocomplete]({environment:angularApiUrl}/classes/igxautocompletedirective.html) suggestions will show as long as you start typing in the text input. By default, the first item is always highlighted, so that it can be easily selected using the Enter key. The other way is to click an item from the list and the input value will be automatically updated and the drop down will be automatically closed, unless the onItemSelected event is handled and canceled. 
The igxAutocomplete directive allows you to navigate through items and at the same time to have focus always on the input. The latter will allow you to continue typing in the input. You can use the ESC key to close the drop down list.

The [igx-autocomplete]({environment:angularApiUrl}/classes/igxautocompletedirective.html) uses the [igx-drop-down]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) as a provider for the available options. This means that the available capabilities of the drop down component can be used - grouping, templates, disabling of items and groups.
</p>
<div class="divider"></div>

### Demo
The following sample demonstrates simple use of the igx-autocomplete directive, applied on an igx-input, and provided with an igx-drop-down which has a defined filtering pipe.
<div class="sample-container loading" style="height: 400px;">
    <iframe id="autocomplete-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/autocomplete" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="autocomplete-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

## Usage
### Getting Started
To use the [igx-autocomplete]({environment:angularApiUrl}/classes/igxautocompletedirective.html) we need to import the **igxAutocompleteModule** and **igxDropDownModule** in our **app.module**. If the [igx-autocomplete]({environment:angularApiUrl}/classes/igxautocompletedirective.html) is applied on an [igx-input]({environment:angularApiUrl}/classes/igxinputdirective.html), the **igxInputGroupModule** is also required:
```typescript
// app.module.ts

...
import { IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule],
    ...
})
export class AppModule {}
```

### Keyboard Navigation

 - `Arrow Down` - will move to the next drop down item.
 - `Arrow Up` - will move to the previous drop down item.
 - `End` will move to the last drop down item.
 - `Home` will move to the first drop down item.
 - `Enter` will confirm the already selected items and will close the drop down.
 - `Esc` will close the drop down.

> Note: When the autocomplete is opened, then the first item, in the list, is automatically selected. The same is valid when the list is filtered.

### Compatibility support

Applying the `igxAutocomplete` directive will decorate the element with the following ARIA attributes:
 - role="combobox" - role of the element, where the directive is applied.
 - aria-haspopup="listbox" attribute to indicate that igxAutocomplete can pop-up a container to suggest values.
 - aria-owns="dropDownID" - id of the drop down used for displaying suggestions.
 - aria-expanded="true"/"false" - value depending on the collapsed state of the drop down.

The drop-down component, used as provider for suggestions, will expose the following aria attributes:
 - role="listbox" - applied on the `igx-drop-down` component container
 - role="group" - applied on the `igx-drop-down-item-group` component container
 - role="option" - applied on the `igx-drop-down-item` component container
 - aria-disabled="true"/"false" applied on `igx-drop-down-item`, `igx-drop-down-item-group` component containers when they are disabled.

### Enabling/Disabling autocomplete drop down

The following sample defines an [`igxAutocompleteDisabled`]({environment:angularApiUrl}/classes/igxautocompletedirective.html#disabled), which allows for an automatic enabling and disabling of the autocomplete drop down.

```html
<igx-input-group>
    <input igxInput name="towns" type="text"
        [igxAutocomplete]='townsPanel'
        [igxAutocompleteDisabled]="disabled"/>
    <label igxLabel for="towns">Towns</label>
</igx-input-group>
<igx-drop-down #townsPanel>
    <igx-drop-down-item *ngFor="let town of towns">
        {{town}}
    </igx-drop-down-item>
</igx-drop-down>
<igx-switch name="toggle" [(ngModel)]="!disabled"></igx-switch>
```

```typescript
@Component({
    selector: 'app-autocomplete-sample',
    styleUrls: ['autocomplete.sample.css'],
    templateUrl: `autocomplete.sample.html`
})
export class AutocompleteSampleComponent {
    disabled;
    constructor() {
        this.towns = [ 'Sofia', 'Plovdiv', 'Varna', 'Burgas'];
    }
}
```

### Drop Down settings
The igx-autocomplete drop down positioning, scrolling strategy and outlet can be configured using, the [`igxAutocompleteSettings`]({environment:angularApiUrl}/classes/igxautocompletedirective.html#autocompleteSettings) option. It allows values from type [`AutocompleteOverlaySettings`]({environment:angularApiUrl}/classes/autocompleteoverlaysettings.html).

The following example displays that the positioning of the drop down can be set to be always above the input, where the directive is applied. It also disables opening and closing animations. For that purpose the `ConnectedPositioningStrategy` is used:

```html
<igx-input-group #inputGroup>
    <input igxInput name="towns" type="text"
        [igxAutocomplete]='townsPanel'
        [igxAutocompleteSettings]='settings'/>
    <label igxLabel for="towns">Towns</label>
</igx-input-group>
<igx-drop-down #townsPanel>
    <igx-drop-down-item *ngFor="let town of towns">
        {{town}}
    </igx-drop-down-item>
</igx-drop-down>
```

```typescript
@Component({
    selector: 'app-autocomplete-sample',
    styleUrls: ['autocomplete.sample.css'],
    templateUrl: `autocomplete.sample.html`
})
export class AutocompleteSampleComponent {
    constructor() {
        this.towns = [ 'Sofia', 'Plovdiv', 'Varna', 'Burgas'];
    }
    @ViewChild('inputGroup', { read: IgxInputGroupComponent }) inputGroup: IgxInputGroupComponent;

    this.settings = {
        positionStrategy: new ConnectedPositioningStrategy({
            closeAnimation: null,
            openAnimation: null,
            verticalDirection: VerticalAlignment.Top,
            target: this.inputGroup.element.nativeElement
        })
    };
}
```

> Note: The default positioning strategy is `AutoPositionStrategy` and drop down is opened according to the available space - by default below the input.

> Note: When applying custom drop down settings, you need to explicitly set target, which is either the input or if the igxInput is used - the igxInputGroup component. The latter is needed in order for the drop down width to fix input group width. 

## Application Scenarios
### Autocomplete with grouped items, placed inside Reactive From

The following sample demonstrates an autocomplete that allows selecting a movie, where movies are grouped by genres. The drop down is bound to hierarchical data and is placed inside a Reactive Form:

<div class="sample-container loading" style="height: 800px;">
    <iframe id="reactive-form-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/reactive-forms" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="reactive-form-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

> Note: Follow the [Template Driven Forms Integration](input_group.md) topic to see the same example and an igxAutocomplete placed inside a Template Driven Form.
<div class="divider--half"></div>

### Autocomplete bound to remote data
The following sample demonstrates an igxAutocomplete with drop down bound to a remote service. For the purpose of the sample there is a delay, in order to apply a custom template, that will show instead of the drop down, when data is loading:

<div class="sample-container loading" style="height: 400px;">
    <iframe id="autocomplete-remote-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/autocomplete-remote" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="autocomplete-remote-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


## API
<div class="divider--half"></div>

* [IgxAutocompleteDirective]({environment:angularApiUrl}/classes/igxautocompletedirective.html)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

## Known Issues

### Additional Resources
<div class="divider--half"></div>

* [IgxDropDownComponent](drop_down.md)
* [IgxInputGroup](input_group.md)
* [Template Driven Forms Integration](input_group.md)
[Reactive Forms Integration](input_group_reactive_forms.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)