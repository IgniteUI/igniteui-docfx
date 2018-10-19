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

<div class="sample-container loading" style="height: 450px;">
    <iframe id="combo-templates-sample" frameborder="0" seamless width="700px" height="100%" src="{environment:demosBaseUrl}/combo-template" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-templates-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Usage
To get started with the Ignite UI for Angular Combo import the [IgxComboModule]({environment:angularApiUrl}/classes/igxcombomodule.html) in the **app.module.ts** file:

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

    <ng-template #itemTemplate let-display let-key="valueKey">
        <div class="item">
            <span class="state">{{ display[key] }} - </span>
            <span class="region">{{ display.region }}</span>
        </div>
    </ng-template>

    <ng-template #headerTemplate>
        <div class="header-class">State - Region</div>
    </ng-template>

    <ng-template #footerTemplate>
        <div class="footer-class">Infragistics 2018</div>
    </ng-template>

    <igx-combo>
        <ng-template #emptyTemplate>
            <span class="empty-class">No available states</span>
        </ng-template>
    </igx-combo>
</igx-combo>
```

## Template types
When defining one of the templates below, you need to reference them using the following predefined names:

### Item template
Use reference name **`itemTemplate`**:

```html
<igx-combo>
	<ng-template #itemTemplate let-display let-key="valueKey">
		<div class="item">
			<span class="state">State: {{ display[key] }}</span>
			<span class="region">Region: {{ display.region }}</span>
		</div>
	</ng-template>
</igx-combo>
```

### Header template
Use reference name **`headerTemplate`**:

```html
<igx-combo>
    <ng-template #headerTemplate>
        <div class="header-class">Custom header</div>
        <img src=""/>
    </ng-template>
</igx-combo>
```

### Footer template
Use reference name **`footerTemplate`**:

```html
<igx-combo>
    <ng-template #footerTemplate>
        <div class="footer-class">Custom footer</div>
        <img src=""/>
    </ng-template>
</igx-combo>
```

### Empty template
Use reference name **`emptyTemplate`**:

```html
<igx-combo>
    <ng-template #emptyTemplate>
        <span>List is empty</div>
    </ng-template>
</igx-combo>
```

### Add template
Use reference name **`addItemTemplate`**:

```html
<igx-combo>
    <ng-template #addItemTemplate>
        <span>Add town</span>
    </ng-template>
</igx-combo>
```
<div class="divider--half"></div>

## Additional Resources
<div class="divider--half"></div>

* [Combo Features](combo_features.md)
* [Combo Remote Binding](combo_remote.md)
* [Template Driven Forms Integration](input_group.md)
* [Reactive Forms Integration](input_group_reactive_forms.md)
* [Cascading Scenario](combo_cascading.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)