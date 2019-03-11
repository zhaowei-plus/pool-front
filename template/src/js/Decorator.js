/**
 * Decorator（装饰器）是es7的一个提案，目前babel已经支持
 *
 *
 */

/**
 * @testDecorator是一个装饰器，修改了类 Home 的行为，为他加上了静态属性 isTestable
 *
 * 修饰器 是一个对类进行处理的函数，函数的第一个参数就是所要修饰的目标类
 *
 * 注：修饰器袖类的行为的改变，是在代码编译时发生的，而不是在运行时，这意味着修饰器能在编译阶段运行代码。
 *  修饰器本质上是在编译时执行的函数
 * */
@testDecorator
class Home {}

function testDecorator (target) {
  // target 指向 类Home
  target.isTestable = true; // 这里是 为 类添加静态属性
  target.prototype.isTestable = true; // 添加实例属性，即在类对象的属性
}
console.log(Home.isTestable)

/***************** 装饰器 **********************/
/**
 * 1、__proto__ 、constructor属性是对象独有的
 * 2、prototype属性是函数独有
 *
 * 由于 JS 函数也是一种对象，所以函数也会有 __proto__和constructor
 *
 * */
