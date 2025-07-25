---
title: ComboBox リモート バインディング
_description: igx-combo は、コンボをリモートサービスにバインドしてデータをオンデマンドで取得する API を公開します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular Combo コントロール, Angular Combo リモート バインディング
_language: ja
---

# ComboBox (コンボボックス) リモート バインディング
<p class="highlight">
Ignite UI for Angular ComboBox コンポーネントは、コンボボックスをリモート サービスにバインドし、要求に応じてデータを取得できる API を公開します。
</p>

## Angular コンボボックス リモート バインディングの例
以下のサンプルは、[dataPreLoad]({environment:angularApiUrl}/classes/IgxComboComponent.html#dataPreLoad) プロパティを使用してリモート データの新しい部分をロードするリモート バインディングを示しています。


<code-view style="height: 400px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/combo-remote" alt="Angular コンボボックス リモート バインディングの例">
</code-view>


## 使用方法
ComboBox コンポーネントを初期化にするには、まず `IgxComboModule` を **app.module.ts**  ファイルにインポートします。デモではサーバー要求にリモート サービスを使用しているため、追加で `HttpClientModule` を含む必要があります。

```typescript
import { IgxComboModule } from 'igniteui-angular';
// import { IgxComboModule } from '@infragistics/igniteui-angular'; for licensed package

import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        ...
        IgxComboModule,
        HttpClientModule,
        ...
    ]
})
export class AppModule {}
```

### リモート サービスの定義
コンボボックスをリモートデータへバインドする際にサーバーからデータをオンデマンドで読み込むための有効なサービスが必要です。コンボボックス コンポーネントは [virtualizationState]{environment:angularApiUrl}/classes/IgxComboComponent.html#virtualizationState) プロパティを公開し、コンボボックスの状態 (最初のインデックスと読み込む必要のある項目数) を提供します。スクロール サイズを正しく表示するには、[totalItemCount]({environment:angularApiUrl}/classes/IgxComboComponent.html#totalItemCount) プロパティにサーバー上の全項目に対応する値が必要です。

以下のコードは、`getData()` メソッドでシンプルなサービスを定義し、コンボボックスの状態を受け取り、observable としてデータを返します。

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IForOfState } from 'igniteui-angular';
// import { IForOfState } from '@infragistics/igniteui-angular'; for licensed package
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class RemoteService {
    public remoteData: Observable<any[]>;
    private _remoteData: BehaviorSubject<any[]>;

    constructor(private http: HttpClient) {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
    }

    // Use combobox current virtualization state and search text to build URL and request the new data.
    public getData(data?: IForOfState, searchText?: string, cb?: (any) => void): any { }
}
```

### コンボボックスをリモート サービスへバインド
データがサービスから observable として返されると [async](https://angular.io/api/common/AsyncPipe) パイプを使用してコンボボックス コンポーネントに設定します。

```html
<igx-combo [data]="rData | async"
           [valueKey]="'ProductID'"
           [displayKey]="'ProductName'"
           (dataPreLoad)="dataLoading($event)"
           (searchInputUpdate)="handleSearchInputUpdate($event)"
           (selectionChanging)="handleSelectionChanging($event)"
           (closing)="onClosing()"
           (opened)="onOpened()"
           (closed)="onClosed()"
           [filterable]="true">
</igx-combo>
```

以下は、コンボボックス コンポーネントが新しいデータを要求する必要がある一般的な例です。
    - コンボボックスが初期化されたとき
    - コンボボックスのリストをスクロールしたとき - 新しいコンボボックス `virtualizationState` と `dataPreLoad` を発生し、リモート サービスに新しい要求を送ることができます。
    - コンボボックスで検索するとき - リモート結果のフィルターを要求する必要があります。
    - コンボボックスが開いたとき - 以前のフィルター処理の結果をクリアします。

以下は定義済みの操作をリッスンしてサーバーへ要求するハンドラーです。

```typescript
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular';
// import { IgxComboComponent } from '@infragistics/igniteui-angular'; for licensed package

import { RemoteService } from '../../grid/services/remote.service';

@Component({
    providers: [RemoteService],
    selector: 'app-combo-remote',
    styleUrls: ['./combo-remote.component.scss'],
    templateUrl: './combo-remote.component.html'
})
export class ComboRemoteComponent implements OnInit {
    @ViewChild('remoteCombo', { read: IgxComboComponent }) public remoteCombo: IgxComboComponent;

    public prevRequest: any;
    public rData: any;

    private searchText: string = null;
    private defaultVirtState: IForOfState = { chunkSize: 6, startIndex: 0 };

    private currentVirtState: IForOfState = { chunkSize: 6, startIndex: 0 };
    private itemID: number = 1;
    private itemCount: number = 0;
    private hasSelection: boolean;
    private additionalScroll: number = 0;

