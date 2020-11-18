@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 列非表示 | Ignite UI for Angular | インフラジスティックス
_description: ユーザーが Ignite Material UI テーブルの UI で列の表示状態を変更できるようにする列非表示機能の使用方法。
_keywords: column hiding, ignite ui for angular, infragistics, 列非表示
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid 列非表示 | Ignite UI for Angular | インフラジスティックス
_description: ユーザーが Ignite Material UI テーブルの UI で列の表示状態を変更できるようにする列非表示機能の使用方法。
_keywords: column hiding, ignite ui for angular, infragistics, 列非表示
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid 列非表示 | Ignite UI for Angular | インフラジスティックス
_description: ユーザーが Ignite Material UI テーブルの UI で列の表示状態を変更できるようにする列非表示機能の使用方法。
_keywords: column hiding, ignite ui for angular, infragistics, 列非表示
_language: ja
---
}

# @@igComponent の列非表示

Ignite UI for Angular @@igComponent は、[`IgxColumnHidingDirective`]({environment:angularApiUrl}/classes/igxcolumnhidingdirective.html) のある [`IgxColumnActionsComponent`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html) を提供し、ユーザーがユーザー インターフェイスを介して、または Angular コンポーネントを使用して列の非表示を実行できるようにします。Material UI Grid には組み込み列非表示 UI があり、これを @@igComponent のツールバーから使用して列の表示状態を変更できます。更に別のコンポーネントとして列非表示 UI を定義してページの必要な場所に配置できます。

## Angular @@igComponent 列非表示の例

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-column-hiding-toolbar-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-column-hiding-toolbar-sample' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-column-hiding-toolbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-column-hiding-toolbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-column-hiding-toolbar-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-column-hiding-toolbar' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-column-hiding-toolbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-column-hiding-toolbar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:570px">
    <iframe id="hierarchicalgrid-column-hiding-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-hiding' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://jp.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchicalgrid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchicalgrid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

}

## @@igComponent の設定
@@igComponent を作成してからデータをバインドします。列でフィルタリングとソートも有効にします。

@@if (igxName === 'IgxGrid') {
```html
<!--columnHiding.component.html-->

<igx-grid #grid id="grid" [data]="data" [autoGenerate]="false" width="100%" height="560px" columnWidth="200px" [allowFiltering]="true">
    <igx-column [field]="'ID'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'ContactName'" dataType="string" [sortable]="true"></igx-column>
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
    <igx-column [field]="'Name'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'ID'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Title'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date" [sortable]="true"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [sortable]="true"></igx-column>
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
            <igx-column field="Debut" [sortable]="true"></igx-column>
            <igx-column field="Grammy Nominations" [sortable]="true"></igx-column>
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
これには、@@igComponent の [`showToolbar`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showtoolbar) および [`columnhiding`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhiding) プロパティを true に設定します。ツールバーが有効でない場合、[`columnhiding`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhiding) プロパティが有効かどうかは影響しません。
ツールバーにタイトルを追加するには、[`toolbarTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbartitle) プロパティを設定し、@@igComponent のラッパーにカスタム スタイルを設定します。

