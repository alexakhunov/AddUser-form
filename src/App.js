import React from "react";
import Header from "./Components/Header";
import Users from "./Components/users";
import AddUser from "./Components/AddUser";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstname: "Bob",
          lastname: "Marley",
          bio: "when abused becomes the abuser",
          age: 40,
          isHappy: true,
        },
        {
          id: 2,
          firstname: "Jonh",
          lastname: "Doe",
          bio: "I don't take it for granted",
          age: 22,
          isHappy: false,
        },
      ],
    };
    this.AddUser = this.AddUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }
  render() {
    return (
      <div className="content">
        <Header title="Users list" />
        <main>
          <Users users={this.state.users} onDelete={this.deleteUser} />
        </main>
        <aside>
          <AddUser onAdd={this.AddUser} />
        </aside>
      </div>
    );
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id),
    });
  }

  AddUser(user) {
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, { id, ...user }] });
  }
}

export default App;
