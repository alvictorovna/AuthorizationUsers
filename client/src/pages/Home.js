import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Home extends Component {

  render() {
    const loginRegLink = (
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">Это простой пример блока с компонентом в стиле jumbotron для привлечения дополнительного внимания к содержанию или информации.</p>
        <hr className="my-4"></hr>
        <p>Использются служебные классы для типографики и расстояния содержимого в контейнере большего размера.</p>
        <div className="btn-group">
          <Link to="/login" className="btn btn-primary btn-lg">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary btn-lg">
            Register
          </Link>
        </div>
      </div>
    )

    return (
      <div>
        {loginRegLink}
      </div>
    )
  }
}

export default withRouter(Home)