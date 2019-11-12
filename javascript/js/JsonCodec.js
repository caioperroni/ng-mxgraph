/******************************************************************
Core
******************************************************************/

class JsonCodec extends mxObjectCodec {
    constructor() {
        super((value) => { });
    }
    encode(value) {
        const xmlDoc = mxUtils.createXmlDocument();
        const newObject = xmlDoc.createElement("Object");
        for (let prop in value) {
            newObject.setAttribute(prop, value[prop]);
        }
        return newObject;
    }
    decode(model) {
        return Object.keys(model.cells).map(
            (iCell) => {
                const currentCell = model.getCell(iCell);
                return (currentCell.value !== undefined) ? currentCell : null;
            }
        ).filter((item) => (item !== null));
    }
    getJsonModel(model) {
        const jsonModel = this.decode(model);
        return {
            "graph": jsonModel
        }
    }
}