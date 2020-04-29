import React, { Component } from 'react'
import store from '../../redux/store'
export default class Count extends Component {
	//加
	increment = ()=>{
		const {value} = this.refs.user_selected
		store.dispatch({type:'increment',data:value*1})
	}
	//减
	decrement = ()=>{
		const {value} = this.refs.user_selected
		store.dispatch({type:'decrement',data:value*1})
	}
	//当前的和是奇数再加
	incrementIfOdd = ()=>{
		const {value} = this.refs.user_selected
		let count = store.getState()
		if(count%2 === 1){
			store.dispatch({type:'increment',data:value*1})
		}
	}
	//等500毫秒再加
	incrementAsync = ()=>{
		const {value} = this.refs.user_selected
		setTimeout(()=>{
			store.dispatch({type:'increment',data:value*1})
		},500)
	}
	render() {
		return (
			<div>
				<h1>当前求和为：{store.getState()}</h1>
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
