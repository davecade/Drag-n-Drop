const Backlog = ( () => {
    //-- Cache the DOM
    const backlogEl = document.querySelector('.backlog-column')

    const init = () => {
        console.log("Backlog initialized")
        render();
        listeners();
    }

    const listeners = () => {

    }

    const render= () => {
        let markup = ''

        markup = `  
            <h2>Backlog</h2>
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
        backlogEl.innerHTML = markup;
    }

    return {
        init
    }
})()

export default Backlog;