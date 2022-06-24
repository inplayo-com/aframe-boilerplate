//preloader
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('a-scene').addEventListener('loaded', () => {
        document.querySelector('.preloader').setAttribute('hidden', true)
    })
})