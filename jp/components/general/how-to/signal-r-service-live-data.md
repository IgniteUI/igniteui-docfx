---
title: ライブ データ ストリーミング用の ASP.NET Core SignalR サービスを作成する方法。
_description: 最新のデータ グリッドとドック マネージャーは、ASP.NET Core SignalR とともにアプリケーションの作成に使用されます。
_keywords: angular, signalr, .net core, infragistics, インフラジスティックス
_language: ja
---

# ASP.NET CoreSignalR を使用したリアルタイム Web アプリ
このトピックでは、**ASP.NET Core SignalR** を使用してデータの**ストリーミング**と**受信**の両方に対応するアプリケーションを作成する方法を説明します。

前提条件:
- ASP.NET Core と Angular の基本的な知識。
- .NET Core 3.1 がインストールされ、Visual Studio などの IDE。

この記事の終わりまでに、次のことがわかります:
- SignalR を追加して使用する方法。
- クライアント接続を開き、**メソッドの呼び出し**の概念を使用してクライアントごとにデータをストリーミングする方法。
- Observables を使用して Angular アプリケーションで SignalR サービスを使用する方法。

SignalR はいくつかの転送を利用し、クライアントとサーバーの機能 ([WebSockets、サーバー送信イベント (SSE)、またはロングポーリング](https://stackoverflow.com/a/12855533/2940502)) を考慮して、利用可能な最適な転送を自動的に選択します。

クライアントがサーバーにリアルタイムで接続されているときに、SSE とロングポーリングを除いて、[WebSockets](https://docs.microsoft.com/ja-jp/aspnet/core/fundamentals/websockets?view=aspnetcore-5.) の観点から話すと、何かが起こったときはいつでも、サーバーはその WebSocket を介してクライアントにメッセージを送信することを認識します。一昔前のクライアントとサーバーでは、ロングポーリング転送が使用されます。

これは、SignalR が最新のクライアントとサーバーを処理する方法であり、利用可能な場合は内部で WebSockets を使用し、そうでない場合は他の技術とテクノロジーに適切にフォールバックします。

<img style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 950px); max-width: calc(100% - 400px);"
  src="../../../images/general/how-to/ws-party-1.jpg"
  data-src="../../../images/general/how-to/ws-party-1.jpg"
  alt="パーティの仕方"
  title="How to party" />

それはハンドシェイクのようなもので、クライアントとサーバーは何を使用するかについて合意します。これは**プロセス ネゴシエーション**と呼ばれます。

<img style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 650px); max-width: calc(100% - 400px);"
  src="../../../images/general/how-to/ws-lets-party.jpg"
  data-src="../../../images/general/how-to/ws-lets-party.jpg"
  alt="WebSocket を使用しましょう"
  title="Let's use WebSocket" />

## SignalR の例
このデモの目的は、[ASP.NET Core SignalR](https://dotnet.microsoft.com/apps/aspnet/signalr) を使用してリアルタイム データ ストリームを表示する財務用スクリーン ボードを紹介することです。

<code-view style="height:700px"
           data-demos-base-url="{environment:lobDemosBaseUrl}"
           iframe-src="{environment:lobDemosBaseUrl}/grid-finjs-dock-manager/grid-finjs-dock-manager" alt="サービスを使用した Angular ライブデータ更新の例">
</code-view>

## SignalR サーバーの構成

### ASP.NET Core アプリを作成する
LASP.NET Core SignalR アプリをセットアップする方法を見てみましょう。
Visual Studio の **[ファイル]** >> **[新規作成]** >> **[プロジェクト]** で、[ASP.NET Core Web アプリケーション] を選択し、セットアップに従います。構成上の問題が発生した場合は、[Microsoft の公式ドキュメント チュートリアル](https://docs.microsoft.com/ja-jp/aspnet/core/tutorials/signalr?view=aspnetcore-3.1&tabs=visual-studio)に従ってください。

<img style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 650px); max-width: calc(100% - 400px);"
  src="../../../images/general/how-to/create-new-project.jpg"
  data-src="../../../images/general/how-to/create-new-project.jpg"
  alt="新しい asp.net core プロジェクトの作成"
  title="Create new asp.net core project" />


### SignalR 構成のセットアップ

以下のコードを [Startup.cs ファイル](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Startup.cs)に追加します。
- `Configure` メソッドのエンドポイント部分。

```cs
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapHub<StreamHub>("/streamHub");
});
```

- SignalR の使用法を `ConfigureServices` メソッドに追加します。

```cs
services.AddSignalR(options =>
{
    options.EnableDetailedErrors = true;
});
```

上記の変更により、SignalR が ASP.NET Core の依存関係挿入およびルーティング システムに追加されます。

それでは、追加の基本構成をセットアップしましょう。[properties/launchSettings.json](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Properties/launchSettings.json#L11) ファイルを開き、それに応じて変更します:

```json
"profiles": {
    "WebAPI": {
      "commandName": "Project",
      "launchBrowser": false,
      "applicationUrl": "https://localhost:5001;http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
```
サーバー側のプロジェクトは `localhost:5001` で実行され、クライアント側は `localhost:4200` で実行されるため、これら 2 つの間の通信を確立するには、CORS を有効にする必要があります。[Startup.cs](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Startup.cs#L31) クラスを開いて、変更してみましょう。

```cs
public void ConfigureServices(IServiceCollection services)
{
    services.AddCors(options =>
    {
        options.AddPolicy("CorsPolicy", builder => builder
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials()
        .WithOrigins("http://localhost:4200"));
    });
    ...

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        ...
        app.UseCors("CorsPolicy");
        ...
```

クロス オリジン リソース共有の有効化で特定の問題が発生した場合は、[Microsoft の公式トピック](https://docs.microsoft.com/ja-jp/aspnet/core/signalr/security?view=aspnetcore-5.0#cross-origin-resource-sharing)を確認してください。
### SignalR ハブのセットアップ
[SignalR ハブ](https://docs.microsoft.com/ja-jp/aspnet/core/signalr/hubs?view=aspnetcore-5.0#what-is-a-signalr-hub)とは何かを説明することから始めましょう。
SignalR ハブ API を使用すると、サーバーから接続されたクライアントのメソッドを呼び出すことができます。サーバー コードでは、クライアントによって呼び出されるメソッドを定義します。SignalR には、**呼び出し**と呼ばれるこの概念があります。実際には、特定のメソッドを使用してクライアントからハブを呼び出すことができます。クライアント コードでは、サーバーから呼び出されるメソッドを定義します。

実際のハブはサーバー側にあります。**クライアント**がいて、**ハブ**がそれらすべての間にあると想像してください。ハブでメソッドを呼び出すことにより、`Clients.All.doWork()` を使用してすべてのクライアントに何かを言うことができます。これは、接続されているすべてのクライアントに適用されます。また、特定のメソッドの呼び出し元である 1 つのクライアントとのみ通信できます。

<img style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 650px); max-width: calc(100% - 400px);"
  src="../../../images/general/how-to/ws-hub-callers.jpg"
  data-src="../../../images/general/how-to/ws-hub-callers.jpg"
  alt="呼び出し元とのハブの例"
  title="Hub example with callers" />

接続、グループ、およびメッセージの管理を担当する基本 Hub クラスを継承する [StreamHub クラス](https://github.com/IgniteUI/finjs-web-api/blob/d493f159e0a6f14b5ffea3e893f543f057fdc92a/WebAPI/Models/StreamHub.cs#L9)を作成しました。Hub クラスはステートレスであり、特定のメソッドの新しい呼び出しはそれぞれ、このクラスの新しいインスタンスにあることに注意してください。インスタンス プロパティに状態を保存することは無意味です。代わりに、静的プロパティを使用することをお勧めします。この場合、静的キー値ペアのコレクションを使用して、接続されている各クライアントのデータを保存します。 

このクラスの他の便利なプロパティは、*Clients*、*Context*、および *Groups* です。これらは、一意の *ConnectionID* に基づいて特定の動作を管理するのに役立ちます。また、このクラスは次の便利なメソッドを提供します:
- OnConnectedAsync() - ハブとの新しい接続が確立されたときに呼び出されます。
- OnDisconnectedAsync(Exception) - ハブとの接続が終了したときに呼び出されます。

これにより、接続が確立または閉じられたときに追加ロジックを実行できます。このアプリケーションでは、*Context connection ID* を取得し、それを使用して特定の間隔でデータを送り返す *UpdateParameters* メソッドも追加しました。ご覧のとおり、他のクライアントからのストリーミング介入を防ぐ一意の *ConnectionID* を介して通信します。

```cs
public async void UpdateParameters(int interval, int volume, bool live = false, bool updateAll = true)
{
    ...
    var connection = Context.ConnectionId;
    var clients = Clients;
    ...
    if (!clientConnections.ContainsKey(connection))
    {
        clientConnections.Add(connection, new TimerManager(async() =>
        {
            ...
            await Send(newDataArray, client, connection);
        }, interval));
    } else
    {
        clientConnections[connection].Stop();
        clientConnections[connection] = new TimerManager(async () =>
        {
            var client = clients.Client(connection);
            ..
            await Send(newDataArray, client, connection);
        }, interval);
    }
    ...
}
```

データの準備ができたら、`SendAsync` メソッドを使用して `transferdata` イベントを発行してデータを転送します。

```cs
public async Task Send(FinancialData[] array, IClientProxy client, string connection)
{
    await client.SendAsync("transferdata", array);
}
...

// Called when a connection with the hub is terminated
public override Task OnDisconnectedAsync(Exception exception)
{
    StopTimer();
    clientConnections.Remove(Context.ConnectionId);
    return base.OnDisconnectedAsync(exception);
}
```

クライアント アプリケーションは、登録されたイベントをリスニングします。

```ts
private registerSignalEvents() {
    this.hubConnection.onclose(() => {
        this.hasRemoteConnection = false;
    });
    this.hubConnection.on('transferdata', (data) => {
        this.data.next(data);
    })
}
```

ASP.NET Core アプリケーションの公開な GitHub リポジトリは[こちら](https://github.com/IgniteUI/finjs-web-api)にあります。

## SignalR クライアント ライブラリを作成する

SignalR サービスを利用するために Angular プロジェクトを作成します。
実際のアプリケーションを含む Github リポジトリは[こちら](https://github.com/IgniteUI/igniteui-angular-samples/tree/master/projects/app-lob/src/app/grid-finjs-dock-manager)にあります。

まず、SignalR をインストールすることから始めます:

```
npm install @microsoft/signalr
```

サーバーに向けて HTTP リクエストを送信するため、HttpClientModule も必要であることに注意してください。

以下に、ハブ接続ビルダーを処理する [signal-r.service.ts](https://github.com/IgniteUI/igniteui-angular-samples/blob/master/projects/app-lob/src/app/services/signal-r.service.ts#L10) ファイルを示します。

```ts
export class SignalRService implements OnDestroy {
    public data: BehaviorSubject<any[]>;
    public hasRemoteConnection: boolean;
    private hubConnection: signalR.HubConnection;
    ...

    constructor(private zone: NgZone, private http: HttpClient) {
        this.data = new BehaviorSubject([]);
    }
    ...

    // Start Hub Connection and Register events
    public startConnection = (interval = 500, volume = 1000, live = false,  updateAll = true) => {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Trace)
            .withUrl('https://www.infragistics.com/angular-apis/webapi/streamHub')
            .build();
        this.hubConnection
            .start()
            .then(() => {
                ...
                this.registerSignalEvents();
                this.broadcastParams(interval, volume, live, updateAll);
            })
            .catch(() => { ... });
    }

    // Change the broadcast parameters like frequency and data volume
    public broadcastParams = (frequency, volume, live, updateAll = true) => {
        this.hubConnection.invoke('updateparameters', frequency, volume, live, updateAll)
            .then(() => console.log('requestLiveData', volume))
            .catch(err => {
                console.error(err);
            });
    }

    // Register events
    private registerSignalEvents() {
        this.hubConnection.onclose(() => {
            this.hasRemoteConnection = false;
        });
        this.hubConnection.on('transferdata', (data) => {
            this.data.next(data);
        });
    }
    ...
```

app.component で、新しく作成された `startConnection` メソッドを使用します。

```ts
constructor(public dataService: SignalRService) {}
public ngOnInit() {
    this.dataService.startConnection(this.frequency, this.dataVolume, true, false);
}
...
```
### グリッドのデータ バインディング

これまでクライアント コードで見てきたように、`transferdata` イベントのリスナーを設定します。このイベントは、更新されたデータ配列を引数として受け取ります。新しく受信したデータをグリッドに渡すために、オブザーバブルを使用します。これを設定するには、グリッドのデータ ソースを次のようにデータ オブザーバブルにバインドする必要があります。

```html
<igx-grid [data]='data | async'> ... </igx-grid>
```

サーバーからクライアントに新しいデータを受信するたびに、データ オブザーバブルの `next()` メソッドを呼び出します。

```ts
    this.hubConnection.on('transferdata', (data) => {
        this.data.next(data);
    })
```

## トピックの重要ポイント

アプリケーションを更新するのではなく、データがいつ更新されるかを確認するだけの場合は、ASP.NET Core SignalR を検討してください。データが大きいと思う場合、または無限のスピンを表示してクライアントをブロックせずにスムーズなユーザー エクスペリエンスが必要な場合は、ストリーミング コンテンツを使用することを強くお勧めします。

SignalR Hub 通信の使用は簡単で直感的であり、Angular Observables を使用すると、WebSockets でデータ ストリーミングを使用する強力なアプリケーションを作成できます。