---
title: Label and Input Directive
_description: With Ignite UI for Angular Label component, developers can create single-line text elements to add additional CSS styles and integrate with other controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Label components, Angular Label controls
---

##Label & Input
<p class="highlight">The Ignite UI for Angular Label directive is used to add additional CSS styles to single-line text elements. It is especially useful when combined with the Ignite UI for Angular Input directive with which you can add **inputs** in your markup.</p>
<div class="divider--half"></div>

### Label & Input Demo
#### Create account
<div class="sample-container" style="height:500px">
<iframe src='{environment:demosBaseUrl}/label-input' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### Usage
To get started with the Ignite UI for Angular Label and Input, let's first import the **IgxLabelModule** and **IgxInput** in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxLabelModule } from 'igniteui-angular/main';
import { IgxInput } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxLabelModule],
    imports: [..., IgxInput],
    ...
})
export class AppModule {}
```

Then in the template of our account component we can add the following code to get the styled label and input. The key thing here is to add the **igx-form-group** class to the div that contains tha label and input and put the label after the input:

```html
<!--account.component.html-->

<div class="igx-form-group">
    <input igxInput [..options]/>
    <target-element igxLabel [..options]>First Name</target-element>    
</div>
```
<div class="divider--half"></div>

###Additional Resources
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
