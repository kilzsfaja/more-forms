import React, {useState} from 'react'
// worked with Mann and Everett

const UserForm = () => {
    const [ firstName, setFirstName] = useState("");
    const [ lastName, setLastName] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");
    const [ firstNameError, setFirstNameError] = useState("");
    const [ lastNameError, setLastNameError] = useState("");
    const [ emailError, setEmailError] = useState("");
    const [ passwordError, setPasswordError] = useState("");
    const [ confirmPasswordError, setConfirmPasswordError] = useState("");

const handleChange = (e) => {
    const {name, value} = e.target;

    switch (name) {
        case 'firstName':
            setFirstName(value);
            setFirstNameError(value.length < 2 ? 'First name must be atleast 2 characters long.' : '');
            break;
        case 'lastName':
            setLastName(value);
            setLastNameError(value.length < 2 ? 'Last name must be atleast 2 characters long.' : '');
            break;
    
        case 'email':
            setEmail(value);
            setEmailError(value.length < 5 ? 'Email must be atleast 2 characters long.' : '');
            break;
    
        case 'password':
            setPassword(value);
            setPasswordError(value.length < 8 ? 'Password must be atleast 8 characters long.' : '');
            break;
    
        case 'confirmPassword':
            setConfirmPassword(value);
            setConfirmPasswordError(value !== password ? 'Passwords do not match.' : '');
            break;
        default:
            break;
    }
};

    return (
    <>
    <fieldset>
        <legend >Create Form:</legend>
        <form>
            <div>
                <label>First Name:</label><br />
                <input type="text" name="firstName" value={firstName} onChange={ handleChange }/>
                {firstNameError && (
                <div>
                <p style={{ color: 'red' }}>{firstNameError}</p>
                </div>
                )}
            </div>
            <div>
                <label>Last Name:</label><br />
                <input type="text" name="lastName" value={lastName} onChange={ handleChange }/>
                {lastNameError && (
                <div>
                <p style={{ color: 'red' }}>{lastNameError}</p>
                </div>
                )}
            </div>
            <div>
                <label>Email:</label><br />
                <input type="text" name="email" value={email} onChange={ handleChange }/>
                {emailError && (
                <div>
                <p style={{ color: 'red' }}>{emailError}</p>
                </div>
                )}
            </div>
            <div>
                <label>Password:</label><br />
                <input type="password" name="password" value={password} onChange={ handleChange }/>
                {passwordError && (
                <div>
                <p style={{ color: 'red' }}>{passwordError}</p>
                </div>
                )}
            </div>
            <div>
                <label>Confirm Password:</label><br />
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={ handleChange }/>
                {confirmPasswordError && (
                <div>
                <p style={{ color: 'red' }}>{confirmPasswordError}</p>
                </div>
                )}
            </div><br />
        </form>
    </fieldset>
    </>
)
}

export default UserForm