import { h, Component } from 'preact';
import style from './style';

export default class Profile extends Component {
	state = {
		time: Date.now(),
		count: 10
	};

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count + 1 });
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named {user}.</p>

				<div>Current time: {new Date(time).toLocaleString()}</div>

				<p>
					<button onClick={this.increment} style="color:red">Click Me</button>
					{' '}
					Clicked {count} times.
				</p>
				<p>
					<a href="https://github.com/giscafer/vdom-todo-demo" target="_blank" without rel="noopener noreferrer" >demo源码</a>
				</p>
				<p>
					<a href="https://slides.com/giscafer/deck/fullscreen" target="_blank" without rel="noopener noreferrer" >深入认识VDOM PPT</a>
				</p>
			</div>
		);
	}
}
