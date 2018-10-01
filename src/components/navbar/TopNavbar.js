import React, { Component } from 'react';
import { Segment, Menu, Button, Grid, Container, Modal, Header, Icon } from 'semantic-ui-react';
import './TopNavbar.css';
import SignUpModal from './LoginModal';
import LoginModal from './SignUpModal';
export default class TopNavbar extends Component {
	state = { activeItem: 'home' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		return (
			<div className="TopNavbar">
				<Grid>
					<Grid.Row>
						<Grid.Column>
							<Menu fixed="top" size="small" className="navbar">
								<Menu.Item header className="navbar-header">
									{' '}
									E - Diary
								</Menu.Item>
								<Menu.Menu position="right">
									<Menu.Item>
										<SignUpModal />
										<LoginModal />
									</Menu.Item>
								</Menu.Menu>
							</Menu>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}
