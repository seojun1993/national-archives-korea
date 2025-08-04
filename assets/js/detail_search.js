const openTypeDetail = () => {
    document.body.style.overflow = 'hidden';
    document.querySelector('.modal').style.display = 'block';
}

const closeTypeDetail = () => {
    document.body.style.overflow = 'auto';
    document.querySelector('.modal').style.display = 'none';
}