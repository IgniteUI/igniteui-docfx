---
title: Angular Spreadsheet | Grid Controls | Commands | Infragistics |
_description: Use the Spreadsheet control to embed Excel document creation and editing experiences right into your application.
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
_language: kr
mentionedTypes: ["Spreadsheet"]
---

# Angular Working with Commands

The Angular Spreadsheet component allows you to perform commands for activating different features of the spreadsheet. This topic explains how to perform different operations with the control using commands. Many of the commands will perform their action based on the active cells, rows, or worksheets. For example two such commands are ZoomIn and ZoomOut. See the SpreadsheetAction enum for a full list.

## Demo

<code-view style="height: 500px" alt="Angular spreadsheet commands"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet/commands"
                                                 github-src="excel/spreadsheet/commands">
</code-view>


<div class="divider--half"></div>

## Dependencies

Before making use of the commands you will want to import the SpreadsheetAction

```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { SpreadsheetAction } from 'igniteui-angular-spreadsheet';
```

<div class="divider--half"></div>

## Usage

The following snippet shows how you can setup the data validation rules

```ts
@ViewChild("spreadsheet", { read: IgxSpreadsheetComponent })
public spreadsheet: IgxSpreadsheetComponent;

// ...

public zoomIn(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
}

public zoomOut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
}
```
