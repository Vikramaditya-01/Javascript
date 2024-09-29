// const myNumber = [1,2,3,4,5,6,7,8,9,10]
// const filteredNumber = myNumber.filter( (number) => (number >= 5))
// console.log(filteredNumber);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const editionofBooks =books.filter(book => book.edition > 2000 && book.genre === 'Science' && book.publish > 2010 ) ///// if you write the condition without curly braces then wyou don't need to return the value 

  const editionofBook =books.filter(book =>{
    return book.edition > 2000 && book.genre === 'Science' && book.publish > 2010   ///// if you write the condition in curly braces then you need to return the value using return function.
      })
  console.log(editionofBooks);
  console.log(editionofBook);     ///both have same output 

  