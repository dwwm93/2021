function valid()
{
    const inputEmail = document.querySelector('input');
    if (inputEmail.value === 'contact2@greta.com'){
        document.querySelector('div#errors').innerHTML = "ERROR";
        return false;
    }
    return true;
}