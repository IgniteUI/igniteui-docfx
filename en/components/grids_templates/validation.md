---
title: Editing and Validation in Angular @@igComponent - Infragistics
_description: Validate the input of the users in grid and notify them if it's valid or not while using Angular @@igComponent. See demos & examples!
_keywords: angular validation, ignite ui for angular, infragistics
---

# Angular @@igComponent Editing and Validation
The validation service of @@igComponent allows validating user input when editing cells/rows. It also extends [Angular's reactive forms](https://angular.io/guide/reactive-forms) validation functionality to allow easier extensibility and maintainability. Visual indicators are applied with accordance to state of the editor.

## Angular @@igComponent Validation Example

The following sample demonstrates a scenario, where the [built-in Angular validator functions](https://angular.io/guide/form-validation#built-in-validator-functions) are used. The following build-in validators can be applied directly to igx-column:
- required
- min
- max
- email
- minlength
- maxlength
- pattern

@@if (igxName === 'IgxGrid') {
<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-basic-validation" alt="Angular @@igComponent Validation Basic Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-basic-validation" alt="Angular @@igComponent Validation Basic Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:680px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-basic-validation" alt="Angular @@igComponent Validation Basic Example">
</code-view>

<div class="divider--half"></div>
}


## Angular @@igComponent Custom Validation Example

The Validation in Angular @@igComponent provides a way to write your own custom validator, to change the default error template and to stop users from leaving edit mode is the state is invalid.

@@if (igxName === 'IgxGrid') {
<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-custom-validation" alt="Angular @@igComponent Custom Validation Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-custom-validation" alt="Angular @@igComponent Custom Validation Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:680px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-custom-validation" alt="Angular @@igComponent Custom Validation Example">
</code-view>

<div class="divider--half"></div>
}

## API References

* [IgxBaseTransactionService]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxColumnComponent](({environment:angularApiUrl}/classes/igxcolumncomponent.html))
* [ValidatorsDirective](({environment:angularApiUrl}/classes/validatorsdirective.html))


## Additional Resources

* [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
* [@@igComponent Overview](@@igMainTopic.md)
* [@@igComponent Editing](editing.md)
* [@@igComponent Row Editing](row-editing.md)
* [@@igComponent Row Adding](row-adding.md)
* [@@igComponent Transactions](batch-editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)