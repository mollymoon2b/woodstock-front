import React from 'react';
import { addPhoto } from "./../actions.js";
import { connect } from "react-redux";

class UploadPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: 'https://cdn.deguisetoi.fr/images/rep_art/gra/174/5/174565/perruque-blonde-hippie-homme_1.jpg'
    };
  }

  handleUploadImage = (e) => {
    e.preventDefault();
    const data = new FormData();
    const name = this.uploadInput.files[0].name.split('.', 1);

    data.append('file', this.uploadInput.files[0]);
    data.append('filename', `${name}${this.uploadInput.files[0].lastModified}`);

    // fetch('https://powerful-tundra-37364.herokuapp.com/upload', {
    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
        if (response.status === 200) {
            console.log('coucou');
        }
        response.json().then((body) => {
            // this.setState({ imageURL: `https://powerful-tundra-37364.herokuapp.com/mano-photos/${body.file}` });
            this.setState({ imageURL: `https://powerful-tundra-37364.herokuapp.com/mano-photos/${body.file}` });
        });
    });
  };

  render() {
    return (
        <div>
            <h1>File Upload</h1>
            <form onSubmit={this.handleUploadImage}>
                <div>
                    <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
                </div>
                <div>
                    <button>Upload</button>
                </div>
            </form>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        imageURL: state.imageURL
    };
};

const mapDispatchToProps = {
    addPhoto
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhoto);
