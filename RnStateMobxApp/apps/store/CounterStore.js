/* eslint-disable prettier/prettier */
import {observable} from 'mobx';

class CounterStore {
    @observable counter = [{counterNum: 0}];

    //카운터 추가 버튼
    handleAddCounter = () => {
        this.counter.push({counterNum: 0});
        console.log(this.counter.length);
    };

    //카운터 삭제 버튼
    handleRemoveCounter = () => {
        this.counter.pop();
        console.log(this.counter.length);
    };

    // + 버튼 index 값을 받아 실행
    handleIncrement = (index) => {

    };

    // - 버튼
    handleDecrement = (index) => {

    };
}

// decorate(CounterStore, {
//     counter: observable,
//     handleAddCounter: action,
//     handleRemoveCounter: action,
// });

//인스턴스화
export default new CounterStore();
