
const authorsList = [
    {
        _id: 1,
        name: 'Todd',
        count: 0
    },
    {
        _id: 3,
        name: 'Rob',
        count: 0
    },
    {
        _id: 3,
        name: 'Sevil',
        count: 0
    },
];

const shoutList = [
    "Hello friend.", "Awesome.", "Greate.", "check this out.", "it's fantastic.", "it's unbelievable.", "it passes." +
    " belief.",
    "best code in the world!", "you are a hacker!", "I am learning  reactJS!", "good job!", " oh...My GoD!"
];
let timerId;

 class touratte  {


   static shout(nameAuthor, shout) {
        const event = new CustomEvent('shout', {
            detail: {
                author: nameAuthor,
                shoutText: shout
            }
        });
        document.dispatchEvent(event);
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * ((max+1) - min)) + min;
    }

    static start () {
         timerId = setInterval( ()=>{ this.callShout()}, this.getRandomInt(1000, 5000))
    }
    static stop () {
       clearTimeout(timerId);
    }


    static callShout = () => {
        return this.shout(authorsList[this.getRandomInt(0, 2)], shoutList[this.getRandomInt(0, shoutList.length -1)]);
    }
}
    touratte.start();



