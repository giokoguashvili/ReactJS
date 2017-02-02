import React, { Component } from 'react'
import axios from 'axios'
import classnames from 'classnames'

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: {},
            isLoading: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ errors: {}, isLoading: true });
        this.props
            .userSignupRequest(this.state)
            .then(
                () => { },
                (err) => this.setState({ errors: err.response.data, isLoading: false })
            );

    }

    render() {
        const { errors } = this.state;
        return (
            <form action="" onSubmit={this.onSubmit}>
                <h1>
                    Join our comunity!
                </h1>
                <div className={classnames("form-group", { 'has-error': errors.username })}>
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
                    {errors.username && <span className="help-block">{errors.username}</span>}
                </div>
                <div className={classnames("form-group", { 'has-error': errors.email })}>
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
                        {errors.email && <span className="help-block">{errors.email}</span>}
                </div>
                <div className={classnames("form-group", { 'has-error': errors.password })}>
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
                        {errors.password && <span className="help-block">{errors.password}</span>}
                </div>
                <div className={classnames("form-group", { 'has-error': errors.passwordConfirmation })}>
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
                        {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
                </div>
                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        )
    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm