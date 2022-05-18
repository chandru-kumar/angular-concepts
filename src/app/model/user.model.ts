export class User {
    //ng generate class recipes/meal --type=model
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name
    }

}
