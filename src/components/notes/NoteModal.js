import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Header, Button, Icon, TextArea, Form, Label } from 'semantic-ui-react';

export default class NoteModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: this.props.content,
			oldContent: this.props.content,
			title: this.props.title,
			EditNoteModalOpen: false,
			editMode: false
		};
		this.saveEditedContent = this.saveEditedContent.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.startEditing = this.startEditing.bind(this);
		this.cancelEditing = this.cancelEditing.bind(this);
	}

	cancelEditing() {
		this.setState({ content: this.state.oldContent, editMode: false });
	}

	handleChange(event) {
		this.setState({ content: event.target.value });
	}

	cutNote(note) {
		if (note.length > 500) {
			return `${note.substring(0, 500)}...`;
		}
		return note;
	}

	startEditing() {
		this.setState({ oldContent: this.state.content, editMode: true });
	}

	saveEditedContent() {
		this.setState({ editMode: false });
	}

	render() {
		return (
			<div>
				{' '}
				{this.cutNote(this.state.content)}
				<Modal
					closeIcon
					dimmer="blurring"
					trigger={
						<Label as="a" color="teal" attached="bottom right">
							<Icon name="edit" />
						</Label>
					}
					basic
					size="small"
				>
					<Header content={this.state.title} />
					{this.state.editMode ? (
						<Modal.Content>
							<Form>
								<TextArea onChange={this.handleChange} autoHeight value={this.state.content} />
							</Form>
						</Modal.Content>
					) : (
						<Modal.Content>{this.state.content}</Modal.Content>
					)}
					{this.state.editMode ? (
						<Modal.Actions>
							{this.state.content ? (
								<Button color="blue" onClick={this.saveEditedContent}>
									Save editing
								</Button>
							) : (
								<Button disabled color="blue" onClick={this.saveEditedContent}>
									Save editing
								</Button>
							)}

							<Button color="red" onClick={this.cancelEditing}>
								Cancel editing
							</Button>
						</Modal.Actions>
					) : (
						<Modal.Actions>
							<Button color="green" onClick={this.startEditing}>
								Edit
							</Button>
						</Modal.Actions>
					)}
				</Modal>
			</div>
		);
	}
}
