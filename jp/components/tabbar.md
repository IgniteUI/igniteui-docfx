---
title: Bottom Navigation コンポーネント
_description: タブ付きのユーザー インターフェイスでタブを表示します。この UI コントロールはタブの外観および動作を管理します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Bottom Nav コンポーネント, Angular Bottom Navigation コントロール
_language: ja
---

## Bottom Navigation

<p class="highlight">Ignite UI for Angular Bottom Navigation コンポーネントは、単一ビューで表示される複数のコンテンツ パネル間での移動を可能にします。パネルの間のナビゲーションは下部にあるタブ ボタンで実行されます。</p>
<div class="divider"></div>

> [!NOTE]
> `igx-tab-bar` セレクターは非推奨です。代わりに [`igx-bottom-nav`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html) を使用してください。`IgxTabBarComponent` クラスは [`IgxBottomNavComponent`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html) に名前変更しました。`IgxTabBarModule` は [`IgxBottomNavModule`]({environment:angularApiUrl}/classes/igxbottomnavmodule.html) に名前変更しました。

### Bottom Navigation デモ

<div class="sample-container loading" style="height: 600px; width: 400px; border: 1px solid gray;">
    <iframe id="tabbar-sample-iframe" src='{environment:demosBaseUrl}/tabbar' width="100%" height="100%" seamless
        frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

### 使用方法

コントロールを初期化する前に、[`IgxBottomNavModule`]({environment:angularApiUrl}/classes/igxbottomnavmodule.html) を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxBottomNavModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxBottomNavModule],
    ...
})
export class AppModule {}
```

次にコンポーネントのテンプレートを Bottom Navigation に追加し、3 つのパネルを追加します。

```html
<igx-bottom-nav>
  <igx-tab-panel label="Tab 1">This is Tab 1 content.</igx-tab-panel>
  <igx-tab-panel label="Tab 2">This is Tab 2 content.</igx-tab-panel>
  <igx-tab-panel label="Tab 3">This is Tab 3 content.</igx-tab-panel>
</igx-bottom-nav>
```

以下は結果です:

<div class="sample-container loading" style="height: 200px; width: 300px; border: 1px solid gray;">
    <iframe id="tabbar-sample-1-iframe" src='{environment:demosBaseUrl}/tabbar-sample-1' width="100%" height="100%" seamless
        frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-1-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider"></div>

### タブのカスタマイズ

タブにアイコンを追加します。Bottom Navigation コントロールがマテリアル デザイン [**アイコン**](https://material.io/icons/)と互換性があるため、アプリケーションにアイコンを簡単に追加できます。 

最初に Material+Icons をメイン アプリケーション フォルダーの 'styles.css' ファイルにインポートします。

```css
// styles.css

...
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
...
```

コンポーネントの typescript ファイルにデータ ソースのオブジェクト配列を定義します。

```typescript
...
public songsList: object[] = [
  { title: "Havana", artist: "Camila Cabello" },
  { title: "Meant To Be", artist: "Bebe Rexha & Florida Georgia Line" },
  { title: "New Rules", artist: "Dua Lipa" },
  { title: "Wolves", artist: "Selena Gomez & Marshmello" }
];

public moviesList: object[] = [
  { title: "Logan", genre: "Action, Drama, Sci-Fi" },
  { title: "Wonder Woman", genre: "Action, Adventure, Fantasy" },
  { title: "Guardians of the Galaxy Vol. 2", genre: "Action, Adventure, Sci-Fi" },
  { title: "Star Wars: The Last Jedi", genre: "Action, Adventure, Fantasy" }
];

public booksList: object[] = [
  { title: "Wonder", author: "R. J. Palacio" },
  { title: "Milk and Honey", author: "Rupi Kaur" },
  { title: "Giraffes Can't Dance", author: "Jeff Kinne" },
  { title: "The Getaway", author: "Selena Gomez & Marshmello" }
];
...
```

コンポーネントのテンプレート マークアップに新しいタブのラベル、マテリアル デザイン アイコンのライブラリからのアイコン名、およびデータ コンテンツを表示するための DIV および SPAN 要素を追加します。

```html
<igx-bottom-nav>
  
  <igx-tab-panel label="Songs" icon="library_music">
    <div class="item" *ngFor="let song of songsList">
      <span class="item-line1">{{song.title}}</span><br/>
      <span class="item-line2">{{song.artist}}</span>
    </div>
  </igx-tab-panel>
  
  <igx-tab-panel label="Movies" icon="video_library">
    <div class="item" *ngFor="let movie of moviesList">
      <span class="item-line1">{{movie.title}}</span><br/>
      <span class="item-line2">{{movie.genre}}</span>
    </div>
  </igx-tab-panel>

  <igx-tab-panel label="Books" icon="library_books">
    <div class="item" *ngFor="let book of booksList">
      <span class="item-line1">{{book.title}}</span><br/>
      <span class="item-line2">{{book.author}}</span>
    </div>
  </igx-tab-panel>

</igx-bottom-nav>
```

最後に、テンプレートの DIV および SPAN 要素に使用される CSS クラスをコンポーネントの CSS ファイルに追加します。

```css
.item {
    margin-bottom: 5px;
}

.item-line1 {
    font-size: 14px;
    color: gray;
}

.item-line2 {
    font-size: 12px;
    color: darkgray;
}
```

Bottom Navigation は以下のようになります。

<div class="sample-container loading" style="height: 350px; width: 300px; border: 1px solid gray;">
    <iframe id="tabbar-sample-2-iframe" src='{environment:demosBaseUrl}/tabbar-sample-2' width="100%" height="100%" seamless
        frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tabbar-sample-2-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

<div class="divider--half"></div>

タブのラベルおよびアイコンの変更を拡張する場合、各タブでカスタム テンプレートを作成することもできます。以下はその例です。

```html
<igx-bottom-nav>
    <igx-tab-panel>

        <ng-template igxTab>
            <div>
                <!-- your custom tab content goes here -->
            </div>
        </ng-template>
        
        <h1>Tab content</h1>
    </igx-tab-panel>
</igx-bottom-nav>
```

<div class="divider"></div>

### その他の Igx コントロールの使用

その他 Ignite UI for Angular コンポーネントを Bottom Navigation と使用し、より高度なアプリケーションを実装できます。
たとえば、Bottom Navigation のパネルの連絡先リストの作成には [`IgxListComponent`]({environment:angularApiUrl}/classes/igxlistcomponent.html)、各連絡先の可視化は、[`IgxAvatarComponent`]({environment:angularApiUrl}/classes/igxavatarcomponent.html) や [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html) を使用できます。

[`IgxBottomNavModule`]({environment:angularApiUrl}/classes/igxbottomnavmodule.html) および [`IgxListModule`]({environment:angularApiUrl}/classes/igxlistmodule.html) コンポーネントを "app.module.ts" ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxAvatarModule } from 'igniteui-angular';
import { IgxIconModule } from 'igniteui-angular';
import { IgxListModule } from 'igniteui-angular';
import { IgxBottomNavModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxAvatarModule, IgxIconModule, IgxListModule, IgxBottomNavModule],
    ...
})
export class AppModule {}
```

コンポーネントの typescript ファイルに連絡先のデータ ソースを作成します。

```typescript
...
public contactsList: object[] = [{
        avatar: "assets/images/avatar/1.jpg",
        favorite: true,
        key: "1",
        link: "#",
        phone: "770-504-2217",
        text: "Terrance Orta"
    }, {
        avatar: "assets/images/avatar/2.jpg",
        favorite: false,
        key: "2",
        link: "#",
        phone: "423-676-2869",
        text: "Richard Mahoney"
    }, {
        avatar: "assets/images/avatar/3.jpg",
        favorite: false,
        key: "3",
        link: "#",
        phone: "859-496-2817",
        text: "Donna Price"
    }, {
        avatar: "assets/images/avatar/4.jpg",
        favorite: false,
        key: "4",
        link: "#",
        phone: "901-747-3428",
        text: "Lisa Landers"
    }, {
        avatar: "assets/images/avatar/12.jpg",
        favorite: true,
        key: "5",
        link: "#",
        phone: "573-394-9254",
        text: "Dorothy H. Spencer"
    }, {
        avatar: "assets/images/avatar/13.jpg",
        favorite: false,
        key: "6",
        link: "#",
        phone: "323-668-1482",
        text: "Stephanie May"
    }, {
        avatar: "assets/images/avatar/14.jpg",
        favorite: false,
        key: "7",
        link: "#",
        phone: "401-661-3742",
        text: "Marianne Taylor"
    }];
...
```

コンポーネントのテンプレート マークアップに最初のパネルにある [`IgxListComponent`]({environment:angularApiUrl}/classes/igxlistcomponent.html) を含む Bottom Navigation を追加して編集します。

```html
...
<igx-bottom-nav>
    <igx-tab-panel icon="phone">
        <igx-list [allowRightPanning]="true" [allowLeftPanning]="true">
            <igx-list-item [isHeader]="true">History</igx-list-item>
            <igx-list-item igxRipple="pink" igxRippleTarget=".igx-list__item"
              *ngFor="let contact of contactsList">
                <div class="item">
                    <igx-avatar [src]="contact.avatar" roundShape="true"></igx-avatar>
                    <div class="person">
                        <p class="name">{{contact.text}}</p>
                        <span class="phone">{{contact.phone}}</span>
                    </div>
                    <igx-icon name="phone"></igx-icon>
                </div>
            </igx-list-item>
        </igx-list>
    </igx-tab-panel>
    <igx-tab-panel icon="supervisor_account">
        <div class="tab-content">
            <h3>Tab 2 Content</h3>
        </div>
    </igx-tab-panel>
    <igx-tab-panel icon="format_list_bulleted">
        <div class="tab-content">
            <h3>Tab 3 Content</h3>
        </div>
    </igx-tab-panel>
</igx-bottom-nav>
...
```

アプリケーションのスタイルを設定するために CSS 定義も含める必要があります。

```css
.tab-content {
    padding: 16px;
}

.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.item > [igxLabel],
.item > .person {
    position: absolute;
    margin-left: 72px;
}

.person .name {
    padding: 0;
    margin: 0;
}

.person .phone {
    font-size: 12px;
    color: gray;
}

.item igx-icon {
    color: lightgray;
}

.item igx-icon.favorite {
    color: orange;
}
```

このトピックの [Bottom Navigation デモ](#bottom-navigation-デモ) セクションで結果を確認できます。

### API References
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxBottomNavComponent]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html)
* [IgxBottomNavComponent Styles]({environment:sassApiUrl}/index.html#function-igx-bottom-nav-theme)
* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListItemComponent]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)
* [IgxTabComponent]({environment:angularApiUrl}/classes/igxtabcomponent.html)
* [IgxTabPanelComponent]({environment:angularApiUrl}/classes/igxtabpanelcomponent.html)

### 追加のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
