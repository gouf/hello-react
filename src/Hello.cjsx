React = require('react')

Hello = React.createClass(
  render: ->
    <div>Hello</div>
)

React.render(<Hello />, document.getElementById('component'))
