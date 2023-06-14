---
title: Angular Star Rating Component – Ignite UI for Angular
_description: With Angular Star Rating Component, users can view and provide feedback quickly. You can use the rating component in any angular app and angular forms. Try it Now
_keywords: Angular Rating component, Angular Rating control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
---
# Angular Star Rating Overview

Rating in Angular represents a widget enabling users to quickly provide feedback and evaluate a product or a service on a web page by using a star rating system. Simple to use, the component lets developers configure the size and the number of the displayed star rating items.

The Ignite UI Angular Star Rating component can be easily installed from the igniteui-webcomponents package. It provides an intuitive rating experience for end-users, allowing them to view products/services and rate them (usually having the option to choose from 0 to 5 stars in the most common scenarios).


## Angular Rating Example

This Angular Star Rating example demonstrates how you can use Ignite UI Angular to build simple five-star rating widget, comparing and displaying the score of different products.

<code-view style="height: 550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-with-rating" alt="Angular Rating Example">
</code-view>


<div class="divider--half"></div>


## Getting Started with Ignite UI for Angular Star Rating

Ignite UI Rating is a standard [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) and as such can be used in an Angular application.

Follow the steps below to add the Ignite UI Web Components package to your Angular project and set it up in order to use the component.

First, install the `igniteui-webcomponents` package

```cmd
npm install igniteui-webcomponents --save
```

Next, you should call the `defineCustomElements()` function with `IgcRatingComponent` argument either in your `main.ts` file or in the component `.ts` file that is using `IgcRating`.

```typescript
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);
```

You also need to include the `CUSTOM_ELEMENTS_SCHEMA` schema in the `AppModule`:

```typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

With these you can now add the Rating component in an Angular component template and use its inputs and outputs:

```html
<igc-rating value="ratingVal" min="1" max="5" (igcChange)="ratingChanged($event);"></igc-rating>
```

## Using Angular Star Rating in Forms

In Angular forms, components often need to be able to bind their values with `ngModel` or use `formControl` which requires an implementation of Angular's `ControlValueAccessor` interface. Ignite UI for Angular package provides such implementation in the form of a directive that uses an element selector to attach to supported web components. Currently `IgcRating` is the only component that it supports. To use the directive you just need to import `IgcFormsModule` from the library.

```typescript
import { IgcFormsModule } from 'igniteui-angular';
// import { IgcFormsModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        IgcFormsModule
    ]
})
export class AppModule { }
```

>[!NOTE]
>If you are importing `IgcFormsModule` and using either `ngModel` or `formControl`, you no longer need to include `CUSTOM_ELEMENTS_SCHEMA` as Angular will recognize the `igc-rating` tag by the custom `ControlValueAccessor` directive.

Alternatively, as of `16.0.0` you can import the `IgcFormControlDirective` as a standalone dependency.

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IgcFormControlDirective } from 'igniteui-angular';
// import { IgcFormControlDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igc-rating name="modelRating" [(ngModel)]="product.Rating" max="10" label="Model Rating"></igc-rating>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgcFormControlDirective, FormsModule]
})
export class HomeComponent {
    public product: Product;
}
```

Add a rating with e.g. ngModel for value and it will two-way bind with your model without issues.

```html
<igc-rating name="modelRating" [(ngModel)]="model.Rating" max="10" label="Model Rating"></igc-rating>
```

The following application shows one example of how this integration works in a real use-case with forms.

<code-view style="height: 550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/rating-form" alt="Angular Rating Example">
</code-view>

For further information on the usage of the Rating component, you can check out [this topic]({environment:infragisticsBaseUrl}/products/ignite-ui-web-components/web-components/components/inputs/rating.html).

