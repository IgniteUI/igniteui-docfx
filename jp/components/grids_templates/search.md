@@if (igxName === 'IgxGrid') {
---
title: Angular Grid 検索 | データの検索 | Ignite UI for Angular | インフラジスティックス 
_description: 機能豊かな API を使用して Ignite Angular Material テーブルでグリッド検索を実行する方法。また、グリッドの仮想化データでコンテンツの即時検索が可能。
_keywords: Content search, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid 検索 | データの検索 | Ignite UI for Angular | インフラジスティックス
_description: 機能豊かな API を使用して Ignite Angular Material テーブルでグリッド検索を実行する方法。また、グリッドの仮想化データでコンテンツの即時検索が可能。
_keywords: Content search, ignite ui for angular, infragistics
_language: ja
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid 検索 | データの検索 | Ignite UI for Angular | インフラジスティックス
_description: 機能豊かな API を使用して Ignite Angular Material テーブルでグリッド検索を実行する方法。また、グリッドの仮想化データでコンテンツの即時検索が可能。
_keywords: Content search, ignite ui for angular, infragistics
_language: ja
---
}

### @@igComponent の仮想コンテンツ検索機能

ブラウザーにはネイティブなコンテンツ検索機能がありますが、ほとんどの場合で @@igComponent は表示範囲外の行列を仮想化します。そのため、ネイティブ グリッド検索は DOM の一部でないため仮想化セルでデータを検索できません。@@igComponent では、Angular Material テーブル ベースのグリッドの拡張により、検索 API を使用した**仮想コンテンツ**の検索が可能です。

#### デモ

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="grid-search-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-search-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-search-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-search-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:600px">
    <iframe id="treegrid-search-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-search' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-search-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-search-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}

### 使用方法

#### グリッドの設定
グリッドを作成してからデータをバインドします。コンポーネントにカスタム スタイルも追加しました。

@@if (igxName === 'IgxGrid') {
```html
<!--searchgrid.component.html-->

<igx-grid #grid1 id="grid1" [data]="data" [autoGenerate]="false" [allowFiltering]="true">
    <igx-column [field]="'IndustrySector'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'IndustryGroup'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'SectorType'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'KRD'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'MarketNotion'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Date'" dataType="date" [sortable]="true"></igx-column>
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!--searchgrid.component.html-->

<igx-tree-grid #treeGrid1 [data]="data" [autoGenerate]="false" primaryKey="ID" foreignKey="ParentID" [allowFiltering]="true">
    <igx-column [field]="'Name'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'ID'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'Title'" dataType="string" [sortable]="true"></igx-column>
    <igx-column [field]="'Age'" dataType="number" [sortable]="true"></igx-column>
    <igx-column [field]="'HireDate'" dataType="date" [sortable]="true"></igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```css
/* searchgrid.component.css */

.grid__wrapper {
    margin: 15px;
}

.offset {
    margin-bottom: 15px;
}

.resultsText {
    font-size: 0.875rem;
}

.chips {
    margin-left: 5px;
}

.searchButtons {
    margin-left: 5px;
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
<!-- TODO -->
}

@@igComponent の検索 API を使用します。検索したテキストの保存、また大文字小文字の区別や完全一致 (またはそのいずれか) に使用するプロパティを作成できます。

```typescript
// searchgrid.component.ts

public searchText: string = "";
public caseSensitive: boolean = false;
public exactMatch: boolean = false;
```

#### 検索入力ボックス

検索入力を作成します。**searchText** を ngModel として新しく作成した入力へバインドして ngModelChange イベントにサブスクライブします。ユーザーによる各 **searchText** のすべての変更を検出できます。これによって @@igComponent の [`findNext`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findnext) と [`findPrev`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findprev) メソッドを使用して searchText のすべての出現を強調し、次へまたは前 (呼び出すメソッドに基づいて) へスクロールできます。

[`findNext`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findnext) と [`findPrev`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findprev) メソッドの両方に 3 つの引数があります。
- `text`: **string** (検索テキスト)
- (オプション) `caseSensitive`: **boolean** (検索で完全一致するかどうか、デフォルト値は false)。
- (オプション) `exactMatch`: **boolean** (検索で完全一致するかどうか、デフォルト値は false)。

完全一致で検索した場合、検索 API は **searchText** と完全一致 (大文字小文字の区別を含む) するセル値のみ結果として強調表示します。たとえば、文字列 'software' と 'Software' は大文字小文字を区別しない場合は完全一致となります。

上記のメソッドは **number** 値を返します (グリッドで指定した文字列が含まれる回数)。

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)" />
```

#### 検索結果の個数を表示
検索で見つかった現在の場所と総個数を示します。グリッドの `lastSearchInfo` プロパティを使用します。このプロパティは、**find** メソッド使用時に自動的に更新されます。

- `@@igObjectRef.lastSearchInfo.matchInfoCache.length` 値は検索で見つかった個数です。
- `@@igObjectRef.lastSearchInfo.activeMatchIndex` 値は、現在の一致 (出現) のインデックス位置です。

```html
<!--searchgrid.component.html-->

