import React, { Component } from 'react';
import { connect } from 'react-redux';

class summary extends Component {
  render() {
    return (
      <div>
        <h1> The dossier summary</h1>
        {
          this.props.MemberList.map(list => (
            <li>{list.member} has {list.item}</li>
          ))
        }
      </div>


    );
  }

}
const mapStateToProps = state => ({
  regMember: state.regMember,
  MemberList: state.MemberList,

});
export default connect(mapStateToProps, null)(summary);
