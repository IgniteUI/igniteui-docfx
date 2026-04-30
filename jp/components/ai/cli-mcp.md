---
title: Angular Ignite UI CLI MCP | Infragistics
_description: Ignite UI CLI MCP を AI クライアントに接続して、プロジェクトのスキャフォールディング、既存アプリの変更、コンポーネントの作成・更新、Ignite UI for Angular のドキュメントへの質問を行います。VS Code、GitHub、Cursor、Claude Desktop、Claude Code、JetBrains、その他の MCP クライアントの設定方法について説明します。
_keywords: Angular、Ignite UI for Angular、Infragistics、Ignite UI CLI MCP、Ignite UI Theming MCP、MCP、Model Context Protocol、AI、エージェント、GitHub Copilot、Cursor、Claude、JetBrains
_language: ja
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/ai/cli-mcp"
namespace: Infragistics.Controls
mentionedTypes: []
---

# Ignite UI CLI MCP

<p class="highlight">Ignite UI CLI MCP は、AI アシスタントが Ignite UI for Angular アプリケーションのプロジェクトをスキャフォールディングし、既存アプリを変更し、コンポーネントを作成・更新し、ドキュメントの質問に回答できるようにする <a href="https://modelcontextprotocol.io/" target="_blank">Model Context Protocol</a> (MCP) サーバーです。Ignite UI CLI MCP をエディター、GitHub リポジトリ、またはデスクトップ AI クライアントに接続して、やりたいことを説明するだけで、アシスタントが CLI ツールを代わりに操作します。</p>

<div class="divider"></div>

## 概要

Ignite UI CLI MCP は、チャットまたはエージェント モードを通じて、AI アシスタントに Ignite UI CLI のプロジェクト スキャフォールディング、コンポーネント生成、プロジェクト変更、ドキュメント対応ワークフローへの直接アクセスを提供します。このサーバーは Ignite UI Theming MCP と連携して動作します。CLI MCP はプロジェクトとコンポーネントのワークフローを担当し、Theming MCP はパレット、テーマ、トークン、スタイリングを担当します。ほとんどのチームは同じ AI クライアント セッションで両方のサーバーを接続します。

Ignite UI CLI MCP は Ignite UI Theming MCP と連携して動作します。実際には、CLI MCP がプロジェクトとコンポーネントのワークフローを処理し、Theming MCP がパレット、テーマ、トークン、スタイリング ワークフローを処理します。ほとんどのチームは両方のサーバーを接続することをお勧めします。

推奨される設定手順は、まず Ignite UI CLI から始めることです。この手順でプロジェクトを作成し、必要なパッケージをインストールし、VS Code 用の初期 MCP 設定を書き込みます。空のフォルダーから始めてアシスタントに MCP 経由でプロジェクトを作成させることも、すでに存在するプロジェクトに MCP を接続することもできます。

**接続後に試すプロンプトの例:**

> _「このフォルダーに新しい Ignite UI for Angular プロジェクトを作成し、推奨されるデフォルトを使用して、サンプル データを含むスターター ダッシュボード ページを追加してください。」_

> _「このプロジェクトに新しいグリッド ページを追加し、サンプル データに接続して、現在のナビゲーション構造を維持してください。」_

> _「コンボ コンポーネントが公開しているプロパティとイベントはどれですか？また、検索可能なドロップダウンに最も役立つものはどれですか？」_

> _「既存のプロジェクトを更新してサイド ナビゲーション レイアウトを追加し、現在のページとルートを保持してください。」_

## 前提条件

MCP サーバーを設定する前に、以下を準備してください。

- **Node.js** (v18 以降) のインストール - サーバーの起動に使用する `npx` コマンドを提供します。
- **MCP をサポートする AI クライアント** - たとえば、GitHub Copilot を使用した VS Code、GitHub Copilot クラウド エージェント、Cursor、Claude Desktop、Claude Code、または AI Assistant プラグインを使用した JetBrains IDE。
- サーバーの初回起動時に `npx` パッケージを解決するためのインターネット アクセス。
- 以下のいずれかの開始点:
  - 新しいプロジェクト用の空のフォルダー
  - Ignite UI CLI で作成したプロジェクト
  - 引き続き作業したい既存の Ignite UI for Angular プロジェクト

同じクライアント セッションでテーマ ツールを使用したい場合、`igniteui-theming` がプロジェクトにまだない場合は、次を実行してください。

```bash
npm install igniteui-theming
```

## AI クライアントに Ignite UI CLI MCP を設定する

MCP サーバーは `npx` を通じて起動されます。Node.js と `igniteui-cli` パッケージへのアクセス以外に、別途インストールは不要です。

標準の起動コマンドは次のとおりです。

```bash
npx -y igniteui-cli mcp
```

