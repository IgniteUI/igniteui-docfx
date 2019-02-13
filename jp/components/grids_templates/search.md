---
title: Grid 検索
_description: Ignite UI for Angular Data Grid コントロールは、グリッド内で検索機能を実装する検索 API があります。 
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高パフォーマンス Grid, 検索, サーチ, API 検索
_language: ja
---

### Grid 検索

ブラウザーにはネイティブな検索機能がありますが、ほとんどの場合でグリッドの行列が表示範囲外に仮想化されます。このような場合、ネイティブ検索は DOM の一部でないため仮想化セルを検索できません。Ignite UI for Angular Data Grid を**検索 API** で拡張したため、グリッドの**仮想コンテンツ**を介して検索できるようになりました。

#### デモ

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-search-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-search-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-search-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>

### 使用方法

#### グリッドの設定
グリッドを作成してからデータをバインドします。コンポーネントにカスタム スタイルも追加します。

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

データグリッドの検索 API を使用します。検索したテキストの保存、また大文字小文字の区別や完全一致 (またはそのいずれか) に使用するプロパティを作成できます。

```typescript
// searchgrid.component.ts

public searchText: string = "";
public caseSensitive: boolean = false;
public exactMatch: boolean = false;
```

#### 検索入力ボックス

検索入力を作成します。**searchText** を ngModel として新しく作成した入力へバインドして ngModelChange イベントにサブスクライブします。ユーザーによるすべての **searchText** 変更を検出できます。これによってグリッドの [`findNext`]({environment:angularApiUrl}/classes/igxgridcomponent.html#findnext) と [`findPrev`]({environment:angularApiUrl}/classes/igxgridcomponent.html#findprev) メソッドを使用して **searchText** のすべての出現を強調し、次へまたは前 (呼び出すメソッドに基づいて) へスクロールできます。

[`findNext`]({environment:angularApiUrl}/classes/igxgridcomponent.html#findnext) と [`findPrev`]({environment:angularApiUrl}/classes/igxgridcomponent.html#findprev) メソッドの両方に 2 つの引数があります。
- `text`: **string** (検索するテキスト)
- `caseSensitive` (オプション)`: **boolean** (検索で大文字と小文字を区別するかどうか、デフォルト値は false)。
- `exactMatch`(オプション): **boolean** (検索で完全一致するかどうか、デフォルト値は false)。

完全一致で検索した場合、検索 API は **searchText** と完全一致 (大文字小文字の区別を含む) するセル値のみ結果として強調表示します。たとえば、文字列 'software' と 'Software' は大文字小文字を区別しない場合は完全一致となります。

上記のメソッドは**数値**を返します (グリッドで指定した文字列が含まれる回数)。

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="grid.findNext(searchText, caseSensitive, exactMatch)" />
```

#### 検索結果の個数を表示
検索で見つかった場所と総個数を示します。グリッドの `lastSearchInfo` プロパティを使用します。このプロパティは、**find** メソッド使用時に自動的に更新されます。 

- `grid.lastSearchInfo.matchInfoCache.length` 値は検索で見つかった個数です。
- `grid.lastSearchInfo.activeMatchIndex` 値は、現在の一致 (出現) のインデックス位置です。

```html
<!--searchgrid.component.html-->

<div class="resultsText" *ngIf="grid.lastSearchInfo">
    <span *ngIf="grid.lastSearchInfo.matchInfoCache.length > 0">
        {{ grid.lastSearchInfo.activeMatchIndex + 1 }} of {{ grid.lastSearchInfo.matchInfoCache.length }} results
    </span>
    <span *ngIf="grid.lastSearchInfo.matchInfoCache.length == 0">
        No results
    </span>
</div>
```

#### 検索ボタンの追加

ボタンの各クリック イベント ハンドラー内で [`findNext`]({environment:angularApiUrl}/classes/igxgridcomponent.html#findnext) と [`findPrev`]({environment:angularApiUrl}/classes/igxgridcomponent.html#findprev) メソッドを呼び出して検索や検索結果をナビゲーションするためのボタンを作成します。

```html
<!--searchgrid.component.html-->

<div class="searchButtons">
    <input type="button" value="Previous" (click)="grid.findPrev(searchText, caseSensitive, exactMatch)" />
    <input type="button" value="Next" (click)="grid.findNext(searchText, caseSensitive, exactMatch)" />
</div>
```

#### キーボード検索の追加

ユーザーは矢印キーと Enter キーで結果を移動できます。 preventDefault() メソッドのデフォルト キャレットの移動を防止する検索入力の  **keydown** イベントを処理し、ユーザーが押したキーに基づいて [`findNext`]({environment:angularApiUrl}/classes/igxgridcomponent.html#findnext)/[`findPrev`]({environment:angularApiUrl}/classes/igxgridcomponent.html#findprev) メソッドを呼び出します。

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="grid.findNext(searchText, caseSensitive, exactMatch)"
       (keydown)="searchKeyDown($event)" />
```

```typescript
// searchgrid.component.ts

public searchKeyDown(ev) {
    if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
        ev.preventDefault();
        this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
        ev.preventDefault();
        this.grid.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```

#### 大文字と小文字の区別と完全一致

次に完全一致の検索で大文字と小文字を区別するかどうかをユーザーが選択できるようにします。**caseSensitive** と **exactMatch** プロパティを入力 **checked** プロパティにそれぞれバインドし、プロパティを切り替えて **change** イベントを処理後、[`findNext`]({environment:angularApiUrl}/classes/igxgridcomponent.html#findnext) メソッドを呼び出すことによりシンプルなチェックボックスを使用します。
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
    this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}

public updateExactSearch() {
    this.exactMatch = !this.exactMatch;
    this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}
```

#### 永続化

グリッドのフィルターや並べ替えやレコードの追加または削除などの場合、処理後に現在の検索が自動的に更新されて **searchText** に一致するテキストが保持されます。更に検索がページングで動作し、グリッドの [`perPage`]({environment:angularApiUrl}/classes/igxgridcomponent.html#perpage) プロパティの変更時も強調表示が保持されます。

#### アイコンの追加

その他のコンポーネントを使用するためにユーザー インターフェイスを作成し、検索バー全体のデザインを向上します。検索入力の左側に検索または削除アイコン、検索オプションのチップ、右側にはマテリアル デザイン アイコンと Ripple スタイルのボタンを組み合わせたナビゲーションを表示できます。入力グループ内のコンポーネントをラップしてより洗練されたデザインにすることができます。
これには、[**IgxInputGroup**](../input_group.md)、[**IgxIcon**](../icon.md)、[**IgxRipple**](../ripple.md)、[**IgxButton**](../button.md)、[**IgxChip**](../chip.md) モジュールを使用します。

```typescript
// app.module.ts

...
import {
    IgxGridModule.forRoot(),
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

最後にテンプレートを新しいコンポーネントで更新します。

[**IgxInputGroup**](input_group.md) 内のすべてのコンポーネントをラップします。左側で検索と削除/クリア アイコンを切り替えます (検索入力が空かどうかに基づきます)。中央に入力を配置します。更に削除アイコンがクリックされたときに **searchText** を更新し、グリッドの [`clearSearch`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clearsearch) メソッドを呼び出して強調表示をクリアします。

```html
<!--searchgrid.component.html-->

<igx-input-group type="search" class="offset">
    <igx-prefix>
        <igx-icon *ngIf="searchText.length == 0">search</igx-icon>
        <igx-icon *ngIf="searchText.length > 0" (click)="clearSearch()">clear</igx-icon>
    </igx-prefix>

    <input #search1 id="search1" igxInput placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="grid.findNext(searchText, caseSensitive)"
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
    this.grid.clearSearch();
}
```

右側の入力グループに以下の目的で別のコンテナーを作成します。
- 検索結果の表示

```html
<!--searchgrid.component.html-->

<igx-suffix *ngIf="searchText.length > 0">
    <div class="resultsText" *ngIf="grid.lastSearchInfo">
        <span *ngIf="grid.lastSearchInfo.matchInfoCache.length > 0">
            {{ grid.lastSearchInfo.activeMatchIndex + 1 }} of {{ grid.lastSearchInfo.matchInfoCache.length }} results
        </span>
        <span *ngIf="grid.lastSearchInfo.matchInfoCache.length == 0">
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
- 検索ナビゲーション ボタンは、マテリアルアイコンを使用して入力を Ripple スタイルボタンにします。click イベントのハンドラーはそのままで [`findNext`]({environment:angularApiUrl}/classes/igxgridcomponent.html#findnext)/[`findPrev`]({environment:angularApiUrl}/classes/igxgridcomponent.html#findprev) メソッドを呼び出します。

```html
<!--searchgrid.component.html-->

    ...
    <div class="searchButtons">
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="grid.findPrev(searchText, caseSensitive, exactMatch)">
            <igx-icon fontSet="material">navigate_before</igx-icon>
        </button>
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="grid.findNext(searchText, caseSensitive, exactMatch)">
            <igx-icon fontSet="material">navigate_next</igx-icon>
        </button>
    </div>
</igx-suffix>
```

### 既知の問題と制限

|制限|説明|
|--- |--- |
|テンプレート付きセルの検索|検索機能がセル テンプレートを div 要素とスパンで置き換えてセル値の検索テキストを強調表示します。そのため、テンプレートに関連付けした複数の要素やイベントを含む複雑なテンプレートがある場合に予期しない動作を発生する場合があります。列にそのようなテンプレートがある場合、列フォーマッターや列の ` プロパティを false に設定するなど、他の方法を使用してください。|
|リモート仮想化| リモート仮想化の使用時に検索が正しく動作しない問題|
|セルのテキストが切れる問題| テキストが大きすぎてセルに収まらない場合、省略記号が表示されてセルへスクロール、更に一致項目としてカウントされますが強調表示はされません。 |

### API リファレンス

このトピックでは、グリッドにカスタム検索バーを実装し、更に検索結果を移動する際の機能を追加しました。アイコン、チップ、入力などその他の Ignite UI for Angular コンポーネントも使用しています。
以下は検索 API です。

[`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) メソッド:
-   [`findNext`]({environment:angularApiUrl}/classes/igxgridcomponent.html#findnext)
-   [`findPrev`]({environment:angularApiUrl}/classes/igxgridcomponent.html#findprev)
-   [`clearSearch`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clearsearch)
-   [`refreshSearch`]({environment:angularApiUrl}/classes/igxgridcomponent.html#refreshsearch)

[`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) メソッド:
-   [`highlightText`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html#highlighttext)
-   [`clearHighlight`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html#clearhighlight)

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) プロパティ:
-   [`searchable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#searchable)

[`ISearchInfo`]({environment:angularApiUrl}/interfaces/isearchinfo.html)

その他のコンポーネントおよびディレクティブ (またはそのいずれか) で使用した API:

* [`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [`IgxRippleDirective`]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [`IgxButtonDirective`]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html)

スタイル:

* [`IgxGridComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [`IgxInputGroupComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)
* [`IgxIconComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [`IgxRippleDirective Styles`]({environment:sassApiUrl}/index.html#function-igx-ripple-theme)
* [`IgxButtonDirective Styles`]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [`IgxChipComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-chip-theme)

### その他のリソース
<div class="divider--half"></div>

* [Grid の概要](grid.md)
* [仮想化とパフォーマンス](grid_virtualization.md)
* [フィルタリング](grid_filtering.md)
* [ページング](grid_paging.md)
* [並べ替え](grid_sorting.md)
* [集計](grid_summaries.md)
* [列移動](grid_column_moving.md)
* [列のピン固定](grid_column_pinning.md)
* [列のサイズ変更](grid_column_resizing.md)
* [選択](grid_selection.md)
* [Excel へエクスポート](exporter_excel.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム**　(英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**　(英語)](https://github.com/IgniteUI/igniteui-angular)
