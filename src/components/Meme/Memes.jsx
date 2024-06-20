import React from 'react'


class Memes extends React.Component {
    state = {
      topText : "",
      bottomText : "",
      allMemeImgs : [],
      randomImg : '',
    }

    componentDidMount () {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(content => 
            this.setState({
                allMemeImgs: content.data.memes
            })
        )
    };

    handleChange = event => {
        // Destructuring the event. target object
        const {name, value} = event.target;

        // Destructuring the event. target object
        this.setState({
            [name] : value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        const {allMemeImgs} = this.state;
        const random = allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)].url;
        this.setState({
            randomImg: random
        })
    };

    render () {
        return (
          <div>
            {/* // Controlled form */}
            <form className="meme-form" onSubmit={this.handleSubmit}>
              {/* // Input field to get First
                    text */}
              <div class="form__group">
                <input
                  type="text"
                  value={this.state.topText}
                  name="topText"
                  onChange={this.handleChange}
                  class="form__input"
                  id="name"
                  placeholder="Enter Top text for Memes Img"
                  required=""
                />
                <label for="name" class="form__label">
                  Enter Top text for Memes Image
                </label>
              </div>
              {/* // Input field to get Lsst
                    text */}
              <div class="form__group">
                <input
                  type="text"
                  value={this.state.bottomText}
                  name="bottomText"
                  onChange={this.handleChange}
                  class="form__input"
                  id="name"
                  placeholder="Enter bottom text for Memes Img"
                  required=""
                />
                <label for="name" class="form__label">
                  Enter Text
                </label>
              </div>
              {/* // Button to generate meme */}
              {/* <button>Generate</button> */}
              <button class="button-53" role="button">Generate</button>

              
            </form>
            <br />
            <div className="meme">
              {/* // Only show the below
                    elements when the image is
                    ready to be displayed */}
              {this.state.randomImg === "" ? (
                ""
              ) : (
                <img src={this.state.randomImg} alt="meme" />
              )}
              {this.state.randomImg === "" ? (
                ""
              ) : (
                <h2 className="top">{this.state.topText}</h2>
              )}
              {this.state.randomImg === "" ? (
                ""
              ) : (
                <h2 className="bottom">{this.state.bottomText}</h2>
              )}
            </div>
          </div>
        );
    }
}

export default Memes;