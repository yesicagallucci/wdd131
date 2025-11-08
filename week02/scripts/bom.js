const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;

//textContent is preferred over innerHTML because it is more secure.
//However, if you need to include HTML tags, then you would use innerHTML.
//textContent will not render HTML tags. It will display the tags as text.

deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);