<div class="resultsText" *ngIf="@@igObjectRef.lastSearchInfo">
    <span *ngIf="@@igObjectRef.lastSearchInfo.matchInfoCache.length > 0">
        {{ @@igObjectRef.lastSearchInfo.activeMatchIndex + 1 }} of {{ @@igObjectRef.lastSearchInfo.matchInfoCache.length }} results
    </span>
    <span *ngIf="@@igObjectRef.lastSearchInfo.matchInfoCache.length == 0">
        No results
    </span>
</div>
```

#### 検索ボタンの追加

ボタンの各クリック イベント ハンドラー内で [`findNext`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findnext) と [`findPrev`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findprev) メソッドを呼び出して検索や検索結果をナビゲーションするためのボタンを作成します。

```html
<!--searchgrid.component.html-->

<div class="searchButtons">
    <input type="button" value="Previous" (click)="@@igObjectRef.findPrev(searchText, caseSensitive, exactMatch)" />
    <input type="button" value="Next" (click)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)" />
</div>
```

#### キーボード検索の追加

ユーザーは矢印キーと Enter キーで結果を移動できます。preventDefault() メソッドのデフォルト キャレットの移動を防止する検索入力の **keydown** イベントを処理し、ユーザーが押したキーに基づいて [`findNext`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findnext)/[`findPrev`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findprev) メソッドを呼び出します。

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)"
       (keydown)="searchKeyDown($event)" />
```

```typescript
// searchgrid.component.ts

public searchKeyDown(ev) {
    if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
        ev.preventDefault();
        this.@@igObjectRef.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
        ev.preventDefault();
        this.@@igObjectRef.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```

#### 大文字と小文字の区別と完全一致

次に完全一致の検索で大文字と小文字を区別するかどうかをユーザーが選択できるようにします。**caseSensitive** と **exactMatch** プロパティを入力 **caseSensitive** and **exactMatch** プロパティにそれぞれバインドし、プロパティを切り替えて **change** イベントを処理後、[`findNext`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findnext) メソッドを呼び出すことによりシンプルなチェックボックスを使用します。

```html
<!--searchgrid.component.html-->

<span>Case sensitive</span>
<input type="checkbox" [checked]="caseSensitive" (change)="updateSearch()">

<span>Exact match</span>
<input type="checkbox" [checked]="exactMatch" (change)="updateExactSearch()">
```

```typescript
// searchgrid.component.ts

public updateSearch() {
    this.caseSensitive = !this.caseSensitive;
    this.@@igObjectRef.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}

public updateExactSearch() {
    this.exactMatch = !this.exactMatch;
    this.@@igObjectRef.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}
```

#### 永続化

