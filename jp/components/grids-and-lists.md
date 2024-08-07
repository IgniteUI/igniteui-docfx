---
title: Angular Grids & Tables | 最速の Angular UI グリッド | インフラジスティックス
_description: 高速な Angular グリッドとテーブルをお探しですか? Ignite UI for Angular は、Angular ネイティブでマテリアル ベースの UI データ グリッドとテーブルの完全なライブラリを提供します。詳しい情報をご覧ください。
_keywords: angular data grid, インフラジスティックス, jp.infragistics.com
_language: ja
---
<style>

.themes-container{
    display: none !important;
}

.h3, h3{
    font-weight: bold;
}

.cta-area{
    text-align: center;
    background-color: #f8f8f8;
    padding: 2rem;
}

div#features-list{
    margin: 0 auto;
    -webkit-column-gap: 12%;
       -moz-column-gap: 12%;
            column-gap: 12%;
    -webkit-columns: 2;
       -moz-columns: 2;
            columns: 2
}


.feature{
    padding: 15px 0;
}

.feature__details p{
    margin: 0;
    margin-top: 1rem;
}

div#list-features-included{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

div#list-features-included{
    -webkit-columns: 3;
       -moz-columns: 3;
            columns: 3;
    -webkit-column-gap: 10%;
       -moz-column-gap: 10%;
            column-gap: 10%;
}

div#support-section-wrapper{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

div.support-section{
    padding: 1.25rem;
    text-align: left;
}

h2#frequently-asked-questions{
    padding: .2rem 0 .5rem 1.1rem;
    margin-top: 1.5rem;
    border: 1px solid #ccc;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
}

div#faqs-accordion-wrapper {
    border: 1px solid #ccc;
    border-top: none;
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
}


.faqs-accordion-content{
    border-bottom: 1px solid #ccc;
    padding: 0 .9rem;
    cursor: pointer;
}

.faqs-accordion-content:hover{
    background-color: #f2f2f2;
}

.faqs-accordion-content:last-child{
    border-top: none;
}

.faqs-accordion-content:last-child{
    border-bottom: none;
}

.faqs-accordion {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  background: transparent;
  border: none;
  text-align: left;
  outline: none;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.faqs-accordion-panel {
  padding: 0 18px 5px 18px;
  background: transparent;
  max-height: 0;
  overflow: hidden;
  -webkit-transition: max-height 0.2s ease-out;
  -o-transition: max-height 0.2s ease-out;
  transition: max-height 0.2s ease-out;
}

.faqs-accordion:before {
    font-family: Material Icons;
    content: "keyboard_arrow_down";
    font-size: 25px;
    width: 30px;
    height: 25px;
}

.faqs-accordion-content.active .faqs-accordion:before {
    font-family: Material Icons;
    content: "keyboard_arrow_up";
    font-size: 25px;
    width: 30px;
    height: 25px;
}

.faqs-accordion-panel ul{
  margin-bottom: 15px;
}

h3#quick-and-easy-to-customize-build-and-implement{
    text-align: center;
}

h3#excel-library-for-the-angular-grid ~ h3{
    visibility: visible;
}

@media only screen and (max-width: 767px){

    div#list-features-included {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-flow: column;
        align-items: center;
        display: flex;
    }

    div#list-features-included ul {
        margin-left: auto;
        width: 70%;
        margin-right: auto;
    }
    
    div.support-section:last-child:last-child{
        border-left: none;
    }

    div#support-section-wrapper{
        flex-flow: column;
    }

    div.support-section:last-child{
        padding-left: 1.25rem;
    }
}

</style>

<div >
    <img class="b-lazy b-loaded" style="margin: 0 auto; max-width: 175px;" title="Ignite UI ロゴ" src="https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg" alt="開発者の Web アプリケーション用の Ignite UI ロゴ">
</div>

# 高速 Angular データ グリッド


Ignite UI for Angular は、世界最速の仮想化された Angular データ グリッドを含む、Angular ネイティブのマテリアル ベースの UI コンポーネントの完全なライブラリを提供します。


## Angular Grid の例

