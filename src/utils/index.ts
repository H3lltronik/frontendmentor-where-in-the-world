import { get } from 'svelte/store';
import {currentTheme} from '../store'
import { mdiWeatherNight, mdiWhiteBalanceSunny  } from '@mdi/js';

const html = document.querySelector('html');
const classesToToggle = []

export const switchTheme = function (theme : "dark"|"light") {
    if (html) {
        currentTheme.set (theme);
        html.dataset.theme = `${theme}`;
    }
    for (const classToToggle of classesToToggle) {
        document.querySelectorAll(classToToggle).forEach (el => {
            const element: HTMLElement = <HTMLElement>el
            element.dataset.theme = `${theme}`
        });
    }
}

export const toggleTheme = () => {
    let currTheme = get(currentTheme);
    let newTheme:Theme = "dark";
    
    if (currTheme == 'dark')  newTheme = 'light'
    else if (currTheme == 'light') newTheme = 'dark'

    switchTheme (newTheme);
}

export const themeIcon = () => {
    let currTheme = get(currentTheme);
    let icon = mdiWhiteBalanceSunny;

    if (currTheme == 'dark')  icon = mdiWeatherNight
    else if (currTheme == 'light') icon = mdiWhiteBalanceSunny

    return icon;
}