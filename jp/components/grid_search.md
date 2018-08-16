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
    <iframe id="grid-search-sample-iframe" src='{environment:demosBaseUrl}/grid-search-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-search-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>

### 使用方法

#### グリッドの設定
グリッドを作成してからデータをバインドします。コンポーネントにカスタム スタイルも追加します。

```html
<!--searchgrid.component.html-->

    <igx-grid #grid1 id="grid1" [data]="data" [autoGenerate]="false">
        <igx-column [field]="'IndustrySector'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'IndustryGroup'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'SectorType'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'KRD'" dataType="number" [filterable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'MarketNotion'" dataType="number" [filterable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'Date'" dataType="date" [filterable]="true" [sortable]="true"></igx-column>
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

Great, and now let's prepare for the search API of our Data Grid! We can create a few properties, which can be used for storing the currently searched text and whether the search is case sensitive and/or by an exact match.

```typescript
// searchgrid.component.ts

public searchText: string = "";
public caseSensitive: boolean = false;
public exactMatch: boolean = false;
```

#### 検索入力ボックス

Now let's create our search input! By binding our **searchText** as ngModel to our newly created input and subscribe to the ngModelChange event, we can detect every single **searchText** modification by the user. This will allow us to use the grid's `findNext` and `findPrev` methods to highlight all the occurrences of the **searchText** and scroll to the next/previous one (depending on which method we have invoked).

Both the `findNext` and the `findPrev` methods have three arguments:
- `text`: **string** (the text we are searching for)
- (optional) `caseSensitive`: **boolean** (should the search be case sensitive or not, default value is false)
- (optional) `exactMatch`: **boolean** (should the search be by an exact match or not, default value is false)

When searching by an exact match, the search API will highlight as results only the cell values that match entirely the **searchText** by taking the case sensitivity into account as well. For example the strings '_software_' and '_Software_' are an exact match with a disregard for the case sensitivity.

The methods from above return a **number** value (the number of times the grid contains the given string).

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

ボタンの各クリック イベント ハンドラー内で `findNext` と `findPrev` メソッドを呼び出して検索や検索結果をナビゲーションするためのボタンを作成します。

```html
<!--searchgrid.component.html-->

<div class="searchButtons">
    <input type="button" value="Previous" (click)="grid.findPrev(searchText, caseSensitive, exactMatch)" />
    <input type="button" value="Next" (click)="grid.findNext(searchText, caseSensitive, exactMatch)" />
</div>
```

#### キーボード検索の追加

ユーザーは矢印キーと Enter キーで結果を移動できます。 preventDefault() メソッドのデフォルト キャレットの移動を防止する検索入力の  **keydown** イベントを処理し、ユーザーが押したキーに基づいて `findNext`/`findPrev` メソッドを呼び出します。

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

#### Case sensitive and Exact match

Now let's allow the user to choose whether the search should be case sensitive and/or by an exact match. For this purpose we can use simple checkbox inputs by binding our **caseSensitive** and **exactMatch** properties to the inputs' **checked** properties respectively and handle their **change** events by toggling our properties and invoking the `findNext` method.
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

グリッドのフィルターや並べ替えやレコードの追加または削除などの場合、処理後に現在の検索が自動的に更新されて **searchText** に一致するテキストが保持されます。更に検索がページングで動作し、グリッドの `perPage` プロパティの変更時も強調表示が保持されます。

#### アイコンの追加

By using some of our other components, we can create an enriched user interface and improve the overall design of our entire search bar! We can have a nice search or delete icon on the left of the search input, a couple of chips for our search options and some material design icons combined with nice ripple styled buttons for our navigation on the right. We can wrap these components inside an input group for a more refined design.
To do this, let's go and grab the [**IgxInputGroup**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html), [**IgxIcon**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/icon.html),  [**IgxRipple**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/ripple.html), [**IgxButton**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/button.html) and the [**IgxChip**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/chip.html) modules.

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

**IgxInputGroup** 内のすべてのコンポーネントをラップします。左側で検索と削除/クリア アイコンを切り替えます (検索入力が空かどうかに基づきます)。中央に入力を配置します。更に削除アイコンがクリックされたときに **searchText** を更新し、グリッドの `clearSearch` メソッドを呼び出して強調表示をクリアします。

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
- For displaying a couple of chips that toggle the **caseSensitive** and the **exactMatch** properties. We have replaced the checkboxes with two stylish chips that change color based on these properties. Whenever a chip is clicked, we invoke its respective handler - **updateSearch** or **updateExactSearch** depending on which chip has been clicked.

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
- 検索ナビゲーション ボタンは、マテリアルアイコンを使用して入力を Ripple スタイルボタンにします。click イベントのハンドラーはそのままで `findNext`/`findPrev` メソッドを呼び出します。

```html
<!--searchgrid.component.html-->

    ...
    <div class="searchButtons">
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="grid.findPrev(searchText, caseSensitive, exactMatch)">
            <igx-icon fontSet="material" name="navigate_before"></igx-icon>
        </button>
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="grid.findNext(searchText, caseSensitive, exactMatch)">
            <igx-icon fontSet="material" name="navigate_next"></igx-icon>
        </button>
    </div>
</igx-suffix>
```

### API まとめ

In this article we implemented our own search bar for the grid with some additional functionality when it comes to navigating between the search results. We also used some additional Ignite UI for Angular components like icons, chips and inputs. The search API is listed below.

#### メソッド
以下のメソッドは **IgxGridComponent** で使用できます。
| 名前 | 型 | パラメーター |説明 |
| :--- | :--- | :--- | :--- |
| `findNext` | number | The string to search and, optionally, if the search should be case sensitive and/or an exact match (both default to false). | Finds the next occurrence of a given string in the grid and scrolls to the cell if it isn't visible. Returns how many times the grid contains the string. |
| `findPrev` | number | The string to search and, optionally, if the search should be case sensitive and/or an exact match (both default to false). | Finds the previous occurrence of a given string in the grid and scrolls to the cell if it isn't visible. Returns how many times the grid contains the string. |
| `clearSearch` | void | N/A | グリッドのすべての強調表示を削除します。 |
| `refreshSearch` | number | N/A | 既存の検索を再適用します。グリッドに文字列が何回含まれるかを返します。 |

<div class="divider"></div>

以下のメソッドは **IgxGridCellComponent** で使用できます。
| 名前 | 型 | パラメーター |説明 |
| :--- | :--- | :--- | :--- |
| `highlightText` | number | The string to search and, optionally, if the search should be case sensitive and/or an exact match (both default to false). | Highlights all occurrences of a string in a given cell. Return how many times the searched string is contained in the cell. |
| `clearHighlight` | void | N/A | セルのすべての強調表示を削除します。 |

<div class="divider"></div>

#### プロパティ
以下のプロパティは **IgxGridComponent** で使用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `lastSearchInfo` | ISearchInfo | 最後に実行された検索についての情報を含みます。 |

<div class="divider"></div>

以下のプロパティは **IgxColumnComponent** で使用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `searchable` | boolean | 列が検索に含まれるかどうかを決定します。false (デフォルトは true) に設定した場合、この列のセル値はグリッドの検索 API の結果に含まれません。 |

<div class="divider"></div>

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
