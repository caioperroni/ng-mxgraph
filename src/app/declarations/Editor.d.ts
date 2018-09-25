declare class Editor extends mxEventSource {
    appName: string;
    autosave: boolean;
    cancelFirst: boolean;
    chromeless: boolean;
    constructor(chromeless, themes, model, graph, editable);
    createGraph(themes, model);
    createUndoManager();
    destroy();
    editAsNew(xml, title);
    editBlankUrl: string;
    enabled: boolean;
    extendCanvas: boolean;
    filename:null;
    getEditBlankUrl(params);
    getGraphXml(ignoreSelection);
    init();
    initStencilRegistry();
    initialTopSpacing: number;
    isChromelessView();
    modified: boolean;
    originalNoForeignObject: boolean;
    readGraphState(node);
    resetGraph();
    setAutosave(value);
    setFilename(value);
    setGraphXml(node);
    setModified(value);
    transparentImage: string;
    updateGraphComponents();

    getGraph(): Graph;
}