---
title: 데이터 그리드 컴포넌트
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid
_language: kr
---

## 데이터 그리드

<p class="highlight">Ignite UI for Angular 데이터 그리드를 사용하여 표 데이터를 표시하고 조작합니다. 최소한의 코딩 또는 구성으로 데이터를 신속하게 바인딩합니다. 기능에는 필터링, 정렬, 페이징, 템플릿, 열 이동, 데이터 편집 및 업데이트 기능이 있습니다. 사용자 조작을 간단히 이해하고 프로그래밍 방식으로 제어할 수 있습니다.</p>

### 데모

<div class="sample-container loading" style="height:700px">
    <iframe id="grid-sample-iframe" src='{environment:lobDemosBaseUrl}/grid/grid' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>
<div class="divider--half"></div>

### 의존성

그리드는 `NgModule`로 내보내기가 되기 때문에 애플리케이션에서 `IgxGridModule`을 `AppModule`로 가져오기만 하면 됩니다:

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

`IgxGridModule`의 각 컴포넌트, 지시문 및 도우미 클래스는 하위 패키지 또는 igniteui-angular의 기본 번들을 통해 가져올 수 있습니다. 그리드를 인스턴스화하고 사용하기 위해 모든 항목을 가져올 필요는 없지만 일반적으로 그리드 API의 일부인 유형을 선언할 때 가져옵니다(또는 편집기가 자동으로 가져옵니다).

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

**id** 속성은 문자열 값이며 제공되지 않으면 자동 생성되는 그리드의 고유 식별자이며, **data**는 그리드를 로컬 데이터에 바인딩합니다.

[`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autogenerate) 속성은 데이터 소스 필드를 기반으로 **igx-grid**에 [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)를 자동 생성하도록 합니다. 또한, 가능한 경우 열에 적합한 데이터 유형을 추론합니다. 그렇지 않으면 개발자가 데이터 소스 필드에 대한 열과 매핑을 명시적으로 정의해야 합니다.

### 스타일 구성
> [!NOTE]
> [**IgxGridComponent**]({environment:angularApiUrl}/classes/igxgridcomponent.html)는 **프리픽스 없이는 IE에서 지원되지 않는** **css 그리드 레이아웃**을 사용하므로 결과적으로 제대로 렌더링되지 않습니다.

[**Angular**](https://angular.io/)의 대부분의 스타일은 [Autoprefixer](https://www.npmjs.com/package/autoprefixer) 플러그인으로 인해 암시적으로 프리픽스가 됩니다. 

단, **그리드 레이아웃**의 프리픽스의 경우, [Autoprefixer](https://www.npmjs.com/package/autoprefixer) **그리드 속성**을 주석 `/* autoprefixer grid:on */`에서 활성화해야 합니다.

작업을 쉽게 하기 위해 주석을 `src/styles.scss` 파일에 적용합니다.

 ```scss
 // src/styles.scss
    @import '~igniteui-angular/lib/core/styles/themes/index';
    @include igx-core();
    @include igx-theme($default-palette);

    /* autoprefixer grid:on */
 ...
 ``` 

### 열 구성

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)는 그리드의 [`columns`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columns) 집합을 정의하고 **정렬**, **페이징** 등의 기능을 열 별로 활성화하는데 사용됩니다. 셀, 헤더, 푸터 템플릿도 사용할 수 있습니다.

[`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autogenerate) 속성을 해제하고 마크업에서 열 집합을 정의합니다:

```html
<igx-grid #grid1 [data]="data | async" [autoGenerate]="false" [paging]="true" [perPage]="6" (onColumnInit)="initColumns($event)"
    (onSelection)="selectCell($event)" [allowFiltering]="true">
    <igx-column field="Name" [sortable]="true" header=" "></igx-column>
    <igx-column field="AthleteNumber" [sortable]="true" header="Athlete number" [filterable]="false"></igx-column>
    <igx-column field="TrackProgress" header="Track progress" [filterable]="false">
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

`igxCell` 은 제공된 템플릿을 열의 모든 셀에 적용합니다.템플릿에 제공된 컨텍스트 객체는 암시적으로 제공된 셀 값과 셀 객체 자체로 구성됩니다.아래 예와 같이 콘텐츠에 따라 셀이 증가할 수 있는 템플릿을 정의하는데 사용할 수 있습니다.

```html
...
<igx-column field="Name">
    <ng-template igxCell let-value>
        {{ value | titlecase }}
    </ng-template>
