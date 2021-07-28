---
title: 一括編集 | トランザクション サービス | Ignite UI for Angular | インフラジスティックス
_description: コンポーネントで Angular CRUD 操作を実行するときにバッチ編集を実装できるトランザクション サービスクラスの階層について学びます。
_keywords: batch editing, igniteui for angular, infragistics, 一括編集,
_language: ja
---

# トランザクション サービス クラス階層

## トランザクション、状態、トランザクション ログ

トランザクションは、[トランザクション サービス]({environment:angularApiUrl}/classes/igxtransactionservice.html) の主要な構成要素です。トランザクションは、データに対して実行するすべての操作を指します。[`Transaction`]({environment:angularApiUrl}/interfaces/transaction.html) インターフェイスは、3 つのプロパティ ([`id`]({environment:angularApiUrl}/interfaces/transaction.html#id)、[`newValue`]({environment:angularApiUrl}/interfaces/transaction.html#newValue)、および [`type`]({environment:angularApiUrl}/interfaces/transaction.html#type) を定義します。

トランザクションの [`id`]({environment:angularApiUrl}/interfaces/transaction.html#id) はデータレコードごとに一意である必要があり、このトランザクションが影響するレコードを定義します。[`type`]({environment:angularApiUrl}/enums/transactiontype.html#type) は、実行する操作に応じて、`ADD`、`DELETE`、`UPDATE` の 3 つのトランザクションタイプのいずれかになります。[`newValue`]({environment:angularApiUrl}/interfaces/transaction.html#newValue) には、`ADD` トランザクションを追加する場合の新しいレコードの値が含まれます。既存のレコードを更新する場合、[`newValue`]({environment:angularApiUrl}/interfaces/transaction.html#newValue) には変更のみが含まれます。同じ ID の `UPDATE` タイプのトランザクションが複数あるレコードを削除する場合、[`newValue`]({environment:angularApiUrl}/interfaces/transaction.html#newValue) には削除されたレコードの値が含まれます。 

各タイプのトランザクションを追加する方法の例は、[トランザクションサービスの使用方法](transaction-how-to-use.md)のトピックで見ることができます。

操作 (トランザクション) を実行するたびに、トランザクション ログと取り消しスタックに追加されます。トランザクション ログ内のすべての変更は、レコードごとに蓄積されます。その時点から、サービスは集約された [`State`]({environment:angularApiUrl}/interfaces/state.html) を維持します。  [`State`]({environment:angularApiUrl}/interfaces/state.html) は一意のレコードで構成され、すべてのレコードは上記のサポートされているトランザクション タイプのいずれかです。

トランザクションを追加する際、[`startPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#startpending) を呼び出して、保留中のトランザクションをオンにすることができます。[`endPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#endpending) を呼び出すまで、後続のトランザクションはすべて単一のトランザクションに蓄積されます。`true` を [`endPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#endpending) に渡すと、蓄積されたすべてのトランザクションがトランザクションログと取り消しスタックに単一のトランザクションとして追加されます。

## igxBaseTransaction の使用

グリッド モジュールは、トランザクション サービス ([`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)) の非常に基本的な実装を提供し、行編集機能を可能にする保留中のセッション機能のみを提供します。[`startPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#startpending) と [`endPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#endpending) は、行編集で複数のセルごとの操作を 1 つの変更にまとめることができます。  つまり、1 つのレコードの複数のセルを編集すると、1 つのトランザクションが作成され、行編集イベントのみを処理できます。

蓄積された状態が部分的なオブジェクトであるため、サービスを使用して、どのセルが編集されたかを確認し、その周りに UI を構築することもできます。

[`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) には元に戻すスタックがないため、元に戻す/やり直しの機能は提供されません。

以下のトピックには、行編集を有効にするために [`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) を使用する方法の詳細な例が含まれます。
* [Grid 行編集](grid/row-editing.md)
* [Tree Grid 行編集](treegrid/row-editing.md)
* [Hierarchical Grid 行編集](hierarchicalgrid/row-editing.md)

## igxTransactionService および igxHierarchicalTransactionService に関する一般情報

[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) と [`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) は、[`Transaction Service`]({environment:angularApiUrl}/interfaces/transactionservice.html)インターフェイスを実装する注入可能なミドルウェアです。コンポーネントはこれらを使用して、基になるデータに影響を与えることなく変更を蓄積できます。プロバイダーは、*access*、*manipulate* (元に戻すとやり直し)、およびデータへの 1 つまたはすべての変更を*破棄またはコミット*するための API を公開します。

より具体的な例では、[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) と [`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) は、[`IgxGrid`](grid/grid.md) のセル編集と行編集の両方で機能します。セルが編集モードを終了すると、セル編集のトランザクションが追加されます。行の編集が開始されると、グリッドは [`startPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#startpending) を呼び出してトランザクションサービスを保留状態に設定します。編集された各セルは、保留中のトランザクションログに追加されますが、メイン トランザクション ログには追加されません。行が編集モードを終了すると、すべての変更がメイン トランザクション ログと undo ログに単一のトランザクションとして追加されます。

いずれのケース (セル編集と行編集) も、グリッド編集の状態は、更新、追加、削除されたすべての行とその最後の状態で構成されます。これらは、後で一度に、または ID ごとに検査、操作、および送信できます。編集モードに応じて、個々のセルまたは行の変更が収集され、データ行/レコードごとに蓄積されます。

## igxTransactionService の使用

[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) は、[`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) を拡張します。

データ操作を行うときにコンポーネントでトランザクションを使用する場合は、[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) をコンポーネントの `providers` 配列のプロバイダーとして定義する必要があります。

[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) には元に戻すスタックが含まれ、元に戻す/やり直し機能を利用できます。Undo スタックは、実際にはトランザクションの配列を含む配列です。[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) 使用時に、元に戻すスタックにトランザクションがある場合は、[`canUndo`]({environment:angularApiUrl}/classes/igxtransactionservice.html#canundo) アクセサーを確認できます。ある場合 [`undo`]({environment:angularApiUrl}/classes/igxtransactionservice.html#undo) メソッドを使用して最後のトランザクションを削除し、[`redo`]({environment:angularApiUrl}/classes/igxtransactionservice.html#redo) で最後に元に戻したトランザクションを適用します。

以下のトピックで、バッチ編集を使用した igxGrid の実装方法の詳細な例を見つけることができます。
* [Grid 一括編集](grid/batch-editing.md)

## igxHierarchicalTransactionService の使用

[`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) は、[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) を拡張します。

[`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) は、親と子の間の関係を処理するように設計されています。(たとえば、[`igxTreeGrid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) のように、階層データ構造がある場合にこれを使用します)。
このサービスは、`ADD` トランザクションを追加するときに期待する場所に新しいレコードが追加されることを保証します。親レコードを削除すると、その子は、実装に応じて、上位レベルの階層に昇格するか、親とともに削除されます。具体的な例として、ツリーグリッドの [`cascadeOnDelete`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#cascadeondelete) プロパティを確認できます。値に応じて、親レコードを削除すると、その子に異なる影響があります。

アプリケーションでは、ユーザーが既に削除された親レコードに子レコードを追加しようとし、トランザクションがコミットされるのを待っている状態を処理することができます。トランザクションサービスでは、削除する親にレコードを追加することはできず、コンソールにエラーメッセージが表示されます。ただし、親を削除するかどうかを確認し、以下のコードを使用してユーザーに独自のアラートを実装できます。
```typescript
    const state = this.transactions.getState(parentRecordID);
    if (state && state.type === TransactionType.DELETE) {
        // Implement your logic here
    }
```

以下は、[`igxTreeGrid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) と [`igxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) でバッチ編集を実装する方法の詳細な例を含むトピックです。
* [Tree Grid 一括編集](treegrid/batch-editing.md)
* [Hierarchical Grid 一括編集](hierarchicalgrid/batch-editing.md)

## トランザクション ファクトリ
Ignite UI for Angular グリッド内のトランザクションの具体的な実装では、グリッドの [`batchEditing`]({environment:angularApiUrl}/classes/igxgridbasedirective.html#batchediting) の値に応じて、適切なトランザクション サービスをインスタンス化するためにファクトリが使用されます。2 つの別々のトランザクション ファクトリがあります - [`IgxFlatTransactionFactory`]({environment:angularApiUrl}/classes/igxflatransactionfactory.html) ([`Grid`](grid/batch-editing.md) と [`Hierarchical Grid`](hierarchicalgrid/batch-editing.md) に使用) と [`IgxHierarchicalTransactionFactory`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionfactory.html) ([ツリー グリッド](treegrid/batch-editing.md)に使用)。どちらのクラスも、適切な [type](#general-information-on-igxtransactionservice-and-igxhierarchicaltransactionservice) の新しいインスタンスを返す 1 つのメソッド  `create` のみを公開します。渡されたパラメータ (`TRANSACTION_TYPE`) は内部で使用されます - `batchEditing` が **false** の場合は `None` が使用され、一括編集が有効な場合は `Base` が使用されます。展開できるため、(`true` - `false` フラグの代わりに) `enum` が使用されます。

## トランザクション ファクトリの使用
[`IgxFlatTransactionFactory`]({environment:angularApiUrl}/classes/igxflatransactionfactory.html) と [`IgxHierarchicalTransactionFactory`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionfactory.html) はどちらも `root` で提供され、パブリック API で公開されます。任意のチェックに応じて、トランザクション サービスの新しいインスタンスをインスタンス化する場合は、トランザクション ファクトリを使用できます。

以下の例では、任意の (`hasUndo`) フラグに応じてさまざまなトランザクション サービスをインスタンス化する方法を確認できます。

```typescript
import { IgxFlatTransactionFactory, TRANSACTION_TYPE } from 'igniteui-angular';

export class MyCustomComponent {
    ...
    constructor(private transactionFactory: IgxFlatTransactionFactory) {}
    ...
    public transaction!: IgxTransactionService<Transaction, State>;

    public set hasUndo(val: boolean) {
        if (val) {
            this.transactions = this.transactionFactory.create(TRANSACTION_TYPE.Base);
        } else {
            this.transactions = this.transactionFactory.create(TRANSACTION_TYPE.None);
        }
    }
}
```

独自のカスタム実装を提供するために、両方のファクトリ クラスを ( `providers` 配列を使用して) DI 階層で拡張およびオーバーライドできます。これは、ファクトリによってインスタンス化されるすべてのクラスもパブリックであるという事実と相まって、トランザクション実装を内部で使用するコンポーネントに提供されるものを大幅に制御できます。

たとえば、`IgxGridComponent` によって内部的に使用されるトランザクション サービスをオーバーライドするには、次のようにします:

まず、カスタム ファクトリ クラスを定義します。

```typescript
import { IgxFlatTransactionFactory, TRANSACTION_TYPE, IgxBaseTransactionService,
TransactionService, Transaction, State } from 'igniteui-angular';

class CustomTransactionService extends IgxBaseTransactionService {
    ...
}

export class CustomTransactionFactory extends IgxFlatTransactionFactory {
    ...
    create(type: TRANSACTION_TYPE): TransactionService<Transaction, State> {
        if (type === TRANSACTION_TYPE.Base) {
            return new CustomTransactionService();
        }
        super.create(type);
    }
}

```

次に、コンポーネントの `providers` 配列で、`IgxFlatTransactionFactory` (`igx-grid` によって使用される) をカスタム実装でオーバーライドします。

```typescript
import { IgxFlatTransactionFactory } from 'igniteui-angular';
import { CustomTransactionFactory } from '../custom-factory.ts';

@Component({
    selector: 'app-grid-view',
    template: `<igx-grid [batchEditing]="true" [data]="data" [autoGenerate]="true"></igx-grid>`,
    providers: [{ provide: IgxFlatTransactionFactory, useClass: CustomTransactionFactory }]
})

export class GridViewComponent {
    ...
}
```

これで、`batchEditing` が `true` に設定されている場合、グリッドは  `CustomTransactionService` のインスタンスを受け取ります。

## その他のリソース
<div class="divider--half"></div>

* [トランザクション サービス API]({environment:angularApiUrl}/interfaces/transactionservice.html)
* [トランザクション サービス](transaction.md)
* [トランザクション サービスの使用方法](transaction-how-to-use.md)
* [Grid 一括編集](grid/batch-editing.md)
* [Tree Grid 一括編集](treegrid/batch-editing.md)
* [Hierarchical Grid 一括編集](hierarchicalgrid/batch-editing.md)
