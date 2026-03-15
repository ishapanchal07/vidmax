"use server";

import { currentUser } from "@clerk/nextjs/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function syncUser() {
    try {
        const user = await currentUser();

        if (!user) {
            return null;
        }

        const { data: existingUser } = await supabaseAdmin
            .from("users")
            .select("user_id")
            .eq("user_id", user.id)
            .single();

        if (!existingUser) {
            const email = user.emailAddresses[0]?.emailAddress ?? "";
            const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();

            const { data: newUser, error } = await supabaseAdmin
                .from("users")
                .insert({
                    user_id: user.id,
                    email: email,
                    name: name,
                })
                .select()
                .single();

            if (error) {
                console.error("Error creating user in Supabase:", error);
                return null;
            }

            console.log("Successfully synced new user to Supabase:", user.id);
            return newUser;
        }

        return existingUser;
    } catch (error) {
        console.error("Error syncing user to Supabase:", error);
        return null;
    }
}
