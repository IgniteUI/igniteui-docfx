---
title: コンボ リモート バインディング
_description: igx-combo は、コンボをリモートサービスにバインドしてデータをオンデマンドで取得する API を公開します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Combo コンポーネント, Angular Combo コントロール, Angular Combo リモート バインディング
_language: ja
---

## コンボ リモート バインディング
<p class="highlight">
[igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) は、コンボをリモートサービスにバインドしてデータをオンデマンドで取得する API を公開します。
</p>
<div class="divider"></div>

### デモ
以下のサンプルは、コンボ API を使用したリモートでバインディングを行います。[valueKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#valuekey) と [displayKey]({environment:angularApiUrl}/classes/igxcombocomponent.html#displaykey) を定義し、[onDataPreLoad]({environment:angularApiUrl}/classes/igxcombocomponent.html#ondatapreload) を使用して新しいリモートデータを読み込みます。
<div class="sample-container loading" style="height: 400px;">
    <iframe id="combo-remote-sample" frameborder="0" seamless width="700px" height="100%" src="{environment:demosBaseUrl}/lists/combo-remote" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="combo-remote-sample" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="combo-remote-sample" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

### 使用方法
Ignite UI for Angular Combo を使用する前に `IgxComboModule` を **app.module.ts** ファイルにインポートします。デモではサーバー要求にリモート サービスを使用しているため、追加で Angular **HttpClientModule** を含む必要があります。

```typescript
// app.module.ts

...
import { IgxComboModule } from 'igniteui-angular';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    ...
    imports: [..., IgxComboModule, HttpClientModule],
    ...
})
export class AppModule {}
```

#### リモート サービスの定義

コンボをリモートデータへバインドする際にサーバーからデータをオンデマンドで読み込むための有効なサービスが必要です。以下のコードは、`getData()` メソッドでシンプルなサービスを定義し、コンボの状態を受け取り、observable としてデータを返します。コンボは `virtualizationState` プロパティを公開し、コンボの状態 (最初のインデックスと読み込む必要のある項目数) を提供します。
サービスはコンボにサーバーにあるすべての項目を通知します。スクロールサイズを表示するために `totalItemCount` [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) プロパティに設定する必要のある値です。

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

    public getData(data?: IForOfState, searchText?: string, cb?: (any) => void): any {
        // Use combo current virtualization state and search text to build URL and request the new data.
    }
```

#### コンボをリモート サービスへバインド

データがサービスから observable として返されると [`async`](https://angular.io/api/common/AsyncPipe) パイプを使用して [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) に設定します。

```html
<igx-combo [data]="rData | async" [valueKey]="'ProductID'" [displayKey]="'ProductName'" 
    (onDataPreLoad)="dataLoading($event)" (onSearchInput)="searchInput($event)" (onOpening)="searchInput('')"></igx-combo>
```
以下は、[igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) が新しいデータを要求する必要があるケースです。
    - コンボが初期化されたとき
    - コンボのリストをスクロールしたときコンボは、新しいコンボ `virtualizationState` と [onDataPreLoad]({environment:angularApiUrl}/classes/igxcombocomponent.html#ondatapreload) を発生し、リモート サービスに新しい要求を送ることができます。
    - [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) で検索時にリモート結果のフィルターを要求する必要があります。
    - コンボが開いたとき以前のフィルター処理の結果をクリアします。

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
> 注: 新しいデータが読み込まれた際にスクロールバーが適切なサイズになるよう `totalItemCount` [igx-combo]({environment:angularApiUrl}/classes/igxcombocomponent.html) プロパティを更新します。その際サービスは `@odata.count` プロパティを使用して合計サイズを返します。

> [!Note]
> サービスはプロバイダーとして含む必要があります。

#### 選択の処理
より複雑なデータ型 (オブジェクトなど) を扱うチャンクでロードされたリモート データにバインドされたコンボを使用する場合、`valueKey` を定義する必要があります。[選択トピック](combo.md#選択)で述べたように、`valueKey` が指定されていない場合、コンボは選択を **equality (===)** で処理しようとします。選択済みとしてマークされるオブジェクトは、継続的にロードされるオブジェクトと**同じではない**ため、選択は失敗します。
コンボをリモートデータにバインドするときは、各項目に固有のプロパティを表す `valueKey` を指定してください。

コンボがリモートデータにバインドされている場合、APIを介して値/選択項目を設定すると、**現在のチャンクにロード**された項目のみが考慮されます。初期値を設定する場合は、選択する前にそれらの特定の項目がロードされていることを確認してください。

## その他のリソース
<div class="divider--half"></div>

* [コンボの使用](combo.md)
* [コンボ機能](combo_features.md)
* [コンボ テンプレート](combo_templates.md)
* [テンプレート駆動フォームの統合](input_group.md)
* [リアクティブ フォームの統合](input_group_reactive_forms.md)
* [カスケーディング](combo_cascading.md)

コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
