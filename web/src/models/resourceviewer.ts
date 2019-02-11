import { Edge, ResourceViewerModel, ResourceViewerNode, TitleView, toTitle } from 'models'

export class JSONResourceViewer implements ResourceViewerModel {
  readonly edges: { [key: string]: Edge[] }
  readonly nodes: { [key: string]: ResourceViewerNode }
  readonly type = 'resourceViewer'
  readonly title: TitleView

  constructor(ct: ContentType) {
    if (ct.metadata.title) {
      this.title = toTitle(ct.metadata.title)
    }

    this.edges = ct.config.edges
    this.nodes = ct.config.nodes
  }
}