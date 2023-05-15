"use client";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserProfile = ({ params }) => {
  const [posts, setPosts] = useState([]);
  const userId = params.id;
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    if (userId) fetchPosts();
  }, []);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName} personalized profile page`}
      data={posts}
    />
  );
};

export default UserProfile;
