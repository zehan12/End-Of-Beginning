type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    var num = init;
    return {
        increment:() => {
            num++;
            return num;
        },
        decrement:()=>{
            num--;
            return num;
        },
        reset:()=>{
            num = init;
            return num;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */