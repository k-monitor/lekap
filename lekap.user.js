// ==UserScript==
// @name        lekap
// @namespace   Violentmonkey Scripts
// @match       https://kikap.kormany.hu/*
// @grant       none
// @version     1.0
// @author      K-Monitor
// @description Egy userscript, ami (részben) automatizálja kikap-os dokumentumok letöltését.
// ==/UserScript==

async function downloadNext() {
    const dlLink = document.querySelector('a[href^="/downloadFile/"]');
    if (!dlLink) {
        console.error('No download link found');
        return;
    }
    const dlUrl = dlLink.href;
    const response = await fetch(dlUrl);
    // Extract the filename from the Content-Disposition header
    const contentDisposition = response.headers.get('Content-Disposition');
    let filename = 'downloaded_file'; // Default filename if none provided

    if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="([^"]+)"/);
        if (filenameMatch) {
            filename = filenameMatch[1]; // Extract the filename
        }
    }

    const blob = await response.blob();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();

    console.log('Downloaded', dlUrl);

    const nextLink = document.querySelector('a.next');
    if (nextLink && nextLink.href && !nextLink.href.includes('#')) {
        const nextLinkUrl = nextLink.href + '#dl';
        nextLink.href = nextLinkUrl;
        console.log('Navigating to', nextLinkUrl);
        nextLink.click();
        return;
    } else if (nextLink && nextLink.href.includes('#')) {
        const closeLink = document.querySelector('a[href^="/close"]');
        if (closeLink) {
            console.log('Closing');
            closeLink.click();
            return;
        }
    }
    return
}

const content = document.getElementById('contentarea');
if (content && location.href.includes('openDoc')) {
    if (location.href.includes('#dl')) {
        downloadNext();
    } else {
        const startButton = document.createElement('button');
        startButton.innerText = 'Start';
        content.insertBefore(startButton, content.firstChild);
        startButton.addEventListener('click', async () => {
            startButton.disabled = true;
            await downloadNext();
        });
    }
} else if (content && location.href.includes('hash')) {
    // const hash = location.href.split('hash=')[1];
    // const url = `https://kikap.kormany.hu/openDoc/${hash}`;
    // const a = document.createElement('a');
    // a.href = url;
    // a.innerText = 'Skip';
    // content.insertBefore(a, content.firstChild);
}

// set captcha normal text field
const captcha = document.getElementById('captcha');
if (captcha)
    captcha.type = 'text';

// enable right click
// https://stackoverflow.com/a/57065599

function enableContextMenu(aggressive = false) {
    void (document.ondragstart = null);
    void (document.onselectstart = null);
    void (document.onclick = null);
    void (document.onmousedown = null);
    void (document.onmouseup = null);
    void (document.body.oncontextmenu = null);
    enableRightClickLight(document);
    if (aggressive) {
        enableRightClick(document);
        removeContextMenuOnAll("body");
        removeContextMenuOnAll("img");
        removeContextMenuOnAll("td");
    }
}

function removeContextMenuOnAll(tagName) {
    var elements = document.getElementsByTagName(tagName);
    for (var i = 0; i < elements.length; i++) {
        enableRightClick(elements[i]);
    }
}

function enableRightClickLight(el) {
    el || (el = document);
    el.addEventListener("contextmenu", bringBackDefault, true);
}

function enableRightClick(el) {
    el || (el = document);
    el.addEventListener("contextmenu", bringBackDefault, true);
    el.addEventListener("dragstart", bringBackDefault, true);
    el.addEventListener("selectstart", bringBackDefault, true);
    el.addEventListener("click", bringBackDefault, true);
    el.addEventListener("mousedown", bringBackDefault, true);
    el.addEventListener("mouseup", bringBackDefault, true);
}

function restoreRightClick(el) {
    el || (el = document);
    el.removeEventListener("contextmenu", bringBackDefault, true);
    el.removeEventListener("dragstart", bringBackDefault, true);
    el.removeEventListener("selectstart", bringBackDefault, true);
    el.removeEventListener("click", bringBackDefault, true);
    el.removeEventListener("mousedown", bringBackDefault, true);
    el.removeEventListener("mouseup", bringBackDefault, true);
}
function bringBackDefault(event) {
    event.returnValue = true;
    (typeof event.stopPropagation === 'function') &&
        event.stopPropagation();
    (typeof event.cancelBubble === 'function') &&
        event.cancelBubble();
}

enableContextMenu();