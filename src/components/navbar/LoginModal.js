import React, { Component } from 'react';
import { Form, Input, Message, TextArea, Button, Modal, Header, Icon } from 'semantic-ui-react';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};

		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
	}

	handleSubmit() {
		// sending user info to backend
	}

	handleOpenModal() {
		this.setState({ modalOpen: true });
	}

	handleUsernameChange(event) {
		this.setState({ username: event.target.value });
		if (event.target.value == '') {
			this.setState({ noUsernameError: true });
		} else {
			this.setState({ noUsernameError: false });
		}
	}

	handlePasswordChange(event) {
		this.setState({ password: event.target.value });
		if (event.target.value == '') {
			this.setState({ noPasswordError: true });
		} else {
			this.setState({ noPasswordError: false });
		}
	}

	render() {
		return (
			<div>
				<Modal dimmer="blurring" trigger={<Button>Log in</Button>} closeIcon>
					<Header icon="user" content="Log in" />
					<Modal.Content>
						<Form warning onSubmit={this.handleSubmit}>
							<Form.Field
								control={Input}
								value={this.state.username}
								onChange={this.handleUsernameChange}
								label="Username"
								placeholder="username..."
							/>
							{this.state.noUsernameError ? (
								<Message warning>
									<Message.Header />
									<p>Please enter username.</p>
								</Message>
							) : (
								''
							)}
							<Form.Field
								type="password"
								control={Input}
								value={this.state.password}
								onChange={this.handlePasswordChange}
								label="Password"
								placeholder="password..."
							/>
							{this.state.repeated ? (
								<Message warning>
									<Message.Header />
									<p>Please enter password.</p>
								</Message>
							) : (
								''
							)}
						</Form>
					</Modal.Content>
					<Modal.Actions>
						<Button color="green">Log in</Button>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}
