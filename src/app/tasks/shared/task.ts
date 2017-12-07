export class Task {
    name: string;
    title: string;
    description: string;
    createTime: string;
    updateTime: string;
    constructor(name: string,
        title: string,
        description: string,
        createTime: string,
        updateTime: string) {
        this.name = name;
        this.title = title;
        this.description = description;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }
}
