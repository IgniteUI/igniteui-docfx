---
title: 列の非表示 - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular 列非表示機能を使用すると、データ グリッドの定義済み UI で列を非表示/表示できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高パフォーマンス Grid, Grid 列非表示, 列非表示, Angular Grid 列非表示, Angular 列非表示
---

### グリッドの列非表示

Ignite UI for Angular Data Grid に**列非表示**機能があります。この機能は **UI** で列の表示/非表示オプションを提供します。Data Grid に定義済みの列非表示 UI があります。この UI はグリッドのツールバーからアクセスできます。また、列非表示 UI を別のコンポーネントとして定義して、位置を変更することもできます。

#### デモ

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-column-hiding-toolbar-sample-iframe" src='{environment:demosBaseUrl}/grid-column-hiding-toolbar-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-column-hiding-toolbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>

### グリッドの設定
グリッドを作成してからデータをバインドします。 列でフィルタリングおよび並べ替えも有効にします。

```html
<!--columnHiding.component.html-->

<igx-grid #grid id="grid" [data]="data" [autoGenerate]="false" width="100%" height="560px" columnWidth="200px">
    <igx-column [field]="'ID'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'ContactName'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'City'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'Fax'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'Address'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'PostalCode'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'Country'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
    <igx-column [field]="'Phone'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
</igx-grid>
```

### ツールバーの列非表示 UI

定義済みの列非表示 UI はグリッドのツールバーで `IgxDropDownComponent` に配置されます。列非表示の UI をこのドロップダウンを使用して表示/非表示にできます。
このため、グリッドの `showToolbar` および `columnHiding` プロパティを true に設定します。ツールバーが有効でない場合、`columnHiding` プロパティが有効かどうかは影響しません。
ツールバーにタイトルを追加するには、`toolbarTitle` プロパティを設定し、グリッドのラッパーにカスタム スタイルを設定します。

```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <igx-grid ... [showToolbar]="true" [columnHiding]="true" toolbarTitle="Employees">
        ...
    </igx-grid>
</div>
```

```css
/* columnHiding.component.css */

.grid__wrapper {
    margin: 20px 150px 0px 150px;
}

```

グリッドのツールバーの列非表示 UI に便利なプロパティがあります。
`columnHidingTitle` および `hiddenColumnsText` プロパティを使用して、ツールバーのドロップダウン ボタンに表示されるタイトルおよびテキストを設定します。`hiddenColumnsText` は列のカウント数の右に表示されます。カウントはデフォルトでボタンに含まれます。
`hiddenColumnsText` プロパティはローカライズにも使用できます。

```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <igx-grid ... [showToolbar]="true" [columnHiding]="true" toolbarTitle="Employees" columnHidingTitle="Column Hiding" hiddenColumnsText="Hidden">
        ...
    </igx-grid>
</div>
```

列非表示 UI の `columnsAreaMaxHeight` プロパティを使用すると、列を含む領域の最大の高さを設定します。列が多すぎてコンテナにすべて収まらない場合、スクロールバーが表示されます。スクロールバーを使用して任意の列に移動できます。検索入力は上にピン固定されて、[すべて表示]/[すべて非表示] ボタンが下にピン固定されます。

```typescript
// columnHiding.component.ts

public ngAfterViewInit() {        
    this.grid.toolbar.columnHidingUI.columnsAreaMaxHeight = "200px";
}
```

列非表示 UI の機能セットを使用するには、列非表示 UI コンポーネントへの参照を返すツールバーの `columnHidingUI` プロパティを使用します。相対する API にアクセスし、アプリケーションの要件に基づいて使用できます。

