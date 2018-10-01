import React, { Component } from 'react';
import {
	Grid,
	Segment,
	Icon,
	Form,
	Input,
	Message,
	TextArea,
	Container,
	Label,
	Header,
	Modal,
	Button
} from 'semantic-ui-react';
import './notes.css';
import Timestamp from 'react-timestamp';
import NoteModal from './NoteModal';
import axios from 'axios';
import example_notes from '../../examples';
export default class Notes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			content: '',
			title: '',
			AddNoteModalOpen: false,
			noTitleError: true,
			noContentError: true
		};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleContentChange = this.handleContentChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.removeNote = this.removeNote.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
	}

	componentWillMount() {
		// axios.get('/api/defaultNotes')
		// .then( response => {
		//   console.log(response.data);
		//    this.setState({notes: response.data})
		// })
		// .catch( function (error) {
		//     console.log(error);
		// });
		this.setState({ notes: example_notes });
	}

	handleSubmit() {
		if (!this.state.noContentError && !this.state.noTitleError) {
			const newNote = {
				id: 1,
				title: this.state.title,
				content: this.state.content,
				date: this.getTime()
			};
			this.setState({ notes: [ newNote ].concat(this.state.notes), AddNoteModalOpen: false });
		}
	}

	handleOpenModal() {
		this.setState({ AddNoteModalOpen: true });
	}

	handleTitleChange(event) {
		this.setState({ title: event.target.value });
		if (event.target.value == '') {
			this.setState({ noTitleError: true });
		} else {
			this.setState({ noTitleError: false });
		}
	}

	getTime() {
		const dateTime = Date.now();
		const timestamp = Math.floor(dateTime / 1000);
		return timestamp;
	}

	handleContentChange(event) {
		this.setState({ content: event.target.value });
		if (event.target.value == '') {
			this.setState({ noContentError: true });
		} else {
			this.setState({ noContentError: false });
		}
	}

	removeNote(e) {
		const array = this.state.notes;

		const index = array.indexOf(e);

		console.log(index);
		array.splice(index, 1);
		this.setState({ notes: array });
	}

	render() {
		return (
			<div className="Notes">
				<Container>
					<Grid>
						{this.state.notes.map((note) => (
							<Grid.Column stretched mobile={16} tablet={8} computer={4}>
								<Segment raised padded="very">
									<Header as="h1">
										<div className="note-title">{note.title}</div>
									</Header>

									<NoteModal content={note.content} title={note.title} />

									<Label tag color="teal" attached="top">
										{' '}
										<Timestamp time={note.date} autoUpdate={60} />
									</Label>

									<Label
										onClick={() => this.removeNote(note)}
										as="a"
										tag
										color="teal"
										attached="bottom left"
									>
										<Icon name="trash" />
									</Label>
								</Segment>
							</Grid.Column>
						))}
						<Grid.Column stretched mobile={16} tablet={8} computer={4}>
							<Grid.Row className="grid-row">
								<Segment raised padded="very">
									<Label as="a" tag color="teal" attached="top">
										New note
									</Label>
									<Modal
										dimmer="blurring"
										open={this.state.AddNoteModalOpen}
										centered
										trigger={
											<Button
												onClick={this.handleOpenModal}
												size="huge"
												color="teal"
												className="add-new-note-button"
												circular
											>
												+
												<br />
												<br />
												Add new note!
											</Button>
										}
									>
										<Header icon="sticky note" content="Add a note" />
										<Modal.Content>
											<Container text>
												<Form warning onSubmit={this.handleSubmit}>
													<Form.Field
														control={Input}
														value={this.state.title}
														onChange={this.handleTitleChange}
														label="Title"
														placeholder="Title"
													/>
													{this.state.noTitleError ? (
														<Message warning>
															<Message.Header />
															<p>Please write title of note.</p>
														</Message>
													) : (
														''
													)}
													<Form.Field
														control={TextArea}
														value={this.state.content}
														onChange={this.handleContentChange}
														label="Content"
														placeholder="Content"
													/>
													{this.state.noContentError ? (
														<Message warning>
															<Message.Header />
															<p>Please write content of note.</p>
														</Message>
													) : (
														''
													)}
													<Button color="teal" type="submit">
														Submit
													</Button>
													<Button
														floated="right"
														negative
														onClick={() => this.setState({ AddNoteModalOpen: false })}
													>
														Cancel
													</Button>
												</Form>
											</Container>
										</Modal.Content>
									</Modal>
								</Segment>
							</Grid.Row>
						</Grid.Column>
					</Grid>
				</Container>
			</div>
		);
	}
}
