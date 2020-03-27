---
title: Date Time Editor Directive - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Date Time Editor Directive allows the user to handle date and time using a Date Object.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Date Time Editor Directive, Angular Date Time Directive control, Date Time Editor, Angular Date Time Directive
---

<!-- 1. A title containing the name of the component/feature
2. A brief description of the component/feature (1-2 sentences)
3. A basic sample(demo) showcasing the component. The introductory sample shouldn't jump to complex scenarios and edge cases. Those should be reserved for the Advanced Examples section.
4. A section outlining the basic usage of the component, ideally describing how the component is used in the context of an application. This section should not list every single feature of the component. It might be divided into several smaller sections.
5. An Examples section, which contains demos focusing on specific features/quirks. Each example should cover one feature only with supporting explanation / code samples as needed.
6. The examples section is followed by a brief section that showcases how theming is done via the Sass theming engine. The sample doesn't have to cover all properties of a theme, just a few to give a taste of what the user can expect.
7. An Advanced Samples section that includes practical samples. This section doesn't require exhaustive documentation or code samples, albeit they should provide a live editing link to a platform, like StackBlitz. The provided samples may show the component/feature in the context of other components/features. The section should also reference other Ignite UI for Angular components than the subject of the topic.
8. A section with reference links to the API documentation.
9. A section with additional resources that links to related topics, the forums and GitHub page of the product e.g. a grid topic may want to reference the tree and hierarchical grid topics as well -->

2. A brief description of the component/feature (1-2 sentences)
## Date Time Editor Directive
<p class="highlight">Ignite UI for Angular Date Time Editor Directive allows the user to set and edit date and time in a chosen input element. The user can edit date or time portion, using an editable masked input. Additionally, can specify a desired display and input format, as well as min and max values to help validation</p>
<div class="divider"></div>

3. A basic sample(demo) showcasing the component. The introductory sample shouldn't jump to complex scenarios and edge cases. Those should be reserved for the Advanced Examples section.
### Basic sample

```html
<!--datetime-basic.component.html-->
<igx-input-group>
    <input type="text" igxInput [igxDateTimeEditor]="'dd/MM/yyyy'" [(ngModel)]="date"/>
</igx-input-group>
```

<div class="sample-container loading" style="height:100px">
    <iframe id="datetime-basic-iframe" data-src="{environment:demosBaseUrl}/scheduling/datetime-basic" width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="datetime-basic-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

4. A section outlining the basic usage of the component, ideally describing how the component is used in the context of an application. This section should not list every single feature of the component. It might be divided into several smaller sections.

### Usage
To get started with the Ignite UI for Angular Date Time Directive, let's first import the `IgxDateTimeEditorModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxDateTimeEditorModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxDateTimeEditorModule ],
    ...
})
export class AppModule {}
```


To use an input as a date time editor, set an igxDateTimeEditor directive and a valid date object as value. In order to have complete editor look and feel, wrap the input in an [input group](input_group.md). This will allow you to not only take advantage of the following directives [`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html), [`igxLabel`]({environment:angularApiUrl}/classes/igxlabeldirective.html), `igx-prefix`, `igx-suffix`, [`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html), but cover common scenarios when dealing with form inputs as well.

#### Binding 
A really basic configuration scenario setting a Date object as a [`value`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#value):
```typescript
public date = new Date();
```

```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [value]="date"/>
</igx-input-group>
```

To create a two-way data-binding, set an ngModel:
```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [(ngModel)]="date"/>
</igx-input-group>
```
<div class="divider--half"></div>


#### Keyboard Navigation
Date Time Editor Directive has intuitive keyboard navigation that makes it easy to jump trough different DateParts, increment, decrement, etc. without having to touch the mouse.

- Ctrl/Cmd + Arrow Left/Right - navigates between date sections. Jumps from current section to the same caret position of the next/previous section. On start/end sections, first jump to the other end of the same section following the direction of the arrow.
- Arrow Up/Down - increment/decrement date portions. See related [`isSpinLoop`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#isspinloop)

- Ctrl/Cmd + ; - set the current day and time in the editor via a shortcut (as it is in Excel).


5. An Examples section, which contains demos focusing on specific features/quirks. Each example should cover one feature only with supporting explanation / code samples as needed.

### Examples

#### Display and input format
Date Time Editor Directive support different display and input formats. Notice formats like shortDate, longDate, etc., can be used as displayFormat only:

```html
<igx-input-group>
    <input type="text" igxInput [displayFormat]="'shortDate'" [igxDateTimeEditor]="'dd/MM/yyyy'" [(ngModel)]="date"/>
</igx-input-group>
```

#### Min max value
What is more, you can specify [`minValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#minvalue) and [`maxValue`]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html#maxvalue) properties to restrict input and control the validity of the ngModel.
```typescript
public minDate = new Date(2020, 1, 15);
public maxDate = new Date(2020, 12, 1);
``` 

```html
<igx-input-group>
    <input type="text" igxInput igxDateTimeEditor [minValue]="minDate" [maxValue]="maxDate" [(ngModel)]="date" required/>
</igx-input-group>

```

#### Increment and decrement
`igxDateTimeEditor` directive exposes public `increment` and `decrement` methods. These increment/decrement a specific `DatePart` of the currently set date and time and can be used in a couple of ways.

In the first scenario, if no specific DatePart is passed to the method, a default DatePart will increment/decrement, based on the specified `inputFormat` and the internal directive implementation.
In the second scenario, you can explicitly specify what DatePart to manipulate as it may suite different requirements.
You may compare both in the following sample:
<div class="sample-container loading" style="height:400px">
    <iframe id="datetime-advanced-iframe" data-src="{environment:demosBaseUrl}/scheduling/datetime-advanced" width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="datetime-advanced-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


#### In a Form
```html
<form>
    <igx-input-group>
        <input #dateEditor="igxDateTimeEditor" type="text" [(ngModel)]="date" #formControl="ngModel" name="form"
            igxInput (valueChanged)="onValueChanged($event)" (validationFailed)="onValidationFailed($event)"
            [igxDateTimeEditor]="'dd/MM/yyyy'" [minValue]="minDate" [maxValue]="maxDate" required
            [isSpinLoop]="true" />
        <igx-suffix>
            <button igxRipple igxRippleCentered="true" igxButton="icon" (click)="dateEditor.increment()">
                <igx-icon>expand_less</igx-icon>
            </button>
        </igx-suffix>
        <igx-suffix>
            <button igxRipple igxRippleCentered="true" igxButton="icon" (click)="dateEditor.decrement()">
                <igx-icon>expand_more</igx-icon>
            </button>
        </igx-suffix>
    </igx-input-group>
</form>
<div class="divider--half"></div>
```


6. The examples section is followed by a brief section that showcases how theming is done via the Sass theming engine. The sample doesn't have to cover all properties of a theme, just a few to give a taste of what the user can expect.
### Styling 
For details check out the [`Input Group styling guide`](input_group.md#styling).
<div class="divider--half"></div>

7. An Advanced Samples section that includes practical samples. This section doesn't require exhaustive documentation or code samples, albeit they should provide a live editing link to a platform, like StackBlitz. The provided samples may show the component/feature in the context of other components/features. The section should also reference other Ignite UI for Angular components than the subject of the topic.
### Advanced Samples

### API References
* [IgxDateTimeEditorDirective]({environment:angularApiUrl}/classes/igxdatetimeeditordirective.html)
* [IgxHintDirective]({environment:angularApiUrl}/classes/igxhintdirective.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxInputGroupComponent Styles]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)

<div class="divider--half"></div>

9. A section with additional resources that links to related topics, the forums and GitHub page of the product e.g. a grid topic may want to reference the tree and hierarchical grid topics as well

### Additional Resources
Related topics:
* [Reactive Forms Integration](input_group_reactive_forms.md)
* [Label & Input](label_input.md)
* [Combo](combo.md)
* [Select](select.md)
* [Display Density](display_density.md)

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)