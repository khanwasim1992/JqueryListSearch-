# Jquery List Search 

Perform search in a list within specified element in a list.
This plugin is created for the search list structure show in image gicven with the project.
But you can extend the functionality of this search according to your usage.

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
    
  
