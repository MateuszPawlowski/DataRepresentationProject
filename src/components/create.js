import React from 'react';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Title: '', Year: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this);
    this.handleMovieYearChange = this.handleMovieYearChange.bind(this);
    this.handleMoviePosterChange = this.handleMoviePosterChange.bind(this);


  }

  handleMovieTitleChange(e) {
    this.setState({ Title: e.target.value });
  }

  handleMovieYearChange(e) {
    this.setState({ Year: e.target.value });
  }

  handleMoviePosterChange(e) {
    this.setState({ Poster: e.target.value });
  }

  handleSubmit(e) {
    alert(this.state.Title + "  " + this.state.Year + "  " + this.state.Poster);
    e.preventDefault();
    this.setState({
      Title: '',
      Year: '',
      Poster: ''
    });
  }

  render() {
    return (
      <div>
        <h3>Create Component</h3>

        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Movie Title</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Title}
              onChange={this.handleMovieTitleChange}
            ></input>
          </div>
          <div>
            <input
              type="Submit"
              value="Add Movie">
            </input>
          </div>
        </form>

        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Movie Year</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Year}
              onChange={this.handleMovieYearChange}
            ></input>
          </div>
          <div>
            <input
              type="Submit"
              value="Add Year">
            </input>
          </div>
        </form>

        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Movie Year</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Poster}
              onChange={this.handleMoviePosterChange}
            ></input>
          </div>
          <div>
            <input
              type="Submit"
              value="Add Poster">
            </input>
          </div>
        </form>
      </div>
    );
  }
}

export default Create;