    constructor(private remoteService: RemoteService, public cdr: ChangeDetectorRef) { }

    public ngOnInit() {
        this.rData = this.remoteService.remoteData;
    }

    public ngAfterViewInit() {
        const initSize = {
            startIndex: 0,
            chunkSize: Math.ceil(250 / this.remoteCombo.itemHeight)
        };
        this.remoteService.getData(initSize, null, (data) => {
            this.remoteCombo.totalItemCount = data['@odata.count'];
            this.itemCount = this.remoteCombo.totalItemCount;
        });
    }

    public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.prevRequest = this.remoteService.getData(
            this.remoteCombo.virtualizationState,
            this.searchText,
            (data) => {
                this.remoteCombo.totalItemCount = data['@odata.count'];
                this.cdr.detectChanges();
        });
    }

    public handleSearchInputUpdate(searchData: IComboSearchInputEventArgs) {
        this.currentVirtState.startIndex = 0;
        this.currentVirtState.chunkSize = Math.ceil(this.remoteCombo.itemsMaxHeight / this.remoteCombo.itemHeight);
        this.searchText = searchData?.searchText || '';
        this.remoteService.getData(
            this.searchText ? this.currentVirtState : this.defaultVirtState,
            this.searchText,
            (data) => {
                this.remoteCombo.totalItemCount = data['@odata.count'];
            }
        );
    }

    public onOpened() {
        const scroll: number = this.remoteCombo.virtualScrollContainer.getScrollForIndex(this.itemID - 1);
        this.remoteCombo.virtualScrollContainer.scrollPosition = scroll + this.additionalScroll;
        this.cdr.detectChanges();
    }

    public onClosing() {
        this.searchText = '';
    }

    public onClosed() {
        this.currentVirtState.startIndex = (this.itemID || 1) - 1;
        this.remoteService.getData(
            this.currentVirtState,
            this.searchText,
            (data) => {
                this.remoteCombo.totalItemCount = data['@odata.count'];
                this.cdr.detectChanges();
            }
        );
    }

    public handleSelectionChanging(evt: IComboSelectionChangingEventArgs) {
        this.hasSelection = !!evt?.newSelection.length;

        if (!this.hasSelection) {
            this.itemID = 1;
            this.currentVirtState = this.defaultVirtState;
            return;
        }

        const currentSelection = evt.newSelection[evt.newSelection.length - 1]
        this.currentVirtState.chunkSize = Math.ceil(this.remoteCombo.itemsMaxHeight / this.remoteCombo.itemHeight);

        this.itemCount === currentSelection ?
            this.additionalScroll = this.remoteCombo.itemHeight :
            this.additionalScroll = 0;

        if (this.itemCount - currentSelection >= this.currentVirtState.chunkSize - 1) {
            this.itemID = this.currentVirtState.startIndex = currentSelection;
        } else {
            this.itemID = this.currentVirtState.startIndex = this.itemCount - (this.currentVirtState.chunkSize - 1);
        }
    }
}
```

> [!Note]
> 新しいデータが読み込まれた際にスクロールバーが適切なサイズになるよう `totalItemCount` プロパティを更新します。その際サービスは `@odata.count` プロパティを使用して合計サイズを返します。

> [!Note]
> サービスはプロバイダーとして含む必要があります。

### 選択の処理
より複雑なデータ型 (オブジェクトなど) を扱うチャンクでロードされたリモート データにバインドされたコンボボックスを使用する場合、`valueKey` を定義する必要があります。[コンボボックス トピック](combo.md#データ値と表示プロパティ)で述べたように、`valueKey` が指定されていない場合、コンボボックスは選択を `equality (===)` で処理しようとします。選択済みとしてマークされるオブジェクトは、継続的にロードされるオブジェクトと同じではないため、選択は失敗します。

> [!Note]
> コンボボックスをリモートデータにバインドするときは、各項目に固有のプロパティを表す `valueKey` を指定してください。

コンボボックスがリモートデータにバインドされている場合、APIを介して値/選択項目を設定すると、現在のチャンクにロードされた項目のみが考慮されます。初期値を設定したい場合は、選択する前にそれらの特定の項目がロードされていることを確認してください。

## API まとめ
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html)
* [IgxComboComponent スタイル]({environment:sassApiUrl}/themes#function-combo-theme)

## その他のリソース
<div class="divider--half"></div>

* [コンボボックス コンポーネント](combo.md)
* [コンボボックス機能](combo-features.md)
* [コンボボックス テンプレート](combo-templates.md)
* [テンプレート駆動フォームの統合](input-group.md)
* [リアクティブ フォームの統合](angular-reactive-form-validation.md)
* [単一選択コンボボックス](simple-combo.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
