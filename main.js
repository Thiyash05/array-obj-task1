//Write a JavaScript program to display the values
//(i.e. display book name, author name and reading status)
//of the following books. If the reading status  is true 

var library = [  
   { 
       author: 'Bill Gates', 
       title: 'The Road Ahead', 
       readingStatus: true 
   }, 
   { 
       author: 'Steve Jobs', 
       title: 'Walter Isaacson', 
       readingStatus: true 
   }, 
   { 
       author: 'Suzanne Collins', 
       title:  'Mockingjay: The Final Book of The Hunger Games',  
       readingStatus: false 
   }]; 
   
   let ans=library.filter((e)=>{
	   return e.readingStatus==true
   })
   console.log(ans)
   
   
   
  