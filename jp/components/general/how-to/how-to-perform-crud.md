---
title: Angular で CRUD 操作を有効にする方法
_description: Angular で CRUD サービスを構築し、それを使用してグリッド データで CRUD 操作を実行する方法を紹介します。
_keywords: angular, crud, crud 操作, インフラジスティックス, crud チュートリアル
_language: ja
---

# CRUD とは?

CRUD は、データ コレクションに対して実行できる CREATE、READ、UPDATE、DELETE 操作を表すコンピューター プログラミングの頭字語です。
# Angular CRUD

Angular CRUD、または Angular での CRUD 操作に関しては、データ ストレージがリモート サーバー上にあることに注意することが重要です。Angular アプリケーションはデータ レイヤーに直接アクセスできないため、CRUD 操作のエンドポイントを提供する Web API を介して Angular アプリケーションと通信する必要があります。例えば:
 
| API | 操作 | HTTP メソッド |
|-----|-----------| ----------- |
| "api/entities" | すべてのエンティティを読み取る | GET |
| "api/entities/id" | 対応する ID を持つエンティティを読み取る | GET |
| "api/entities/update" | 対応する ID でエンティティを更新する  | PUT / PATCH |
| "api/entities/create" | 新しいエンティティを生成する | POST |
| "api/entities/delete" | 対応する ID を持つエンティティを削除する | DELETE |

CRUD 操作は、HTTP を介して API と通信するために使用される HTTP メソッドにも概念的にマップされていることに注意してください。

上記の API で動作するコード全体は、Angular サービスで抽象化できます。このようなサービスは注入可能であり、同じデータベースに対して CRUD 操作を実行する必要がある任意のコンポーネントで再利用できます。このようなサービスをできるだけ汎用的に記述して、多くのコンポーネントで、またさまざまなサーバーに対しても再利用できるようにすることをお勧めします。

このようなサービスの一般的な例は次のようになります:


```typescript
@Injectable()
export class CRUDService {
  /** See https://angular.io/api/common/http/HttpClient */
  constructor(private http: HttpClient) { }

  /** Gets all entities from server */
  public getData() {
      return this.http.get(`${this.serverURL}\api\entities`);
  }

  /** Gets entity with corrresponding id */
  public getRecord(id) {
      return this.http.get(`${this.serverURL}\api\entities\${id}`);
  }

  /** Creates entity from body */
  public add(entity) {
      return this.http.post(`${this.serverURL}\api\entities\create`, entity);
  }

  /* Updates entity with data from body */
  public update(entity) {
      return this.http.put(`${this.serverURL}\api\entities\update`, entity);
  }

  /** Deletes the corresponding entity */
  public delete(entity) {
      return this.http.delete(`${this.serverURL}\api\entities\delete`, entity);
  }
}
```

上記のサービスに欠けているのは、フィルタリング / ソート / ページングなどの構成です。エンドポイントの正確な API 実装によっては、サーバーへのリクエストで、フィルタリング / ソート / ページングを処理するためのオプションのパラメーターが必要になる場合があります。コード例を伴うデモについては、[リモート データ操作](../../grid/remote-data-operations.md)を参照してください。

