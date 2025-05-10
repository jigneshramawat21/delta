import React, { useState, useEffect } from "react";

import axios from 'axios';

function ContactMessages() {
    
        const [messages, setMessages] = useState([]);
        const [error, setError] = useState('');
      
        const fetchMessages = async () => {
          try {
            const token = localStorage.getItem('token'); // JWT token stored after login
            const res = await axios.get('http://localhost:5000/api/contacts');
            setMessages(res.data);
          } catch (err) {
            setError('Failed to fetch messages');
            console.error(err);
          }
        };
      
        useEffect(() => {
          fetchMessages();
        }, []);


    return (
        <div className="container">
          <h3 className="mt-4 mb-3 text-danger ">Contact Messages</h3>
          {error && <p className="text-danger">{error}</p>}
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>NAME</th>
                <th>Email</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.length > 0 ? (
                messages.map((msg) => (
                  <tr key={msg._id}>
                    <td>{msg.name}</td>
                    <td>{msg.email}</td>
                    <td>{msg.message}</td>
                    <td>{new Date(msg.createdAt).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No Messages Yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    };
    
    export default ContactMessages;
    