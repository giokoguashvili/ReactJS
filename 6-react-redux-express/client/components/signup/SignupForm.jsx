import React, { Component } from 'react'

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form action="" onSubmit={this.onSubmit}>
                <h1>
                    Join our comunity!
                </h1>
                <div className="form-group">
                    <label htmlFor="" className="control-label">
                        Username
                    </label>
                    <input
                        value={this.state.username}
                        className="form-control"
                        type="text"
                        name="username"
                        onChange={this.onChange}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="control-label">
                        Email
                    </label>
                    <input
                        value={this.state.email}
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={this.onChange}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="control-label">
                        Password
                    </label>
                    <input
                        value={this.state.password}
                        className="form-control"
                        type="password"
                        name="password"
                        onChange={this.onChange}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="control-label">
                        Password Confirmation
                    </label>
                    <input
                        value={this.state.passwordConfirmation}
                        className="form-control"
                        type="password"
                        name="passwordConfirmation"
                        onChange={this.onChange}
                        />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        )
    }
}

export default SignupForm