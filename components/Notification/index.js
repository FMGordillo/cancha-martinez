export default class Notification extends Component {
	render() {
		const { children, isActive }
		return (
			<div class="notification is-danger">
				<button class="delete" />
				{children}
			</div>
		);
	}
}
