export class Interview {

    public id : string;
    public company : string;
    public job : string;
    public date : string;
    public status : string;
    public userId : string;
    public skills : string;
    public experience : string;
    public type : string;

    constructor(id: string,
                company : string,
                job : string,
                date : string,
                status : string,
                userId : string,
                skills : string,
                experience : string,
                type : string,
                ){

        this.id = id;
        this.company = company;
        this.job = job;
        this.date = date;
        this.status = status;
        this.userId = userId;
        this.skills = skills;
        this.experience = experience;
        this.type = type;

    }
}