> [!NOTE]
> `-y` フラグは、手動の操作なしにサーバーを起動できるように、`npx` にパッケージのダウンロード プロンプトを自動確認するよう指示します。

### 設定パスの選択

Ignite UI CLI MCP を始める方法は 3 つあります。

> **推奨 - CLI を最初に使用**
> まず `ig new` または対応する `npx --package igniteui-cli igniteui new` コマンドを使用して Ignite UI CLI でプロジェクトを作成します。これが最も簡単な設定です。Ignite UI CLI がプロジェクトをスキャフォールディングし、必要なパッケージをインストールし、VS Code 用の `.vscode/mcp.json` を自動的に書き込みます。その後は、生成された MCP 設定を確認して、AI クライアントでプロジェクトを開くだけです。

> **空のフォルダー**
> 完全に空のフォルダーから始め、MCP 設定を手動で追加してから、アシスタントにチャットでプロジェクトを作成するよう依頼します。このパスは、CLI を先に実行するのではなく、最初から MCP にプロジェクト作成フローを主導させたい場合に便利です。

> **既存のプロジェクト**
> すでに持っているプロジェクトに MCP 設定を追加して、現在のコードベースで作業を続けます。このパスは、プロジェクトがすでに存在しており、何も再生成せずにプロジェクトの変更、コンポーネントの作業、ドキュメントの質問にアシスタントを活用したい場合に便利です。

3 つのパスはすべて同じ MCP サーバーを使用します。違いは、プロンプトを開始する前にプロジェクトをどのように準備するかだけです。

- **CLI 優先**パスでは、Ignite UI CLI がプロジェクトを作成し、最初の MCP 設定を準備します
- **空フォルダー**パスでは、最初に MCP 設定を作成して、その後アシスタントにプロジェクトを作成させます
- **既存プロジェクト**パスでは、現在のコードベースに MCP をアタッチして、すでに存在するものから続けます

いずれの場合も、MCP サーバーが接続されて AI クライアントで表示されると、アシスタントは同じセッションで作業を続けることができます。

最初に Ignite UI CLI でプロジェクトを作成する場合は、次のいずれかの方法で CLI を実行できます。

- **グローバル インストール**

  ```bash
  npm install -g igniteui-cli
  ```

  これにより、任意のターミナル セッションで `ig` コマンドが使用できるようになります。プロジェクトを定期的に作成・スキャフォールディングする予定がある場合は最も明確な選択肢です。

- **グローバル インストールなし**

  ```bash
  npx --package igniteui-cli igniteui new
  ```

  グローバルな `ig` コマンドの代わりに `npx` を通じて CLI を実行します。

**CLI 優先**パスでは、ガイド モードまたは直接コマンドでプロジェクトを作成できます。

利用可能なオプションを CLI に順を追って案内してもらいたい場合はガイド モードを使用します。

```bash
ig new
```

対応する `npx` 形式:

```bash
npx --package igniteui-cli igniteui new
```

プロジェクト設定がわかっている場合は直接コマンドを使用します。

```bash
ig new my-app --framework=angular --type=igx-ts --template=empty
```

対応する `npx` 形式:

```bash
npx --package igniteui-cli igniteui new my-app --framework=angular --type=igx-ts --template=empty
```

ガイド モードでは、Ignite UI CLI がプロジェクト名、フレームワーク、テンプレート、テーマ、コンポーネントを追加するかセットアップを完了するかを確認するプロンプトを表示します。直接モードでは、コマンド自体にフレームワークとサポートされているオプションを指定します。

プロジェクト テンプレート、CLI コマンド オプション、`ig add` などのコンポーネント スキャフォールディング コマンドの詳細については、Angular 用 Ignite UI CLI ドキュメントを参照してください。

### VS Code

VS Code の GitHub Copilot は、ワークスペース レベルの設定ファイルを通じて MCP サーバーをサポートします。プロジェクトのルートに `.vscode/mcp.json` を作成または編集します。

