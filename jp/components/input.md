---
title: Input ディレクティブ
_description: Ignite UI for Angular は各データ型のために最適化されるさまざまな入力コントロールを提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Input コンポーネント, Angular Input コントロール
_language: ja
---

## Input

igxInput ディレクティブを使用して**入力フィールド**をマークアップに追加できます。

### Input デモ

<div class="sample-container loading" style="height:1390px">
    <iframe id="form-elements-sample-iframe" src='{environment:demosBaseUrl}/form-elements' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="form-elements-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### 使用方法

```html
    <div class="igx-form-group">
        <input type="text" igxInput [(ngModel)]="user.name"/>
        <label igxLabel>ユーザー名</label>
    </div>
```