@@igComponent のフィルターや並べ替え、レコードの追加や削除をする場合を想定します。そのような処理の後、現在の検索が自動的に更新されて **searchText** に一致するテキストが保持されます。更に検索がページングで動作し、@@igComponent の [`perPage`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#perpage) プロパティの変更時も強調表示が保持されます。

#### アイコンの追加

その他のコンポーネントを使用するためにユーザー インターフェイスを作成し、検索バー全体のデザインを向上します。検索入力の左側に検索または削除アイコン、検索オプションのチップ、右側にはマテリアル デザイン アイコンと Ripple スタイルのボタンを組み合わせたナビゲーションを表示できます。入力グループ内のコンポーネントをラップしてより洗練されたデザインにすることができます。
[**IgxInputGroup**](../input_group.md)、[**IgxIcon**](../icon.md)、[**IgxRipple**](../ripple.md)、[**IgxButton**](../button.md)、[**IgxChip**](../chip.md) のモジュールを使用します。

```typescript
// app.module.ts

...
import {
    @@igxNameModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxRippleModule,
    IgxButtonModule,
    IgxChipsModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxInputGroupModule, IgxIconModule, IgxRippleModule, IgxButtonModule, IgxChipsModule],
})
export class AppModule {}
```

テンプレートを新しいコンポーネントで更新します。

[**IgxInputGroup**](../input_group.md) 内のすべてのコンポーネントをラップします。左側で検索と 削除/クリア アイコンを切り替えます (検索入力が空かどうかに基づきます)。中央に入力を配置します。更に削除アイコンがクリックされたときに **searchText** を更新し、グリッドの [`clearSearch`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearsearch) メソッドを呼び出して強調表示をクリアします。

```html
<!--searchgrid.component.html-->

<igx-input-group type="search" class="offset">
    <igx-prefix>
        <igx-icon *ngIf="searchText.length == 0">search</igx-icon>
        <igx-icon *ngIf="searchText.length > 0" (click)="clearSearch()">clear</igx-icon>
    </igx-prefix>

    <input #search1 id="search1" igxInput placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)"
        (keydown)="searchKeyDown($event)" />

    <igx-suffix *ngIf="searchText.length > 0">
        ...
    </igx-suffix>
</igx-input-group>
```

```typescript
// searchgrid.component.ts

public clearSearch() {
    this.searchText = "";
    this.@@igObjectRef.clearSearch();
}
```

右側の入力グループに以下の目的で別のコンテナーを作成します。
- 検索結果の表示

```html
<!--searchgrid.component.html-->

<igx-suffix *ngIf="searchText.length > 0">
    <div class="resultsText" *ngIf="@@igObjectRef.lastSearchInfo">
        <span *ngIf="@@igObjectRef.lastSearchInfo.matchInfoCache.length > 0">
            {{ @@igObjectRef.lastSearchInfo.activeMatchIndex + 1 }} of {{ @@igObjectRef.lastSearchInfo.matchInfoCache.length }} results
        </span>
        <span *ngIf="@@igObjectRef.lastSearchInfo.matchInfoCache.length == 0">
            No results
        </span>
    </div>
    ...
```
- 以下は **caseSensitive** と **exactMatch** を切り替えるチップを表示する方法です。プロパティに基づいて色が変わる 2 つのチップでチェックボックスを 置き換えます。チップをクリックすると、どちらのチップがクリックされたかによって各ハンドラー **updateSearch** または **updateExactSearch** を呼び出します。

```html
<!--searchgrid.component.html-->

    ...
    <div class="chips">
        <igx-chips-area>
            <igx-chip (click)="updateSearch()" [color]="caseSensitive? 'lightgrey' : 'rgba(0, 0, 0, .04)'">
                <span>Case Sensitive</span>
            </igx-chip>
            <igx-chip (click)="updateExactSearch()" [color]="exactMatch? 'lightgrey' : 'rgba(0, 0, 0, .04)'">
                <span>Exact Match</span>
            </igx-chip>
        </igx-chips-area>
    </div>
    ...
```
- 検索ナビゲーション ボタンは、マテリアルアイコンを使用して入力を Ripple スタイルボタンにします。click イベントのハンドラーはそのままで [`findNext`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findnext)/[`findPrev`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findprev) メソッドを呼び出します。

```html
<!--searchgrid.component.html-->

    ...
    <div class="searchButtons">
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="@@igObjectRef.findPrev(searchText, caseSensitive, exactMatch)">
            <igx-icon fontSet="material">navigate_before</igx-icon>
        </button>
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="@@igObjectRef.findNext(searchText, caseSensitive, exactMatch)">
            <igx-icon fontSet="material">navigate_next</igx-icon>
        </button>
    </div>
</igx-suffix>
```

### 既知の制限

|制限|説明|
|--- |--- |
|テンプレートを使用したセル内の検索|検索機能の強調表示が、デフォルトのセルテンプレートに対してのみ機能する問題。カスタム セル テンプレートを持つ列がある場合、ハイライトは機能しないため、列フォーマッターなどの代替アプローチを使用するか、列の [`searchable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#searchable) プロパティを false に設定する必要があります。|
|リモート仮想化| リモート仮想化の使用時に検索が正しく動作しない問題。|
|セル テキストが切れる問題| セル内のテキストが長すぎるために検索テキストが省略記号によって切れている場合も、セルまでスクロールして一致カウントに含まれますが、強調表示はされません。|

### API リファレンス

このトピックでは、@@igComponent にカスタム検索バーを実装し、更に検索結果を移動する際の機能を追加しました。アイコン、チップ、入力などその他の Ignite UI for Angular コンポーネントも使用しています。以下は検索 API です。

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) メソッド:
-   [findNext]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findnext)
-   [findPrev]({environment:angularApiUrl}/classes/@@igTypeDoc.html#findprev)
-   [clearSearch]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearsearch)
-   [refreshSearch]({environment:angularApiUrl}/classes/@@igTypeDoc.html#refreshsearch)

[`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) メソッド:
-   [highlightText]({environment:angularApiUrl}/classes/igxgridcellcomponent.html#highlighttext)
-   [clearHighlight]({environment:angularApiUrl}/classes/igxgridcellcomponent.html#clearhighlight)

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) プロパティ:
-   [searchable]({environment:angularApiUrl}/classes/igxcolumncomponent.html#searchable)

[ISearchInfo]({environment:angularApiUrl}/interfaces/isearchinfo.html)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxChipComponent]({environment:angularApiUrl}/classes/igxchipcomponent.html)

スタイル:

* [@@igxNameComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxInputGroupComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)
* [IgxIconComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [IgxRippleDirective スタイル]({environment:sassApiUrl}/index.html#function-igx-ripple-theme)
* [IgxButtonDirective スタイル]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxChipComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-chip-theme)

### その他のリソース
<div class="divider--half"></div>

* [@@igComponent 概要](@@igMainTopic.md)
* [仮想化とパフォーマンス](virtualization.md)
* [フィルタリング](filtering.md)
* [ページング](paging.md)
* [並べ替え](sorting.md)
* [集計](summaries.md)
* [列移動](column_moving.md)
* [列のピン固定](column_pinning.md)
* [列のサイズ変更](column_resizing.md)
* [選択](selection.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
