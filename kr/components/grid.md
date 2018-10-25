---
title: 데이터 그리드 컴포넌트
_description: Ignite UI for Angular 데이터 그리드 컨트롤은 신속하며, 계층 및 목록 보기를 포함하여 널리 사용되는 기능으로 풍부한 터치 반응 데이터 그리드를 제공합니다.
_keywords: Ignite UI for Angular, UI 컨트롤, Angular 위젯, 웹 위젯, UI 위젯, Angular, 네이티브 Angular 컴포넌트 세트, 네이티브 Angular 컨트롤, 네이티브 Angular 컴포넌트 라이브러리, Angular 데이터 그리드 컴포넌트, Angular 데이터 그리드 컨트롤, Angular 그리드 컴포넌트, Angular 그리드 컨트롤, Angular 고성능 그리드
_language: kr
---

## 데이터 그리드

<p class="highlight">Ignite UI for Angular 데이터 그리드를 사용하여 표 데이터를 표시하고 조작합니다. 최소한의 코딩 또는 구성으로 데이터를 신속하게 바인딩합니다. 기능에는 필터링, 정렬, 페이징, 템플릿, 열 이동, 데이터 편집 및 업데이트 기능이 있습니다. 사용자 조작을 간단히 이해하고 프로그래밍 방식으로 제어할 수 있습니다.</p>
<div class="divider"></div>

### 데모

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### 의존성

그리드는 `NgModule`로 내보내기가 되기 때문에 애플리케이션에서 _IgxGridModule_을 `AppModule` 안으로 가져오기만 하면 됩니다:

```typescript
// app.module.ts

import { IgxGridModule } from 'igniteui-angular';
// Or
import { IgxGridModule } from 'igniteui-angular/grid';

@NgModule({
    imports: [
        ...
        IgxGridModule.forRoot(),
        ...
    ]
})
export class AppModule {}
```

_IgxGridModule_ 각 컴포넌트, 지시문 및 도우미 클래스는 _grid_ 하위 패키지 또는 _igniteui-angular_의 기본 번들을 통해 가져올 수 있습니다. 그리드를 인스턴스화하고 사용하기 위해 모든 항목을 가져올 필요는 없지만 일반적으로 그리드 API의 일부인 유형을 선언할 때 가져옵니다(또는 편집기가 자동으로 가져옵니다).

```typescript
import { IgxGridComponent } from 'igniteui-angular/grid/';
// Or
import { IgxGridComponent } from 'igniteui-angular'
...

@ViewChild('myGrid', { read: IgxGridComponent })
public grid: IgxGridComponent;
```

### 사용 방법

그리드 모듈을 가져왔으므로 로컬 데이터에 바인딩하는 **igx-grid**의 기본 구성을 시작합니다:

```html
<igx-grid #grid1 id="grid1" [data]="localData" [autoGenerate]="true"></igx-grid>
```

**id** 속성은 문자열 값이며 데이터가 제공되지 않으면 자동으로 생성되는 그리드의 고유 식별자이며, **데이터**는 그리드를 바인딩하는데 이 경우에는 로컬 데이터입니다.

**autoGenerate** 속성은 데이터 소스 필드를 기반으로 **igx-grid**에게  `IgxColumnComponent`를 자동으로 생성하도록 지시합니다. 또한, 가능한 경우 열에 적합한 데이터 유형을 추론합니다. 그렇지 않으면 개발자가 데이터 소스 필드에 대한 열과 매핑을 명시적으로 정의해야 합니다.

### 열 구성

**IgxGridColumnComponent**는 그리드의 _열_ 집합을 정의하고 **필터링**, **정렬**, **페이징** 등의 기능을 열 별로 활성화하는데 사용됩니다. 셀, 헤더, 푸터 템플릿도 사용할 수 있습니다.

**autoGenerate** 속성을 해제하고 마크업에서 열 집합을 정의합니다:

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false" [paging]="true" [perPage]="6" (onColumnInit)="initColumns($event)"
    (onSelection)="selectCell($event)">
    <igx-column field="Name" [sortable]="true" header=" " [filterable]="true"></igx-column>
    <igx-column field="AthleteNumber" [sortable]="true" header="Athlete number"></igx-column>
    <igx-column field="TrackProgress" header="Track progress">
        <ng-template igxCell let-value>
            <igx-linear-bar [stripped]="false" [value]="value" [max]="100"></igx-linear-bar>
        </ng-template>
    </igx-column>
</igx-grid>
```

그리드의 각 열은 개별적으로 템플릿할 수 있습니다. 열은 그리드 모듈 지시문 중 하나로 이루어진 `ng-template` 태그를 요구합니다.

`igxHeader` targets the column header providing as a context the column object itself.

```html
...
<igx-column field="Name">
    <ng-template igxHeader let-column>
        {{ column.field | uppercase }}
    </ng-template>
</igx-column>
...
```

`igxCell` applies the provided template to all cells in the column. The context object provided in the template consists of the cell value provided implicitly and the cell object itself.

```html
...
<igx-column field="Name">
    <ng-template igxCell let-value>
        {{ value | titlecase }}
    </ng-template>
