export interface DataResponse {
    status: number;
    message: string;
    data: Datapoints[] | null;
}

export interface Datapoints {
    id: number;
    EquipID: string;
    System: string;
    EquipType: string;
    PointName: string;
    PointType: string;
    Descriptor: string;

}
