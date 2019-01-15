---
title: Update Guide
_description: Information on updating to a newer version of the Ignite UI for Angular library.
_keywords: Ignite UI for Angular, update, npm package, version, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

# Ignite UI for Angular update guide

From the table below you may select to what version of Ignite UI for Angular you want to update your project.

-   [7.0 to latest](#70)
-   [6.2 to latest](#70)
-   [6.1 to latest](#61)
-   [6.0 to latest](#61)

## <a id="70"></a>Updating Ignite UI for Angular from versions 6.2/7.0 to latest

The first step for update to the ‘Ignite UI for Angular’ latest version is to execute the ‘[**ng update**](https://angular.io/cli/update)’ command to see what updates are available.

In order for your application to work as expected after the update usually it is not enough to update the ‘igniteui-angular’ package to the latest version only. Usually you need to also update the ‘@angular/core’, ‘@angular/cli’ and ‘igniteui-cli packages’.

To update the ‘Ignite UI for Angular’ package use:
	*ng update igniteui-angular*
To update the ‘Ignite UI CLI’ package use:
	*ng update igniteui-cli*
To update the ‘Angular Core’ package use:
	*ng update @angular/core*
To update the ‘Angular CLI’ package use:
	*ng update @angular/cli*

Things to update manually after the automatic update is performed:

•	If you use an IgxGrid with summaries in your application, you should know that now the ‘IgxSummaryOperand.operate()’ method is called with empty data in order to calculate the necessary height for the summary row. For custom summary operands, the method should always return an array of IgxSummaryResult with proper length.

Before version 7.1:
	*summaryResult: (IgxDateSummaryOperand.earliest(data)).toLocaleDateString()*

Since version 7.1:
    *summaryResult: data.length ? (IgxDateSummaryOperand.latest(data)).toLocaleDateString() : null*

## <a id="61"></a>Updating Ignite UI for Angular from versions 6.0/6.1 to latest version

The first step for update to the ‘Ignite UI for Angular’ latest version is to execute the ‘[**ng update**](https://angular.io/cli/update)’ command to see what updates are available.

In order for your application to work as expected after the update usually it is not enough to update the ‘igniteui-angular’ package to the latest version only. Usually you need to also update the ‘@angular/core’, ‘@angular/cli’ and ‘igniteui-cli packages’.

To update the ‘Ignite UI for Angular’ package use:
	*ng update igniteui-angular*
To update the ‘Ignite UI CLI’ package use:
	*ng update igniteui-cli*
To update the ‘Angular Core’ package use:
	*ng update @angular/core*
To update the ‘Angular CLI’ package use:
	*ng update @angular/cli*

Things to update manually after the automatic update is performed:

•	If you use an IgxGrid with summaries in your application, you should know that now the ‘IgxSummaryOperand.operate()’ method is called with empty data in order to calculate the necessary height for the summary row. For custom summary operands, the method should always return an array of IgxSummaryResult with proper length.

Before version 7.1:
	*summaryResult: (IgxDateSummaryOperand.earliest(data)).toLocaleDateString()*

Since version 7.1:
    *summaryResult: data.length ? (IgxDateSummaryOperand.latest(data)).toLocaleDateString() : null*

•	If you use an IgxCombo control in your application and you have set the ‘itemsMaxWidth’ option, you should change this option to ‘itemsWidth’