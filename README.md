# Jquery List Search 

Perform search in a list within specified area in a list.

## Getting Started

Download the copy of code, extract and run the index.html file given in a project.

### Prerequisites

Latest Jquery Library project using version v2.2.4

Give examples
  
    var options = {
        class: ['name','address'], // Class name of filed in a list element
        parentId: "customerSearch", // List Container Id
        childrenTag: 'a' //List Element Here is anchor tag it will be 'div' or 'li' or user define 
    };
    
    $('#listSearch').search(options); //input element refrance  
    
  
