---
title: 一括編集 | Angular Crud | Ignite UI for Angular | インフラジスティックス
_description: Ignite UI Angular トランザクション サービスを使用して、バッチ編集を簡単に実装し、コンポーネントで Angular CRUD 操作を実行します。
_keywords: batch editing, igniteui for angular, infragistics, 一括編集,
_language: ja
---

# トランザクション サービス

[`トランザクション サービス`]({environment:angularApiUrl}/interfaces/transactionservice.html) は、基になるデータに影響せずに変更を蓄積するためにコンポーネントが使用できる組み込み可能なミドルウェアです ([Angular DI により](https://angular.io/guide/dependency-injection))。
    <img src="https://cdn-images-1.medium.com/max/800/1*O-6DidcFW_XCSqgKRfXf_Q.png"
        style="display:flex;max-height:400px;margin:auto auto 20px auto;" />

> [!NOTE]
> 上記のスキーマからのデータ変換は必須ではありません。[`トランザクション サービス`]({environment:angularApiUrl}/interfaces/transactionservice.html) を使用するためにパイプを使用する必要はありません。

[`トランザクション サービス`]({environment:angularApiUrl}/interfaces/transactionservice.html) では、トランザクションを追加できます。少なくとも 1 つのトランザクションが追加された後、すべての変更または単一レコードの変更のみをコミットまたはクリアできます。詳細ログを保持するため、元に戻す操作とやり直し操作の実行が可能です。

操作 ([**トランザクション**]({environment:angularApiUrl}/interfaces/transaction.html)) を実行するたびに、トランザクションログと基に戻すスタックに追加されます。トランザクション ログ内のすべての変更は、レコードごとに蓄積されます。その時点から、サービスは、一意のレコードの追加/更新/削除操作のみで構成される集計**状態**を維持します。これは、`recordRef`、`type`、`value` の 3 つのプロパティを持つ [`State`]({environment:angularApiUrl}/interfaces/state.html) インターフェイスに基づいています。

[`トランザクション サービス`]({environment:angularApiUrl}/interfaces/transactionservice.html) 上に 3 つのクラスを構築したことにより、ユーザーは、行ったすべての変更、または特定のレコードに加えられた変更のみを一度にコミットできます。これらのクラスは、[`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html)、[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html)、[`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) です。

[`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) と [`igxHierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) は、[igxGrid]({environment:angularApiUrl}/classes/igxgridcomponent.html)、[igxHierarchicalGrid]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html)、 および [igxTreeGrid]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) コンポーネントと完全に統合されています。以下のトピックは、トランザクションを有効にしてこれらのコンポーネントを使用する詳細な例を示します。
* [igxGrid 一括編集とトランザクション](grid/batch-editing.md)
* [igxHierarchicalGrid 一括編集とトランザクション](hierarchicalgrid/batch-editing.md)
* [igxTreeGrid 一括編集とトランザクション](treegrid/batch-editing.md)

[`トランザクション サービス`]({environment:angularApiUrl}/interfaces/transactionservice.html)が提供する利点に関する詳細については、[Building a transaction service for managing large scale editing experiences](https://blog.angular.io/building-a-transaction-service-for-managing-large-scale-editing-experiences-ded666eafd5e) ブログ (英語) をご覧ください。

## その他のリソース
<div class="divider--half"></div>

* [トランザクション サービス API]({environment:angularApiUrl}/interfaces/transactionservice.html)
* [トランザクション サービス クラス階層](transaction-classes.md)
* [トランザクション サービスの使用方法](transaction-how-to-use.md)
* [Grid 一括編集](grid/batch-editing.md)
* [Tree Grid 一括編集](treegrid/batch-editing.md)
* [Hierarchical Grid 一括編集](hierarchicalgrid/batch-editing.md)
* [「Building a transaction service for managing large scale editing experiences」 ブログ](https://blog.angular.io/building-a-transaction-service-for-managing-large-scale-editing-experiences-ded666eafd5e) (英語)
