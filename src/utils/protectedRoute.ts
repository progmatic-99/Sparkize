import { GetServerSideProps } from "next";
import { supabase } from "./supabaseClient";

export const protectedRoute: (
  inner?: GetServerSideProps
) => GetServerSideProps = (inner) => {
  return async (context) => {
    const { req } = context;
    const { user } = await supabase.auth.api.getUserByCookie(req);

    if (!user) {
      return { props: {}, redirect: { destination: "/" } };
    }

    if (inner) {
      return inner(context);
    }

    return { props: {} };
  };
};
