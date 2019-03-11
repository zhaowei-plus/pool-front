import $ from 'jquery';
import { observable, action, computed, autorun, extendObservable } from 'mobx';

/**
 * 定义类作为数据存储
 * */
class Store {
  // 修饰变量 list 可观测，当 list 发生变化时，mobx 会自动追踪并作出响应
  @observable list = [];
  @observable length = 0;

  // 当@observable 修饰的是对象，则会递归遍历对象属性，都配置为可观测，当然可以使用 @observable.deep（默认）
  @observable user = {
    name: "张三",
  }
  /**
   (默认）对对象进行深拷贝
   @observable.deep  obj = {
    a: string,
  }

   只对对象进行浅拷贝
   @observable.shallow  obj = {
    a: string,
  }

   禁用对象的自动转化，只转化其引用
   @observable.ref  obj = {
    a: string,
  }
   * */

  /**
   * 计算属性值实际上是一类衍生值，是根据现有的状态或者其他的值计算而来，
   * 1、原则上在计算属性中尽可能地不对当前状态做任何修改
   * 2、对于任何可以通过现有状态数据得到的值都应该通过计算属性获取
   *
   * 注：当状态改变使得计算属性的值发生改变的时候，其也是可观察到的
   * */
  @computed get total() {
    return this.length;
  }

  set total(value) {
    this.length = value;
  }

  /**
   * action 作为 mobx 组织代码与数据流的可选方案，我们可以自己管理 mobx 可观测属性，但是mobx推荐我们使用action
   *
   * @action，其规定对于 store 对象中所有可观察状态属性的改变 都应该在 @action 中完成，
   * 它使代码可以组织的更好，并且对于数据改变的时机也更加清晰
   * */
  @action change() {
    this.list.push(this.list.length);
  }
}


$(() => {
  console.log('mobx')

  const myStore = new Store();

  // 可观测对象新添加的属性，需要使用 extendObservable 将其设置成可观测
  extendObservable(myStore.user, {
      desc: "这是新添加的字段"
  });

  setTimeout(() => {
    // 调用 action 改变可观测对象
    myStore.change()
  })

  /**
   * autorun 表示运行观察
   *
   * autorun 接受一个函数作为参数，在使用 autorun 的时候，该函数会被立即调用一次，之后当该函数中依赖的可观察状态属性（或者计算属性）发生变化的时候，
   * 该函数会被调用，
   *
   * 注意，该函数的调用取决的函数中使用了哪些可观察状态属性（或者计算属性）
   *
   * */
  autorun(() => {
    console.log(myStore.total)
    console.log(myStore.user.desc)
    console.log(myStore.list.toString())
  })

  myStore.list.push(1000)

});