```json
{
  "servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

Ignite UI CLI でプロジェクトを最初に作成した場合は、生成された `.vscode/mcp.json` を確認して、両方のエントリーが存在することを確認してください。

保存したら、GitHub Copilot チャット パネルを開き、**エージェント** モードに切り替えると、Ignite UI CLI MCP ツールが使用可能になります。

> [!NOTE]
> VS Code での MCP サポートには、GitHub Copilot と VS Code 1.99 以降が必要です。

### Cursor

Cursor はプロジェクト スコープの MCP 設定をサポートします。プロジェクトのルートに `.cursor/mcp.json` を作成または編集します。

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

新しい Cursor チャット セッションを開くと、サーバーが自動的に検出されます。

> [!NOTE]
> Cursor の **Settings → MCP** からグローバルに MCP サーバーを設定することもできます。

### Claude Desktop

サーバーを Claude Desktop の設定ファイルに追加します。

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

保存後、Claude Desktop を再起動してください。チャット入力エリアに MCP サーバー インジケーター (スライダー アイコン) が表示され、MCP ツールがアクティブであることが確認できます。

### Claude Code

Claude Code は CLI とプロジェクト スコープの `.mcp.json` ファイルを通じて MCP サーバーをサポートします。チームと設定を共有するには、プロジェクトのルートに `.mcp.json` を作成または編集します。

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

または、ローカル環境のみにコマンド ラインからサーバーを追加することもできます。

```bash
claude mcp add igniteui-cli -- npx -y igniteui-cli mcp
claude mcp add igniteui-theming -- npx -y igniteui-theming igniteui-theming-mcp
```

Claude Code 内で `/mcp` コマンドを使用して、サーバーが接続されていることを確認してください。

### JetBrains IDE

JetBrains AI Assistant は IDE の設定を通じて MCP サーバーをサポートします。

1. **Settings** (macOS では **Preferences**) を開きます。

2. **Tools → AI Assistant → Model Context Protocol (MCP)** に移動します。

3. **+ 追加** をクリックして、**JSON として** を選択するか、フォーム フィールドを使用します。

4. 次の設定を入力します。

   ```json
   {
     "mcpServers": {
       "igniteui-cli": {
         "command": "npx",
         "args": ["-y", "igniteui-cli", "mcp"]
       },
       "igniteui-theming": {
         "command": "npx",
         "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
       }
     }
   }
   ```

5. **OK** をクリックして AI Assistant を再起動します。

> [!NOTE]
> MCP サポートには、JetBrains IDE に AI Assistant プラグインがインストールされて有効になっている必要があります。

### その他の MCP クライアント

他の MCP 互換クライアントについては、次の起動コマンドで STDIO トランスポートを使用します。

```bash
npx -y igniteui-cli mcp
npx -y igniteui-theming igniteui-theming-mcp
```

### GitHub

GitHub Copilot クラウド エージェントはリポジトリ レベルの MCP 設定をサポートします。リポジトリで次の手順を実行します。

1. リポジトリのメイン ページを開きます。
2. **Settings** をクリックします。
3. サイドバーで **Copilot** → **Cloud agent** に移動します。
4. **MCP configuration** セクションに JSON を貼り付けます。
5. **Save** をクリックします。

次のようなリポジトリ設定を使用します。

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "type": "local",
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"],
      "tools": ["*"]
    },
    "igniteui-theming": {
      "type": "local",
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"],
      "tools": ["*"]
    }
  }
}
```

この設定は、GitHub クラウド エージェントがリポジトリ コンテキストから直接同じ CLI MCP と Theming MCP ツールを使用するようにしたい場合に便利です。

## 利用可能なツール

MCP サーバーは、AI がプロンプトに基づいて自動的に使用するツールのセットを公開しています。これらのツールを直接呼び出す必要はありません。チャットでやりたいことを説明すると、アシスタントが適切なものを選択します。このテーブルは、作業を始める前に何が利用可能かを把握するためのものです。

現在のパラメーターを含むライブ リストを取得するには、次のように質問してください。

> _「Ignite UI CLI MCP はどのようなツールを提供していますか？」_

各ツールの概要は次のとおりです。

| ツール                    | 説明                                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `list_components`         | フレームワークの利用可能な Ignite UI コンポーネント ドキュメントを一覧表示します。オプションのキーワード フィルター (名前、キーワード、サマリーに対する大文字小文字を区別しない部分文字列一致) を受け付けます。 |
| `get_doc`                 | kebab-case 名 (例: `grid-editing`、`combo-overview`) で特定のコンポーネント ドキュメントの全 Markdown コンテンツを取得します。コード サンプル、テーブル、リンクを含みます。   |
| `search_docs`             | フレームワークの Ignite UI ドキュメント全体にわたる全文検索を実行します。抜粋付きの最大 20 件のランキング結果を返します。                                                       |
| `get_project_setup_guide` | CLI 手順とインストール手順を含む、特定のフレームワークで新しいプロジェクトを作成するためのプロジェクト設定ガイドを返します。                                                    |
| `search_api`              | Angular、React、Web Components 全体でキーワードまたはコンポーネント名で API エントリーを検索します。                                                                            |
| `get_api_reference`       | プロパティ、メソッド、イベントを含む特定のコンポーネントまたはクラスの完全な API リファレンスを返します。Angular、React、Web Components をサポートします。                      |

大まかに言うと、CLI MCP ツールは以下の作業に役立ちます。

- 新しいプロジェクトの作成
- 既存のプロジェクトでの作業
- コンポーネントの追加と変更
- プロジェクト構造と設定の更新
- ドキュメントと API の質問への回答

