---
title: ドロップダウン コンポーネント
_description: Angular 仮想化 Drop Down の Ignite UI を使用して、単一の項目選択をサポートする非常に大きな項目のリストを表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Drop Down コンポーネント, Angular Drop Down コントロール, Angular コントロール Large Item List, Angular コントロール Singe Selection
_language: ja
---

# 仮想ドロップダウン

<p class="highlight">Ignite UI for Angular Drop Down コンポーネントは、選択可能な項目リストを表示するために、[IgxForOf](for-of.md) ディレクティブの使用方法を完全に統合できます。</p>

## Angular 仮想ドロップダウンの例
<div class="sample-container loading" style="height:320px">
    <iframe id="dropdown-virtual-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-virtual' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-virtual-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-virtual-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

## 使用方法

### はじめに

仮想アイテムのリストを表示するようにドロップダウンを設定するには、いくつかの前提条件を満たす必要があります。
はじめにドロップダウンを宣言するコンポーネントのモジュールに `IgxForOfModule` をインポートする必要があります。

```typescript
// app.module.ts
import { IgxForOfModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxForOfModule,
        ...
    ]
})
export class AppModule {}
```

### テンプレートの構成

次に、`*ngFor` の代わりに [`*igxFor`]({environment:angularApiUrl}/classes/igxforofdirective.html) を使用してデータをループ処理し、ドロップダウン コンポーネントのテンプレートを作成する必要があります。`*igxFor` ディレクティブは、すべての項目を正しく表示するために追加の構成が必要です。

```html
<!-- drop-down-virtual.component.html -->
<button igxButton [igxToggleAction]="dropdown"
        [igxDropDownItemNavigation]="dropdown">
        Item Series
</button>
<igx-drop-down #dropdown>
    <div class="drop-down-virtual-wrapper" style="height: {{ itemsMaxHeight }}px;">
        <igx-drop-down-item
            *igxFor="let item of items; index as index;
                     scrollOrientation: 'vertical';
                     containerSize: itemsMaxHeight;
                     itemSize: itemHeight;"
            [value]="item" [isHeader]="item.header"
            role="option" [disabled]="item.disabled"
            [index]="index">
            {{ item.name }}
        </igx-drop-down-item>
    </div>
</igx-drop-down>
<div>Selected Model: <span>{{ dropdown.selectedItem?.value.name }}</span></div>
```
以下は、`*igxFor` ディレクティブに渡される追加パラメーターです。
 - `index` - データセット内の現在の項目のインデックスを取得します。
 - `scrollOrientation` - 常に `'vertical'` にする必要があります。
 - `containerSize` - 仮想化コンテナのサイズ (ピクセル単位)。これは、ラッピング <div> にも適用する必要があります。
 - `itemSize` - 表示される項目のサイズ (ピクセル単位)。

項目の一意性を確保するために、[`value`]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#value) input の内の `item` および `igx-drop-down-item` の [`index`]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#index) 内の `index` を渡します。
スクロールしながら選択を維持するには、ドロップダウン 項目はそれがバインドされているデータ項目への参照を持つ必要があります。

> [!NOTE]
> ドロップダウンが項目の仮想化リストで機能するためには、[`value`]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#value) および [`index`]({environment:angularApiUrl}/classes/igxdropdownitemcomponent.html#index) の入力をすべての項目に渡す必要があります。
> [!NOTE]
> 各項目に対して `[value]` 入力に渡される一意の値を持たない場合、予想外の結果 (誤った選択) となる場合があります。 
> [!NOTE]
> ドロップダウンが仮想化項目を使用する場合、[`dropdown.selectedItem`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#selecteditem) の種類は `{ value: any, index: number }` になります。ここで、`value` はデータ項目への参照です。`[value]` input の内に渡され、`index` はデータセット内の項目のインデックスです。


### コンポーネント定義

コンポーネントの constructor 内で、ドロップダウンに表示される、適度に大きな項目のリスト (ヘッダーと無効なアイテムの両方を含む) を宣言します。`itemHeight` と `itemsMaxHeight` を宣言する必要があります。

```typescript
// drop-drop-virtual.component.ts
export class DropDownVirtualComponent {
  public items: DataItem[];
  public itemHeight = 48;
  public itemsMaxHeight = 320;

  constructor() {
    const itemsCollection: DataItem[] = [];
    for (let i = 0; i < 50; i++) {
        const series = (i * 10).toString();
        itemsCollection.push({
            id: series,
            name: `${series} Series`,
            header: true,
            disabled: false
        });
        for (let j = 0; j < 10; j++) {
            itemsCollection.push({
                id: `${series}_${j}`,
                name: `Series ${series}, ${i * 10 + j} Model`,
                header: false,
                disabled: j % 9 === 0
            });
        }
    }
    this.items = itemsCollection;
  }
}
```

### スタイル

最後に、ラッピング div に `overflow: hidden` を設定して、2 つのスクロールバー (`igxFor` のスクロールバーとコンテナー自体のスクロールバー) が表示されないようにします。

```scss
// drop-drop-virtual.component.scss
.drop-down-virtual-wrapper {
    overflow: hidden;
}
```

## リモート データ
`igx-drop-down` は、`*igxFor` 構造ディレクティブを使用したリモート データの部分的な読み込みをサポートします。構成はローカル項目の構成に似ていますが、主な違いはデータ部分の読み込み方法です。

### テンプレート
ドロップダウン テンプレートは、以前の例 と比べてそれほど変更する必要はありません。それでも、ラッピング div を指定し、それに応じてスタイルを設定し、`*igxFor` の完全な設定を書き出す必要があります。リモートソースからデータを取得するので、データが観測可能になるように指定して Angular の `非同期`パイプに渡す必要があります。

```html
<igx-drop-down #remoteDropDown>
    <div class="drop-down-virtual-wrapper">
        <igx-drop-down-item
            *igxFor="let item of rData | async; index as index;
                     scrollOrientation: 'vertical';
                     containerSize: itemsMaxHeight;
                     itemSize: itemHeight;"
            [value]="item.ProductName" role="option"
            [disabled]="item.disabled" [index]="index">
            {{ item.ProductName }}
        </igx-drop-down-item>
    </div>
</igx-drop-down>
```

### チャンクロードの処理
ご覧のとおり、テンプレートは前の例のテンプレートとほとんど同じです。このリモートデータのシナリオでは、背後にあるコードが大部分の負担を軽減します。

まず、データを取得するためのリモートサービスを定義する必要があります。

```typescript
// remote.service.ts
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IForOfState } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class RemoteService {
    public remoteData: Observable<any[]>;
    private _remoteData: BehaviorSubject<any[]>;

    constructor(private http: HttpClient) {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
    }

    public getData(data?: IForOfState, cb?: (any) => void): any {
        // Assuming that the API service is RESTful and can take the following:
        // skip: start index of the data that we fecth
        // count: number of records we fetch
    this.http.get(`https://dummy.db/dummyEndpoint?skip=${data.startIndex}&count=${data.chunkSize}`).subscribe((data) => {
        // emit the values through the _remoteData subject
        this._remoteData.next(data);
    })
}
```

このサービスは、`remoteData` の下に `Observable` を公開します。リモート ドロップダウン コンポーネントでサービスを注入し、そのプロパティにバインドします。

```typescript
// remote-drop-down.component.ts
@Component({
    providers: [RemoteService],
    selector: "app-drop-down-remote",
    templateUrl: "./drop-down-remote.component.html",
    styleUrls: ["./drop-down-remote.component.scss"]
})
export class DropDownRemoteComponent implements OnInit, OnDestroy {
    @ViewChild(IgxForOfDirective, { read: IgxForOfDirective })
    public remoteForDir: IgxForOfDirective<any>;
    @ViewChild("remoteDropDown", { read: IgxDropDownComponent })
    public remoteDropDown: IgxDropDownComponent;
    public itemHeight = 48;
    public itemsMaxHeight = 480;
    public prevRequest: Subscription;
    public rData: any;