その他の例とガイダンスについては、公式の Angular ドキュメントの [HTTP Services (英語)](https://angular.io/tutorial/toh-pt6) チュートリアルを参照してください。


# グリッドを使用した CRUD 操作 

グリッドで CRUD を有効にするということは、ユーザーがグリッド内からこれらの CRUD 操作を実行するための UI を提供することを意味します。これは非常に簡単です。グリッドには、[**セル編集**](../../grid/cell-editing.md)、[**行編集**](../../grid/row-editing.md)、[**行追加**](../../grid/row-adding.md)、**行削除** UI が用意されており、これを独自に実行するための強力な API が用意されています。次に、各編集アクションの結果を取得し、それを CRUD サービスの対応するメソッドに伝達して、元のデータベースへのすべての変更を保持します。これを完了することで、グリッドで CRUD が有効になっていると言えます。


このセクションは、グリッドで CRUD 操作を有効にするためのチュートリアルであり、コード スニペットを取得してコードにコピーし貼り付けることができます。



## 操作方法
まず、rowEditing 動作を有効にし、編集アクションに必要な UI を用意して、`IgxActionStrip` ([`IgxActionStrip`](../../action-strip.md) の詳細を参照) を利用し、イベント ハンドラーをアタッチします。

```html
<igx-grid 
    primaryKey="ID"
    [rowEditable]="true"
    (rowAdded)="rowAdded($event)"
    (rowDeleted)="rowDeleted($event)"
    (rowEditDone)="rowEditDone($event)">

  <igx-action-strip #actionstrip>
      <igx-grid-editing-actions [addRow]="true"></igx-grid-editing-actions>
  </igx-action-strip>
```

Angular コンポーネントで、DI を使用してデータ サービスを注入します。これで、サービスを使用してデータ レイヤーに対して完全な CRUD 操作を実行する準備が整いました。

```typescript
constructor(private crudService: CRUDService) { }

public rowDeleted(event: IRowDataEventArgs) {
    this._crudService.delete(event.data).subscribe((rec) => {
        // notification or do any adittional handling
        this.snackbar.open(`Row with ID of ${rec.ID} was deleted.`);
    });
}

public rowAdded(event: IRowDataEventArgs) {
    this._crudService.add(event.data);
}

public rowEditDone(event: IGridEditDoneEventArgs) {
    this._crudService.update(event.newValue);
}
```

上記の例では、対応するメソッドのみを呼び出し、イベント引数から読み取られたデータを渡します。ほとんどの API エンドポイントは、更新 / 追加 / 削除されたエンティティを返します。これは、リクエストが成功したことを示します。 

検証を追加して、すべてのアクションが正常に完了したこと、またはエラーが発生したことをユーザーに通知することをお勧めします。このような場合は、エラーのハンドラーを渡して通知を完了することもできます。

```typescript
this._crudService.delete(event.data).subscribe({
    next: (data: any) => {
      console.log('success');
    },
    error: err => {
      console.log(err);
    },
    complete: () => {
      console.log('Complete notification')
    }
});
```

> [!NOTE]
> 上記の例は、アクションを編集するためのデフォルトのグリッド UI に基づいています。もう 1 つの有効なアプローチは、独自の外部 UI を提供する場合です。このような場合、UI を使用したユーザーの操作への応答は、グリッド編集 API で機能する必要があります (**グリッドに primaryKey が設定されていることを確認してください**)。参考のために [**API**](how-to-perform-crud.md#api-の編集) セクションを参照してください。

> [!NOTE]
> ベスト プラクティスに従い、サーバー データベースと比較してローカル データに違いがないようにしてください。たとえば、最初にサーバーにレコードの削除をリクエストすることもできますが、リクエストが失敗した場合は、ローカル グリッド データのデータを削除しないでください。

```typescript
this._crudService.delete(event.data).subscribe({
    next: (data: any) => {
      this.grid.getRowByKey(event.data[this.grid.primaryKey]).delete();
    },
    error: err => {
      console.log(err); // notify and don't delete the grid row
    }
});
```

## デモ

ガイダンスに従って作成されたデモを参照してください。それを試してみて、シナリオに最適な方法でカスタマイズするための例を試してください。

<code-view style="height:410px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-crud" >
</code-view>

# カスタマイズ
豊富な Grid API を使用すると、ニーズに合わせて編集プロセスをほぼすべての方法でカスタマイズできます。これには以下が含まれますが、これらに限定されません:
 - [**一括編集**](how-to-perform-crud.md#一括編集):  一括編集を有効にすると、すべての更新を一括処理し、単一のリクエストですべてをコミットできます。
 - [**テンプレート**](how-to-perform-crud.md#テンプレート):  セル編集用のテンプレートを追加するか、行 / セル編集、行追加、および行削除に独自の外部 UI を使用します。
 - [**イベント**](how-to-perform-crud.md#イベント):  編集フローを監視し、それに応じて対応します。編集中に発行されたすべてのイベントにイベント ハンドラーをアタッチすると、次のことが可能になります:
    - セルごとのデータ検証
    - 行ごとのデータ検証
    - 予想される入力タイプの入力をユーザーにプロンプト
    - ビジネス ルールに基づいて、それ以上の処理をキャンセル
    - 変更の手動コミット
- [**リッチな API**](how-to-perform-crud.md#api-の編集)

## 一括編集
 - **一括編集**を有効にして更新をクライアントに保持し、単一のリクエストですべてをコミットします。一括更新は、`batchEditing` オプションを true に設定することで有効になります:
 ```html
 <igx-grid [batchEditing]="'true'" ...>
 ```
 
詳細とデモ サンプルについては、[一括編集](../../grid/batch-editing.md)にアクセスしてください。

## テンプレート

デフォルトのセル編集テンプレートの詳細については、[一般的な編集トピック](../../grid/editing.md#テンプレートの編集)を参照してください。

セルが編集モードのときに適用されるカスタム テンプレートを提供する場合は、[`igxCellEditor` ディレクティブ]({environment:angularApiUrl}/classes/igxcelltemplatedirective.html)を使用できます。これを行うには、`igxCellEditor` ディレクティブでマークされた `ng-template` を渡し、カスタム コントロールを [`cell.editValue`]({environment:angularApiUrl}/classes/igxgridcell.html#editValue) に適切にバインドする必要があります。

```html
<igx-column field="class" header="Class" [editable]="true">
    <ng-template igxCellEditor let-cell="cell" let-value>
        <igx-select class="cell-select" [(ngModel)]="cell.editValue" [igxFocus]="true">
            <igx-select-item *ngFor="let class of classes" [value]="class">
                {{ class }}
            </igx-select-item>
        </igx-select>
    </ng-template>
</igx-column>
```

詳細とデモについては、[セル編集](../../grid/cell-editing.md)のトピックを参照してください。

## イベント
グリッドは、編集エクスペリエンスをより詳細に制御できる広範なイベントを公開します。これらのイベントは、[**行編集**](../../grid/row-editing.md)および[**セル編集**](../../grid/cell-editing.md)のライフサイクル中、つまり編集アクションを開始、コミット、またはキャンセルするときに発生します。

 | イベント | 説明 | 引数 | キャンセル可能 |
|-------|-------------|-----------|-------------|
| [`rowEditEnter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowEditEnter) | `rowEditing` が有効になっている場合、行が編集モードに入ると発生します。 | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`cellEditEnter`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellEditEnter) | セルが**編集モード**に入ると発生します (`rowEditEnter` の後)。 | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`cellEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellEdit) | 値が変更された場合、セルの値が**コミットされる**直**前に**発生します (たとえば、`Enter` キーを押すことによって)。 | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`cellEditDone`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellEditDone) | 値が変更された場合、セルが編集され、セルの値が**コミットされた後に**発生します。 | [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igrideditdoneeventargs.html) | `false` |
| [`cellEditExit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellEditExit) | セルが**編集モードを終了する**と発生します。 | [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `false` |
| [`rowEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowEdit) | `rowEditing` が有効になっている場合、編集モードの値の行が**コミットされる**直前に発生します (たとえば、行編集オーバーレイの `Done` ボタンをクリックすることにより)。 | [IGridEditEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `true` |
| [`rowEditDone`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowEditDone) | `rowEditing` が有効になっている場合、行が編集され、新しい行の値が**コミットされた後に**発生します。 | [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `false` |
| [`rowEditExit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowEditExit) | `rowEditing` が有効になっている場合、行が**編集モードを終了する**と発生します。 | [IGridEditDoneEventArgs]({environment:angularApiUrl}/interfaces/igridediteventargs.html) | `false` |

詳細とデモ サンプルについては、[イベント](../../grid/editing.md#イベントの引数とシーケンス)にアクセスしてください。

## API の編集
グリッド内のデータの更新は、グリッドによって公開される方法によって実現されます:
- [`updateRow`]({environment:angularApiUrl}/classes/igxgridcomponent.html#updateRow)
- [`updateCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#updateCell) 
- [`deleteRow`]({environment:angularApiUrl}/classes/igxgridcomponent.html#deleteRow)
- [`addRow`]({environment:angularApiUrl}/classes/igxgridcomponent.html#addRow)

また、[IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html) インスタンスと [IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html) インスタンスによって公開される `update` メソッドによって実現されます:

```typescript
// Through the grid methods
this.grid.updateRow(newData, rowKey);
this.grid.updateCell(newData, rowKey, columnField);
this.grid1.deleteRow(0);
this.grid.addRow(data);

// Through the methods exposed by cell/row
this.grid.getCellByColumn(rowIndex, columnField).update(newData);
this.grid.getCellByKey(rowKey, columnField).value = newData;
this.grid.getRowByKey(rowID).update(newData);
this.grid.getRowByKey(rowID).delete();
```

グリッド API の使用に関する詳細と情報は、[セル編集 CRUD 操作](../../grid/cell-editing.md#crud-操作)セクションにあります。

# トピックの重要ポイント
堅牢な方法で CRUD を有効にすることは、データ駆動型アプリケーションにとって重要なマイルストーンです。プロセス全体を合理化するために、CRUD 機能を念頭に置いて IgxGrid を構築し、すぐに使用できる UI と柔軟な API を提供します。利点としては、任意のデータベースに対して CRUD を実装する場合、多くの時間を節約できます。そして、現代のデータ駆動型アプリに関しては、堅牢性、速度、柔軟性が最も重要です。

# API リファレンス
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html)
* [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html)
* [`IgxActionStripComponent API`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html)
* [`IgxGridActionsBaseDirective `]({environment:angularApiUrl}/classes/igxgridactionsbasedirective.html)
* [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxgridpinningactionscomponent.html)
* [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html)









