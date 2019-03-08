---
title: Reactive Forms Integration
_description: Ignite UI for Angular controls can be easily integrated in Reactive Forms. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Reactive Forms, Angular Forms
_language: kr
---

## Reactive Forms Integration
<p class="highlight">
Ignite UI for Angular controls can be easily integrated in Reactive Forms.
</p>
<div class="divider"></div>

### Demo
The following demo demonstrates [`igx-input-group`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html), [`igx-select`]({environment:angularApiUrl}/classes/igxselectcomponent.html) and [`igx-combo`]({environment:angularApiUrl}/classes/igxcombocomponent.html) controls being part of the Reactive Form.

<div class="sample-container loading" style="height: 800px;">
    <iframe id="reactive-forms-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-entries/reactive-forms" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="reactive-forms-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz 에서보기</button>
</div>
<div class="divider--half"></div>

### Usage

Follow the Angular [tutorial](https://angular.io/guide/reactive-forms) for understanding how to work with Reactive Forms and what are the needed modules to include.

To get started import all modules for Ignite UI components and the **ReactiveFormsModule** in order to have working Reactive Form:

```typescript
// app.module.ts

...
import { IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule, IgxSelectModule } from "igniteui-angular";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    ...
    imports: [..., IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule, IgxSelectModule, ReactiveFormsModule],
    ...
})
export class AppModule {}
```

What you need to have Reactive form is to set model of the form, using the `formGroup` property of the HTML `form`, and set `formControlName` to each of the input fields, which will correspond to individual model's properties.

```html
<form class="input-group-form" [formGroup]="user" (ngSubmit)="onSubmit()">
    <h4 class="sample-title">Book your movie ticket</h4>
    <igx-select #select name="movies" formControlName="movie">
        <igx-select-item-group *ngFor="let genre of genres" [label]="genre.type">
            <igx-select-item *ngFor="let movie of genre.movies" [value]="movie">
                {{ movie }}
            </igx-select-item>
        </igx-select-item-group>
        <label igxLabel for="movies">Movie</label>
        <ng-template igxSelectToggleIcon><igx-icon fontSet="material">local_movies</igx-icon></ng-template>
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
The object set to the form's `formGroup` property is the form model and it needs to be of type `FormGroup`. Then, following Angular tutorial for Reactive Forms, in the demo's constructor we need the `FormBuilder` to define and configure different form's fields:

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

In that case the movie, full name, email and genres form's fields are required and the form won't be submitted, unless they have values.

## Additional Resources
<div class="divider--half"></div>

* [Combo](combo.md)
* [Select](select.md)
* [Template Driven Forms Integration](input_group.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)