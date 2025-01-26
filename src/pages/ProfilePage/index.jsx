import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useUserStore } from "../../store";
import { useState } from "react";

export default function ProfilePage() {
  const { jwtToken } = useUserStore();

  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("https://backend.lafibredudev.com/profile", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${jwtToken}`,
        },
      });
      const data = await response.json();
      if (data.data) {
        setData(data.data);
      }
    };
    loadData();
  }, [jwtToken]);

  return (
    <main className="container">
      <Header />
      <h2>Mon profil</h2>
      {data ? (
        <>
          <p>
            Voici ton adresse : {data?.address?.lastname}{" "}
            {data?.address?.firstname}
          </p>
        </>
      ) : (
        <p>Accès interdit</p>
      )}
      <Footer />
    </main>
  );
}