このトピックのはじめにあるコードの結果を「[列非表示デモ](#demo)」セクションで確認できます。

### カスタム列の非表示 UI

**IgxColumnHidingComponent** を手動的に定義してページに配置する方法の手順を説明します。最初は、コンポーネントのインスタンスをマークアップに作成します。このために **IgxColumnHiding** モジュールを追加します。

```typescript
// app.module.ts

...
import {
    ...
    IgxColumnHidingModule 
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxColumnHidingModule],
})
export class AppModule {}
```

IgxColumnHidingComponent を作成します。アプリケーションでグリッドの隣に配置します。これはツールバーの列非表示 UI と異なります。ツールバーの場合、コンポーネントはドロップダウンに含まれます。コンポーネントの `columns` プロパティをグリッドの列に設定し、更にカスタム スタイルも追加します。

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-hiding #columnHidingUI id="columnHidingUI" [columns]="grid.columns">
    </igx-column-hiding>
</div>
<div class="gridContainer">
    <igx-grid #grid id="grid" [data]="data" [autoGenerate]="false" width="100%" height="500px" columnWidth="200px">
        ...
    </igx-grid>
</div>
```


```css
/* columnHiding.component.css */

.grid__wrapper {
    margin: 15px;
    display: flex;
    flex-direction: row;
}

.columnHidingContainer {
    min-width: 250px;
    height: 560px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px gray;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 2px rgba(50, 50, 50, 0.25);
    igx-column-hiding {
        height: 100%;
    }
}

.columnsOrderOptionsContainer {
    margin-top: 20px;
    margin-bottom: 20px;
}

.gridContainer {
    width: 100%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;    
}
```

#### タイトルおよびフィルター プロンプトの追加

列非表示コンポーネント機能を拡張するために `title` および `filterColumnsPrompt` プロパティを設定します。`title` は一番上に表示され、`filterColumnsPrompt` は列非表示 UI のフィルター入力に表示されるプロンプト テキストです。

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-hiding #columnHidingUI [columns]="grid.columns"
                       title="Column Hiding" filterColumnsPrompt="Type here to search">
    </igx-column-hiding>
</div>
```

#### 列の表示順序オプションの追加

列非表示 UI で列の表示順序を選択する機能も追加します。このため、`columnDisplayOrder` プロパティを使用します。列挙型のプロパティで、以下のオプションがあります。

- **Alphabetical** (列をアルファベット順で並べ替え)
- **DisplayOrder** (列をグリッドで表示される順序によって並べ替え)

このオプションにラジオ ボタンを追加します。[**IgxRadio**](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/radio_button.html) モジュールを追加します。 

```typescript
// app.module.ts

...
import {
    ...
    IgxRadioModule    
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxRadioModule],    
})
export class AppModule {}
```

ColumnDisplayOrder 列挙体と同じ型である enum プロパティを作成し、両方のラジオ ボタンの **checked** プロパティを条件にバインドして、click イベントを処理します。

```typescript
// columnHiding.component.ts

public columnsOrder = ColumnDisplayOrder;
```

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    ...
    <div class="columnsOrderOptionsContainer">
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'Alphabetical'"
                   (click)="columnHidingUI.columnDisplayOrder = 'Alphabetical'">
            Alphabetical order
        </igx-radio>
        <igx-radio [checked]="columnHidingUI.columnDisplayOrder === 'DisplayOrder'"
                   (click)="columnHidingUI.columnDisplayOrder = 'DisplayOrder'">
            Display order
        </igx-radio>
    </div>
</div>
```

#### 列の非表示の無効化
列の `disableHiding` プロパティを true に設定すると、ユーザーが列非表示 UI によって列を非表示にできません。

```html
<!--columnHiding.component.html-->

<div class="gridContainer">
    <igx-grid ... >
        ...
        <igx-column [field]="'ContactName'" dataType="string" [filterable]="true" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column [field]="'ContactTitle'" dataType="string" [filterable]="true" [sortable]="true" [disableHiding]="true"></igx-column>
        ...
    </igx-grid>
</div>
```

列非表示 UI コンポーネントは以下のようになります。

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-column-hiding-sample-iframe" src='{environment:demosBaseUrl}/grid-column-hiding-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>
<div class="divider--half"></div>


### API まとめ

このトピックでは、グリッドのツールバーの定義済みの列非表示 UI の使用方法を説明し、別のコンポーネントとして定義する方法についても説明しました。その他の列順序から選択する機能を提供する UI を実装し、カスタム タイトルおよびフィルター プロンプト テキストを設定しました。**IgxRadio** ボタンのその他の Ignite UI for Angular コンポーネントも使用しています。
以下は、列非表示 UI のその他の API です。


#### プロパティ
以下のプロパティは **IgxColumnHidingComponent**　で使用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `columns` | Object Array | 操作されるグリッド列の配列。 |
| `columnDisplayOrder` | ColumnDisplayOrder 列挙体 | 列がアルファベット順で並べ替えるか、グリッドの順序で表示されるかどうか。|
| `title` | string | 表示されるタイトル。 |
| `filterColumnsPrompt` | string | フィルター入力に表示されるプロンプト。 |
| `filterCriteria` | string | 列リストのフィルター値。 |
| `disableHideAll` | boolean | [Hide All] ボタンが無効にされるかどうかを返します。 |
| `disableShowAll` | boolean | [Show All] ボタンが無効にされるかどうかを返します。 |
| `showAllText` | string | [Show All] ボタンに表示されるテキスト。 |
| `hideAllText` | string | [Hide All] ボタンに表示されるテキスト。 |
| `columnsAreaMaxHeight` | string | 列を含む列非表示 UI の領域の最大の高さ。 |

<div class="divider"></div>

以下のプロパティは **IgxColumnComponent** で使用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `columnHiding` | boolean | グリッドの定義済みの列非表示 UI が有効かどうか。 |
| `columnHidingTitle` | string | 定義済みの列非表示 UI に表示されるタイトル。 |
| `hiddenColumnsCount` | number | 非表示列の数。 |
| `hiddenColumnsText` | string | 定義済みの列非表示 UI のトグル ボタンに表示されるテキスト。 |

<div class="divider"></div>

以下のプロパティは **IgxColumnComponent** で使用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `disableHiding` | boolean | 列が列非表示 UI によって非表示にできないかどうかを決定します。 |

<div class="divider"></div>

以下のプロパティは **IgxGridToolbarComponent** で使用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `columnHidingUI` | IgxColumnHidingComponent | 定義済みの列非表示 UI コンポーネントへの参照。 |
| `columnHidingDropdown` | IgxDropDownComponent | 定義済みの列非表示 UI コンポーネントを含むドロップダウンへの参照。 |

<div class="divider"></div>


#### メソッド
以下のメソッドは **IgxColumnHidingComponent** で使用できます。
| 名前 | 型 | パラメーター |説明 |
| :--- | :--- | :--- | :--- |
| `showAllColumns` | void | N/A | グリッドの列をすべて表示します。 |
| `hideAllColumns` | void | N/A | グリッドの列をすべて非表示します。 |

<div class="divider"></div>

以下のメソッドは **IgxGridToolbarComponent** で使用できます。
| 名前 | 型 | パラメーター |説明 |
| :--- | :--- | :--- | :--- |
| `toggleColumnHidingUI` | void | N/A | 定義済みの列非表示 UI を表示/非表示します。 |

<div class="divider"></div>

#### 出力
以下の出力は **IgxColumnHidingComponent** で使用できます。
|名前|説明|
|--- |--- |
| `onColumnVisibilityChanged` | 列の表示状態を変更するときに発生されます。Args: `{ column: any, newValue: boolean }` |

<div class="divider"></div>

以下の出力は **IgxGridComponent** で使用できます。
|名前|説明|
|--- |--- |
| `onColumnVisibilityChanged` | 列の表示状態を変更するときに発生されます。Args: `{ column: any, newValue: boolean }` |


### その他のリソース
<div class="divider--half"></div>

* [Grid の概要](grid.md)
* [仮想化とパフォーマンス](grid_virtualization.md)
* [フィルタリング](grid_filtering.md)
* [ページング](grid_paging.md)
* [並べ替え](grid_sorting.md)
* [集計](grid_summaries.md)
* [列のピン固定](grid_column_pinning.md)
* [列のサイズ変更](grid_column_resizing.md)
* [選択](grid_selection.md)
* [検索](grid_search.md)
* [Excel へエクスポート](exporter_excel.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
