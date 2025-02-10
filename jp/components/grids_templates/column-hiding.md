@@if (igxName === 'IgxGrid') {
---
title: Angular Data Grid の列非表示 - Ignite UI for Angular
_description: ユーザーが Ignite Material UI テーブルの UI で列の表示状態を変更できるようにする列非表示機能の使用方法。
_keywords: column hiding, ignite ui for angular, infragistics, 列非表示
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid の列非表示 - Ignite UI for Angular
_description: ユーザーが Ignite Material UI テーブルの UI で列の表示状態を変更できるようにする列非表示機能の使用方法。
_keywords: column hiding, ignite ui for angular, infragistics, 列非表示
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid の列非表示 - Ignite UI for Angular
_description: ユーザーが Ignite Material UI テーブルの UI で列の表示状態を変更できるようにする列非表示機能の使用方法。
_keywords: column hiding, ignite ui for angular, infragistics, 列非表示
_language: ja
---
}

# Angular @@igComponent の列非表示

Ignite UI for Angular @@igComponent は、[`IgxColumnHidingDirective`]({environment:angularApiUrl}/classes/igxcolumnhidingdirective.html) のある [`IgxColumnActionsComponent`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html) を提供し、ユーザーがユーザー インターフェイスを介して、または Angular コンポーネントを使用して列の非表示を実行できるようにします。Material UI Grid には組み込み列非表示 UI があり、これを @@igComponent のツールバーから使用して列の表示状態を変更できます。更に別のコンポーネントとして列非表示 UI を定義してページの必要な場所に配置できます。

## Angular @@igComponent 列非表示の例

@@if (igxName === 'IgxGrid') {

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-column-hiding-toolbar-sample" alt="Angular @@igComponent 列非表示の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-column-hiding-toolbar" alt="Angular @@igComponent 列非表示の例">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:570px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-hiding" alt="Angular @@igComponent 列非表示の例">
</code-view>

<div class="divider--half"></div>

}

## @@igComponent の設定
@@igComponent を作成してからデータをバインドします。列でフィルタリングとソートも有効にします。

@@if (igxName === 'IgxGrid') {
```html
<!--columnHiding.component.html-->

<igx-grid #grid id="grid" [data]="data" [autoGenerate]="false" width="100%" height="560px" columnWidth="200px" [allowFiltering]="true">
    <igx-column [field]="'ID'" dataType="string" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column [field]="'ContactName'" dataType="string" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column [field]="'ContactTitle'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'City'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'CompanyName'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Fax'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Address'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'PostalCode'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Country'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Phone'" dataType="string" [sortable]="true"></igx-column>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%"
    height="560px" columnWidth="200px" [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
    <igx-column [field]="'ID'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Title'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column [field]="'Address'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'City'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Country'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Fax'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'PostalCode'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Phone'" dataType="string" [sortable]="true"></igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata"
        [height]="'560px'" [width]="'100%'" columnWidth="200px" [allowFiltering]="true" #hGrid>

    <igx-column field="Artist" [sortable]="true" [disableHiding]="true"></igx-column>
    <igx-column field="Photo">
        <ng-template igxCell let-cell="cell">
            <div class="cell__inner_2">
                <img [src]="cell.value" class="photo" />
            </div>
        </ng-template>
    </igx-column>
    <igx-column field="Debut" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column field="Grammy Nominations" [sortable]="true" [hidden]="true"></igx-column>
    <igx-column field="Grammy Awards" [sortable]="true"></igx-column>

    <igx-row-island [key]="'Albums'" [autoGenerate]="false" #layout1 >
        <igx-column field="Album" [sortable]="true"></igx-column>
        <igx-column field="Launch Date" [sortable]="true"></igx-column>
        <igx-column field="Billboard Review" [sortable]="true"></igx-column>
        <igx-column field="US Billboard 200" [sortable]="true"></igx-column>
        <igx-row-island [key]="'Songs'" [autoGenerate]="false">
            <igx-column field="No."></igx-column>
            <igx-column field="Title"></igx-column>
            <igx-column field="Released"></igx-column>
            <igx-column field="Genre"></igx-column>
        </igx-row-island>
    </igx-row-island>

    <igx-row-island [key]="'Tours'" [autoGenerate]="false">
        <igx-column field="Tour"></igx-column>
        <igx-column field="Started on"></igx-column>
        <igx-column field="Location"></igx-column>
        <igx-column field="Headliner"></igx-column>
    </igx-row-island>

</igx-hierarchical-grid>
```
}

