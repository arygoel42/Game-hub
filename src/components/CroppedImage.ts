const getCropped = (url: string) => {
    if (url === null) {
        return null;
    }
    let target = url.indexOf('media/') + 'media/'.length
    return url.slice(0, target) + 'crop/600/400/' + url.slice(target)

}

export default getCropped