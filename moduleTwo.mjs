import {sum as adada, mult} from "./moduleOne.mjs";


const res1 = adada(10,2);
console.log(res1);

const res32 =mult(10,2);
console.log(res32);


class Status {
    constructor(text) {
        this.text = text;
        this.online = false;
    }

    changeStatus() {
        this.online = true;
    }
}

const status = new Status('hi girls');



status.changeStatus()