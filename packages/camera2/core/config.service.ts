export type VideoResolutions = '1080p' | '720p';

export interface Camera2Config {
  folderName?: string;
  /**
   * @default 30
   */
  frameRate?: number;
  /**
   * @default 1080p
   */
  resolution?: VideoResolutions;
}

export class Camera2ConfigService {
  protected static INSTANCE: Camera2ConfigService;
  protected static DEFAULT_VALUES: Partial<Camera2Config> = {
    folderName: 'camera2',
    frameRate: 30,
    resolution: '1080p',
  };

  protected constructor(private _config: Camera2Config) {}

  public static get instance() {
    return Camera2ConfigService.initWithConfig();
  }

  public get values() {
    return this._config;
  }

  public static initWithConfig(config: Camera2Config = {}): Camera2ConfigService {
    if (!Camera2ConfigService.INSTANCE) {
      const camera2Config = { ...Camera2ConfigService.DEFAULT_VALUES, ...config };
      Camera2ConfigService.INSTANCE = new Camera2ConfigService(camera2Config);
      console.log('>>> Camera2Config: ', camera2Config);
    }

    return Camera2ConfigService.INSTANCE;
  }

  public get folderName() {
    // TODO: Consider this method so we can have the same implementation for android and iOS
    // return path.join(knownFolders.temp().path, this._config.folderName);
    return this._config.folderName;
  }
}
