import { Component, Host, h, Listen, State, Prop } from '@stencil/core';
// import { Api } from '../api';

@Component({
  tag: 'github-card',
  styleUrl: 'github-card.css',
  shadow: true,
})
export class SearchForm {
  textInput: HTMLInputElement;
  @Prop() user: any;

  render() {
    return (
      <div class="all-all">
        {this.user && (
          <div class="all">
            <div class="myimage">
              <img class="profil" src={this.user.avatar_url}></img>
            </div>
            <div class="name">
              <h1> {this.user.name}</h1>
            </div>
            <div class="secound">
              <ul class="info">
                <li>
                  <p>Followers </p>
                  <span>{this.user.followers}</span>
                </li>
                <li>
                  <p>Following</p>
                  <span>{this.user.following} </span>
                </li>
                <li>
                  <p>Gists </p>
                  <span>{this.user.public_gists}</span>
                </li>
                <li>
                  <p>Repos </p>
                  <span>{this.user.public_repos}</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}
