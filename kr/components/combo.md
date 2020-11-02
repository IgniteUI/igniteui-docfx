---
title: Combo Component
_description: The igx-combo provides a powerful input, combining features of the basic HTML input, select and the IgniteUI for Angular igx-drop-down controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Combo controls
_language: kr
---

## Combo
<p class="highlight">

The [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) component provides a powerful input, combining the features of the basic HTML `input`, select and the IgniteUI for Angular [igx-drop-down]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) components.<br />
The combo component provides easy **[filtering](combo-features.md#filtering)** and **multiple selection** of items, **[grouping](combo-features.md#grouping)** and adding **[custom values](combo-features.md#custom-values)** to the dropdown list.<br />
**[Custom templates](combo-templates.md)** could be provided in order to customize different areas of the components, such as items, header, footer, etc.<br />
The [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) component is integrated with the **[Template Driven Forms](input-group.md)** and **[Reactive Forms](input-group-reactive-forms.md)**.<br />
The [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) exposes intuitive **keyboard navigation** and it is **accessibility compliant**.<br />
Drop Down items are **virtualized**, which guarantees smooth work, even if the [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) is bound to data source with a lot of items.
</p>
<div class="divider"></div>

### Demo
<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/lists/combo" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](https://www.infragistics.com/products/ignite-ui-angular/getting-started#installation) topic.

### Usage
The [IgxComboComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) allows you to search and select items from the list. The combo uses the [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) internally as an item container. To get started with the Ignite UI for Angular Combo, let's first import the `IgxComboModule` in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxComboModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxComboModule],
    ...
})
export class AppModule {}
```

Then in the template bind the [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) with some data and define [valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) and [displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) corresponding to entities from the `localData` data source:

```html
<igx-combo [data]="lData" [valueKey]="'ProductID'" [displayKey]="'ProductName'"></igx-combo>
```

```typescript
import { localData } from "./local-data";

export class ComboDemo implements OnInit {
    public lData: any[];

    public ngOnInit() {
        this.lData = localData;
    }
}
```
> Note: If [displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) is omitted then [valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) entity will instead be used as item text.

## Features
Combo control exposes the following features:
    - Data Binding - local data and [remote data](combo-remote.md)
    - [Value Binding](combo-features.md#value-binding)
    - [Filtering](combo-features.md#filtering)
    - [Grouping](combo-features.md#grouping)
    - [Custom values](combo-features.md#custom-values)
    - [Templates](combo-templates.md)
    - Integration with [Template Driven Forms](input-group.md) and [Reactive Forms](input-group-reactive-forms.md)

## Keyboard Navigation

When igxCombo is closed and focused:
- `ArrowDown` or `Alt` + `ArrowDown` will open the combo drop down and will move focus to the search input.

When igxCombo is opened and search input is focused:
- `ArrowUp` or `Alt` + `ArrowUp` will close the combo drop down and will move focus to the closed combo.

- `ArrowDown` will move focus from the search input to the first list item. If list is empty and custom values are enabled will move it to the Add new item button.
  > Note: Any other key stroke will be handled by the input.

When igxCombo is opened and list item is focused:
- `ArrowDown` will move to next list item. If the active item is the last one in the list and custom values are enabled then focus will be moved to the Add item button.

- `ArrowUp` will move to previous list item. If the active item is the first one in the list then focus will be moved back to the search input.

- `End` will move to last list item.

- `Home` will move to first list item.

- `Space` will select/deselect active list item.

- `Enter` will confirm the already selected items and will close the list.

- `Esc` will close the list.

When igxCombo is opened, allow custom values are enabled and add item button is focused:

- `Enter` will add new item with valueKey and displayKey equal to the text in the search input and will select the new item.

- `ArrowUp` focus will be moved back to the last list item or if list is empty will be moved to the search input.

## API
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) 
* [IgxComboComponent Styles]({environment:sassApiUrl}/index.html#themes-mixin-igx-combo)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

## Known Issues

- Combo input that displays the selected items is not editable, however due to a browser specifics in IE and FireFox the cursor is visible
- Backspace works in disabled combo in IE
- Combo is not having input for sizing its height. In the future [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)  will expose an option that allows custom sizing and then [IgxCombo]({environment:angularApiUrl}/classes/igxcombocomponent.html) will use the same functionality for proper styling and better consistency.

> [!NOTE]
> `igxCombo` uses `igxForOf` directive internally hence all `igxForOf` limitations are valid for `igxCombo`. For more details see [igxForOf Known Issues](for-of.html#known-limitations) section.

### Additional Resources
<div class="divider--half"></div>

* [Combo Features](combo-features.md)
* [Combo Remote Binding](combo-remote.md)
* [Combo Templates](combo-templates.md)
* [Template Driven Forms Integration](input-group.md)
* [Reactive Forms Integration](input-group-reactive-forms.md)
* [Cascading Scenario](combo-cascading.md)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)
* [IgxInputGroup]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) 

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)