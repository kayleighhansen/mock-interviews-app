export class Question {

    public id : string;
    public question : string;
    public answer : string;
    public topic : string;
    public difficulty : string;
    public skill : string;
    public concept : string;

    constructor(id: string,
                question : string,
                answer : string,
                topic : string,
                difficulty : string,
                skill : string,
                concept : string,
                ){

        this.id = id;
        this.question = question;
        this.answer = answer;
        this.topic = topic;
        this.difficulty = difficulty;
        this.skill = skill;
        this.concept = concept;
    }
}