const App = ( () => {
    //-- Cache the DOM
    const backlogEl = document.querySelector('.backlog-column');
    const completedEl = document.querySelector('.completed-column');
    const onHoldEl = document.querySelector('.on-hold-column');
    const progressEl = document.querySelector('.progress-column');

    const init = () => {
        renderBacklog();
        renderCompleted();
        renderOnHold();
        renderProgress();
        listeners();
    }

    const state = {
        backlog: ['Hello', 'Dave', 'lebron'],
        leaving: ''
    }

    const listeners = () => {
        const addButtonEl = document.querySelector('.backlog-column .add')
        const inputTextEl = document.querySelector('.backlog-column .input-text')
        const submitButtonEl = document.querySelector('.submit')
        const listEl = document.querySelectorAll('.backlog-column .backlog-list')


        addButtonEl.addEventListener('click', () => {
            inputTextEl.style = "display: initial"
            submitButtonEl.style = "display: initial"
        })

        submitButtonEl.addEventListener('click', () => {
            if(inputTextEl.value) {
                state.backlog.push(inputTextEl.value)
                init();
            }
        })

        listEl.forEach(draggable => {
            draggable.addEventListener('dragstart', dragStart)
        })
    }

    const dragStart = e => {
        console.log(e.target)
    }

    const renderBacklog = () => {
        let markup = ''
        let listMarkup = ''

        listMarkup = state.backlog.map(item => {
            return `
                <li class="list-item" draggable="true">
                    <p>${item}</p>
                </li>
            `
        })

        markup = `  
            <h2>Backlog</h2>
            <ul class="backlog-list custom-scroll">
                ${listMarkup.join("")}
            </ul>
            <div class="add"> + <span>Add Item</span></div>
            <input type="textarea" class="input-text">
            <button class="submit">Submit</button>
        `
        backlogEl.innerHTML = markup;
    }

    const renderCompleted= () => {
        let markup = ''

        markup = `  
            <h2>Completed</h2>
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
        completedEl.innerHTML = markup;
    }

    const renderOnHold= () => {
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

    const renderProgress= () => {
        let markup = ''

        markup = `  
            <h2>Progress</h2>
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
        progressEl.innerHTML = markup;
    }

    return {
        init
    }
})()

App.init();