</igx-column>
...
```

위의 부분에서는 암시적으로 제공된 셀 값에 대한 참조를 "사용"합니다. 이것은 일부 데이터를 표시하고 셀 값에 대해 사용자 스타일이나 파이프 변환을 적용하려는 경우에 충분합니다. 그러나 다음과 같이 `IgxGridCellComponent` 객체 자체를 사용하는 것이 더 유용합니다:

```html
<igx-grid #grid [data]="data">
    <igx-column dataType="string" field="Name">
        <ng-template igxCell let-cell="cell">
            <!-- Implement row deleting inside the cell template itself -->
            <span tabindex="0" (keydown.delete)="grid.deleteRow(cell.rowIndex)">{{ cell.value | titlecase }}</span>
        </ng-template>
    </igx-column>
    <igx-column dataType="boolean" field="Subscribtion">
        <ng-template igxCell let-cell="cell">
            <!-- Bind the cell value through the ngModel directive and update the data source when the value is changed in the template -->
            <input type="checkbox" [ngModel]="cell.value" (ngModelChange)="cell.update($event)" />
        </ng-template>
    </igx-column>
<igx-grid>
```

또한, 열은 셀이 편집 모드인 경우 사용할 마지막 템플릿 하나를 허용합니다. 다른 열 템플릿과 마찬가지로 제공된 컨텍스트 객체도 다시 셀 값과 셀 객체 자체입니다. 물론 최종 사용자가 편집 모드 템플릿에 접속할 수 있게 하려면
`IgxColumnComponent`의 `editable` 속성을 `true`로 설정해야 합니다.

```html
<igx-column dataType="number" editable="true" field="Price">
    <ng-template igxCellEditor let-cell="cell">
        <label for="price">
            Enter the new price tag
        </label>
        <input name="price" type="number" [ngModel]="cell.value" (ngModelChange)="cell.update(convertToNumber($event))" />
    </ng-template>
</igx-column>
```

템플릿에 사용할 수 있는 제공된 속성에 익숙해 지려면 [IgxGridCellComponent](#igxgridcellcomponent)의 API를 확인하십시오.

각 열 템플릿은 `IgxColumnComponent` 객체 자체를 통해 언제든지 프로그래밍 방식으로 변경할 수 있습니다. 예를 들면, 아래 코드에서 사용자 데이터에 대해 2개의 템플릿을 선언했습니다. TypeScript 코드에서 템플릿 자체에 대한 참조를 확인한 후 일부 조건에 따라 애플리케이션의 해당 열에 적합한 템플릿을 렌더링합니다.

```html
<igx-grid>
    <!-- Column declarations -->
</igx-grid>

<ng-template #normalView let-value>
    <div class="user-details">{{ val }}</div>
    <user-details-component></user-details-component>
</ng-template>

<ng-template #smallView let-value>
    <div class="user-details-small">{{ val }}</div>
</ng-template>
```

```typescript
@ViewChild("normalView", { read: TemplateRef })
public normalView: TemplateRef<any>;

@ViewChild("smallView", { read: TemplateRef })
public smallView: TemplateRef<any>;

....

const column = this.grid.getColumnByName("User");
// Return the appropriate template based on some conditiion.
// For example saved user settings, viewport size, etc.
column.bodyTemplate = this.smallView;
```

열 속성은 열이 그리드에서 초기화될 때 생성되는 **initColumns** 이벤트 코드에서 설정할 수도 있습니다.

```typescript
public initColumns(column: IgxGridColumn) {
    const column: IgxColumnComponent = column;
    if (column.field === 'ProductName') {
        column.filterable = true;
        column.sortable = true;
        column.editable = true;
    }
}
```

위의 코드는 **ProductName** 열을 필터링, 정렬, 편집할 수 있도록 하며 해당 기능 UI를 인스턴스화합니다(예: 편집용 입력 등).

### 데이터 바인딩

그리드를 사용하기 전에 그리드를 변경하여 대규모 애플리케이션의 일반적인 시나리오인 원격 데이터 서비스에 바인딩합니다. 별도의 데이터 서비스에서 데이터 가져오기와 관련된 모든 논리를 분리하여 서버에서 데이터 가져오기를 처리하는 서비스를 생성하는 것이 좋습니다.

서비스를 별도의 파일로 구현해 보겠습니다

```typescript
// northwind.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';
```

모든 Angular 서비스 정의에서  [필수 요소](https://angular.io/guide/dependency-injection)인 `주입 가능` 데코레이터를 가져옵니다. `HttpClient`는 백엔드 서비스와 통신할 수 있는 기능을 제공합니다. 그리드 컴포넌트에서 인용하게 될 일부 결과의 `Observable`을 반환합니다.

**참고**: Angular 5 이전에는 `HttpClient`가 `@angular/http`에 있었고 `Http`로 명명되었습니다.

일련의 기록이 포함된 JSON 응답을 받을 것이므로 올바른 형태의 인터페이스를 정의하여 Observable에 반환될 것으로 예상되는 데이터의 종류를 지정함으로써 스스로 도울 수 있습니다. 유형 확인은 항상 권장되며 향후 복잡한 것을 줄일 수 있습니다.

```typescript
// northwind.service.ts

