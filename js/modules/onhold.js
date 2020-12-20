const OnHold = ( () => {
    // -- Cache the DOM
    const onHoldEl = document.querySelector('.on-hold-column');


    const init = () => {
        render();
        listeners();
    }

    const listeners = () => {

    }

    const render= () => {
        let markup = ''

        markup = `  
            <h2>On Hold</h2>
            <ul class="list">
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
        onHoldEl.innerHTML = markup;
    }

    return {
        init
    }
})()

export default OnHold;