@@if (igxName === 'IgxHierarchicalGrid') {
```html
<!--columnHiding.component.html-->
<div class="hgrid-sample">
    <igx-hierarchical-grid class="hgrid" [data]="localdata" [showToolbar]="true" [columnHiding]="true" toolbarTitle="Singers">
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
    <@@igSelector ... [showToolbar]="true" [columnHiding]="true" toolbarTitle="Employees">
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
[`columnHidingTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhidingtitle) および [`hiddenColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnstext) プロパティを使用して、ツールバーのドロップダウン ボタンに表示されるタイトルおよびテキストを設定します。[`hiddenColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnstext) は列のカウント数の右に表示されます。カウントはデフォルトでボタンに含まれます。
[`hiddenColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnstext) プロパティはローカライズにも使用できます。

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```html
<!--columnHiding.component.html-->

<div class="grid__wrapper">
    <@@igSelector ... [showToolbar]="true" [columnHiding]="true" toolbarTitle="Employees" columnHidingTitle="Column Hiding" hiddenColumnsText="Hidden">
        ...
    </@@igSelector>
</div>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<div class="hgrid-sample">
    <igx-hierarchical-grid class="hgrid" [data]="localdata" [showToolbar]="true" [columnHiding]="true" toolbarTitle="Singers" 
    columnHidingTitle="Column Hiding" hiddenColumnsText="Hidden">
 </igx-hierarchical-grid>
</div>
```
}

列非表示 UI の [`columnsAreaMaxHeight`]({environment:angularApiUrl}/classes/igxcolumnhidingcomponent.html#columnsareamaxheight) プロパティを使用すると、列を含む領域の最大の高さを設定できます。列が多すぎてコンテナにすべて収まらない場合にスクロールバーが表示されるため、スクロールバーを使用して任意の列に移動できます。検索入力は上にピン固定されて、[すべて表示]/[すべて非表示] ボタンが下にピン固定されます。

```typescript
// columnHiding.component.ts

public ngAfterViewInit() {        
    this.@@igObjectRef.toolbar.columnHidingUI.columnsAreaMaxHeight = "200px";
}
```

列非表示 UI の機能セットを使用するには、列非表示 UI コンポーネントへの参照を返すツールバーの [`columnHidingUI`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingui) プロパティを使用します。相対する API にアクセスし、アプリケーションの要件に基づいて使用できます。

このトピックのはじめにあるコードの結果は、[列非表示のデモ](#デモ)セクションで確認できます。

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

列非表示コンポーネント機能を拡張するために [`title`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html#title) および [`filterColumnsPrompt`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html#filtercolumnsprompt) プロパティを設定します。[`title`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html#title) は一番上に表示され、[`filterColumnsPrompt`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html#filtercolumnsprompt) は列非表示 UI のフィルター入力に表示されるプロンプト テキストです。

```html
<!--columnHiding.component.html-->

<div class="columnHidingContainer">
    <igx-column-actions igxColumnHiding #columnHidingUI [columns]="@@igObjectRef.columns"
                       title="Column Hiding" filterColumnsPrompt="Type here to search">
    </igx-column-actions>
</div>
```

### 列の表示順序オプションの追加

列非表示 UI で列の表示順序を選択する機能も追加します。このため、[`columnDisplayOrder`]({environment:angularApiUrl}/classes/igxcolumnactionscomponent.html#columndisplayorder) プロパティを使用します。列挙型のプロパティで、以下のオプションがあります。

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
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-column-hiding-sample-iframe" data-src='{environment:demosBaseUrl}/grid/grid-column-hiding-sample' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-column-hiding-sample-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-column-hiding' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-column-hiding-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
}

## スタイル設定

列操作コンポーネントのスタイル設定を開始するには、すべてのテーマ関数とコンポーネント mixins が存在するインデックス ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単なアプローチを使用して、[`igx-column-actions-theme`]({environment:sassApiUrl}/index.html#function-igx-column-actions-theme) を拡張し、`$title-color` および `$background-color` パラメーターを受け取る新しいテーマを作成します。

```scss
$custom-column-actions-theme: igx-column-actions-theme(
    $background-color: steelblue,
    $title-color: gold
);
```

ご覧のように `igx-column-actions-theme` は列操作コンテナーの色のみを制御しますが、ボタン、チェックボックス、内部の入力グループには影響しません。ボタンのスタイルも設定したい場合、新しいボタン テーマを作成します。

```scss
$custom-button: igx-button-theme($flat-text-color: gold, $disabled-color: black);
```

この例では、フラットボタンのテキストの色とボタンの無効な色のみを変更しましたが、[`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) の方がより多くの方法を提供します。ボタンのスタイルを制御するパラメーター。

最後にそれぞれのテーマを持つコンポーネント mixins を**含める**ことです。 