export interface NorthwindRecord {
    ProductID: number;
    ProductName: string;
    SupplierID: number;
    CategoryID: number;
    QuantityPerUnit: string;
    UnitPrice: number;
    UnitsInStock: number;
    UnitsOnOrder: number;
    ReorderLevel: number;
    Discontinued: boolean;
    CategoryName: string;
}
```

서비스 자체는 매우 간단한 한 가지 방법으로 구성됩니다: `Observable<NorthwindRecord[]>`를 반환할 `fetchData`입니다. 임의의 이유(서버를 사용할 수 없는 경우, 네트워크 오류 등)로 요청이 실패하는 경우, `HttpClient`는 오류를 반환합니다. `catchError` 연산자를 사용하여 실패한 _Observable_을 인터셉트하여 오류 처리기로 전달합니다. 오류 처리기는 오류를 기록하고 유효한 값을 반환합니다.

```typescript
// northwind.service.ts

@Injectable()
export class NorthwindService {
    private url = 'http://services.odata.org/V4/Northwind/Northwind.svc/Alphabetical_list_of_products';

    constructor(private http: HttpClient) {}

    public fetchData(): Observable<NorthwindRecord[]> {
        return this.http
            .get(this.url)
            .pipe(
                map(response => response['value']),
                catchError(
                    this.errorHandler('Error loading northwind data', [])
                )
            );
    }

    private errorHandler<T>(message: string, result: T) {
        return (error: any): Observable<any> => {
            console.error(`${message}: ${error.message}`);
            return of(result as T);
        };
    }
}
```

애플리케이션 모듈에 `HttpClientModule` 및 서비스를 모두 가져오고 서비스를 공급자로 등록합니다.

```typescript
// app.module.ts

import { HttpClientModule } from '@angular/common/http';
...
import { NorthwindService } from './northwind.service';

@NgModule({
    imports: [
        ...
        HttpClientModule
        ...
    ],
    providers: [
        NorthwindService
    ]
})
export class AppModule {}
```

서비스를 구현한 후에는 컴포넌트의 생성자에게 서비스를 인젝트하여 데이터를 검색하는데 사용합니다. `ngOnInit` 라이프 사이클 후크에 초기 요청을 보냅니다.

**참고**: 아래 코드에서 왜 서비스에 가입하기 전에 _records_ 속성을 빈 배열로 설정하는지 궁금할 수 있습니다. HTTP 요청은 비동기이며 완료될 때까지 _records_ 속성은 _undefined_이며 그리드를 바인딩하려고하면 오류가 발생합니다. 기본값을 초기화하거나 `BehaviorSubject`를 사용해야 합니다.

```typescript
// my.component.ts

@Component({
    ...
})
export class MyComponent implements OnInit {

    public records: NorthwindRecord[];

    constructor(private northwindService: NorthwindService) {}

    ngOnInit() {
        this.records = [];
        this.northwindService.fetchData().subscribe((records) => this.records = records);
    }
}
```

컴포넌트의 템플릿에서:

```html
    <igx-grid [data]="records">
        <igx-column field="ProductId"></igx-column>
        <!-- rest of the column definitions -->
        ...
    </igx-grid>
