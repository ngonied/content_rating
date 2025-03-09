
import React, { Component } from 'react';
import './ContentRating.css';
import myImage from './IMG_0743.jpg'

export class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0, 
      dislikes: 0,
      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1
        }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1
        }));
      }
    };
    
  }
  render() {
    return (
     <>
     <div className='content-rating'>
      <h1 style={{
            color: '#B0E0E6', 
            fontSize: '1.8em',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '500'
      }}>
          Tatenda
      </h1>
        <div className='image-div'>
          <img 
            src={myImage}
            alt="Random couple walking in Wynberg"
            style={{
              height: '100%',
              width: '50%',
              borderRadius: '10px',
              objectFit: 'cover'
            }}
            />
        </div>
        <div className='rating-buttons'>
            <button className="like-button" onClick={this.state.handleLike}>
                Like ({this.state.likes})
              </button>
              <button className="dislike-button" onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
              </button>
        </div>
        
     </div>
     </>
    );
  }
}

export default ContentRating;
