export class Todo {
    userId:number=0; 
    id:number=0;
    title:string="";
    completed:boolean=false;
    constructor (userId:number,id:number,title:string,completed:boolean){
        this.userId=userId;
        this.id=id;
        this.title=title;
        this.completed=completed
    }
}

