---
title: Autocomplete Directive
_description: The igxAutocomplete directive provides a way to enhance a text input by showing a panel of suggested options provided by the developer.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Autocomplete components, Angular Autocomplete directives, Angular Autocomplete controls
---

## Autocomplete
<p class="highlight">

The [`igxAutocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) directive provides a way to enhance a text input by showing a [`igxDropDown`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) with suggested options, provided by the developer. The suggestions will show once you start typing in the text input or use the `Arrow Up`/`Arrow Down` keys.

By default, the first item is always highlighted, which provides an easy way to select it using the `Enter` key. Clicking on the item from the list will select it too, and the input value will be automatically updated, which will result closing of the dropdown. When an item is selected, the `onItemSelected` event is fired. If this event is canceled, the item will not be selected and the drop-down will not close. The [`igxAutocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) directive allows you to navigate through items and at the same time to have focus always on the input. The latter will allow you to continue typing in the input. You can use the `ESC` key to close the drop-down list.

The [`igx-autocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) uses the [`igx-drop-down`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) as a provider for the available options, which means the available capabilities of the drop-down component can be used, these include grouping, templates and disabling of items and groups.
</p>
<div class="divider"></div>

### Demo
The following sample demonstrates simple use of the `igx-autocomplete` directive, applied on an `igx-input`. The directive is provided with an `igx-drop-down` which has a defined filtering pipe.

<code-view style="height: 400px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/autocomplete" >
</code-view>

<div class="divider--half"></div>

> [!WARNING]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**Getting Started**](general/getting-started.md) topic.

## Usage
### Getting Started
To use the [`igx-autocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) we need to import the **IgxAutocompleteModule** and **IgxDropDownModule** in our **app.module**. If the [`igx-autocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) is applied on an [igx-input]({environment:angularApiUrl}/classes/igxinputdirective.html), the **igxInputGroupModule** is also required:

```typescript
// app.module.ts

...
import { 
    IgxAutocompleteModule,
    IgxDropDownModule, 
    IgxInputGroupModule 
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [
        ..., 
        IgxAutocompleteModule,
        IgxDropDownModule,
        IgxInputGroupModule,
        ....
    ],
    ...
})
export class AppModule {}
```

Then adding the `igxAutocomplete` directive with a value, which is reference to a drop down:

```html
<igx-input-group>
    <input igxInput name="towns" type="text"
        [igxAutocomplete]='townsPanel'/>
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
        this.towns = [ "New York", "Washington, D.C.", "London", "Berlin", "Sofia", "Rome", "Kiev",
            "Copenhagen", "Paris", "Barcelona", "Vienna", "Athens", "Dublin", "Yerevan",
            "Oslo", "Helsinki", "Stockholm", "Prague", "Istanbul", "El Paso", "Florence", "Moscow" ];
    }
}
```

### Keyboard Navigation

 - `Arrow Down`, `Arrow Up`, `Alt` + `Arrow Down`, `Alt` + `Arrow Up` will open the `drop-down`, if closed.
 - Typing in the input will open the drop-down, if it is closed.
 - `Arrow Down` - will move to the next drop-down item, if it is opened.
 - `Arrow Up` - will move to the previous drop-down item, if it is opened.
 - `Enter` will confirm the already selected item and will close the drop-down.
 - `Esc` will close the drop-down.

> Note: When the autocomplete is opened, then the first item, in the list, is automatically selected. The same is valid when the list is filtered.

### Compatibility support

Applying the `igxAutocomplete` directive will decorate the element with the following ARIA attributes:
 - role="combobox" - role of the element, where the directive is applied.
 - aria-autocomplete="list" - indicates that input completion suggestions are provided in the form of list
 - aria-haspopup="listbox" attribute to indicate that `igxAutocomplete` can pop-up a container to suggest values.
 - aria-expanded="true"/"false" - value depending on the collapsed state of the drop-down.
 - aria-owns="dropDownID" - id of the drop-down used for displaying suggestions.
 - aria-activedescendant="listItemId" - value is set to the id of the current active list element.

The `drop-down` component, used as provider for suggestions, will expose the following ARIA attributes:
 - role="listbox" - applied on the `igx-drop-down` component container
 - role="group" - applied on the `igx-drop-down-item-group` component container
 - role="option" - applied on the `igx-drop-down-item` component container
 - aria-disabled="true"/"false" applied on `igx-drop-down-item`, `igx-drop-down-item-group` component containers when they are disabled.

### Enabling/Disabling autocomplete drop-down

The following sample defines an [`IgxAutocompleteDisabled`]({environment:angularApiUrl}/classes/igxautocompletedirective.html#disabled), which allows for an automatic enabling and disabling of the autocomplete drop-down.

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
        this.towns = [ "New York", "Washington, D.C.", "London", "Berlin", "Sofia", "Rome", "Kiev",
            "Copenhagen", "Paris", "Barcelona", "Vienna", "Athens", "Dublin", "Yerevan",
            "Oslo", "Helsinki", "Stockholm", "Prague", "Istanbul", "El Paso", "Florence", "Moscow" ];
    }
}
```

