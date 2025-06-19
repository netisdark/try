import { useState, useEffect } from "react";

export default function Dashboard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dashBoardlink = import.meta.env.VITE_DASH_LINK;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dashBoardlink, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const result = await response.json();

        if (response.ok) {
          setEmail(result.email);
          setName(result.name);
        } else {
          alert(result.message || 'Something went wrong.');
        }
      } catch (error) {
        alert(error.message || 'Fetch failed.');
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <p>Login successful, Email: {email}, Name: {name}</p>
  );
}
