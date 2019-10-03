export class Data{
    status:boolean;
    data:statistics[];
}
export class statistics {
    State: string;
    SurveyorName: string;
    NoOfInt: string;
    SampleReceived: string;
    CancelledEntries: string;
    Approved: string;
    DisApproved: string;
}
export class Job{
    name:string;
    position:string;
    salary:number;
}