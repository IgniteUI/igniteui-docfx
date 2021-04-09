---
title: Excel에서 붙여넣기 - 네이티브 Angular | Ignite UI for Angular
_description: Users can paste data into igxGrid that is copied from Excel.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Controls, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Data Grid, Angular Grid Control, Angular Grid Component, Paste from Excel, Angular Paste from Excel
_language: kr
---

### Excel에서 붙여넣기

Ignite UI for Angular [`IgxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html)는 클립보드에 복사된 Excel 데이터를 읽어올 수 있습니다. 이 부분에서는 몇 가지 사용자 코드를 사용하여 실행하는 방법을 설명합니다.

#### Excel에서 붙여넣기 데모

이 샘플은 Excel에서 [`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html)로 붙여넣기를 실행하는 방법을 보여줍니다.
샘플을 실행하려면, Excel 스프레드 시트를 열고 행을 복사한 후 키보드(Ctrl+V, Shift+Insert, Command+V)를 사용하여 그리드에 붙여넣기를 합니다.

상단에는 두 가지 옵션이 있는 드롭다운 버튼이 있습니다.
<ol>
<li>“데이터를 새로운 행으로 붙여넣기”-이 모드에서는 Excel에서 복사한 모든 데이터가 새로운 행으로 그리드에 추가됩니다</li>
<li>“활성 셀에서 붙여넣기 시작”-이 모드에서는 그리드의 데이터를 덮어쓰기 합니다.</li>
</ol>

붙여넣기 후 새로운 데이터는 기울임꼴로 됩니다.


<code-view style="height: 570px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-paste" >
</code-view>

<div class="divider"></div>

#### 사용 방법

`paste-handler` 지시문(다음 섹션에 코드가 있음)을 [`igxGrid`]({environment:angularApiUrl}/classes/igxgridcomponent.html)에 추가하고 `onDataProcessed` 이벤트를 처리해야 합니다. `onDataProcessed` 이벤트에 배열 형식의 Excel 데이터에 액세스를 제공하는 하나의 매개 변수가 있습니다. 상세한 것은 `addRecords` 및 `updateRecords` 메소드를 참조하십시오.

```html
<igx-grid #grid1 [data]="data" [width]="'100%'" [height]="'505px'" [autoGenerate]="false" paste-handler (onDataProcessed)="dataPasted($event)" [primaryKey]="'ID'">
    <igx-column [field]="'Name'"></igx-column>
    <igx-column [field]="'Title'"></igx-column>
    <igx-column [field]="'Phone'"></igx-column>
    <igx-column [field]="'Country'"></igx-column>
</igx-grid>
```

```typescript
    public dataPasted(processedData) {
        if (this.pasteMode === "Paste data as new records") {
            this.addRecords(processedData);
        } else {
            this.updateRecords(processedData);
        }
    }

    public addRecords(processedData: any[]) {
        const columns = this.grid1.visibleColumns;
        const pk = this.grid1.primaryKey;
        const addedData = [];
        for (const curentDataRow of processedData) {
            const rowData = {};
            for (const col of columns) {
                rowData[col.field] = curentDataRow[col.visibleIndex];
            }
            // generate PK
            rowData[pk] = this.grid1.data.length + 1;
            this.grid1.addRow(rowData);
            addedData.push(rowData);
            this.grid1.cdr.detectChanges();
        }
        // scroll to last added row
        this.grid1.verticalScrollContainer.scrollTo(this.grid1.data.length);

        this.grid1.verticalScrollContainer.onChunkLoad.pipe(take(1)).subscribe(() => {
            this.clearStyles();
            for (const data of addedData) {
                const row = this.grid1.getRowByKey(data[pk]);
                if (row) {
                    row.nativeElement.style["font-style"] = "italic";
                    row.nativeElement.style.color = "gray";
                }
            }
        });
    }
    public updateRecords(processedData: any[]) {
        const cell = this.grid1.selectedCells[0];
        const pk = this.grid1.primaryKey;
        if (!cell) { return; }
        const rowIndex = cell.row.index;
        // const rowPkValue = cell.row.rowData[pk];
        const cellIndex = cell.column.visibleIndex;
        const columns = this.grid1.visibleColumns;
        let index = 0;
        const updatedRecsPK = [];
        for (const curentDataRow of processedData) {
            const rowData = {};
            const dataRec = this.grid1.data[rowIndex + index];
            const rowPkValue = dataRec ? dataRec[pk] : this.grid1.data.length + 1;
            rowData[pk] = rowPkValue;
            for (let j = 0; j < columns.length; j++) {
                let currentCell;
                if (j >= cellIndex) {
                    currentCell = curentDataRow.shift();
                }
                const colKey = columns[j].field;
                rowData[colKey] = currentCell || (!!dataRec ? dataRec[colKey] : null);
            }
            if (!dataRec) {
                // no rec to update, add instead
                rowData[pk] = rowPkValue;
                this.grid1.addRow(rowData);
                continue;
            }
            this.grid1.updateRow(rowData, rowPkValue);
            this.grid1.cdr.detectChanges();
            updatedRecsPK.push(rowPkValue);
            index++;
        }

        this.clearStyles();
        for (const pkVal of updatedRecsPK) {
            const row = this.grid1.getRowByKey(pkVal);
            if (row) {
            row.nativeElement.style["font-style"] = "italic";
            row.nativeElement.style.color = "gray";
            }
        }
    }

    protected clearStyles() {
        for (const row of this.grid1.rowList.toArray()) {
            row.nativeElement.style["font-style"] = "";
            row.nativeElement.style.color = "";
        }
    }
```
<div class="divider"></div>

