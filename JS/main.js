

var bookNameInput=document.getElementById('bookName');
var bookUrlInput=document.getElementById('bookWebSite');
var bookContainer=[];
var websiteIndex =0;

if(localStorage.getItem('books')!=null){
  bookContainer=JSON.parse(localStorage.getItem('books'))
  displayBook(bookContainer)
}



function addBook(){
    if(validateBookName() && validateUrl() ==true)
    {
        var book={
            name: bookNameInput.value,
            url:bookUrlInput.value
           }
           bookContainer.push(book) 
           displayBook(bookContainer)
           localStorage.setItem('books',JSON.stringify(bookContainer))
           clearTable()
    }
    else{
       
       
    }
  
}

function displayBook(arr)
{
   
    var cartona='';
    for(var i=0;i<bookContainer.length;i++){
        cartona+=`   <tr>   
         <td>${i+1}</td>
        <td>${arr[i].name}</td>
        <td>
        <button class="btn  btn-visit text-white"onclick=" visitSite(${i})"  > 
        <i class="fa-solid fa-eye"></i> Visit</button>
        </td>
        <td>
            <button onclick="deleteBook(${i})" class="btn btn-danger">
            <i class="fa-solid fa-trash"></i> Delete</button>
        </td>
        </tr>`
        
    }
    document.getElementById('tBody').innerHTML=cartona;
    console.log(bookContainer);
}


function deleteBook(bookIndex){
    bookContainer.splice(bookIndex,1)
    localStorage.setItem('books',JSON.stringify(bookContainer))
    displayBook(bookContainer)
}


function clearTable(){
    bookNameInput.value=" ";
    bookUrlInput.value=" ";
}

function validateUrl()
{
    var regex=/^(https:\/\/)?(www\.)?[a-zA-Z0-9_]{3,}\.[a-z]{3}$/
    if( regex.test(bookUrlInput.value)){
        bookUrlInput.style.border="none";
        return true;
    }else{
        bookUrlInput.style.border="5px solid red"
        return false;
    }
}
function validateBookName(){
    var regex=/^[a-zA-Z]{1,}$/
    if( regex.test(bookNameInput.value)){
        bookNameInput.style.border="none"
        return true;
    }else{
        bookNameInput.style.border="5px solid red"
        bookNameInput.style.boxShadow="none"
        return false;
    }
}


function visitSite(index){
    var httpsRegex = /^https?:\/\//;
    if (httpsRegex.test(bookContainer[index].url)) {
    open(bookContainer[index].url);}
    else{
        open(`https://${bookContainer[index].url}`)
    }
    }




