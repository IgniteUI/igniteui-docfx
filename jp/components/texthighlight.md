---
title: TextHighlight ディレクティブ - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular TextHighlight ディレクティブは、テキスト部分のハイライトやアクティブ ハイライトがあります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コンポーネント, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular TextHighlight ディレクティブ, IgxTextHighlight ディレクティブ
_language: ja
---

## TextHighlight ディレクティブ

Ignite UI for Angular の `IgxTextHighlight` ディレクティブは、テキストのハイライト、大文字と小文字の区別のオプション、完全一致のみのハイライトをサポートします。既にハイライトしている部分を含む、テキストのハイライトをアクティブに保持できます。

### TextHighlight デモ
<div class="sample-container loading" style="height: 260px;">
    <iframe id="text-highlight-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/text-highlight-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="text-highlight-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> Ignite UI for Angular コンポーネントをプロジェクトに追加する前に、必要なすべての依存関係を構成し、プロジェクトのセットアップが正しく完了したことを確認してください。[インストール](https://jp.infragistics.com/products/ignite-ui-angular/getting-started#installation)のトピックで手順をご確認ください。

### 使用方法

Ignite UI for Angular TextHighlight ディレクティブを使用する前に **app.module.ts** ファイルに **IgxTextHighlightModule** とアプリケーションに必要な他の Ignute UI for Angular モジュールをインポートします。

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

次にテキストの異なる部分のハイライトに使用できる検索ボックスを作成します。Ignite UI for Angular の [InputGroup](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html) コンポーネントは、一致のクリア、次の一致、前の一致へ移動するためのボタン、検索で大文字と小文字を区別を指定するボタンを追加します。また一致がいくつ見つかったかをを示すラベルがあります。

```html
<div class="search-container">
    <igx-input-group type="search" class="input-group">
        <igx-prefix>
            <igx-icon *ngIf="searchText.length == 0">search</igx-icon>
            <igx-icon *ngIf="searchText.length > 0" (click)="clearSearch()">clear</igx-icon>
        </igx-prefix>

        <input #search1 id="search1" igxInput placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="onTextboxChange()"
                (keydown)="searchKeyDown($event)" />
        <igx-suffix>
            <div class="caseSensitiveButton">
                <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="updateSearch()"
                        [igxButtonBackground]="caseSensitive? 'rgb(73, 180, 254)' : 'transparent'">
                    <igx-icon class="caseSensitiveIcon" fontSet="material" name="text_fields"></igx-icon>
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
                    <igx-icon fontSet="material" name="navigate_before"></igx-icon>
                </button>
                <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="findNext()" [disabled]="!canMoveHighlight">
                    <igx-icon fontSet="material" name="navigate_next"></igx-icon>
                </button>
            </div>
        </igx-suffix>
    </igx-input-group>
</div>
```
テキストの段落と IgxTextHighlight ディレクティブを追加します。値入力を段落のテキストにバインドする必要があることを注意してください。段落のテキストに補間も使用します。複数のコンテナがあり、たとえば 0 の場合に列、行、ページの入力が便利です。その他、検索コンテナは親コンテナの一意の子である必要があるため、周りに div 要素が必要になります。

```html
<div>
    <p igxTextHighlight
        [value]="html"
        [groupName]="'group1'"
        [column]="0"
        [row]="0"
        [page]="0"
        [containerClass]="'search-text'"
        class="search-text">
        {{html}}
    </p>
</div>
```

コンポーネント テンプレートのバインディングに使用する以下のフィールドをコンポーネントの .ts ファイルに追加します。

``` typescript
    public html = `
    Use the search box to search for a certain string in this text.
    All the results will be highlighted in yellow, while the first occurrence of the string will be in orange.
    You can use the button in the searchbox to specify if the search will be case sensitive.
    You can move the orange highlight by either pressing the buttons on the searchbox or by using the Enter or the arrow keys on your keyboard.
    `;

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
    <iframe id="text-highlight-1-iframe" src='{environment:demosBaseUrl}/text-highlight-1' width="100%" height="100%" seamless
        frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="text-highlight-1-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

<div class="divider"></div>

### 複数コンテナで検索
igxTextHighlight は、1 つのアクティブ ハイライトを共有する複数のコンテナ内を検索できます。個々にコンテナを持つ複数の TextHighlight ディレクティブで同じグループ値を持つことにより可能になります。サンプルの設定は、前のサンプルの検索ボックスを再利用しますが、今回は 2 段落追加します。両方ともコンテナにありますが 2 つ目は行に異なる値があります。

```html
    <div>
        <p igxTextHighlight
            [groupName]="'group1'"
            [column]="0"
            [row]="0"
            [page]="0"
            [containerClass]="'search-text'"
            [value]="firstParagraph"
            class="search-text">
            {{firstParagraph}}
        </p>
    </div>
    <div>
        <p igxTextHighlight
            [groupName]="'group1'"
            [column]="0"
            [row]="1"
            [page]="0"
            [containerClass]="'search-text'"
            [value]="secondParagraph"
            class="search-text">
            {{secondParagraph}}
        </p>
    </div>

```
.ts ファイルに firstParagraph と secondParagraph フィールドがあり、テキスト ハイライト ディレクティブの各値入力にバインドします。ViewChild の代わりに ViewChildren を使用してテンプレートのすべてのハイライトを取得します。

```typescript
    public firstParagraph = `
        Use the search box to search for a certain string in the paragraph below.
        All the results will be highlighted in yellow, while the first occurrence of the string will be in orange.
        You can use the button in the searchbox to specify if the search will be case sensitive.
        You can move the orange highlight by either pressing the buttons on the searchbox or by using the Enter or the arrow keys on your keyboard.
`;

    public secondParagraph = `
On top of the functionality from the previous sample, this sample demonstrates how to implement the text highlight directive
             with several different containers. In this case, we have two paragraphs, each containing some text. You can see that
             they share the same active (orange) highlight and the returned match count includes both containers. The find method in this
             sample can be reused regardless of the number of containers you have in your application.
    `;

    @ViewChildren(IgxTextHighlightDirective)
    public highlights;
```
.ts ファイルのコードの残りすべてがシングル コンテナの例 (find メソッドの例外) と同一となります。複数のコンテナがあるため、このメソッドの変更が必要になりますが、TextHighlight ディレクティブの数値に関係なくコードを使用できます。

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
                    columnIndex: 0,
                    index: actualIndex,
                    page: 0,
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
    <iframe id="text-highlight-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/text-highlight-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="text-highlight-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で表示</button>
</div>

<div class="divider"></div>

### API まとめ

以下の表は TextHighlight ディレクティブの入力とメソッドの概要です。

#### 入力

以下の入力は、**igxTextHighlight** ディレクティブで使用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `groupName`| string | アクティブ ハイライトが共有されるグループを定義します。 |
| `row`| number | ディレクティブが配置される行を定義します。 |
| `column`| number | ディレクティブが配置される列を定義します。 |
| `page`| number | ディレクティブが配置されるページを定義します。 |
| `value`| any | 検索を実行する基になる値を定義します。 |

<div class="divider"></div>

#### メソッド

以下のメソッドは、**igxTextHighlight** ディレクティブで使用できます。

| 名前 | 戻り型 | パラメーター | 説明 |
| :--- | :--- | :--- | :--- |
| `highlight`| number | テキストをハイライトし、オプションで検索で大文字と小文字を区別するかどうか、また完全一致のみハイライトするかどうか。 | 検索した文字列をハイライトして値に検索済みのハイライトされた文字列をいくつ含むかを返します。|
| `clearHighlight`| void | なし | 既存のハイライトをすべてクリアします。 |
| `activateIfNecessary`| void | なし | 現在アクティブなハイライトの場合ハイライトをアクティブ化します。 |
| `setActiveHighlight`| void | groupName と行、列、ページ、を含むオブジェクト実装インターフェイスをアクティブ化します。 | 行、列、ページで指定したグループのハイライトをアクティブ化します。 |
| `clearActiveHighlight`| void | グループの名前 | 指定したグループのアクティブ ハイライトをクリアします。 |

<div class="divider"></div>

### その他のリソース
* [Grid 検索](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/grid_search.html)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
