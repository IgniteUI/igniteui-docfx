---
title: Angular Autocomplete Component – Ignite UI for Angular
_description: The Angular Autocomplete directive offers a way to enhance a text input by showing a panel of suggested options provided by the developer. Try it now.
_keywords: Angular Autocomplete component, Angular Autocomplete directive, Angular Autocomplete control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
---

# Angular Autocomplete Directive Overview
Angular Autocomplete is a search box directive that enables users to easily find, filter and select an item from a list of suggestions while they type. Feature-rich, it supports seamless data binding, filtering, grouping, UI customization options, and other built-in functionalities so developers can create intuitive autocomplete search experience.

<p class="highlight">

The [`igxAutocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) directive provides a way to enhance a text input by showing an [`igxDropDown`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) with suggested options, provided by the developer. The suggestions will show once you start typing in the text input or use the `Arrow Up`/`Arrow Down` keys.
</p>

## Angular Autocomplete Example

The Angular Autocomplete example below generates a dropdown suggestion list as users start typing the name of a town in the input textbox. 

<code-view style="height: 400px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/autocomplete/" alt="Angular Autocomplete Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Autocomplete

To get started with the Ignite UI for Angular for [Angular Components](https://www.infragistics.com/products/ignite-ui-angular) and Autocomplete directive in particular, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the **IgxAutocompleteModule** and **IgxDropDownModule** in our **app.module**. If [`igxAutocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) is applied on an [igxInput]({environment:angularApiUrl}/classes/igxinputdirective.html), the **igxInputGroupModule** is also required:

```typescript
// app.module.ts

...
import { 
    IgxAutocompleteModule,
    IgxDropDownModule, 
    IgxInputGroupModule 
} from 'igniteui-angular';
// import { IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule } from '@infragistics/igniteui-angular'; for licensed package

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

Alternatively, as of `16.0.0` you can import the `IgxAutocompleteDirective` as a standalone directive.

```typescript
// home.component.ts

...
import { IgxAutocompleteDirective, IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES } from 'igniteui-angular';
// import { IgxAutocompleteDirective, IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-input-group>
        <input igxInput name="towns" type="text" [igxAutocomplete]="townsPanel" />
        <label igxLabel for="towns">Towns</label>
    </igx-input-group>
    <igx-drop-down #townsPanel>
        <igx-drop-down-item *ngFor="let town of towns">
            {{town}}
        </igx-drop-down-item>
    </igx-drop-down>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxAutocompleteDirective, IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Action Strip module or directive imported, you can start with a basic configuration of the `igxAutocomplete` component.

## Using the Angular Autocomplete
In order to apply the autocomplete functionality to an input, add the `igxAutocomplete` directive, referencing the dropdown:

```html
<igx-input-group>
    <input igxInput name="towns" type="text" [igxAutocomplete]="townsPanel" />
    <label igxLabel for="towns">Towns</label>
</igx-input-group>
<igx-drop-down #townsPanel>
    <igx-drop-down-item *ngFor="let town of towns">
        {{town}}
    </igx-drop-down-item>
</igx-drop-down>
```

Add the list that will be shown in the dropdown. If you want the list to be filtered while typing, use the **PipeTransform** interface.

```typescript
import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
    selector: 'app-autocomplete-sample',
    styleUrls: ['autocomplete.sample.css'],
    templateUrl: `autocomplete.sample.html`
})
export class AutocompleteSampleComponent {
    constructor() {
        this.towns = [ 'New York', 'Washington, D.C.', 'London', 'Berlin', 'Sofia', 'Rome', 'Kiev',
            'Copenhagen', 'Paris', 'Barcelona', 'Vienna', 'Athens', 'Dublin', 'Yerevan',
            'Oslo', 'Helsinki', 'Stockholm', 'Prague', 'Istanbul', 'El Paso', 'Florence', 'Moscow' ];
    }
}

@Pipe({ name: 'startsWith' })
export class AutocompletePipeStartsWith implements PipeTransform {
    public transform(collection: any[], term = '') {
        return collection.filter((item) => item.toString().toLowerCase().startsWith(term.toString().toLowerCase()));
    }
}
```

>[!NOTE]
>The [`igxAutocomplete`]({environment:angularApiUrl}/classes/igxautocompletedirective.html) uses the [`igxDropDown`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) as a provider for the available options, which means that all capabilities of the dropdown component can be used in the autocomplete.

