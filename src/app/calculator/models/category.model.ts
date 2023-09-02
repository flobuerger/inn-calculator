export interface Category {
    id: number;
    name: string;
    displayName: string;
    createdOn: Date;
    modifiedOn: Date;
    productAreaIds: number[];
    icon: string;
}
