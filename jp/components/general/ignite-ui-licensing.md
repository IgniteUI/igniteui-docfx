---
title: Ignite UI のライセンス
_description: Ignite UI npm ライセンス パッケージの使用に関する情報
_keywords: npm package license, ignite ui license feed, licensing, npm パッケージ ライセンス, ignite ui ライセンス フィード, ライセンス
_language: ja
---

# ライセンス FAQ とインストール
## 使用許諾契約
購入して使用する製品に関するすべての[使用条件](https://jp.infragistics.com/legal/license/igultimate-la)を知っておくことが重要です。

> [!Note]
> 2020 年第 2 四半期にライセンス条件およびサブスクリプション モデルを更新しました。

トライアル期間が終了した場合、またはサブスクリプションの[有効期限が切れた](http://jp.infragistics.com/renewal)場合、Ignite UI を使用するチームの各開発者はサブスクリプションを[購入する](https://jp.infragistics.com/how-to-buy/product-pricing)必要があります。これにより、<https://packages.infragistics.com/npm/js-licensed/>  でホストされるプライベート npm フィードを開発に使用できます。ここには、Ignite UI for Angular パッケージの最新バージョンがあります。現在のサブスクリプションがある場合、Ignite UI for Angular の製品版をプライベート フィードによりアクセスできます。

Ignite UI 使用許諾契約と利用規約の詳細については、[ここをクリック](https://jp.infragistics.com/legal/license/igultimate-la)を参照してください。

インフラジスティックスは、以下の無料の非営利および再販禁止 (NFR) ライセンスを提供しています。

  - Microsoft MVP、Microsoft Regional Director、Google Developer Expert などの開発者プログラムに参加している場合。
  - 小学生、中学生、大学生、または教育機関、または教授である場合。

無料の非営利および再販禁止 (NFR) ライセンスの資格がある場合、またはライセンスに関する質問がある場合は、[お問い合わせ](https://jp.infragistics.com/about-us/contact-us)ください。

## Ignite UI for Angular npm パッケージ - プライベート npm フィードの使用
Npm は Node.js ランタイム環境で使用する一般的なデフォルト パッケージ マネージャーです。広く採用されており、プロジェクトに依存するパッケージをすばやく簡単に処理できます。npm の使用方法の詳細については、[npm ヘルプ](https://docs.npmjs.com/)を参照してください。

Infragistics Ignite UI for Angular は npm パッケージとして提供され、[`Ignite UI CLI`](./cli/step-by-step-guide-using-cli.md) または [Ignite UI for Angular Schematics](./cli/step-by-step-guide-using-angular-schematics.md) でプロジェクトに依存関係として追加できます。このパッケージをインストールすると、製品の [Ignite UI for Angular トライアル版](https://jp.infragistics.com/products/ignite-ui-angular)の使用が開始されます。

>[!NOTE]
> トライアル版の使用を開始するとはどういう意味ですか? これは、Web ビューの**ウォーターマーク**部分を含む製品バージョンを使用することを意味します。ライセンス パッケージを有効期限が切れる前に一定期間 (たとえば、1 か月間) 使用するという意味ではありません。

Infragistics Ignite UI Dock Manager Web コンポーネントは、別の npm パッケージとして利用できます。インストールすると、製品の [Ignite UI Dock Manager Web コンポーネント トライアル版](https://jp.infragistics.com/products/ignite-ui-angular)の使用が開始されます。

> Ignite UI for Angular npm パッケージの使用方法の詳細については、[このトピック](getting-started.md#ignite-ui-for-angular-のインストール)を参照してください。Ignite UI Dock Manager Web コンポーネントの詳細については、[こちら](../dock-manager.md)を参照してください。

### Angular Schematics または Ignite UI CLI を使用したパッケージのアップグレード
Ignite UI for Angular が [`ng add`](./getting-started.md) を使用してプロジェクトに追加された場合、またはプロジェクトが [schematic コレクション](./cli/getting-started-with-angular-schematics.md)または [Ignite UI CLI](./cli/getting-started-with-cli.md) を使用して作成された場合、`upgrade-packages` を使用して、ライセンス パッケージを使用するようにアプリを自動的にアップグレードできます。プロジェクト パッケージの依存関係には、`@igniteui/angular-schematics` または `igniteui-cli` が含まれ、どちらも upgrade コマンドをサポートします。

>[!NOTE]
> パッケージが変更されるため、切り替える前にプロジェクトを更新することをお勧めします。このように、Ignite UI Angular の高いバージョンを使用せず、更新の移行のトラブルを防止します。[アップデート ガイド](./update-guide.md)を参照してください。

プロジェクトのセットアップに応じて、プロジェクトで以下の schematic を実行します。
```bash
ng g @igniteui/angular-schematics:upgrade-packages
```
または `igniteui-cli` を使用します:

```bash
ig upgrade-packages
```
schematic またはコマンドはプロジェクトのパッケージの依存関係を切り替え、ソース参照を更新します。
まだセットアップされていない場合、NPM レジストリへのログインが要求されます。

>[!NOTE]
> プロジェクトが [`yarn`](https://yarnpkg.com/) を使用している場合は、`--skip-install` フラグを指定して `upgrade-packages` を実行します。その後、`yarn install` (現在 `upgrade` コマンドはインストールに `npm` を使用します) を実行して `yarn.lock` を適切に更新します。

### プライベート npm フィードを使用するための環境設定方法 (ステップバイステップ ガイド)

#### 最初にプライベート レジストリを構成し、レジストリを Infragistics スコープと関連付けます。

これにより公開用の npm レジストリおよびプライベート Infragistics レジストリからのパッケージを同時に使用できます。

> [!NOTE]
> アカウントのライセンスがない場合 (トライアル版アカウントを使用している場合)、プライベート パッケージ フィードにアクセスできません (たとえば、404 または 403 エラーメッセージが返されます)。**ライセンスされているアカウントのみが packages.infragistics プライベート フィードにアクセスできます。**

### npm を使用してプライベート フィードにログインするには、次のようにします。

#### npm version 9+
プライベート フィードは現在、npm v9 で login/adduser コマンドをサポートしていないため、必要な認証フィールドを構成に追加する代わりに、次の手順をお勧めします。

```cmd
npm config set @infragistics:registry https://packages.infragistics.com/npm/js-licensed/
npm config set //packages.infragistics.com/npm/js-licensed/:username=YOUR_USERNAME
npm config set //packages.infragistics.com/npm/js-licensed/:email=YOUR_IG_EMAIL
npm config set //packages.infragistics.com/npm/js-licensed/:_auth=YOUR_IG_AUTH_TOKEN
```

Infragistics プロファイルから[アクセス トークン](#アクセス-トークンの使用)を生成できます。

このアプローチは、以前のすべてのバージョンの `npm` に適用できます。

#### v8 までの npm バージョン
`adduser` コマンドを実行し、ユーザー アカウントとパスワードを指定します。

```cmd
npm adduser --registry=https://packages.infragistics.com/npm/js-licensed/ --scope=@infragistics
```

Infragistics アカウントにログインするユーザー名およびパスワードを入力する必要があります。Infragistics プロファイルに登録されるメールも入力してください。

>[!NOTE]
> `npm` はユーザー名で `"@"` の使用を許可しません。ユーザー名が Infragistics アカウントのメール アドレスであるため、`"@"` 記号を含みます。この制限を回避するには、`"@"` 記号の代わりに `"!!"` (2 つの感嘆符) を使用します。たとえば、ユーザー名が `"username@example.com"` の場合、`"username!!example.com"` と入力します。

> [!NOTE]
> **macOS シェルの動作**: macOS を使用していて、`npm config set` を介して `:_auth` トークンを手動で設定する場合は、次のように**トークンを二重引用符で囲む**ようにしてください。
> 
> ```bash
> npm config set //packages.infragistics.com/npm/js-licensed/:_auth="YOUR_IG_AUTH_TOKEN"
> ```
> 
> これは、macOS でのシェル解析の違いにより、トークン内の特殊文字が適切に引用符で囲まれていない場合に認証エラー発生する可能性があるたです。この問題は、通常 Windows では発生しません。

#### 完了した後に、ログイン済みの状態で、プロジェクトで Ignite UI の最新バージョンをインストールできます。

```cmd
npm uninstall igniteui-angular
npm install @infragistics/igniteui-angular

npm uninstall igniteui-dockmanager
npm install @infragistics/igniteui-dockmanager
```

Ignite UI for Angular パッケージをスコープに設定したため、プライベート フィードおよび npmjs.org からのパッケージを同時にインストールするためにレジストリを変更する必要はありません。

#### プロジェクト ソースに追加の変更が必要になる場合があります。
トライアル版からライセンス パッケージにアップグレードする際に CLI 移行を使用していない場合:
- プロジェクトの **tsconfig.json** に **paths** マッピングを追加します。

```json
{
  /* ... */
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    /* ... */
    "paths": {
      "igniteui-dockmanager": ["./node_modules/@infragistics/igniteui-dockmanager"],
      "igniteui-dockmanager/*": ["./node_modules/@infragistics/igniteui-dockmanager/*"],
    }
  }
}
```

- プロジェクトの `angular.json` に `stylePreprocessorOptions` マッピングを追加します。

```json
{
  "projects": {
    ..
    "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            ...
            "aot": true,
            "stylePreprocessorOptions": {
                "includePaths": [
                    "node_modules/@infragistics"
                ]
            }
            ...
},
```
- `igniteui-angular/lib` ソースのプロジェクト `sass` インポートから `~` 記号を削除します。

```scss
@use "~igniteui-angular/lib/core/styles/themes/index" as *;

// Should be changed to
@use "igniteui-angular/lib/core/styles/themes/index" as *;
```

npm を既に使用していて、Ignite UI for Angular ライセンスがある場合、Infragistics プライベート フィードを構成してください。


## アクセス トークンの使用

アクセス トークンを使用してプライベート npm フィードの認証を受けることもできます。アクセストークンは [infragistics.com ユーザー アカウント](https://jp.account.infragistics.com/access-tokens)で取得できます。アクセス トークン認証は、CI プロセスを Ignite UI for Angular ライセンス パッケージを使用する公開アクセス可能なリポジトリに統合する場合に推奨される代替方法です。

以下は、ローカル構成でアクセス トークンを使用してプライベート npm レジストリへの認証を設定する方法、Azure Pipelines のビルド手順、および Travis CI のビルド プロセスです。 

* https://account.infragistics.com/package-feeds からトークンを生成します。

<img class="responsive-img" style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; width: calc(100% - 250px)" 
  src="../../images/general/generate-token.jpg"
  data-src="../../images/general/generate-token.jpg"
  alt="新しく生成されたトークン"
  title="新しいトークンの生成" />

> [!Note]
> 各トークンは Base64 エンコードです。

* 以下を [.npmrc](https://docs.npmjs.com/configuring-npm/npmrc.html) ファイルに追加します。

```cmd
@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/
//packages.infragistics.com/npm/js-licensed/:_auth=YOUR_ACCESS_TOKEN
//packages.infragistics.com/npm/js-licensed/:username=YOUR_USERNAME
```

### Azure Pipelines の構成
以下の手順で azure-pipelines.yml を更新します。

```cmd
手順:

- script: npm config set @infragistics:registry $(npmRegistry)
  displayName: 'Npm add registry'
- script: npm config set $(igScope):_auth=$(token)
  displayName: 'Npm config auth'
```

次に、*npm registry*、*scope* および *token* の変数を追加する必要があります。2 つの方法があります。 

#### パイプラインのライブラリ ページで変数グループを定義する方法
[この記事](https://docs.microsoft.com/ja-jp/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=yaml)は、変数グループを使用して複数のパイプラインで制御および利用できる値を保存する方法を説明します。

<img class="responsive-img" style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 350px)" 
  src="../../images/general/azure-ci-variable-groups.jpg"
  data-src="../../images/general/azure-ci-variable-groups.jpg" 
  alt="npm Registry および token 変数の設定"
  title="npm Registry および token 変数の設定" />

 #### パイプラインの設定 UI で変数を定義し、YAML ファイルで参照する方法

最も一般的なケースでは、[変数を設定して YAML ファイル内で使用します](https://docs.microsoft.com/ja-jp/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch#set-variables-in-pipeline)。

<img class="responsive-img" style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 650px)" 
  src="../../images/general/azure-ci-new-variable-2.jpg"
  data-src="../../images/general/azure-ci-new-variable-2.jpg" 
  alt="npm Registry および token 変数の設定"
  title="npm Registry および token 変数の設定" />

<img class="responsive-img" style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 650px)" 
  src="../../images/general/azure-ci-add-token-variable-1.jpg"
  data-src="../../images/general/azure-ci-add-token-variable-1.jpg"
  alt="npm Registry および token 変数"
  title="npm Registry および token 変数" />

### Travis CI の構成
ここではほとんど同じ方法を使用しますが、構成は [before_install](https://docs.travis-ci.com/user/job-lifecycle/#the-job-lifecycle) に設定されます。

```cmd
before_install:
- echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
- echo "//packages.infragistics.com/npm/js-licensed/:_auth=$TOKEN" >> ~/.npmrc
```

環境変数を定義する最良の方法は、含まれる情報のタイプによって異なるため、[2 つのオプションがあります](https://docs.travis-ci.com/user/environment-variables/)。

* 暗号化して [.travis.yml](https://docs.travis-ci.com/user/environment-variables/#defining-encrypted-variables-in-travisyml) に追加します。
* [リポジトリ設定](https://docs.travis-ci.com/user/environment-variables/#defining-variables-in-repository-settings)に追加します。

### GitHub Actions の構成

`npm i(ci)` 手順の前に以下のスクリプトを [CI ワークフロー構成](https://help.github.com/en/actions/language-and-framework-guides/using-nodejs-with-github-actions)に追加します: 

```cmd
- run: echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
- run: echo "//packages.infragistics.com/npm/js-licensed/:_auth=${{ secrets.NPM_TOKEN }}" >> ~/.npmrc
```

[*シークレット* (暗号化された環境変数)](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) を定義してアクセス トークンなどの機密情報に対して GitHub Actions ワークフローでそれらを使用します。
