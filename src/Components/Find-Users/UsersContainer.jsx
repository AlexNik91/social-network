import React from "react";

import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  setFollowInProgess,
  getUsersThunkCreator,
} from "../../redux/reducers/UsersReducer";
import Users from "./Users";
import IsLoader from "../commen/commenFile/loader.jsx";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.curentPage, this.props.pageSize);
  }

  onPageClick = (page) => {
    this.props.getUser(page, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <IsLoader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          curentPage={this.props.curentPage}
          onPageClick={this.onPageClick}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          setFollowInProgess={this.props.setFollowInProgess}
          followInProgess={this.props.followInProgess}
        />
      </>
    );
  }
}

let MapStateToProps = (state) => {
  return {
    pageSize: state.usersState.pageSize,
    totalUsersCount: state.usersState.totalUsersCount,
    curentPage: state.usersState.curentPage,
    isFetching: state.usersState.isFetching,
    users: state.usersState.users,
    followInProgess: state.usersState.followInProgess,
  };
};

export default connect(MapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  setFollowInProgess,
  getUser: getUsersThunkCreator,
})(UsersContainer);
