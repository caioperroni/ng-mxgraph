declare class mxResources {
    static add(basename, lan, callback);
    static extension: string;
    static get(key, params, defaultValue);
    static getDefaultBundle(basename, lan);
    static getSpecialBundle(basename, lan);
    static isLanguageSupported(lan);
    static loadDefaultBundle: boolean;
    static loadResources(callback);
    static loadSpecialBundle: boolean;
    static parse(text);
    static replacePlaceholders(value, params);
    static resources: any;
    static resourcesEncoded: boolean;
}