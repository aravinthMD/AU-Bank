export interface validateObj {

    validateFlag : boolean;
    errorMsg ?: any;
    errorString ?: string

}


export interface uploadType {

    uploadFlag : boolean;
    errorMsg  ? : string;
    documentUploadId ? : string;
    type ? : string

}

export interface reportType  { 
    lastMonToTill : string;
    monthToTill : string;
    todaysCount  :string;
    totalCount : string;
    yesterdayCount : string
}