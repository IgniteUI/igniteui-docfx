---
title: Label および Input ディレクティブ
_description: Ignite UI for Angular Label コンポーネントを使用すると、単一行のテキスト要素を作成するための CSS スタイルを追加し、その他のコントロールと統合できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Label コンポーネント, Angular Label コントロール
_language: ja
---

##Label & Input
<p class="highlight">Ignite UI for Angular Label ディレクティブは、単一行のテキスト要素に CSS スタイルを追加するために使用されます。マークアップに**入力**を追加する Ignite UI for Angular Input ディレクティブと一緒に使用すると便利です。</p>
<div class="divider--half"></div>

### Label および Input デモ
#### アカウントの作成
<div class="sample-container" style="height:500px">
<iframe id="label-input-sample-frame" src='{environment:demosBaseUrl}/label-input' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="label-input-sample-frame" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Ignite UI for Angular Label および Input を初期化する前に、**IgxLabelModule** および **IgxInputModule** を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxLabelModule } from 'igniteui-angular/main';
import { IgxInputModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxLabelModule],
    imports: [..., IgxInputModule],
    ...
})
export class AppModule {}
```

アカウント コンポーネントのテンプレートで、以下のコードを追加するとスタイル設定されたラベルおよび入力が作成されます。**igx-form-group** クラスをラベルおよび入力を含む div に追加し、ラベルを入力の後に配置します。

```html
<!--account.component.html-->

<div class="igx-form-group">
    <input igxInput [..options]/>
    <target-element igxLabel [..options]>First Name</target-element>    
</div>
```
<div class="divider--half"></div>

### 追加のリソース

是非コミュニティに参加してください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
