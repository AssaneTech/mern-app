import React from 'react';

const AboutPage = () => {
  return (
    <div 
      style={{ 
        padding: "5%",
        backgroundColor: "#1f1f1f", 
        borderRadius: "10px",
        color: "#e6e6e6",
        lineHeight: "1.7",
        textAlign: "justify",
        maxWidth: "900px",
        margin: "40px auto"
      }}
    >
      <p>
        This MERN application is a full-stack web project designed to 
        demonstrate the power of modern JavaScript technologies in 
        building dynamic, responsive, and scalable web applications. 
        It leverages the MERN stack, which consists of MongoDB, Express, 
        React, and Node.js, offering a robust and efficient development 
        environment where the backend and frontend seamlessly interact.
      </p>

      <p>
        At its core, the application provides a product management system 
        where users can create, view, update, and delete products. Each 
        product contains key attributes such as name, price, and an image 
        URL, making it a practical example for e-commerce, inventory 
        tracking, or content management use cases.
      </p>

      <p>
        On the frontend, the app uses React for building interactive user 
        interfaces. With React Router, users can easily navigate between 
        different pages like the home page, product creation form, and 
        other sections. The UI is enhanced with Bootstrap and Chakra UI, 
        ensuring the layout is both responsive and visually appealing 
        across devices. Controlled input components are used to manage 
        form data, ensuring that every keystroke updates the application’s 
        state in real time.
      </p>

      <p>
        On the backend, the app runs on Node.js with Express.js serving as 
        the framework to manage routes and APIs. The server exposes RESTful 
        endpoints that handle requests for product creation, retrieval, 
        updates, and deletion. MongoDB serves as the database, storing 
        product details in a flexible and scalable document-based format. 
        This allows for rapid prototyping and smooth data handling, 
        especially when dealing with JSON objects.
      </p>

      <p>
        The app also integrates Zustand, a lightweight state management 
        library for React, to maintain a clean global state across 
        components. This helps synchronize data between the frontend UI 
        and backend API efficiently. For instance, once a product is 
        created, the app immediately updates the state and renders the new 
        product on the home page without requiring a full page reload.
      </p>

      <p>
        One of the key strengths of this application is its scalability. 
        Thanks to Node.js and MongoDB, the backend is capable of handling 
        numerous concurrent requests while maintaining fast query 
        performance. The modular code structure ensures that developers 
        can easily add new features, such as authentication, advanced 
        filtering, or integration with external services.
      </p>

      <p>
        Furthermore, this MERN app is an ideal starting point for developers 
        who want to understand the end-to-end process of building a web 
        application. It illustrates how the frontend communicates with the 
        backend, how the backend interacts with the database, and how state 
        is shared and managed across different layers.
      </p>

      <p>
        In summary, this project highlights:
        A modern, component-driven React frontend with routing and state management.
        A RESTful Express backend built on Node.js for API handling.
        MongoDB integration for flexible and scalable data storage.
        UI enhancements through Bootstrap and Chakra UI.
        Real-time updates and controlled forms for smooth user experience.
      </p>

      <p>
        This MERN application can be expanded into a complete e-commerce 
        platform, an internal company tool, or any project requiring CRUD 
        (Create, Read, Update, Delete) functionality. It is a perfect 
        demonstration of how JavaScript technologies can be combined to 
        build powerful, maintainable, and production-ready applications.
      </p>
    </div>
  );
};

export default AboutPage;
