import React from "react";
import { SearchBar } from "react-native-elements";
import colors from "../configs/colors";

export default class AppSearchBar extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}
        platform="ios"
        containerStyle={{ width: "100%" }}
        inputContainerStyle={{
          backgroundColor: colors.lightGrey,
        }}
        showLoading={true}
        cancelButtonProps={{ color: colors.medium }}
      />
    );
  }
}