</igx-column>
...
```

위의 부분에서는 암시적으로 제공된 셀 값에 대한 참조를 "사용"합니다. 이것은 일부 데이터를 표시하고 셀 값에 대해 사용자 스타일이나 파이프 변환을 적용하려는 경우에 충분합니다. 단, 다음과 같이 [`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) 객체 자체를 사용하는 것이 더 유용합니다:

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
[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html)의 [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) 속성을 `true`로 설정해야 합니다.

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

템플릿에 사용할 수 있는 제공된 속성에 익숙해 지려면 [`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)의 API를 확인하십시오.

각 열 템플릿은 [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) 객체 자체를 통해 언제든지 프로그래밍 방식으로 변경할 수 있습니다. 예를 들면, 아래 코드에서 사용자 데이터에 대해 2개의 템플릿을 선언했습니다. TypeScript 코드에서 템플릿 자체에 대한 참조를 확인한 후 일부 조건에 따라 애플리케이션의 해당 열에 적합한 템플릿을 렌더링합니다.

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

열 속성은 열이 그리드에서 초기화될 때 생성되는 [`initColumns`]({environment:angularApiUrl}/classes/igxgridcomponent.html#oncolumninit) 이벤트 코드에서 설정할 수도 있습니다.

```typescript
public initColumns(column: IgxGridColumn) {
    const column: IgxColumnComponent = column;
    if (column.field === 'ProductName') {
        column.sortable = true;
        column.editable = true;
    }
}
```

위의 코드는 **ProductName** 열을 정렬, 편집할 수 있도록 하며 해당 기능 UI를 인스턴스화합니다(예: 편집용 입력 등).

### 데이터 구조

[IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)는 **플랫 데이터**만 가져옵니다. 렌더링에 특정 데이터 구조는 다음 형식으로 됩니다: 

```typescript
const OBJECT_ARRAY = [{
        ObjectKey1: value1,
        ObjectKey2: value2,
        .
        .
        .
        ObjectKeyN: valueN
    },
    {
        ObjectKey1: value1,
        ObjectKey2: value2,
        .
        .
        .
        ObjectKeyN: valueN
    },
    .
    .
    .,
    {
        ObjectKey1: value1,
        ObjectKey2: value2,
        .
        .
        .
        ObjectKeyN: valueN 
    }];

```
>[!경고]
>**키 값에는 배열이나 다른 객체가 없어야 합니다**.

>[autoGenerate]({environment:angularApiUrl}/classes/igxgridcomponent.html#autogenerate) 열을 사용하는 경우에는 **데이터 키가 동일해야 합니다.** 

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

모든 Angular 서비스 정의에서 [필수 요소](https://angular.io/guide/dependency-injection)인 `Injectable` 데코레이터를 가져옵니다. `HttpClient`는 백엔드 서비스와 통신할 수 있는 기능을 제공합니다. 그리드 컴포넌트에서 인용하게 될 일부 결과의 `Observable`을 반환합니다.

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

이 서비스 자체는 하나의 메소드로 구성되어 매우 간단합니다: `fetchData`는 `Observable<NorthwindRecord[]>`를 반환합니다. 임의의 이유(서버를 사용할 수 없는 경우, 네트워크 오류 등)로 요청이 실패하는 경우, `HttpClient`는 오류를 반환합니다. `catchError` 연산자를 사용하여 실패한 Observable을 인터셉트하여 오류 처리기로 전달합니다. 오류 처리기는 오류를 기록하고 유효한 값을 반환합니다.

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

**참고**: 아래 코드에서 왜 서비스에 가입하기 전에 records 속성을 빈 배열로 설정하는지 궁금할 수 있습니다. Http 요청은 비동기이며 완료될 때까지 records 속성은 undefined이며 그리드를 바인딩하려고 하면 오류가 발생합니다. 기본값을 초기화하거나 `BehaviorSubject`를 사용해야 합니다.

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

**참고**: 그리드 [`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autogenerate) 속성은 원격 데이터에 바인딩할 때 피하는 것이 좋습니다. 데이터를 검사하고 적절한 열을 생성하기 위해 데이터를 사용 가능하도록 해야 합니다. 일반적으로 원격 서비스가 응답하기 전까지 그리드는 오류가 발생합니다. 원격 서비스에 바인딩할 때 [`autoGenerate`]({environment:angularApiUrl}/classes/igxgridcomponent.html#autogenerate)를 사용 가능하도록 하는 것은 향후 버전에 추가될 것입니다.

### 상태 지속성

Achieving a state persistence framework is easier than ever by using the new built-in [`IgxGridState`](state-persistence.md) directive.

### 키보드 탐색
키보드 탐색은 모든 그리드에서 기본적으로 사용할 수 있으며 최종 사용자를 위해 가능한 많은 기능과 시나리오를 포함하도록 하고 있습니다. 특정 셀에 초점을 맞추고 다음 키 조합 중 하나를 누른 경우 설명된 동작이 실행됩니다:

 - `위 화살표` - 한 셀 위로 이동(줄 바꿈 없음);
 - `아래 화살표` - 한 셀 아래로 이동(줄 바꿈 없음);
 - `왼쪽 화살표` - 한 셀 왼쪽으로 이동(라인 간에 줄 바꿈 없음);
 - `오른쪽 화살표` - 한 셀 오른쪽으로 이동(라인 간에 줄 바꿈 없음);
 - `Ctrl + 위 화살표` - 현재 열의 첫 번째 셀로 이동;
 - `Ctrl + 아래 화살표` - 현재 열의 마지막 셀로 이동;
 - `Ctrl + 왼쪽 화살표` -  행의 가장 왼쪽 셀로 이동;
 - `Home` - 행의 가장 왼쪽 셀로 이동;
 - `Ctrl + Home` - 그리드의 왼쪽 상단 셀로 이동;
 - `Ctrl + 오른쪽 화살표` -  행의 가장 오른쪽 셀로 이동;
 - `End` - 행의 가장 오른쪽 셀로 이동;
 - `Ctrl + End` - 그리드의 오른쪽 하단 셀로 이동;
 - `Page Up` - 한 페이지(뷰 포트) 위로 스크롤;
 - `Page Down` -  한 페이지(뷰 포트) 아래로 스크롤;
 - `Enter` - 편집 모드로 들어감;
 - `F2` - 편집 모드로 들어감;
 - `Esc` - 편집 모드를 종료함;
 - `Tab` - 순차적으로 포커스를 행의 다음 셀 위로 이동하고, 마지막 셀에 도달하면 다음 행으로 이동합니다; 다음 행이 그룹 행인 경우에는 전체 행이 포커스되고, 데이터 행인 경우에는 첫 번째 셀 위로 포커스를 이동합니다; 셀이 편집 모드인 경우에는 행의 다음 편집 가능한 셀로 이동하고, 편집 가능한 가장 오른쪽 셀에서 `CANCEL` 및 `DONE` 버튼으로 이동하고, `DONE` 버튼으로 현재 편집된 행 안의 편집 가능한 가장 왼쪽 셀로 이동합니다;
 - `Shift + Tab` - 순차적으로 행의 이전 셀로 포커스를 이동하고, 첫 번째 셀에 도달하면 포커스를 이전 행으로 이동합니다. 이전 행이 그룹 행인 경우에는 전체 행이 포커스되고, 데이터 행인 경우에는 행의 마지막 셀에 포커스됩니다; 셀이 편집 모드인 경우에는 행의 다음 편집 가능한 셀로 이동하고, 편집 가능한 가장 오른쪽 셀에서 `CANCEL` 및 `DONE` 버튼으로 이동하고, `DONE` 버튼으로 현재 편집된 행 안의 편집 가능한 가장 왼쪽 셀로 이동합니다;
 - `Space` -  행을 선택할 수 있는 경우에는 스페이스 키를 누르면 행 선택을 트리거합니다;
 - GroupRow 위에서 `Alt + 왼쪽 화살표` - 행이 아직 축소되지 않은 경우에는 그룹 행 콘텐츠를 축소합니다;
 - GroupRow 위에서 `Alt + 오른쪽 화살표` - 행이 아직 확장되지 않은 경우에는 그룹 행 콘텐츠를 확장합니다;
 - 마우스 `휠` -  포커스 요소를 흐리게 합니다;

### 실시간 업데이트 데모

이 샘플은 실시간 데이터에 바인딩된 `igxGrid`를 보여줍니다. 

<div class="sample-container loading" style="height:915px">
    <iframe id="grid-sample-finjs-iframe" data-src='{environment:lobDemosBaseUrl}/grid-finjs' width="100%" height="100%" seamless="" frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-finjs-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">STACKBLITZ 에서 보기</button>
</div>

### Sizing
See the [Grid Sizing](sizing.md) topic.

## 알려진 제한 사항

|제한 사항|설명|
|--- |--- |
|`percentage` 및 `px`로 설정된 열 너비|열 너비에 `%`와 `px`를 조합하는 것은 지원하지 않습니다.|
|`number` 형식의 열을 필터링할 경우|필터링 입력에 `number`와 다른 값을 입력한 경우, 캐스트가 올바르지 않아 `NaN`이 반환됩니다.|
|그리드 [`너비`]({environment:angularApiUrl}/classes/igxgridcomponent.html#width)는 열 너비에 따라 달라지지 않습니다| 모든 열의 [`너비`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#width)는 그리드 자체의 스패닝을 결정하지 않습니다. 상위 컨테이너 크기 또는 정의된 그리드 [`너비`]({environment:angularApiUrl}/classes/igxgridcomponent.html#width)에 따라 결정됩니다.|
|상위 컨테이너에 중첩된 그리드| 그리드 [`너비`]({environment:angularApiUrl}/classes/igxgridcomponent.html#width)가 설정되지 않고 크기가 정의된 상위 컨테이너에 배치되면 그리드가 이 컨테이너에 스팬됩니다.|
|그리드 `OnPush` ChangeDetectionStrategy|그리드에서 `ChangeDetectionStrategy.OnPush`를 처리하고 사용자 정의가 표시될 때마다 그리드에 변경 사항이 통지됩니다.|
| 열에는 허용 가능한 최소 열 너비가 있습니다. [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity) 옵션에 따라 다음과 같이 표시됩니다: <br/> “소”: 24px <br/> “중”: 32px <br/> “대”: 48px| 허용된 최소 너비보다 작게 설정된 경우, 렌더링된 요소에 영향을 주지 않습니다. 해당 [`displayDensity`]({environment:angularApiUrl}/classes/igxgridcomponent.html#displaydensity)의 최소 허용 너비로 렌더링합니다. 수평 가상화는 예기치 않은 동작이 발생할 수 있으므로 지원되지 않습니다.
| 행 높이는 현재 뷰에 렌더링되지 않은 셀의 높이에 영향을 받지 않습니다. | 가상화로 인해 뷰에 없는 사용자 템플릿(셀 높이를 변경한)을 가진 열은 행 높이에 영향을 주지 않습니다. 행 높이는 관련된 열이 뷰에서 스크롤되는 동안에만 영향을 받습니다.

> [!NOTE]
> `igxGrid` uses `igxForOf` directive internally hence all `igxForOf` limitations are valid for `igxGrid`. For more details see [igxForOf Known Issues](../for-of.html#known-limitations) section.

<div class="divider--half"></div>

## API 참조
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridComponent 스타일]({environment:sassApiUrl}/#function-igx-grid-theme)
* [IgxColumnComponent]({environment:angularApiUrl}/classes/igxcolumncomponent.html)
* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)

## 추가 리소스
<div class="divider--half"></div>

* [Grid Sizing](sizing.md)
* [가상화 및 성능](virtualization.md)
* [페이징](paging.md)
* [필터링](filtering.md)
* [정렬](sorting.md)
* [요약](summaries.md)
* [열 이동](column-moving.md)
* [열 핀 고정](column_pinning.md)
* [열 크기 조정](column-resizing.md)
* [선택](selection.md)

<div class="divider--half"></div>
커뮤니티는 활동적이고 새로운 아이디어를 항상 환영합니다.

* [Ignite UI for Angular **포럼**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
