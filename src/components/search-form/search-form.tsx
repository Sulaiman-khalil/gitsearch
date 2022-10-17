import { Component, Host, h, Listen, State } from '@stencil/core';
// import { Api } from '../api';

@Component({
  tag: 'search-form',
  styleUrl: 'search-form.css',
  shadow: true,
})
export class SearchForm {
  textInput: HTMLInputElement;

  @State() unsplash: string;
  @State() dataItemes: any;
  @State() data: any;
  @Listen('click', { capture: true })
  handleSubmit(e: Event) {
    e.preventDefault();
    console.log('button clicked');
    if (this.textInput.value) {
      fetch(`https://api.github.com/users/${this.textInput.value}`)
        .then(res => res.json())
        .then(data => {
          this.data = data;
          this.dataItemes = this.data.items;
          this.textInput.value = null;
          // this.dataItemes.map(el => {
          //   el.followers_url;
          // });

          console.log(this.data);
          console.log(this.dataItemes);

          console.log(this.textInput.value);
        });

      fetch(`https://api.unsplash.com/photos/random?client_id=2uWJrmFfw3MMhjhSe3924de_PWPYIKGVhV4vnzXOACo`)
        .then(data => data.json())
        .then(res => {
          this.unsplash = res.urls.regular;
          console.log('this.unspalsh :>> ', this.unsplash);
        });
    }
  }

  render() {
    return (
      <div class="all-all">
        <form>
          <input placeholder="Enter Github name" type="text" ref={el => (this.textInput = el as HTMLInputElement)}></input>
          <button onSubmit={this.handleSubmit} type="submit">
            fetch&&search
          </button>
        </form>
        {this.data && (
          <div class="all">
            <div class="myimage">
              <img class="back" src={this.unsplash}></img>
              <img class="profil" src={this.data.avatar_url}></img>
            </div>
            <div class="name">
              <h1> {this.data.name}</h1>
            </div>
            <div class="secound">
              <ul class="info">
                <li>
                  <p>Followers </p>
                  <span>{this.data.followers}</span>
                </li>
                <li>
                  <p>Following</p>
                  <span>{this.data.following} </span>
                </li>
                <li>
                  <p>Gists </p>
                  <span>{this.data.public_gists}</span>
                </li>
                <li>
                  <p>Repos </p>
                  <span>{this.data.public_repos}</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}
