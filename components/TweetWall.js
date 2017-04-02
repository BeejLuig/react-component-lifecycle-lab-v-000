const React = require('react');
const Tweet = require('./Tweet');

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    });
  }
  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps) {
    return nextProps.newTweets.length > 0;
  }
  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps) {
    let tweets = nextProps.newTweets.concat(this.state.tweets);
    this.setState({
      tweets: tweets
    });
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => {
      return <Tweet text={tweet.text} key={index} />
    });
    return (
      <div>{tweets}</div>
    );
  }
}

module.exports = TweetWall;
