---
title: Button Group Component
_description: Provides button group functionality to developers and also allows horizontal/vertical alignment, single/multiple selection with toggling.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Button Group components, Angular Button Group controls, Angular Buttons components, Angular Buttons controls
---

## Button Group

The **igx-ButtonGroup** component in Ignite UI for Angular provides a button group functionality to developers with horizontal/vertical alignment and single/multiple selection along with toggling. The igx-ButtonGroup component makes use of the [igxButton directive.](button.md)

### Button Group Demo

<div class="sample-container" style="height: 362px">
    <iframe id="buttonGroup-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/button-group-sample-1" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="buttonGroup-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Dependencies

The Button Group is exported as an `NgModule`, thus you will need to import the _IgxButtonGroupModule_
inside your `AppModule`:

```typescript
// app.module.ts

import { IgxButtonGroupModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxButtonGroupModule,
        ...
    ]
})
export class AppModule {}
```
### Examples

Use `igx-ButtonGroup` to organize buttons into an Angular styled button group.
```typescript
//sample.component.ts
import { ButtonGroupAlignment } from 'igniteui-angular';
...
public alignment = ButtonGroupAlignment.vertical;
...
 public ngOnInit() {
    this.cities = [
      new Button({
          label: "Sofia"
      }),
      new Button({
          label: "London"
      }),
      new Button({
          label: "New York",
          selected: true
      }),
      new Button({
          label: "Tokyo"
      })
  ];
  }
...
```

```html
<igx-buttongroup [multiSelection]="false" [values]="cities" [alignment]="alignment">
</igx-buttongroup>
```
<div class="sample-container" style="height: 164px">
    <iframe id="buttonGroup-sample-2-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/button-group-sample-2" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="buttonGroup-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


While you can use Exclusive or Multiple selection you can also set a button to be togglable and disabled. In the following example the leftmost button is selected, but not togglable. The rightmost is disabled.
```typescript
//sample.component.ts
...
public ngOnInit() {
    this.alignOptions = [
      new Button({
          icon: "format_align_left",
          selected: true,
          togglable: false
      }),
      new Button({
          icon: "format_align_center",
      }),
      new Button({
          icon: "format_align_right",
          selected: true
      }),
      new Button({
          disabled: true,
          icon: "format_align_justify",
      })
  ];
  }
...

```
```html
<igx-buttongroup [multiSelection]="true" [values]="alignOptions">
</igx-buttongroup>
```

<div class="sample-container" style="height: 52px">
    <iframe id="buttonGroup-sample-3-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/button-group-sample-3" onload="onSampleIframeContentLoaded(this);">
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="buttonGroup-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API Summary
#### Inputs
The following inputs are available on the **igx-ButtonGroup** component:
| Name   |      Type      |  Description |
|:----------|:-------------:|:------|
| `multiSelection` |  boolean | Enables selecting multiple buttons. By default, `multiselection` is false.
| `alignment` |    enum   |   Sets the button group alignment. Available options are `ButtonGroupAlignment.horizontal` (default) and `ButtonGroupAlignment.vertical.` |
| `disabled` | boolean | Disables the igxButtonGroup component. By default, it is false. |

#### Outputs
A list of the events emitted by **igx-ButtonGroup**
| Name   | Description |
|:----------|:-------------:|
| `onSelect` | Fired when a button is selected. |
| `onUnselect` | Fired when a button is unselected. |
| `onClick` | Fired when a button is clicked. |

#### Methods
Here is a list of public methods exposed by **igx-ButtonGroup**
| Name   | Description |
|:----------|:------|
| `selectButton(index: number)` | Selects a button by its index.  |
| `deselectButton(index: number)` | Deselects a button by its index. |
| `selectedButtons()` | Gets the selected button/buttons. |



###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

