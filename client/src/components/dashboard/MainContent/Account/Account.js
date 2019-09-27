import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshAccountData } from "../../../../actions/settingsActions";
import { withRouter } from "react-router-dom";
import "./Account.scss";

class Account extends Component {
  constructor() {
    super();
    this.state = {
      company_name: "",
      company_inn: "",
      name: "",
      pass: "",
      email: "",
      contact_person: "",
      company_phone: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      company_name: "",
      company_inn: "",
      name: "",
      pass: "",
      email: "",
      contact_person: "",
      company_phone: "",
      errors: {}
    };
    this.props.refreshAccountData(userData);
  };
  render() {
    return (
      <div className="main-content">
        <div className="main-content__account-wrapper">
          <h1>Учетная запись</h1>
          <div className="main-content__main-settings">
            <h3>Основные настройки</h3>
            <div className="main-content__main-settings-wrapper">
              <p>Информация о Вашем профиле</p>
              <form className="main-content__main-settings-form" onSubmit={this.onSubmit}>
                <label>
                  <div className="auth-label">Наименование компании</div>
                  <input
                    value={this.state.company_name}
                    onChange={this.onChange}
                    id="company_name"
                    type="company_name"
                    className="auth-input main-content__forms"
                  />
                  <div className="auth-label">Изменить название компании</div>
                </label>
                <label>
                  <div className="auth-label">ИНН</div>
                  <input
                    value={this.state.company_inn}
                    onChange={this.onChange}
                    id="company_inn"
                    type="company_inn"
                    className="auth-input"
                  />
                </label>
                <label>
                  <div className="auth-label">Имя пользователя</div>
                  <input
                    value={this.state.name}
                    onChange={this.onChange}
                    id="name"
                    type="name"
                    className="auth-input"
                  />
                </label>
                <label>
                  <div className="auth-label">Пароль</div>
                  <input
                    value={this.state.pass}
                    onChange={this.onChange}
                    id="pass"
                    type="pass"
                    className="auth-input"
                  />
                </label>
                <label>
                  <div className="auth-label">Email</div>
                  <input
                    value={this.state.email}
                    onChange={this.onChange}
                    id="email"
                    type="email"
                    className="auth-input"
                  />
                </label>
                <label>
                  <div className="auth-label">Контактное лицо</div>
                  <input
                    value={this.state.contact_person}
                    onChange={this.onChange}
                    id="contact_person"
                    type="contact-person"
                    className="auth-input"
                  />
                </label>
                <label>
                  <div className="auth-label">Телефон</div>
                  <input
                    value={this.state.company_phone}
                    onChange={this.onChange}
                    id="company_phone"
                    type="company_phone"
                    className="auth-input"
                  />
                </label>
                <button type="submit" className="auth-button">
                    Изменить настройки
                </button>
              </form>
            </div>
          </div>
        </div>

{/**------------------------------------------------------------------------------- */}
        <div className="main-content__account-wrapper">
        <h1>Настройки</h1>
        <div className="main-content__main-settings">
          <h3>Основные настройки</h3>
          <div className="main-content__main-settings-wrapper">
            <p>Информация о Вашем профиле</p>
            <form className="main-content__main-settings-form" onSubmit={this.onSubmit}>
              <label>
                <div className="auth-label">Наименование компании</div>
                <input
                  value={this.state.company_name}
                  onChange={this.onChange}
                  id="company_name"
                  type="company_name"
                  className="auth-input main-content__forms"
                />
              </label>
              <label>
                <div className="auth-label">ИНН</div>
                <input
                  value={this.state.company_inn}
                  onChange={this.onChange}
                  id="company_inn"
                  type="company_inn"
                  className="auth-input"
                />
              </label>
              <label>
                <div className="auth-label">Имя пользователя</div>
                <input
                  value={this.state.name}
                  onChange={this.onChange}
                  id="name"
                  type="name"
                  className="auth-input"
                />
              </label>
              <label>
                <div className="auth-label">Пароль</div>
                <input
                  value={this.state.pass}
                  onChange={this.onChange}
                  id="pass"
                  type="pass"
                  className="auth-input"
                />
              </label>
              <label>
                <div className="auth-label">Email</div>
                <input
                  value={this.state.email}
                  onChange={this.onChange}
                  id="email"
                  type="email"
                  className="auth-input"
                />
              </label>
              <label>
                <div className="auth-label">Контактное лицо</div>
                <input
                  value={this.state.contact_person}
                  onChange={this.onChange}
                  id="contact_person"
                  type="contact-person"
                  className="auth-input"
                />
              </label>
              <label>
                <div className="auth-label">Телефон</div>
                <input
                  value={this.state.company_phone}
                  onChange={this.onChange}
                  id="company_phone"
                  type="company_phone"
                  className="auth-input"
                />
              </label>
              <button type="submit" className="auth-button">
                  Изменить настройки
              </button>
            </form>
          </div>
        </div>
      </div>

{/**------------------------------------------------------------------------------- */}

      </div>
    );
  }
}
const mapStateToProps = state => ({
    auth: state.auth,
    account: state.account
  });
  export default withRouter(
    connect(
      mapStateToProps,
      { refreshAccountData }
    )(Account)
  );
//export default Account;