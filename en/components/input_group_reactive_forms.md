---
title: Reactive Forms Integration
_description: Ignite UI for Angular controls can be easily integrated in Reactive Forms. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Reactive Forms, Angular Forms
---

## Reactive Forms Integration
<p class="highlight">
The Ignite UI for Angular controls can be easily integrated into Reactive Forms that provide a model-driven approach for handling form inputs.
</p>

### Demo
The following sample demonstrates the [`igx-input-group`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html), [`igx-select`]({environment:angularApiUrl}/classes/igxselectcomponent.html) and [`igx-combo`]({environment:angularApiUrl}/classes/igxcombocomponent.html) controls when used in Reactive Forms.

<div class="sample-container loading" style="height: 850px;">
    <iframe id="reactive-forms-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/reactive-forms" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="reactive-forms-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

#### First Steps

Before you get started with Reactive Forms, you need to import all required modules for the Ignite UI components as well as the `ReactiveFormsModule`:

```typescript
// app.module.ts

...
import { IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule, igxSelectModule } from "igniteui-angular";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    ...
    imports: [..., IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule, igxSelectModule, ReactiveFormsModule],
    ...
})
export class AppModule {}
```

For a complete introduction to Reactive Forms, follow the [Angular tutorial](https://angular.io/guide/reactive-forms).

#### Create Form

Use the `formGroup` property of the `form` element to set the model for the form. Next, add `formControlName` to each of the input fields, which will correspond to each individual model property.

```html
<form class="input-group-form" [formGroup]="user" (ngSubmit)="onSubmit()">
    <h4>Book your movie ticket</h4>
    <igx-select #select name="movies" formControlName="movie">
        <igx-select-item-group *ngFor="let genre of genres" [label]="genre.type">
            <igx-select-item *ngFor="let movie of genre.movies" [value]="movie">
                {{ movie }}
            </igx-select-item>
        </igx-select-item-group>
        <label igxLabel for="movies">Movie</label>
        <ng-template igxSelectToggleIcon>
            <igx-icon fontSet="material">local_movies</igx-icon>
        </ng-template>
    </igx-select>
    <igx-input-group>
        <input igxInput name="fullName" type="text" formControlName="fullName"/>
        <label igxLabel for="fullName">Full Name</label>
        <igx-suffix>
            <igx-icon>person</igx-icon>
        </igx-suffix>
    </igx-input-group>
    ...
     <igx-combo #combo1 class="input-container" width="100%" [itemsMaxHeight]="130"
        [data]="genres" [valueKey]="'type'" [displayKey]="'type'"
        type="line" formControlName="genres"
        placeholder="Select your favorite genres" searchPlaceholder="Search...">
    </igx-combo>
    ...
```
The object, assigned to the `formGroup` property, is the form model which needs to be of type `FormGroup`. Then, following the Angular tutorial for Reactive Forms, we need a `FormBuilder` in our constructor in order to define and configure the various form fields:

```typescript
export class ReactiveFormsSampleComponent {

    public user: FormGroup;
    constructor(fb: FormBuilder) {
        this.user = fb.group({
            date: [""],
            dateTime: [""],
            email: ["", Validators.required],
            fullName: new FormControl("", Validators.required),
            genres: ["", Validators.required],
            movie: ["", Validators.required],
            phone: [""]
        });
    }
}
```

In our case the `movie`, `fullName`, `email`, and `genres` form fields are required and the form won't be submitted, unless their values are set.

### API References
<div class="divider--half"></div>

* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) 
* [IgxLabelDirective]({environment:angularApiUrl}/classes/igxlabeldirective.html)
* [IgxSelectComponent]({environment:angularApiUrl}/classes/igxselectcomponent.html)  

### Additional Resources
<div class="divider--half"></div>

Related topics:

* [Combo](combo.md)
* [Select](select.md)
* [Input Group](input_group.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
