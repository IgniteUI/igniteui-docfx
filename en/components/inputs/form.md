---
title: Angular Form | Data Visualization Tools | Infragistics
_description: Infragistics' Angular form is a component used to collect user input from interactive controls. Improve your application with Ignite UI for  Angular!
_keywords: Angular form, Ignite UI for Angular, Infragistics
mentionedTypes: ['Form']
---

# Angular Form Overview

The [`Form Component`]({environment:wcApiUrl}/classes/IgcFormComponent.html) collects data from Ignite UI Webcomponents form controls and native form controls. The resulting form data is exposed into a single FormData object.

## Angular Form Example

The following example represents a form that has some inputs, buttons and a checkbox inside.

<code-view style="height: 300px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/form-overview"
           alt="Angular Form Example"
           github-src="inputs/form/overview">
</code-view>

## Dependencies

In order to use the Form component, the web components package must be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install igniteui-webcomponents
</pre>

## Usage

Once the Form component is imported, you can add it on the page and add your content.

```ts
import 'igniteui-webcomponents';
```

Form data is collected for the following components:

-   [`igc-checkbox`]({environment:wcApiUrl}/classes/IgcCheckboxComponent.html)
-   [`igc-input`]({environment:wcApiUrl}/classes/IgcInputComponent.html)
-   [`igc-radio`]({environment:wcApiUrl}/classes/IgcRadioComponent.html)
-   [`igc-switch`]({environment:wcApiUrl}/classes/IgcSwitchComponent.html)
-   checkbox
-   input
-   radio
-   select
-   switch
-   textarea

When a form control is invalid, the form will not be submitted and an error message will be shown. If you want to specify that the form elements should not be validated when the form is submitted you can add the [`novalidate`]({environment:wcApiUrl}/classes/IgcFormComponent.html#novalidate) attribute to the `<igc-form>` element.

### Events

The Form component raises the following events:

-   igcSubmit - Raised when the form is submitted
-   igcReset - Raised when the form is reset

Here is an example showing how to add an event listener for the [`igcSubmit`] event:

```ts
document.addEventListener('igcSubmit', function (event) {
  const customEvent = event as CustomEvent<FormData>;
  console.log(customEvent.detail);
});
```

### Methods

The Form component exposes the following methods:

| Method                                                                                  |                                     Description                                    |
| --------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------: |
| [`submit`]({environment:wcApiUrl}/classes/IgcFormComponent.html#submit)                 |                               Submits the form data.                               |
| [`reset`]({environment:wcApiUrl}/classes/IgcFormComponent.html#reset)                   |                                Resets the form data.                               |
| [`getFormData`]({environment:wcApiUrl}/classes/IgcFormComponent.html#getFormData)       |            Collects the form data and returns a single FormData object.            |
| [`reportValidity`]({environment:wcApiUrl}/classes/IgcFormComponent.html#reportValidity) | Returns whether the element's child controls satisfy their validation constraints. |

## API References

For more detailed information regarding the form's API, refer to the following links:

-   [`IgcFormComponent API`]({environment:wcApiUrl}/classes/IgcFormComponent.html)

Additional components and/or directives that were used:

-   [`IgcButtonComponent API`]({environment:wcApiUrl}/classes/IgcButtonComponent.html)
-   [`IgcCheckboxComponent API`]({environment:wcApiUrl}/classes/IgcCheckboxComponent.html)
-   [`IgcInputComponent API`]({environment:wcApiUrl}/classes/IgcInputComponent.html)
-   [`IgcRadioComponent API`]({environment:wcApiUrl}/classes/IgcRadioComponent.html)
-   [`IgcSwitchComponent API`]({environment:wcApiUrl}/classes/IgcSwitchComponent.html)

<div class="divider"></div>
## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

-   [Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
-   [Angular **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
