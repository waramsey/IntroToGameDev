import GameObject from "./GameObject";

class Room extends GameObject {
    paths;
    complete;

    constructor(paths = [true,true,true,true]) {
        this.paths = paths;
        this.complete = false;
        map = dunGen();
    }


}

export default Room;