```

**참고**: 그리드 `autoGenerate` 속성은 원격 데이터에 바인딩할 때 피하는 것이 좋습니다. 데이터를 검사하고 적절한 열을 생성하기 위해 데이터를 사용 가능하도록 해야 합니다. 일반적으로 원격 서비스가 응답하기 전까지 그리드는 오류가 발생합니다. 원격 서비스에 바인딩할 때 `autoGenerate`를 사용 가능하도록 하는 것은 향후 버전에 추가될 것입니다.

## 알려진 제한 사항

|제한 사항|설명|
|--- |--- |
|`percentage` 및 `px`로 설정된 열 너비|열 너비에 `%`와 `px`를 조합하는 것은 지원하지 않습니다.|
|`number` 형식의 열을 필터링할 경우|필터링 입력에 `number`와 다른 값을 입력한 경우, 캐스트가 올바르지 않아 `NaN`이 반환됩니다.|
|그리드 `width`는 열 너비에 의존하지 않음 | 모든 열 `width`로 그리드 자체의 스패닝을 결정하지 않습니다. 상위 컨테이너 크기 또는 정의된 그리드 `width`에 의해 결정됩니다.|
|상위 컨테이너에 중첩된 그리드 | 그리드 `width`를 설정하지 않고 정의된 크기로 상위 컨테이너에 배치하면 그리드가 컨테이너에 스팬됩니다.|
|그리드 `OnPush` ChangeDetectionStrategy |그리드에서 `ChangeDetectionStrategy.OnPush`를 처리하고 사용자 정의가 표시될 때마다 그리드에 변경 사항이 통지됩니다.|
| 열에는 허용 가능한 최소 열 너비가 있습니다. `displayDensity` 옵션에 따라 다음과 같이 있습니다: <br/>"compact": 24px <br/> "cosy": 32px <br/> "comfortable ": 48px | 허용된 최소 너비보다 작게 설정된 경우, 렌더링된 요소에 영향을 주지 않습니다. 해당 `displayDensity`의 최소 허용 너비로 렌더링합니다. 수평 가상화는 예기치 않은 동작이 발생할 수 있으므로 지원되지 않습니다.


<div class="divider--half"></div>

## API

### 입력

다음은 개발자가 그리드 모양/동작을 구성하기 위해 설정할 수 있는 모든 입력 목록입니다:

|이름|형식|설명|
|--- |--- |--- |
|`id`|string|그리드의 고유 식별자. 제공되지 않은 경우 자동으로 생성됩니다.|
|`data`|Array|그리드의 데이터 소스.|
|`autoGenerate`|boolean|그리드 열의 자동 생성, 기본값은 _false_입니다.|
|`paging`|bool|페이징 기능을 활성화. 기본값은 _false_입니다.|
|`perPage`|number|페이지당 표시 항목, 기본값은 15입니다.|
|`filteringLogic`|FilteringLogic|그리드의 필터링 논리. 기본값은 _AND_입니다.|
|`filteringExpressionsTree`|IFilteringExpressionsTree|그리드의 필터링 상태.|
|`sortingExpressions`|Array|그리드의 정렬 상태.|
|`height`|string|그리드 요소의 높이. `1000px`, `75%` 등의 값을 전달할 수 있습니다.|
|`width`|string|그리드 요소의 너비. `1000px`, `75%` 등의 값을 전달할 수 있습니다.|
|`evenRowCSS`|string|그리드의 모든 짝수 행에 적용되는 추가 스타일 클래스.|
|`oddRowCSS`|string|그리드의 모든 홀수 행에 적용되는 추가 스타일 클래스.|
|`paginationTemplate`|TemplateRef|그리드의 페이지징을 위해 사용자 `ng-template`을 제공합니다.|
|`groupingExpressions`| Array | 그리드의 그룹화 상태|
|`groupingExpansionState`| Array | 그룹 행의 확장 상태 목록. 그룹 행의 확장 상태(expanded: boolean) 및 fieldName 및 value를 통해 설명된 그룹 행(Array <IGroupByExpandState>)의 상위 목록을 포함하는 고유 식별자를 포함합니다.|
|`groupsExpanded`| Boolean | 생성된 그룹을 확장 또는 축소 렌더링할지 여부를 결정합니다.|
|`groupsRowList`| QueryList<IgxGridGroupByRowComponent> | 표시되는 그룹 행의 목록.|
|`groupsRecords`| IGroupByRecord[] | 현재 그룹 상태를 반영하는 계층의 모든 그룹. |
|`displayDensity`| DisplayDensity or string | 그리드의 표시 밀도를 정의합니다. `compact`, `cosy` 또는 `comfortable`로 설정할 수 있습니다.|
|`rowHeight`|string| 행 높이를 설정합니다. 높이는 항상 **pixels** 단위입니다.|


<div class="divider--half"></div>

### 출력

**igx-grid**에 의해 발생하는 이벤트 목록:

|이름|설명|
|--- |--- |
|_Event emitters_|_Notify for a change_|
|`onEditDone`|셀 값이 변경되면 발생합니다. `{ currentValue: any, newValue: any }`를 반환합니다.|
|`onCellClick`|셀을 클릭하면 발생합니다. 셀 객체를 반환합니다.|
|`onSelection`|셀이 선택되면 발생합니다. 셀 객체를 반환합니다.|
|`onColumnInit`|그리드 열을 초기화할 때 발생합니다. 열 객체를 반환합니다.|
|`onSortingDone`|UI를 통해 정렬을 실행할 때 발생합니다. 정렬식을 반환합니다.|
|`onFilteringDone`|UI를 통해필터링을 실행할 때 발생합니다. 필터링이 실행된 열의 필터링식 트리를 반환합니다. |
|`onPagingDone`|페이징이 실행될 때 발생합니다. 이전 페이지와 새 페이지로 구성된 객체를 반환합니다.|
|`onRowAdded`|행이 API를 통해 그리드에 추가될 때 발생합니다. 새 행 객체의 데이터를 반환합니다.|
|`onRowDeleted`|행이 API를 통해 그리드에서 삭제되면 발생합니다. 제거한 행 객체를 반환합니다.|
|`onColumnPinning`|열이 그리드 API를 통해 고정될 때 발생합니다 열이 삽입되는 인덱스는 `insertAtIndex` 속성을 통해 변경할 수 있습니다.|
|`onColumnResized`|열의 크기가 변경될 때마다 발생합니다. 열 객체, 이전 및 새 열 너비를 반환합니다.|
|`onContextMenu`|셀을 마우스 오른쪽 버튼으로 클릭하면 발생합니다. 셀 객체를 반환합니다.|
|`onDoubleClick`|셀을 두 번 클릭하면 발생합니다. 셀 객체를 반환합니다.|
|`onGroupingDone`| 새 열이 그룹화되거나 그룹 해제 될 때 발생합니다. 그룹화 작업과 관련된 `ISortingExpression`을 반환합니다.


<div class="divider--half"></div>

이러한 이벤트 발생의 핸들러는 선언적 이벤트 바인딩으로 정의됩니다.

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false"
    (onColumnInit)="initColumns($event)" (onSelection)="selectCell($event)"></igx-grid>
```

