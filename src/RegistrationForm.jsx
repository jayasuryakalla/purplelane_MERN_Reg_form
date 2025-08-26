import { useState } from 'react';
import { TextField, Button } from '@mui/material';

function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Step 1: Check if all required fields are filled
    if (!fullName || !email || !phone || !address) {
      alert('Please fill all required fields');
      return;
    }

    alert(
      `Successfully submitted:\nFull Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`
    );

    // Clear all fields
    setFullName('');
    setEmail('');
    setPhone('');
    setAddress('');
  }

  function handleReset() {
    setFullName('');
    setEmail('');
    setPhone('');
    setAddress('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <TextField
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          fullWidth
          margin="normal"
        />

        <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
          Submit
        </Button>

        <Button type="reset" variant="outlined" color="secondary">
          Reset
        </Button>
      </form>
    </div>
  );
}

export default RegistrationForm;
