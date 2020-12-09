---
title: Angular Grid レイアウト| リアルタイム Angular テーブル | 軽量の Angular Web コンポーネント テーブル | インフラジスティックス
_description: Angular Grid レイアウトは、コーディングや構成をほとんど行わずに、動的でタッチ レスポンシブなデータ グリッドを構築するのに役立ちます。Ignite UI for Angular の 30 日間無料トライアルをお試しください。
_keywords: Angular data grid, infragistics, grids, Ignite UI for Angular, table, Angular データ グリッド, インフラジスティック, グリッド, テーブル
_language: ja
---

<style>

.affix{
  margin-top: 0;
}

h1 {
   margin-top: 1.5rem; 
}

.h3{
    font-weight: bold;
}

h3 {
    visibility: hidden;
}

.cta-area{
    text-align: center;
    background-color: #f8f8f8;
    padding: 2rem;
}

ul#features-list{
    margin: 0 auto;
    column-gap: 12%;
    columns: 2
}

ul#features-list li{
    margin-bottom: 15px;
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
    columns: 2;
    column-gap: 10%;
}

div#support-section-wrapper{
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
    display: flex;
    flex-flow: column;
    border: 1px solid #ccc;
    border-top: none;
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
}

.faqs-accordion {
  display: inline-flex;
  cursor: pointer;
  background: transparent;
  border: none;
  text-align: left;
  outline: none;
  transition: 0.4s;
}

.faqs-accordion-panel {
  padding: 0 18px;
  background: transparent;
  max-height: 0;
  overflow: hidden;
  margin-bottom: 5px;
  transition: max-height 0.2s ease-out;
}

/* .faqs-accordion-panel ul{
  margin-bottom: 15px;
} */

.faqs-accordion:before {
    font-family: Material Icons;
    content: "keyboard_arrow_down";
    font-size: 25px;
    width: 30px;
    height: 25px;
}

.faqs-accordion.active:before {
    font-family: Material Icons;
    content: "keyboard_arrow_up";
    font-size: 25px;
    width: 30px;
    height: 25px;
}

.faqs-accordion-content{
    border-bottom: 1px solid #ccc;
    padding: 0 .9rem;
}

.faqs-accordion-content:last-child{
    border-top: none;
}