### Disable Angular Autocomplete
You can disable the Angular autocomplete by using the [`IgxAutocompleteDisabled`]({environment:angularApiUrl}/classes/igxautocompletedirective.html#disabled) input:

```html
<igx-input-group>
    <input igxInput name="towns" type="text"
        [igxAutocomplete]='townsPanel'
        [igxAutocompleteDisabled]="disabled"/>
    <label igxLabel for="towns">Towns</label>
</igx-input-group>
```

### Autocomplete Settings
The `igx-autocomplete` dropdown positioning, scrolling strategy, and outlet can be configured using the [`IgxAutocompleteSettings`]({environment:angularApiUrl}/classes/igxautocompletedirective.html#autocompleteSettings).

In the following Angular Autocomplete example we will position the dropdown above the input and disable the opening and closing animations. We're using the `ConnectedPositioningStrategy` for this:

```html
<igx-input-group class="autocomplete">
    <label igxLabel for="cinema">Cinema</label>
    <input igxInput name="cinema" type="text"
    [igxAutocomplete]="townsPanel"
    [igxAutocompleteSettings]="settings"/>
</igx-input-group>
<igx-drop-down #townsPanel maxHeight="300px">
    <igx-drop-down-item-group *ngFor="let town of towns" [label]="town.name">
        <igx-drop-down-item *ngFor="let cinema of town.cinemas" [value]="cinema">
            {{cinema}}
        </igx-drop-down-item>
    </igx-drop-down-item-group>
</igx-drop-down>
```

```typescript
export class AutocompleteComponent {
    public settings = {
        positionStrategy: new ConnectedPositioningStrategy({
            closeAnimation: null,
            openAnimation: null,
            verticalDirection: VerticalAlignment.Top,
            verticalStartPoint: VerticalAlignment.Top
        })
    };

    public towns = [
        {
          name: 'New York',
          cinemas: [
            'Regal Cinemas',
            'Village East Cinema',
            'Roxy Cinema',
            'The Paris Theatre'
        ]},
        {
            name: 'Los Angeles',
            cinemas: [
                'Arc Light',
                'Pacific Cinerama Dome',
                'New Beverly Cinema',
                'Downtown Independent'
        ]},
        {
            name: 'Seattle',
            cinemas: [
                'Central Cinema',
                'Grand Illusion Cinema',
                'Ark Lodge Cinemas',
                'Skyway Outdoor Cinema'
        ]}
    ];
}
```

>[!NOTE]
>The default positioning strategy is `AutoPositionStrategy` and the dropdown is opened according to the available space.

If everything went right, you should see this in your browser:


<code-view style="height: 500px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/movie/" >
</code-view>


<div class="divider--half"></div>

## Keyboard Navigation
<div class="divider--half"></div>

 - <kbd>⬆</kbd> / <kbd>⬇</kbd> or typing in the input will open the dropdown, if it's closed.
 - <kbd>⬇</kbd> - will move to the next dropdown item.
 - <kbd>⬆</kbd> - will move to the previous dropdown item.
 - <kbd>ENTER</kbd> will confirm the already selected item and will close the dropdown.
 - <kbd>ESC</kbd> will close the dropdown.

>[!NOTE]
>When the Angular autocomplete opens, then the first item on the list is automatically selected. The same is valid when the list is filtered.

You can also see how our [WYSIWYG App Builder™](https://www.infragistics.com/products/appbuilder) streamlines the entire design-to-code story by 80% using real Angular components. 

## Compatibility support
Applying the `igxAutocomplete` directive will decorate the element with the following ARIA attributes:
 - role="combobox" - role of the element, where the directive is applied.
 - aria-autocomplete="list" - indicates that input completion suggestions are provided in the form of list
 - aria-haspopup="listbox" attribute to indicate that `igxAutocomplete` can pop-up a container to suggest values.
 - aria-expanded="true"/"false" - value depending on the collapsed state of the dropdown.
 - aria-owns="dropDownID" - id of the dropdown used for displaying suggestions.
 - aria-activedescendant="listItemId" - value is set to the id of the current active list element.

The `drop-down` component, used as provider for suggestions, will expose the following ARIA attributes:
 - role="listbox" - applied on the `igx-drop-down` component container
 - role="group" - applied on the `igx-drop-down-item-group` component container
 - role="option" - applied on the `igx-drop-down-item` component container
 - aria-disabled="true"/"false" applied on `igx-drop-down-item`, `igx-drop-down-item-group` component containers when they are disabled.


## Styling
Every component has its own theme.

To get the `igxAutocomplete` styled, you have to style its containing components. In our case, these are the [input-group-theme]({environment:sassApiUrl}/index.html#function-input-group-theme) and the [drop-down-theme]({environment:sassApiUrl}/index.html#function-drop-down-theme).

Take a look at the [`igxInputGroup`](input-group.md#styling) and the [`igxDropdown`](drop-down.md#styling) styling sections to get a better understanding of how to style those two components.

## API Reference
<div class="divider--half"></div>

* [IgxAutocompleteDirective]({environment:angularApiUrl}/classes/igxautocompletedirective.html)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)


## Theming Dependencies
* [IgxDropDown Theme]({environment:sassApiUrl}/index.html#function-drop-down-theme)
* [IgxInputGroup Theme]({environment:sassApiUrl}/index.html#function-input-group-theme)

## Additional Resources
<div class="divider--half"></div>

* [IgxDropDown](drop-down.md)
* [IgxInputGroup](input-group.md)
* [Template Driven Forms Integration](input-group.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
