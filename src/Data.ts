export class FigmaFrame {
  constructor(
    public id: string,
    public idInFile: string,
    public fileId: string,
    public projectId: string
  ) {}

  static fromJson(json: any): FigmaFrame {
    return new FigmaFrame(json.id, json.idInFile, json.fileId, json.projectId);
  }

  asJson(): any {
    const dict = {
      id: this.id,
      idInFile: this.idInFile,
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

export class Point {
  constructor(public x: number, public y: number) {}

  translated(dx: number, dy: number) {
    return new Point(this.x + dx, this.y + dy);
  }

  scaled(s: number) {
    return new Point(this.x * s, this.y * s);
  }

  static zero = new Point(0, 0);
}

export class Rect {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {}

  get bottomY() {
    return this.y + this.height;
  }

  get rightX() {
    return this.x + this.width;
  }

  static zero = new Rect(0, 0, 0, 0);

  static fromDOMRect(rect: DOMRect) {
    return new Rect(rect.x, rect.y, rect.width, rect.height);
  }

  copy() {
    return new Rect(this.x, this.y, this.width, this.height);
  }

  translated(dx: number, dy: number) {
    return new Rect(this.x + dx, this.y + dy, this.width, this.height);
  }

  scaled(s: number) {
    return new Rect(this.x * s, this.y * s, this.width * s, this.height * s);
  }

  expandVertically(dy: number) {
    return new Rect(this.x, this.y - dy / 2, this.width, this.height + dy);
  }

  isPointInside(point: Point) {
    const inHorizontal = this.x <= point.x && point.x <= this.x + this.width;
    const inVertical = this.y <= point.y && point.y <= this.y + this.height;
    return inHorizontal && inVertical;
  }

  contains(other: Rect) {
    return (
      this.x <= other.x &&
      this.y <= other.y &&
      this.rightX >= other.rightX &&
      this.bottomY >= other.bottomY
    );
  }

  clipTo(other: Rect) {
    const x = Math.max(this.x, other.x);
    const y = Math.max(this.y, other.y);
    const rightX = Math.min(this.rightX, other.rightX);
    const bottomY = Math.min(this.bottomY, other.bottomY);
    return new Rect(x, y, rightX - x, bottomY - y);
  }

  overlaps(other: Rect) {
    const clipRect = this.clipTo(other);
    return clipRect.width > 0 && clipRect.height > 0;
  }

  overlapsX(other: Rect) {
    const clipRect = this.clipTo(other);
    return clipRect.width > 0 && clipRect.height > 0;
  }

  merge(other: Rect) {
    const x = Math.min(this.x, other.x);
    const y = Math.min(this.y, other.y);
    const width = Math.max(this.rightX, other.rightX) - x;
    const height = Math.max(this.bottomY, other.bottomY) - y;
    return new Rect(x, y, width, height);
  }

  static mergeAll(others: Rect[]) {
    if (others.length === 0) {
      return Rect.zero;
    }
    let merged = others[0];
    others.forEach((other) => {
      merged = merged.merge(other);
    });
    return merged;
  }
}

export class DesignNode {
  constructor(
    public id: string,
    public name: string,
    public type: string,
    public rect: Rect,
    public children: DesignNode[] = [],
    public style: any = {},
    public fills: {
      blendMode: string;
      type: string;
      color: { r: number; g: number; b: number; a: number };
      gradientHandlePositions: {
        x: number;
        y: number;
      }[];
      gradientStops: {
        position: number;
        color: { r: number; g: number; b: number; a: number };
      }[];
    }[] = [],
    public layout: "horizontal" | "vertical" | "none" = "none",
    public verticalAlign: "top" | "center" | "bottom" = "top",
    public horizontalAlign:
      | "left"
      | "center"
      | "space-between"
      | "right" = "left",
    public backgroundNodes: DesignNode[] = []
  ) {}

  isGroup() {
    return ["GROUP", "FRAME"].includes(this.type);
  }
}