.faqs-accordion-content:last-child{
    border-bottom: none;
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
    <img class="b-lazy b-loaded" style="margin: 0 auto; max-width: 175px;" title="Ignite UI ロゴ" src="../images/marketing/ignite-ui-logo.svg" alt="開発者の Web アプリケーション用の Ignite UI ロゴ">
</div>

# 高速 Angular データ グリッド

## Angular Grid 例

この Angular グリッドの例では、検索およびフィルタリング、列のソート、サイズ変更、ピン固定と非表示、行のグループ化、グリッド集計、水平および垂直方向のスクロール、セルに組み込まれたリニア プログレス バー インジケーター コンポーネントとスパークライン コンポーネントを含むセル スタイリングなどのグリッドの機能を使用して、ユーザーがデータのビューをカスタマイズする方法を確認できます。

<div class="divider--half"></div>

<div class="sample-container loading" style="height: 435px">
    <iframe id="data-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Grid の例" alt="Angular Grid 例"></iframe>
</div>

このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/download">無料でダウンロードできます。</a>

## Angular Data Grid の利点

Angular データ グリッドは、大量のデータをすばやく保存してソートされる必要がある場合に重要です。これには、大量の高速データ頻繁を使用する財務サービス、銀行および保険などの業界が含まれます。これらの企業の成功は、データ グリッドの機能とパフォーマンスに依存します。たとえば、在庫をマイクロ秒単位で決定する場合、データグ リッドが遅延時間やちらつきのない状態で実行する必要があります。

## Angular Data Grid 機能

<div class="divider--half"></div>

Ignite UI for Angular のデータ グリッドは、大量のリアルタイム データのみにとどまるものではありません。これは機能豊富な Angular グリッドであり、ごくわずかなコードだけでは実現できない機能を提供します。
この例は、データ グリッドの主な機能のいくつかを示しています:

<div class="divider--half"></div>

<ul id="features-list">
<li>数百万のレコードをロードできる[仮想化された行と列](data-grid-live-data.md)</li>

<li>セル、行、および一括更新オプションを使用した[インライン編集](data-grid-cell-editing.md)</li>

<li>[Excel スタイル フィルタリング](data-grid-column-filtering.md)と [Excel キーボード ナビゲーション](data-grid-cell-activation.md)機能</li>

<li>インタラクティブな [Outlook スタイルのようなグループ化](data-grid-row-grouping.md)</li>

<li>グリッド セルまたは列のデータに基づいた[列集計](data-grid-column-summaries.md)</li>

<li>単一および複数選択の[セルと行の選択](data-grid-cell-selection.md)</li>

<li>モバイル アプリケーション開発の完全なタッチ操作サポート</li>
</ul>

<div class="divider"></div>

### 高速 Angular データ グリッド例

<span class="h3">サンプル</span>

<div class="sample-container loading" style="height: 435px">
    <iframe id="icon-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/grids/data-grid-type-marketing-table" onload="onSampleIframeContentLoaded(this);">
    </iframe>
</div>

<div class="divider--half"></div>

### データの仮想化とパフォーマンス

<span class="h3">データの仮想化とパフォーマンス</span>

<div class="divider--half"></div>
<hr style="border: .5px solid #ccc;">
<div  class="cta-area">
    <h4 class="h2" style="text-align: center; font-weight: 700; margin-top: 0;" >すばやく簡単に Angular テーブルをカスタマイズ、構築および実装</h4>
    <div style="text-align:center">
    <p>Ignite UI for Angular データ グリッドは、データの無制限の行と列を処理できると同時に、カスタム テンプレートとリアルタイムのデータ更新へのアクセスを提供します。簡単なテーマ設定とブランディングのための直感的な API を備えており、最小限のコードでデータにすばやくバインドできます。</p>
    <div class="divider--half"></div>
        <div style="text-align:center">
            <a class="cta-btn no-external-icon ui-btn--sm" href="{environment:infragisticsBaseUrl}/resources/sample-applications">サンプルの表示</a>
        </div>
    </div>
    </div>
</div>
<hr style="border: .5px solid #ccc;">
<div class="divider"></div>

### Angular Grid セルおよび行選択

### Angular Grid フィルタリング

### Angular Grid 列移動

### Angular Grid 列ピン固定

### Angular Grid 列サイズ変更

### Angular Grid 列ソート

### Angular Grid 列集計

### Angular Grid 列タイプ

### Angular グリッドの列アニメーション

### Angular Grid 列オプション ダイアログ

### Angular 列と行の Outlook スタイルのグループ化

### Angular Grid 行ピン固定

### Angular Grid キーボード ナビゲーション

## Angular Grid 機能

<div class="divider"></div>

<div class="divider"></div>

<hr>

<div class="cta-area">
    <h4 class="h2" style="font-weight: 700; margin-top: 0;">高速 Angular Grid のダウンロード</h4>
    <div class="divider--half"></div>
    <a class="cta-btn no-external-icon ui-btn--sm" href="{environment:infragisticsBaseUrl}/products/ignite-ui-Angular/download">ダウンロード</a>
    <br>
    30 日間無償お試し版。クレジット カードは不要です。
    <div class="divider"></div>
</div>

<hr>

<div class="divider"></div>
<div id="support-section-wrapper">
    <div class="support-section">
    <div >
        <h2>Ignite UI for Angular サポートされるブラウザー</h2>
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
            <li><a class="no-external-icon" href="{environment:infragisticsBaseUrl}/support/ignite-ui-angular-help">Angular サポート ホーム ページ</a>をご覧ください。</li>
            <li>Angular [ドキュメント](general-getting-started.md)を読み、Angular サンプルを試してください。</li>
            <li>最新の情報は、<a class="no-external-icon" href="http://infragistics.com/community/blogs/tags/Ignite UI for Angular">Angular ブログをご覧ください。</a> </li>
            <li>アカウントにサインインした後、<a class="no-external-icon" href="{environment:infragisticsBaseUrl}/my-account/support-activity">サポート ケースを送信します。</a> </li>
            <li>Angular <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/resources/sample-applications">参照アプリケーションをお試しください。</a></li>
        </ul>
    </div>
</div>

<div class="divider--half"></div>

## Ignite UI for Angular 試用ライセンスおよび商用

<div class="divider--half"></div>
<p>Ignite UI for Angular は、サブスクリプション モデルで利用可能な商用ライセンス製品です。Ignite UI for Angular 製品は、<a class="no-external-icon" href="{environment:infragisticsBaseUrl}/free-downloads">30 日間トライアル版を無料でお試しいただけます</a>。試用期間が終了したら、弊社 Web サイトから<a class="no-external-icon" href="{environment:infragisticsBaseUrl}/how-to-buy/product-pricing">ライセンスを購入するか</a>、<a class="no-external-icon" href="{environment:infragisticsBaseUrl}/about-us/contact-us">お住まいの地域の営業担当者にお問い合わせください</a>。</p>
<hr>
<div class="divider--half"></div>

## FAQ

<script>
    (function(){
        var acc = document.getElementsByClassName("faqs-accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
        }
    })()
</script>
