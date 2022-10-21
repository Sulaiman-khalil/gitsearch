import { Component, Host, h, Listen, State, Prop, Watch } from "@stencil/core";
// import { Api } from '../api';

@Component({
    tag: "github-card",
    styleUrl: "github-card.css",
    shadow: true,
})
export class GithubCard {
    @Prop() data: any;
    @Prop() user!: string;
    @Watch("user")
    async componentWillLoad() {
        const res = await fetch(`https://api.github.com/users/${this.user}`);
        const data = await res.json();
        this.data = data;

        console.log(this.data);
    }
    render() {
        return (
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
        );
    }
}
