export class FigmaFrame {
  constructor(
    public id: string,
    public fileId: string,
    public projectId: string
  ) {}

  static fromJson(json: any): FigmaFrame {
    return new FigmaFrame(json.id, json.fileId, json.projectId);
  }

  asJson(): any {
    const dict = {
      id: this.id,
      fileId: this.fileId,
      projectId: this.projectId,
    };
    return JSON.parse(JSON.stringify(dict));
  }
}

export class FigmaImportPreferences {
  constructor(
    public projectId: string,
    public orgId: string,
    public framesToImport: {
      [frameId: string]: FigmaFrame;
    }
  ) {}

  static fromJson(json: any): FigmaImportPreferences {
    const framesToImport: { [frameId: string]: FigmaFrame } = {};
    Object.keys(json.framesToImport).forEach((key) => {
      framesToImport[key] = FigmaFrame.fromJson(json.framesToImport[key]);
    });

    return new FigmaImportPreferences(
      json.projectId,
      json.orgId,
      framesToImport
    );
  }

  asJson(): any {
    const framesToImport: { [frameId: string]: any } = {};
    Object.keys(this.framesToImport).forEach((key) => {
      framesToImport[key] = this.framesToImport[key].asJson();
    });

    const dict = {
      projectId: this.projectId,
      orgId: this.orgId,
      framesToImport,
    };
    return JSON.parse(JSON.stringify(dict));
  }
}
