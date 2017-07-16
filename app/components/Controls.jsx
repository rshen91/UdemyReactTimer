var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render: function () {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary">Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className="button prima ry">Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="btton alert hollow">Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
