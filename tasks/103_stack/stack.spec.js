import { Stack } from './stack';

describe('Stack class', () => {
    let stack;

    const firstNodeValue = 5;
    const secondNodeValue = 6;
    const thirdNodeValue = 7;

    beforeEach(() => {
        stack = new Stack();
    });

    describe('push method', () => {
        test('Should add nodes to empty stack', () => {
            stack.push(firstNodeValue);
            expect(stack.last.value).toBe(firstNodeValue);
        });

        test('Should set correct prev link', () => {
              stack.push(firstNodeValue);
              stack.push(secondNodeValue);

            expect(stack.last.prev.value).toBe(firstNodeValue);
        });
    });

    describe('size prop', () => {
        test('Should return 0 for empty stack', () => {
            expect(stack.size).toBe(0);
        });

        test('Should return nodes amount for not empty stack', () => {
            stack.push(firstNodeValue);
            stack.push(secondNodeValue);
            stack.push(thirdNodeValue);

            expect(stack.size).toBe(3);
        })
    });

    describe('pop method', () => {
        test('Should do nothing for empty list', () => {
            const lastSnapshotBeforePop = JSON.stringify(stack.last);
            stack.pop();
            const lastSnapshotAfterPop = JSON.stringify(stack.last);

            expect(lastSnapshotBeforePop).toBe(lastSnapshotAfterPop);
        });

        test('Should return last pushed value for non empty stack', () => {
            stack.push(firstNodeValue);
            stack.push(secondNodeValue);
            stack.push(thirdNodeValue);

            const resultOfPop = stack.pop();

            expect(resultOfPop).toBe(thirdNodeValue);
        });

        test('Should remove last value', () => {
            stack.push(firstNodeValue);
            stack.push(secondNodeValue);

            stack.pop();

            expect(stack.last.value).toBe(firstNodeValue);
        });
    });
});