    private destroy$ = new Subject();
    constructor(private remoteService: RemoteService) { }

    public ngAfterViewInit() {
        const initialState = { startIndex: 0, chunkSize: Math.ceil(this.itemsMaxHeight / this.itemHeight) }
        this.remoteService.getData(initialState, (data) => {
            this.remoteForDir.totalItemCount = data["@odata.count"];
        });
        // Subscribe to igxForOf.onChunkPreload and load new data from service
        this.remoteForDir.onChunkPreload.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            this.dataLoading(data);
        });
    }

    public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.prevRequest = this.remoteService.getData(
            evt,
            (data) => {
                this.remoteForDir.totalItemCount = data["@odata.count"];
            });
    }

    public ngOnInit() {
        this.rData = this.remoteService.remoteData;
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
```

`ngAfterViewInit` フックの内部で、初期状態のデータを取得し、`igxForOf` ディレクティブの [onChunkPreload]({environment:angularApiUrl}/classes/igxforofdirective.html#onchunkpreload) エミッターをサブスクライブするために呼び出します。このサブスクリプションは、ロードされたチャンクが変更されるたびにデータを取得します。コンポーネントの破棄時にエミッターから簡単にサブスクライブ解除できるように、`pipe(takeUntil(this.destroy$))` を使用します。

### リモートの仮想化 - デモ
上記の設定の結果は、スクロールバーの状態に応じて表示されるはずのデータを動的にロードするドロップダウンです。

<div class="sample-container loading" style="height:400px">
    <iframe id="dropdown-remote-iframe" src='{environment:demosBaseUrl}/data-entries/dropdown-remote' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="dropdown-remote-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="dropdown-remote-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

## 注意と制限

仮想化された項目のリストでドロップダウンを使用すると、いくつかの制限があります。`*igxFor` を使用してドロップダウン リストを設定するときは、次の点に注意してください。
 - ループされているロップダウン項目は、次の css を持つラッピング要素 (`<div>` など) で渡す必要があります。`overflow: hidden` と `height` が `containerSize` に等しい (`px` で) 。
 - リストが仮想化されている場合、`<igx-drop-down-item-group>` を項目のグループ化に使用することはできません。代わりに `isHeader` プロパティを使用します。
 - `items` アクセサーは、現在仮想化ビューにあるヘッダー以外のロップダウン項目のリストのみを返します。
 - [`dropdown.selectedItem`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#selecteditem) は、タイプ  `{ value: any, index: number }` です。
 - [`onSelection`]({environment:angularApiUrl}/classes/igxdropdowncomponent.html#onselection) によって発行されたオブジェクトは、`const emittedEvent: { newSelection: { value: any, index: number }, oldSelection: { value: any, index: number }, cancel: boolean, } ` に変更されます。
 - `dropdown.setSelectedItem` は、**データセット内の項目のインデックス**を使用して呼び出す必要があります。
 - ドロップダウン項目の `[selected]` 入力を設定しても、ドロップダウン選択内の項目はマークされません。

## API リファレンス

* [IgxForOfDirective]({environment:angularApiUrl}/classes/igxforofdirective.html)
* [IgxDropDownComponent]({environment:angularApiUrl}/classes/igxdropdowncomponent.html)




