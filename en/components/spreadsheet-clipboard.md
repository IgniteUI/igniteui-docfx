---
title: Angular Spreadsheet | Clipboard Operations | Infragistics
_description: Use clipboard operations such as copy, cut and paste within Infragistics' Angular spreadsheet control. View Infragistics Ignite UI for Angular spreadsheet demos today!
_keywords: Spreadsheet, clipboard operations, Ignite UI for Angular, Infragistics
mentionedTypes: ['Spreadsheet', 'SpreadsheetAction', 'SpreadsheetCommandType', 'Command']
---

# Angular Working with Clipboard

This topic explains how to perform clipboard operations on the Ignite UI for Angular spreadsheet component.

## Angular Working with Clipboard Example

<code-view style="height: 500px"
        data-demos-base-url="{environment:dvDemosBaseUrl}"
        iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-clipboard"
        alt="Angular Working with Clipboard Example"
        github-src="excel/spreadsheet/clipboard"> </code-view>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
      <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/excel/spreadsheet/clipboard?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/app.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Code Sandbox" src="https://static.infragistics.com/xplatform/images/browsers/open-sandbox.png"/>
        </a>
        <a target="_blank" href="https://stackblitz.com/github/IgniteUI/igniteui-angular-examples/tree/master/samples/excel/spreadsheet/clipboard?file=src%2Fapp.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Stackblitz" src="https://static.infragistics.com/xplatform/images/browsers/open-stackblitz.png"/>
        </a>
    </body>
</html>

<div class="divider--half"></div>

## Dependencies

Before making use of the clipboard you will want to import the `SpreadsheetAction` enumeration:

<!-- Angular -->

```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { SpreadsheetAction } from 'igniteui-angular-spreadsheet';
```

<div class="divider--half"></div>

## Usage

The following code snippet shows how you can execute commands related to the clipboard in the Angular [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) control:

```ts
public cut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Cut);
}

public copy(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Copy);
}

public paste(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Paste);
}
```

## API References

*   `SpreadsheetAction`
*   [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html)
