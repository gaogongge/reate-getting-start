## React是什么？
-   React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库.使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作“组件”
## 组件声明：
-   加载react  react-dom
-   class 继承方式；React.Component
-   render方法是负责渲染内容
-   render 是return内容要用（）包含；
-   js部分代码 用{}包含；
```javascript
    class square extends React.Component{
        render (
            <div>this is react Component</div>
        )
    }
```
## props传值
父组件通过props 传值给子组件；
-   在调用子组件的地方，用设置属性的方式，设置props的参数名，注意用{}  <sqaue value={10}/>;

## state 统一状态
-   在组件中可以使用state存储状态；
-   使用多遍的数据时，多使用state存储数据；
-   使用props从父组件传递数据给子组件，子组件把数据存放到state中； this.state={value:10};
-   展示的数据来源是state，不再直接使用props；  {this.state.value}
-   改变数据时，改修state，react会重新渲染页面，修改数据展示；  this.setState({value:20});

## 事件
-   在组件中的DOM元素中 直接用js事件属性的方式绑定事件 
    <div onclick={()=>{this.setState({value:20})}}></div>
    注意{}包含js事件函数


## JSX中的注释：
-   如果是在DOM之外，用/*这种事DOM之外*/
-   如果是DOM之内, 用{/**/}
```
ReactDOM.render(
    /*这是正确的注释*/
    <div>
    /*这是错误的注释*/
    {/*这是正确的注释*/}
        <p>1+1={1+1}    {/*这是正确的注释*/}   </p>
        <p>     {/*1-1={1-1}*/}    </p>
        <p>2*2={2*2}</p>
        <p>4+2={4+2}</p>
        <p>5%3={5%3}</p>
    </div>,
    document.getElementById('demo')
);
```