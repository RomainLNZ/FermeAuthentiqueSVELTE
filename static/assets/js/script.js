import Form from './classes/Form.js';
import User from './classes/content/User.js';

Form.iniForm();

const user = new User();


if (Form.list.createForm) {

    Form.list.createForm.bind('firstname', user.setFirstname);
    Form.list.createForm.bind('lastname', user.setLastname);
    Form.list.createForm.bind('email', user.setEmail);
    Form.list.createForm.bind('password', user.setPassword);


    Form.list.createForm.onSubmit(async () => {

        const response = await user.register();

        if (response === true) {

            document.getElementById('register_modal').classList.add('hidden');
            document.getElementById('login_btn').innerHTML = '<img src="assets/img/icons/account.png" alt="account"></img>';



        } else {
            for (const key in response) {
                Form.list.createForm.displayError(key, response[key]);
            }
        }
    });
}


if (Form.list.loginForm) {

    Form.list.loginForm.bind('email-login', user.setEmail);
    Form.list.loginForm.bind('password-login', user.setPassword);

    Form.list.loginForm.onSubmit(async () => {

        const response = await user.login();

        if (response === true) {

            document.getElementById('login_modal').classList.add('hidden');
            document.getElementById('login_btn').innerHTML = '<img src="assets/img/icons/account.png" alt="account"></img>';

            document.getElementById('login_btn').addEventListener('click', () => {
                location.href = "/profil.html";
            });

        } else {
            for (const key in response) {
                Form.list.loginForm.displayError(key, response[key]);
            }
        }
    });
}

const response = await user.islogged();


document.getElementById('userFirstname').value = user.firstname;
document.getElementById('userLastname').value = user.lastname;
document.getElementById('userEmail').value = user.email;

console.log(user.email);
console.log(user.firstname);
console.log(user.lastname);

// document.getElementById('edit').addEventListener('click', () => {

//     let inputs = document.getElementsByTagName('input');
//     for (let i = 0; i < inputs.length; i++){
//         inputs[i].disabled = false;
//     }

// })


// document.getElementById('editFirstname').addEventListener('click', () => {

//     let disabled = true;

//     (disabled == true) ? document.getElementById('userFirstname').disabled = false : document.getElementById('userFirstname').disabled = true;

//     disabled = false;

// })

const editProfil = document.getElementById('editProfil');






if (Form.list.editProfil) {

    const buttons = editProfil.getElementsByTagName('button');


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (e) => {
            e.preventDefault();
            const attribute = buttons[i].getAttribute('target');
            const input = document.getElementById(attribute);
            if (input.disabled == true) {
                input.disabled = false;
                input.focus();
                input.select();
                //mettre image check
            } else {
                const type = buttons[i].getAttribute('update');
                update(type);
                input.disabled = true;
            }
        });
    }


    Form.list.editProfil.bind('userFirstname', user.setFirstname);
    Form.list.editProfil.bind('userLastname', user.setLastname);
    Form.list.editProfil.bind('userEmail', user.setEmail);

    const update = async (type) => {
        const response = await user.update(type);
    }

}
// else {
//     for (const key in response) {
//         Form.list.editProfil.displayError(key, response[key]);
//     }

// };