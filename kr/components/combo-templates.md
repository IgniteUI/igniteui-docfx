---
title: Combo Templates
_description: Custom templates for different areas of the igx-combo component can be defined, including items, header, footer, empty list and adding button.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Templates, Angular Combo Templates
_language: kr
---

## Combo Templates
<p class="highlight">
Custom templates for different areas of the [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) component can be defined, including items, header, footer, empty list and adding button.
</p>
<div class="divider"></div>

### Demo


<code-view style="height: 450px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/lists/combo-template" >
</code-view>


### Usage
To get started with the Ignite UI for Angular Combo import the `IgxComboModule` in the **app.module.ts** file:

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

Defining templates for item, header, footer and empty one is achieved using predefined reference names (see the topic below for detailed information):

```html
<igx-combo #templateCombo [data]="lData" [valueKey]="'field'" >

    <ng-template igxComboItem let-display let-key="valueKey">
        <div class="item">
            <span class="state">{{ display[key] }} - </span>
            <span class="region">{{ display.region }}</span>
        </div>
    </ng-template>

    <ng-template igxComboHeader>
        <div class="header-class">State - Region</div>
    </ng-template>

    <ng-template igxComboFooter>
        <div class="footer-class">Infragistics 2018</div>
    </ng-template>

    <igx-combo>
        <ng-template igxComboEmpty>
            <span class="empty-class">No available states</span>
        </ng-template>
    </igx-combo>
</igx-combo>
```

## Template types
When defining one of the templates below, you need to reference them using the following predefined names:

### Item template
Use selector `[igxComboItem]`:

```html
<igx-combo>
	<ng-template igxComboItem let-display let-key="valueKey">
		<div class="item">
			<span class="state">State: {{ display[key] }}</span>
			<span class="region">Region: {{ display.region }}</span>
		</div>
	</ng-template>
</igx-combo>
```

### Header template
Use selector `[igxComboHeader]`:

```html
<igx-combo>
    <ng-template igxComboHeader>
        <div class="header-class">Custom header</div>
        <img src/>
    </ng-template>
</igx-combo>
```

### Footer template
Use selector `[igxComboFooter]`:

```html
<igx-combo>
    <ng-template igxComboFooter>
        <div class="footer-class">Custom footer</div>
        <img src/>
    </ng-template>
</igx-combo>
```

### Empty template
Use selector `[igxComboEmpty]`:

```html
<igx-combo>
    <ng-template igxComboEmpty>
        <span>List is empty</div>
    </ng-template>
</igx-combo>
```

### Add template
Use selector `[igxComboAddItem]`:

```html
<igx-combo>
    <ng-template igxComboAddItem>
        <span>Add town</span>
    </ng-template>
</igx-combo>
```

### Toggle Icon Template
Use selector `[igxComboToggleIcon]`:

```html
<igx-combo>
    <ng-template igxComboToggleIcon let-collapsed>
        <igx-icon>{{ collapsed ? 'remove_circle' : 'remove_circle_outline'}}</igx-icon>
    </ng-template>
</igx-combo>
```

### Clear Icon Template
Use selector `[igxComboClearIcon]`:

```html
<igx-combo>
    <ng-template igxComboClearIcon>
        <igx-icon>music_off</igx-icon>
    </ng-template>
</igx-combo>
```

<div class="divider--half"></div>

### Templating combo input
The above-mentioned selectors, `[igxComboClearIcon]` and `[igxComboToggleIcon]`, used with templates will change how the respective buttons appear in the combo input. 
Passing content inside of the `igx-combo` also allows templating of the combo input similar to the way an `igx-input-group` can be templated (using `igx-prefix`, `igx-suffix` and `[igxLabel]`). The code snippet below illustrates how to add an appropriate label and `igx-prefix` to the combo input, as well as changing the `clear` button icon:
```html
    <igx-combo [data]="myMusic">
        ...
        <label igxLabel>Genres</label>
        <igx-prefix><igx-icon>music_note</igx-icon></igx-prefix>
        <ng-template igxComboClearIcon>
            <igx-icon>music_off</igx-icon>
        </ng-template>
        ...
    </igx-combo>
```

## Additional Resources
<div class="divider--half"></div>

* [Combo Features](combo-features.md)
* [Combo Remote Binding](combo-remote.md)
* [Template Driven Forms Integration](input-group.md)
* [Reactive Forms Integration](input-group-reactive-forms.md)
* [Cascading Scenario](combo-cascading.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)