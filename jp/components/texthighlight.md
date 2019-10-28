---
title: TextHighlight ディレクティブ - ネイティブ Angular |Ignite UI for Angular
_description: Ignite UI for Angular TextHighlight ディレクティブは、テキスト部分のハイライトやアクティブ ハイライトがあります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コンポーネント, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular TextHighlight ディレクティブ, IgxTextHighlight ディレクティブ
_language: ja
---

## TextHighlight ディレクティブ

Ignite UI for Angular の [`IgxTextHighlight`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) ディレクティブは、テキストのハイライト、大文字と小文字の区別のオプション、完全一致のみのハイライトをサポートします。既にハイライトしている部分を含む、テキストのハイライトをアクティブに保持できます。

### TextHighlight デモ
<div class="sample-container loading" style="height: 260px;">
    <iframe id="text-highlight-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-display/text-highlight-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="text-highlight-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Ignite UI for Angular TextHighlight ディレクティブ を初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに `IgxTextHighlightModule` とアプリケーションに必要な他の Ignite UI for Angular モジュールをインポートします。

```typescript
// app.module.ts

...
import { IgxButtonModule, IgxInputGroupModule,
        IgxIconModule, IgxRippleModule, IgxTextHighlightModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxButtonModule, IgxInputGroupModule,
                    IgxIconModule, IgxRippleModule, IgxTextHighlightModule],
    ...
})
export class AppModule {}
```

次にテキストの異なる部分のハイライトに使用できる検索ボックスを作成します。Ignite UI for Angular の [InputGroup](input_group.md) コンポーネントは、一致のクリア、次の一致、前の一致へ移動するためのボタン、検索で大文字と小文字を区別を指定するボタンを追加します。また一致がいくつ見つかったかをを示すラベルがあります。

```html
<div class="search-container">
    <igx-input-group type="search" class="input-group">
        <igx-prefix>
            <igx-icon *ngIf="searchText.length == 0">search</igx-icon>
            <igx-icon *ngIf="searchText.length > 0" (click)="clearSearch()">clear</igx-icon>
        </igx-prefix>

        <input #search1 id="search1" igxInput placeholder="Search" autocomplete="off" [(ngModel)]="searchText" (ngModelChange)="onTextboxChange()"
                (keydown)="searchKeyDown($event)" />
        <igx-suffix>
            <div class="caseSensitiveButton">
                <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="updateSearch()"
                        [igxButtonBackground]="caseSensitive? 'rgb(73, 180, 254)' : 'transparent'">
                    <igx-icon class="caseSensitiveIcon" fontSet="material">text_fields</igx-icon>
                </button>
            </div>
        </igx-suffix>

        <igx-suffix *ngIf="searchText.length > 0">
            <div>
                <span *ngIf="matchCount > 0">
                    {{ index + 1 }} of {{ matchCount }} results
                </span>
                <span *ngIf="matchCount == 0">
                    No results
                </span>
            </div>
            <div class="searchButtons">
                <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="findPrev()" [disabled]="!canMoveHighlight">
                    <igx-icon fontSet="material">navigate_before</igx-icon>
                </button>
                <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="findNext()" [disabled]="!canMoveHighlight">
                    <igx-icon fontSet="material">navigate_next</igx-icon>
                </button>
            </div>
        </igx-suffix>
    </igx-input-group>
</div>
```
div テキストと IgxTextHighlight ディレクティブを追加します。値入力を div のテキストにバインドする必要があることに注意してください。div テキストに補間も使用します。

```html
    <div igxTextHighlight
         [value]="html"
         [groupName]="'group1'"
         [containerClass]="'search-text'"
         class="search-text">
        {{html}}
    </div>
```

コンポーネント テンプレートのバインディングに使用する以下のフィールドをコンポーネントの .ts ファイルに追加します。

``` typescript
    public html = "...";

    @ViewChild(IgxTextHighlightDirective, {read: IgxTextHighlightDirective})
    public highlight: IgxTextHighlightDirective;

    public searchText: string = "";
    public matchCount: number = 0;
    public caseSensitive: boolean = false;
    public index: number = 0;


    public get canMoveHighlight() {
        return this.matchCount > 1;
    }
```

次に以下のメソッドを追加すると、ユーザーが検索ボックスに入力したテキストにハイライトを適用でき、アクティブ ハイライト間を移動できます。

