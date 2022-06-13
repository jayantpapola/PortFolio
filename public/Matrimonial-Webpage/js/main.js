function form_validation()
{
    var client_name, client_number;

    //getting value for client_name
    client_name = document.form.fname.value;

    //getting value for client_number
    client_number = document.form.phone.value;

    if(client_name == "" || client_name == null)
    {
        alert("Name Must Be Fill Out");
    }
    else if(client_number == "" || client_number == null)
    {
        alert("Please enter your phone number");
        return false;
    }
    
}


