import React, { Component } from 'react'
export default class Count extends Component {
	state = {
		count:0
	}
	//加
	increment = ()=>{
		const {value} = this.refs.user_selected//1.获取用户的输入
		let {count} = this.state//2.获取原来的和
		count += value*1//3.加
		this.setState({count})//4.更新状态
	}
	//减
	decrement = ()=>{
		const {value} = this.refs.user_selected
		let {count} = this.state
		count -= value*1
		this.setState({count})
	}
	//和是奇数再加
	incrementIfOdd = ()=>{
		const {value} = this.refs.user_selected
		let {count} = this.state
		if(count % 2 === 1){
			count += value*1
			this.setState({count})
		}
	}
	//等500毫秒再加
	incrementAsync = ()=>{
		const {value} = this.refs.user_selected
		let {count} = this.state
		count += value*1
		setTimeout(()=>{
			this.setState({count})
		},500)
	}
	render() {
		return (
			<div>
				<h1>当前求和为：{this.state.count}</h1>
				<select ref="user_selected">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
				<button onClick={this.incrementAsync}>increment async</button>
			</div>
		)
	}
}
