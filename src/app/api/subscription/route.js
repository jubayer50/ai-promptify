import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { getUserSession } from "@/lib/core/session";

export async function POST(req) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    const user = await getUserSession();

    if (!user) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }

    const { searchParams } = new URL(req.url);
    const redirectPath = searchParams.get("redirect");

    const price_id = "price_1Tkg63FP5Ht70T0dtUDe8Yco";

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email,
      metadata: {
        userId: user?.id,
        priceId: price_id,
        userName: user?.name,
        redirectPath: redirectPath,
      },
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: price_id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/plan/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
