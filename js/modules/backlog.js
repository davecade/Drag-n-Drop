const Backlog = ( () => {
    //-- Cache the DOM
    const backlogEl = document.querySelector('.backlog-column')

    const init = () => {
        render();
        listeners();
    }

    const listeners = () => {
        

    }

    const render= () => {
        let markup = ''

        markup = `  
            <h2>Backlog</h2>
            <ul class="backlog-list">
                <li class="list-item" draggable="true">
                    <p>Testing</p>
                </li>
                <li class="list-item" draggable="true">
                    <p>Testing</p>
                </li>
                <li class="list-item" draggable="true">
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