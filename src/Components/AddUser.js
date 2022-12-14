import React from "react";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      bio: "",
      age: 1,
      isHappy: false,
    };
  }

  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          placeholder="name"
          onChange={(e) => this.setState({ firstname: e.target.value })}
        ></input>
        <input
          placeholder="surname"
          onChange={(e) => this.setState({ lastname: e.target.value })}
        ></input>
        <textarea
          placeholder="biography"
          onChange={(e) => this.setState({ bio: e.target.value })}
        ></textarea>
        <input
          placeholder="aging"
          onChange={(e) => this.setState({ age: e.target.value })}
        ></input>
        <label htmlFor="happiness">are u happy?</label>
        <input
          type="checkbox"
          id="isHappy"
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        ></input>
        <button
          type="button"
          onClick={() => {
            this.myForm.reset();
            this.props.onAdd({
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              bio: this.state.bio,
              age: this.state.age,
              isHappy: this.state.isHappy,
            });
          }}
        >
          Add
        </button>
      </form>
    );
  }
}

export default AddUser;
