import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './action';
import { bindActionCreators } from 'redux';

class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: '',
      testList: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleListChange = this.handleListChange.bind(this);
    this.addMember = this.addMember.bind(this);
    this.addItem = this.addItem.bind(this);
    this.resetMembers = this.resetMembers.bind(this);
    this.resetList = this.resetList.bind(this);
  };

  handleChange(event) {
    console.log("test handleChange");
    this.setState({ test: event.target.value });
  }

  handleListChange(event) {
    console.log("test handleListChange");
    this.setState({ testList: event.target.value });
  }

  addMember() {
    this.props.actions.addRegMember(this.state.test);
    this.setState({ test: '' });
  }

  addItem() {
    const path = (this.props.location.pathname).replace('/registration/', '');
    this.props.actions.addItemToMember(path, this.state.testList);
    this.setState({ testList: '' });
  }

  resetMembers() {
    this.props.actions.resetRegMembers();
  }

  resetList() {
    this.props.actions.resetMemberList();
  }

  render() {
    let List = this.props.MemberList.filter(list => list.member === (this.props.location.pathname).replace('/registration/', ''));
    let disableS = (this.props.location.pathname === '/registration') ? "disabled" : "";
    console.log(disableS);
    return (
      <div>
        <div className="row">
          <div className="small-6 columns md-text-field with-floating-label">
            <input type="text" id="memberInput" onChange={this.handleChange} value={this.state.test} required />
            <label htmlFor="memberInput">Input new member</label>
          </div>
          <div className="small-2 columns md-text-field">
            <button onClick={this.addMember}>Submit</button>
          </div>
          <div className="small-2 columns md-text-field left">
            <button onClick={this.resetMembers}>Reset</button>
          </div>
        </div>
        <div className="row">

          <div className="card columns small-8 valign-middle">
            <div className="bg-black padding-medium">
              <ul className="tabs ghost">
                {/* here it is doing an implicit return - paranthasis - return not required. Curley braces means i have to specify return*/}
                {this.props.regMember.map((member) => (
                  <li className="tab-title"><Link to={`/registration/${member}`}>{member}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row" >
          <div className="small-6 columns md-text-field with-floating-label">
            <input type="text" id="memberListInput" onChange={this.handleListChange} value={this.state.testList} required />
            <label htmlFor="memberListInput">List Show</label>
          </div>
          <div className="small-2 columns md-text-field">
            <button className={`${disableS}`} onClick={this.addItem}>Submit</button>
          </div>
          <div className="small-2 columns md-text-field left">
            <button className={`${disableS}`} onClick={this.resetList}>Reset</button>
          </div>

        </div>
        <div>
          {List.map((list) => (
            <li>{list.item}</li>
          ))}

        </div>

      </div>

    );
  }

}
const mapStateToProps = state => ({
  regMember: state.regMember,
  MemberList: state.MemberList,

});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});
//export default Registration;
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