> [!NOTE]
> フレームワーク検出はコンポーネントのプレフィックスを使用します: `for Angular`、`for React`、`for Web Components`、`for Blazor`。アシスタントは開いているファイルまたはプロンプト コンテキストから適切なフレームワークを自動的に検出します。

テーマ サーバーは、同じクライアント セッションにスタイリング、テーマ、パレット、トークンのワークフローを追加します。

## 一般的なワークフロー

以下の設定シナリオは、各開始点をいつ使用するかを示しています。

### CLI 優先セットアップ

最速のガイド セットアップを望み、`.vscode/mcp.json` を自動生成したい場合は、まず Ignite UI CLI でプロジェクトを作成します。

シナリオ例:

- _「最初に Ignite UI CLI で新しいプロジェクトを作成し、生成されたプロジェクトを VS Code で開いて、MCP で続きを進めたいです。」_
- _「React プロジェクトを作成したいことがわかっているので、CLI で作成してから MCP を使ってページとコンポーネントを追加したいです。」_

### 空フォルダーのセットアップ

MCP 設定を自分で追加した後、アシスタントにチャットからプロジェクトを作成させたい場合は、空のフォルダーから始めます。

シナリオ例:

- _「完全に空のフォルダーがあり、MCP が接続された後、アシスタントにチャットからプロジェクト全体を作成させたいです。」_
- _「最初に Ignite UI CLI を手動で実行したくありません。MCP に最初のプロジェクト作成ステップを主導させたいです。」_

### 既存プロジェクトのセットアップ

現在のコードベースを維持しながら、プロジェクトの変更、コンポーネントの作業、ドキュメントの質問にアシスタントを活用したい場合は、既存のプロジェクトに MCP を接続します。

シナリオ例:

- _「すでにプロジェクトがあり、アシスタントがページやコンポーネントの更新を手伝えるように MCP を追加するだけです。」_
- _「プロジェクトはすでに存在しており、現在のコードベースで作業しながらドキュメントと API の質問をすることが主な目的です。」_

## トラブルシューティング

**`npx` が認識されない**

Node.js がインストールされていないか、現在のターミナル環境で使用できません。[nodejs.org](https://nodejs.org) から Node.js をインストールして、`node --version` で確認してください。

**`ig` が認識されない**

グローバルな `ig` コマンドを使用する場合は、`npm install -g igniteui-cli` で最初に Ignite UI CLI をインストールしてください。グローバル インストールを望まない場合は、代わりに `npx --package igniteui-cli igniteui ...` 形式を使用してください。

**設定を保存後に MCP ツールが表示されない**

ワークスペースをリロードするか、エディターを再起動するか、AI クライアントを再起動してください。一部のクライアントは新しい MCP 設定ファイルを検出するために完全な再起動が必要です。

**一方のサーバーが起動に失敗する**

設定の内容が、キー名と引数の順序を含めて、例と正確に一致していることを確認してください。

**プロジェクトが作成されたが、MCP 設定が VS Code にしかない**

Ignite UI CLI は CLI 優先パス用に `.vscode/mcp.json` を書き込みます。Cursor、Claude Desktop、Claude Code、JetBrains、GitHub、または他の MCP クライアントを使用している場合は、同じサーバー エントリーをそのクライアントの設定形式と場所にコピーしてください。

**アシスタントが間違ったフォルダーで作業しているか、プロジェクト ファイルが見つからない**

AI クライアントがプロジェクトのルートを指していることを確認してください。エディター ベースのクライアントを使用している場合は、プロジェクトのルート フォルダーを開いてください。デスクトップまたはチャット ファーストのクライアントを使用している場合は、正しいプロジェクト フォルダーをセッション コンテキストとして利用可能にしてください。

**空フォルダーのセットアップが期待通りに動作しない**

開始前にフォルダーが実際に空であることを確認してください。フォルダーにすでにプロジェクト ファイルが含まれている場合は、新しい空ワークスペースとして扱うのではなく、既存プロジェクト パスを使用してください。

**GitHub の MCP 設定が拒否される**

JSON が `mcpServers` 構造を使用していること、および各ローカル サーバー エントリーに `type`、`command`、`args` が含まれていることを確認してください。`tools` フィールドを含める場合は、有効なツール名または `["*"]` を使用してください。

## その他のリソース

- [Ignite UI を使用した AI 支援開発](./ai-assisted-development-overview.md)
- [Ignite UI for Angular のスキル](./skills.md)
- [Ignite UI Theming MCP](./theming-mcp.md)

<div class="divider--half"></div>

コミュニティはいつでも活気づいており、新しいアイデアを歓迎しています。

- [Ignite UI for Angular **フォーラム**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
