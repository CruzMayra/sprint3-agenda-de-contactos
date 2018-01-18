var $addContactButton = $('.add-contact-button');
var $closeButton = $('.close');
var $savedContactResult = $('.saved-contact'); // div donde se almacena el resultado
console.log($savedContactResult);

$addContactButton.click(addContactEvent);
$addContactButton.click(function() {
  $closeButton.click();
})

function addContactEvent(e){
  e.preventDefault();
  var $contact = addContact();
  $savedContactResult.html(show($contact));
}


var $listSavedContacts = [];

function addContact() {
  var $nameContact = $('.name-contact').val();
  var $numberContac = $('.number-contact').val();
  var $savedContact = {
    'name' : $nameContact,
    'phone' : $numberContac
  }
  $listSavedContacts.push($savedContact);
  return $savedContact;
}

function show($contact) {
  var $savedContactResult = "";
  // $savedContactResult += '::before';
  $savedContactResult += '<section class="col-md-8 col-md-offset-2">';
  $savedContactResult += '<section class="panel panel-default">' ;
  $savedContactResult += '<div class="panel-body">' ;
  $savedContactResult += "<h2>" + $contact.name + "</h2>" ;
  $savedContactResult += "<h5>" + $contact.phone + "</h5>" ;
  $savedContactResult += '<button class="btn btn-default" type="submit"><i class="fa fa-trash" aria-hidden="true"></i></button>' ;
  $savedContactResult += "</div>" ;
  $savedContactResult += "</section>" ;
  $savedContactResult += "</section>";
  // $savedContactResult *= '::after';

  return $savedContactResult;
}
