import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Logout() {
  const [isLoggedOut, setLoggedOut] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const logout = async () => {
      // Perform any additional cleanup or API calls if needed
      // For simplicity, let's just clear local storage
      localStorage.clear();
      setLoggedOut(true);
    };

    logout();
  }, []);

  useEffect(() => {
    if (isLoggedOut) {
      // Redirect to home page after logout
      window.location.href = "/";
      //   history("/");
    }
  }, [isLoggedOut]);

  return (
    <div>
      {/* You can add a loading spinner or message here if needed */}
      Logging out...
    </div>
  );
}
