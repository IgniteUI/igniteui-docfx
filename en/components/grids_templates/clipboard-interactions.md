@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Copy Data | Ignite UI for Angular | Infragistics 
_description: Use the data select behavior in order to copy data and export selected from the Grid into Excel file. The angular data grid has a rich set of helpful angular events
_keywords: copy data, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Grid Copy Data | Ignite UI for Angular | Infragistics 
_description: Use the data select behavior in order to copy data and export selected from the Grid into Excel file. The angular data grid has a rich set of helpful angular events
_keywords: copy data, igniteui for angular, infragistics
_canonicalLink: grid/clipboard-interactions
---
}

# @@igComponent Clipboard Interactions
Copy to clipboard operations are now available in the @@igComponent. This functionality provides a fast, easy and customizable way to copy data of the Angular Data Grid through the current multi cell data select. System Clipboard behavior gives the user ability to copy data from the @@igComponent into Excel or other external programs.

### Demo


@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:635px">
    <iframe id="grid-clipboard-operations-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-clipboard-operations-sample' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-clipboard-operations-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-clipboard-operations-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:635px">
    <iframe id="tree-grid-clipboard-operations-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/tree-grid-clipboard-operations-sample' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-clipboard-operations-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-clipboard-operations-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

## Functionality
Copy behavior is working with the default interaction defined by the browser and operating system. Thus for the copy and paste behaviors, these are:

- Windows/Unix based
  - <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Ctrl</kbd> + <kbd>Ins</kbd> as a keyboard shortcut
  - <kbd>Ctrl</kbd> + <kbd>V</kbd> / <kbd>Shift</kbd> + <kbd>Ins</kbd> as a keyboard shortcut
  - Copy action through the browser menu
- macOS
  - <kbd>⌘ Cmd</kbd> + <kbd>C</kbd> as a keyboard shortcut
  - <kbd>⌘ Cmd</kbd> + <kbd>V</kbd> as a keyboard shortcut
  - Copy action through the browser menu


## Limitations
- Both the **cut** and **copy** events are not natively supported in Internet Explorer. The exception is the
**paste** event (IE 11) which is emitted but does not expose the `clipboardData` property in the event. 
> [!NOTE] 
> In order to `copy` cells in IE 11, you can use the keyboard selection. Hold the `shift key` in order to make a multi-cell selection, press `Ctrl + C` in order to copy.

- The copy behavior is disabled while the grid is in edit mode.
- The current version of this feature covers only the `copy` from grid behavior. Later on we plan to expose `paste` within grid behavior.
@@if (igxName === 'IgxGrid') { You can use a custom paste handler in order to configure `paste` behavior, have a look at our [Paste from Excel topic](paste-excel.md). }

## API Usage
We expose [`clipboardOptions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions) @Input property, which handles the following options:
- [`enabled`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions.enabled) Enables/disables copying of selected cells.
- [`copyHeaders`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions.copyHeaders) Include the associated headers when copying.
- [`copyFormatters`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions.copyFormatters) Apply any existing column formatters to the copied data.
- [`separator`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions.separator) The string separator to use the for formatting the data in the clipboard. Default is `/t`

> [!NOTE] 
> Excel can automatically detect text that is separated by tabs (tab-delimited `/t`) and properly paste the data into separate columns. When the paste format doesn't work, and everything you paste appears in a single column, then Excel's delimiter is set to another character, or your text is using spaces instead of tabs.

- [`onGridCopy`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#resizable) Emitted when a copy operation is executed. Fired only if copy behavior is enabled through the [`clipboardOptions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clipboardoptions)

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Summaries](summaries.md)
* [Column Pinning](column-pinning.md)
* [Selection](selection.md)
* [Virtualization and Performance](virtualization.md)
* [Multi-column headers](multi-column-headers.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
