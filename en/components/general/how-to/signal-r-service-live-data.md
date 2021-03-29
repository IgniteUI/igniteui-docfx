---
title: How to create ASP.NET Core SignalR service for live-data streaming.
_description: Modern data grid & dock manager are used for application creation along with ASP.NET Core SignalR.
_keywords: angular, signalr, .net core, infragistics 
---

# ASP.NET Core SignalR
In this post, we’ll see how to create applications for both streaming and receiving a live-like data with ASP.NET Core SignalR. On certain interval a fixed amount of data will be updated and send to the client taking leverage of the SignalR Streaming capabilities.
## SignalR Example
The purpose of this demo is to showcase a financial screen board with Real-time data stream using [ASP.NET Core SignalR](https://dotnet.microsoft.com/apps/aspnet/signalr).

<code-view style="height:700px" 
           data-demos-base-url="{environment:lobDemosBaseUrl}" 
           iframe-src="{environment:lobDemosBaseUrl}/grid-finjs-dock-manager/grid-finjs-dock-manager" alt="Angular Live-data Update Example with a service">
</code-view>

## SignalR Server Configuration
### What is a stream?
Streaming or media streaming is a technique for transferring data so that it can be processed as a steady and continuous stream. ASP.NET Core SignalR supports streaming from [client to server](https://docs.microsoft.com/en-us/aspnet/core/signalr/streaming?view=aspnetcore-5.0#client-to-server-streaming) and from [server to client](https://docs.microsoft.com/en-us/aspnet/core/signalr/streaming?view=aspnetcore-5.0#server-to-client-streaming). 

### Create ASP.NET Core App
Let's see how to set up the ASP.NET Core SignalR application. In Visual Studio from **File** >> **New project** choose ASP.NET Core Web Application and follow the setup. Feel free to follow [the official Microsoft documentation tutorial](https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr?view=aspnetcore-3.1&tabs=visual-studio).

<img class="responsive-img" style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 650px)" 
  src="../../../images/general/how-to/create-new-project.jpg"
  data-src="../../../images/general/how-to/create-new-project.jpg" 
  alt="Create new asp.net core project"
  title="Create new asp.net core project" />

### SugnalR Hub Setup
[What is a SignalR hub?](https://docs.microsoft.com/en-us/aspnet/core/signalr/hubs?view=aspnetcore-5.0#what-is-a-signalr-hub)
The SignalR Hubs API enables you to call methods on connected clients from the server. In the server code, you define methods that are called by client. In the client code, you define methods that are called from the server. SignalR takes care of everything behind the scenes that makes real-time client-to-server and server-to-client communications possible.

[TODO] We've created a StreamHub class that inherits the SignalR Base Hub class, along with UpdateParameters method that gets a Context connection ID and use it to send back data at certain interval ...

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

[TODO] Async task with OnDisconnectedAsync

```cs
public async Task Send(FinancialData[] array, IClientProxy client, string connection)
{
    await client.SendAsync("transferdata", array);
}
...

public override Task OnDisconnectedAsync(Exception exception)
{
    StopTimer();
    clientConnections.Remove(Context.ConnectionId);
    return base.OnDisconnectedAsync(exception);
}
```

[Public GitHub repository](https://github.com/IgniteUI/finjs-web-api).

### SignalR Config Setup

Add the following code to the [Startup.cs file](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Startup.cs):
- Endpoint part of the `Configure` method.

```cs
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapHub<StreamHub>("/streamHub");
});
```
- AddSignalR ot the `ConfigureServices` method.

```cs
services.AddSignalR(options =>
{
    options.EnableDetailedErrors = true;
});
```

These changes add SignalR to the ASP.NET Core dependency injection and routing systems.

We are going to set up additional basic configuration. To do that, let’s open the [properties/launchSettings.json](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Properties/launchSettings.json#L11) file and modify it accordingly:

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
Our server-side project will run on `localhost:5001` and the client side will run on `localhost:4200`, so in order to establish communication between those two, we need to enable CORS. Let’s open the [Startup.cs](https://github.com/IgniteUI/finjs-web-api/blob/master/WebAPI/Startup.cs#L31) class and modify it:

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

If you experience a specific problems with enabling Cross-origin resource sharing, check out the [official Microsoft topic](https://docs.microsoft.com/en-us/aspnet/core/signalr/security?view=aspnetcore-5.0#cross-origin-resource-sharing).

## Add SignalR Client Library

We are using Angular project in order to consume the SignalR service. 
Github repository with the app can be found [here](https://github.com/IgniteUI/igniteui-angular-samples/tree/master/projects/app-lob/src/app/grid-finjs-dock-manager).

First start by installing SignalR by executing:

```
npm install @microsoft/signalr
```

Keep in mind that we are going to send the HTTP request towards our server, so we need HttpClientModule as well.

Below you will find the [signal-r.service.ts](https://github.com/IgniteUI/igniteui-angular-samples/blob/master/projects/app-lob/src/app/services/signal-r.service.ts#L10) file that handles the hub connection builder.

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

    // TODO Comment
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

    // TODO Comment
    public broadcastParams = (frequency, volume, live, updateAll = true) => {
        this.hubConnection.invoke('updateparameters', frequency, volume, live, updateAll)
            .then(() => console.log('requestLiveData', volume))
            .catch(err => {
                console.error(err);
            });
    }
    
    // TODO Comment
    private registerSignalEvents() {
        this.hubConnection.onclose(() => {
            this.hasRemoteConnection = false;
        });
        this.hubConnection.on('transferdata', (data) => {
            this.data.next(data);
        })
    }
    ...
```

In your app.component add use the newly created `startConnection` method

```ts
constructor(public dataService: SignalRService) {}
public ngOnInit() {
    this.dataService.startConnection(this.frequency, this.dataVolume, true, false);
}
...
```

## Topic Takeaway

With ASP.NET Core SignalR, streaming the data from the server to client overcomes the problem of easily transferring data content.

I’d recommend going for streaming content when you think your data is large or if you want some user experience without blocking the client by showing endless spinners.