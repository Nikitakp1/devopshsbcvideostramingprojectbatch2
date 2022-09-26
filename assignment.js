#Modified

function validate_form()
    {
        //alert("validate");
        var pattern1 = /^[a-zA-Z ]+$/;
        var finame = document.reg.firstname.value;
        var laname = document.reg.lastname.value;
        var vaccine = document.reg.vaccine.value;
        var check = document.reg.check1.checked;

        if(finame=="")
        {
            alert("First Name cannot be empty");
            return false;
        }
        if(pattern1.test(finame)==false)
        {
            alert("First Name should contain alphabets only");
            return false;
        }
        if(laname=="")
        {
            alert("Last Name cannot be empty");
            return false;
        }
        if(pattern1.test(laname)==false)
        {
            alert("Last Name should contain alphabets only");
            return false;
        }
        if(vaccine=="")
        {
            alert("Please select Vaccine type");
            return false;
        }
        if(check==false){
            alert("Please click the checkbox");
        }
        return true;
    }