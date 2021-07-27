export default function getKey(e, ...education) {
    const { id, value } = e.target;
    education.filter(item => {
        return item.id === e.target.parentElement.dataset.key;
    }).map(info => {
        return(info[id] = value)
    })
}