---
title: Ignite UI for Angular アクセシビリティ準拠
_description: Ignite UI for Angular のアクセシビリティ準拠 - 第 508 条の遵守、WCAG および ARIA。
_keywords: アクセシビリティ準拠, angular, ignite ui for angular, インフラジスティックス
---
<style>
.greenCheck {
  content:url("../../images/general/greenCheck.png");
}

.redCheck {
  content:url("../../images/general/redX.png");
}
</style>

## アクセシビリティ準拠
開発者向けの UI および UX ツールのグローバル プロバイダーとして、Infragistics の Angular チームは、可能な限り最高のユーザー エクスペリエンスを簡単に作成できるコンポーネントとツールを提供します。私たちの目標は、ユーザーにとって最高のアプリケーションとユーザー エクスペリエンスの作成に集中できるようにすることです。

ここでは、Ignite UI for Angular 内の Angular グリッド、チャート、UI コンポーネントおよびコントロールのアクセシビリティ サポートと準拠に関する特定の情報を見つけることができます。

### 第 508 条の遵守
リハビリテーション法[第 508 条](http://www.section508.gov/)は、連邦議会によって 1998 年に改正され、すべての連邦政府機関は障害を持つ人が電子情報技術にアクセスできるようにすることを義務付けました。それ以降、第 508 条の準拠は連邦政府機関の要件であるだけでなく、ソフトウェア ソリューションを提供し、Web ページを設計する際にも重要となります。

第 508 条の第 1194 部 22 条は、特に Web ベースのイントラネットおよびインターネット情報およびシステムを対象としており、遵守すべき 16 の規則が含まれています。お客様の最小限の努力でお客様の Web アプリケーションおよび Web サイトがこれらの規則に整合できるようにするために、インフラジスティックスは、Ignite UI for Angular のコントロールおよびコンポーネントが該当するアクセシビリティ規則に準拠することを保証するための取り組みを続けてきました。

以下のマトリックスで、弊社の視覚的コントロール (および関連コンポーネント) によって提供されるアクセシビリティのサポートの高レベルな概要を提供します。個々のコントロール/コンポーネントのアクセシビリティの遵守の詳細は、コントロール/コンポーネント名をクリックしてください。

**第 508 条との Ignite UI for Angular 準拠**

|**コンポーネント/原則**|<a title="あらゆる非テキスト要素に対してテキスト相当物を提供するものとします(つまり、「alt」、「longdesc」を介して、または要素コンテンツで)。"> (a)</a><br/>|<a title="マルチメディア プレゼンテーションに相当する代替物をプレゼンテーションと同期するものとします。">(b)</a><br/>|<a title="色によって伝達されるすべての情報が色を使用しなくても理解できるように (たとえば、コンテキストやマークアップ) Web ページを設計するものとします。">(c)</a><br/>|<a title="ドキュメントは、関連付けられたスタイル シートがなくても読めるように構成されます。">(d)</a><br/>|<a title="サーバー側の画像マップのアクティブな領域ごとに冗長なテキスト リンクが提供されます。">(e)</a><br/>|<a title="その領域を使用可能な幾何学的形状で定義できない場合を除いて、サーバー側の画像マップの代わりにクライアント側の画像マップが提供されます。">(f)</a><br/>|<a title="行ヘッダーと列ヘッダーは、データ テーブル用に識別される必要があります。">(g)</a><br/>|<a title="マークアップは、行または列のヘッダーの 2 つ以上の論理レベルを有するデータ テーブル用にデータ セルとヘッダー セルを関連づけるために使用します。">(h)</a><br/>|<a title="フレームには、フレームの識別とナビゲーションを簡略化するテキストでタイトルが付けられます。">(i)</a><br/>|<a title="ページは、2 Hz より大きく、55 Hz を下回る周波数で画面がちらつかないように設計するものとします。">(j)</a><br/>|<a title="その他のいかなる方法でも規定に準拠できない時に、Web サイトがこの部分の規定に準拠するように、相当する情報または機能を含むテキストのみのページを提供するものとします。主要なページが変更するとテキストのみのページのコンテンツは必ず更新されるものとします。">(k)</a><br/>|<a title="ページがスクリプト言語を利用してコンテンツを表示、またはインターフェイス要素を作成する場合、スクリプトによって提供される情報は支援技術が読み取ることのできる関数テキストで識別されるものとします。">(l)</a><br/>|<a title="ページのコンテンツを解釈するためにアプレット、プラグインまたはその他のアプリケーションがクライアント システムに存在することを Web ページが必要とする時には、ページは §1194.21(a) から (l) に準拠するプラグインまたはアプレットへのリンクを提供する必要があります。">(m)</a><br/>|<a title="オンラインですべての項目に記入するように電子的フォームが設計されている場合には、そのフォームによって、補助技術を使用するユーザーは、すべての指示と手掛かりを含めた、フォームの完成と提出に必要な情報、フィールド要素、および機能にアクセスすることができます。">(n)</a><br/>|<a title="ユーザーが反復するナビゲーション リンクをスキップすることができる方法を提供します。">(o)</a><br/>|<a title="一定の時間内での応答が要求される場合、ユーザーは警告を受け、追加時間が必要な旨を伝える十分な時間が与えられます。">(p)</a><br/>|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|*グリッド*|||||||||||||||||
| - Grid|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />||<span class="redCheck" />|
| - HierarchicalGrid|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />||<span class="redCheck" />|
| - TreeGrid|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />||<span class="redCheck" />|
|*その他*||||||||||<span class="greenCheck" />*|||||||
| - Avatar|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Badge|<span class="greenCheck" />||<span class="greenCheck" />|||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Banner|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Bottom navigation|||<span class="greenCheck" />|||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Button|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Button group|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Calendar|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Card|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Carousel|<span class="greenCheck" />||<span class="greenCheck" />|||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />||<span class="redCheck" />|
| - Checkbox|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Chip|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Circular progress|<span class="greenCheck" />||<span class="greenCheck" />|||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Combo|<span class="greenCheck" />||<span class="greenCheck" />|||||||<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />|||
| - Date time editor|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Date picker|||<span class="greenCheck" />|||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Divider|<span class="greenCheck" />||<span class="greenCheck" />|||||||||<span class="greenCheck" />|||||
| - Dialog|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Drop down|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />|||
| - Expansion panel|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Icon|||<span class="greenCheck" />|||||||||<span class="redCheck" />|||||
| - Input|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Input group|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Label|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Linear progress|<span class="greenCheck" />||<span class="greenCheck" />|||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - List|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Month picker|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Navbar|<span class="greenCheck" />||<span class="greenCheck" />|||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Navigation drawer|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Radio group|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Radio|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Select|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />|||
| - Slider|||<span class="greenCheck" />|||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Snackbar|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />||<span class="redCheck" />|
| - Switch|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Tabs|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Time picker|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Toast|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />||<span class="redCheck" />|
| - Tooltip|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||



**凡例**

||||
|---|---|---|
|<span class="greenCheck" />|コントロール/コンポーネントは、この特定の領域でユーザー補助に完全に対応しています。||
|<span class="greenCheck" />*|コントロール/コンポーネントは、この特定の領域で特定の構成を実装した後にアクセスできます。| 例: *NoopAnimationsModule* ユーティリティ モジュールを使用してアニメーションの無効化を許可します。|
|<span class="redCheck" />|コントロール/コンポーネント: 一部の種類のアクションを実行しない限り、完全にはユーザー補助に対応しません。||
|'空白'|この特定の規則はコントロールに適用されません。||

> [!WARNING] 上記のテーブルは、Ignite UI for Angular テーマ ライブラリの*デフォルト テーマ*にのみ関連しています。カスタム テーマ、タイポグラフィ、およびアニメーションと色に関連する視覚的な変更に関しては、チェックリストへの準拠が異なる場合があります。

**法令遵守情報**

- **a** - あらゆる非テキスト要素に対してテキスト相当物を提供するものとします(つまり、「alt」、「longdesc」を介して、または要素コンテンツで)。
- **b** - マルチメディア プレゼンテーションに相当する代替物をプレゼンテーションと同期するものとします。
- **c** - 色によって伝達されるすべての情報が色を使用しなくても理解できるように (たとえば、コンテキストやマークアップ) Web ページを設計するものとします。
- **d** - ドキュメントは、関連付けられたスタイル シートがなくても読めるように構成されます。
- **e** - サーバー側の画像マップのアクティブな領域ごとに冗長なテキスト リンクが提供されます。
- **f** - その領域を使用可能な幾何学的形状で定義できない場合を除いて、サーバー側の画像マップの代わりにクライアント側の画像マップが提供されます。
- **g** - 行ヘッダーと列ヘッダーは、データ テーブル用に識別される必要があります。
- **h** - マークアップは、行または列のヘッダーの 2 つ以上の論理レベルを有するデータ テーブル用にデータ セルとヘッダー セルを関連づけるために使用します。
- **i** - フレームには、フレームの識別とナビゲーションを簡略化するテキストでタイトルが付けられます。
- **j** - ページは、2 Hz より大きく、55 Hz を下回る周波数で画面がちらつかないように設計するものとします。
- **k** - その他のいかなる方法でも規定に準拠できない時に、Web サイトがこの部分の規定に準拠するように、相当する情報または機能を含むテキストのみのページを提供するものとします。主要なページが変更するとテキストのみのページのコンテンツは必ず更新されるものとします。
- **l** - ページがスクリプト言語を利用してコンテンツを表示、またはインターフェイス要素を作成する場合、スクリプトによって提供される情報は支援技術が読み取ることのできる関数テキストで識別されるものとします。
- **m** - ページのコンテンツを解釈するためにアプレット、プラグインまたはその他のアプリケーションがクライアント システムに存在することを Web ページが必要とする時には、ページは §1194.21(a) から (l) に準拠するプラグインまたはアプレットへのリンクを提供する必要があります。
- **n** - オンラインですべての項目に記入するように電子的フォームが設計されている場合には、そのフォームによって、補助技術を使用するユーザーは、すべての指示と手掛かりを含めた、フォームの完成と提出に必要な情報、フィールド要素、および機能にアクセスすることができます。
- **o** - ユーザーが反復するナビゲーション リンクをスキップすることができる方法を提供します。
- **p** - 一定の時間内での応答が要求される場合、ユーザーは警告を受け、追加時間が必要な旨を伝える十分な時間が与えられます。


### WCAG の準拠
[WCAG](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=111) は、アクセシブルな Web コンテンツを開発する方法に関する正式なガイドラインのセットです。 これらの規格は、508 規格に同一または非常に類似していますが、より高いレベルのアクセシビリティを表しています。

|**コンポーネント/ガイドライン**|<a title="代替テキスト - テキスト以外のコンテンツの代替テキストを提供して、大きな活字、点字、音声、記号、より単純な言語など、他の形式に変更できるようにします。">1.1</a><br/>|<a title="時間ベースのメディア - 時間ベースのメディアの代替物を提供します。">1.2</a><br/>|<a title="適応可能 - 情報や構造を失うことなく、さまざまな方法 (たとえば、よりシンプルなレイアウト) で提示できるコンテンツを作成します。">1.3 </a><br/>|<a title="識別可能 - 前景を背景から分離するなど、ユーザーがコンテンツをより簡単に視聴できるようにします。">1.4</a><br/>|<a title="キーボードでアクセス可能 - すべての機能をキーボードで使用できるようにします。">2.1</a><br/>|<a title="十分な時間 - ユーザーがコンテンツを読んで使用するのに十分な時間を提供します。">2.2</a><br/>|<a title="発作と身体的な反応 - 発作または身体的な反応を引き起こすことが知られている方法でコンテンツをデザインしないでください。">2.3</a><br/>|<a title="ナビゲート可能 - ユーザーがナビゲートし、コンテンツを見つけ、そしてどこにいるかを判別するのに役立つ方法を提供します。">2.4</a><br/>|<a title="入力モダリティ - ユーザーがキーボード以外のさまざまな入力を介して機能を簡単に操作できるようにします。<br/>">2.5</a><br/>|<a title="可読 - テキスト コンテンツを読みやすく、理解しやすくします。">3.1</a><br/>|<a title="予測可能 - Web ページを予測可能な方法で表示して動作させる。">3.2</a><br/>|<a title="入力支援 - ユーザーが間違いを回避して修正できるようにします。">3.3</a><br/>|<a title="互換性 - 支援技術を含む現在および将来のユーザー エージェントとの互換性を最大化します。">4.1 </a><br/>|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|*グリッド*||||||||||||||
| - Grid|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*||<span class="greenCheck" />|
| - HierarchicalGrid|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*||<span class="greenCheck" />|
| - TreeGrid|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*||<span class="greenCheck" />|
|*その他*|||||||<span class="greenCheck" />*|||||||
| - Avatar|<span class="greenCheck" />|||<span class="greenCheck" />||<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Badge|<span class="greenCheck" />|||<span class="greenCheck" />||<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Banner|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Bottom navigation||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Button||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Button group||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Calendar|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*||<span class="greenCheck" />|
| - Card|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Carousel|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*||<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Checkbox|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*|||
| - Chip||||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Circular progress|<span class="greenCheck" />|||<span class="greenCheck" />||<span class="greenCheck" />*|<span class="greenCheck" />*|||<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Combo|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|
| - Date time editor||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />||
| - Date picker||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />||
| - Divider|<span class="greenCheck" />||||||||||<span class="greenCheck" />*|||
| - Dialog|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Drop down|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Expansion panel|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Icon||||<span class="greenCheck" />||<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Input|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />||
| - Input group|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />||
| - Label|<span class="greenCheck" />|||<span class="greenCheck" />||<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Linear progress|<span class="greenCheck" />|||<span class="greenCheck" />||<span class="greenCheck" />*|<span class="greenCheck" />*|||<span class="greenCheck" />|<span class="greenCheck" />*|||
| - List|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Month picker||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|
| - Navbar|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Navigation drawer|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Radio group|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Radio|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Select|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Slider||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Snackbar|||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*|<span class="greenCheck" />*||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Switch|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Tabs|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Time picker||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|
| - Toast|||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*|<span class="greenCheck" />*||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Tooltip|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*|<span class="greenCheck" />*||<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||


**凡例**

||||
|---|---|---|
|<span class="greenCheck" />|コントロール/コンポーネントは、この特定の領域でユーザー補助に完全に対応しています。||
|<span class="greenCheck" />*|コントロール/コンポーネントは、この特定の領域で特定の構成を実装した後にアクセスできます。|例 1: ガイドライン 2.2. 特定のコンポーネントでは、追加のアクションと時間パラメーターを設定する必要があります。例 2: ガイドライン 2.3. *NoopAnimationsModule* ユーティリティ モジュールを使用してアニメーションの無効化を許可します。|
|<span class="redCheck" />|コントロール/コンポーネント: 一部の種類のアクションを実行しない限り、完全にはユーザー補助に対応しません。||
|'空白'|この特定の規則はコントロールに適用されません。||

> [!WARNING] 上記のテーブルは、Ignite UI for Angular テーマ ライブラリの*デフォルト テーマ*にのみ関連しています。カスタム テーマ、タイポグラフィ、およびアニメーションと色に関連する視覚的な変更に関しては、チェックリストへの準拠が異なる場合があります。

**法令遵守情報**

- **原則 1 - 知覚可能** - 情報およびユーザー インターフェイス コンポーネントは、ユーザーが知覚できるように提示されなければなりません。
  - ガイドライン 1.1 – **代替テキスト** - テキスト以外のコンテンツの代替テキストを提供して、大きな活字、点字、音声、記号、より単純な言語など、他の形式に変更できるようにします。
  - ガイドライン 1.2 – **時間ベースのメディア** - 時間ベースのメディアの代替物を提供します。
  - ガイドライン 1.3 – **適応可能** - 情報や構造を失うことなく、さまざまな方法 (たとえば、よりシンプルなレイアウト) で提示できるコンテンツを作成します。
  - ガイドライン 1.4 – **識別可能** - 前景を背景から分離するなど、ユーザーがコンテンツをより簡単に視聴できるようにします。
- **原則 2 – 操作可能** - ユーザー インターフェイス コンポーネントとナビゲーションは操作可能でなければなりません。
  - ガイドライン 2.1 – **キーボードでアクセス可能** - すべての機能をキーボードで使用できるようにします。
  - ガイドライン 2.2 – **十分な時間** - ユーザーがコンテンツを読んで使用するのに十分な時間を提供します。
  - ガイドライン 2.3 – **発作と身体的な反応** - 発作または身体的な反応を引き起こすことが知られている方法でコンテンツをデザインしないでください。
  - ガイドライン 2.4 – **ナビゲート可能** - ユーザーがナビゲートし、コンテンツを見つけ、そしてどこにいるかを判別するのに役立つ方法を提供します。
  - ガイドライン 2.5 – **入力モダリティ** - ユーザーがキーボード以外のさまざまな入力を介して機能を簡単に操作できるようにします。
- **原則 3 – 理解可能** - ユーザー インターフェイスの情報と操作は理解可能でなければなりません。
  - ガイドライン 3.1 – **可読** - テキスト コンテンツを読みやすく、理解しやすくします。
  - ガイドライン 3.2 – **予測可能** - Web ページを予測可能な方法で表示して動作させる。
  - ガイドライン 3.3 – **入力支援** - ユーザーが間違いを回避して修正できるようにします。
- **原則 4 – 堅牢** - コンテンツは、支援技術を含むさまざまなユーザー エージェントが解釈できるほど堅牢でなければなりません。
  - ガイドライン 4.1 – **互換性** - 支援技術を含む現在および将来のユーザー エージェントとの互換性を最大化します。


### WAI-ARIA サポート
2014 年に W3C は [WAI-ARIA 仕様](http://www.w3.org/TR/wai-aria/) を完成しました。障害を持つユーザーに Web コンテンツおよび Web アプリケーションへのアクセシビリティを提供するデザインを定義したものです。

このセクションでは、フレームワークのアクセシビリティ (ARIA) サポートと、コンポーネントの`文字表記の方向`の簡単な管理を示します。

**右から左方向 (RTL) の有効化**

`Ignite UI for Angular` ライブラリは、`html` または `body` タグの `dir` 属性を設定した場合のみ `文字表記の方向`操作の影響を受けます。また、ランタイムの変更は検出されないことに注意してください。

次の例に移動します。

##### 手順 1 - 両方のタグで ‘dir’ 属性を設定します。

```html
<html dir="rtl">
...
  <body dir="ltr">
  </body>
</html>
```

上記の場合、`body` タグの内部属性タグが優先されます。

##### 手順 2 - それぞれの方向の[テーマ エンジン](../../themes/index.md)に通知します。

そのためには、[igx-core]({environment:sassApiUrl}/index.html#mixin-igx-core) mixin の `$direciton` パラメーターを設定します。

```scss 
@include igx-core($direction: rtl);
```

コンテンツを調整する手順はこれですべてになります。


##### RTL サポート 
フレームワークのほとんどのコンポーネントで、新しい RTL テーマを介した**右から左 (RTL)** がサポートされます。

**CSS ベース**のプロジェクトの場合、`node_modules/igniteui-angular/styles/igniteui-angular-rtl.css` を `angular.json` スタイル コレクションに追加します。

**Sass ベース**のプロジェクトの場合、ルート スタイルシートの `igx-core` mixin に `$direction` を渡します。

例:

```scss
// $direction defaults to ltr if it's omitted.
@include igx-core($direction: rtl);
```

現在、以下コンポーネントは RTL 機能の一部をサポートしています。

* Grid (igx-grid)
* Tabs (igx-tabs)


