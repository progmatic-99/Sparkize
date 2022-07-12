import { supabase } from "@/utils/supabaseClient";
import { useAuth } from "@/utils/authContext";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const UserHome: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    async function getUserDetails() {
      const { data, error } = await supabase
        .from("booking")
        .select(`created_at, source, destination`)
        .eq("booking.user_id", user?.id);
    }

    getUserDetails();
  });

  return <div></div>;
};

export default UserHome;
