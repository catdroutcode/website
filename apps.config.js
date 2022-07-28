import displayYouTube from './components/apps/yt';
import displayVsCode from './components/apps/vscode';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayLibreWolf } from './components/apps/librewolf';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutCatdrout } from './components/apps/catdrout';
import { displayTerminalCalc } from './components/apps/calc';

const apps = [
    {
        id: "LibreWolf",
        title: "LibreWolf",
        icon: './themes/Yaru/apps/librewolf.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayLibreWolf,
    },
    {
        id: "calc",
        title: "Calc",
        icon: './themes/Yaru/apps/calculator.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    {
        id: "about-catdrout",
        title: "About Me",
        icon: './themes/Yaru/system/user-home.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayAboutCatdrout,
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: './themes/Yaru/apps/vscode.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayVsCode,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "yt",
        title: "YouTube",
        icon: './themes/Yaru/apps/yt.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayYouTube,
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: './themes/Yaru/apps/gedit.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGedit,
    },
]

export default apps;