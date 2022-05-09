export class DesignNode {
  constructor(
    public id: string,
    public name: string,
    public type: string,
    public children: DesignNode[] = [],

    public absoluteRenderBounds: any,
    public blendMode: any,
    public characters: any,
    public fills: any,

    public fontName: any,
    public fontSize: any,
    public letterSpacing: any,
    public lineHeight: any,

    public opacity: any,
    public paddingLeft: any,
    public paddingRight: any,
    public paddingTop: any,
    public paddingBottom: any,
    public rotation: any,

    public strokeAlign: any,
    public strokeCap: any,
    public strokeGeometry: any,
    public strokeJoin: any,
    public strokeMiterLimit: any,
    public strokeStyleId: any,
    public strokeWeight: any,
    public strokes: any,

    public textAlignHorizontal: any,
    public textAlignVertical: any,
    public textAutoResize: any,
    public textCase: any,
    public textDecoration: any
  ) {}
}