この Angular グリッドの例では、データの検索とフィルタリング、列のソート、サイズ変更、ピン固定と非表示、行の選択、Excel と csv へのエクスポート、水平および垂直スクロールなど、グリッドに組み込まれているさまざまな機能を利用してユーザーがデータ ビューをカスタマイズする方法を確認できます。Linear Progress Bar Indicator やスパークラインなどのコンポーネントを含むセル テンプレートの例を提供しました。
<div class="divider--half"></div>

<code-view style="height:435px"
           explicit-editor="stackblitz"
           data-demos-base-url="{environment:crmDemoBaseUrl}"
           iframe-src="{environment:crmDemoBaseUrl}/" 
           alt="Angular Grid の例">
</code-view>

<div class="divider--half"></div>

## Angular Data Grid の概要 

Angular データ グリッドは、一連の行と列で表データを表示するために使用されるコンポーネントです。テーブルとも呼ばれるデータ グリッドは、Microsoft Excel などの一般的なソフトウェアでデスクトップの世界でよく知られています。グリッドはデスクトップ プラットフォームで長い間利用されてきますが、最近 Angular UI などの Web ア プリ UI の一部になりました。最新のグリッドは複雑で、データ バインディング、編集、Excel のようなフィルタリング、カスタム並べ替え、グループ化、行の並べ替え、行と列の固定、行の集計、Excel、CSV、PDF 形式のエクスポートなど、さまざまな機能が含まれる場合があります。


## Angular Data Grid の利点

Angular データ グリッドは、大量のデータをすばやく保存して並べ替える必要がある場合に重要です。これには、大量の高速データを頻繁に使用する金融や保険などの業界が含まれます。  これらの企業の成功は、データ グリッドの機能とパフォーマンスに依存します。たとえば、在庫をマイクロ秒単位で決定する場合、データグ リッドが遅延時間やちらつきのない状態で実行する必要があります。

## 主要機能
<div class="divider--half"></div>

Ignite UI for Angular のデータ グリッドは、大量のリアルタイム データのみにとどまるものではありません。これは機能豊富な Angular グリッドであり、ごくわずかなコードだけでは実現できない機能を提供します。
この例は、データ グリッドの主な機能のいくつかを示しています:

<div class="divider--half"></div>

<div id="features-list">

- 数百万のレコードをロードできる[**仮想化された行と列**](grid/virtualization.md)

- [**セル**](grid/cell-editing.md)、[**行**](grid/row-editing.md)、および[**一括更新**](grid/batch-editing.md)オプションを使用した[**インライン編集**](grid/row-editing.md)

- [**Excel スタイル フィルタリング**](grid/excel-style-filtering.md)と [**Excel キーボード ナビゲーション**](grid/keyboard-navigation.md)機能

- インタラクティブな [**Outlook スタイルのようなグループ化**](grid/groupby.md)

- グリッド セルまたは列のデータに基づいた[**列集計**](grid/summaries.md)

- [**Excel へのエクスポート**](grid/export-excel.md) ([**データ可視化**](excel-library-working-with-charts.md)を含む)

- 行の高さとサイズ変更を調整する[**サイズ**](grid/display-density.md)

