export const listShuffling = (initialArray, albums) => {
    let firstElement;
  
    if (albums.length) {
      initialArray.shift();
      firstElement = albums.shift();
    } else {
        firstElement = initialArray.shift();
    }
  
    return [...initialArray, firstElement];
  };
  