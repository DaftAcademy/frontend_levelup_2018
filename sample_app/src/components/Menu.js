import * as React from "react";

class Menu extends React.Component {
  state = {
    selectedItem: undefined
  };

  onItemClick = event => {
    const { name: selectedItem } = event.currentTarget;
    this.setState({
      selectedItem
    });
  };

  render() {
    console.info("selectedItem:", this.state.selectedItem);
    const { items } = this.props;
    const { selectedItem } = this.state;
    return (
      <div>
        {items && items.length > 0
          ? items.map(item =>
              <button
                key={item.name}
                name={item.name}
                onClick={this.onItemClick}
                style={{ color: selectedItem === item.name ? "green" : "gray" }}
              >
                {item.name}
              </button>
            )
          : "no data , sorry 🤡"}
      </div>
    );
  }
}

export default Menu;
