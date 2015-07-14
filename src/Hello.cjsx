React = require('react')

Hello = React.createClass(
  render: ->
    <div>Hello</div>
)

React.renderComponent(<Hello />, document.getElementById('component'))
