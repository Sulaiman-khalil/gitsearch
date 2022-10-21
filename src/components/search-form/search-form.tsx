import { Component, h, Listen, State } from "@stencil/core";

// import { Api } from '../api';

@Component({
    tag: "search-form",
    styleUrl: "search-form.css",
    shadow: true,
})
export class SearchForm {
    @State() textInput!: HTMLInputElement;
    @State() unsplash: undefined;
    @State() dataItemes: any;
    @State() data: any;

    @Listen("click", { capture: true })
    handleSubmit(e: Event) {
        e.preventDefault();
        if (this.textInput.value) {
            fetch(
                `https://api.unsplash.com/photos/random?client_id=nIN9of7odLV7T3z7JRmoAx4SJpKHJYOoPXZ4LwRAlJE`
            )
                .then((data) => data.json())
                .then((res) => {
                    this.unsplash = res.urls.regular;
                    console.log("this.unspalsh :>> ", this.unsplash);
                });
        }

        console.log("button clicked");
    }

    render() {
        return (
            <div class="all-all">
                <form>
                    <input
                        placeholder="Enter Github name"
                        type="text"
                        ref={(el) => (this.textInput = el as HTMLInputElement)}
                    ></input>
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
            </div>
        );
    }
}
