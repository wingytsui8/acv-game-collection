import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {


  joinExistingGame = (event) => {
    event.preventDefault()
    console.log(event.target.roomId.value)

    this.props.history.push('/werewolf/room/' + event.target.roomId.value)

  }

  createNewGame = (event) => {
    const rand = 100000 + Math.floor(Math.random() * (1000000));
    this.props.history.push('/werewolf/room/' + rand)
  }

  render() {
    return (
      <div>
        <h1 class="text-center p-5">Welcome</h1>
        <p></p>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <form onSubmit={this.joinExistingGame}>
                <div class="form-group row">
                  <label for="roomId" class="col-sm-4 col-form-label col-form-label-lg">Room ID</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control form-control-lg" id="roomId" placeholder="Room ID" required={true} />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="userName" class="col-sm-4 col-form-label col-form-label-lg">User Name</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control form-control-lg" id="userName" placeholder="User Name" required={true} />
                  </div>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Join</button>
              </form>
            </div>
            <div class="col-sm">
              <form onSubmit={this.createNewGame}>
                <div class="form-group row">
                  <label for="userName" class="col-sm-12 col-form-label col-form-label-lg">Create a New Game</label>
                </div>
                <div class="form-group row">
                  <label for="userName" class="col-sm-4 col-form-label col-form-label-lg">User Name</label>
                  <div class="col-sm-8">
                    <input type="text" class="form-control form-control-lg" id="userName" placeholder="User Name" required={true} />
                  </div>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Create a new game</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