#### 붙여넣기 핸들러 지시문

이것은 `paste-handler` 구현입니다. 클립보드에서 붙여넣은 데이터를 받는데 사용되는 DOM `textarea` 요소를 코드로 작성합니다. 데이터를 `textarea`에 붙여넣기 할 때 지시문은 이것을 배열에 분석하고 분석 데이터를 전달하는 사용자 이벤트 `onDataProcessed`를 내보냅니다.

```typescript
import { Directive, EventEmitter, HostListener, Output} from "@angular/core";

@Directive({ selector: "[paste-handler]" })
export class PasteHandler {
    public textArea;

    @Output()
    public onDataProcessed = new EventEmitter<any>();

    public ngOnInit(): void {
        const div = document.createElement("div");
        const divStyle = div.style;
        divStyle.position = "fixed";
        document.body.appendChild(div);
        this.textArea = document.createElement("textarea");
        const style = this.textArea.style;
        style.opacity = "0";
        style.height = "0px";
        style.width = "0px";
        style.overflow = "hidden";
        div.appendChild(this.textArea);

        this.textArea.addEventListener("paste", (eventArgs) => { this.onPaste(eventArgs); });
    }

    @HostListener("focusin", ["$event"])
    public focusIn(eventArgs) {
    }

    @HostListener("keydown", ["$event"])
    public ControlV(eventArgs) {
        const ctrl = eventArgs.ctrlKey;
        const key = eventArgs.keyCode;
        // Ctrl-V || Shift-Ins || Cmd-V
        if ((ctrl || eventArgs.metaKey) && key === 86 || eventArgs.shiftKey && key === 45) {
            this.textArea.focus();
        }
    }

    public onPaste(eventArgs) {
    let data;
    const clData = "clipboardData";

    // get clipboard data - from window.cliboardData for IE or from the original event's arguments.
    if (window[clData]) {
        window.event.returnValue = false;
        data = window[clData].getData("text");
    } else {
        data = eventArgs[clData].getData("text/plain");
    }

    // process the clipboard data
    const processedData = this.processData(data);

    this.onDataProcessed.emit(processedData);
    }

    public processData(data) {
        const pasteData = data.split("\n");
        for (let i = 0; i < pasteData.length; i++) {
            pasteData[i] = pasteData[i].split("\t");
            // Check if last row is a dummy row
            if (pasteData[pasteData.length - 1].length === 1 && pasteData[pasteData.length - 1][0] === "") {
                pasteData.pop();
            }
            // remove empty data
            if (pasteData.length === 1 &&
                 pasteData[0].length === 1 &&
                  (pasteData[0][0] === "" || pasteData[0][0] === "\r")) {
                    pasteData.pop();
            }
        }
        return pasteData;
    }
}

```

### API 참조
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)

### 추가 리소스
<div class="divider--half"></div>

* [Excel 내보내기](export-excel.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
