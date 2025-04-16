// Web History API Example

// Navigate to a new page
function navigateToPage(url) {
    history.pushState(null, '', url);
    console.log(`Navigated to: ${url}`);
}

// Go back to the previous page
function goBack() {
    history.back();
    console.log('Went back to the previous page');
}

// Go forward to the next page
function goForward() {
    history.forward();
    console.log('Went forward to the next page');
}

// Replace the current page
function replacePage(url) {
    history.replaceState(null, '', url);
    console.log(`Replaced current page with: ${url}`);
}

// Listen for popstate events
window.addEventListener('popstate', (event) => {
    console.log('Popstate event triggered:', event.state);
});

// Example usage
navigateToPage('/page1');
replacePage('/page2');
goBack();
goForward();