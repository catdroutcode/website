import React, { Component } from 'react';

export class Libre extends Component {
    constructor() {
        super();
        this.home_url = '';
        this.state = {
            url: '',
            display_url: "",
        }
    }

    componentDidMount() {
        let lastVisitedUrl = localStorage.getItem("firefox-url");
        let lastDisplayedUrl = localStorage.getItem("firefox-display-url");
        if (lastVisitedUrl !== null && lastVisitedUrl !== undefined) {
            this.setState({ url: lastVisitedUrl, display_url: lastDisplayedUrl }, this.refreshFox);
        }
    }

    storeVisitedUrl = (url, display_url) => {
        localStorage.setItem("firefox-url", url);
        localStorage.setItem("firefox-display-url", display_url);
    }

    refreshFox = () => {
        document.getElementById("chrome-screen").src += '';
    }

    goToHome = () => {
        this.setState({ url: this.home_url, display_url: "" });
        this.refreshFox();
    }

    checkKey = (e) => {
        if (e.key === "Enter") {
            let url = e.target.value;
            let display_url = "";

            url = url.trim();
            if (url.length === 0) return;

            if (url.indexOf("http://") !== 0 && url.indexOf("https://") !== 0) {
                url = "https://" + url;
            }

            url = encodeURI(url);
            display_url = url;
            if (url.includes("")) { // 😅
                url = '';
                display_url = "";
            }
            this.setState({ url, display_url: url });
            this.storeVisitedUrl(url, firefox_url);
            document.getElementById("firefox-url-bar").blur();
        }
    }

    handleDisplayUrl = (e) => {
        this.setState({ display_url: e.target.value });
    }

    displayUrlBar = () => {
        return (
            <div className="w-full pt-0.5 pb-1 flex justify-start items-center text-white text-sm border-b border-gray-900">
                <div onClick={this.refreshFirefox} className=" ml-2 mr-1 flex justify-center items-center rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-10">
                    <img className="w-5" src="./themes/Yaru/status/chrome_refresh.svg" alt="Ubuntu Firefox Refresh" />
                </div>
                <div onClick={this.goToHome} className=" mr-2 ml-1 flex justify-center items-center rounded-full bg-gray-50 bg-opacity-0 hover:bg-opacity-10">
                    <img className="w-5" src="./themes/Yaru/status/chrome_home.svg" alt="Ubuntu Firefox Home" />
                </div>
                <input onKeyDown={this.checkKey} onChange={this.handleDisplayUrl} value={this.state.display_url} id="firefox-url-bar" className="outline-none bg-ub-grey rounded-full pl-3 py-0.5 mr-3 w-5/6 text-gray-300 focus:text-white" type="url" spellCheck={false} autoComplete="off" />
            </div>
        );
    }

    render() {
        return (
            <div className="h-full w-full flex flex-col bg-ub-cool-grey">
                {this.displayUrlBar()}
                <iframe src={this.state.url} className="flex-grow" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals allow-downloads" id="firefox-screen" frameBorder="0" title="Ubuntu Firefox Url"></iframe>
            </div>
        )
    }
}

export default Libre

export const displayLibreWolf = () => {
    return <Libre> </Libre>;
}
