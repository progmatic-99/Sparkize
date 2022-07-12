import { supabase } from "@/utils/supabaseClient";
import { useAuth } from "@/utils/authContext";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { protectedRoute } from "@/utils/protectedRoute";

const UserHome: NextPage = () => {
  const { user } = useAuth();

  useEffect(() => {
    async function getUserDetails() {
      const { data, error } = await supabase
        .from("booking")
        .select(`created_at, source, destination`)
        .eq("booking.user_id", user?.id);

      if (error) {
        console.error(error);
      }

      console.table(data);
    }

    getUserDetails();
  }, []);

  return <div></div>;
};

export default UserHome;

export const getServerSideProps = protectedRoute();
