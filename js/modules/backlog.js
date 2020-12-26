const Backlog = ( () => {
    //-- Cache the DOM
    const backlogEl = document.querySelector('.backlog-column')

    const init = () => {
        render();
        listeners();
    }

    const state = {
        list: ['Hello', 'Dave', 'lebron'],
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
                state.list.push(inputTextEl.value)
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

    const render = () => {
        let markup = ''
        let listMarkup = ''

        listMarkup = state.list.map(item => {
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

    return {
        init
    }
})()

export default Backlog;