function joinPath(folders){
    let finalPath = folders.join("/")
    return finalPath
}

module.exports = {
    joinPath : joinPath
}