const Progress = ( () => {
    // -- Cache the DOM
    const progressEl = document.querySelector('.progress-column');

    const init = () => {
        console.log("Progress initialized")
        render();
        listeners();
    }

    const listeners = () => {

    }

    const render= () => {
        let markup = ''

        markup = `  
            <h2>Progress</h2>
            <ul class="list">
                <li class="list-item">
                    <p>Testing</p>
                </li>
                <li class="list-item">
                    <p>Testing</p>
                </li>
                <li class="list-item">
                    <p>Testing</p>
                </li>
            </ul>
            <div class="add"> + <span>Add Item</span></div>
        `
        progressEl.innerHTML = markup;
    }

    return {
        init
    }
})()

export default Progress;