### Drop-down settings
The `igx-autocomplete` drop-down positioning, scrolling strategy and outlet can be configured using, the [`IgxAutocompleteSettings`]({environment:angularApiUrl}/classes/igxautocompletedirective.html#autocompletesettings) option. It allows values from type [`AutocompleteOverlaySettings`]({environment:angularApiUrl}/interfaces/autocompleteoverlaysettings.html).

The following example displays the positioning of the drop-down can be set to be always above the input, where the directive is applied. It also disables opening and closing animations. For the purpose the `ConnectedPositioningStrategy` is used:

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
        this.towns = [ "New York", "Washington, D.C.", "London", "Berlin", "Sofia", "Rome", "Kiev",
            "Copenhagen", "Paris", "Barcelona", "Vienna", "Athens", "Dublin", "Yerevan",
            "Oslo", "Helsinki", "Stockholm", "Prague", "Istanbul", "El Paso", "Florence", "Moscow" ];
    }
    @ViewChild('inputGroup', { read: IgxInputGroupComponent }) inputGroup: IgxInputGroupComponent;

    this.settings = {
        positionStrategy: new ConnectedPositioningStrategy({
            closeAnimation: null,
            openAnimation: null,
            verticalDirection: VerticalAlignment.Top,
            verticalStartPoint: VerticalAlignment.Top
        })
    };
}
```

> Note: The default positioning strategy is `AutoPositionStrategy` and the drop-down is opened according to the available space.

## Application Scenarios
### Grouped igxAutocomplete, inside Reactive From

The following sample demonstrates an autocomplete, which allows selecting a cinema, where movies are grouped by a city. Type in the input or use the `Arrow Down` key to open the list and choose a cinema, then select a movie and its date and time:


<code-view style="height: 650px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/movie" >
</code-view>


<div class="divider--half"></div>

In order to use the `igxAutocomplete` with groups, like in the sample above, you need to define your data in the following manner:

```html
<igx-input-group>
    <input igxInput #cinema name="cinema" formControlName="cinema" [igxAutocomplete]='cinemaPanel'/>
    <label igxLabel for="cinema">City & Cinema</label>
    <igx-suffix igxRipple><igx-icon fontSet="material">place</igx-icon> </igx-suffix>
</igx-input-group>
<igx-drop-down #cinemaPanel maxHeight="350px">
    <igx-drop-down-item-group *ngFor="let town of towns" [label]="town.name">
        <igx-drop-down-item *ngFor="let cinema of town.cinemas" [value]="cinema">
            {{cinema}}
        </igx-drop-down-item>
    </igx-drop-down-item-group>
</igx-drop-down>
```

### Autocomplete bound to remote data
The following sample demonstrates an `igxAutocomplete` with a drop-down bound to a remote service. In order to limit requests to the service and improve performance, RxJS `debounce` is used and requests are made `250ms` after the input has stopped.

For the purpose of the sample there is a delay in the data loading, in order to apply and show a custom loading template instead of the drop-down:

<code-view style="height: 400px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/autocomplete-remote" >
</code-view>

<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxAutocompleteDirective]({environment:angularApiUrl}/classes/igxautocompletedirective.html)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

### Additional Resources
<div class="divider--half"></div>

* [IgxDropDownComponent](drop-down.md)
* [IgxInputGroup](input-group.md)
* [Template Driven Forms Integration](input-group.md)
* [Reactive Forms Integration](input-group-reactive-forms.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)