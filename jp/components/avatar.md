---
title: Avatar コンポーネント
_description: Ignite UI for Angular の Avatar コントロールは、プロファイル ボタンなどのアプリケーションのインスタンスに画像、マテリアル アイコン、またはイニシャルを追加できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Avatar コンポーネント, Angular Avatar コントロール
_language: ja
---

# Avatar

<p class="highlight">Ignite UI for Angular Avatar コンポーネントは、イニシャル、画像、またはマテリアル アイコンをアプリケーションに追加します。</p>
<div class="divider"></div>

## Angular Avatar の例


<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/avatar-sample-3" alt="Angular Avatar の例">
</code-view>

<div class="divider--half"></div>

## 使用方法

Avatar コンポーネントを初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting-started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに `IgxAvatarModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxAvatarModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxAvatarModule],
    ...
})
export class AppModule {}
```

## 例

Avatar の形式は四角または丸で、3 つのサイズ オプション (大、中、小) があります。イニシャル、画像、またはアイコンを表示できます。

### イニシャルを表示するアバター
[イニシャル]({environment:angularApiUrl}/classes/igxavatarcomponent.html#initials) ('John Smith' の場合 'JS') を使用した簡易なアバターを作成するには、以下のコードをコンポーネントのテンプレートに追加します。

```html
<igx-avatar initials="JS">
</igx-avatar>
```
アバターを丸形に設定し、サイズを大きくします。

```html
<igx-avatar initials="JS"
            [roundShape]="true"
            size="medium">
</igx-avatar>
```
`background` プロパティを使用して背景色を変更できます。また、`color` プロパティを使用してイニシャルの色を設定します。

```scss
// avatar.component.scss

.igx-avatar {
    background: #e41c77;
    color: #000000;
}

```
以下は結果です。


<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/avatar-sample-1" >
</code-view>

<div class="divider--half"></div>

## API リファレンス
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxAvatarComponent スタイル]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)

## その他のリソース
<div class="divider--half"></div>

コミュニティに参加して新しいアイデアをご提案ください。
* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)