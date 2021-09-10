import React from 'react'

function SignUpButton({signUp, text}) {
    return (
        <div>
            {!signUp?
            <button className="c-large-button trusted-cus__sign-up-button"><span>View more</span></button>:
            <button className="c-large-button trusted-cus__sign-up-button"><span>Sign up</span></button>
            }
        </div>
    )
}

export default SignUpButton
