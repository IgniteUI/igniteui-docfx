---
title: Angular Date Picker | Data Visualization Tools | Infragistics
_description: Infragistics' Angular date picker component helps your users select dates. Improve your graphs and visualization with Ignite UI for  Angular!
_keywords: Angular date picker, drop down, Ignite UI for Angular, Infragistics
mentionedTypes: ['DatePicker']
---

# Angular Date Picker Overview

The Date Picker component allows users to use a drop-down calendar UI allowing the intuitive selection of a day, month and year. This can be helpful when an application user needs to select specific dates, and multiple editors can be combined to create a date-range UI.

## Angular Date Picker Overview Example

<div class="sample-container loading" style="height: 250px">
    <iframe id="category-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/editors/date-picker-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Date Picker Overview Example"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="multi-column-combobox-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

## Usage

The Angular Date Picker editor component consists of three default parts - the text area, a calendar drop-down button, and a clear button. These areas are described below:

-   Text Area: This displays the selected date, stored in the `Value` property of the editor.

-   Calendar: Clicking the calendar button will open the calendar drop-down of the Date Picker. The calendar will open to show the month of the currently selected `Value`, if there is one. If a `Value` is not specified, the calendar will show the month corresponding to the current date. The month at the top can be clicked to show a list of months, and the same applies for the year. There are also arrow buttons to the left and right of the month and year visualization that will increment and decrement the shown month chronologically. You can change the color of the calendar button by setting the `IconColor` property of the control.

-   Clear Button: The clear button is directly to the left of the calendar button, visualized by an X. When clicked, it will clear the `Value` of the Date Picker. The clear button's visibility can be toggled on and off by setting the `ShowClearButton` property of the Date Picker.

Users can also customize the Date Picker's font by using the various text properties of the control. They are: `TextColor`, `TextFontFamily`, `TextFontSize`, `TextFontStyle`, and `TextFontWeight`.

## Required Modules

The Date Picker component requires the following modules to be registered:

<div class="divider--half"></div>

## Code Snippet

The following code demonstrates how add and set the value of the `DatePicker` component:
