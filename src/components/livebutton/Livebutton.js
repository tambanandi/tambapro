import React, {Component } from 'react';
import styles from './styles.modules.css'

class Livebutton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        isLoading: true,
        error: null
      };
    }
  
    componentDidMount() {
      fetch('https://l7ntqg6gfj.execute-api.eu-north-1.amazonaws.com/prod/get?twitchname=tambapro',{
        method:"GET",
        mode:"cors"
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to fetch data');
          }
        })
        .then(data => {
          this.setState({ data, isLoading: false });
        })
        .catch(error => {
          this.setState({ error, isLoading: false });
        });
    }
  
    render() {
      const { data, isLoading, error } = this.state;
  
      if (isLoading) {
        return <div>Loading...</div>;
      }
  
      if (error) {
        return <div>Error: {error.message}</div>;
      }
      let isLive = data.body.includes("Channel is live");
      if (isLive) {
        return <a href="https://www.twitch.tv/tambapro"><img className="logo" src="livetwitchicon.png" style={styles.logo} alt="live_twitch_logo"></img></a>;
      }
      else{
        return <a href="https://www.twitch.tv/tambapro"><img className="logo" src="offlinetwitchlogo.png" style={styles.logo} alt="live_twitch_logo"></img></a>;
      }
    }
  }

export default Livebutton;