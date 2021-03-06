// Global var
var React = require('react')
var div = React.DOM.div
var h1 = React.DOM.h1

//  Make our own component like div and h1
var MyTitle = React.createClass({
  render () {
    return (
            div(null, h1({style: {color: this.props.color}}, this.props.title
                )
            )
    )
  }
})

module.exports = MyTitle