``` typescript
    public searchKeyDown(ev) {
        if (this.searchText) {
            if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
                ev.preventDefault();
                this.findNext();
            } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
                ev.preventDefault();
                this.findPrev();
            }
        }
    }

    public onTextboxChange() {
        this.index = 0;
        this.find(0);
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.find(0);
    }

    public clearSearch() {
        this.searchText = "";
        this.find(0);
    }

    private findNext() {
        this.find(1);
    }

    private findPrev() {
        this.find(-1);
    }

    private find(increment: number) {
        if (this.searchText) {
            this.matchCount = this.highlight.highlight(this.searchText, this.caseSensitive);
            this.index += increment;

            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                IgxTextHighlightDirective.setActiveHighlight("group1", {
                    columnIndex: 0,
                    index: this.index,
                    page: 0,
                    rowIndex: 0
                });
            }
        } else {
            this.highlight.clearHighlight();
        }
    }
```

サンプルが正しく構成された場合、以下のような結果になります。

<div class="sample-container loading" style="height: 260px;">
    <iframe id="text-highlight-1-iframe" data-src='{environment:demosBaseUrl}/data-display/text-highlight-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="text-highlight-1-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

<div class="divider"></div>

### 複数要素で検索
[`igxTextHighlight`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) は、1 つのアクティブ ハイライトを共有する複数の要素内を検索できます。複数の TextHighlight ディレクティブで同じ [`groupName`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#groupname) 値を持つことにより可能になります。サンプルの設定は、前のサンプルの検索ボックスを再利用しますが、今回は div 要素を 2 つ追加します。 [`column`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#column) と [`row`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#row) 入力は複数要素がある場合に便利で、この場合は 2 つ目の div に異なる行値があります。

```html
    <div igxTextHighlight
         [groupName]="'group1'"
         [row]="0"
         [containerClass]="'search-text'"
         [value]="firstParagraph"
         class="search-text">
        {{firstParagraph}}
    </div>
    <div igxTextHighlight
         [groupName]="'group1'"
         [row]="1"
         [containerClass]="'search-text'"
         [value]="secondParagraph"
         class="search-text">
        {{secondParagraph}}
    </div>
```
.ts ファイルに firstParagraph と secondParagraph フィールドがあり、テキスト ハイライト ディレクティブの各値入力にバインドします。ViewChild の代わりに ViewChildren を使用してテンプレートのすべてのハイライトを取得します。

```typescript
    public firstParagraph = "...";

    public secondParagraph = "...";

    @ViewChildren(IgxTextHighlightDirective)
    public highlights;
```
.ts ファイルのコードの残りすべてが単一要素の例 (find メソッドの例外) と同一となります。複数の要素があるため、このメソッドの変更が必要になりますが、TextHighlight ディレクティブの数値に関係なくコードを使用できます。

```typescript
    private find(increment: number) {
        if (this.searchText) {
            let count = 0;
            const matchesArray = [];

            this.highlights.forEach((h) => {
                count += h.highlight(this.searchText, this.caseSensitive);
                matchesArray.push(count);
            });

            this.matchCount = count;

            this.index += increment;
            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                let row;

                for (let i = 0; i < matchesArray.length; i++) {
                    if (this.index < matchesArray[i]) {
                        row = i;
                        break;
                    }
                }

                const actualIndex = row === 0 ? this.index : this.index - matchesArray[row - 1];

                IgxTextHighlightDirective.setActiveHighlight("group1", {
                    index: actualIndex,
                    rowIndex: row
                });
            }
        } else {
            this.highlights.forEach((h) => {
                h.clearHighlight();
            });
            this.matchCount = 0;
        }
    }
```

<div class="sample-container loading" style="height: 400px;">
    <iframe id="text-highlight-2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/text-highlight-2" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="text-highlight-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

<div class="divider"></div>

### API とスタイルのリファレンス

TextHighlight ディレクティブの API に関する詳細な情報は、以下のリンクのトピックを参照してください。
* [`IgxTextHighlight API`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html)

使用したその他のコンポーネント:

* [`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [`IgxInputGroupComponent スタイル`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)

<div class="divider"></div>

### その他のリソース
* [Grid 検索](grid/search.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