<div class="divider--half"></div>

### 메소드

**igx-grid**에 의해 공개된 모든 공개 메소드 목록입니다:

|구문|설명|
|--- |--- |
|`getColumnByName(name: string)`|필드 속성이 `name`과 동일한 열 객체를 반환하거나 이러한 열이 존재하지 않는 경우는 `undefined`를 반환합니다.|
|`getCellByColumn(rowIndex: number, columnField: string)`|열이 `columnField`이고 행이 `rowIndex`인 열의 셀 객체를 반환하거나 없는 경우에는 `undefined`를 반환합니다.|
|`getCellByKey(rowSelector: any, columnField: string)`|`rowSelector`가 어느 하나의 rowID와 일치하고 columnField가 그리드에 존재하는 경우, **그리드에 기본 키가 지정되어 있는 경우에만** 셀 객체를 반환하고 그렇지 않으면 undefined를 반환합니다.|
|`getRowByIndex(index: number)`|지정된 rowIndex가 존재하고 현재 그리드의 표시 영역에 있는 경우 행 객체를 반환합니다.|
|`getRowByKey(keyValue: any)`|지정된 keyValue가 그리드의 rowID로 존재하고 **그리드에 기본 키가 지정되어 있는 경우에만** 행 개체를 반환합니다.|
|`addRow(data: any)`|새 행 객체를 만들고 `data` 레코드를 데이터 소스의 끝에 추가합니다.|
|`deleteRow(rowSelector: any)`|**그리드에 기본 키가 지정되어 있는 경우에만** 데이터 소스에서 행 객체와 해당 데이터 레코드를 제거합니다. 이 메소드는 rowID인 `rowSelector`를 매개 변수로 받아들입니다.|
|`updateRow(value: any, rowSelector: any)`|rowID/ 전달된 데이터 소스 레코드에 대응하는 `rowSelector` 매개 변수/`rowSelector` 매개 변수에 지정된 행 객체를 업데이트합니다. **이 메소드는 기본 키가 그리드에 지정되어 있는 경우에만 요청된 업데이트를 적용합니다.**|
|`updateCell(value: any, rowSelector: any, column: string)`|셀 객체 및 데이터 소스의 레코드 필드를 업데이트합니다. 메소드는 3개의 파라미터 즉 - `value` - 설정되는 새로운 값, 그 밖의 새로운 2개의 파라미터 `rowSelector` 및 `column`은 갱신되는 셀을 식별합니다. `rowSelector`  rowID, `column`은 열 필드에 해당합니다. **이 메소드는 기본 키가 그리드에 지정되어 있는 경우에만 요청된 업데이트를 적용합니다.**|
|`filter(name: string, value: any, conditionOrExpressionTree?: IFilteringOperation, ignoreCase?: boolean)`|단일 열을 필터링합니다. 필터링 처리는 매개 변수로서 사용됩니다. 사용 가능한 [필터링 조건](#필터링-조건)을 확인하십시오.|
|`filter(name: string, value: any, conditionOrExpressionTree?: IFilteringExpressionsTree, ignoreCase?: boolean)`|단일 열을 필터링합니다. 필터링식 트리는 매개 변수로서 사용됩니다.|
|`filterGlobal(value: any, condition?, ignoreCase?)`|동일한 조건으로 그리드의 모든 열을 필터링합니다.|
|`clearFilter(name?: string)`|`name`이 제공된 경우, 해당 열의 필터링 상태를 지우며 그렇지 않은 경우에는 모든 열의 필터링 상태를 지웁니다.|
|`sort(expression: ISortingExpression)`|단일 열을 정렬합니다.|
|`sort(expressions: Array)`|제공된 정렬식 배열을 기반으로 그리드 열을 정렬합니다.|
|`clearSort(name?: string)`|`name`이 제공된 경우, 해당 열의 정렬 상태를 지우며 그렇지 않은 경우에는 모든 열의 정렬 상태를 지웁니다.|
|`enableSummaries(fieldName: string, customSummary?: any)`|지정된 열의 요약을 활성화하고 `customSummary`를 적용합니다. `customSummary`를 설정하지 않은 경우, 열 데이터 유형의 기본 요약이 적용됩니다.|
|`enableSummaries(expressions: Array)`|열의 요약을 활성화하고 제공된 경우 `customSummary`를 적용합니다.|
|`disableSummaries(fieldName: string)`|지정된 열의 요약을 비활성화합니다.|
|`disableSummaries(columns: string[])`|배열된 열의 요약을 비활성화합니다.|
|`clearSummaryCache()`|캐시된 요약을 모두 삭제하고 강제로 다시 계산합니다.|
|`recalculateSummaries()`|그리드를 트리거하여 summaryArea를 다시 계산합니다.|
|`previousPage()`|페이징이 사용 가능하고 현재 페이지가 첫 페이지가 아닌 경우 이전 페이지로 이동합니다.|
|`nextPage()`|페이징이 사용 가능하고 현재 페이지가 마지막 페이지가 아닌 경우 다음 페이지로 이동합니다.|
|`paginate(page: number)`|페이징이 사용 가능한 경우 지정된 페이지로 이동합니다. 페이지 인덱스는 0을 기준으로 합니다.|
|`markForCheck()`|그리드와 하위 요소에 변경 검출 주기를 수동으로 트리거합니다.|
|`pinColumn(name: string): boolean`|열을 필드 이름으로 핀 고정합니다. 작업의 성공 여부를 반환합니다.|
|`unpinColumn(name: string): boolean`|열을 필드 이름으로 핀 고정 해제합니다. 작업의 성공 여부를 반환합니다.|
|`groupBy(expression: ISortingExpression)`| 새 열을 제공된 식을 기준으로 그룹화하거나 기존 식을 수정합니다.|
|`groupBy(expressions: Array)`| 열을 제공된 정렬식 배열을 기준으로 그룹화합니다.|
|`clearGrouping()`| 그리드 그룹화를 모두 지웁니다.|
|`clearGrouping(fieldName: string)`| 특정 열에서 그룹화를 지웁니다.|
|`isExpandedGroup(group: IGroupByRecord )`| 그룹의 전개 여부를 반환합니다.|
|`toggleGroup(group: IGroupByRecord)`| 그룹의 전개 상태를 토글합니다.|
|`getGroup(field: string, value: any)`| 복합 키로 그룹 레코드를 가져옵니다.|
|`toggleAllGroupRows()`| 모든 그룹 행의 전개 상태를 재귀적으로 토글합니다.|

<div class="divider--half"></div>

## IgxColumnComponent
### 입력

**IgxGridColumnComponent**에서 열을 정의하기 위해 사용할 수 있는 입력:

|이름|형식|설명|
|--- |--- |--- |
|`field`|string|열 필드 이름|
|`header`|string|열 헤더 텍스트|
|`sortable`|boolean|열이 정렬 가능한지 여부를 설정|
|`editable`|boolean|열 값을 편집 가능하게 설정|
|`filterable`|boolean|열 값을 필터링 가능하게 설정|
|`hasSummary`| boolean  |특정 열에 요약을 사용하도록 설정할지 여부를 설정합니다.|
|`summaries`| IgxSummaryOperand |특정 열에 사용자 요약을 설정|
|`hidden`|boolean|열의 표시 상태|
|`movable`|boolean|열 이동|
|`resizable`|boolean|열을 크기 조정할 수 있도록 설정|
|`width`|string|열 너비|
|`minWidth`|string|열 최소 너비|
|`maxWidth`|string|열 최대 너비|
|`headerClasses`|string|헤더 요소에 적용되는 추가 CSS 클래스입니다.|
|`cellClasses`|string|이 열의 셀에 적용되는 추가 CSS 클래스입니다.|
|`formatter`|Function|열에 셀 템플릿을 전달할 필요 없이 셀 값을 "템플릿"하는데 사용되는 함수.|
|`index`|string|열 인덱스|
|`filteringIgnoreCase`|boolean|필터링이 적용되는 경우 문자열의 대문자화를 무시합니다. 기본값은 _true_입니다.|
|`sortingIgnoreCase`|boolean|정렬이 적용되는 경우 문자열의 대문자화를 무시합니다. 기본값은 _true_입니다.|
|`dataType`|DataType|string, number, boolean 또는 Date 중 하나입니다. 필터링이 사용 가능한 경우 필터 UI 조건은 열의 `dataType`를 기반으로 합니다. 제공되지 않으면 `string`으로 설정됩니다. `autoGenerate`가 사용 가능한 경우 그리드는 데이터 소스를 기반으로 각 열의 올바른 데이터 유형을 분석하려고 합니다.|
|`pinned`|boolean|열을 핀 고정하지 여부를 설정|
|`groupable`|boolean| 열을 UI로 그룹화할 수 있는지 여부를 결정합니다.|

### 메소드
**IgxGridColumnComponent**에 의해 공개된 모든 공개 메소드 목록입니다:

|구문|설명|
|--- |--- |
|`pin(): boolean`|열을 핀 고정합니다. 작업이 성공하면 반환합니다.|
|`unpin(): boolean`|열을 핀 고정 해제합니다. 작업이 성공하면 반환합니다.|

<div class="divider--half"></div>

### 게터/세터

|이름|형식|게터|세터|설명|
|--- |--- |--- |--- |--- |
|`bodyTemplate`|TemplateRef|예|예|열의 셀에 적용될 템플릿에 대한 참조를 가져오거나 설정합니다.|
|`headerTemplate`|TemplateRef|예|예|열 헤더에 적용될 템플릿에 대한 참조를 가져오거나 설정합니다.|
|`footerTemplate`|TemplateRef|예|예|열 푸터에 적용될 템플릿에 대한 참조를 가져오거나 설정합니다.|
|`inlineEditorTemplate`|TemplateRef|예|예|셀이 편집 모드로 들어갈 때 적용될 템플릿에 대한 참조를 가져오거나 설정합니다.|

<div class="divider--half"></div>

## 필터링 조건

 5개의 필터링 오퍼랜드 클래스를 사용할 수 있습니다:
- `IgxFilteringOperand`는 사용자 필터링 조건을 정의할 때 상속할 수 있는 기본 필터링 오퍼랜드입니다.
- `IgxBooleanFilteringOperand`는 `boolean` 유형의 모든 기본 필터링 조건을 정의합니다.
- `IgxDateFilteringOperand`는 `Date` 유형의 모든 기본 필터링 조건을 정의합니다.
- `IgxNumberFilteringOperand`는 `numeric` 유형의 모든 기본 필터링 조건을 정의합니다.
- `IgxStringFilteringOperand`는 `string` 유형의 모든 기본 필터링 조건을 정의합니다.

```typescript
import {
    IgxBooleanFilteringOperand,
    IgxDateFilteringOperand,
    IgxFilteringOperand,
    IgxNumberFilteringOperand,
    IgxStringFilteringOperand,
} from 'igniteui-angular';
```

```typescript
public filter(term) {
    this.grid.filter("ProductName", term, IgxStringFilteringOperand.instance().condition("contains"));
}
```

### 문자열 유형

|이름|구문|설명|
|--- |--- |--- |
|`contains`|`(target: string, searchVal: string, ignoreCase?: boolean)`|`target`이 `searchVal`를 포함한 경우 true를 반환합니다.|
|`startsWith`|`(target: string, searchVal: string, ignoreCase?: boolean)`|`target`이 `searchVal`로 시작하는 경우 true를 반환합니다.|
|`endsWith`|`(target: string, searchVal: string, ignoreCase?: boolean)`|`target`이 `searchVal`로 종료하는 경우 true를 반환합니다.|
|`doesNotContain`|`(target: string, searchVal: string, ignoreCase?: boolean)`|`searchVal`이 `target`에 없는 경우 true를 반환합니다.|
|`equals`|`(target: string, searchVal: string, ignoreCase?: boolean)`|`searchVal`이 `target`과 일치하는 경우 true를 반환합니다.|
|`doesNotEqual`|`(target: string, searchVal: string, ignoreCase?: boolean)`|`searchVal`이 `target`과 일치하지 않는 경우 true를 반환합니다.|
|`null`|`(target: any)`|`target`이 `null`인 경우 true를 반환합니다.|
|`notNull`|`(target: any)`|`target`이 `null`이 아닌 경우 true를 반환합니다.|
|`empty`|`(target: any)`|`target`이 `null`, `undefined` 또는 0 길이의 문자열인 경우 true를 반환합니다.|
|`notEmpty`|`(target: any)`|`target`이 `null`, `undefined` 또는 0 길이의 문자열이 아닌 경우 true를 반환합니다.|

<div class="divider--half"></div>

### 숫자 유형

|이름|구문|설명|
|--- |--- |--- |
|`equals`|`(target: number, searchVal: number)`|`target`이 `searchVal`과 같은 경우 true를 반환합니다.|
|`doesNotEqual`|`(target: number, searchVal: number)`|`target`이 `searchVal`과 같지 않은 경우 true를 반환합니다.|
|`doesNotEqual`|`(target: number, searchVal: number)`|`target`이 `searchVal`보다 큰 경우 true를 반환합니다.|
|`lessThan`|`(target: number, searchVal: number)`|`target`이 `searchVal`보다 작은 경우 true를 반환합니다.|
|`greaterThanOrEqualTo`|`(target: number, searchVal: number)`|`target`이 ` equals searchVal` 이상인 경우 true를 반환합니다.|
|`lessThanOrEqualTo`|`(target: number, searchVal: number)`|`target`이 ` equals searchVal` 이하인 경우 true를 반환합니다.|
|`null`|`(target: any)`|`target`이 `null`인 경우 true를 반환합니다.|
|`notNull`|`(target: any)`|`target`이 `null`이 아닌 경우 true를 반환합니다.|
|`empty`|`(target: any)`|`target`이 `null`, `undefined` 또는 `NaN`인 경우 true를 반환합니다.|
|`notEmpty`|`(target: any)`|`target`이 `null`, `undefined` 또는 `NaN`이 아닌 경우 true를 반환합니다.|

<div class="divider--half"></div>

### 불 유형

|이름|구문|설명|
|--- |--- |--- |
|`all`|`(target: boolean)`|모든 행을 반환합니다.|
|`true`|`(target: boolean)`|`target`이 truthy인 경우 반환합니다.|
|`false`|`(target: boolean)`|`target`이 falsy인 경우 true를 반환합니다.|
|`null`|`(target: any)`|`target`이 `null`인 경우 true를 반환합니다.|
|`notNull`|`(target: any)`|`target`이 `null`이 아닌 경우 true를 반환합니다.|
|`empty`|`(target: any)`|`target`이 `null` 또는 `undefined`인 경우 true를 반환합니다.|
|`notEmpty`|`(target: any)`|target이 `null` 또는 `undefined`가 아닌 경우 true를 반환합니다.|

<div class="divider--half"></div>

### 날짜 유형

|이름|구문|설명|
|--- |--- |--- |
|`equals`|`(target: Date, searchVal: Date)`|`target`이 `searchVal`과 같은 경우 `true`를 반환합니다.|
|`doesNotEqual`|`(target: Date, searchVal: Date)`|`target`이 `searchVal`과 같지 않은 경우`true`를 반환합니다.|
|`before`|`(target: Date, searchVal: Date)`|`target`이 `searchVal`보다 빠른 경우`true`를 반환합니다.|
|`after`|`(target: Date, searchVal: Date)`|`target`이 `searchVal`보다 느린 경우 `true`를 반환합니다.|
|`today`|`(target: Date)`|`target`이 현재 날짜인 경우 `true`를 반환합니다.|
|`yesterday`|`(target: Date)`|`target`이 현재 날짜 이전인 경우 `true`를 반환합니다.|
|`thisMonth`|`(target: Date)`|`target`이 현재 달에 포함되는 경우 `true`를 반환합니다.|
|`lastMonth`|`(target: Date)`|`target`이 현재 달의 이전 달에 포함되는 경우 `true`를 반환합니다.|
|`nextMonth`|`(target: Date)`|`target`이 현재 달의 이후 달에 포함되는 경우 `true`를 반환합니다.|
|`thisYear`|`(target: Date)`|`target`이 현재 년도에 포함되는 경우 `true`를 반환합니다.|
|`lastYear`|`(target: Date)`|`target`이 현재 년도의 이전 년도에 포함되는 경우 `true`를 반환합니다.|
|`nextYear`|`(target: Date)`|`target`이 현재 년도의 이후 년도에 포함되는 경우 `true`를 반환합니다.|
|`null`|`(target: any)`|`target`이 `null`인 경우 true를 반환합니다.|
|`notNull`|`(target: any)`|`target`이 `null`이 아닌 경우 true를 반환합니다.|
|`empty`|`(target: any)`|`target`이 `null` 또는 `undefined`인 경우 true를 반환합니다.|
|`notEmpty`|`(target: any)`|target이 `null` 또는 `undefined`가 아닌 경우 true를 반환합니다.|

<div class="divider--half"></div>

## IgxGridRowComponent

### 게터/세터

|이름|형식|게터|세터|설명|
|--- |--- |--- |--- |--- |
|`rowData`|Array|예|아니요|데이터가 행 컴포넌트에 전달됩니다.|
|`index`|number|예|아니요|행의 인덱스입니다.|
|`cells`|QueryList|예|아니요|행 컴포넌트의 렌더링되는 셀입니다.|
|`grid`|IgxGridComponent|예|아니요|행이 포함된 그리드에 대한 참조입니다.|
|`nativeElement`|HTMLElement|예|아니요|행을 표시하는 네이티브 DOM 요소입니다. 특정 환경에서 `null` 값이 가능합니다.|

### 메소드
|구문|설명|
|--- |--- |
|`update(value: any)`|지정된 행 객체 및 데이터 소스 레코드를 전달된 값으로 업데이트합니다. 이 메소드는 `onEditDone` 이벤트를 발생합니다.|
|`delete()`|그리드의 데이터 소스에서 지정한 행을 제거합니다. 이 메소드는 `onRowDeleted` 이벤트를 발생합니다.|

<div class="divider--half"></div>

## IgxGridCellComponent

### 게터/세터

|이름|형식|게터|세터|설명|
|--- |--- |--- |--- |--- |
|`column`|IgxColumnComponent|예|아니요|셀이 속한 열입니다.|
|`row`|IgxGridRowComponent|예|아니요|셀이 속한 행입니다.|
|`value`|any|예|아니요|셀의 값입니다.|
|`rowIndex`|number|예|아니요|이 셀이 속하는 행의 인덱스입니다.|
|`columnIndex`|number|예|아니요|이 셀이 속하는 열의 인덱스입니다.|
|`grid`|IgxGridComponent|예|아니요|그리드 컴포넌트입니다.|
|`inEditMode`|boolean|예|예|편집 모드에서 셀을 가져오기/설정합니다.|
|`nativeElement`|HTMLElement|예|아니요|셀을 표시하는 네이티브 DOM 요소입니다. 특정 환경에서 `null` 값이 가능합니다.|

### 메소드

|이름|반환 유형|설명|
|--- |--- |--- |
|`update(val: any)`|void|`onEditDone` 이벤트를 발생하고 데이터 소스에서 해당 레코드를 업데이트합니다.|

### 추가 리소스
<div class="divider--half"></div>

* [가상화 및 성능](grid_virtualization.md)
* [페이징](grid_paging.md)
* [필터링](grid_filtering.md)
* [정렬](grid_sorting.md)
* [요약](grid_summaries.md)
* [열 이동](grid_column_moving.md)
* [열 핀 고정](grid_column_pinning.md)
* [열 크기 조정](grid_column_resizing.md)
* [선택](grid_selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
