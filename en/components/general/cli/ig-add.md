---
title: ig add
_description: The ig add command adds a template by the template ID provided.
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## ig add

`ig add [template] [name]` adds a template by the templateID and name provided.

The `add` command is supported only on existing project created with the Ignite UI CLI. You cannot use the `add` command before creating a project uisng the `new` command or using the step by step guide which is invoked by the `ig` command. 
The quickstart projects do not support the `add` command, meaning that you cannot add more components than the predefined ones for the given project.

## Arguments
<details>
  <summary>module <span align="right"><strong>(v2.0.0)</strong></span></summary>
  <p>
    <code>module</code> (alias: <code>-m</code>)
  </p>
  <p>
    <i>note: module argument is applicable only in Angular projects.</i>
  </p> 
  <p>
    Path to the module.ts file, relative to the /src/app/ folder, for the module where the new component should be registered:
  </p>
  <code>ig add grid newCombo --name=myModule/myModule.module.ts</code>
</details>

## Ignite UI for Angular templates

| Template          |  Code and description                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------  |
|<b>Grids & Lists</b>|                                                                                              |
|grid               |<code>ig add grid newGrid</code><details>Basic template for IgxGrid.</details>                 |
|grid-batch-editing |<code>ig add grid-batch-editing newGridBatchEditing</code><details>Sample IgxGrid with batch editing.</details>                 |
|custom-grid        |<code>ig add custom-grid newCustomGrid</code><details>IgxGrid with optional features like sorting, filtering, editing, etc.</details>|
|grid-summaries     |<code>ig add grid-summaries newGridSummaries</code><details>IgxGrid with summaries feature.</details>|
|grid-multi-column-headers|<code>ig add grid-multi-column-headers newGridMultiColumnHeaders</code><details>IgxGrid with multiple header columns.</details>
|tree grid          |<code>ig add custom-tree-grid newCustomTreeGrid</code><details>IgxTreeGrid with optional features like sorting, filtering, row editing, etc.</details>                              |       
|list               |<code>ig add list newList</code><details>Basic IgxList.</details>                              |
|combo              |<code>ig add combo newCombo</code><details>Basic IgxCombo with templating.</details>           |
|<b>Charts</b>      |                                                                                               |
|category chart     | <code>ig add category-chart newCategoryChart</code><details>Basic category chart with chart type selector.</details>| 
|financial chart    | <code>ig add financial-chart newFinancialChart</code><details>Basic financial chart with automatic toolbar and type selection.</details>|                
|<b>Gauges</b>|                                                                                                     |
|bullet graph       |<code>ig add bullet-graph newBulletGraph</code><details>IgxBulletGraph with different animations.</details>|
|linear gauge       |<code>ig add linear-gauge newLinearGauge</code><details>IgxLinearGauge with different animations.</details>|
|radial gauge       |<code>ig add radial-gauge newRadialGauge</code><details>IgxRadialGauge with different animations.</details>|
|<b>Layouts</b>     |                                                                                               |
|carousel           | <code>ig add carousel newCarousel</code><details>Basic IgxCarousel.</details>                 |
|tabs               | <code>ig add tabs newTabs</code><details>Basic IgxTabs.</details>                             |
|bottom-nav         | <code>ig add bottom-nav newBottomNav</code><details>Three item bottom-nav template.</details> |          
|<b>Data Entry & Display</b>|   
|chip               | <code>ig add chip newChip</code><details>Basic IgxChip.</details>                             |
|dropdown           | <code>ig add dropdown newDropDown</code><details>Basic IgxDropDown.</details>                 |  
|select (v4.1.0)    | <code>ig add select newSelect</code><details>Basic IgxSelect.</details>|       
|select (v4.1.0)    | <code>ig add select-groups newGroupsSelect</code><details>Select With Groups.</details>       |       
|select (v4.1.0)    | <code>ig add select-in-form newFormSelect</code><details>IgxSelect in a form.</details>       |                                                                           
|input group        | <code>ig add input-group newInputGroup</code><details>Basic IgxInputGroup form view.</details>|            
|<b>Interactions</b>|   
|dialog             | <code>ig add dialog newDialog</code><details>Basic IgxDialog.</details>                       | 
|tooltip            | <code>ig add tooltip newTooltip</code><details>A fully customizable tooltip.</details>        |
|<b>Scheduling</b>  |                                                                                               |
|date-picker        | <code>ig add date-picker newDatePicker</code><details>Basic IgxDatePicker.</details>          |
|time-picker        | <code>ig add time-picker newTimePicker</code><details>Basic IgxTimePicker.</details>          |
|calendar           | <code>ig add calendar newCalendar</code><details>IgxCalendar with single selection.</details> |
