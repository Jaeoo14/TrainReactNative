/* eslint-disable prettier/prettier */
const initialState = {
    counter: [
        {
            counterNum: 0,
        },
    ],
};

const counter = (state = initialState, action) => {
    const {counter} = state;

    switch (action.type) {//순수함수, 실제 로직 처리
        case 'INCREMENT':
            return ({
                counter: [
                    ...counter.slice(0, action.index),
                    {
                        counterNum: counter[action.index].counterNum + 1,
                    },
                    ...counter.slice(action.index + 1, counter.length),
                ],
            }); // 실제 순수함수 로직을 넣음 / // 카운터 -
        case 'DECREMENT':
            return ({
                counter: [
                    ...counter.slice(0, action.index),
                    {
                        counterNum: counter[action.index].counterNum - 1,
                    },
                    ...counter.slice(action.index + 1, counter.length),
                ],
            }); // 카운터 -
        case 'ADD':
            return ({
                counter: [
                    ...counter,
                    {
                        counterNum: 0,
                    },
                ],
            }); // 카운터 추가
        case 'REMOVE':
            return ({ // 앞에건 놔두고 제일 마지막거부터 -1씩함
                counter: counter.slice(0, counter.length - 1),
            }); // 카운터 삭제
        default:
            return state;
    }
};

export default counter;
