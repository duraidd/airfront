import React from 'react'

function Textdata() {
    return (
        <form>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Job Title:
                <input type="text" value={jobTitle} onChange={e => setJobTitle(e.target.value)} />
            </label>
            <label>
                Company Name:
                <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} />
            </label>
            <label>
                Email Address:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Phone Number:
                <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
            </label>
            <label>
                Address:
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
            </label>
        </form>
    )
}

export default Textdata