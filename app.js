const list = document.querySelector('.faqs')

questions = [
    {
        question: 'Who is the CEO of Jamster?',
        answer: 'Our founder is James Hamloshing. He is a Stanford Alumnus, with a degree is Child Psychology. He lives in St. Louis, Missouri with his 39 dogs, and a son.'
    },
    {
        question: 'When was the company founded?',
        answer: 'Our company was founded on the eve of February 31, 2018. It was founded at a party held to hail a match winning NBA performance by a famous player. The founding members met there by chance and hit it off immediately.'
    },
    {
        question: 'Is the company public?',
        answer: 'Our company has not yet gone public. But, we plan to see how things go. We plan to go public by 2025. If we dont make that, we will try to go public by 2028. Or any year afterwards.'
    }
]

questions.forEach( question => {
    const qa = document.createElement('li')
    const dv = document.createElement('div')
    const p1 = document.createElement('p')
    const span = document.createElement('span')
    const p2 = document.createElement('p')
    p1.innerText = question.question
    span.classList.add('material-symbols-outlined')
    span.innerText = 'add'
    dv.appendChild(p1)
    dv.appendChild(span)
    qa.addEventListener('click', (e) => {
        const pElements = document.querySelectorAll('li > p:not(.answer-hidden)');
        const clickedElement = e.currentTarget.querySelector(':scope > p')
        clickedElement.classList.toggle('answer-hidden')
        e.currentTarget.querySelector('span').innerText = 'remove'
        if (pElements.length !== 0) {
            // Are we clicking on an answer that is already open?
            if (pElements[0] === clickedElement) {
                e.currentTarget.querySelector('span').innerText = 'add'
            }
            else {
                pElements[0].classList.add('answer-hidden')
                pElements[0].parentNode.querySelector('span').innerText = 'add'
            }
        }
    })
    p2.innerText = question.answer
    p2.classList.add('answer-hidden')
    qa.appendChild(dv)
    qa.appendChild(p2)
    list.appendChild(qa)
})