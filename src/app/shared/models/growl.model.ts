export interface GrowlData {
    type: GrowlType;
    message: string;
}

export enum GrowlType {
    SUCCESS = "SUCCESS",
    DANGER = "DANGER"
}