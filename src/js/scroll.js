
document.querySelector('.header__scroll-ico').addEventListener('click', function (e) {
    e.preventDefault()

    document.getElementById('forScrollToProjects').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})