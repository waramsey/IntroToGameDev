export default class NameableParent {
    children = [];
    name = "";
    constructor(name) {
        this.name = name;
    }

    findByName(name) {
        if(this.name == name)
            return this;
        for(let child of this.children) {
            let result = child.findByName(name);
            if(result != null) return result;
        }
        //We didn't find anything
        return null;
    }
}