## ツールバーの列非表示 UI

定義済みの列非表示 UI は、@@igComponent のツールバーの [`IgxDropDownComponent`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html) 内に配置されます。列非表示の UI をこのドロップダウンを使用して表示/非表示にできます。
これには、@@igComponent の [`IgxGridToolbarActionsComponent`]({environment:angularApiUrl}/classes/igxgridtoolbaractionscomponent.html) および [`IgxGridToolbarHidingComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html) の両方を設定することだけです。ツールバーにタイトルを追加するには、[`IgxGridToolbarTitleComponent`]({environment:angularApiUrl}/classes/igxgridtoolbartitlecomponent.html) を設定し、@@igComponent のラッパーにカスタム スタイルを設定します。

@@if (igxName === 'IgxHierarchicalGrid') {
```html
<!--columnHiding.component.html-->
<div class="hgrid-sample">
    <igx-hierarchical-grid class="hgrid" [data]="localdata">
    <igx-grid-toolbar>
            <igx-grid-toolbar-title>Singers</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
    ...
 </igx-hierarchical-grid>
</div>
```
```css
/* columnHiding.component.css */
.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}
```
}

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <@@igSelector ...>
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
        ...
    </@@igSelector>
</div>
```

```css
/* columnHiding.component.css */

.grid__wrapper {
    margin: 10px;
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {

}


@@igComponent にはツールバーの列非表示 UI に便利なプロパティがあります。
`igx-grid-toolbar-hiding` の [`title`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html#title) プロパティを使用して、ツールバーのドロップダウン ボタン内に表示されるタイトルを設定します。

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <@@igSelector>
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Employees</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding #hidingActionRef title="Column Hiding"></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>
    </@@igSelector>
</div>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<div class="hgrid-sample">
    <igx-hierarchical-grid class="hgrid" [data]="localdata">
    <igx-grid-toolbar>
            <igx-grid-toolbar-title>Singers</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding #hidingActionRef title="Column Hiding"></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
 </igx-hierarchical-grid>
</div>
```
}

