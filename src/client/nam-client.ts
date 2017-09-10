import * as sbase from '@nodeswork/sbase';

@sbase.socket.socketRpcClient({
  eventNamePrefix: nam.socketRpcEventNamePrefix,
})
export class NAMSocketRpcClient extends sbase.socket.SocketRpcClient
implements nam.INAM {

  @sbase.socket.remote()
  async install(options: nam.AppletImage): Promise<void> {}

  @sbase.socket.remote()
  async images(): Promise<nam.AppletImage[]> { return null; }

  @sbase.socket.remote()
  async run(options: nam.AppletImage): Promise<void> {}

  @sbase.socket.remote()
  async ps(): Promise<nam.AppletStatus[]> { return null; }

  @sbase.socket.remote()
  async request<T>(options: nam.RequestOptions):
    Promise<nam.RequestResponse | T> { return null; }
}