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

export function paginate<T>(array: T[], page_size: number, page_number: number) {
    return <T[]>array.slice((page_number - 1) * page_size, page_number * page_size);
}

export function observeForEndScroll (element: HTMLElement, {endElement, callback}) {
    const onIntersection : IntersectionObserverCallback = 
        function ([{isIntersecting, target}]) {
            if (isIntersecting && callback) {
                callback()
            } 
        };

    const io = new IntersectionObserver(onIntersection, {
        root: element,
        threshold: 0,
    })

    io.observe(endElement)
}
  