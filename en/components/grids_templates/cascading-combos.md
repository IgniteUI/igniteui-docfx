---
title: Cascading combos in Angular @@igComponent Grid - Infragistics
_description: Grid with Cascading Combos. See the sample here.
_keywords: angular cascading combos with grid, ignite ui for angular, infragistics
---

# Angular Grid with Cascading Combos
The Grid's Editing functionality provides with the opportunity to use [Cascading Combos](../simple-combo.md#cascading-scenario). By selecting the value in any preceding [Combos](../combo.md), the users will receive only the data that is relevant to their selection within the next Combo.

## Angular Grid with Cascading Combos Sample Overview
The sample below demonstrates how `Grid` works with nested `Cascading Combos`.

@@if (igxName === 'IgxGrid') {
<code-view style="height:500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-cascading-combos" alt="Angular @@igComponent Batch Editing and Transactions Example">
</code-view>
}

## Setup
In order enable column editing, make sure [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) property is set to **true**.

Once the column editig is enabled, you can start by adding your [Single Select ComboBox](../simple-combo.md). Please note that here in order to have only one single selection available, you will need to use [igxSimpleCombo](../simple-combo.md) instead of modifying the igxCombo.

To get started with the [Simple ComboBox component](../simple-combo.md#angular-simple-combobox-features), first you need to import the `IgxSimpleComboModule` in your **app.module.ts** file:

```typescript
import { IgxSimpleComboModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxSimpleComboModule,
        ...
    ]
})
export class AppModule {}
```

Then, in the template, you should bind the combos [igx-simple-combo]({environment:angularApiUrl}/classes/igxsimplecombocomponent.html) to some data.

- `displayKey` - *Required for object arrays* - Specifies which property will be used for the items' text. If no value is specified for [displayKey]({environment:angularApiUrl}/classes/IgxSimpleComboComponent.html#displayKey), the simple combobox will use the specified `valueKey` (if any).

```typescript
export class MySimpleComboComponent implements OnInit {
    public countriesData: Country[];
    public selectedCountry: Country;
    public selectedCity: City;

    public ngOnInit() {
        this.countriesData = getCountries([
            'United States',
            'Japan',
            'United Kingdom'
        ]);
    }
}
```

In order to handle the selection change, we need [selectionChanging()]({environment:angularApiUrl}/classes/IgxComboComponent.html#selectionChanging). The emitted event arguments, [IComboSelectionChangingEventArgs]({environment:angularApiUrl}/interfaces/icomboselectionchangingeventargs.html), contain information about the selection prior to the change, the current selection and the items that were added or removed. Therefore, it will filter the values based on the selection of the previous combo.

```html
<igx-combo [data]="countriesData" (selectionChanging)="countryChanging($event)"></igx-combo>
```

```typescript
public countryChanging(event: IComboSelectionChangeEventArgs) {
    if (event.added.length) {
        event.newSelection = event.added;
    }
}
```

And lastly, adding the [Linear Progress](../linear-progress.md), which is required while loading the list of data.
The [`id`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#id) is necessary to set the value of `id` attribute.

```html
 <igx-linear-bar 
    [id]="'region-progress-' + cell.row.data.ID" 
    [style.visibility]="'hidden'"
    type="info" [indeterminate]="true">
</igx-linear-bar>
```

## API Summary
<div class="divider--half"></div>

* [IgxSimpleComboComponent]({environment:angularApiUrl}/classes/igxsimplecombocomponent.html)
* [IgxComboComponent Styles]({environment:sassApiUrl}/index.html#function-combo-theme)
* [IgxLinearProgressBarComponent]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html)
* [IgxLinearProgressBarComponent Styles]({environment:sassApiUrl}/index.html#function-progress-linear-theme)

## Additional Resources

* [@@igComponent Editing](editing.md)
* [Single Select ComboBox](../simple-combo.md)
* [Cascading Combos](../simple-combo.md#cascading-scenario)
* [Linear Progress](../linear-progress.md)