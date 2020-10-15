---
title: コンボ リモート バインディング
_description: igx-combo は、コンボをリモートサービスにバインドしてデータをオンデマンドで取得する API を公開します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular Combo コントロール, Angular Combo リモート バインディング
_language: ja
---

# コンボ リモート バインディング
<p class="highlight">
Ignite UI for Angular Combo コンポーネントは、コンボをリモート サービスにバインドし、要求に応じてデータを取得できる API を公開します。
</p>

## デモ
以下のサンプルは、[onDataPreLoad]({environment:angularApiUrl}/classes/igxcombocomponent.html#ondatapreload) プロパティを使用してリモート データの新しい部分をロードするリモート バインディングを示しています。

<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-remote-sample" frameborder="0" seamless="" width="700px" height="100%" src="{environment:demosBaseUrl}/lists/combo-remote" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-remote-sample" data-demos-base-url="{environment:demosBaseUrl}">CodeSandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-remote-sample" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

## 使用方法
Combo コンポーネントを初期化にするには、まず `IgxComboModule` を **app.module.ts**  ファイルにインポートします。デモではサーバー要求にリモート サービスを使用しているため、追加で `HttpClientModule` を含む必要があります。

```typescript
import { IgxComboModule } from 'igniteui-angular';
import { HttpClientModule } from "@angular/common/http";

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
コンボをリモートデータへバインドする際にサーバーからデータをオンデマンドで読み込むための有効なサービスが必要です。Combo コンポーネントは [virtualizationState]({environment:angularApiUrl}/classes/igxcombocomponent.html#virtualizationstate) プロパティを公開し、コンボの状態 (最初のインデックスと読み込む必要のある項目数) を提供します。スクロール サイズを正しく表示するには、[totalItemCount]({environment:angularApiUrl}/classes/igxcombocomponent.html#totalitemcount) プロパティにサーバー上の全項目に対応する値が必要です。

以下のコードは、`getData()` メソッドでシンプルなサービスを定義し、コンボの状態を受け取り、observable としてデータを返します。

```typescript
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

    // Use combo current virtualization state and search text to build URL and request the new data.
    public getData(data?: IForOfState, searchText?: string, cb?: (any) => void): any { }
}
```

### コンボをリモート サービスへバインド
データがサービスから observable として返されると [async](https://angular.io/api/common/AsyncPipe) パイプを使用して Combo コンポーネントに設定します。

```html
<igx-combo [data]="rData | async" 
           [valueKey]="'ProductID'" 
           [displayKey]="'ProductName'" 
           (onDataPreLoad)="dataLoading($event)"
           (onSearchInput)="searchInput($event)"
           (onOpening)="searchInput('')">
</igx-combo>
```

以下は、コンボ コンポーネントが新しいデータを要求する必要がある一般的な例です。
    - コンボが初期化されたとき
    - コンボのリストをスクロールしたとき - 新しいコンボ `virtualizationState` と `onDataPreLoad` を発生し、リモート サービスに新しい要求を送ることができます。
    - コンボで検索するとき - リモート結果のフィルターを要求する必要があります。
    - コンボが開いたとき - 以前のフィルター処理の結果をクリアします。

以下は定義済みの操作をリッスンしてサーバーへ要求するハンドラーです。

```typescript
import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { IgxComboComponent } from "igniteui-angular";
import { RemoteService } from "../../grid/services/remote.service";

@Component({
    providers: [RemoteService],
    selector: "app-combo-remote",
    styleUrls: ["./combo-remote.component.scss"],
    templateUrl: "./combo-remote.component.html"
})
export class ComboRemoteComponent implements OnInit {

    public prevRequest: any;
    public rData: any;
    @ViewChild("remoteCombo", { read: IgxComboComponent }) public remoteCombo: IgxComboComponent;

    constructor(private remoteService: RemoteService, public cdr: ChangeDetectorRef) { }

    public ngOnInit() {
        this.rData = this.remoteService.remoteData;
    }

    public ngAfterViewInit() {
        this.remoteService.getData(this.remoteCombo.virtualizationState, null, (data) => {
            this.remoteCombo.totalItemCount = data["@odata.count"];
        });
    }

    public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.prevRequest = this.remoteService.getData(
            this.remoteCombo.virtualizationState,
            null,
            (data) => {
              this.remoteCombo.totalItemCount = data["@odata.count"];
              this.cdr.detectChanges();
        });
    }

    public searchInput(searchText) {
        this.remoteService.getData(this.remoteCombo.virtualizationState, searchText, (data) => {
            this.remoteCombo.totalItemCount = data["@odata.count"];
        });
    }
}
```

> [!Note]
> 新しいデータが読み込まれた際にスクロールバーが適切なサイズになるよう `totalItemCount` プロパティを更新します。その際サービスは `@odata.count` プロパティを使用して合計サイズを返します。

> [!Note]
> サービスはプロバイダーとして含む必要があります。

### 選択の処理
より複雑なデータ型 (オブジェクトなど) を扱うチャンクでロードされたリモート データにバインドされたコンボを使用する場合、`valueKey` を定義する必要があります。[コンボ トピック](combo.md#データ値と表示プロパティ)で述べたように、`valueKey` が指定されていない場合、コンボは選択を `equality (===)` で処理しようとします。選択済みとしてマークされるオブジェクトは、継続的にロードされるオブジェクトと同じではないため、選択は失敗します。

> [!Note]
> コンボをリモートデータにバインドするときは、各項目に固有のプロパティを表す `valueKey` を指定してください。

コンボがリモートデータにバインドされている場合、APIを介して値/選択項目を設定すると、現在のチャンクにロードされた項目のみが考慮されます。初期値を設定したい場合は、選択する前にそれらの特定の項目がロードされていることを確認してください。

## API まとめ
<div class="divider--half"></div>

* [IgxComboComponent]({environment:angularApiUrl}/classes/igxcombocomponent.html) 
* [IgxComboComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-combo-theme)

## その他のリソース
<div class="divider--half"></div>

* [コンボ コンポーネント](combo.md)
* [コンボ機能](combo_features.md)
* [コンボ テンプレート](combo_templates.md)
* [テンプレート駆動フォームの統合](input_group.md)
* [リアクティブ フォームの統合](input_group_reactive_forms.md)
* [カスケーディング](combo_cascading.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)