```scss
@include igx-column-actions($custom-column-actions-theme);
.igx-column-actions {
    @include igx-button($custom-button);
}
```

>[!NOTE]
>`.igx-column-actions` 内で **igx-button** mixin のスコープを設定し、列非表示ボタンのみがスタイル設定されるようにします。そうでない場合は、グリッド内の他のボタンも影響を受けます。

 >[!NOTE]
 >コンポーネントが [`Emulated`](../themes/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を解除する必要があります。

```scss
:host {
    ::ng-deep {
        @include igx-column-actions($custom-column-actions-theme);
        .igx-column-actions {
            @include igx-button($custom-button);
        }
    }
}
```

### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) と [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: gold;
$blue-color: steelblue;

$custom-palette: igx-palette($primary: $blue-color, $secondary: $yellow-color);
```

次に [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取得できます。 

```scss
$custom-column-actions-theme: igx-column-actions-theme(
    $palette: $custom-palette,
    $title-color: igx-color($custom-palette, "secondary", 400),
    $background-color: igx-color($custom-palette, "primary", 200)
);

$custom-button: igx-button-theme(
    $palette: $custom-palette,
    $flat-text-color: igx-color($custom-palette, "secondary", 400),
    $disabled-color: black
);
```

>[!NOTE]
>`Igx-color` と `igx-palette` は色の生成や取得のための関数です。使い方の詳細については [`パレット`](../themes/palette.md) のトピックをご覧ください。

### スキーマの使用

テーマ エンジンを使用して[**スキーマ**](../themes/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

```scss
// Extending the dark column actions schema
$custom-column-actions-schema: extend($_dark-column-actions,
    (
        title-color:(
            igx-color: ("secondary", 400)
        ),
        background-color:(
            igx-color: ("primary", 200)
        )
    )
);
// Extending the dark button schema
$custom-button-schema: extend($_dark-button,
    (           
        flat-text-color:(
            igx-color:("secondary", 500)
        ),
        disabled-color:(
            igx-color:("primary", 700)
        )
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張**する必要があります。これは基本的にカスタム スキーマでコンポーネントをポイントし、その後それぞれのコンポーネントテーマに追加するものです。

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-column-actions: $custom-column-actions-schema,
    igx-button: $custom-button-schema
));

// Defining column-actions-theme with the global dark schema
$custom-column-actions-theme: igx-column-actions-theme(
  $palette: $custom-palette,
  $schema: $custom-dark-schema
);

// Defining button-theme with the global dark schema
$custom-button: igx-button-theme(
  $palette: $custom-palette,
  $schema: $custom-dark-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-column-hiding-toolbar-style-iframe" data-src='{environment:demosBaseUrl}/grid/grid-column-hiding-style' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-column-hiding-toolbar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-column-hiding-toolbar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-column-hiding-toolbar-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-column-hiding-style' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-column-hiding-toolbar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-column-hiding-toolbar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:570px">
    <iframe id="hierarchicalgrid-column-hiding-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-column-hiding-style' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchicalgrid-column-hiding-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchicalgrid-column-hiding-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
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
* [IgxColumnActionsComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-column-actions-theme)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) プロパティ:
* [columnHiding]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhiding)
* [columnHidingTitle]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhidingtitle)
* [hiddenColumnsCount]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnscount)
* [hiddenColumnsText]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnstext)

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) プロパティ:
* [disableHiding]({environment:angularApiUrl}/classes/igxcolumncomponent.html#disablehiding)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) プロパティ:
* [columnHidingUI]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingui)
* [columnHidingDropdown]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#columnhidingdropdown)

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) メソッド:
* [toggleColumnHidingUI]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html#togglecolumnhidingui)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) イベント:
* [onColumnVisibilityChanged]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncolumnvisibilitychanged)

[IgxRadioComponent]({environment:angularApiUrl}/classes/igxradiocomponent.html)

スタイル:

* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxRadioComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-radio-theme)

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