IgxGridToolbarHidingComponent の [`columnsAreaMaxHeight`]({environment:angularApiUrl}/classes/igxgridtoolbarhidingcomponent.html#columnsAreaMaxHeight) プロパティを使用して、列操作を含む領域の最大高さを設定できます。このように、多くの操作があり、それらのすべてがコンテナーに収まらない場合は、スクロールバーが表示され、必要な操作にスクロールできます。

```typescript
// columnHiding.component.ts

public ngAfterViewInit() {
    this.hidingActionRef.columnsAreaMaxHeight = "200px";
}
```

列非表示 UI の拡張機能セットを使用するために、IgxColumnActionsComponent の [`columnsAreaMaxHeight `]({environment:angularApiUrl}/classes/IgxColumnActionsComponent.html#columnsAreaMaxHeight) プロパティを使用できます。アプリケーションの要件に基づいて使用できます。

このトピックのはじめにあるコードの結果は、列非表示の例セクションで確認できます。

@@if (igxName !== 'IgxHierarchicalGrid') {

## カスタム列の非表示 UI

[`IgxColumnActionsComponent`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html) を手動で定義し、[`IgxColumnHidingDirective`]({environment:angularApiUrl}/classes/igxcolumnhidingdirective.html) を追加して、その目的がわかるようにして、ページの任意の場所に配置します。ただし、最初に、`IgxColumnActionsModule` をインポートする必要があります。

```typescript
// app.module.ts

...
import {
    ...
    IgxColumnActionsModule 
} from 'igniteui-angular';
// import { ..., IgxColumnActionsModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxColumnActionsModule],
})
export class AppModule {}
```

次に [`IgxColumnActionsComponent`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html) を作成します。アプリケーションでグリッドの隣に配置します。これはツールバーの列非表示 UI と異なります。ツールバーの場合、コンポーネントはドロップダウンに含まれます。コンポーネントの [`columns`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html#columns) プロパティをグリッドの列に設定し、更にカスタム スタイルも追加します。

@@if (igxName === 'IgxGrid') {
```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-actions igxColumnHiding #columnHidingUI [columns]="@@igObjectRef.columns">
    </igx-column-actions>
</div>
<div class="gridContainer">
    <@@igSelector #@@igObjectRef [data]="data" [autoGenerate]="false" width="100%" height="500px" columnWidth="200px">
        ...
    </@@igSelector>
</div>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-actions igxColumnHiding #columnHidingUI [columns]="@@igObjectRef.columns">
    </igx-column-actions>
</div>
<div class="gridContainer">
    <@@igSelector #@@igObjectRef [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" width="100%" height="500px" columnWidth="200px">
        ...
    </@@igSelector>
</div>
```
}

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
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
    igx-column-actions {
        height: 460px;
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
}

### タイトルおよびフィルター プロンプトの追加

列非表示コンポーネント機能を拡張するために [`title`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html#title) および [`filterColumnsPrompt`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html#filterColumnsPrompt) プロパティを設定します。[`title`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html#title) は一番上に表示され、[`filterColumnsPrompt`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html#filterColumnsPrompt) は列非表示 UI のフィルター入力に表示されるプロンプト テキストです。

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-actions igxColumnHiding #columnHidingUI [columns]="@@igObjectRef.columns"
                       title="Column Hiding" filterColumnsPrompt="Type here to search">
    </igx-column-actions>
</div>
```

### 列の表示順序オプションの追加

列非表示 UI で列の表示順序を選択する機能も追加します。このため、[`columnDisplayOrder`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html#columnDisplayOrder) プロパティを使用します。列挙型のプロパティで、以下のオプションがあります。

- **Alphabetical** (列をアルファベット順でソート)
- **DisplayOrder** (列をグリッドで表示される順序によってソート)

このオプションにラジオ ボタンを追加します。[**IgxRadio**](../radio-button.md) モジュールを追加します。

```typescript
// app.module.ts

...
import {
    ...
    IgxRadioModule    
} from 'igniteui-angular';
// import { ..., IgxRadioModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxRadioModule],    
})
export class AppModule {}
```

両方のラジオ ボタンの [`checked`]({environment:angularApiUrl}/classes/igxradiocomponent.html#checked) プロパティを異なる条件に個々にバインドして、click イベントを処理します。

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

### 列の非表示の無効化
列の [`disableHiding`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablehiding) プロパティを true に設定すると、ユーザーが列非表示 UI によって列を非表示にできません。

@@if (igxName === 'IgxGrid') {
```html
<!--columnHiding.component.html-->

<div class="gridContainer">
    <igx-grid ... >
        ...
        <igx-column [field]="'ContactName'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column [field]="'ContactTitle'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        ...
    </igx-grid>
</div>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->

<div class="gridContainer">
    <igx-tree-grid ... >
        ...
        <igx-column [field]="'Name'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        <igx-column [field]="'Title'" dataType="string" [sortable]="true" [disableHiding]="true"></igx-column>
        ...
    </igx-tree-grid>
</div>
```
}

列非表示 UI コンポーネントは以下のようになります。

@@if (igxName === 'IgxGrid') {

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-column-hiding-sample" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-column-hiding" >
</code-view>

<div class="divider--half"></div>
}
}

## スタイル設定

列操作コンポーネントのスタイル設定を開始するには、すべてのテーマ関数とコンポーネント ミックスインが存在するインデックス ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単なアプローチを使用して、[`column-actions-theme`]({environment:sassApiUrl}/index.html#function-column-actions-theme) を拡張し、`$title-color` および `$background-color` パラメーターを受け取る新しいテーマを作成します。

```scss
$custom-column-actions-theme: column-actions-theme(
  $background-color: #292826,
  $title-color: #ffcd0f
);
```

ご覧のように `column-actions-theme` は列操作コンテナーの色のみを制御しますが、ボタン、チェックボックス、内部の入力グループには影響しません。ボタンのスタイルも設定したい場合、新しいボタン テーマを作成します。

```scss
$custom-button: button-theme(
  $foreground: #292826, 
  $disabled-foreground: rgba(255, 255, 255, .54)
);
```

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/index.html#function-palette) および [`color`]({environment:sassApiUrl}/index.html#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](../themes/sass/palettes.md)のトピックをご覧ください。

この例では、フラットボタンのテキストの色とボタンの無効な色のみを変更しましたが、[`button-theme`]({environment:sassApiUrl}/index.html#function-button-theme) の方がより多くの方法を提供します。ボタンのスタイルを制御するパラメーター。

最後にそれぞれのテーマを持つコンポーネント ミックスインを**含める**ことです。 

```scss
@include css-vars($custom-column-actions-theme);

.igx-column-actions {
  @include css-vars($custom-button);
}
```

>[!NOTE]
>作成した **button-theme** を `.igx-column-actions` 内に含めて、列を非表示にするボタンのみにスタイルを設定します。 そうでない場合は、グリッド内の他のボタンも影響を受けます。

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、列アクション コンポーネント内のコンポーネント (ボタン、チェックボックスなど) に対して `::ng-deep` を使用してこのカプセル化を`解除する`必要があります。

```scss
@include css-vars($custom-column-actions-theme);

:host {
  ::ng-deep {
    .igx-column-actions {
      @include css-vars($custom-button);
    }
  }
}
```

### デモ

@@if (igxName === 'IgxGrid') {

<code-view style="height:600px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-column-hiding-style" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height:600px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-column-hiding-style" >
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height:570px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-column-hiding-style" >
</code-view>

<div class="divider--half"></div>
}

## API リファレンス

@@if (igxName !== 'IgxHierarchicalGrid') {
このトピックでは、@@igComponent のツールバーの定義済みの列非表示 UI の使用方法や別のコンポーネントとして定義する方法について説明しました。その他の列順序から選択する機能を提供する UI を実装し、カスタム タイトルおよびフィルター プロンプト テキストを設定しました。[**IgxRadio**](../radio-button.md) ボタンなどその他の Ignite UI for Angular コンポーネントも使用しています。
}
@@if (igxName === 'IgxHierarchicalGrid') {
このトピックでは、@@igComponent のツールバーの定義済みの列非表示 UI の使用方法について学びました。
}

以下は、列非表示 UI のその他の API です。

* [IgxColumnActionsComponent]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html)
* [IgxColumnActionsComponent スタイル]({environment:sassApiUrl}/index.html#function-column-actions-theme)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) プロパティ:
* [hiddenColumnsCount]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddenColumnsCount)

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) プロパティ:
* [disableHiding]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disableHiding)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) プロパティ:
* [showProgress]({environment:angularApiUrl}/classes/IgxGridToolbarComponent.html#showProgress)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) components:
* [IgxGridToolbarTitleComponent]({environment:angularApiUrl}/classes/igxgridtoolbartitlecomponent.html)
* [IgxGridToolbarActionsComponent]({environment:angularApiUrl}/classes/igxgridtoolbaractionscomponent.html)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) メソッド:

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) イベント:
* [columnVisibilityChanged]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnVisibilityChanged)

[IgxRadioComponent]({environment:angularApiUrl}/classes/igxradiocomponent.html)

スタイル:

* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-grid-theme)
* [IgxRadioComponent スタイル]({environment:sassApiUrl}/index.html#function-radio-theme)

## その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [フィルタリング](filtering.md)
* [ページング](paging.md)
* [並び替え](sorting.md)
* [集計](summaries.md)
* [列のピン固定](column-pinning.md)
* [列のサイズ変更](column-resizing.md)
* [選択](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [検索](search.md)}

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
