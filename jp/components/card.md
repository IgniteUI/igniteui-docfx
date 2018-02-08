---
title: Card コンポーネント
_description: Ignite UI for Angular Card コンポーネントを使用して、詳細情報のエントリ ポイントとして、ダッシュボード、テキスト、画像、アイコン、ボタンなどを表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Card コンポーネント, Angular Card コントロール
_language: ja
---

## Card

<p class="highlight">Ignite UI for Angular Card コンポーネントはテキスト、画像、アイコン、およびボタンを表示します。この要素は詳細情報のエントリ ポイントになります。Card を使用してマルチメディア ダッシュボードを作成できます。Card コンポーネントは、Ignite UI for Angular Grid と同じコンポーネントを使用してページングをサポートします。ただし、カスタム コードが必要です。</p>
<div class="divider"></div>

### Card デモ

<div class="sample-container loading" style="height: 1661px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/card" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div class="divider--half"></div>

### はじめに

アプリケーションまたはモジュールに `IgxCardModule` をインポートします。

```typescript
import { IgxCardModule } from 'igniteui-angular';
```

<div class="divider--half"></div>

### 使用方法

```html
<igx-card>
    <igx-card-header>
        <igx-avatar src="..." roundShape="true">
            <h3>イーロン・マスク</h3>
        </igx-avatar>
    </igx-card-header>
    <igx-card-content>
        <p>
        イーロン・マスクは南アフリカ共和国の起業家です。Tesla Motors および 2012 年にコマーシャル スペースクラフトを立ち上げた SpaceX の設立者です。
        </p>
    </igx-card-content>
    <igx-card-actions>
        <button igxButton (click)="openUrl('https://www.facebook.com/pages/Elon-Musk/108250442531979')">いいね</button>
        <button igxButton (click)="openUrl('https://twitter.com/elonmusk')">シェア</button>
    </igx-card-actions>
</igx-card>
```

<div class="divider--half"></div>
