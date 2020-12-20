const Completed = ( () => {
    //-- Cache the DOM
    const completedEl = document.querySelector('.completed-column')

    const init = () => {
        console.log("Completed initialized")
        render();
        listeners();
    }

    const listeners = () => {

    }

    const render= () => {
        let markup = ''

        markup = `  
            <h2>Completed</h2>
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
        completedEl.innerHTML = markup;
    }

    return {
        init
    }
})()

export default Completed;