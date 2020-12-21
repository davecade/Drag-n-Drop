const Backlog = ( () => {
    //-- Cache the DOM
    const backlogEl = document.querySelector('.backlog-column')

    const init = () => {
        render();
        listeners();
    }

    const listeners = () => {
        const addButtonEl = document.querySelector('.backlog-column .add')
        const inputTextEl = document.querySelector('.backlog-column .input-text')

        addButtonEl.addEventListener('click', () => {
            console.log("clicked")
            inputTextEl.style = "display: initial"
        })
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
            <input type="textarea" class="input-text">
        `
        backlogEl.innerHTML = markup;
    }

    return {
        init
    }
})()

export default Backlog;