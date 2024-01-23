import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          Welcome to the Blood Bank App, a dedicated platform that acts as a bridge between blood donors and those in need. Our homepage serves as the gateway to a community committed to saving lives, offering essential features and information to empower users and contribute to this lifesaving cause.

At the core of the Blood Bank App is a profound commitment to closing the gap between blood donors and recipients. Our intuitive interface creates a seamless experience, allowing users to effortlessly register, discover local blood donation events, and connect with potential donors. Whether you're an individual seeking blood or someone eager to make a difference through donation, our platform is designed to facilitate a smooth and efficient process.

The user-friendly registration process ensures that individuals can easily join our community, becoming either blood donors or recipients. This inclusivity reflects our dedication to making the app accessible to all who wish to contribute to the cause.

Our comprehensive donor database empowers users to search for potential blood donors in their local area, facilitating connections during emergencies or when specific blood types are urgently needed. This feature underscores our commitment to providing practical solutions and timely assistance.

Stay informed about local blood donation events and campaigns happening in your community through our app. We provide details about upcoming events, making it convenient for donors to contribute to organized donation drives and support community initiatives.

Real-time notifications keep users informed about urgent blood needs, upcoming events, and critical updates. This feature ensures that our community stays connected and can promptly respond to situations where their assistance is vital.

Donors and recipients can create personalized profiles, providing additional details such as blood type, medical history, and donation preferences. This information streamlines the matching process, ensuring accuracy and a timely response to requests.

Engage with a supportive community of like-minded individuals committed to saving lives. The community hub allows users to share their donation experiences, success stories, and words of encouragement. By fostering an environment of mutual support, we aim to create a strong sense of belonging and shared purpose.

Our Blood Bank App goes beyond being a platform; it is a lifeline connecting people with the power to make a meaningful impact. Join us in our mission to create a world where no one has to wait for the blood they need during critical moments. Download the Blood Bank App today and become a vital part of our lifesaving network!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;