- [**スパークライン列**](sparkline.md#デモ)や画像列などの列テンプレート
</div>

<div class="divider"></div>
<div class="divider"></div>

<div class="sample-container loading" style="height: 520px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:lobDemosBaseUrl}/grid-finjs/grid-finjs-partial" onload="onSampleIframeContentLoaded(this);">
    </iframe>
</div>
<div class="divider--half"></div>

### データの仮想化とパフォーマンス
<div class="divider--half"></div>

データ グリッドの列と行レベルの仮想化により、Angular グリッド内の無制限の行と列をシームレスにスクロールします。ローカルまたはリモートのデータソースのサポートにより、データがどこにあっても最高のパフォーマンスを得ることができます。ユーザーは Excel のようなスクロールを体験し、エンタープライズ スピード (ラグ、画面のちらつき、視覚的な遅延) なしで、パフォーマンスを損なうことなく最高のユーザー エクスペリエンス (UX) を提供します。

<div class="divider--half"></div>
<hr style="border: .5px solid #ccc;">
<div  class="cta-area">
    <h4 class="h2" style="text-align: center; font-weight: 700; margin-top: 0;" >すばやく簡単にカスタマイズ、構築および実装</h4>
    <div style="text-align:center">
    <p>Ignite UI Angular データ グリッドは、データの無制限の行と列を処理できると同時に、カスタム テンプレートとリアルタイムのデータ更新へのアクセスを提供します。簡単なテーマ設定とブランディングのための直感的な API を備えており、最小限のコードでデータにすばやくバインドできます。</p>
    <div class="divider--half"></div>
        <div style="text-align:center">
            <a class="cta-btn no-external-icon ui-btn--sm" href="grid/grid.md">サンプルの表示</a>
        </div>
    </div>
    </div>
</div>
<hr style="border: .5px solid #ccc;">
<div class="divider"></div>

### Angular グリッドのページング、ソート、フィルタリング & 検索

ユーザーがデフォルトの[ページャー](grid/paging.md)を使用してデータ セットをナビゲートできるようにするか、独自のテンプレートを作成して独自のページング エクスペリエンスを提供します。単一列および複数列のソート、グリッド上の全文[検索](grid/search.md)、およびデータ型に基づく [Microsoft Excel スタイルのフィルタリング](grid/excel-style-filtering.md) を含むいくつかの[高度なフィルタリング] オプションを完全にサポートします。

<div class="feature__image feature__image--right"><img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="Angular Data Grid 内のフィルタリング機能のアニメーション" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-filtering-ui-768.gif?v=201811121733" alt="Angular Data Grid 内のフィルタリング機能のアニメーション">
</div>


### インライン Angular グリッド編集

ユーザーがデフォルトの[ページャー](grid/paging.md)を使用してデータ セットをナビゲートできるようにするか、独自のテンプレートを作成して独自のページング エクスペリエンスを提供します。単一列および複数列のソート、グリッド上の全文[検索](grid/search.md)、およびデータ型に基づく [Microsoft Excel スタイルのフィルタリング](grid/excel-style-filtering.md) を含むいくつかの[高度なフィルタリング] オプションを完全にサポートします。

<div class="feature__image feature__image--right">
        <img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="Angular Data Grid 内のフィルタリング機能のアニメーション" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-inline-grid-editing-1100.jpg?v=201808021304" alt="Angular Data Grid 内のフィルタリング機能のアニメーション">
</div>

### Angular グリッドでのキーボード ナビゲーションと行/セルの選択

上、下、右、左、タブ、および Enter キーを使用して、Angular データ グリッドで Excel のような[キーボード ナビゲーション](grid/keyboard-navigation.md)を有効にして、アクセシビリティ コンプライアンスを確保し、使いやすさを向上させます。マウスまたはキーボードを使用して Angular グリッドで単一または複数の行選択を切り替えて完全な行を選択または選択解除するか、グリッド ツールバーの組み込みの [すべて選択] または [すべて選択解除] チェックボックスを使用して行選択を操作できます。この機能強化の詳細については、<a class="no-external-icon" href="https://www.infragistics.com/community/blogs/b/engineering/posts/grid-keyboard-navigation-accessibility-">こちら</a>をご覧ください。

<div class="feature__image feature__image--right"><img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="キーボード ナビゲーション機能のアニメーション" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-keyboard-navigation-1100.gif?v=201808021304" alt="Angular Data Grid のキーボード ナビゲーション機能のアニメーション">
</div>

### Angular グリッドのアクセシビリティと ARIA のサポート

Ignite UI for Angular の各 Angular コンポーネントは、最新のアクセシビリティ ガイドラインと仕様に従って実装されています。当社の Angular コンポーネントは、OS またはブラウザーが提供するアクセシビリティ技術 (読み上げソフトウェア) を使用してテストされています。当社のチームは、ガイドラインが実装されていることを確認するだけでなく、視覚障害者に配信される実際のコンテンツが消費可能でユーザー フレンドリーであることを保証します。Ignite UI for Angular データ グリッドは キーボード アクセシビリティ、ARIA、明瞭なカラー パレットを提供します。詳しくについては、<a class="no-external-icons" href="https://www.infragistics.com/community/blogs/b/engineering/posts/grid-keyboard-navigation-accessibility">こちら</a>をご覧ください。

<div class="feature__image feature__image--right"><img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="ARIA サポートのアイコン表示" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-aria-support-1100.jpg?v=201808021304" alt="Angular Data Grid コンポーネントの ARIA サポートのアイコン表示">
</div>

### Angular Grid の列のグループ化、ピン固定、集計、移動

組み込みの列[集計](grid/summaries.md)またはカスタム集計テンプレートをサポートし、マウス操作、タッチ、または API を介して列またはグループ列をグループ化します。インタラクティブな[列のピン固定](grid/column-pinning.md)、移動、ドラッグ、ソート操作に列をインタラクティブに[非表示](grid/column-hiding.md)または[移動](grid/column-moving.md)できます。

<div class="feature__image feature__image--right"><img class="b-lazy b-loaded responsive-img" title="列のグループ化、ピン固定、および集計機能が有効になっているデータのグリッド" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-cell-summaries-1100.jpg?v=201808021304" alt="Angular Data Grid コンポーネントで列のグループ化、ピン固定、および集計機能が有効になっているデータのグリッド">
</div>

### Angular Grid の複数列ヘッダー

[複数列ヘッダー](grid/multi-column-headers.md)を有効にし、共通ヘッダーで列をグループ化できます。各列グループは、その他のグループや列と組み合わせることができ、ピン固定、グループ内でインタラクティブに列移動、グループのソートや非表示など多数の機能が使用できます。

<div class="feature__image feature__image--right"><img class="b-lazy b-loaded responsive-img" title="複数列ヘッダー機能を有効にしたデータのグリッド" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-multi-column-headers-1100.jpg?v=201808021304" alt="Angular Data Grid コンポーネントで複数列ヘッダー機能を有効にしたデータのグリッド">
</div>


### Angular Grid のテーマ設定、スタイル設定、テンプレート化

<div class="feature">
    <div class="feature__image feature__image--right"><img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="テーマ設定およびテンプレート化機能を示すさまざまなグリッド デザインのアニメーション" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-cell-styling-1100.gif?v=201808021304" alt="Angular Data Grid のテーマ設定およびテンプレート化機能を示すさまざまなグリッド デザインのアニメーション"></div>
    <div class="feature__details">
        <span class="h3 features__heading">Angular Grid のテーマ設定、スタイル設定、テンプレート化<a class="anchorjs-link" href="#angular-grid-のテーマ設定スタイル設定テンプレート化" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>Ignite UI for Angular では、CSS や ng-template の再テンプレート化でセルの外観をカスタマイズできます。マテリアル デザインを完全にサポートし、使いやすいテーマ エンジンでブランド化されたインターフェイスをカスタマイズできます。</p>
    </div>
</div>

### Angular Grid の Excel ライブラリ
<div class="feature">
    <div class="feature__image feature__image--right"><img class="b-lazy b-loaded responsive-img" title="Microsoft Excel のような機能のアイコン表示" src="https://static.infragistics.com/marketing/Website/products/Ignite-UI-for-Angular/ignite-ui-angular-grid-export-to-excel-2-1100.jpg?v=201808021304" alt="Angular Data Grid の Microsoft Excel のような機能のアイコン表示">
</div>
    <div class="feature__details" id="list-features">
        <span class="h3 features__heading">Angular Grid の Excel ライブラリ<a class="anchorjs-link" href="#angular-grid-の-excel-ライブラリ" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>データ グリッドの XLXS、XLS、TSV、または CSV のエクスポートを完全にサポートします。Ignite UI for Angular [Excel ライブラリ](excel-library.md)には、クライアント マシンで Microsoft Excel を必要としない 300 以上の数式、テーブルサポート、条件付き書式、チャートの作成などが含まれます。</p>
    </div>
</div>
<div class="divider--half"></div>


## Angular Grid の機能
<div class="divider"></div>
<div id="list-features-included">

- [インライン編集](grid/editing.md)
- [行と列のフィルタリング](grid/filtering.md)
- [グリッドのソート](grid/sorting.md)
- [列のグループ化](grid/groupby.md)
- [列の集計](grid/summaries.md)
- [ピン固定列](grid/column-pinning.md)
- [サイズ変更可能な列](grid/column-resizing.md)
- [列の非表示](grid/column-hiding.md)

<!-- -->

- [列移動](grid/column-moving.md)
- [セルのコピーおよび貼り付け](grid/clipboard-interactions.md)
- [セルのスタイル設定](grid/conditional-cell-styling.md)
- [リアルタイム/ライブ データのテーマ](grid/live-data.md)
- [カスタム ツールバー](grid/toolbar.md)
- [グリッド ページング](grid/paging.md)
- [行選択](grid/selection.md)
- [セル選択](grid/cell-selection.md)

<!-- -->
- [グリッド レベルの検索](grid/search.md)
- [Excel、CSV、TSV エクスポート](exporter-excel.md)
- [複数列ヘッダー](grid/multi-column-headers.md)
- [コンボ ボックス/ドロップダウン](combo.md)
- [仮想化とパフォーマンス](grid/virtualization.md)
- [リモート データのロードオンデマンド](grid/virtualization.md#リモート仮想化)
- [セル テンプレート](grid/grid.md#cell-template)
- [ARIA/a11y サポート](interactivity/accessibility-compliance.md)
</div>

<div class="divider"></div>

<hr>


<div class="cta-area">
    <h4 class="h2" style="font-weight: 700; margin-top: 0;">高速 Angular Grid のダウンロード</h4>
    <div class="divider--half"></div>
    <a class="cta-btn no-external-icon ui-btn--sm" href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/download">ダウンロード</a>
    <br>
    30 日間無償お試し版。クレジット カードは不要です。
    <div class="divider"></div>
</div>

<hr>

<div class="divider"></div>
<div id="support-section-wrapper">
    <div class="support-section">
    <div >
        <h2>Ignite UI for Angular でサポートされているブラウザー</h2>
    </div>
<div class="divider--half"></div>
   Angular Data Grid は、すべての最新の Web ブラウザーでサポートされます。
<div class="divider--half"></div>
        <ul>
            <li>Chrome</li>
            <li>Edge / Edge Chromium</li>
            <li>Firefox</li>
            <li>Safari</li>
            <li>ポリフィルを使用した Internet Explorer 11</li>
        </ul>
    </div>
    <div class="support-section" style="padding-left: 4rem;">
    <div >
            <h2>Ignite UI for Angular サポート オプション</h2>
    </div>
<div class="divider--half"></div>
Infragistics の Angular 製品の受賞歴のあるサポートにアクセスするための複数のオプションがあります。
<div class="divider--half"></div>
        <ul>
            <li><a class="no-external-icon" href="{environment:infragisticsBaseUrl}/support/ignite-ui-angular-help">Angular サポート ホーム ページをご覧ください。</a> </li>
            <li>Angular [ドキュメント](general/getting-started.md)を読み、Angular サンプルを試してください。</li>
            <li>最新の情報は、<a class="no-external-icon" href="https://www.infragistics.com/community/blogs/tags/Ignite%20UI%20for%20Angular">Angular ブログをご覧ください。</a> </li>
            <li><a class="no-external-icon" href="https://www.infragistics.com/ignite-ui-angular/grid-table">サポート ケースの送信</a></li>
            <li>Angular <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/resources/sample-applications">参照アプリケーションを試してください。</a></li>
        </ul>
    </div>
</div>

<div class="divider--half"></div>

## Ignite UI for Angular 試用ライセンスおよび商用
<div class="divider--half"></div>
<p>Ignite UI for Angular は、サブスクリプション モデルで利用可能な商用ライセンス製品です。Ignite UI for Angular 製品は、<a class="no-external-icon" href="{environment:infragisticsBaseUrl}/free-downloads">30 日間トライアル版を無料でお試しいただけます。</a>試用期間が終了したら、弊社 Web サイトから<a class="no-external-icon" href="{environment:infragisticsBaseUrl}/how-to-buy/product-pricing">ライセンスを購入する</a>か、<a class="no-external-icon" href="{environment:infragisticsBaseUrl}/about-us/contact-us">お住まいの地域の営業担当者にお問い合わせください</a>。</p>

<div class="divider--half"></div>

## FAQ

<div id="faqs-accordion-wrapper" class="resizable-content">
    <div class="faqs-accordion-content">
        <div class="faqs-accordion h4">Infragistics Ignite UI for Angular Data Grid を選択する理由とはなんですか？</div>
        <div class="divider--half"></div>
        <div class="faqs-accordion-panel">
            <ul>
                <li><a href="grid/virtualization.md">仮想化された行と列</a></li>
                <li>セル、行、および<a href="grid/batch-editing.md">一括更新</a>オプションを使用した<a href="grid/row-editing.md">インライン編集</a></li>
                <li><a href="grid/excel-style-filtering.md">Excel スタイル フィルタリング</a>と <a href="grid/keyboard-navigation.md">Excel キーボード ナビゲーション</a>機能</li>
                <li>インタラクティブな <a href="grid/groupby.md">Outlook スタイルのようなグループ化</a></li>
                <li>グリッド セルまたは列のデータに基づいた<a href="grid/summaries.md">列集計</a></li>
                <li><a href="grid/export-excel.md">Excel へのエクスポート</a>、<a href="excel-library-working-with-charts.md">データ可視化</a>を含む</li>
                <li>行の高さとサイズ変更を調整する<a href="grid/display-density.md">サイズ</a></li>
                <li><a href="charts/types/sparkline-chart.md">スパークライン列</a> や画像列などの列テンプレート</li>
            </ul>
        </div>
    </div>
    <div class="faqs-accordion-content">
    <div class="faqs-accordion h4">Infragistics Ignite UI for Angular Data Grid の価格について教えてください。</div>
    <div class="divider--half"></div>
    <div class="faqs-accordion-panel">
    Angular コンポーネントは、Ignite UI バンドルの一部として含まれています。価格の詳細については、<a class="no-external-icon" href="{environment:infragisticsBaseUrl}/how-to-buy/product-pricing">価格ページ</a>を参照してください。 
    <div class="divider--half"></div>
    複数のプラットフォームでアプリケーションを開発する場合、WPF や Windows Forms などのデスクトップ プラットフォーム、Angular、Web コンポーネント、ASP.NET MVC、ASP.NET Core のすべての最新 Web ツールセットを含む完全なアプリ開発パッケージ Infragistics Ultimate を検討してください。
    <div class="divider--half"></div>
    </div>
    </div>
    <div class="faqs-accordion-content">
        <div class="faqs-accordion h4">Infragistics Ignite UI for Angular Data Grid コントロールを個別に購入できますか？</div>
        <div class="divider--half"></div>
        <div class="faqs-accordion-panel">
        Angular Data Grid を個別に購入することはできません。これは <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/products/ignite-ui">Ignite UI 製品バンドル</a>の一部です。Ignite UI 製品バンドルは、Angular、ASP.NET MVC、Web コンポーネント、ASP.NET Blazor などのすべての Web プラットフォームに対して、何百ものコントロール、コンポーネント、およびデータの視覚化を提供します。
        <div class="divider--half"></div>
        </div>
    </div>
    <div class="faqs-accordion-content">
        <div class="faqs-accordion h4">Angular と Infragistics Ignite UI for Angular Data Grid コントロールのインストール方法を教えてください。</div>
        <div class="divider--half"></div>
        <div class="faqs-accordion-panel">
        Angular Data Grid の使用を開始するには、[作業の開始ガイド](general/getting-started.md)の手順を実行してください。<a class="no-external-icon" href="{environment:infragisticsBaseUrl}/resources/sample-applications">サンプル アプリケーション</a>のライブラリも用意しています。サンプル ライブラリは、Angular 開発のベスト プラクティス ガイドです。
        <div class="divider--half"></div>
        </div>
    </div>
</div>
