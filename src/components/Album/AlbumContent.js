import React,{Component, memo}  from 'react';
import ClampLines from 'react-clamp-lines';
import Like from '../../containers/Like/Like';

class AlbumContent extends Component {
  constructor() {
    super();
    this.state = {hovered: false};
  }
  render(){
    return (
        <div className='music-content'>
          <div className="content-box">
                 <a onClick={() => this.props.toggle(this.props.actor.id.attributes['im:id'])}>
                    <img className="loading-img"
                        src={this.props.actor['im:image'][2].label}
                        height={this.props.actor['im:image'][2].attributes.height}
                        onLoad={(e)=>{e.target.className = '';}}
                        onMouseEnter={() => this.setState({hovered: true})}
                        onMouseLeave={() => this.setState({hovered: false})}
                        style={{transform: `${this.state.hovered ? 'scale(1.05,1.05)' : 'scale(1,1)'}`}}
                    />
                 </a>

                    <a className="ab-title" href={this.props.actor.id.label}>
                    <ClampLines  buttons={false}
                    text={this.props.actor['im:name'].label}
                    lines={1}
                    />
                    </a>

                    <a className="ab-author"
                      href={( 'attributes' in this.props.actor['im:artist'] )? this.props.actor['im:artist'].attributes.href : 'http://itunes.apple.com/' }>
                    <ClampLines buttons={false}
                    text={this.props.actor['im:artist'].label}
                    lines={1}
                    />
                    </a>
                    <Like />


             </div>
           </div>  
      )
  }
};

export default memo(AlbumContent);
