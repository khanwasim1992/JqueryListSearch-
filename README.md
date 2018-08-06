# Jquery List Search 

Perform search in a list within specified element in a list.
This plugin is created for the search list structure show in image given with the project.
You can easily extend the functionality of plugin by customize as per your usage. 

## Getting Started

Download the copy of code, extract and run the index.html file given in a project.

### Prerequisites

Latest Jquery Library project using version v2.2.4

Give examples

$(function(){  

      var options = {
          class: ['name','address'], // Class name of filed in a list element
          parentId: "customerSearch", // List Item Container Id
          childrenTag: 'a' //List Item Here is anchor tag it will be 'div' or 'li' or user define 
      };
  
    $('#listSearch').search(options); //input element refrance  
})  
 
 1. The Search List 
 
 ![alt text](https://github.com/khanwasim1992/JqueryListSearch-/blob/master/list.PNG)
 
 2. With Search Result
 
 ![alt text](https://github.com/khanwasim1992/JqueryListSearch-/blob/master/with-search-result.PNG)   
 
 3.With No Search Result
 
 ![alt text](https://github.com/khanwasim1992/JqueryListSearch-/blob/master/with-no-result.PNG)
  
  
