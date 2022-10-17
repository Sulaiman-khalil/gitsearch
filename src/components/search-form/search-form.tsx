import { Component, h, Listen, State } from '@stencil/core';
// import { Api } from '../api';

@Component({
  tag: 'search-form',
  styleUrl: 'search-form.css',
  shadow: true,
})
export class SearchForm {
  @State() textInput!: HTMLInputElement;
  @State() unsplash: undefined;
  @State() dataItemes: any;
  @State() data: any;

  @Listen('click', { capture: true })
  handleSubmit(e: Event) {
    e.preventDefault();

    fetch(`https://api.unsplash.com/photos/random?client_id=zTlsfycuk6GJWIyc7rnOmFIwqYjXoBMyz2UQe7QEH8A`)
      .then(data => data.json())
      .then(res => {
        this.unsplash = res.urls.regular;
        console.log('this.unspalsh :>> ', this.unsplash);
      });

    console.log('button clicked');
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
        {this.unsplash && (
          <div>
            <img class="back" src={this.unsplash}></img>
            <github-card user={this.textInput.value}></github-card>
          </div>
        )}

        {/* <github-card user={this.textInput.value}></github-card> */}
        {/* <github-card user={this.textInput.value}></github-card> */}
        {/* {this.data && (
          <div class="all">
            <div class="myimage">
            
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
        )} */}
      </div>
    );
  }
}
