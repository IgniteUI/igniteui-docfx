---
title: Input ディレクティブ
_description: Ignite UI for Angular は各データ型のために最適化されるさまざまな入力コントロールを提供します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Input コンポーネント, Angular Input コントロール
---

## Input
igxInput ディレクティブを使用して**入力フィールド**をマークアップに追加できます。

### Input デモ
<div class="sample-container" style="height:1390px">
<iframe src='{environment:demosBaseUrl}/form-elements' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

### 使用方法
```html
    <div class="igx-form-group">
        <input type="text" igxInput [(ngModel)]="user.name"/>
        <label igxLabel>ユーザー名</label>
    </div>
```
