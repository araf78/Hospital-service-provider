import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-3 gap-4 p-10">
      <div className="bg-green-100 border-2 rounded-lg border-zinc-600 p-5">
        <h2 className="font-bold mb-4">
          Q1. Difference between authorization and authentication
        </h2>
        <p>
          Authentication is the process of verifying who someone is, whereas
          authorization is the process of verifying what specific applications,
          files, and data a user has access to.So, what is the difference
          between authentication and authorization? Simply put, authentication
          is the process of verifying who someone is, whereas authorization is
          the process of verifying what specific applications, files, and data a
          user has access to. The situation is like that of an airline that
          needs to determine which people can come on board. The first step is
          to confirm the identity of a passenger to make sure they are who they
          say they are.
        </p>
      </div>
      <div className="bg-green-100 border-2 rounded-lg border-zinc-600 p-5">
        <h2 className="font-bold mb-4">
          Q2. Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p>
          Indeed, Firebase is a less technical and time-saving alternative to
          writing full-fledged backend code for dynamic apps. You might also
          want to consider leveraging this tool if you eventually wish to host
          and manage your app in the cloud. Being serverless, Firebase removes
          the need to worry about the technicalities of cloud server
          configuration. Usually, authentication by a server entails the use of
          a user name and password. Other ways to authenticate can be through
          cards, retina scans, voice recognition, and fingerprints.
        </p>
      </div>
      <div className="bg-green-100 border-2 rounded-lg border-zinc-600 p-5">
        <h2 className="font-bold mb-4">
          Q3.What other services does firebase provide other than
          authentication?
        </h2>
        <p>
          Firebase continues to innovate and dominate the backend as a service
          (BaaS) market. It has grown so much that it has become a key component
          of Google’s mobile strategy. I was a Firebase enthusiastic user in the
          past, but my concerns about its complexity and cost led me to explore
          other cloud alternatives. While Firebase offers an increasingly
          sophisticated array of services that takes care of various development
          requirements, it’s not always the easiest, fastest, or most affordable
          option. The article “Reasons Not to Use Firebase” also enlightened me
          about the risks of using Firebase.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
