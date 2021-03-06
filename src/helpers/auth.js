import Swal from "sweetalert2"

export const showAlert = (message) => {
    Swal.fire({
        title: 'Oops!...',
        icon: 'error',
        text: message,
        width: 600,
        padding: '2em',
        color: '#EF8354',
        backdrop: `
            rgba(0,0,0,0.4)
        `,
        showClass: {
            popup: 'animate__animated animate__backInDown animate__fast'
        },
        hideClass: {
            popup: 'animate__animated animate__backOutDown animate__fast'
        }

    })

}

export const replaceInOut = () => {
    const elem = document.querySelector('.in');
    elem.classList.replace('fadeIn','fadeOut');
    elem.classList.replace('in', 'out'); // Add .fade-in class
    //add fadeout class


    setTimeout(function () {
        elem.classList.replace('fadeOut','fadeIn');
        elem.classList.replace('out', 'in') // Add .fade-out class
    }, 500);

}