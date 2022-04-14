export const listShuffling = (initialArray, albums) => {
    let firstElement;
  
    if (albums.length) {
      initialArray.shift();
      firstElement = albumsArray.shift();
    } else {
        firstElement = initialArray.shift();
    }
  
    return [...initialArray, firstElement];
  };
  