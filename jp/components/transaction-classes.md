---
title: 一括編集 | トランザクション サービス | Ignite UI for Angular | インフラジスティックス
_description: コンポーネントで Angular CRUD 操作を実行するときにバッチ編集を実装できるトランザクション サービスクラスの階層について学びます。
_keywords: batch editing, igniteui for angular, infragistics, 一括編集,
_language: ja
---

## トランザクション サービス クラス階層

### トランザクション、状態、トランザクション ログ

トランザクションは、[トランザクション サービス]({environment:angularApiUrl}/classes/igxtransactionservice.html) の主要な構成要素です。トランザクションは、データに対して実行するすべての操作を指します。[`Transaction`]({environment:angularApiUrl}/interfaces/transaction.html) インターフェイスは、3 つのプロパティ ([`id`]({environment:angularApiUrl}/interfaces/transaction.html#id)、[`newValue`]({environment:angularApiUrl}/interfaces/transaction.html#newValue)、および [`type`]({environment:angularApiUrl}/interfaces/transaction.html#type) を定義します。

トランザクションの [`id`]({environment:angularApiUrl}/interfaces/transaction.html#id) はデータレコードごとに一意である必要があり、このトランザクションが影響するレコードを定義します。[`type`]({environment:angularApiUrl}/enums/transactiontype.html#type) は、実行する操作に応じて、`ADD`、`DELETE`、`UPDATE` の 3 つのトランザクションタイプのいずれかになります。[`newValue`]({environment:angularApiUrl}/interfaces/transaction.html#newValue) には、`ADD` トランザクションを追加する場合の新しいレコードの値が含まれます。既存のレコードを更新する場合、[`newValue`]({environment:angularApiUrl}/interfaces/transaction.html#newValue) には変更のみが含まれます。同じ ID の `UPDATE` タイプのトランザクションが複数あるレコードを削除する場合、[`newValue`]({environment:angularApiUrl}/interfaces/transaction.html#newValue) には削除されたレコードの値が含まれます。 

各タイプのトランザクションを追加する方法の例は、[トランザクションサービスの使用方法](transaction-how-to-use.md)のトピックで見ることができます。

操作 (トランザクション) を実行するたびに、トランザクション ログと取り消しスタックに追加されます。トランザクション ログ内のすべての変更は、レコードごとに蓄積されます。その時点から、サービスは集約された [`State`]({environment:angularApiUrl}/interfaces/state.html) を維持します。  [`State`]({environment:angularApiUrl}/interfaces/state.html) は一意のレコードで構成され、すべてのレコードは上記のサポートされているトランザクション タイプのいずれかです。

トランザクションを追加する際、[`startPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#startpending) を呼び出して、保留中のトランザクションをオンにすることができます。[`endPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#endpending) を呼び出すまで、後続のトランザクションはすべて単一のトランザクションに蓄積されます。`true` を [`endPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#endpending) に渡すと、蓄積されたすべてのトランザクションがトランザクションログと取り消しスタックに単一のトランザクションとして追加されます。

### igxBaseTransaction の使用

グリッド モジュールは、トランザクション サービス ([`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)) の非常に基本的な実装を提供し、行編集機能を可能にする保留中のセッション機能のみを提供します。[`startPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#startpending) と [`endPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#endpending) は、行編集で複数のセルごとの操作を 1 つの変更にまとめることができます。  つまり、1 つのレコードの複数のセルを編集すると、1 つのトランザクションが作成され、行編集イベントのみを処理できます。

蓄積された状態が部分的なオブジェクトであるため、サービスを使用して、どのセルが編集されたかを確認し、その周りに UI を構築することもできます。

[`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) には元に戻すスタックがないため、元に戻す/やり直しの機能は提供されません。

以下のトピックには、行編集を有効にするために [`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) を使用する方法の詳細な例が含まれます。
* [グリッドの行編集テンプレート](grid/row_editing.md)
* [Tree Grid 行編集](treegrid/row_editing.md)
* [Hierarchical Grid 行編集](hierarchicalgrid/row_editing.md)

### igxTransactionService および igxHierarchicalTransactionService に関する一般情報


[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) と [`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) は、[`Transaction Service`]({environment:angularApiUrl}/interfaces/transactionservice.html)インターフェイスを実装する注入可能なミドルウェアです。コンポーネントはこれらを使用して、基になるデータに影響を与えることなく変更を蓄積できます。プロバイダーは、*access*、*manipulate* (元に戻すとやり直し)、およびデータへの 1 つまたはすべての変更を*破棄またはコミット*するための API を公開します。

[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) と [`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) は、セル編集と行編集の両方で機能します。セルが編集モードを終了すると、セル編集のトランザクションが追加されます。
行の編集が開始されると、グリッドは [`startPending`]({environment:angularApiUrl}/interfaces/transactionservice.html#startpending) を呼び出してトランザクションサービスを保留状態に設定します。編集された各セルは、保留中のトランザクションログに追加されますが、メイントランザクション ログには追加されません。行が編集モードを終了すると、すべての変更がメイン トランザクション ログと undo ログに単一のトランザクションとして追加されます。

いずれのケース (セル編集と行編集) も、グリッド編集の状態は、更新、追加、削除されたすべての行とその最後の状態で構成されます。これらは、後で一度に、または ID ごとに検査、操作、および送信できます。編集モードに応じて、個々のセルまたは行の変更が収集され、データ行/レコードごとに蓄積されます。

### igxTransactionService の使用

[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) は、 [`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) を拡張します。

バッチ編集機能を有効にするには、[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) を igxGrid またはその親コン​​ポーネントのプロバイダーとして定義します。

[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) には元に戻すスタックが含まれ、元に戻す/やり直し機能を利用できます。Undo スタックは、実際にはトランザクションの配列を含む配列です。[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) 使用時に、元に戻すスタックにトランザクションがある場合は、[`canUndo`]({environment:angularApiUrl}/classes/igxtransactionservice.html#canundo) アクセサーを確認できます。ある場合 [`undo`]({environment:angularApiUrl}/classes/igxtransactionservice.html#undo) メソッドを使用して最後のトランザクションを削除し、[`redo`]({environment:angularApiUrl}/classes/igxtransactionservice.html#redo) で最後に元に戻したトランザクションを適用します。

以下のトピックで、バッチ編集を使用した igxGrid の実装方法の詳細な例を見つけることができます。
* [Grid 一括編集](grid/batch_editing.md)

### igxHierarchicalTransactionService の使用

[`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) は、 [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) を拡張します。

[`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) は、[`igxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) および [`igxTreeGrid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)  の親と子の間の関係を処理するように設計されているため、ADD トランザクションを追加するときに予想される場所に新しいレコードが追加されます。また、親レコードを削除すると、その子はデータ型とグリッドの [`cascadeOnDelete`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#cascadeondelete) プロパティに基づいて、上位レベルの階層に昇格されるか、親とともに削除されます。

[`igxTreeGrid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) または [`igxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) を使用してバッチ編集を実現する場合は、[`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) をグリッドまたはその親コン​​ポーネントの一部のプロバイダーとして定義する必要があります。

アプリケーションでは、ユーザーが既に削除された親レコードに子レコードを追加しようとし、トランザクションがコミットされるのを待っている状態を処理することができます。トランザクションサービスでは、削除する親にレコードを追加することはできず、コンソールにエラーメッセージが表示されます。ただし、親を削除するかどうかを確認し、以下のコードを使用してユーザーに独自のアラートを実装できます。
```typescript
    const state = this.transactions.getState(parentRecordID);
    if (state && state.type === TransactionType.DELETE) {
        // Implement your logic here
    }
```

以下は、[`igxTreeGrid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) と [`igxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) でバッチ編集を実装する方法の詳細な例を含むトピックです。
* [Tree Grid 一括編集](treegrid/batch_editing.md)
* [Hierarchical Grid 一括編集](hierarchicalgrid/batch_editing.md)

### その他のリソース
<div class="divider--half"></div>

* [トランザクション サービス API]({environment:angularApiUrl}/interfaces/transactionservice.html)
* [トランザクション サービス](transaction.md)
* [トランザクション サービスの使用方法](transaction-how-to-use.md)
* [Grid 一括編集](grid/batch_editing.md)
* [Tree Grid 一括編集](treegrid/batch_editing.md)
* [Hierarchical Grid 一括編集](hierarchicalgrid/batch_editing.md)
