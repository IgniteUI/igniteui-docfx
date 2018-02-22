﻿---
title: Avatar コンポーネント
_description: Ignite UI for Angular の Avatar コントロールは、プロファイル ボタンなどのアプリケーションのインスタンスに画像、マテリアル アイコン、またはイニシャルを追加できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Avatar コンポーネント, Angular Avatar コントロール
_language: ja
---

##Avatar

<p class="highlight">Ignite UI for Angular Avatar コンポーネントは、画像、マテリアル アイコン、またはイニシャルをアプリケーションに追加します。</p>
<div class="divider"></div>

### Avatar デモ

<div class="sample-container loading" style="height:200px">
    <iframe id="avatar-sample-3-iframe" src='{environment:demosBaseUrl}/avatar-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="avatar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Ignite UI for Angular Avatar を初期化する前に、**IgxAvatarModule** を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxAvatarModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxAvatarModule],
    ...
})
export class AppModule {}
```

Avatar の形式は四角または丸で、3 つのサイズ オプション (大、中、小) があります。イニシャル、画像、またはアイコンを表示できます。

#### イニシャルを表示するアバター

イニシャル ('John Smith' の場合 'JS') を使用した簡易なアバターを作成するには、以下のコードをコンポーネントのテンプレートに追加します。

```html
<igx-avatar initials="JS">
</igx-avatar>
```

アバターを丸形に設定し、サイズを大きくします。`bgColor` プロパティを使用して背景色を変更できます。また、`color` プロパティを使用してイニシャルの色を設定します。これは入力プロパティで、コンポーネントのプロパティにバインドできます。

```html
<igx-avatar initials="JS" 
            [roundShape]="isCircular" 
            size="medium" 
            [bgColor]="bgColor" 
            [color]="color">
</igx-avatar>
```

```typescript
// avatar.component.ts
...
  public bgColor = "#0375be";
  public color = "black";
  public isCircular = true;
```

以下は結果です。

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-1-iframe" src='{environment:demosBaseUrl}/avatar-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="avatar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">        StackBlitz で表示
    </button>
</div>

#### 画像を表示するアバター

画像を表示するアバターを作成するには、`src` プロパティで画像ソースを設定します。

```html
<igx-avatar [src]="imgSource"
            roundShape="true"
            size="large">
</igx-avatar>
```

```typescript
// avatar.component.ts
...
  public imgSource = "https://randomuser.me/api/portraits/men/1.jpg";
```

以下は結果です。

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-2-iframe" src='{environment:demosBaseUrl}/avatar-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="avatar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">        StackBlitz で表示
    </button>
</div>

#### アイコンを表示するアバター

アバターでアイコンを表示するには、`icon` プロパティを設定します。現在、マテリアル アイコン セットのすべてのアイコンがサポートされます。

```html
<igx-avatar icon="phone"
            roundShape="true"
            size="large">
</igx-avatar>
```

<div class="divider--half"></div>

### API

| 名前         |   型    | 説明                                                                                                                                             |
| :----------- | :-----: | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`        | string  | アバターの画像ソースを設定します。                                                                                                               |
| `initials`   | string  | アバターのイニシャルを設定します。                                                                                                               |
| `icon`       | string  | アバターのアイコンを設定します。現在、マテリアル アイコン セットのすべてのアイコンがサポートされます。イニシャルおよび画像アバターは適用外です。 |
| `bgColor`    | string  | イニシャルまたはアイコン アバターの背景色を設定します。                                                                                          |
| `color`      | string  | イニシャルまたはアイコン アバターの色を設定します。(オプション)                                                                                  |
| `roundShape` | boolean | アバターの図形を丸に設定します。既定の図形は四角です。                                                                                           |
| `size`       | string  | アバターのサイズを小、中、大に設定します。                                                                                                       |
