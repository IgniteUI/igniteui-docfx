---
title: Combo Templates
_description: Custom templates for different areas of the igx-combo component can be defined, including items, header, footer, empty list and adding button.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Templates, Angular Combo Templates
---

# Combo Templates
<p class="highlight">
The Ignite UI for Angular Combo Component allows defining custom templates for different areas such as header, footer, items, empty list and adding button.
</p>

## Demo

<div class="sample-container loading" style="height: 450px;">
    <iframe id="combo-templates-sample" frameborder="0" seamless="" width="700px" height="100%" src="{environment:demosBaseUrl}/lists/combo-template" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-templates-sample" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-templates-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## Usage
To get started with the Combo component, first you need to import the `IgxComboModule` in your **app.module.ts** file:

```typescript
import { IgxComboModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxComboModule,
        ...
    ]
})
export class AppModule {}
```

## Template Types
When defining `igx-combo` templates, you need to reference them using the following predefined reference names:

### Item template
Use selector `[igxComboItem]`:

```html
<igx-combo #templateCombo [data]="lData" [valueKey]="'field'" >
    <ng-template igxComboItem let-display let-key="valueKey">
        <div class="item">
            <span class="state">{{ display[key] }}</span>
            <span class="region">{{ display.region }}</span>
        </div>
    </ng-template>
</igx-combo>
```

### Header template
Use selector `[igxComboHeader]`:

```html
<igx-combo>
    <ng-template igxComboHeader>
        <div class="header-class">State - Region</div>
    </ng-template>
</igx-combo>
```

### Footer template
Use selector `[igxComboFooter]`:

```html
<igx-combo>
    <ng-template igxComboFooter>
        <div class="footer-class">Infragistics 2018</div>
    </ng-template>
</igx-combo>
```

### Empty template
Use selector `[igxComboEmpty]`:

```html
<igx-combo>
    <ng-template igxComboEmpty>
        <span class="empty-class">No available states</span>
    </ng-template>
</igx-combo>
```

### Add template
Use selector `[igxComboAddItem]`:

```html
<igx-combo>
    <ng-template igxComboAddItem>
        <button igxButton="flat">
            Add Location
        </button>
    </ng-template>
</igx-combo>
```

### Toggle Icon Template
Use selector `[igxComboToggleIcon]`:

```html
<igx-combo>
    <ng-template igxComboToggleIcon let-collapsed>
        <igx-icon>{{ collapsed ? 'expand_more' : 'expand_less'}}</igx-icon>
    </ng-template>
</igx-combo>
```

### Clear Icon Template
Use selector `[igxComboClearIcon]`:

```html
<igx-combo>
    <ng-template igxComboClearIcon>
        <igx-icon>cancel</igx-icon>
    </ng-template>
</igx-combo>
```

## Templating Combo Input
When used with templates, the `igxComboClearIcon` and the `igxComboToggleIcon` selectors, change how the respective buttons appear in the combo input. Passing content inside of the `igx-combo` also allows templating of the combo input similar to the way an `igx-input-group` can be templated (using `igx-prefix`, `igx-suffix` and `igxLabel`). The code snippet below illustrates how to add an appropriate label and prefix to the combo input:

```html
    <igx-combo>
        <label igxLabel>Locations</label>
        <igx-prefix><igx-icon>pin_drop</igx-icon></igx-prefix>
    </igx-combo>
```

## API Summary
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) 
* [IgxComboComponent Styles]({environment:sassApiUrl}/index.html#function-igx-combo-theme)

## Additional Resources
<div class="divider--half"></div>

* [Combo Component](combo.md)
* [Combo Features](combo-features.md)
* [Combo Remote Binding](combo-remote.md)
* [Template Driven Forms Integration](input-group.md)
* [Reactive Forms Integration](input-group-reactive-forms.md)
* [Cascading Scenario](combo-cascading.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)